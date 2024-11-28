import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

export default function Auth() {
  return (
    <Formik>
     <Form onSubmit={SubmitEvent}>
      <Field className="form-control" placeholder="Name" name="name"type="text "/>
      <Field className="form-control" placeholder="mobilenumber or Mailid" name="userid" type="text "/>
      <Field className="form-control" placeholder="password" name="password" type="password"/>
      <Field className="form-control" placeholder="Name" type="text "/>
     </Form>
    </Formik>
  );
}
