import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

export const BoxMedia = props => (
    <>
        {props.item ? (
            <Box sx={{ pr: 2, pt: 1 }}>
                <Typography gutterBottom variant="body2">
                    {props.item.title || props.item.title_japanese}
                </Typography>
                <Typography display="block" variant="caption" color="text.secondary" sx={{ pb: 1 }}>
                    {props.item.nrOfEpisodes} episode{props.item.nrOfEpisodes > 1 ? 's' : ''}
                </Typography>
            </Box>
        ) : (
            <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
            </Box>
        )}
    </>
);
