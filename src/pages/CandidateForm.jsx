import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  age: Yup.number().required("Age is required").positive().integer(),
  party: Yup.string().required("Party is required"),
});

function CandidateForm() {
  return (
    <div>
      <h1>Candidate Registration</h1>
      <Formik
        initialValues={{ name: "", age: "", party: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          // Handle form submission, e.g., send to backend
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <Field
                name="name"
                type="text"
                placeholder="Candidate Name"
                className="w-full p-2 border rounded-md"
              />
              {errors.name && touched.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div>
              <Field
                name="age"
                type="number"
                placeholder="Age"
                className="w-full p-2 border rounded-md"
              />
              {errors.age && touched.age && (
                <p className="text-red-500 text-sm">{errors.age}</p>
              )}
            </div>
            <div>
              <Field
                name="party"
                type="text"
                placeholder="Political Party"
                className="w-full p-2 border rounded-md"
              />
              {errors.party && touched.party && (
                <p className="text-red-500 text-sm">{errors.party}</p>
              )}
            </div>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-md">
              Register Candidate
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CandidateForm;
