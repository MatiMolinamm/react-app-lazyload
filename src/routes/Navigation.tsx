import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';
import { routes } from './routes';


import logo from '../logo.svg';



export const Navigation = () => {
  return (
    <Router>

      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            {routes.map(({ path, to, name }) => {
              return (< li >
                <NavLink key={path} to={to} className={({ isActive }) => isActive ? "nav-active" : ''}>
                  {name}</NavLink>
              </li>)
            })}

          </ul>
        </nav>


        <Routes>
          {routes.map((route) => { return (<Route key={route.path} path={route.path} element={<route.Component />} />) })}



        </Routes>
      </div>
    </Router >
  );
}