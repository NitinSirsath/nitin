    import React from 'react'
    import ContactCard from './ContactCard';
    import './ContactList.css'
    
    const ContactList = (props) => {
        console.log(props);
        const renderContactsList = props.contacts.map((contacts) => {
            return(
                <>
                <ContactCard contacts={contacts}> </ContactCard>
                </>
            ) 
        })
        return (
            <>
                <div className="list-item">
                {renderContactsList}
                </div>

            </>
        )
    }
 export default ContactList;
    