import {check} from "../../services/auth"

export default (req, res) => {
    res.setHeader("Content-Type", "application/json")

    let token = req.cookies && req.cookies.token
        ? req.cookies.token
        : req.headers.token
        ? req.headers.token
        : ""

    try {
        const result = check(token)
        return res.status(200).json({message: result})
    } catch (error) {
        return res.status(401).json({ message: "Problème d'authentification " + error })
    }


}
