const express  = require("express");

const app = get(express)


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

