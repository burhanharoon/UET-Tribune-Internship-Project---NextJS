import Head from 'next/head'
import Register from "../Components/Register";

export default function RegisterPage() {
    return (
        <>
            <Head>
                <title>Register</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Register />
        </>
    )
};

