import * as React from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@mui/material/Skeleton';
import { CardMedia } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

const Bookmark = ({ bookmarked }) => (bookmarked ? <BookmarkAddedIcon /> : <BookmarkAddOutlinedIcon />);

Bookmark.propTypes = {
    bookmarked: PropTypes.bool,
};

export const ImageMedia = props => (
    <>
        {props.item ? (
            <>
                <ImageListItem>
                    <CardMedia
                        component="img"
                        sx={{ width: props.width, aspectRatio: '1/1.4' }}
                        image={ props.item.image }
                        alt={ props.item.title }
                    />
                    <ImageListItemBar
                        sx={{
                            background:
                        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                        }}
                        position="top"
                        actionIcon={
                            <IconButton
                                sx={{ color: 'white' }}
                                aria-label={`star ${props.item.title}`}
                                onClick={() => props.onClick(props.item.id)}
                            >
                                <Bookmark bookmarked={props.item.bookmarked} />
                            </IconButton>
                        }
                        actionPosition="left"
                    />
                </ImageListItem>
            </>
        ) : (
            <Skeleton variant="rectangular" width={props.width} height={props.width * 1.4} />
        )}
    </>
);
