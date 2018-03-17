import React from 'react';
import cx from 'classnames';
import './dialog.css';

class Dialog extends React.Component {
    render() {
        const {
            renderHeader,
            renderFooter,
            className,
        } = this.props;

        const header = renderHeader ? renderHeader() : null;
        const footer = renderFooter ? renderFooter() : null;

        const wrapClassName = cx('st-dialog', className);

        return (
            <div className={wrapClassName}>
                <div className="st-dialogContent">
                    {header}
                    {this.props.children}
                    {footer}
                </div>
                <div className="st-dialogMask"></div>
            </div>
        );
    }
}

export default Dialog;