import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { MyCheckbox, MySelect, MyTextInput } from '../components'

import '../styles/styles.css'



export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>
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
                            <Form action='www.eldiario.com' method='get'>

                                <MyTextInput label='First Name' name='firstName' /> {/*OPTIMIZADO*/}

                                <label htmlFor="lastName">Last Name</label>
                                <Field name='lastName' type='text'
                                />
                                <ErrorMessage name='lastName' component='span' />

                                <label htmlFor="email">Email address</label>
                                <Field name='email' type='text'
                                />
                                <ErrorMessage name='email' component='span' />

                                <MySelect label='Jobs Types' name='jobTypes'>
                                    <option value='' >Pick something</option>
                                    <option value='developer' >Developer</option>
                                    <option value='it-senior' >it-Senior</option>
                                    <option value='it-junior' >it-Jr</option>
                                </MySelect>

                                <MyCheckbox label='Terms and conditions' name='terms' />

                                {/* <label >
                                    <Field name='terms' type='checkbox' />
                                    Terms and conditions
                                </label>
                                <ErrorMessage name='terms' component='span' /> */}
                                <button type='submit'>Submit</button>
                            </Form>
                        )
                    }
                }
            </Formik>


        </div>

    )
}
