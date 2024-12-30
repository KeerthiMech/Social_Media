import { createContext, useReducer, useState } from "react";
import { Formik, Field, Form, ErrorMessage, validateYupSchema } from "formik";

import { Formvalidator } from "../../Common_Comp/Formvalidator";
import { useHTTPcommunicator } from "../../custom_hook/http-hook";

export const Authcontext= createContext();
export const Authcontextprovider = (props,values)=> {
    const [switchbutton,setswtichbutton] = useState("Login");
    const[registereduser,isregistereduser] = useState(true);
    const{name,mailId,username,password} = values;
    const{isloading, error, sendrequest, clearerror} = useHTTPcommunicator();
    const formdata = new FormData();
  formdata.append('name',name);
  formdata.append('mailId',mailId);
  formdata.append('username',username);
  formdata.append('password',password);
    const initialState = {
      req_Type: "ws://localhost:8080/signup"
    };
    function reducer(state,action) {
      switch(action.type){
          case "LOGIN":
              return {req_Type:"ws://localhost:8080/login"};
          case "SIGNUP":
              return {req_Type:"ws://localhost:8080/signup"};
          default:
              return state;
      }
  }
    const[state,dispatch] = useReducer(reducer,initialState);
    
    function Toggle() {
        isregistereduser(prevState => !prevState);
        setswtichbutton(switchbutton === "Login" ? "Signup" : "Login");
        dispatch(switchbutton === "Login" ? {type:"SIGNUP"} : {type:"LOGIN"});
    }
    async function Loginhandler() {
      try{
      await sendrequest('htttp:localhost:3030/post','GET',JSON.stringify({mailId : mailId,password : password}));
    }catch(err){}
  }
    async function SigninHandler() {
      try{
      const responsedata = await sendrequest('htttp:localhost:3030/post','POST',
        JSON.stringify({name : name,mailId : mailId,username : username,password : password}),
        {
          'Content-Type' : 'application/json'
        }
      )
      
      }catch(err){
      }
    }
    const formrenderer = () => {
        if(!registereduser) {
          return (
           <>
          <Formik name="signup"
             initialValues={{
               name :"",
               mailId : "",
               username :"",
               password :"",
               confirmpassword :"",
       
                     }}
             validationSchema={Formvalidator}
             onSubmit={SigninHandler}
             validateOnChange={true}
             validateOnBlur={true}
                     >
             {({ errors, touched }) => (
            <Form>
             <Field className="form-control" placeholder="Name" name="name"type="text "/>
             <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
             <Field className="form-control" placeholder="mobilenumber or Mailid" name="mailId" type="text "/>
             <ErrorMessage name="mailId" component="div" style={{ color: 'red' }} />
             <Field className="form-control" placeholder="Username" name="username" type="text "/>
             <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
             <Field className="form-control" placeholder="password" name="password" type="password"/>
             <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
             <Field className="form-control" placeholder="Profile_pic" type="file" name="profile_pic"/>
             <ErrorMessage name="Profile_pic" component="div" style={{ color: 'red' }} />
             <button type="submit">Create account</button>
            </Form>
             )}
           </Formik>
           <h3>Already have a account?</h3>
           </>
            );
           
        }
          if(registereduser) {
          return (
          <div>
          <Formik name="signup"
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
           <button type="submit">Login</button>
          </Form>
           )}
         </Formik>
         <h3>Don't have a account</h3>
         </div> );
        }
       }
    return(
        <div>
        <Authcontext.Provider value={{ Toggle,switchbutton,formrenderer,registereduser,req_Type : state.req_Type}}> 
            {props.children}
        </Authcontext.Provider>
        </div>
    );
}