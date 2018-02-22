const mongodb = require("../models/mongodb.js");        //引入mongodb的数据库
const md5 = require("../models/md5.js");               //引入MD5加密
const formidable = require("formidable");             //引入formidable
const path = require('path');                        //引入PATH模块
const fs = require('fs');                           //引入FS模块
const gm = require('gm');                          //引入GM
const ObjectId = require('mongodb').ObjectID;     //引入OjeckID模块

const userOrder = [
    {

        orderNumber: "15434567890",
        userName: "111",
        state: "已支付",
        price: "￥190",
        orderTime: "2018-1-21 01:08:08"
    },
    {

        orderNumber: "15434567891",
        userName: "222",
        state: "已支付",
        price: "￥191",
        orderTime: "2018-1-21 02:08:08"
    },
    {

        orderNumber: "15434567892",
        userName: "333",
        state: "已支付",
        price: "￥193",
        orderTime: "2018-1-21 03:08:08"
    },
    {

        orderNumber: "15434567894",
        userName: "4444",
        state: "已支付",
        price: "￥194",
        orderTime: "2018-1-21 04:08:08"
    },
    {

        orderNumber: "15434567895",
        userName: "5555",
        state: "已支付",
        price: "￥195",
        orderTime: "2018-1-21 05:08:08"
    },
    {

        orderNumber: "15434567896",
        userName: "666",
        state: "已支付",
        price: "￥196",
        orderTime: "2018-1-21 06:08:08"
    },
    {

        orderNumber: "15434567897",
        userName: "777",
        state: "已支付",
        price: "￥197",
        orderTime: "2018-1-21 07:08:08"
    },
    {

        orderNumber: "15434567898",
        userName: "888",
        state: "已支付",
        price: "￥198",
        orderTime: "2018-1-21 08:08:08"
    },
    {

        orderNumber: "15434567899",
        userName: "9999",
        state: "已支付",
        price: "￥199",
        orderTime: "2018-1-21 09:08:08"
    },
    {

        orderNumber: "15434567996",
        userName: "000",
        state: "已支付",
        price: "￥186",
        orderTime: "2018-1-21 16:08:08"
    }
];
const OrderDetail = [
    {
        orderInfo: [{
            orderNumber: '12345678909',
            orderTime: '2018-02-14,08:08:08',
            name: "七七",
            phoneNumber: "15550739985",
            address: "山东省菏泽市巨野县永丰街道办事处健康路77号",
            orderState: "已付款",
            orderStyle: "在线支付",
            orderAmount: "￥199",
        }],
        orderDetail: [
            {
                img: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg',
                title: '亿成优生鲜 爱尔兰面包蟹（1000-800g*2只）熟冻黄金蟹 海鲜 螃蟹',
                pirce: '￥191',
                number: '1',
                hj: '191'
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg',
                title: '亿成优生鲜 爱尔兰面包蟹（1000-800g*2只）熟冻黄金蟹 海鲜 螃蟹',
                pirce: '￥192',
                number: '1',
                hj: '192'
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg',
                title: '亿成优生鲜 爱尔兰面包蟹（1000-800g*2只）熟冻黄金蟹 海鲜 螃蟹',
                pirce: '￥193',
                number: '1',
                hj: '193'
            }
        ]
    }
];
const admProduct = [
    {
        id: '001',
        title: '聚福鲜 冷冻智利三文鱼刺身 500g 袋装 海鲜年货 生鱼片',
        price: '￥191',
        state: 'true'
    },
    {
        id: '002',
        title: '聚福鲜 冷冻智利三文鱼刺身 500g 袋装 海鲜年货 生鱼片',
        price: '￥192',
        state: 'true'
    },
    {
        id: '003',
        title: '聚福鲜 冷冻智利三文鱼刺身 500g 袋装 海鲜年货 生鱼片',
        price: '￥193',
        state: 'true'
    },
    {
        id: '004',
        title: '聚福鲜 冷冻智利三文鱼刺身 500g 袋装 海鲜年货 生鱼片',
        price: '￥194',
        state: 'true'
    },
    {
        id: '005',
        title: '聚福鲜 冷冻智利三文鱼刺身 500g 袋装 海鲜年货 生鱼片',
        price: '￥195',
        state: 'true'
    },
    {
        id: '006',
        title: '聚福鲜 冷冻智利三文鱼刺身 500g 袋装 海鲜年货 生鱼片',
        price: '￥196',
        state: 'true'
    },
    {
        id: '007',
        title: '聚福鲜 冷冻智利三文鱼刺身 500g 袋装 海鲜年货 生鱼片',
        price: '￥197',
        state: 'true'
    },
    {
        id: '008',
        title: '聚福鲜 冷冻智利三文鱼刺身 500g 袋装 海鲜年货 生鱼片',
        price: '￥198',
        state: 'true'
    },
    {
        id: '009',
        title: '聚福鲜 冷冻智利三文鱼刺身 500g 袋装 海鲜年货 生鱼片',
        price: '￥199',
        state: 'true'
    },
    {
        id: '010',
        title: '聚福鲜 冷冻智利三文鱼刺身 500g 袋装 海鲜年货 生鱼片',
        price: '￥190',
        state: 'true'
    }
];
const userList = [
    {
        id: '001',
        userName: '一一',
        email: "1574408800@qq.com",
        iphoneNumber: '15550739985',
        registerTime: '2018-01:01:01，01:01:01'
    },
    {
        id: '002',
        userName: '二二',
        email: "1574408801@qq.com",
        iphoneNumber: '15550739985',
        registerTime: '2018-01:02:02，02:02:02'
    },
    {
        id: '003',
        userName: '三三',
        email: "1574408802@qq.com",
        iphoneNumber: '15550739985',
        registerTime: '2018-01:03:03，03:03:03'
    },
    {
        id: '004',
        userName: '四四',
        email: "1574408804@qq.com",
        iphoneNumber: '15550739985',
        registerTime: '2018-01:04:04，04:04:04'
    },
    {
        id: '005',
        userName: '五五',
        email: "1574408805@qq.com",
        iphoneNumber: '15550739985',
        registerTime: '2018-01:05:05，05:05:05'
    },
    {
        id: '006',
        userName: '六六',
        email: "1574408806@qq.com",
        iphoneNumber: '15550739985',
        registerTime: '2018-01:06:06，06:06:06'
    },
    {
        id: '007',
        userName: '七七',
        email: "1574408807@qq.com",
        iphoneNumber: '15550739985',
        registerTime: '2018-01:07:07，07:07:07'
    },
    {
        id: '008',
        userName: '八八',
        email: "1574408808@qq.com",
        iphoneNumber: '15550739985',
        registerTime: '2018-01:08:08，08:08:08'
    },
    {
        id: '009',
        userName: '九九',
        email: "1574408809@qq.com",
        iphoneNumber: '15550739989',
        registerTime: '2018-01:09:09，09:09:09'
    },
    {
        id: '010',
        userName: '零零',
        email: "1574408811@qq.com",
        iphoneNumber: '15550739985',
        registerTime: '2018-01:10:10，10:10:10'
    }
];

