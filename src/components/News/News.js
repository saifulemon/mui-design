import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';

const News = (props) => {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                       S
                    </Avatar>
                }
                title={props.article.title}
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image={props.article.urlToImage}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.article.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default News;