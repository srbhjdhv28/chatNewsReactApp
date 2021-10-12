const SignIn = () => {
    return (
        <form>    
            <div className="container">
                <input type="text" placeholder="Enter Username" name="uname" required />
                <br/>
                <input type="password" placeholder="Enter Password" name="psw" required />
                <br/>
                <button type="submit">Login</button>
            </div>
            
        </form>
    );
}

export default SignIn;