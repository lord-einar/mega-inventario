const Prestamo = require("../models/Prestamo");
const Remito = require("../models/Remito");
const Sede = require("../models/Sede");
const Stock = require("../models/Stock");
const TipoArticulo = require("../models/TipoArticulo");
const User = require("../models/User");
const Marca = require("../models/Marca");


Marca.hasMany(Stock, {foreignKey: "id_marca"})
Stock.belongsTo(Marca, {foreignKey: "id_marca"})

TipoArticulo.hasMany(Stock, {foreignKey: "id_tipoArticulo"})
Stock.belongsTo(TipoArticulo, {foreignKey: "id_tipoArticulo"})

Remito.belongsToMany(Stock, {through: "stock_remito"})
Stock.belongsToMany(Remito, {through: "stock_remito"})

Remito.hasOne(Prestamo, {foreignKey: "id_remito"})
Prestamo.belongsTo(Remito, {foreignKey: "id_remito"})

User.hasMany(Remito, {foreignKey: "id_user"})
Remito.belongsTo(User, {foreignKey: "id_user"})

Sede.hasMany(Remito, {foreignKey: "id_sede"})
Remito.belongsTo(Sede, {foreignKey: "id_sede"})

