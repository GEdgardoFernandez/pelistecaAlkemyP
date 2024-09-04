
function Login() {
    return (
        <div >
            <h1>Login</h1>
            <div>
                <span>Email</span><br />
                <input type="email" name="email" placeholder="alguiend@example.com"/>
            </div>
            <div>
                <span>Password</span><br />
                <input type="password" name="password" placeholder="********"/>
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </div>
    );
}

export default Login;