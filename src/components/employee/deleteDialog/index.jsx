import React from 'react';
import DialogFooter from '../../../smarty/dialog/DialogFooter';
import DialogHeader from '../../../smarty/dialog/DialogHeader';
import Dialog from '../../../smarty/dialog';
import EmployeeStore from '../../../stores/employee';

export default class EmployeeDeleteDialog extends React.PureComponent {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleSubmit(e) {
        const {data} = this.props;
        EmployeeStore.removeEmployeeById(data.id);
        // 乐观交互
        this.handleClose();
    }

    handleClose(e) {
        this.props.onClose();
    }

    render() {
        if(!this.props.visible) {
            return null;
        }

        const footer = (
            <DialogFooter onSubmit={this.handleSubmit}
                onClose={this.handleClose}
                submitText="删除"
                closeText="关闭" />
        );

        return (
            <Dialog className="employeeDeleteDialog"
                renderHeader={() => <DialogHeader title="提示" />}
                renderFooter={() => footer}>
                <div className="deleteDialog">
                    <p>是否确定要删除?</p>
                </div>
            </Dialog>
        );
    }
}