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

    return (
        <>
            <div className="registration-card">
            <div className="profile-placeholder">
                <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="User" />
            </div>
                <form className="registration-form">
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email" id="email" placeholder="Enter your email"
                        value={user.email}
                        
                    />
                    <label htmlFor="username">User Name</label>
                    <input 
                        type="text" id="username" placeholder="Choose a username"
                        value={user.username}

                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" id="password" placeholder="Enter password"
                        value={user.password}
                        
                    />

                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input 
                        type="password" id="confirm-password" placeholder="Confirm password"
                        value={user.passwordConfirm}

                    />

                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    )
}