import React from 'react';

import { Paper, TextField } from '@material-ui/core';

//Class based component

class SearchBar extends React.Component {

    state = {
        searchTerm: '',
    }

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    }

    handleSubmit = (event) => {
        const { searchTerm } = this.state;
        const { onFormSubmit} = this.props;

        onFormSubmit(searchTerm);

        event.preventDefault();
    }

    render(){
        return (
            <Paper elevation={6} style={{ padding: '25px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange}></TextField>
                </form>
            </Paper>
        );
    }
}

export default SearchBar;