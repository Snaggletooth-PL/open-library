import React from 'react';
import emailjs from 'emailjs-com';
import { Contact } from '../components';
import { isValid } from '../utils';

class ContactContainer extends React.Component
{
    state = { userName: '', userEmail: '', message: '' };

    onUserNameInputChange = (event) =>
    {
        this.setState({ userName: event.currentTarget.value });
    };

    onUserEmailInputChange = (event) =>
    {
        this.setState({ userEmail: event.currentTarget.value });
    };

    onMessageTextAreaChange = (event) =>
    {
        this.setState({ message: event.currentTarget.value });
    };

    onSubmit = (event) =>
    {
        event.preventDefault();

        if (isValid(this.state.userName.trim()) && isValid(this.state.userEmail.trim()) && isValid(this.state.message))
        {
            emailjs.send('service_7wj2odo', 'template_knk0hn6', this.state, 'user_ptFiJihrWKE4atmqh9AU9').then(() =>
            {
                alert('Message sent successfully!');
            }).catch(() =>
            {
                alert('Failed to send message!');
            });

            this.setState({ userName: '', userEmail: '', message: '' });
        }
    };

    render()
    {
        return <Contact onSubmit={ this.onSubmit } userName={ this.state.userName } onUserNameInputChange={ this.onUserNameInputChange } userEmail={ this.state.userEmail }
            onUserEmailInputChange={ this.onUserEmailInputChange } message={ this.state.message } onMessageTextAreaChange={ this.onMessageTextAreaChange } />;
    }
}

export default ContactContainer;