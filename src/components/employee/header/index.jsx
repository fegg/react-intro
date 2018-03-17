import React from 'react';
import Button from '../../../smarty/button';
import Input from '../../../smarty/input';
import './header.css';

export default class EmployHeader extends React.Component {
    render() {
        return (
            <div className="mod-header employeeHeader clearfix">
                <div className="mod-header-search">
                    <Input placeholder="搜索员工姓名" />
                </div>
                <div className="mod-header-other">
                    <Button onClick={this.props.onAdd}>添加成员</Button>
                </div>
            </div>
        );
    }
}