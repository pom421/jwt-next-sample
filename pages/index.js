
import React, {useRef, useState} from "react"
import Router from "next/router";

import nextCookie from "next-cookies"
import cookie from "js-cookie"

const URL_LOGIN = "http://localhost:3001/api/login"

const LoginPage = () => {
    const [error, setError] = useState()
    const email = useRef()
    const password = useRef()

    const onSubmit = async event => {
        event.preventDefault()
        setError()
        console.log("onSubmit", email.current.value, password.current.value)
        const res = await fetch(URL_LOGIN, {method: "POST"})
        const json = await res.json()

        if (res.ok && json.token) {
            console.log("on stocke dans le coookie")
            cookie.set("token", json.token, { expires: 1 })
            Router.push("/home")
        } else {
            setError("Erreur d'authentification")
        }

    }

    return (
       <>
        <h1>Signup page</h1>

        <form onSubmit={onSubmit}>
            <label for="email">Email</label><input ref={email} name="email"/>
            <label for="password">Password</label><input ref={password} name="password"/>
            <button type="submit">OK</button>
        </form>
      </>
    )
}

export default LoginPage