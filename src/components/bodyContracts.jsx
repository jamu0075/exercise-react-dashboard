import React, { Component } from 'react';
import { Table } from 'reactstrap'

class BodyContracts extends Component {
    state = { 

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
                        {this.props.contracts.map((contract) => this.createTableRow(contract))}
                    </tbody>
                </Table>
            </div>
         );
    }
};
 
export default BodyContracts;