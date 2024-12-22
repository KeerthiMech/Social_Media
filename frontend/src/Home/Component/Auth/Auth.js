import React, { useContext, useState } from "react";
import { Formik, Field, Form, ErrorMessage, validateYupSchema } from "formik";

import { Formvalidator } from "../../Common_Comp/Formvalidator";
import { useHTTPcommunicator } from "../../custom_hook/http-hook";
import Authcontextprovider,{Authcontext} from "./Authcontextprovider";

export default function Auth() {
  let authform;
  const {login,Toggle} = useContext(Authcontext);
  const [switchbutton,setswtichbutton] = useState("Login");

 async function Authhandler(values) {
  const{name,userid,username,password} = values;
  //const{isloading, error, sendrequest, clearerror} = useHTTPcommunicator();
  try{
    /* const formdata = new FormData();
  formdata.append('name',name);
  formdata.append('userid',userid);
  formdata.append('username',username);
  formdata.append('password',password);
  const response = await sendrequest('htttp:localhost:3030/post','POST',
    formdata,
    {
      'Content-Type' : 'application/json'
    }
  )
  }catch(err){
  }
  values={name :"",
    userid : "",
    username :"",
    password :"",
    confirmpassword :"",};
} */
const ws = new WebSocket('htttp:localhost:3030/post');
ws.onopen=() => {
  console.log("connection active");
}
ws.onerror=(error)=>{
  alert("unable to establish web socket connection");
}
if(ws && ws.readyState == WebSocket.OPEN) {
  const responsedata = {type:'POST_MESSAGE',content:values};
  ws.onmessage(values);
}
  }catch(err){}
}
function Loginhandler() {
  console.log("login trigerred");
}
 if(login) {
   authform =(<Formik name="signup"
      initialValues={{
        name :"",
        userid : "",
        username :"",
        password :"",
        confirmpassword :"",

              }}
      validationSchema={Formvalidator}
      onSubmit={Authhandler}
      validateOnChange={true}
      validateOnBlur={true}
              >
      {({ errors, touched }) => (
     <Form>
      <Field className="form-control" placeholder="Name" name="name"type="text "/>
      <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
      <Field className="form-control" placeholder="mobilenumber or Mailid" name="userid" type="text "/>
      <ErrorMessage name="userid" component="div" style={{ color: 'red' }} />
      <Field className="form-control" placeholder="Username" name="username" type="text "/>
      <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
      <Field className="form-control" placeholder="password" name="password" type="password"/>
      <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
      <Field className="form-control" placeholder="Profile_pic" type="file" name="profile_pic"/>
      <ErrorMessage name="Profile_pic" component="div" style={{ color: 'red' }} />
      <button type="submit" onClick={Authhandler}>check validation</button>
     </Form>
      )}
    </Formik>
     );
     <h3>Already have a account Login instead?</h3>
     setswtichbutton("Login");
 }
 if(!login) {
   authform =(<Formik name="signup"
    initialValues={{
      name :"",
      userid : "",
      username :"",
      password :"",
      confirmpassword :"",

            }}
    validationSchema={Formvalidator}
    onSubmit={Loginhandler}
    validateOnChange={true}
    validateOnBlur={true}
            >
    {({ errors, touched }) => (
   <Form>
    <Field className="form-control" placeholder="mobilenumber or Mailid" name="userid" type="text "/>
    <ErrorMessage name="userid" component="div" style={{ color: 'red' }} />
    <Field className="form-control" placeholder="password" name="password" type="password"/>
    <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
    <button type="submit" onClick={Loginhandler}>Login</button>
   </Form>
    )}
  </Formik> );
  <h3>Don't have a account? Maybe Create One?</h3>
  setswtichbutton("Signin");
 }

  return (
    <React.Fragment>
      {authform}
      <button onClick={Toggle}>{switchbutton}</button>
    </React.Fragment>
  );
}
