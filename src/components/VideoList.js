import React from 'react';

import VideoItem from './VideoItem';

import { Grid } from '@material-ui/core';

const VideoList = ({ videos, onVideoSelect }) => {

        return (
        
            <Grid container spacing={5}>
                {videos.map((video, id) => {
                    return <VideoItem key={id} video={video} onVideoSelect = {onVideoSelect}/>
                })}
            </Grid>
        )
}

export default VideoList