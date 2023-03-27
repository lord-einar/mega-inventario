const Marca = require("../models/Marca");
const Remito = require("../models/Remito");
const Stock = require("../models/Stock");
const TipoArticulo = require("../models/TipoArticulo");

const stockGET = async (req, res) => {
  const stocks = await Stock.findAll({
    include: [
      { model: Marca, attributes: ["nombre"] },
      { model: TipoArticulo, attributes: ["nombre"] },
      { model: Remito },
    ],
    attributes: {
      exclude: ["id_marca", "id_tipoArticulo", "id_remito", "createdAt", "updatedAt"],
    },
  });

  res.json(stocks);
};

const stockPOST = async (req, res) => {
  const {
    nombre,
    id_marca,
    id_tipoArticulo,
    serie,
    serviceTag,
    id_remito,
    fechaBaja,
  } = req.body;

  const sedes = await Stock.create({
    nombre,
    id_marca,
    id_tipoArticulo,
    serie,
    serviceTag,
    id_remito,
    fechaBaja,
  });

  res.json(sedes);
};

module.exports = {
  stockGET,
  stockPOST,
};
