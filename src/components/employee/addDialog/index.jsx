import React from 'react';
import DialogFooter from '../../../smarty/dialog/DialogFooter';
import DialogHeader from '../../../smarty/dialog/DialogHeader';
import Dialog from '../../../smarty/dialog';
import Input from '../../../smarty/input';
import './addDialog.css';
import EmployeeStore from '../../../stores/employee';

export default class EmployeeAddDialog extends React.PureComponent {
    state = {
        formData: {
            name: '',
            age: 0,
            sex: null,
            days: 0,
        }
    };

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeDays = this.handleChangeDays.bind(this);
    }

    handleSubmit(e) {
        const {formData} = this.state;
        EmployeeStore.addEmployee(formData);
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
        const rValue = +value.trim();

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

        return (
            <Dialog className="employeeAddDialog"
                renderHeader={() => <DialogHeader title="添加成员" />}
                renderFooter={() => footer}>
                <div className="addDialog">
                    <Input onChange={this.handleChangeName} placeholder="请输入姓名" />
                    <Input onChange={this.handleChangeDays} placeholder="请输入天数" />
                    <Input onChange={this.handleChangeAge} placeholder="请输入年龄" />
                </div>
            </Dialog>
        );
    }
}