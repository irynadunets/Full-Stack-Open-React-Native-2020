import React, { useEffect, useState } from "react";
import { useField, Form, FormikProps, Formik } from 'formik';
import { Text, TextInput } from "react-native";
import * as yup from 'yup';

 interface Values {
   login: string;
   password: string;
 }

 const MyTextField = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const [showError, setShowError] = useState(false);
  console.log(showError);

  useEffect(() => {
    if(meta.touched && meta.error) setShowError(true);
  }, [meta.touched && meta.error]);

  return (
    <>
    <TextInput
      onChangeText={(value) => helpers.setValue(value)}
      onBlur={() => helpers.setTouched(true)}
      value={field.value}
      error={showError}
      {...props}
    />
      {showError && <Text style={{ padding: 10, margin: 30, fontSize: 40, borderRadius:10, color: 'red'}}>{meta.error}</Text>}
    </>
  );
};

 const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

 const SignIn = () => (
   <div>
     <Formik
       initialValues={{
         username: '',
         password: '',
       }}
       onSubmit={(values, actions) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }, 1000);
       }
   }
   validationSchema={validationSchema}
     >
       {
         (props: FormikProps<Values>) => (
          <Form style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column'}}>
             <MyTextField name="username" type="text" placeholder="Username" style={{ padding: 10, margin: 30, fontSize: 40, height: 80,
                border: props.error ? "2px solid #d73a4a" : "2px solid grey", borderRadius:10, backgroundColor: 'white', color: 'grey'}} />
             <MyTextField name="password" type="text" placeholder="Password" secureTextEntry={true} keyboardType="default" style={{ padding: 10, margin: 30, fontSize: 40, height: 80,
                border: props.error ? "2px solid #d73a4a" : "2px solid grey", borderRadius:10, backgroundColor: 'white', color: 'grey'}}/>
             <button style={{ padding: 10, margin: 30, fontSize: 40, height: 110, borderRadius:10, backgroundColor: 'blue', color: 'white'}} type="submit">Sign In</button>
         </Form>
       )}
     </Formik>
   </div>
 );

 export default SignIn;
