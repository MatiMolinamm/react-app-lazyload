import { useFormik } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikYupPage = () => {



    const { handleChange, values, handleSubmit, errors, touched, handleBlur, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, 'max 15 caracteres').required('requerido')
            ,
            lastName: Yup.string().max(15, 'max 15 caracteres').required('requerido'),
            email: Yup.string().email('email no valido').required('requerido')
        })
    })

    return (
        <div>
            <h1>Formik Yup Tutorial</h1>
            <form noValidate onSubmit={handleSubmit} method='post'>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    //     name='firstName'          ///// todpo esto reemplazado por el getFieldProps
                    //     onChange={handleChange}
                    //     value={values.firstName}
                    //     onBlur={handleBlur}
                    // 
                    {...getFieldProps('firstName')}
                />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    {...getFieldProps('lastName')}
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    {...getFieldProps('email')}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}
                <button type='submit'>Submit</button>
            </form>
        </div>

    )
}
