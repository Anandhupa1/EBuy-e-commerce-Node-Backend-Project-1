const { auth } = require("../middlewares/auth");
const { UserModel } = require("../models/user.model");

const cartRouter = require("express").Router();


cartRouter.patch("/", auth, async (req, res) => {
    try {
        let userInfo = await UserModel.findById(req.body.userId);

        if (!req.body.productId) {
            res.send(userInfo);
        } else {
            // Check if product exists or not
            let cart = userInfo.cart;
            const productExistsIndex = cart.findIndex(cartProductId => cartProductId.equals(req.body.productId));
            
            if (productExistsIndex !== -1) {
                res.status(409).json("Product already exists in cart");
            } else {
                userInfo.cart.push(req.body.productId);
                await userInfo.save();
                res.send(userInfo);
            }
        }
    } catch (error) {
        console.log(error);
    }
});








module.exports={cartRouter}