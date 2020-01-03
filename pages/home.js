
import React, {useRef, useState} from "react"
import Link from "next/link"
import fetch from "isomorphic-unfetch"

const URL_CHECK_TOKEN = "http://localhost:3001/api/check"

const HomePage = ({error}) => {


    return (
       <>
        <h1>Home page</h1>

        {error && <p style={{color: "#FF0000"}}>{error}</p>}

        <Link href="/admin"><a>Aller sur la page d'admin</a></Link>

      </>
    )
}

HomePage.getInitialProps = async ctx => {

    const res = await fetch(URL_CHECK_TOKEN, {
        method: "POST",

    })
    const json = await res.json()

    console.log("json", json)

    if (res.ok) {
        return {data: json}
    }

    return {error: json.message}


}

export default HomePage