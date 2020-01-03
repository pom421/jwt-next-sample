
import {check} from "../../services/auth"

export default async (req, res) => {
    res.setHeader("Content-Type", "application/json")

    const {token} = await req.cookies

    console.log("token from cookie", token)

    try {
        const result = check(token)
        // const result = check("ZyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo0LCJuYW1lIjoiQ2hhcmxlcyBDaGFwbGluIn0sImlhdCI6MTU3ODA0OTExMSwiZXhwIjoxNTc4MDcwNzExfQ.C1E5xcdRJP6H-beW0xG8oy3WtEiykWAXHbAZLSgvvwU")
        return res.status(200).json({message: result})
    } catch (error) {
        return res.status(401).json({ message: "Problème d'authentification " + error })
    }


}
