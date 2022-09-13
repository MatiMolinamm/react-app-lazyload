
import { About } from '../00-components/About';
import { Users } from '../00-components/Users';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';


type JSXComponent = () => JSX.Element;

interface Routes {
  to: string;
  path: string;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}


export const routes: Routes[] = [
  { to: "/shopping", path: "shopping", Component: ShoppingPage, name: "Shopping" },
  { to: "/about", path: "about", Component: About, name: "Abaout" },
  { to: "/users", path: "users", Component: Users, name: "Users" },
];
