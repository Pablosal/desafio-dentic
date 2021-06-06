const Producto = require("../models/Producto");
class ProductController {
  constructor() {}

  async ObtenerProductos(req, res) {
    const productos = await Producto.find();
    if (!productos) {
      res.json({ msg: "No existen productos dentro de esta BD" });
    }

    res.json({ items: productos });
  }
  async ObtenerProducto(req, res) {
    const { id } = req.params;
    const producto = await Producto.findById(id);
    if (!producto) res.json({ msg: "No existen producto" });
    res.send( producto );
  }
}

module.exports = new ProductController();
