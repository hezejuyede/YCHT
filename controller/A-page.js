
const mongodb = require("../models/mongodb.js");        //引入mongodb的数据库
const md5 = require("../models/md5.js");               //引入MD5加密
const formidable = require("formidable");             //引入formidable
const path = require('path');                        //引入PATH模块
const fs = require('fs');                           //引入FS模块
const gm = require('gm');                          //引入GM
const ObjectId = require('mongodb').ObjectID;     //引入OjeckID模块





//后台系统网站
exports.HTSystem = (req, res, next) => {
    res.render("H");

};
//移动端网站
exports.MobileYSX = (req, res, next) => {
    res.render("M")

};

//PC端网站
exports.PcYSX = (req, res, next) => {
    res.render("P")

};


//水汪汪主页
exports.home = (req, res, next) => {
    res.render("./index/home")
};


//商品详情页面
exports.EveryGoodsDetails = (req, res, next) => {


    res.render("./ycysx/EveryGoodsDetails")


};

//商品详情页面
exports.buyPage = (req, res, next) => {


    res.render("./ycysx/BuyPage.ejs")


};


//商品详情页面
exports.payPage = (req, res, next) => {


    res.render("./ycysx/PayPage.ejs")


};














