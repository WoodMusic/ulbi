import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";

import "shared/config/i18n/i18n";
// import { createRoot } from 'react-dom/client';


ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)

// const root = createRoot(
//     document.getElementById('root')!
// );


// root.render(
//     <div>
//         <Counter />
//         <button>stop</button>
//     </div>
// );




