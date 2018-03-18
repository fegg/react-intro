let data = [
    {
        id: 1,
        name: 'lulin1',
        age: 17,
        sex: 'M'
    },
    {
        id: 2,
        name: 'lulin2',
        age: 0,
        sex: 'F'
    }
];

const EmployeeApi = {
    __data: data,
    insert(item) {
        data.unshift(item);

        return mockRequest(data);
    },
    update(info) {
        const id = info.id;

        data.forEach((item, index) => {
            if(item.id === id) {
                for(let key in info) {
                    if(key !== 'id') {
                        item[key] = info[key];
                    }
                }
            }
        });

        return mockRequest(data);
    },
    delete(id) {
        data = data.filter(item => item.id !== id);
        return mockRequest(data);
    },
    get() {
        return mockRequest(data);
    }
};

function mockRequest(data) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve({
                status: 200,
                data: [].concat(data),
            });
        }, 2000);
    });
}

export default EmployeeApi;