import React, { Suspense, useContext } from "react"
import './styles/index.scss';
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Theme, ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/ClassNames";



const App = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/main'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <section>
                    <Routes>
                        <Route path={'/about'} element={<AboutPageAsync />} />
                        <Route path={'/main'} element={<MainPageAsync />} />
                    </Routes>
                </section>
            </Suspense>
        </div>
    )
};

export default App;
