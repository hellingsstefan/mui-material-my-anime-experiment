import Head from 'next/head';
import { Container, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Media from '@/components/Media';

const jikanBaseUrl = 'https://api.jikan.moe/';
const version = 'v4';
const API = `${jikanBaseUrl}${version}`;

const endpoints = {
    top: '/top/anime',
    search: '/anime',
};

const topLimit = 25;

export async function getStaticProps() {
    const res = await fetch(`${API}${endpoints.top}`);
    const top = await res.json();

    return {
        props: {
            top,
        },
    };
}

export default function Home({ top }) {

    const animeList = top.data.map(({ mal_id, title, title_japanese, images, episodes }) => ({
        id: mal_id,
        title,
        title_japanese,
        image: images.webp.image_url,
        nrOfEpisodes: episodes,
    })) || [];

    const bookmarkedList = animeList.filter(({ id }) => isBookmarked(id)) || [];

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Container maxWidth="md">
                    <Typography variant="h1" component="h1" gutterBottom>
                        My Anime
                    </Typography>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{
                                backgroundColor: 'dark',
                            }}
                        >
                            <Typography variant="h6">
                                Top Anime
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Media
                                data={animeList}
                                loading={false}
                                limit={topLimit}
                                toggleBookmark={toggleBookmark}
                            />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{
                                backgroundColor: 'dark',
                            }}
                        >
                            <Typography variant="h6">
                                Bookmarked
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Media
                                data={bookmarkedList}
                                loading={false}
                                limit={topLimit}
                            />
                        </AccordionDetails>
                    </Accordion>
                </Container>
            </main>
        </>
    );
}
