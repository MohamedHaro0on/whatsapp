import React  , {useContext} from 'react'
import {ContactsContext} from "../../../Context/Context.js";
import ClassNames from "./ContactsList.module.scss" ;
function ContactsList() {
    let  contacts = [] ;
    contacts  = useContext(ContactsContext);
    contacts = contacts.contacts ;
    console.log("The  Contacts from inside the Contacts Component" , contacts) ;
    
    if (contacts.length > 0 ){
        return (
            <div className = {ClassNames.ContactsList}>
                <ul>
                    {contacts.map( (contact , index) =>{
                        return(
                            <li key = {index} title = "This is the Title for the Contact">
                                <p>
                                    <img src = {contact.profileImage} alt = "Contact Profile" className = {ClassNames.ProfileImage} />
                                    <span>
                                        {contact.name} <br/>
                                        <i>Last Message.</i>
                                    </span>
                                </p>
                                <div>
                                    <p> {contact.lastMessageTime}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
    else{
        return <div> Loading ....!! </div>
    }
}

export default ContactsList