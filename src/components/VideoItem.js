import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

const videoItem = ({ video , onVideoSelect}) => {
    return (
        <Grid item xs={12}>
            <Paper height="15%" onClick={() => onVideoSelect(video)} style={{ cursor: 'pointer'}}>
                <img style = {{ marginRight: '20px'}} alt="thumbnail" src={video.snippet.thumbnails.medium.url} width="100%"/><br />
                <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    );
}

export default videoItem;