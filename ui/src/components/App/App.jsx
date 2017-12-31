import React from 'react';
import Welcome from './Welcome/WelcomeContainer.js';
import Page from 'StyleGuide/Page/Page.jsx';
import {Titles} from 'Utils/constants/Titles.js'

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    header() {
        return ({
            title: Titles.main,
            links: [
                {
                    text: 'Link1',
                    ref: 'google.ca'
                }, {
                    text: 'Link2',
                    ref: 'google.ca'
                }, {
                    text: 'Link3',
                    ref: 'google.ca'
                }
            ]
        });
    }

    footer() {
        return (
            <h6>This is the footer</h6>
        );
    }

    render() {
        return (
            <div className='App'>
                <Page body={< Welcome />} header={this.header()} footer={this.footer()}/>
            </div>
        );
    }
}

export default App;