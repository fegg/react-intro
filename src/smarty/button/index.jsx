import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './button.css';

class Button extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        const {onClick} = this.props;
        if(onClick) {
            onClick(e);
        }
    }
    patchColor(classNames) {
        const {color} = this.props;
        if(!color) {
           classNames = cx(classNames, 'st-btn-white');
        } else {
           classNames = cx(classNames, `st-btn-${color}`);
        }
        return classNames;
    }
    render() {
        let classNames = 'st-btn';
        if(this.props.className) {
            classNames = cx(this.props.className, classNames);
        }
        classNames = this.patchColor(classNames);

        return (
            <button style={this.props.style} className={classNames} onClick={this.handleClick}>
                {this.props.children}
            </button>
        ); 
    }
}

Button.propTypes = {
    onClick: PropTypes.func,
    color: PropTypes.string,
    className: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ])
};

export default Button;