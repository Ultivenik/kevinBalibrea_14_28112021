
export const columns = [
        {
            title:"First Name",
            dataIndex:"firstName",
            // onFilter: (value, record) => record.dataIndex.indexOf(value) === 0,
            sorter: (a, b) => a.firstName.length - b.firstName.length
        },
        {
            title:"Last Name",
            dataIndex:"lastName",
            // onFilter: (value, record) => record.dataIndex.indexOf(value) === 0,
            sorter: (a, b) => a.lastName.length - b.lastName.length
        },
        {
            title:"Start date",
            dataIndex:"startDate",
            // onFilter: (value, record) => record.dataIndex.indexOf(value) === 0,
            sorter: (a, b) => a.startDate.length - b.startDate.length
        },
        {
            title:"Department",
            dataIndex:"department",
            // onFilter: (value, record) => record.dataIndex.indexOf(value) === 0,
            sorter: (a, b) => a.department.length - b.department.length
        },
        {
            title:"Date of Birth",
            dataIndex:"dateOfBirth",
            // onFilter: (value, record) => record.dataIndex.indexOf(value) === 0,
            sorter: (a, b) => a.dateOfBirth.length - b.dateOfBirth.length
        },
        {
            title:"Street",
            dataIndex:"street",
            // onFilter: (value, record) => record.dataIndex.indexOf(value) === 0,
            sorter: (a, b) => a.street.length - b.street.length
        },
        {
            title:"City",
            dataIndex:"city",
            // onFilter: (value, record) => record.dataIndex.indexOf(value) === 0,
            sorter: (a, b) => a.city.length - b.city.length
        },
        {
            title:"State",
            dataIndex:"state",
            // onFilter: (value, record) => record.dataIndex.indexOf(value) === 0,
            sorter: (a, b) => a.state.length - b.state.length
        },
        {
            title:"Zip Code",
            dataIndex:"zipCode",
            // onFilter: (value, record) => record.dataIndex.indexOf(value) === 0,
            sorter: (a, b) => a.zipCode - b.zipCode
        }
    ]