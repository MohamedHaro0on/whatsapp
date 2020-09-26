import React, { useState } from 'react'
import Header from "./Header/Header";
import ClassNames from "./Contacts.module.scss";
import SearchContactsInput from "./SearchContacts/SearchContacts";
import ContactsList from './ContactsList/ContactsList';
function Contacts() {

    const [ContactsOpened, toggleContacts] = useState(true);
    function handleContactsToggle() {
        toggleContacts(prevState => !prevState);
    }
    let appliedClasses = [ClassNames.ContactsContainer,];
    if (ContactsOpened) {
        appliedClasses.push(ClassNames.ContactsOpened);
    }
    else {
        appliedClasses.push(ClassNames.ContactsClosed);
    }
    return (
        <div className={appliedClasses.join(" ").trim()}>
            <Header handleToggle={handleContactsToggle} />
            <SearchContactsInput />
            <ContactsList/>
            {/* The Toggle Handler for small screen Sizes. */}

            {/* <button className = {ClassNames.ToggleButton} onClick={props.handleToggle}> toggle</button> */}
        </div>
    )

}

export default Contacts