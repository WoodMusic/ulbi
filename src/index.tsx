import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";
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




