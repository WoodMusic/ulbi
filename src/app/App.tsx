import React, { Suspense, useContext } from "react"
import './styles/index.scss';
import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/ClassNames";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";



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
                        <Route path={'/about'} element={<AboutPage />} />
                        <Route path={'/main'} element={<MainPage />} />
                    </Routes>
                </section>
            </Suspense>
        </div>
    )
};

export default App;
