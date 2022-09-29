import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,

} from 'react-router-dom';
import { FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage, RegisterFormikPage, DynamicForm } from '../03-form/pages'
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/register'>Register Page</NavLink></li>
            <li><NavLink to='/register-formik'>Register Formik</NavLink></li>
            <li><NavLink to='/formik-basic'>Formik Basic</NavLink></li>
            <li><NavLink to='/formik-yup'>Formik Yup Page</NavLink></li>
            <li><NavLink to='/formik-components'>Formik Components</NavLink></li>
            <li><NavLink to='/formik-abstraction'>Formik Abstraction</NavLink></li>
            <li><NavLink to='/dynamicform'>Dynamic Form</NavLink></li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/register-formik' element={<RegisterFormikPage />} />
          <Route path='/formik-basic' element={<FormikBasicPage />} />
          <Route path='/formik-yup' element={<FormikYupPage />} />
          <Route path='/formik-components' element={<FormikComponents />} />
          <Route path='/formik-abstraction' element={<FormikAbstraction />} />
          <Route path='/dyamicform' element={<DynamicForm />} />
        </Routes>
      </div>
    </Router >
  );
}