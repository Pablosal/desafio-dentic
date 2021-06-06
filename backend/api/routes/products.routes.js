const express = require("express");
const ProductController = require("../controllers/products.controller");
const router = express.Router();

router.get("/", ProductController.ObtenerProductos);
router.get("/:id", ProductController.ObtenerProducto);

module.exports = router;
