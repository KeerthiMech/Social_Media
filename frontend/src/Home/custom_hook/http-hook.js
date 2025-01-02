import { useCallback, useEffect, useReducer, useRef, useState } from "react";

export const useHTTPcommunicator = () => {
  const [isloading, setIsloading] = useState("false");
  const [error, seterror] = useState("");
  const activerequests = useRef([]);

  const sendrequest = useCallback(async (url, method, headers = {}, body) => {
    try {
      setIsloading(true);
      const httpabortctrl = new AbortController();
      activerequests.current.push(httpabortctrl);
      const response = fetch(url, {
        method,
        headers,
        body,
        signal: httpabortctrl.signal,
      });
      const responsedata = await response.json();

      activerequests.current = activerequests.current.filter(
        (reqCtrl) => reqCtrl !== activerequests
      );
      if (!response.ok) {
        throw responsedata.message;
      }
      setIsloading(false);
      return responsedata;
    } catch (err) {
      seterror(err.message);
      setIsloading(false);
      throw error;
    }
  }, []);
  const clearerror = () => {
    seterror(null);
  };
  useEffect(() => {
    return () => {
      activerequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);
  return { isloading, error, sendrequest, clearerror };
};
