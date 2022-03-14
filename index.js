const express  = require("express");

const app = get(express);

const MasterAccount = require("/MasterAccount");



//User Schema


const User = app.get({
    
    firstName:first_name,//required
    MiddleName:Middle_name,//optional
    lastName : lastname,//required
    age:age,
    email:Email,
    address:Address,
    gender:Gender,
    type:customer,//(default)//Employee
    CreatedAt:Date.now(),
    UpdatedAt:Delay-Date.now

});

//BranchDetail Schema

const Branch = app.get({
    name :Name,//required
    address:Address,//reuired
    IFSC   : Ifsc_code,
    MICR   : MICR-Code,
    CreatedAt:Date.now(),
    UpdatedAt:delay-Date.now(),

})

//MasterAccount Schema

const MasterAccount = app.get({
    balance:Balance,
    CreatedAt:createdAt,
    updatedAt:updatedAt,
})

//SavingsAccount Schema

const SavingsAccount = app.get({
    account_number:AccountNumber,
    balance:Accountbalance,
    interestRate:interet,
    CreatedAt:createdAt.Date.now(),
    UpdatedAt:delay-Date.now()
})

//FixedAccount Schema

const FixedAccount = app.get({
    account_number:AccountNumber,
    balance:Accountbalance,
    interestRate:interest,
    startDate:Date.now(),
    maturityDate:Date.now()+delay,
    CreatedAt:Date.now(),
    UpdatedAt:delay-Date.now(),
})

