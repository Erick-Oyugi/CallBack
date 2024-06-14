"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayloadResults = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = __importDefault(require("../../config/db/db.config"));
class PayloadResults extends sequelize_1.Model {
}
exports.PayloadResults = PayloadResults;
PayloadResults.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    MerchantCode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Currency: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Amount: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ReceiverMerchantCode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    AccountReference: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ReceiverAccountType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    NetworkCode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    CallBackURL: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Reason: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    MerchantTransactionReference: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    YourCallBackURL: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: db_config_1.default,
    tableName: 'payloaddata'
});
