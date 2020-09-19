import React from 'react'
import Contacts from '../Contacts/Contacts'
import ClassNames from "./MessagesPanel.module.scss"

function MessagesPanel (props){

    // Here you need to make the Request to fetch all the Contacts . ;
    return (
        <div className={ClassNames.MessagesPanel}>
            <Contacts/>
        </div>
    )
}

export default MessagesPanel