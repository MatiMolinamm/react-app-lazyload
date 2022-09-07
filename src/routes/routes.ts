import { lazy } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-Lazyload/Pages";

type JSXComponent = () => JSX.Element;

interface Routes {
  to: string;
  path: string;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}
const Lazy1 = lazy(
  () => import(/*webpackChunkNmae: "Lazy1"*/ "../01-Lazyload/Pages/LazyPage1")
);
const Lazy2 = lazy(
  () => import(/*webpackChunkNmae: "Lazy2"*/ "../01-Lazyload/Pages/LazyPage2")
);
const Lazy3 = lazy(
  () => import(/*webpackChunkNmae: "Lazy3"*/ "../01-Lazyload/Pages/LazyPage3")
);

export const routes: Routes[] = [
  { to: "/lazy1", path: "lazy1", Component: Lazy1, name: "Lazy 1" },
  { to: "/lazy2", path: "lazy2", Component: Lazy2, name: "Lazy 2" },
  { to: "/lazy3", path: "lazy3", Component: Lazy3, name: "Lazy 3" },
];