"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SasaPayResults = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = __importDefault(require("../../config/db/db.config"));
class SasaPayResults extends sequelize_1.Model {
}
exports.SasaPayResults = SasaPayResults;
SasaPayResults.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    MerchantCode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    DestinationChannel: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    RecipientName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    RecipientAccountNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ResultCode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    CheckoutRequestID: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    MerchantRequestID: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ResultDesc: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    SourceChannel: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    SasaPayTransactionCode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    TransactionDate: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    TransactionAmount: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    SasaPayTransactionID: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    MerchantTransactionReference: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    MerchantAccountBalance: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: db_config_1.default,
    tableName: 'sasapaytransactions'
});
