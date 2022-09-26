import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,

} from 'react-router-dom';
import { RegisterPage } from '../03-form/pages/RegisterPage';
import { FormikBasicPage } from '../03-form/pages/FormikBasicPage';
import { FormikYupPage } from '../03-form/pages/FormikYupPage';
import { FormikComponents } from '../03-form/pages/FormikComponents'
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
            <li><NavLink to='/formik-basic'>Formik Basic</NavLink></li>
            <li><NavLink to='/formik-yup'>Formik Yup Page</NavLink></li>
            <li><NavLink to='/formik-components'>Formik Components</NavLink></li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/formik-basic' element={<FormikBasicPage />} />
          <Route path='/formik-yup' element={<FormikYupPage />} />
          <Route path='/formik-components' element={<FormikComponents />} />
        </Routes>
      </div>
    </Router >
  );
}