import Head from 'next/head'
import Login from "../Components/Login"

export const LoginPage = () => {
    return (
        <>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Login />
        </>
    )
}

export default LoginPage