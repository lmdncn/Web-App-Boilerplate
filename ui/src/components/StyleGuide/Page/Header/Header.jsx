import React from 'react';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="header">
                <div>
                    <h1>{this.props.title}</h1>
                </div>
                <div>
                    <ul>
                        {this.props.links.map((o, i) => {
                                    <li key={i} href={o.ref}>{o.text}</li>
                            })}
                    </ul>
                </div>
            </div >
        );
    }
}

export default Header;