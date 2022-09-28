import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'



export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobTypes: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string().max(15, 'max 15 caracteres').required('requerido')
                    ,
                    lastName: Yup.string().max(15, 'max 15 caracteres').required('requerido'),
                    email: Yup.string().email('email no valido').required('requerido'),
                    terms: Yup.boolean().oneOf([true], 'Debe aceptar las condiciones'),
                    jobTypes: Yup.string().required('Requerido').notOneOf(['it-junior'], 'Esta opcion no es valida')
                })}
            >
                {
                    (formik) => {
                        return (
                            <Form >
                                <label htmlFor="firstName">First Name</label>
                                <Field name='firstName' type='text'
                                />
                                <ErrorMessage name='firstName' component='span' />
                                <label htmlFor="lastName">Last Name</label>
                                <Field name='lastName' type='text'
                                />
                                <ErrorMessage name='lastName' component='span' />
                                <label htmlFor="email">Email address</label>
                                <Field name='email' type='text'
                                />
                                <ErrorMessage name='email' component='span' />
                                <label htmlFor="jobTypes">Job type</label>
                                <Field name='jobTypes' as='select'>
                                    <option value='' >Pick something</option>
                                    <option value='developer' >Developer</option>
                                    <option value='it-senior' >it-Senior</option>
                                    <option value='it-junior' >it-Jr</option>

                                </Field>
                                <ErrorMessage name='jobTypes' component='span' />
                                <label >
                                    <Field name='terms' type='checkbox' />
                                    Terms and conditions
                                </label>
                                <ErrorMessage name='terms' component='span' />
                                <button type='submit'>Submit</button>
                            </Form>
                        )
                    }
                }
            </Formik>


        </div>

    )
}