import React  , {useContext} from 'react'
import {ContactsContext} from "../../../Context/Context.js";
import ClassNames from "./ContactsList.module.scss" ;
function ContactsList() {
    let  contacts = [] ;
    contacts  = useContext(ContactsContext);
    contacts = contacts.contacts ;
    // console.log("The  Contacts from inside the Contacts Component" , contacts.contacts) ;
    
    if (contacts.length > 0 ){
        return (
            <div className = {ClassNames.ContactsList}>
                <ul>
                    {contacts.map( (contact , index) =>{
                        return(
                            <li key = {index}>
                                this is the list item For the Contacts ;
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