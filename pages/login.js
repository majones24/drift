import Link from "next/link";

function Login() {
    return (
        <>
            <h1>Login</h1>
            <form action="/api/userLogin" method="GET">
                <label htmlFor="email">Email:
                    <input id="email" type="email" required name="email"></input>
                </label>
                <label htmlFor="password">Password:
                    <input id="password" type="password" required name="password"></input>
                </label>
                <button type="submit">Login</button>
            </form>
            <div>
                <h2>Don't have an account? <Link href="/index">Register here!</Link></h2>
            </div>
        </>
    )
}

export default Login;