import React from 'react';
import Table, {SimpleRow} from '../../../smarty/table';
import Button from '../../../smarty/button';
import TableLoading from '../../TableLoading';
import config from './config';
import './dataTable.css';

export default class EmployeeTable extends React.Component {
    render() {
        const {loading} = this.props;

        const headers = config.table.map((row, index) => {
            let width = row.width;
            return <th style={row.style} className={row.className} width={width} key={`header-${index}`}>{row.title}</th>;
        });
        headers.push(<th width="160" key="opts">操作</th>);

        const rows = this.props.data.map((item, i) => {
            return (
                <SimpleRow key={item.id} tableConfig={config.table} row={item} index={i}>
                    <td key={`opt-${i}`}>
                        <Button style={{marginRight: 5}} color="blue"
                            onClick={() => this.props.onEdit(item)}>编辑</Button>
                        <Button color="red" onClick={() => this.props.onDelete(item)}>删除</Button>
                    </td>
                </SimpleRow>
            );
        });

        return (
            <div className="mod-table employeeTable">
                <TableLoading loading={loading} />
                <Table>
                    <Table.Header>
                        {headers}
                    </Table.Header>
                    <Table.Body>
                        {rows}
                    </Table.Body>
                </Table>
            </div>
        );
    }
}