import React from 'react';
import {Titles} from 'Utils/constants/Titles.js';
import InputBox from './InputBox/InputBoxContainer.js';

class Welcome extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <InputBox/>
                {this.props.view.secondaryTitle}
            </div>
        );
    }
}

export default Welcome;