const express = require ("express");
const router = express.Router(); 

const productsController = require("../controllers/productsControllers");
 


router.get("/" , productsController.list);

router.get("/crear" , productsController.form);

router.get( "/:id" , productsController.detail);

router.get("/modified/:id" , productsController.modified);




module.exports = router; 