import './Registration.style.css'
import { useState } from 'react'

interface User {
    username: string,
    email: string,
    password: string,
    passwordConfirm: string
}

export const Registration = () => {
    const [user,setUser] = useState<User>({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value
       
        const newUser = {
            ...user,
            [name]: value,
            ...(name === 'email' && value.includes('@') ?
                {username: value.split('@')[0]} :
                {}
            )
        }

        setUser(newUser)
    }

    return (
        <>
            <div className="registration-card">
            <div className="profile-placeholder">
                <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="User" />
            </div>
                <form className="registration-form">
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email" id="email" name="email" placeholder="Enter your email"
                        value={user.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="username">User Name</label>
                    <input 
                        type="text" id="username" name="username" placeholder="Choose a username"
                        value={user.username}
                        onChange={handleChange}
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" id="password" name="password" placeholder="Enter password"
                        value={user.password}
                        onChange={handleChange}
                    />

                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input 
                        type="password" id="confirm-password" name="passwordConfirm" placeholder="Confirm password"
                        value={user.passwordConfirm}
                        onChange={handleChange}
                    />

                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    )
}