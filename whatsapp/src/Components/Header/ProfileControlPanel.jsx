import React from 'react'
import SideBar from '../SideBar/SideBar'

function ProfileControlPanel({close}) {
    return (
        <SideBar title = "Profile" handleClose = {close}>
            this is the Side Bar Component .  
        </SideBar>
    )
}

export default ProfileControlPanel
