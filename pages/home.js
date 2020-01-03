import React from "react"
import Link from "next/link"
import nextCookies from "next-cookies"
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

const isSSR = ctx => ctx && ctx.req

HomePage.getInitialProps = async ctx => {
    console.log(ctx && ctx.req ? "SSR" : "CSR")

    const {token} = nextCookies(ctx)

    let options = {
        method: "POST"
    }

    if (isSSR(ctx)) {
        options = {...options,  headers: {
            token
        }}
    }

    const res = await fetch(URL_CHECK_TOKEN, options)
    const json = await res.json()

    if (res.ok) {
        return {data: json}
    }

    return {error: json.message}


}

export default HomePage