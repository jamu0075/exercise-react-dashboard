import React, { Component } from 'react';
import { Table, Button } from 'reactstrap'

import ContractFrom from './addContractForm'
import Popup from 'reactjs-popup';

class BodyContracts extends Component {
    // Create a row in the table per contract
    // Button to delete a row by passing this row's unique ID to grandparent (App.js)
    createTableRow (contract) {
        return(
            <tr key={contract.unique_id}>
                <td>{ contract.id }</td>
                <td>{ contract.status }</td>
                <td>{ contract.company }</td>
                <td>{ contract.startDate }</td>
                <td>{ contract.endDate }</td>
                <td>{ contract.description }</td>
                <td>{ contract.contactEmail }</td>
                <td>{ contract.contactPhone }</td>
                <td><Button color="danger" onClick={() => this.props.onDeleteContract(contract.unique_id) }>Delete</Button></td>
            </tr>
        )
    };

    render() { 
        return (
            <div className='body'>
                <h1>Contracts</h1>
                <Popup trigger={<Button color="primary"className="mb-3"> Add Contract </Button>} modal>
                    <ContractFrom onAddContract={ this.props.onAddContract }/>
                </Popup>
                <Table className="table table-responsive">
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
                        { this.props.contracts.map((contract) => this.createTableRow(contract)) }
                    </tbody>
                </Table>
            </div>
         );
    }
};
 
export default BodyContracts;