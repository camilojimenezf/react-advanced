import { Suspense } from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import { ShoppingPage } from "../component-patterns/pages/ShoppingPage";
import logo from '../logo.svg';
import { routes } from "./routes";

export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="logo" />
                        <ul>
                            <li>
                                <NavLink to="shopping-page">Shopping Page</NavLink>
                            </li>
                            {routes.map(({ to, name }) => (
                                <li key={to}>
                                    <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}>
                                        {name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <Routes>
                        {routes.map(({ path, Component }) => (
                            <Route key={path} path={path} element={<Component />}></Route>
                        ))}
                        <Route path='/shopping-page' element={<ShoppingPage />} />
                        <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}
