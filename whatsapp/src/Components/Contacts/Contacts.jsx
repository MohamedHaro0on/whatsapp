import React from 'react'
import Header from "./Header/Header" ;
import ClassNames from "./Contacts.module.scss" ;
import SearchContactsInput from "./SearchContacts/SearchContacts";
function Contacts() {
    return (
        <div className = {ClassNames.ContactsContainer}>
            <Header/>
            <SearchContactsInput/>
        </div>
    )
}

export default Contacts