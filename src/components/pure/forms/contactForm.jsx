import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';

const ContactForm = ({add}) => {
    const nameRef = useRef('')
    const lastNameRef = useRef('')
    const emailRef = useRef('')

    const addContact = (e) => {
        e.preventDefault()
        const newContact = new Contact(
            nameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            false
        )
        add(newContact)

        nameRef.current.value = ''
        lastNameRef.current.value = ''
        emailRef.current.value = ''
    }

    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center m-4'>
            <div className='form-outline flex-fill'>
                <input
                    id='inputName' type='text'
                    className='form-control form-control-lg mt-1'
                    placeholder='Contact Name'
                    required autoFocus
                    ref={nameRef}
                />
                <input
                    id='inputLastName' type='text'
                    className='form-control form-control-lg mt-1'
                    placeholder='Contact LastName'
                    required
                    ref={lastNameRef}
                />
                <input
                    id='inputEmail' type='text'
                    className='form-control form-control-lg mt-1'
                    placeholder='Contact Email'
                    required
                    ref={emailRef}
                />
            </div>
            <button 
                type='submit' className='btn btn-success btn-lg ms-3'
            >Add</button>
        </form>
    );
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default ContactForm;
