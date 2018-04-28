const mongodb = require("../models/mongodb.js");        //引入mongodb的数据库
const md5 = require("../models/md5.js");               //引入MD5加密
const formidable = require("formidable");             //引入formidable
const path = require('path');                        //引入PATH模块
const fs = require('fs');                           //引入FS模块
const gm = require('gm');                          //引入GM
const ObjectId = require('mongodb').ObjectID;     //引入OjeckID模块





exports.banner = (req, res, next) => {
    mongodb.find("banner", {}, (err, result)=> {
        if (err) {
            res.send("err");
        }
        res.json(result)
    })

};

exports.headerLine = (req, res, next)=> {
    mongodb.find("headerLine", {}, (err, result)=> {
        if (err) {
            res.send("err");
            return;
        }
        res.json(result)
    })
};

exports.jx = (req, res, next)=> {
    mongodb.find("jx",{},(err,result)=>{
        if(err){
            res.send(err)
        }else {
            res.json(result)
        }
    })
};

exports.recommend = (req, res, next)=> {
    mongodb.find("recommend", {}, (err, result)=> {
        if (err) {
            res.send("err");
            return;
        }
        res.json(result)
    })
};

exports.tuijian = (req, res, next)=> {
    mongodb.find("Tuijian", {}, (err, result)=> {
        if (err) {
            res.send("err");
            return;
        }
        res.json(result)
    })

};

exports.hotSell = (req, res, next)=> {
    mongodb.find("hotSell",{},(err,result)=>{
        if(err){
            res.send(err);
        }
        else {
            res.json(result)
        }

    })
};

exports.chujian = (req, res, next)=> {
    mongodb.find("ChuJian",{},(err,result)=>{
        if(err){
            res.send(err);
        }
        else {
            res.json(result)
        }



    })
};

exports.search = (req, res, next)=> {
    mongodb.find("search",{},(err,result)=>{
        if(err){
            res.send(err)
        }
        else {
            res.json(result)
        }
    })
};

exports.hot = (req, res, next) => {
    mongodb.find("hot", {}, (err, result) => {
        if(err){
            res.send(err)
        }
        else {
            res.json(result)
        }

    })
};




exports.MuserInfos = (req, res, next)=> {
    res.json(mUserInfos);
};

exports.searchGoods = (req,res,next)=>{

};

exports.goodsList = (req, res, next) => {
    mongodb.find('P-ProductList', {}, ((err, result) => {
        res.json(result);
    }))
};

exports.MobileGoodsDetails = (req, res, next) => {
    let id = req.query.id;
    let index = req.query.index;
    if (id === undefined || index === undefined) {
        res.json("-1")
    }
    else {
        mongodb.find('P-ProductList', {id: id}, ((err, result) => {
            if (err) {
                res.json("-1")
            }
            else {

                let goods = result[0].goodsImg;
                let goodsDetails = goods[index];
                console.log(goodsDetails);

                res.json(goodsDetails);
            }

        }))
    }

};




exports.MNavBarNewRec = (req, res, next) => {
    mongodb.find('C-newRec', {}, (err, result) => {
        if (err) {
            res.json("-1")
        }
        else {
            res.json(result)
        }
    })
};

exports.MNavBarWeekSell = (req, res, next) => {
    mongodb.find('C-weekSell', {}, (err, result) => {
        if (err) {
            res.json("-1")
        }
        else {
            res.json(result)
        }
    })
};

exports.MNavBarYcJX = (req, res, next) => {
    mongodb.find('C-ycjx', {}, (err, result) => {
        if (err) {
            res.json("-1")
        }
        else {
            res.json(result)
        }
    })
};

exports.MNavBarDiscount = (req, res, next) => {
    mongodb.find('C-Discount', {}, (err, result) => {
        if (err) {
            res.json("-1")
        }
        else {
            res.json(result)
        }
    })
};

exports.MNavBarXsMs = (req, res, next) => {
    mongodb.find('C-XsMs', {}, (err, result) => {
        if (err) {
            res.json("-1")
        }
        else {
            res.json(result)
        }
    })
};

exports.MNavBarSySt = (req, res, next) => {
    mongodb.find('C-syst', {}, (err, result) => {
        if (err) {
            res.json("-1")
        }
        else {
            res.json(result)
        }
    })
};


exports.MNavBarTsCy = (req, res, next) => {
    mongodb.find('C-tscy', {}, (err, result) => {
        if (err) {
            res.json("-1")
        }
        else {
            res.json(result)
        }
    })
};


exports.MNavBarJxLh = (req, res, next) => {
    mongodb.find('C-TjLh', {}, (err, result) => {
        if (err) {
            res.json("-1")
        }
        else {
            res.json(result)
        }
    })
};


exports.userOrderState = (req, res, next) => {
    if (req.session.login != "1") {

        res.json("-1");
    }
    else {

        let selectValue = req.query.select;
        let username = req.session.username;

        if (selectValue !== "") {
            mongodb.find('userOrder', {"name": username}, (err, result) => {
                if (err) {
                    console.log(err)
                }
                else {
                    let orderList = result;
                    let orderState = [];
                    for (let i = 0; i < orderList.length; i++) {
                        if (orderList[i].orderState===selectValue) {
                            orderState.push(orderList[i].orderDetail)
                        }
                    }
                    res.json(orderState)
                }
            });
        }
    }
};

exports.MLeftLists = (req, res, next) => {
    mongodb.find('leftLists', {}, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json(result)
        }
    })

};

exports.MRightLists = (req, res, next) => {
    mongodb.find('rightLists', {}, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json(result)
        }
    })

};

exports.mobileNearby = (req, res, next) => {
    mongodb.find('nearby', {}, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json(result)
        }
    })

};






