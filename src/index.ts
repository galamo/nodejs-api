// const express = require("express")
import express, { Request, Response, NextFunction } from "express"
import productsRouter from "./products/route"
import cartRouter from "./cart/route"
import authRouter from "./auth/route"
import jsonwebtoken from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const app = express();
app.use(express.json())
app.get("/health-check", function (req, res, next) {
    res.send("api is ok")
})
app.use("/auth", authRouter)
app.use(verifyAuthentication)
app.use("/products", productsRouter)
app.use("/cart", cartRouter)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err)
    res.status(500).send("Something went wrong")
})

app.listen(4000, () => {
    console.log("connected, to the port: 4000")
})

function verifyAuthentication(req: Request, res: Response, next) {
    const { authorization: token } = req.headers
    jsonwebtoken.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) {
            return res.status(401).send("Authentication error")
        } else {
            console.log(decoded)
            return next()
        }
    });
}