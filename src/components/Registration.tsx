import './Registration.style.css'

export const Registration = () => {

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

                        
                    />
                    <label htmlFor="username">User Name</label>
                    <input 
                        type="text" id="username" placeholder="Choose a username"


                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" id="password" placeholder="Enter password"
                        
                    />

                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" placeholder="Confirm password"
                    
                    />

                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    )
}