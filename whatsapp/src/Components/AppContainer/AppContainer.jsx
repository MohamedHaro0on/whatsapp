import React from 'react'
import ClassNames from "./AppContainer.module.scss" ;


const AppContainer = props =><div className = {ClassNames.AppContainer}>{props.children}</div>

export default AppContainer;