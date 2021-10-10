const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productImage: {type:String, required:true},
    productName: {type:String, required:true},
    productWishlistIcon: {type:String, required:true},
    productDescription: {type:String, required:true},
    productPriceActual:  {type:Number, required:true},
    productDiscountPercentage: {type:Number, required:true},
    productPrice: {type:String, required:true},
    productRatingIcon: {type:String, required:true},
},{
    versionKey:false,
    timestamps:true
})

const Product = mongoose.model("product",productSchema);

module.exports = Product;