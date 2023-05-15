

function Login() {
    return (
        <>
            <h1>Login</h1>
            <form action="/api/[userLogin.js]" method="GET">
                <label htmlFor="email">Email:
                    <input id="email" type="email" required name="email"></input>
                </label>
                <label htmlFor="password">Password:
                    <input id="password" type="password" required name="password"></input>
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login;