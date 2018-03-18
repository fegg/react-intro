const config = {
    table: [
        {
            field: 'id',
            title: 'ID',
            width: 50
        },
        {
            field: 'name',
            title: '员工姓名',
            width: 120,
        },
        {
            field: 'days',
            title: '请假天数',
            width: 90,
        },
        {
            field: 'age',
            title: '年龄',
            format(value, row, index) {
                if(!value) {
                    return '保密';
                }

                return value;
            }
        },
        {
            field: 'sex',
            title: '性别',
            format(value, row, index) {
                if(!value) {
                    return '保密';
                }

                if(value === 'M') {
                    return '女';
                } else if(value === 'F') {
                    return '男';
                }
            }
        }
    ]
};

export default config;