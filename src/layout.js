import Head from 'next/head';
import { Container } from '@mui/material';
import AppBar from './components/AppBar';

export default function Layout({ children }) {
    return (
        <>
            {/* Include shared UI here e.g. a header or sidebar */}
            <Head>
                <title>My Anime</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AppBar />
            <Container>
                {children}
            </Container>
        </>
    );
}
