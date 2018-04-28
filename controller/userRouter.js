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
        let time = fields.time;
        password1 = md5(md5(password1).substr(4, 7) + md5(password1));
        mongodb.find("userinfos", {"username": fields.username1}, (err, result) => {
            if (err) {
                res.json("-2");
                return;
            }
            if (result.length !== 0) {
                res.json("2");

            }
            else {
                mongodb.insertOne("userinfos", {
                    "username": fields.username1,
                    "password": password1,
                    "phone": fields.phone,
                    "email": fields.email,
                    "avatar": "http://www.ilqiqi.top/pc/img/content/content_banner/no_login.jpg",
                    "time ":time,
                    "name": "",
                    "age": "",
                    "sex": "",
                    "balance":0.00,
                    "collection":[],
                    "address": [],
                    "shoppingCart": ""
                }, function (err, rusult) {
                    if (err) {
                        res.json("-1");

                    }
                    else {
                        res.json("1");
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

exports.JQUserAddProduct = (req, res, next) => {
    if (req.session.login != "1") {

        res.send("只有登录才有资格查看");
    }
    else {
        let username = req.session.username;
        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let shoppingCart = fields.shoppingCart;
            shoppingCart=JSON.parse(shoppingCart.substr(1, shoppingCart.length));
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

exports.setFollowGoods = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        let username = req.session.username;

        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let FollowGoods = fields.FollowGoods;
            mongodb.find("userinfos", {"username": username}, ((err, result) => {
                if (err) {
                    console.log(err);
                }
                else {

                    let collection = result[0].collection;
                    let FollowGoodsTitle = FollowGoods.title;
                    if (collection.length === 0) {
                        collection.push(FollowGoods);
                        mongodb.updateMany("userinfos",
                            {"username": username},
                            {$set: {"collection": collection}},
                            ((err, result) => {
                                if (err) {
                                    res.json("-1")
                                }
                                else {
                                    res.json("1")
                                }
                            }))
                    }
                    else if (collection.length > 0) {

                        for (let i = 0; i < collection.length; i++) {
                            if (collection[i].title === FollowGoodsTitle) {
                                collection[i].num++;

                            }
                            else {
                                collection.push(FollowGoods);
                            }
                        }
                        let col1 = [];
                        let col2 = [];

                        for (let i = 0; i < collection.length; i++) {
                            if (collection[i].title !== FollowGoodsTitle) {
                                col1.push(collection[i])
                            }
                            else if (collection[i].title === FollowGoodsTitle) {
                                col2.push(collection[i])
                            }
                        }
                        let one = col2[0];
                        col1.push(one);

                        mongodb.updateMany("userinfos",
                            {"username": username},
                            {$set: {"collection": col1}},
                            ((err, result) => {
                                if (err) {
                                    res.json("-1")
                                }
                                else {
                                    res.json("1")
                                }
                            }))
                    }
                }
            }))
        })

    }
};

exports.getFollowGoods = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        let username = req.session.username;

        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            mongodb.find("userinfos", {"username": username}, ((err, result) => {
                if (err) {
                    console.log("-1");
                }
                else {
                    let FollowGoods = result[0].collection;
                    res.json(FollowGoods)
                }
            }))
        })

    }
};

exports.deleteFollowGoods = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        let username = req.session.username;

        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let index = fields.index;
            mongodb.find("userinfos", {"username": username}, ((err, result) => {
                if (err) {
                    console.log(err);
                }
                else {

                    let collection = result[0].collection;
                    collection.splice(index,1);
                    mongodb.updateMany("userinfos",
                        {"username": username},
                        {$set: {"collection": collection}},
                        ((err, result) => {
                            if (err) {
                                res.json("-1")
                            }
                            else {
                                res.json("1")
                            }
                        }))

                }
            }))
        })

    }
};

exports.DetailsDeleteFollowGoods = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        let username = req.session.username;

        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let index = fields.index;
            mongodb.find("userinfos", {"username": username}, ((err, result) => {
                if (err) {
                    console.log(err);
                }
                else {

                    let collection = result[0].collection;
                    collection.pop();
                    mongodb.updateMany("userinfos",
                        {"username": username},
                        {$set: {"collection": collection}},
                        ((err, result) => {
                            if (err) {
                                res.json("-1")
                            }
                            else {
                                res.json("1")
                            }
                        }))

                }
            }))
        })

    }
};

