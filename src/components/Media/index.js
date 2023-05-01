import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ImageMedia } from './ImageMedia';
import { BoxMedia } from './BoxMedia';

const Media = props => {
    const { loading = true, data } = props;
    const items = loading ? Array.from(new Array(props.limit)) : data;
    const width = 210;
    const boxStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr 50px ',
        width,
        mx: 0.5,
        my: 5,
    };

    function handleBookmark(id) {
        props.toggleBookmark(id);
    }

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {items.map((item, index) => (
                <Box key={index} sx={boxStyle}>
                    <ImageMedia
                        item={item}
                        loading={loading}
                        width={width}
                        onClick={handleBookmark}
                    />
                    <BoxMedia
                        item={item}
                        loading={loading}
                        width={width}
                    />
                </Box>
            ))}
        </Grid>
    );
};

Media.propTypes = {
    loading: PropTypes.bool,
};

export default Media;
