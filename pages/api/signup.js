import {hashPassword, compareWithHash} from "../../services/bcrypt"

import * as bcrypt from "bcryptjs"

export default async (req, res) => {
    res.setHeader("Content-Type", "application/json")

    const {email, password} = await JSON.parse(req.body)

    const hashedPassword = await hashPassword(password)

    // TODO store the user and the hashpassword

    // const match = await compareWithHash("azeaze", hashedPassword)

    // if (!match) {
    //     console.error("Incorrect password")
    // } else {
    //     console.log("est égale à azeaze")

    // }

    return res.status(200).json({message: "OK"})

}
