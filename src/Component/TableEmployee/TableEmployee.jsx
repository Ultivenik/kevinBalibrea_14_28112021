import React, { useState } from 'react'
import { Layout, Table } from 'antd'
import {columns} from '../../datas/tableColumns'
import { Input } from 'antd'

export default function TableEmployee() {
    const employees = JSON.parse(localStorage.getItem('data'))
    const [dataSearched, setDataSearched] = useState(employees)
    const itemRender = (current, type, originalElement) => {
        if (type === 'prev') {
            return <a href="false">Previous</a>
        }
        if (type === 'next') {
            return <a href="false">Next</a>
        }
        return originalElement
    }

    return (
        <Layout
            breakpoint="lg"
            collapsedWidth="0"
        >
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
                                entry.firstName.toLowerCase().includes(currValue)
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
                    defaultPageSize: 10,
                    showSizeChanger: true,
                    pageSizeOptions: ['10', '25', '50', "100"],
                    showTotal:(total, range) =>{
                        return(
                            <div> showing {total} entries of {range} </div>
                        )
                    },
                    itemRender:	itemRender
                }}
            />
        </Layout>
    )
}
