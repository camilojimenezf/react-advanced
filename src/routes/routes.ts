import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from '../module/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: JSXComponent | LazyExoticComponent<JSXComponent>,
    name: string;
}

const ModulePage1 = lazy(() => import('../module/pages/ModulePage1'));
const ModulePage2 = lazy(() => import('../module/pages/ModulePage2'));
const ModulePage3 = lazy(() => import('../module/pages/ModulePage3'));
const LazyLayout = lazy(() => import('../module/layout/LazyLayout'));

export const routes: Route[] = [
    {
        to: '/modulepage1',
        path: 'modulepage1',
        Component: ModulePage1,
        name: 'Module Page 1',
    },
    {
        to: '/modulepage2',
        path: 'modulepage2',
        Component: ModulePage2,
        name: 'Module Page 2'
    },
    {
        to: '/modulepage3',
        path: 'modulepage3',
        Component: ModulePage3,
        name: 'Module Page 3'
    },
    {
        to: '/lazy-load/',
        path: '/lazy-load/*',
        Component: LazyLayout,
        name: 'Lazy Layout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
]