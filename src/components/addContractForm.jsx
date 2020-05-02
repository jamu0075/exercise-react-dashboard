import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class ContractForm extends Component {
    // Local state to pass to parent
    state = {
        contract: {
            id: '',
            company: '',
            description: '',
            start_date: '',
            end_date: '',
            contact_email: '',
            contact_phone: '',
            status: '',
        }
    };

    // Set the local state based on form changes and validate inputs(not implemented)
    handleInputChange = (event) => {
        const field = event.target.name
        const value = event.target.value
        this.setState(prevState => ({
                        contract: {
                            ...prevState.contract,
                            [field]: value
                        }
                    }),
                    () => { this.validateInput(field, value)} );
    };

    // Validates the input for each field in 'Add Contract' form
    validateInput = (field, value) => {
        switch(field) {
            case 'id':
                break;
            case 'company':
                break;
            case 'description':
                break;
            case 'start_date':
                break;
            case 'end_date':
                break;
            case 'contact_email':
                break;
            case 'contact_phone':
                break;
            case 'status':
                break;
            default:
                break;
        }
    };

    // On form submit, lift the state to grandparent(App.js) for handling
    handleFormSubmit = () => {
        this.props.onAddContract(this.state.contract);
    };

    render() { 
        return (
            <Form>
                <FormGroup>
                    <Label>ID</Label>
                    <Input value={ this.state.contract.id } onChange={ this.handleInputChange } type="text" name="id" placeholder="xx" />
                </FormGroup>
                <FormGroup>
                    <Label>Company Name</Label>
                    <Input value={ this.state.contract.company } onChange={ this.handleInputChange } type="text" name="company" id="name" placeholder="Company Name" />
                </FormGroup>
                <FormGroup>
                    <Label>Contract Description</Label>
                    <Input value={ this.state.contract.description } onChange={ this.handleInputChange } type="textarea" name="description" id="description" placeholder="Describe the contract details..." />
                </FormGroup>
                <FormGroup>
                    <Label>Start Date</Label>
                    <Input value={ this.state.contract.start_date } onChange={ this.handleInputChange }type="text" name="start_date" id="start_date" placeholder="mm/dd/yyyy" />
                </FormGroup>
                <FormGroup>
                    <Label>End Date</Label>
                    <Input value={ this.state.contract.end_date } onChange={ this.handleInputChange } type="text" name="end_date" id="end_date" placeholder="mm/dd/yyyy" />
                </FormGroup>
                <FormGroup>
                    <Label>Company Email</Label>
                    <Input value={ this.state.contract.contact_email } onChange={ this.handleInputChange } type="email" name="contact_email" id="email" placeholder="xxxxxxxxx@xxxx.com" />
                </FormGroup>
                <FormGroup>
                    <Label>Company Phone Number</Label>
                    <Input value={ this.state.contract.contact_phone } onChange={ this.handleInputChange } type="text" name="contact_phone" id="contact_phone" placeholder="123-456-7890" />
                </FormGroup>
                <FormGroup tag="fieldset">
                    <legend>Contract Status</legend>
                    <FormGroup check>
                        <Label check>
                            <Input value="Ongoing"  onChange={ this.handleInputChange } type="radio" name="status" />{'Ongoing'}
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input value="Completed" onChange={ this.handleInputChange } type="radio" name="status" />{'Completed'}
                        </Label>
                    </FormGroup>
                </FormGroup>
                <Button color='warning' onClick={ this.handleFormSubmit }>Submit</Button>
            </Form>
          );
    }
}
 
export default ContractForm;