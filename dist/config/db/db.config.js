"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const connection = new sequelize_typescript_1.Sequelize({
    define: {
        // The `timestamps` field specify whether or not the `createdAt` and `updatedAt` fields will be created.
        // This was true by default, but now is false by default
        timestamps: false
    },
    dialect: "mysql", // Specifies the database dialect
    host: "192.168.19.83", // Specifies the database host
    username: "root", // Specifies the database username
    password: "G@p5t@ck22", // Specifies the database password
    database: "sasapay", // Specifies the database name
    logging: true, // Disables logging of SQL queries
});
exports.default = connection;
