import React  from "react";

const SignUp = () => {
    return(
        <form>    
            <div className="container">
                <input type="text" placeholder="Enter First Name" name="uname" required />
                <br/>
                <input type="text" placeholder="Enter Last Name" name="uname" required />
                <br/>
                <input type="text" placeholder="Enter Email" name="uname" required />
                <br/>
                <input type="password" placeholder="Password" name="uname" required />
                <br/>
                <input type="password" placeholder="Confirm Password" name="psw" required />
                <br/>
                <button type="submit">Register</button>
            </div>
            
        </form>
    );
}

export default SignUp;