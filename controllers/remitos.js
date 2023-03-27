const { remitoStock } = require("../helpers/funciones");
const Remito = require("../models/Remito");
const Sede = require("../models/Sede");
const Stock = require("../models/Stock");
const User = require("../models/User");

const remitoGET = async (req, res) => {
  const remitos = await Remito.findAll({
    attributes: ["id", "numero", "userDestino", "prestamo", "fecha"],
    include: [
      { model: User, attributes: ["nombre"] },
      { model: Stock, attributes: ["nombre", "serie"] },
      { model: Sede, attributes: ["nombre", "direccion", "localidad"] },
    ],
  });

  res.json(remitos);
};

const remitoPOST = async (req, res) => {
  const { numero, id_user, id_sede, userDestino, prestamo, fecha, stocks } = req.body;

  const remito = await Remito.create({
    numero,
    id_user,
    id_sede,
    userDestino,
    prestamo,
    fecha,
  });

  let remitoCOmpleto = await remitoStock(remito.id, stocks)

  res.json({remitoCOmpleto});
};

module.exports = {
  remitoGET,
  remitoPOST,
};
