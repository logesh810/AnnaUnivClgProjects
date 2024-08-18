import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { useState } from 'react';
import './login.css'

import { useNavigate } from "react-router-dom";
export const LoginScreen = () => {
const navigate = useNavigate();

    let loginData = {
        username: '',
        password: ''
    }

    let authData = {
        username: 'logi',
        password: 'pass'
    }
    const [value, setValue] = useState(loginData);
    const [errorMessage, setErrorMessage] = useState('');

    const onChangeEvent = (e) => {
        let formKey = e.target.name;
        let formValue = e.target.value;
        setValue({ ...value, [formKey]: formValue })
    }

    const userValidate = () => {
        setErrorMessage('');
        if (!value.password || !value.username) {
            setErrorMessage("Fill all the fields");
            return false;
        }
        if (value.password != authData.password || value.username != authData.username) {
            setErrorMessage("Invalid credentials");
            return false;

        }


        return true;
    }

    const OnLoginEvent = () => {
        if (userValidate()) {
            navigate("/dashboard")
        } else {
            console.log("no");

        }

    }
    return (<>
        <div className="loginWrapper">

            <div className="loginContainer">
                <div className='inputs'>
                    {errorMessage ? <><div className="loginError">{errorMessage}</div></> : <></>}
                    <div className="formControl">
                        {/* <label htmlFor="userNameLabel" className="formLabel">Username</label> */}
                        <InputText autoComplete="off" name='username' className='required loginInput' value={value.username} onChange={onChangeEvent} placeholder='Username' />
                    </div>
                    <div className="formControl">
                        {/* <label htmlFor="Password" className="formLabel">Password</label> */}
                        <Password name='password' inputClassName='loginInput' className='required' value={value.password} feedback={false} onChange={onChangeEvent} placeholder='Password' />
                    </div>
                </div>

                <div className="formControl">
                    <Button label='Login' onClick={OnLoginEvent} className='primary-btn loginbtn' />
                </div>
            </div>
        </div>

    </>)
}