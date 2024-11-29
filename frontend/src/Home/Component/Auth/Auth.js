import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { Formvalidator } from "../../Common_Comp/Formvalidator";

export default function Auth() {
  return (
    <Formik
      initialValues={{
        name :"",
        userid : "",
        username :"",
        password :"",
        confirmpassword :"",

              }}
      validationSchema={Formvalidator}
              >
     <Form>
      <Field className="form-control" placeholder="Name" name="name"type="text "/>
      <ErrorMessage name="name"/>
      <Field className="form-control" placeholder="mobilenumber or Mailid" name="userid" type="text "/>
      <Field className="form-control" placeholder="Username" name="username" type="text "/>
      <Field className="form-control" placeholder="password" name="password" type="password"/>
      <Field className="form-control" placeholder="Profile_pic" type="file" name="profile_pic"/>
      <button type="submit">check validation</button>
     </Form>
    </Formik>
  );
}
