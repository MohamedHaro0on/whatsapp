import React from 'react'
import Contacts from '../Contacts/Contacts'
import Conversation from '../Conversation/Conversation'
import ClassNames from "./MessagesPanel.module.scss"

function MessagesPanel (props){

    // Here you need to make the Request to fetch all the Contacts . ;
    
    return (
        <div className={ClassNames.MessagesPanel}>
            <Contacts/>
            <Conversation/>
        </div>
    )
}

export default MessagesPanel