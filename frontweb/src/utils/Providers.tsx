import { ReactNode, useState } from "react"
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from '../styles/theme';
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "../contexts/GlobalContext";
import Home from "../routes/Home";


type Props = {
    children : ReactNode;
}

export default function Providers({children} : Props) {

    const [isLightTheme, setIsLightTheme] = useState(false);
    return (
        <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
            <BrowserRouter>
            <GlobalProvider>
                <Home isLightTheme={isLightTheme} setIsLightTheme={setIsLightTheme}/>
                {children}
            </GlobalProvider>
            </BrowserRouter>

        </ThemeProvider>
    )
}