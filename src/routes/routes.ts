import { Home } from '../00-components/Home';
import { About } from '../00-components/About';
import { Users } from '../00-components/Users';


type JSXComponent = () => JSX.Element;

interface Routes {
  to: string;
  path: string;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}


export const routes: Routes[] = [
  { to: "/home", path: "home", Component: Home, name: "Home" },
  { to: "/about", path: "about", Component: About, name: "Abaout" },
  { to: "/users", path: "users", Component: Users, name: "Users" },
];
