import './input.css';

import React from 'react';

class Input extends React.Component {
    handleChange = (e) => {
        const {onChange} = this.props;
        if(onChange) {
            onChange(e.target.value, e);
        }
    }
    render() {
        let classNames = 'smarty-input';

        return (
            <input type="text"
                className={classNames}
                onChange={this.handleChange}
                placeholder={this.props.placeholder}
                defaultValue={this.props.defaultValue}
                value={this.props.value} />
        );
    }
}

export default Input;