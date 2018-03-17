import React from 'react';
import cx from 'classnames';
import './table.css';

export default class Table extends React.Component {
    render() {
        const {children, className} = this.props;
        const classNames = cx('st-table', className);

        return (
            <table className={classNames}>
                {children}
            </table>
        );
    }
};

Table.Header = ({ children }) => {
    const cloneChild = React.Children.map(children, (child, i) => {
        if(!child) {
            return null;
        }

        return React.cloneElement(child, {
            key: `st-table-th_${i}`,
            className: cx('st-table-th', child.props.className)
        });    
    });

    return (
        <thead className="st-table-thead">
            <tr>{cloneChild}</tr>
        </thead>
    );
};

Table.Body = ({children}) => {
    const cloneChild = React.Children.map(children, (child, i) => {
        if(!child) {
            return null;
        }

        return React.cloneElement(child, {
            key: `st-table-row_${i}`,
            className: cx('st-table-row', child.props.className)
        });
    });

    return (<tbody className="st-table-tbody">{cloneChild}</tbody>);
};

export const SimpleRow = props => {
    const {
        row, index, className, tableConfig, children
    } = props;

    let tds = tableConfig.map((cfg, j) => {
        const field = cfg.field;

        let value = row[field];
        let formatValue = null;
        if(cfg.format) {
            formatValue = cfg.format(value, row, index);
        }

        return <td key={`cell-${field}-${j}`} className={cx(cfg.className)}
                   style={cfg.style}>{formatValue || value}</td>;
    });

    return (
        <tr className={className}>
            {tds}
            {children}
        </tr>
    );
};