exports.setUserOrderState = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        let username = req.session.username;

        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let orderInfo = fields.orderInfo;
            mongodb.insertOne("userOrder",
                {
                    "orderNumber": orderInfo.orderNumber,
                    "orderTime": orderInfo.time,
                    "name": orderInfo.name,
                    "phoneNumber": orderInfo.phoneNumber,
                    "address": orderInfo.address,
                    "orderState": orderInfo.orderState,
                    "orderStyle": orderInfo.orderStyle,
                    "orderAmount": orderInfo.orderAmount,
                    "orderDetail": orderInfo.orderDetail
                }, ((err, result) => {
                    if (err) {
                        res.json("-1")
                    }
                    else {
                        res.json("1")
                    }
                }))
        })

    }
};

exports.getUserOrderState = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        let username = req.session.username;

        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let num = fields.num;
            mongodb.find("userOrder", {"orderNumber": num}, ((err, result) => {
                if (err) {
                    res.json("-1")
                }
                else {
                    res.json(result)
                }

            }))

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

exports.PCsetUserAddressList = (req, res, next) => {
    if (req.session.login != "1") {

        res.send("只有登录才有资格查看");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let name = fields.name;
            let phone = fields.phone;
            let citys = fields.citys;
            let cityDetails = fields.cityDetails;
            let address = {
                name:name,
                phone:phone,
                citys:citys,
                cityDetails:cityDetails
            };

            let username = req.session.username;
            mongodb.find('userinfos', {"username": username}, (err, result) => {
                if (err) {
                    res.json('-1')
                }
                else {
                    let addressList = result[0].address;
                    if(addressList.length>0){
                        addressList.push(address);
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
                    else {
                        let addressList = [];
                        addressList.push(address);
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

                }
            })


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
            console.log(fields.address)
            let username = req.session.username;
            mongodb.find('userinfos', {"username": username}, (err, result) => {
                if (err) {
                    res.json('-1')
                }
                else {
                    let addressList = result[0].address;
                    if(addressList.length>0){
                        addressList.push(address);
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
                    else {
                        let addressList = [];
                        addressList.push(address);
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

exports.userBalance = (req, res, next) => {
    if (req.session.login !== "1") {

        res.send("只有登录才有资格查看");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let username = req.session.username;
            mongodb.find('userinfos', {"username": username}, (err, result) => {
                if (err) {
                    console.log(err)
                }
                else {
                    let Balance = result[0].balance;
                    res.json(Balance)

                }
            });
        })
    }
};

exports.userOrderPJ = (req, res, next) => {
    if (req.session.login !== "1") {

        res.send("只有登录才有资格查看");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let username = req.session.username;
            mongodb.find('userOrder', {"name": username}, (err, result) => {
                if (err) {
                    console.log(err)
                }
                else {
                    res.json(result)

                }
            });
        })
    }
};

exports.getUserInfo = (req, res, next) => {
    if (req.session.login !== "1") {

        res.send("只有登录才有资格查看");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let username = req.session.username;
            mongodb.find('userinfos', {"username": username}, (err, result) => {
                if (err) {
                    console.log(err)
                }
                else {

                    let avatar = result[0].avatar;
                    let phone = result[0].phone;
                    let email = result[0].email;
                    let name = result[0].name;
                    let age = result[0].age;
                    let sex = result[0].sex;

                    res.json({
                        avatar: avatar,
                        phone: phone,
                        email: email,
                        name: name,
                        age: age,
                        sex: sex
                    })

                }
            });
        })
    }
};


exports.UserChangeAvatar = (req, res, next) => {
    if (req.session.login !== "1") {

        res.send("只有登录才有资格查看");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let username = req.session.username;
            let avatar = fields.avatar;
            mongodb.updateMany('userinfos',
                {"username": username},
                {$set: {"avatar": avatar}},
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


exports.UserChangePhone = (req, res, next) => {
    if (req.session.login !== "1") {

        res.send("只有登录才有资格查看");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let username = req.session.username;
            let phone = fields.phone;
            mongodb.updateMany('userinfos',
                {"username": username},
                {$set: {"phone": phone}},
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

exports.UserChangeID = (req, res, next) => {
    if (req.session.login !== "1") {

        res.send("只有登录才有资格查看");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let username = req.session.username;
            let name = fields.id;
            mongodb.updateMany('userinfos',
                {"username": username},
                {$set: {"name": name}},
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

exports.UserChangeSex = (req, res, next) => {
    if (req.session.login !== "1") {

        res.send("只有登录才有资格查看");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let username = req.session.username;
            let sex = fields.sex;
            mongodb.updateMany('userinfos',
                {"username": username},
                {$set: {"sex": sex}},
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

exports.UserChangeAge = (req, res, next) => {
    if (req.session.login !== "1") {

        res.send("只有登录才有资格查看");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let username = req.session.username;
            let age = fields.age;
            mongodb.updateMany('userinfos',
                {"username": username},
                {$set: {"age": age}},
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

exports.UserChangeEmail = (req, res, next) => {
    if (req.session.login !== "1") {

        res.send("只有登录才有资格查看");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let username = req.session.username;
            let email = fields.email;
            mongodb.updateMany('userinfos',
                {"username": username},
                {$set: {"email": email}},
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


exports.UserChangePassWord = (req, res, next) => {
    if (req.session.login !== "1") {

        res.send("只有登录才有资格查看");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let username = req.session.username;
            let password = fields.password1;
            let password2 = fields.password2;
            password = md5((md5(password).substr(4, 7) + md5(password)));
            password2 = md5((md5(password2).substr(4, 7) + md5(password2)));
            mongodb.find("userinfos", {"username": username}, (err, result) => {
                if (result.length === 0) {
                    res.send("2");

                }
                let mongodbPassword = result[0].password;
                if (mongodbPassword === password) {
                    mongodb.updateMany('userinfos', {"username": username},
                        {
                            $set: {"password": password2}
                        },
                        (err, result) => {
                            if (err) {
                                console.log(err)
                            }
                            else {

                                res.json("1")

                            }
                        }
                    )

                }
                else {
                    res.send("-1")
                }
            })
        })
    }
};


exports.UserChatList = (req, res, next) => {
    if (req.session.login !== "1") {

        res.send("只有登录才有资格查看");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let username = req.session.username;
            let chatMessage = fields.chatMessage;
            mongodb.find("userinfos", {"username": username}, (err, result) => {
                if(err){
                    console.log(err)
                }
                else {
                    let chatList =result[0].chatList
                    chatList = chatMessage;
                    mongodb.updateMany('userinfos', {"username": username},
                        {
                            $set: {"chatList": chatList}
                        },
                        (err, result) => {
                            if (err) {
                                console.log(err)
                            }
                            else {

                                res.json("1")

                            }
                        }
                    )

                }



            })


        })
    }
};


exports.getUserChatList = (req, res, next) => {
    if (req.session.login !== "1") {

        res.send("只有登录才有资格查看");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let username = req.session.username;
            let chatMessage = req.session.chatMessage;
            mongodb.find("userinfos", {"username": username}, (err, result) => {
                if (err) {
                    console.log(err)
                }
                else {
                    let a = result[0].chatList;
                    for (let i = 0; i < a.length; i++) {
                        if (a[i].state === "2") {
                            a[i].state = "1"
                        }
                    }
                    mongodb.updateMany('userinfos', {"username": username},
                        {
                            $set: {"chatList": a}
                        },
                        (err, result) => {
                            if (err) {
                                console.log(err)
                            }
                            else {
                                mongodb.find("userinfos", {"username": username}, (err, result) => {
                                    if (err) {
                                        console.log(err)
                                    }
                                    else {
                                        res.json(result[0].chatList)
                                    }
                                })

                            }
                        }
                    )

                }
            })


        })
    }
};


exports.getUserWDChatList = (req, res, next) => {
    if (req.session.login !== "1") {

        res.send("只有登录才有资格查看");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let username = req.session.username;
            let chatMessage = req.session.chatMessage;
            mongodb.find("userinfos", {"username": username}, (err, result) => {
                if (err) {
                    console.log(err)
                }
                else {
                    let a = result[0].chatList;
                    let b=[];
                    for (let i = 0; i < a.length; i++) {
                        if (a[i].state === "2") {
                            b.push(a)
                        }
                    }
                    let c= b.length;
                    res.json(c)
                }


            })


        })
    }
};

