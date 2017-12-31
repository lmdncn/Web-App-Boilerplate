import React from 'react';
import {Titles} from 'Utils/constants/Titles.js';

class InputBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    inputChanged(e) {
        this.setState({'inputValue': e.target.value});
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    value={this.state.inputValue}
                    onChange={(e) => this.inputChanged(e)}/>
                <button onClick={() => this.props.setSecondaryTitle(this.state.inputValue)}>Set New Text
                </button>
            </div>
        );
    }
}

export default InputBox;