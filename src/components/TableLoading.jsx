import React from 'react';
import Loading from '../smarty/loading';

const TableLoading = (props) => {
    if(!props.loading) {
        return null;
    }

    return (
        <div className="mod-table-loadingWrap">
            <div className="mod-table-loading">
                <Loading />
            </div>
        </div>
    );
};

export default TableLoading;