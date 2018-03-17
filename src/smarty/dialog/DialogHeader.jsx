import React from 'react';

function DialogClose({onClick}) {
    return (
        <span className="st-dialogHeader-close" onClick={onClick}>
            <i className="st-dialogHeader-closeIcon">x</i>
        </span>
    );
}

class DialogHeader extends React.Component {
    render() {
        const {props} = this;
        const close = props.canClose && <DialogClose onClick={this.props.onClose} />;

        return (
            <div className="st-dialogHeader">
                <h3 className="st-dialogHeader-title">{props.title}</h3>
                {close}
            </div>
        );
    }
};

export default DialogHeader;