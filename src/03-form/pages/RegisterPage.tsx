
import '../styles/styles.css'
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {
    const { formData, onChange, resetForm, isValidEmail } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    })
    const { name, email, password1, password2 } = formData
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        //alert('enviar?')
        event.preventDefault()
    }
    return (
        <div>
            <h1>Register Page</h1>
            <form action='http://localhost:3008/api/users/prueba' method='post' noValidate onSubmit={(event) => onSubmit(event)} >
                <input
                    type="text" placeholder="Name" value={name} onChange={onChange} name='name' className={`${name.trim().length <= 0 && 'has-error'}`} />
                {name.trim().length <= 0 && <span>Este campo es necesario</span>}

                <input type="email" placeholder="Email" value={email} onChange={onChange} name='email' className={`${!isValidEmail(email) && 'has-error'}`} />
                {!isValidEmail(email) && <span>Email no válido</span>}

                <input type="password" placeholder="Password" value={password1} onChange={onChange} name='password1' />
                {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password1.trim().length > 0 && password1.trim().length < 6 && <span>La contraseña debe contener mas de 6 caracteres</span>}
                <input type="password" placeholder="Repeat Password" value={password2} onChange={onChange} name='password2' />
                {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password2.trim().length > 0 && password1 !== password2 && <span>Las contraseña no coinciden</span>}
                <button type="submit">Create</button>
                <button onClick={resetForm}>Reset          </button>
            </form>
        </div>
    )
}
