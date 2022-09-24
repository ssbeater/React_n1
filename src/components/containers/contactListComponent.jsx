import React, { useState, useEffect} from 'react'
import { Contact } from '../../models/contact.class';
import ContactCompontent from '../pure/contactCompontent';
import ContactForm from '../pure/forms/contactForm';

function ContactListComponent() {

    const defaultContact1 = new Contact('Name1','LastName1','contact@number1',false)

    const [contacts, setContacts] = useState([defaultContact1])

    useEffect(() => {
        console.log('Contactss state has been modified')
        return () => {
            console.log('ContactsList component is going to unmount...')
        }
    }, [contacts]);

    const changeContactStatus = (contact) => {
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts[index].connected = !tempContacts[index].connected
        setContacts(tempContacts)
    }

    const deleteContact = (task) => {
        console.log('Delete this task: ',task)
        const index = contacts.indexOf(task)
        const tempTasks = [...contacts]
        tempTasks.splice(index,1)
        setContacts(tempTasks)
    }

    const addContact = (task) => {
        const tempTasks = [...contacts]
        tempTasks.push(task)
        setContacts(tempTasks)
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your Contacts:</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', heigth: '400px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'><span className='m-2'>Name</span></th>
                                    <th scope='col'><span className='m-2'>LastName</span></th>
                                    <th scope='col'><span className='m-2'>Email</span></th>
                                    <th scope='col'><span className='m-2'>Status</span></th>
                                    <th scope='col'><span className='m-2'>Actions</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, index) => 
                                  <ContactCompontent
                                    contact={contact}
                                    status={changeContactStatus}
                                    remove={deleteContact}
                                  />
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ContactForm add={addContact}/>
        </div>
    )
}

export default ContactListComponent


