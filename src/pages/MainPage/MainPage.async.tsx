import { lazy } from 'react';



export const MainPageAsync = lazy(() => new Promise(resolve => {
    //@ts-ignore
    //Так в реальных проектах НЕ ДЕЛАТЬ!!!!
    setTimeout(() => resolve(import('./MainPage')), 1500)
}));

