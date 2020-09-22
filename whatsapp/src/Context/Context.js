import React, { createContext, useEffect, useState} from 'react'
import axios from "axios";


export const ContactsContext = createContext();

function ContactsData(props) {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        if (contacts.length === 0 ) {
            axios.get("https://jsonplaceholder.typicode.com/users").then(response => {

                const myContacts = response.data.map(element=>{
                    const Minutes = new Date().getMinutes() < 10 ? "0"+ new Date().getMinutes() : new Date().getMinutes() ;
                    return{
                        ...element , 
                        profileImage : "http://placekitten.com/g/200/300",
                        lastMessageTime : `${new Date().getHours()}:${Minutes}`,
                    }
                })
                setContacts([...myContacts , ...myContacts]);
            }).catch(error => {
                console.log("the Error for the Contacts Request", error);
            }, [])
        }
    })
    return (
        <ContactsContext.Provider value={{ contacts }}>
            {props.children}
        </ContactsContext.Provider>
    )
}
export default ContactsData;