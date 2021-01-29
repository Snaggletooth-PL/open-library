import React from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { PageHeader } from '../components';

function Contact(props)
{
    return (
        <Form onSubmit={ props.onSubmit }>

            <PageHeader iconClassName="fas fa-phone" headerName="Contact" />

            <h4 className="text-center mb-3">We are looking forward to hearing from you!</h4>

            <div className="mx-auto mx-5 w-75">

                <label>Name:</label>

                <InputGroup className="mb-3">
                    <FormControl type="text" placeholder="Your name" value={ props.userName } onChange={ props.onUserNameInputChange } />
                </InputGroup>

                <label>E-mail address:</label>

                <InputGroup className="mb-3">
                    <FormControl type="email" placeholder="Your e-mail address" value={ props.userEmail } onChange={ props.onUserEmailInputChange } />
                </InputGroup>

                <label>Message:</label>

                <InputGroup className="mb-3">
                    <FormControl type="text" placeholder="Your message" as="textarea" rows="5" value={ props.message } onChange={ props.onMessageTextAreaChange } />
                </InputGroup>

                <Button type="submit" variant="" size="lg" block className="mx-auto my-4">Submit</Button>

            </div>

        </Form>
    );
}

export default Contact;