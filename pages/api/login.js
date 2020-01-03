import {authenticate} from "../../services/auth"
import * as cookie from "cookie"

export default async (req, res) => {
    res.setHeader("Content-Type", "application/json")

    const {email, password} = await req.body

    try {
        const {user, token} = authenticate(email, password)
        res.setHeader("Set-Cookie", cookie.serialize("token", token, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 1 // 1 day
        }));
        return res.status(200).json(user)

    } catch (error) {
        console.error(error)
        return res.status(401).json({error: "Authenticate doesn't succed"})
    }

}
