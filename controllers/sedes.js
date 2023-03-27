const Sede = require("../models/Sede");



const sedeGET = async (req, res) => {
  const sedes = await Sede.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt']},
    order: [["nombre", "ASC"]]
  });

  res.json(sedes);
};

const sedePOST = async (req, res) => {
  const { nombre, direccion, localidad, provincia, pais } = req.body;

  const sedes = await Sede.create({ nombre, direccion, localidad, provincia, pais });

  res.json(sedes);
};


module.exports = {
    sedeGET,
    sedePOST
};
