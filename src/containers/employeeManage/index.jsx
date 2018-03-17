import React from 'react';
import EmployeeStore from "../../stores/employee";
import EmployeeDeleteDialog from '../../components/employee/deleteDialog';
import EmployeeAddDialog from '../../components/employee/addDialog';
import EmployeeEditDialog from '../../components/employee/editDialog';
import EmployeeTable from '../../components/employee/dataTable';
import EmployeeHeader from '../../components/employee/header';
import ModTitle from '../../components/ModTitle';
import './employeeManage.css';

class EmployeeManage extends React.Component {
    constructor() {
        super();
        this.state = EmployeeStore.getState();
        
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdateList = this.handleUpdateList.bind(this);
        this.handleLoadingData = this.handleLoadingData.bind(this);
        this.handleCloseAddDialog = this.handleCloseAddDialog.bind(this);
        this.handleCloseDeleteDialog = this.handleCloseDeleteDialog.bind(this);
        this.handleCloseEditDialog = this.handleCloseEditDialog.bind(this);
    }

    componentDidMount() {
        EmployeeStore.on('loadingData', this.handleLoadingData);
        EmployeeStore.on('updateList', this.handleUpdateList);

        EmployeeStore.getList();
    }

    componentWillUnMount() {
        EmployeeStore.off('updateList', this.handleUpdateList);
        EmployeeStore.off('loadingData', this.handleLoadingData);
    }

    handleUpdateList(list) {
        this.setState(prevState => {
            return {
                list: list,
                isLoadingData: false,
            };
        });
    }

    handleLoadingData(isLoading) {
        this.setState(prevState => {
            return {
                isLoadingData: isLoading
            };
        });
    }

    handleAdd() {
        this.setState(prevState => {
            const newState = {
                visibleAddDialog: true,
            };

            return newState;
        });
    }

    handleDelete(item) {
        this.setState(prevState => {
            const newState = {
                currentSelected: item,
                visibleDeleteDialog: true,
            };

            return newState;
        });
    }

    handleEdit(item) {
        this.setState(prevState => {
            const newState = {
                currentSelected: item,
                visibleEditDialog: true,
            };

            return newState;
        });
    }

    handleCloseDeleteDialog() {
        this.setState(prevState => {
            const newState = {
                currentSelected: null,
                visibleDeleteDialog: false,
            };

            return newState;
        });
    }

    handleCloseAddDialog() {
        this.setState(prevState => {
            const newState = {
                visibleAddDialog: false,
            };

            return newState;
        });
    }

    handleCloseEditDialog() {
        this.setState(prevState => {
            const newState = {
                currentSelected: null,
                visibleEditDialog: false,
            };

            return newState;
        });
    }

    render() {
        return (
            <div className="mod">
                <ModTitle>员工管理</ModTitle>
                <EmployeeHeader onAdd={this.handleAdd} />
                <EmployeeTable loading={this.state.isLoadingData}
                    data={this.state.list}
                    onEdit={this.handleEdit}
                    onDelete={this.handleDelete} />

                {/* 各种弹框 */}
                <EmployeeDeleteDialog visible={this.state.visibleDeleteDialog}
                    data={this.state.currentSelected}
                    onClose={this.handleCloseDeleteDialog}/>
                <EmployeeAddDialog visible={this.state.visibleAddDialog}
                    onClose={this.handleCloseAddDialog} />
                <EmployeeEditDialog visible={this.state.visibleEditDialog}
                    data={this.state.currentSelected}
                    onClose={this.handleCloseEditDialog} />
            </div>
        );
    }
}

export default EmployeeManage;