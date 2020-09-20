import React , {useState} from 'react'
import ClassNames from "./SearchContacts.module.scss" ;

function SearchContacts() {
    const [searchTerm , setSearctTerm] = useState("") ;

    function handleSearchChange (e){
        setSearctTerm(e.target.value);
    }
    return (
        <form className = {ClassNames.Form}>
            <input
                value = {searchTerm}
                type  = "text"
                onChnage = {handleSearchChange}
                className = {ClassNames.SearchInput}
                placeholder = "Search or state new chat"
            />
        </form>
    )
}

export default SearchContacts
