import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: JSXComponent | LazyExoticComponent<JSXComponent>,
    name: string;
}

const ModulePage1 = lazy(() => import('../module1/pages/ModulePage1'));
const ModulePage2 = lazy(() => import('../module1/pages/ModulePage2'));
const ModulePage3 = lazy(() => import('../module1/pages/ModulePage3'));


export const routes: Route[] = [
    {
        to: 'modulepage1',
        path: 'modulepage1',
        Component: ModulePage1,
        name: 'Module Page 1',
    },
    {
        to: 'modulepage2',
        path: 'modulepage2',
        Component: ModulePage2,
        name: 'Module Page 2'
    },
    {
        to: 'modulepage3',
        path: 'modulepage3',
        Component: ModulePage3,
        name: 'Module Page 3'
    }
]