import { FormikErrors, useFormik } from 'formik'

import '../styles/styles.css'

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const validate = (values: FormValues) => {

        const errors: FormikErrors<FormValues> = {};
        if (!values.firstName) {
            errors.firstName = 'Required';
        } else if (values.firstName.trim().length > 15) {
            errors.firstName = 'Must be 15 characters or less'
        }
        if (!values.lastName) {
            errors.lastName = 'Required';
        } else if (values.lastName.trim().length > 15) {
            errors.lastName = 'Must be 15 characters or less'
        }
        if (!values.email) {
            errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    }
    // touched sirve para detectat que toque el campo
    //handleBlur sirve para detectar el error cuando entro y salgo del campo
    const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validate
    })

    return (
        <div>
            <h1>Formik Basic Tutorial</h1>
            <form noValidate onSubmit={handleSubmit} method='post'>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    name='firstName'
                    onChange={handleChange}
                    value={values.firstName}
                    onBlur={handleBlur}
                />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    name='lastName'
                    onChange={handleChange}
                    value={values.lastName}
                    onBlur={handleBlur}
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    name='email'
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}
                <button type='submit'>Submit</button>
            </form>
        </div>

    )
}
