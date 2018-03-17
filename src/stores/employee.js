import assign from 'object-assign';
import EventEmitter from 'events';
import EmployeeApi from "../apis/employeeApi";

const state = {
    list: [],
    currentSelected: null,
    visibleDeleteDialog: false,
    visibleAddDialog: false,
    visibleEditDialog: false,
    isLoadingData: false,
};

let id = EmployeeApi.__data.length + 1;

const EmployeeStore = assign({}, EventEmitter.prototype, {
    getState() {
        return state;
    },
    addEmployee(data) {
        this.emit('loadingData', true);

        data.id = id++;
        EmployeeApi.insert(data).then(result => {
            if(result.status === 200) {
                this.emit('updateList', result.data);
            } else {
                this.emit('error', result);
            }
        });
    },
    getList() {
        this.emit('loadingData', true);

        EmployeeApi.get().then(result => {
            if(result.status === 200) {
                this.emit('updateList', result.data);
            } else {
                this.emit('error', result);
            }
        });
    },
    saveEmployee(employeeInfo) {
        this.emit('loadingData', true);

        EmployeeApi.update(employeeInfo).then(result => {
            if(result.status === 200) {
                this.emit('updateList', result.data);
            } else {
                this.emit('error', result);
            }
        });

        return this;
    },
    removeEmployeeById(id) {
        this.emit('loadingData', true);
        
        return EmployeeApi.delete(id).then(result => {
            if(result.status === 200) {
                this.emit('updateList', result.data);
            } else {
                this.emit('error', result);
            }
        });
    }
});

export default EmployeeStore;
