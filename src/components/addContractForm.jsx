import React, { Component } from 'react';
import { Badge, Button, Form, FormGroup, Label, Input } from 'reactstrap';

// Displays error messages for input validation
function ErrorMessage (props){
    if (!props.valid) {
        return (
        <div><Badge color="warning">{ props.message }</Badge></div>
        )
    }
    return null;
}

class ContractForm extends Component {
    // Local state to pass to parent to handle contract object creation
    state = {
        contract: {
            id: '',
            company: '',
            description: '',
            startDate: '',
            endDate: '',
            contactEmail: '',
            contactPhone: '',
            status: '',
        },
        idValid: false,
        companyValid: false,
        descriptionValid: false,
        startDateValid: false,
        endDateValid: false,
        contactEmailValid: false,
        contactPhoneValid: false,
        statusValid: false,
        errorMessage: { },
        formValid: false
    };

    // Set the temp local state on form changes and validate inputs
    handleFormUpdate = (event) => {
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

    // Validate and show 'Submit' button if and only if all fields are valid
    validateForm = () => {
        const { idValid, companyValid, descriptionValid, startDateValid, endDateValid, contactEmailValid, contactPhoneValid, statusValid } = this.state;
        this.setState( { formValid: idValid && companyValid && descriptionValid && startDateValid && endDateValid && contactEmailValid && contactPhoneValid && statusValid })
    }

    // Validates the input for each field in 'Add Contract' form
    validateInput = (field, value) => {
        let errorMessage = { ...this.state.errorMessage };
        switch(field) {

            // ID must be a positive number, inlcuding leading 0's
            case 'id':
                let idValid = true;

                if (!/^\d+$/.test(value)) {
                    idValid = false;
                    errorMessage.id = "ID must only include positive numbers.";
                }

                this.setState({ idValid: idValid, errorMessage: errorMessage }, this.validateForm);
                break;

            // Company cannot be empty, start with a space, or be more than 20 characters
            case 'company':
                let companyValid = true;

                if (!/^[a-zA-Z][a-zA-Z\s]{1,20}$/.test(value)) {
                    companyValid = false;
                    errorMessage.company = "Company name cannot be empty or more than 20 characters.";
                }

                this.setState({ companyValid: companyValid, errorMessage: errorMessage }, this.validateForm);
                break;

            // Description cannot be empty, start with a space, or more than 200 characters
            case 'description':
                let descriptionValid = true;

                if (!/^[a-zA-Z\d][a-zA-Z\d\s\,\.]{1,200}$/.test(value)) {
                    descriptionValid = false;
                    errorMessage.description = "Description cannot be empty or more than 200 characters.";
                }

                this.setState({ descriptionValid: descriptionValid, errorMessage: errorMessage }, this.validateForm);
                break;

            // Start date must be formatted as 'dd-dd-dddd'
            case 'startDate':
                let startDateValid = true;

                if (!/^\d{2}-\d{2}-\d{4}$/.test(value)) {
                    startDateValid = false;
                    errorMessage.startDate = "Start date must be 'dd-dd-dddd'";
                }

                this.setState({ startDateValid: startDateValid, errorMessage: errorMessage }, this.validateForm);
                break;

            // End date must be formatted as 'dd-dd-dddd'
            case 'endDate':
                let endDateValid = true;

                if (!/^\d{2}-\d{2}-\d{4}$/.test(value)) {
                    endDateValid = false;
                    errorMessage.endDate = "End date must be 'dd-dd-dddd'";
                }

                this.setState({ endDateValid: endDateValid, errorMessage: errorMessage }, this.validateForm);
                break;

            // Email must be formatted as '__@__._'
            case 'contactEmail':
                let contactEmailValid = true;

                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)){
                    contactEmailValid = false;
                    errorMessage.contactEmail = "Email format must be '__@__.__'";
                  }

                  this.setState({ contactEmailValid: contactEmailValid, errorMessage: errorMessage }, this.validateForm);
                  break;

            // Phone number must be formatted as 'ddd-ddd-dddd'
            case 'contactPhone':
                let contactPhoneValid = true;

                if (!/^\d{3}-\d{3}-\d{4}$/.test(value)) {
                    contactPhoneValid = false;
                    errorMessage.contactPhone = "Phone number must be 'ddd-ddd-dddd'";
                }

                this.setState({ contactPhoneValid: contactPhoneValid, errorMessage: errorMessage }, this.validateForm);
                break;

            case 'status':
                let statusValid = true;

                this.setState({ statusValid: statusValid}, this.validateForm);
                break;

            default:
                console.log('Form case not handled.')
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
                    <ErrorMessage valid={ this.state.idValid} message={ this.state.errorMessage.id } />
                    <Input value={ this.state.contract.id } onChange={ this.handleFormUpdate } type="text" name="id" placeholder="xx" />
                </FormGroup>
                <FormGroup>
                    <Label>Company Name</Label>
                    <ErrorMessage valid={ this.state.companyValid } message={ this.state.errorMessage.company } />
                    <Input value={ this.state.contract.company } onChange={ this.handleFormUpdate } type="text" name="company" id="name" placeholder="Company Name" />
                </FormGroup>
                <FormGroup>
                    <Label>Contract Description</Label>
                    <ErrorMessage valid={ this.state.descriptionValid } message={ this.state.errorMessage.description } />
                    <Input value={ this.state.contract.description } onChange={ this.handleFormUpdate } type="textarea" name="description" id="description" placeholder="Describe the contract details..." />
                </FormGroup>
                <FormGroup>
                    <Label>Start Date</Label>
                    <ErrorMessage valid={ this.state.startDateValid } message={ this.state.errorMessage.startDate } />
                    <Input value={ this.state.contract.startDate } onChange={ this.handleFormUpdate }type="text" name="startDate" id="startDate" placeholder="mm-dd-yyyy" />
                </FormGroup>
                <FormGroup>
                    <Label>End Date</Label>
                    <ErrorMessage valid={ this.state.endDateValid } message={ this.state.errorMessage.endDate } />
                    <Input value={ this.state.contract.endDate } onChange={ this.handleFormUpdate } type="text" name="endDate" id="endDate" placeholder="mm-dd-yyyy" />
                </FormGroup>
                <FormGroup>
                    <Label>Company Email</Label>
                    <ErrorMessage valid={ this.state.contactEmailValid } message={ this.state.errorMessage.contactEmail } />
                    <Input value={ this.state.contract.contactEmail } onChange={ this.handleFormUpdate } type="email" name="contactEmail" id="email" placeholder="xxxxxxxxx@xxxx.com" />
                </FormGroup>
                <FormGroup>
                    <Label>Company Phone Number</Label>
                    <ErrorMessage valid={ this.state.contactPhoneValid } message={ this.state.errorMessage.contactPhone } />
                    <Input value={ this.state.contract.contactPhone } onChange={ this.handleFormUpdate } type="text" name="contactPhone" id="contactPhone" placeholder="123-456-7890" />
                </FormGroup>
                <FormGroup tag="fieldset">
                    <Label>Contract Status</Label>
                    <ErrorMessage valid={ this.state.statusValid } message={ this.state.errorMessage.status } />
                    <FormGroup check>
                        <Label check>
                            <Input value="Ongoing"  onChange={ this.handleFormUpdate } type="radio" name="status" />{'Ongoing'}
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input value="Completed" onChange={ this.handleFormUpdate } type="radio" name="status" />{'Completed'}
                        </Label>
                    </FormGroup>
                </FormGroup>
                <Button color='info' onClick={ this.handleFormSubmit } disabled={ !this.state.formValid }>Submit</Button>
            </Form>
          );
    }
}
 
export default ContractForm;