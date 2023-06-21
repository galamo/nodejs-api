
import express from "express"

import zod from "zod"
const router = express.Router();

const users = [];

const signupSchema = zod.object({
    email: zod.string(),
    password: zod.string(),
    phone: zod.string().max(20),
    gender: zod.enum(["male", "female", "them"])
})



// router.post("/login", function (req, res, next) {
//     return res.json()
// })

function middleware(req, res, next) {
    try {
        signupSchema.parse(req.body)
        return next()
    } catch (error) {
        return res.status(400)
    }
}

router.post("/sign-up", middleware, function (req, res, next) {
    const user = users.find(u => u.email === req.body?.email?.toLowerCase())
    if (user) return res.status(409).send("user already exist")
    users.push(req.body)
    return res.json({ message: "user successfully added!" })
})


export default router;