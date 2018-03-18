import './editDialog.css';

import React from 'react';
import DialogFooter from '../../../smarty/dialog/DialogFooter';
import DialogHeader from '../../../smarty/dialog/DialogHeader';
import Dialog from '../../../smarty/dialog';
import Input from '../../../smarty/input';
import EmployeeStore from '../../../stores/employee';
import assign from 'object-assign';

export default class EmployeeEditDialog extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            prevFormData: {},
            formData: {},
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeDays = this.handleChangeDays.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(prevState => {
            const newState = {
                prevFormData: nextProps.data,
                formData: assign({}, nextProps.data),
            };

            return newState;
        });
    }

    handleSubmit(e) {
        const {formData} = this.state;
        EmployeeStore.saveEmployee(formData);
        // 乐观交互
        this.handleClose();
    }

    handleClose(e) {
        this.props.onClose();
    }

    handleChangeName(value, e) {
        const rValue = value.trim();

        this.setState(prevState => {
            const newState = {
                formData: {
                    ...prevState.formData,
                    name: rValue,
                }
            };

            return newState;
        });
    }

    handleChangeDays(value, e) {
        const rValue = value.trim();

        this.setState(prevState => {
            const newState = {
                formData: {
                    ...prevState.formData,
                    days: rValue,
                }
            };

            return newState;
        });
    }

    handleChangeAge(value, e) {
        const rValue = +value.trim();

        this.setState(prevState => {
            const newState = {
                formData: {
                    ...prevState.formData,
                    age: rValue,
                }
            };

            return newState;
        });
    }

    render() {
        if(!this.props.visible) {
            return null;
        }

        const footer = (
            <DialogFooter
                onSubmit={this.handleSubmit}
                onClose={this.handleClose}
                submitText="添加"
                closeText="关闭" />
        );

        const {formData} = this.state;

        return (
            <Dialog className="employeeAddDialog"
                renderHeader={() => <DialogHeader title="编辑" />}
                renderFooter={() => footer}>
                <div className="addDialog">
                    <Input defaultValue={formData.name} onChange={this.handleChangeName} placeholder="请输入姓名" />
                    <Input defaultValue={formData.days} onChange={this.handleChangeDays} placeholder="请输入天数" />
                    <Input defaultValue={formData.age} onChange={this.handleChangeAge} placeholder="请输入年龄" />
                </div>
            </Dialog>
        );
    }
}