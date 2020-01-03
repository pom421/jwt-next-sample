
import {login} from "../../services/auth"

export default async (req, res) => {
    res.setHeader("Content-Type", "application/json")

    const {email, password} = await req.body

    const result = login(email, password)

    return res.status(200).json(result)

}
