const path = require ("path");
const fs = require ("fs");
const rutaAlJson = path.resolve(__dirname, "../data/products.json");
const productsJson = fs.readFileSync(rutaAlJson, {encoding: "utf-8"});
const myProducts = JSON.parse(productsJson);

//const Product = require("../data/models/Product");

//  list: (req, res)=>{
    //res.render ("products",{productos: myProducts})
//},

//    myProducts.forEach(product => {
 //   if (product.id == req.params.id) {

const productsController = {
    list: (req, res)=>{
      res.render ("products",{productos: myProducts})
  },

    detail: (req, res)=>{
     let product = myProducts.find(product=>{
      return product.id == req.params.id;
     });
      res.render("detail", {producto: product});
      },

       form: (req, res)=>{
        res.render("form");
    },

        
    modified: (req, res)=>{
            res.render("modified");
        }

 };



module.exports = productsController;