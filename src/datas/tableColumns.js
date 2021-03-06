
export const columns = [
        {
            title:"First Name",
            dataIndex:"firstName",
            sorter: (a, b) => a.firstName.length - b.firstName.length
        },
        {
            title:"Last Name",
            dataIndex:"lastName",
            sorter: (a, b) => a.lastName.length - b.lastName.length
        },
        {
            title:"Start date",
            dataIndex:"startDate",
            sorter: (a, b) => a.startDate.length - b.startDate.length
        },
        {
            title:"Department",
            dataIndex:"department",
            sorter: (a, b) => a.department.length - b.department.length,
        },
        {
            title:"Date of Birth",
            dataIndex:"dateOfBirth",
            sorter: (a, b) => a.dateOfBirth.length - b.dateOfBirth.length
        },
        {
            title:"Street",
            dataIndex:"street",
            sorter: (a, b) => a.street.length - b.street.length
        },
        {
            title:"City",
            dataIndex:"city",
            sorter: (a, b) => a.city.length - b.city.length
        },
        {
            title:"State",
            dataIndex:"state",
            sorter: (a, b) => a.state.length - b.state.length
        },
        {
            title:"Zip Code",
            dataIndex:"zipCode",
            sorter: (a, b) => a.zipCode - b.zipCode
        }
    ]