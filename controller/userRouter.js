const mongodb = require("../models/mongodb.js");        //引入mongodb的数据库
const md5 = require("../models/md5.js");               //引入MD5加密
const formidable = require("formidable");             //引入formidable
const path = require('path');                        //引入PATH模块
const fs = require('fs');                           //引入FS模块
const gm = require('gm');                          //引入GM
const ObjectId = require('mongodb').ObjectID;     //引入OjeckID模块


//注册
exports.userRegister = (req, res, next) => {

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields) {
        var password1 = fields.password1;
        password1 = md5(md5(password1).substr(4, 7) + md5(password1));
        mongodb.find("userinfos", {"username": fields.username1}, (err, result) => {
            if (err) {
                res.send("-1");
                return;
            }
            if (result.length != 0) {
                res.send("2");
                return;
            }
            else {
                mongodb.insertOne("userinfos", {
                    "username": fields.username1,
                    "password": password1,
                    "phone": fields.phone,
                    "email": fields.email,
                    "avatar": "avatar.jpg",
                    "name": "",
                    "age": "",
                    "sex": "",
                    "address": "",
                    "shoppingCart": ""
                }, function (err, rusult) {
                    if (err) {
                        res.send("-1");
                        return;
                    }
                    else {
                        res.send("1");
                        return;
                    }
                })
            }
        })
    })

};


//登录
exports.userlogin = (req, res, next) => {

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields) {
        var password = fields.password;
        password = md5((md5(password).substr(4, 7) + md5(password)));
        mongodb.find("userinfos", {"username": fields.username}, (err, rusult) => {
            if (rusult.length == 0) {
                res.json("2");
                return
            }
            var mongodbpassword = rusult[0].password;
            if (mongodbpassword == password) {
                req.session.login = "1";
                req.session.username = rusult[0].username;
                req.session.useravatar = rusult[0].avatar;
                res.json({
                    state: req.session.login,
                    username: req.session.username,
                    avatar: req.session.useravatar
                });
            }
            else {
                res.json("-1")
            }
        })
    })
};


exports.shoppingCart = (req, res, next) => {
    if (req.session.login != "1") {

        res.send("只有登录才有资格查看");
    }
    else {
        let username = req.session.username;
        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let shoppingCart = fields.shoppingCart;
            mongodb.updateMany('userinfos',
                {"username": username},
                {$set: {"shoppingCart": shoppingCart}},
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {
                        mongodb.find("userinfos", {"username": username}, (err, result) => {
                            if (err) {
                                res.json("-1")
                            }
                            else {
                                res.json(result[0].shoppingCart)
                            }
                        })
                    }
                })

        })

    }
};

exports.MobileUserAddProduct = (req, res, next) => {
    if (req.session.login != "1") {

        res.send("只有登录才有资格查看");
    }
    else {
        let username = req.session.username;
        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let shoppingCart = fields.shoppingCart;
            mongodb.updateMany('userinfos',
                {"username": username},
                {$set: {"shoppingCart": shoppingCart}},
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {
                        res.json("1")
                    }
                })

        })
    }
};

exports.getUserAddressList = (req, res, next) => {
    if (req.session.login != "1") {

        res.send("只有登录才有资格查看");
    }
    else {
        let username = req.session.username;
        mongodb.find('userinfos', {"username": username}, (err, result) => {
            if (err) {
                res.json('-1')
            }
            else {
                let address = result[0].address
                res.json(address)
            }
        })
    }
};

exports.setUserAddressList = (req, res, next) => {
    if (req.session.login != "1") {

        res.send("只有登录才有资格查看");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let address = fields.address;
            let username = req.session.username;
            mongodb.find('userinfos', {"username": username}, (err, result) => {
                if (err) {
                    res.json('-1')
                }
                else {
                    let addressList = result[0].address;
                    addressList.push(address);
                    console.log(addressList);
                    mongodb.updateMany('userinfos',
                        {"username": username},
                        {$set: {"address": addressList}},
                        (err, result) => {
                            if (err) {
                                res.json('-1')
                            }
                            else {
                                res.json("1")
                            }
                        })
                }
            })


        })
    }
};

exports.deleteUserAddressList = (req, res, next) => {
    if (req.session.login != "1") {

        res.send("只有登录才有资格查看");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let index = fields.index;
            let username = req.session.username;
            mongodb.find('userinfos', {"username": username}, (err, result) => {
                if (err) {
                    res.json('-1')
                }
                else {
                    let addressList = result[0].address;
                    addressList.splice(index,1);
                    console.log(addressList)
                    mongodb.updateMany('userinfos',
                        {"username": username},
                        {$set: {"address": addressList}},
                        (err, result) => {
                            if (err) {
                                res.json('-1')
                            }
                            else {
                                res.json("1")
                            }
                        })
                }
            })


        })
    }
};


exports.updateUserAddressList = (req, res, next) => {
    if (req.session.login != "1") {

        res.send("只有登录才有资格查看");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let address = fields.address;
            let index = fields.index;
            let username = req.session.username;
            mongodb.find('userinfos', {"username": username}, (err, result) => {
                if (err) {
                    res.json('-1')
                }
                else {
                    let addressList = result[0].address;
                    addressList.splice(index,1,address);
                    mongodb.updateMany('userinfos',
                        {"username": username},
                        {$set: {"address": addressList}},
                        (err, result) => {
                            if (err) {
                                res.json('-1')
                            }
                            else {
                                res.json("1")
                            }
                        })
                }
            })


        })
    }
};


exports.mrUserAddressList = (req, res, next) => {
    if (req.session.login != "1") {

        res.send("只有登录才有资格查看");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let index = fields.index;
            let username = req.session.username;
            mongodb.find('userinfos', {"username": username}, (err, result) => {
                if (err) {
                    res.json('-1')
                }
                else {
                    let addressList = result[0].address;
                    let address = addressList[index];
                    addressList.splice(index, 1);
                    addressList.unshift(address);
                    mongodb.updateMany('userinfos',
                        {"username": username},
                        {$set: {"address": addressList}},
                        (err, result) => {
                            if (err) {
                                res.json('-1')
                            }
                            else {
                                res.json("1")
                            }
                        })
                }
            })


        })
    }
};

exports.MobileUserPayment = (req, res, next) => {
    if (req.session.login != "1") {

        res.send("只有登录才有资格查看");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let username = req.session.username;
            mongodb.find('userinfos', {"username": username}, (err, result) => {
                if (err) {
                    res.json('-1')
                }
                else {
                    let addressList = result[0].shoppingCart;
                    let address = result[0].address;
                    let addressMr = address[0];
                    res.json({
                        addressList: addressList,
                        addressMr: addressMr
                    })

                }
            })
        })
    }
};


