import React from 'react'
import { Table } from 'antd'
import {columns} from '../../datas/tableColumns'

export default function TableEmployee() {
    const employees = JSON.parse(localStorage.getItem('data'));

    return (
        <div>
            <Table columns={columns} dataSource={employees} />
        </div>
    )
}
