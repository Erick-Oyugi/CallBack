import { DataTypes, Model } from "sequelize";
import connection from "../../config/db/db.config";


interface SasaPayAttributes {
    id : string
    MerchantCode : string
    DestinationChannel : string
    RecipientName : string
    RecipientAccountNumber : string
    ResultCode : string
    CheckoutRequestID : string
    MerchantRequestID : string
    ResultDesc : string
    SourceChannel : string
    SasaPayTransactionCode : string
    TransactionDate : string
    TransactionAmount : string
    SasaPayTransactionID : string
    MerchantTransactionReference : string
    MerchantAccountBalance : string
   
}

export class SasaPayResults extends Model <SasaPayAttributes> {
  MerchantTransactionReference: any;
}

SasaPayResults.init(
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

        DestinationChannel: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        RecipientName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        RecipientAccountNumber:{
        type: DataTypes.STRING,
        allowNull: false,
        },
        ResultCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        CheckoutRequestID:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        MerchantRequestID:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        ResultDesc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        SourceChannel: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        SasaPayTransactionCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        TransactionDate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        TransactionAmount: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        SasaPayTransactionID:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        MerchantTransactionReference: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        MerchantAccountBalance: {
            type: DataTypes.STRING,
            allowNull: false,
        },
      
    }, {


    sequelize : connection,
    tableName: 'sasapaytransactions'
}
)