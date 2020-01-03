
import React, {useRef, useState} from "react"
import Link from "next/link"
import Router from "next/router";

import cookie from "js-cookie"

const URL_LOGIN = "http://localhost:3001/api/login"

const LoginPage = () => {
    const [error, setError] = useState()
    const emailRef = useRef()
    const passwordRef = useRef()

    const onSubmit = async event => {
        event.preventDefault()
        setError()

        const email = emailRef.current.value
        const password = passwordRef.current.value

        console.log("onSubmit", email, password)

        try {
            const res = await fetch(URL_LOGIN, {
                method: "POST",
                body: {
                    email,
                    password
                }})
            const json = await res.json()

            if (res.ok && json.token) {
                console.log("on stocke dans le coookie")
                cookie.set("token", json.token, { expires: 1 })
                Router.push("/home")
            } else {
                setError("Erreur d'authentification")
            }
        } catch (error) {
            console.error(error)
        }

    }

    return (
       <>
        <h1>Login page</h1>

        <form onSubmit={onSubmit}>
            <label htmlFor="email">Email</label><input ref={emailRef} name="email"/>
            <label htmlFor="password">Password</label><input ref={passwordRef} name="password"/>
            <button type="submit">OK</button>
        </form>

        <p>Pas de compte? <Link href="/signup"><a>Créer-le</a></Link> !</p>

      </>
    )
}

export default LoginPage