import React from 'react'
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';

class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='page'>
                <Header title={this.props.header.title} links={this.props.header.links}/>
                {this.props.body}
                <Footer body={this.props.footer}/>
            </div >
        );
    }
}

export default Page;