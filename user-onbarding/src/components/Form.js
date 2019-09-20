import React, {useEffect} from "react";
import {withFormik, Form, Field} from "formik"
import axios from "axios"
import * as Yup from "yup"

function SignUpForm ({setUser, values, errors, touched, status}){
    useEffect(() => {
        if(status){setUser(user => [...user, status])}
    }, [status])
    return(
        <Form>
            <label htmlFor="name">Username</label>
            <Field id="name" type="text" name="username" placeholder="User Name"/>    
            {touched.username && errors.username && (<p className="error">{errors.username}</p>)}
            
            <label htmlFor="email">Email</label>
            <Field id="email" type="email" name="email" placeholder="Email"/>   
            {touched.email && errors.email && (<p className="error">{errors.email}</p>)}

            <label htmlFor="password">Password</label>
            <Field id="password" type="password" name="password" placeholder="Password"/>
            {touched.password && errors.password && (<p className="error">{errors.password}</p>)}

            <label htmlFor="tosCheckbox">Terms of Service</label>
            <Field id="tosCheckbox" type="checkbox" name="termsOfService" checked ={values.termsOfService} />    
            
            <button>Submit Form</button>
        </Form>
        
    )
}
const FormikSignUpForm = withFormik({
    validationSchema: Yup.object().shape({
        username: Yup.string().required("You must indicate a username"),
        email: Yup.string().required().email(),
        password: Yup.string().required("minimum 8 characters including 1 Capital Letter and one Number").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, { excludeEmptyString: true, message:"minimum 8 characters including 1 Capital Letter and one Number" })
      }),
    mapPropsToValues({ username, email, password, termsOfService }) {
      return {
        name: username || "",
        email: email ||"",
        password: password || "",
        termsOfService: termsOfService || false        
      };
    },
    handleSubmit(values, {setStatus}) {
        axios
        .post("https://reqres.in/api/users_", values)
        .then(results => {
            console.log(results)
            setStatus(results.data);
        })
        .catch(error =>{
            console.log("error did not post data correctly", error);
        })
        console.log(values)
        //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
      }
    })(SignUpForm);

export default FormikSignUpForm