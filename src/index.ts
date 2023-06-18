// const express = require("express")
import express, { Request, Response, NextFunction } from "express"

const app = express();
app.use(express.json())

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err)
    res.status(500).send("Something went wrong")
})

app.listen(4000, () => {
    console.log("connected, to the port: 4000")
})