//管理员注册
exports.admRegester = (req, res, next) => {

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields) {
        var password1 = fields.password1;
        password1 = md5(md5(password1).substr(4, 7) + md5(password1));
        mongodb.find("admInfos", {"username": fields.username1}, (err, result) => {
            if (err) {
                res.send("-2");
                return;
            }
            if (result.length != 0) {
                res.send("2");
                return;
            }
            else {
                mongodb.insertOne("admInfos", {
                    "username": fields.username1,
                    "password": password1,
                    "phone": fields.phoneNumber,
                    "avatar": "avatar.jpg",
                }, function (err, rusult) {
                    if (err) {
                        res.send("-1");
                        console.log('Cookies: ', req.cookies);
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


//管理员登录
exports.admLogin = (req, res, next)=> {

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields) {
        var password = fields.password;
        password = md5((md5(password).substr(4, 7) + md5(password)));
        mongodb.find("admInfos", {"username": fields.username}, (err, rusult) => {
            if (rusult.length == 0) {
                res.send("2");
                return
            }
            var mongodbpassword = rusult[0].password;
            if (mongodbpassword == password) {
                req.session.login = "1";
                req.session.username = rusult[0].username;
                req.session.useravatar = rusult[0].avatar;
                res.send({
                    login: req.session.login,
                    username: req.session.username,
                    useravatar: req.session.useravatar
                });
                return;
            }
            else {
                res.send("-1")
            }
        })
    })
};

exports.userOrder = (req, res, next)=> {
    /*res.json(userOrder)*/
    mongodb.find()

};
exports.admUserOrderDetail = (req, res, next)=> {
    res.json(OrderDetail)

};
exports.admProduct = (req, res, next)=> {
    res.json(admProduct)

};
exports.admProductDetails = (req, res, next)=> {
    res.json(admProduct)

};
exports.userList = (req, res, next)=> {
    res.json(userList)

};

