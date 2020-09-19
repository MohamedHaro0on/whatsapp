import React from 'react'
import ClassNames from "./UI.module.scss" ;
const Button =(props) =><button {...props} className = {ClassNames.Button}>{props.children}</button>;

export {Button} ;
