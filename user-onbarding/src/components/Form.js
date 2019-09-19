import React, {useState} from "react";
import {withFormik, Form, Field} from "formik"
import axios from "axios"
import * as Yup from "yup"

function SignUpForm (){
    // const [user, setUser] = useState({ username: "", email:"", password: "", checkbox: })
    return(
        <Form>
            <label htmlFor="name"/>
            <Field id="name" type="text" name="name" placeholder="Name">    </Field>
            <label htmlFor="email"/>
            <Field id="email" type="email" name="email" placeholder="Email">   </Field>
            <label htmlFor="password"/>
            <Field id="password" type="password" name="password" placeholder="Password">   </Field>
            <label htmlFor="tosCheckbox"/>
            <Field id="tosCheckbox" type="checkbox" name="termsOfService">    </Field>
            <button>Submit Form</button>
        </Form>
        
    )
}


export default SignUpForm