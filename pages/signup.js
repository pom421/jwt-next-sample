
import React, {useRef, useState} from "react"

const URL_SIGNUP = "http://localhost:3001/api/signup"

const SignupPage = () => {
    const [error, setError] = useState()
    const [success, setSuccess] = useState()
    const email = useRef()
    const password = useRef()

    const onSubmit = async event => {
        event.preventDefault()
        setError()
        console.log("onSubmit", email.current.value, password.current.value)
        const res = await fetch(URL_SIGNUP, {
            method: "POST",
            body: JSON.stringify({email: email.current.value, password: password.current.value})
        })
        const json = await res.json()

        if (res.ok && json.token) {
            setSuccess("Création effectuée")
        } else {
            setError("Erreur d'authentification")
        }

    }

    return (
       <>
        <h1>Signup page</h1>

        {success && <p style={{color: "#008800"}}>{success}</p>}

        {error && <p style={{color: "#FF0000"}}>{error}</p>}

        <form onSubmit={onSubmit}>
            <label htmlFor="email">Email</label><input ref={email} name="email"/>
            <label htmlFor="password">Password</label><input ref={password} name="password"/>
            <button type="submit">OK</button>
        </form>
      </>
    )
}

export default SignupPage