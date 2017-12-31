import React from 'react'

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="footer">
                {this.props.body}
            </div>
        );
    }
}

export default Footer;