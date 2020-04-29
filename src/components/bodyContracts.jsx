import React, { Component } from 'react';
import { Table } from 'reactstrap'

class BodyContracts extends Component {
    state = { 
        contractList : [
            {
                unique_id: '1',
                id: '1',
                status: 'Ongoing',
                company: 'Company A',
                start_date: '01/01/2020',
                end_date: '06/01/2020',
                description: 'Details about the contract here...',
                contact_email: 'company.A.email@company.co',
                contact_phone: '123-456-7890'
            },
            {
                unique_id: '2',
                id: '2',
                status: 'Ongoing',
                company: 'Insurance Company',
                start_date: '10/01/2019',
                end_date: '10/01/2020',
                description: 'This is a good contract!',
                contact_email: 'insurance@company.co',
                contact_phone: '123-456-7890'
            },
            {
                unique_id: '3',
                id: '3',
                status: 'Completed',
                company: 'Cool Company',
                start_date: '11/01/2019',
                end_date: '03/01/2020',
                description: 'This went well! Would love to work with them again.',
                contact_email: 'insurance@company.co',
                contact_phone: '123-456-7890'   
            }
        ]
    };

    createTableRow (contract) {
        return(
            <tr key={contract.unique_id}>
                <td>{ contract.id }</td>
                <td>{ contract.status }</td>
                <td>{ contract.company }</td>
                <td>{ contract.start_date }</td>
                <td>{ contract.end_date }</td>
                <td>{ contract.description }</td>
                <td>{ contract.contact_email }</td>
                <td>{ contract.contact_phone }</td>
            </tr>
        )
    };

    render() { 
        return (
            <div className='body'>
                <h1>Contracts</h1>
                <Table className="table-responsive table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Status</th>
                            <th>Company</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Description</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contractList.map((contract) => this.createTableRow(contract))}
                    </tbody>
                </Table>
            </div>
         );
    }
};
 
export default BodyContracts;