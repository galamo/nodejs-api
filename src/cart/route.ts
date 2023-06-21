
import express from "express"
const router = express.Router();
const uuid = require("uuid")


let cartsObjData = {};
// let cartArray = [{ cartId: 124, products: [] }]



router.post("/", function (req, res, next) {
    console.log(req.body.user)
    if (!req.body.user) return res.status(400).send("missing user") //zod
    const newCartId = uuid.v4()
    cartsObjData[newCartId] = { products: [] }
    return res.json({ message: "ok", cartId: newCartId })
})


router.get("/:cartId", function (req, res, next) {
    const { cartId } = req.params;
    if (cartsObjData[cartId]) {
        return res.json(cartsObjData[cartId])
    } else {
        res.status(404).send("Cart Not Found")
    }
})

router.put("/:cartId", function (req, res, next) {
    const { productId } = req.body;
    const { cartId } = req.params
    if (cartsObjData[cartId]) {
        cartsObjData[cartId].products.push(productId)
        return res.json({ message: "Product added" })
    } else {
        res.status(404).send("Cart Not Found")
    }
})




export default router;