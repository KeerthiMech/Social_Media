import { createContext, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { Formvalidator } from "../../Common_Comp/Formvalidator";

export const Authcontext= createContext();
export const Authcontextprovider = (props)=> {
    const [switchbutton,setswtichbutton] = useState("Login");
    const[registereduser,isregistereduser] = useState(false);
    function Toggle() {
        isregistereduser(!registereduser);
        setswtichbutton(switchbutton === "Login" ? "Signup" : "Login");
    }
    const formrenderer = () => {
        if(!registereduser) {
          return (
           <>
          <Formik name="signup"
             initialValues={{
               name :"",
               userid : "",
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
           <button type="submit" onClick={Loginhandler}>Login</button>
          </Form>
           )}
         </Formik>
         <h3>Don't have a account</h3>
         </div> );
        }
       }
    return(
        <div>
        <Authcontext.Provider value={{ Toggle,switchbutton,formrenderer }}>
            {props.children}
        </Authcontext.Provider>
        </div>
    );
}