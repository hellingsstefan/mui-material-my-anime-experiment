import Layout from '@/layout';
import '@/styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}
