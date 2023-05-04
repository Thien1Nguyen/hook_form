import React, { useState } from 'react'

const UserInfo = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setFLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstname, lastname, email, password, confirmpassword};
        console.log("Welcome", newUser);
    };

    return (
        <form onSubmit={ createUser}>
            <h1>Register Here</h1>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ (e) => setFirstname(e.target.value)}/>
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ (e) => setFLastname(e.target.value)}/>
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={ (e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfirmpassword(e.target.value)}/>
            </div>
            <input type="submit" value="Create User"/>

            <div>
                <br />
                <p>Your Form Data</p>
                <br />
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmpassword}</p>
            </div>
        </form>
    )
}

export default UserInfo