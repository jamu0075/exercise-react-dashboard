import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class ContractForm extends Component {
    render() { 
        return (
            <Form className="mb-5">
                <FormGroup>
                    <Label>Company Name</Label>
                    <Input type="text" name="name" id="name" placeholder="Company Name" />
                </FormGroup>
                <FormGroup>
                    <Label>Contract Description</Label>
                    <Input type="textarea" name="description" id="description" placeholder="Describe the contract details..." />
                </FormGroup>
                <FormGroup>
                    <Label>Start Date</Label>
                    <Input type="text" name="startDate" id="startDate" placeholder="mm/dd/yyyy" />
                </FormGroup>
                <FormGroup>
                    <Label>End Date</Label>
                    <Input type="text" name="endDate" id="endDate" placeholder="mm/dd/yyyy" />
                </FormGroup>
                <FormGroup>
                    <Label>Company Email</Label>
                    <Input type="email" name="email" id="email" placeholder="xxxxxxxxx@xxxx.com" />
                </FormGroup>
                <FormGroup>
                    <Label>Company Phone Number</Label>
                    <Input type="text" name="phone" id="phone" placeholder="123-456-7890" />
                </FormGroup>
                <FormGroup tag="fieldset">
                    <legend>Contract Status</legend>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="status" />{' '}
                            Ongoing
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="status" />{' '}
                            Completed
                        </Label>
                    </FormGroup>
                </FormGroup>
                <Button color='warning'>Submit</Button>
            </Form>
          );
    }
}
 
export default ContractForm;