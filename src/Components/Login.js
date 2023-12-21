import React, { useState } from 'react'

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [userNameErr, setUserNameErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);

    function loginHandler(e) {
        e.preventDefault()
        if (username.length <= 3 || password.length <= 8 || userNameErr || passwordErr) {
            alert("not valid value ")
        }
    }

    function userHandler(e) {
        let item = e.target.value;
        if (item.length <= 3) {
            console.log("not valid user field");
            setUserNameErr(true);
        }
        else {
            setUserNameErr(false);
            setUsername(item)
        }
    }

    function passwordHandler(e) {
        let item = e.target.value;
        if (item.length <= 8) {
            console.log("not valid user field");
            setPasswordErr(true);
        }
        else {
            setPasswordErr(false);
            setPassword(item)
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginHandler} className="login-form">

                <input type="text" placeholder="Enter Username" onChange={userHandler} />
                {/* error message */}
                {userNameErr ? <span>user name not valid</span> : ""}
                <br /><br />

                <input type="password" placeholder="Enter Password" onChange={passwordHandler} />
                {/* error message */}
                {passwordErr ? <span>password not valid</span> : ""}
                <br /><br />

                <button type="submit">Login</button>

            </form>
        </div>
    )
}
