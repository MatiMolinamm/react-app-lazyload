import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { MyTextInput } from '../components'


import '../styles/styles.css'

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    name: Yup.string().max(15, 'max 15 caracteres').required('requerido').min(2, 'minimo 2 caracteres')
                    ,
                    email: Yup.string().email('email no valido').required('requerido'),
                    password1: Yup.string().min(6, 'minimo 6 caracteres').required('requerido'),
                    password2: Yup.string().oneOf([Yup.ref('password1')], 'Las contraseñas no coinciden').required('requerido')
                })}>
                {
                    (formik) => {
                        return (
                            <Form >

                                <MyTextInput label='Nombre' name='name' placeholder='Nombre' />
                                <MyTextInput label='Email' name='email' />
                                <MyTextInput label='Contraseña' name='password1' type='password' />
                                <MyTextInput label='Confirmar Contraseña' name='password2' type='password' />
                                <button type='submit'>Submit</button>
                            </Form>
                        )
                    }
                }

            </Formik>

        </div>
    )
}
