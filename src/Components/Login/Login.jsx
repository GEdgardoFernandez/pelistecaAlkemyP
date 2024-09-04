import { useState } from "react";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        setEmail(event.target.email.value);
        setPassword(event.target.password.value);
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (email !== '' || password !== '') {
            alert("Login Successful" + " email: " + email + " password: " + password);
            return;
        }else if (re.test(email) === false) {
            alert("Please enter a valid email");
            return;

        }else if (email === 'challenge@alkemy.org' && password === 'react') {
            alert("Login Successful, welcome");
            return;
        }else if (email === '' || password === '') {
            alert("Email or password cannot be empty");
        };
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div>
                <span>Email</span><br />
                <input type="email" name="email" placeholder="alguiend@example.com" />
            </div>
            <div>
                <span>Password</span><br />
                <input type="password" name="password" placeholder="********" />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    );
}

export default Login;