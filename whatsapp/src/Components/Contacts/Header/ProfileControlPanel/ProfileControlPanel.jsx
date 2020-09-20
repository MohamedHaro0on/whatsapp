import React, { useState } from 'react'
import { Input  , SideBar} from '../../../UI/UI';
import ClassNames from "./ProfileControlPanel.module.scss";

function ProfileControlPanel({ close, userImage, userName , userAbout}) {

    const [name, setName] = useState(userName);
    const [about , setAbout] = useState(userAbout);

    function handleUserNameChange(e) {
        setName(e.target.value);
    }
    function handleUserAboutChnage(e){
        setAbout(e.target.value) ;
    }

    return (
        <SideBar title="Profile" handleClose={close}>
            <div className={ClassNames.ProfileImageControlPanelContainer}>

                <div className={ClassNames.ProfileImageContainer}>
                    {/* The User's Profile Image  */}
                    <img src={userImage} alt="The Users profile" />
                    {/* The User's Change Profile Image Section */}
                    <div className={ClassNames.ChangeProfileImageContainer}>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                            >
                                <path
                                    fill="#fff"
                                    d="M21.317 4.381H10.971L9.078 2.45c-.246-.251-.736-.457-1.089-.457H4.905c-.352 0-.837.211-1.078.468L1.201 5.272C.96 5.529.763 6.028.763 6.38v1.878l-.002.01v11.189a1.92 1.92 0 0 0 1.921 1.921h18.634a1.92 1.92 0 0 0 1.921-1.921V6.302a1.92 1.92 0 0 0-1.92-1.921zM12.076 18.51a5.577 5.577 0 1 1 0-11.154 5.577 5.577 0 0 1 0 11.154zm0-9.506a3.929 3.929 0 1 0 0 7.858 3.929 3.929 0 0 0 0-7.858z">
                                </path>
                            </svg>
                            <p>change profile photo</p>
                        </div>
                    </div>

                </div>
            </div>
                {/* End Of The User's Change Profile Image Section */}

                {/* Starting the User Edit Form. */}

            <form className = {ClassNames.Form}>
                {/* The User Name Input  */}
                <Input
                    label="Your Name"
                    fill="#919191"
                    d="M3.95 16.7v3.4h3.4l9.8-9.9-3.4-3.4-9.8 9.9zm15.8-9.1c.4-.4.4-.9 0-1.3l-2.1-2.1c-.4-.4-.9-.4-1.3 0l-1.6 1.6 3.4 3.4 1.6-1.6z"
                    onChange={handleUserNameChange}
                    value={name}
                />
                <p className = {ClassNames.UserNameDiscription}>
                    This is not your username or pin. This name will be visible to your WhatsApp contacts.
                </p>
                {/*  The User About Input.*/}
                <Input
                    label="About"
                    fill="#919191"
                    d="M3.95 16.7v3.4h3.4l9.8-9.9-3.4-3.4-9.8 9.9zm15.8-9.1c.4-.4.4-.9 0-1.3l-2.1-2.1c-.4-.4-.9-.4-1.3 0l-1.6 1.6 3.4 3.4 1.6-1.6z"
                    onChange={handleUserAboutChnage}
                    value={about}
                />

            </form>
        </SideBar>
    )
}

export default ProfileControlPanel;