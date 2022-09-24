import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactCompontent = ({contact, status, remove}) => {

    const contactConnectedIcon = () => contact.connected
        ? (<i onClick={()=> status(contact)} className='bi-toggle-on task-action' style={{color: 'green', fontSize: '1.2rem'}}></i>) 
        : (<i onClick={()=> status(contact)} className='bi-toggle-off task-action' style={{color: 'grey', fontSize: '1.2rem'}}></i>) 

    const contactConnectedBadged = () => contact.connected
        ? (<span className='m-2 badge bg-primary'>Online</span>) 
        : (<span className='m-2 badge bg-secondary'>Offline</span>) 

    return (
        <tr className='fw-normal'>
            <td className='align-middle'>
                <span className='m-2'>{contact.name}</span>
            </td>
            <td className='align-middle'>
                <span className='m-2'>{contact.lastname}</span>
            </td>
            <td className='align-middle'>
                <span className='m-2'>{contact.email}</span>
            </td>
            <td className='align-middle'>
                {contactConnectedBadged()}
            </td>
            <td className='align-middle'>
                <span className='m-2'>
                    {contactConnectedIcon()}
                </span>
                <span className='m-2'>
                    <i onClick={()=>remove(contact)} className='bi-trash task-action' style={{color: 'tomato', fontSize: '1.2rem'}}></i>
                </span>
            </td>
        </tr>
    );
};


ContactCompontent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    status: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactCompontent;
