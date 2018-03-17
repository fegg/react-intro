import React from 'react';
import Button from '../button';

function hasText(text) {
    return text !== null && text !== '' && text !== void 0;
}

class DialogFooter extends React.Component {
    render() {
        const {props} = this;

        const submitButton = hasText(props.submitText) ?
            (
                <Button color="blue" className="st-btn-submit" onClick={props.onSubmit}>
                    {props.submitText}
                </Button>
            ) : null;

        const closeButton = hasText(props.closeText) ?
            (
                <Button onClick={props.onClose}>
                    {props.closeText}
                </Button>
            ) : null;

        return (
            <div className="st-dialogFooter">
                {submitButton}
                {closeButton}
                {this.props.children}
            </div>
        );
    }
}

export default DialogFooter;