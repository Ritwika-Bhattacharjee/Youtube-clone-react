import React from 'react';
import { Grid } from '@material-ui/core';

import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

import youtube from './api/youtube.js';
//class based component
class App extends React.Component {
    
    state = {
        videos: [],
        selectedVideo: null,
    }

    //lifecycle method to be executed immediately after the App Component loads
    //such that the main page has a default video to load

    componentDidMount(){
        this.handleSubmit('most beautiful waterfalls');
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    handleSubmit= async (searchTerm) => {
        const response = await youtube.get('search',{
             params: { 
             part: 'snippet',
             maxResults: 5,
             key: '',
             q: searchTerm,
            }
        }); //this is an extension of the youtube api/search?q=searchTerm and so on

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    }

    render(){
        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            { /* Search Bar */ }
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            { /* VIDEO DETAIL */ }
                            <VideoDetail video={this.state.selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            { /* VIDEO LIST */ }
                            <VideoList videos = {this.state.videos} onVideoSelect = {this.onVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

//function based component
/*const App = () => {
    return (
        <h1>Youtube Clone</h1>
    );
}
*/
export default App;