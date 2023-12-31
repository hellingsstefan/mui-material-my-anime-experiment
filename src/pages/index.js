import { useState, useEffect } from 'react';
import Media from '@/components/Media';
import { Typography } from '@mui/material';

const jikanBaseUrl = 'https://api.jikan.moe/';
const version = 'v4';
const API = `${jikanBaseUrl}${version}`;
const topLimit = 25;
const endpoints = {
    top: '/top/anime',
    search: '/anime',
};

const getAnimeList = data => data.map(item => ({
    id: item.mal_id,
    title: item.title,
    title_japanese: item.title_japanese,
    image: item.images.webp.image_url,
    nrOfEpisodes: item.episodes,
    bookmarked: false,
})) || [];

export default function Home() {
    const [ animeList, setAnimeList ] = useState([]);
    const [ pagination, setPagination ] = useState({});
    const [ isLoading, setLoading ] = useState(false);

    useEffect(() => {
        /* fetch data */
        setLoading(true);
        fetch(`${API}${endpoints.top}`)
            .then((res) => res.json())
            .then((data) => {
                setAnimeList(getAnimeList(data.data));
                setPagination(data.pagination);
                setLoading(false);
            });

    }, []);

    const toggleBookmark = id => {
        const items = [ ...animeList ];
        const item = items.find(item => item.id === id);

        item.bookmarked = !item.bookmarked;

        setAnimeList(items);
    };

    const bookmarkedList = animeList.filter(item => item.bookmarked);

    return (
        <>
            <Typography variant="h4" component="h1" mt={2} mb={2}>Top 25 Anime</Typography>
            <Media
                data={animeList}
                loading={isLoading}
                limit={topLimit}
                toggleBookmark={toggleBookmark}
            />
        </>
    );
}
