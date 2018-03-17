import React, { Component } from 'react';
import EmployeeManage from './containers/employeeManage';
import './app.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <EmployeeManage />
            </div>
        );
    }
}

export default App;
