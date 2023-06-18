
import express from "express"
import products from "./data"
const router = express.Router();


router.get("/", function (req, res, next) {
    return res.json(products)
})


router.get("/:id", function (req, res, next) {
    return res.json(products) // filter by id
})

export default router;