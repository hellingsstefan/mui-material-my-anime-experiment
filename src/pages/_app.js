import '@/styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({});

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
