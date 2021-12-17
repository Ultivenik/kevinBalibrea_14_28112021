import React, { useState } from 'react'
import { Table } from 'antd'
import {columns} from '../../datas/tableColumns'
import { Input } from 'antd'

export default function TableEmployee() {
    const employees = JSON.parse(localStorage.getItem('data'))
    const [dataSearched, setDataSearched] = useState(employees)
    const [page, setPage] = useState()
    const [pageSize, setPageSize] = useState()
    const itemRender = (current, type, originalElement) => {
        if (type === 'prev') {
            return <button>Previous</button>
        }
        if (type === 'next') {
            return <button>Next</button>
        }
        return originalElement
    }

    return (
        <React.Fragment >
            <p className="search-bar">
                <label htmlFor="search">Search: </label>
                <Input
                    id="search"
                    size='default'
                    allowClear={true}
                    style={{width:"20%"}}
                    onChange={
                        (e) =>{
                            const currValue= e.target.value
                            const filtered = employees.filter(entry =>
                                entry.firstName.toLowerCase().includes(currValue) ||
                                entry.lastName.toLowerCase().includes(currValue) ||
                                entry.startDate.toLowerCase().includes(currValue) ||
                                entry.department.toLowerCase().includes(currValue) ||
                                entry.dateOfBirth.toLowerCase().includes(currValue) ||
                                entry.street.toLowerCase().includes(currValue) ||
                                entry.city.toLowerCase().includes(currValue) ||
                                entry.state.toLowerCase().includes(currValue) ||
                                entry.zipCode.toLowerCase().includes(currValue)
                            )
                            setDataSearched(filtered)
                        }
                    }
                />
            </p>
            <Table
                columns={columns}
                dataSource={dataSearched}
                pagination={{
                    current: page,
                    pageSize: pageSize,
                    defaultPageSize: 10,
                    showSizeChanger: true,
                    pageSizeOptions: ['10', '25', '50', "100"],
                    showTotal:(total, range) =>{
                        return(
                            <div> Showing {total} to {range} entries of {range} </div>
                        )
                    },
                    onChange: (page, pageSize) =>{
                        setPage(page)
                        setPageSize(pageSize)
                    },
                    itemRender:	itemRender
                }}
                rowKey={(range)=>{
                    return range.firstName
                }}
            />
        </React.Fragment>
    )
}
