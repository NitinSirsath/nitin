import React, { Component } from 'react'
import './AddContact.css'

class AddContact extends Component {
    render() {
        return (
            <div>
                <div className="Heading-main">
                    <h1>Add Contact</h1>
                </div>
                <div className="field">
                    <form >
                        <div className="main-form">
                    <div className="input-field">
                        <label >Name </label>
                        <input type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="input-field">
                        <label >E-mail </label>
                        <input type="email" name="email" placeholder="email" />
                    </div>
                    </div>
                    <div className="btn">
                        
                    <button className="btn-form">Add</button>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}
 
export default AddContact;