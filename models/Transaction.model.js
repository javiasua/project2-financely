const { Schema, model } = require('mongoose');

const transactionSchema = new Schema(
    {
      symbol: {
        type: String,
        required: true
      },
      entryPrice: {
        type: Number,
        required: true
      },
      exitPrice: Number,

      user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
      }

    },
    {
        timestamps: true
    }
  )

module.exports = model('Transaction', transactionSchema)