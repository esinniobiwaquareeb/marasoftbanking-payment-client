# Marasoftpay API wrapper

This is a NODEJS API wrapper for marasoftpay.com

# Installation

npm install marasoftpay-payment-client

## Usage

const { GetBanks, CreateTransfer } = require("marasoftpay-payment-client");

## Get Banks

let enc_key = **"your-marasoftpay-encryption-key"**;

let banks = GetBanks(enc_key);

## Create Transfer

let api_secret_key = **"your-marasoftbank-secret-api-key"**;

let result = CreateTransfer(enc_key, amount, account_number, bank_code, description, transactionRef, currency);
