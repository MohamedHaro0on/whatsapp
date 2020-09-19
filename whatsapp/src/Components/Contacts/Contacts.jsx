import React from 'react'
import Header from "../Header/Header" ;
import ClassNames from "./Contacts.module.scss" ;
function Contacts() {
    return (
        <div className = {ClassNames.ContactsContainer}>
            <Header/>
        </div>
    )
}

export default Contacts