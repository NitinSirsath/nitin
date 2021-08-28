import React from 'react'

const ContactCard = (props) => {
    const {id, name, email} = props.contacts;
    return (
        <>
             <div>
                    <div>{id}</div>
                    <div>{name}</div>
                    <div>{email}</div>
                    <button className="btn-form">remove</button>
                   
                </div>
        </>
    )
}

export default ContactCard
