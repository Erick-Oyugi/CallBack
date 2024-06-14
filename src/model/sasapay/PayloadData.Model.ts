import { DataTypes, Model } from "sequelize";
import connection from "../../config/db/db.config";


interface PayloadAttributes {
    id : string
    MerchantCode : string
    Currency : string
    Amount : string
    ReceiverMerchantCode : string
    AccountReference : string
    ReceiverAccountType : string
    NetworkCode : string
    CallBackURL : string
    Reason : string
    MerchantTransactionReference : string,
    YourCallBackURL : string
 

}

export class PayloadResults extends Model <PayloadAttributes> {
    [x: string]: any;
}

PayloadResults.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        MerchantCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        Currency: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Amount: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ReceiverMerchantCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        AccountReference: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ReceiverAccountType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        NetworkCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        CallBackURL: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Reason: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        MerchantTransactionReference: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        YourCallBackURL: {
            type: DataTypes.STRING,
            allowNull: false,
        },

   
    }, {


    sequelize : connection,
    tableName: 'payloaddata'
}
)