import React , {useState} from 'react'
import ClassNames from "./UI.module.scss";

const Button = (props) => <button {...props} className={ClassNames.Button}>{props.children}</button>;

const Input = ({fill , d , label , onChange , value , }) => {
    const [disabled  , setDisabled] = useState(true) ;
    function handleIconClick (){
        setDisabled(prevState => !prevState ) ;
    }
    return (
        <div className={ClassNames.InputContainer}>
            <label>{label}</label>
            <input  disabled = {disabled} readOnly = {disabled} onChange = {onChange} value = {value} />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                onClick = {handleIconClick}
            >
                <path
                    fill={fill}
                    d={disabled ? d : "M9 17.2l-4-4-1.4 1.3L9 19.9 20.4 8.5 19 7.1 9 17.2z"}
                >
                </path>
            </svg>
        </div>
    )
}

function SideBar ({title , children , handleClose}) {
    return (
        <div className = {ClassNames.SideBarContainer}>
            <h2 className = {ClassNames.SideBarTitle}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" onClick = {handleClose}>
                    <path fill="currentColor" d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"></path>
                </svg>
                {title}
            </h2>
            {children} 
        </div>
    )
}

export { Button, Input  , SideBar};