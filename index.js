const axios = require("axios");

function GetBanks(enc_key) {
  axios
    .request({
      method: "POST",
      url: "https://dashboard.marasoftpay.com/api/getbanks",
      data: {
        enc_key: enc_key,
      },
      headers: {
        "Content-Type": "application/json",
        // Authorization: enc_key,
      },
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function CreateTransfer(
  enckey,
  amount,
  account_number,
  bank_code,
  narration,
  transactionRef,
  currency
) {
  axios
    .request({
      method: "POST",
      url: "https://dashboard.marasoftpay.com/api/createtransfer",
      data: {
        enckey: enckey,
        amount: amount,
        AccountNumber: account_number,
        bankCode: bank_code,
        description: narration,
        transactionRef: transactionRef,
        currency: currency,
      },

      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

module.exports = { GetBanks, CreateTransfer };
