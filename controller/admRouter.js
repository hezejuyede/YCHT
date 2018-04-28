const mongodb = require("../models/mongodb.js");        //引入mongodb的数据库
const md5 = require("../models/md5.js");               //引入MD5加密
const formidable = require("formidable");             //引入formidable
const path = require('path');                        //引入PATH模块
const fs = require('fs');                           //引入FS模块
const gm = require('gm');                          //引入GM
const ObjectId = require('mongodb').ObjectID;     //引入OjeckID模块




//管理员注册
exports.admRegester = (req, res, next) => {

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields) {
        var password1 = fields.password1;
        password1 = md5(md5(password1).substr(4, 7) + md5(password1));
        mongodb.find("admInfos", {"username": fields.username1}, (err, result) => {
            if (err) {
                res.json("-2");
                return;
            }
            if (result.length != 0) {
                res.json("2");
                return;
            }
            else {
                mongodb.insertOne("admInfos", {
                    "username": fields.username1,
                    "password": password1,
                    "phone": fields.phoneNumber,
                    "avatar": "http://www.ilqiqi.top/pc/img/content/content_banner/no_login.jpg",
                    "userId":"优生鲜"
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


//管理员登录
exports.admLogin = (req, res, next) => {

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields) {
        var password = fields.password;
        password = md5((md5(password).substr(4, 7) + md5(password)));
        mongodb.find("admInfos", {"username": fields.username}, (err, rusult) => {
            if (rusult.length == 0) {
                res.json("2");
                return
            }
            var mongodbpassword = rusult[0].password;
            if (mongodbpassword == password) {
                req.session.login = "1";
                req.session.username = rusult[0].username;
                req.session.useravatar = rusult[0].avatar;
                req.session.phoneNumber = rusult[0].phone;
                req.session.userId = rusult[0].userId;
                res.json({
                    login: req.session.login,
                    username: req.session.username,
                    useravatar: req.session.useravatar,
                    phoneNumber: req.session.phoneNumber,
                    userID: req.session.userId
                });
            }
            else {
                res.json("-1")
            }
        })
    })
};

exports.userOrder = (req, res, next) => {
    if (req.session.login != "1") {
        res.json("只有登录才有资格查看")

    } else {
        mongodb.find("userOrder", {}, (err, result) => {
            if (err) {
                res.json(err)
            }
            else {

                let length =result.length;
                mongodb.find('userOrder',{},{"pageamount": 2, "page": 0},(err, result) => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        res.json({
                            result:result,
                            length:length
                        })
                    }

                });
            }
        })
    }

};

exports.admUserOrderDetail = (req, res, next) => {
    if (req.session.login != "1") {

        res.send("只有登录才有资格查看")
    }
    else {

        let id = req.query.id;

        mongodb.find("userOrder", {"orderNumber": id}, (err, result) => {
            if (err) {
                res.send(err)
            }
            else {
                res.json(result)
            }
        })
    }

};

exports.admProduct = (req, res, next) => {
    if (req.session.login != "1") {

        res.send("只有登录才有资格查看")
    } else {

        let id = req.query.id;
        mongodb.find('P-ProductList', {"id": id}, ((err, result) => {
            res.json(result);
        }))
    }

};

exports.admProductDetails = (req, res, next) => {
    if (req.session.login != "1") {
        res.send("只有登录才有资格查看")

    } else {
        let id = req.query.id;
        mongodb.find('P-ProductList', {"id": id}, ((err, result) => {
            if (err) {
                console.log(err)
            }
            else {


                res.json(result)
            }


        }))
    }


};

exports.admFindProduct=(req, res, next) => {
    if (req.session.login != "1") {
        res.send("只有登录才有资格查看")

    }
    else {
        let id = req.query.id;
        let name = req.query.name;
        mongodb.find('P-ProductList', {"id": id}, ((err, result) => {
            if (err) {
                console.log(err)
            }
            else {


                res.json(result)
            }


        }))
    }


};


exports.admUserList = (req, res, next) => {

    if (req.session.login != "1") {
        res.send("只有登录才有资格查看")

    }
    else {
        let page = req.query.page;
        mongodb.find("userinfos", {}, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                let length = result.length;
                mongodb.find("userinfos", {}, {"pageamount": 2, "page": page}, (err, result) => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        res.json({
                            result: result,
                            length: length
                        })
                    }
                })
            }
        })
    }


};

exports.admProductAll = (req, res, next) => {
    if (req.session.login != "1") {

        res.send("只有登录才有资格查看");
    } else {

        mongodb.find('P-ProductList', {}, (err, result) => {
            res.json(result)

        })
    }

};

exports.admAddProduct = (req, res, next) => {
    if (req.session.login != "1") {
        res.send("只有登录才有资格查看");

    } else {
        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            const str = fields.str;
            const fl = fields.fl;
            mongodb.find('P-ProductList', {"goodsName": fl}, ((err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    let goodsImg = result[0].goodsImg;
                    let a = [];
                    let b = [];
                    let c = [];
                    let d = [];
                    let e = [];
                    let f = [];
                    a.push(str);
                    let goodsInfo = {
                        "img": fields.img,
                        "title": fields.name,
                        "id": fields.id,
                        "price": fields.price,
                        "number": fields.number,
                        "state": fields.state,
                        "goodsInfo": a,
                        "smallImg": b,
                        "bigImg": c,
                        "productImg": d,
                        "details": e,
                        "showBottom": f
                    };
                    goodsImg.push(goodsInfo);
                    mongodb.updateMany('P-ProductList', {"goodsName": fl},
                        {
                            $set: {"goodsImg": goodsImg}
                        }, (err, result) => {
                            if (err) {
                                console.log(err);
                                res.json("-1")
                            }
                            else {
                                res.json("1")
                            }
                        })
                }
            }))

        })
    }

};

exports.admDeleteProduct = (req, res, next) => {
    if (req.session.login != "1") {
        res.send("只有登录才有资格查看")

    } else {

        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            const i = fields.index;
            const id = fields.id;
            mongodb.find('P-ProductList', {"id": id}, ((err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    let goodsImg = result[0].goodsImg;

                    goodsImg.splice(i, 1);
                    console.log(goodsImg);
                    mongodb.updateMany('P-ProductList', {"id": id},
                        {
                            $set: {"goodsImg": goodsImg}
                        }, (err, result) => {
                            if (err) {
                                console.log(err);
                                res.json("-1")
                            }
                            else {
                                res.json("1")
                            }
                        })
                }
            }))

        })
    }


};


exports.admProductClassify = (req, res, next) => {
    if (req.session.login != "1") {

        res.send("只有登录才有资格查看");
    } else {
        mongodb.find('P-ProductList', {}, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.json(result)
            }
        })
    }

};

exports.admProductNumber = (req, res, next)=>{
    if (req.session.login != "1") {

        res.send("只有登录才有资格查看");
    } else {
        mongodb.find('P-ProductList', {}, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                let goods = 0;
                for (let i = 0; i < result.length; i++) {
                    goods += result[i].goodsImg.length

                }
                res.json(goods)
            }
        })
    }

};

exports.admUserNumber= (req, res, next) => {
    if (req.session.login != "1") {

        res.send("只有登录才有资格查看");
    } else {
        mongodb.find('userinfos', {}, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json(result.length)
            }
        })
    }

};

exports.admOrderNumber = (req, res, next) => {
    if (req.session.login != "1") {

        res.send("只有登录才有资格查看");
    } else {
        mongodb.find('userOrder', {}, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json(result.length)

            }
        });
    }
};

exports.admOrderWFK = (req, res, next) => {
    if (req.session.login != "1") {

        res.send("只有登录才有资格查看");
    } else {
        mongodb.find('userOrder', {"orderState":"未付款"}, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json(result)

            }
        });
    }
};

exports.admOrderDFH = (req, res, next) => {
    if (req.session.login != "1") {

        res.send("只有登录才有资格查看");
    } else {
        mongodb.find('userOrder', {"orderState":"已付款"}, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json(result)

            }
        });
    }
};

exports.admOrderDTK = (req, res, next) => {
    if (req.session.login != "1") {

        res.send("只有登录才有资格查看");
    } else {
        mongodb.find('userOrder', {"orderState":"待退款"}, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json(result)

            }
        });
    }
};

exports.admOrderState = (req, res, next) => {
    if (req.session.login != "1") {

        res.send("只有登录才有资格查看");
    }
    else {

        let selectValue = req.query.select;
        let page = req.query.page;

        let searchValue = req.query.search;

        if (searchValue == "" && selectValue !== "") {
            mongodb.find('userOrder', {"orderState": selectValue}, (err, result) => {
                if (err) {
                    console.log(err)
                }
                else {
                    let length =result.length;
                    mongodb.find('userOrder', {"orderState": selectValue},  {"pageamount": 2, "page": page},(err, result) => {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            res.json({
                                result:result,
                                length:length
                            })
                        }

                    });

                }

            });
        }
        else if (searchValue !== "") {
            mongodb.find('userOrder', {"orderNumber": searchValue}, (err, result) => {
                if (err) {
                    console.log(err)
                }
                else {
                    res.json(result)

                }
            });
        }
        else if (searchValue == "" && selectValue == "") {
            mongodb.find("userOrder", {},  (err, result) => {
                if (err) {
                    res.send(err)
                }
                else {
                    let length =result.length;
                    mongodb.find('userOrder', {},  {"pageamount": 2, "page": page},(err, result) => {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            res.json({
                                result:result,
                                length:length
                            })
                        }

                    });

                }
            })
        }

    }
};

exports.admChangeOrderState = (req, res, next) => {
    if (req.session.login != "1") {
        res.send("只有登录才有资格查看")

    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            const State = fields.State;
            console.log(State)
            const id = fields.id;
            console.log(id)
            mongodb.updateMany('userOrder', {"orderNumber": id},
                {
                    $set: {"orderState": State}
                }, (err, result) => {
                    if (err) {
                        res.json("-1")
                    }
                    else {
                       
                        res.json("1")
                        console.log(result)
                    }
                })

        })
    }
};

exports.admUserInfos = (req, res, next) => {
    if (req.session.login != "1") {

        res.send("只有登录才有资格查看");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let username = fields.username;

            mongodb.find('admInfos', {"username":username}, (err, result) => {
                if (err) {
                    console.log(err)
                }
                else {
                    let id = result[0].userId;
                    let phoneNumber = result[0].phone;
                    res.send({
                        id:id,
                        phoneNumber:phoneNumber
                    })
                    
                }
            });
        })
    }
};

exports.admChangeUserID = (req, res, next) => {
    if (req.session.login != "1") {

        res.send("只有登录才有资格查看");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            mongodb.updateMany('admInfos', {"username": username}, {
                $set: {"userId": id}
            }, (err, result) => {
                if (err) {
                    console.log(err)
                }
                else {

                    res.json("1")

                }
            })
        })
    }
};

exports.admChangePassWord = (req, res, next) => {
    if (req.session.login != "1") {

        res.send("只有登录才有资格查看");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let password = fields.password1;
            let password2 = fields.password2;
            password = md5((md5(password).substr(4, 7) + md5(password)));
            password2 = md5((md5(password2).substr(4, 7) + md5(password2)));
            mongodb.find("admInfos", {"username": fields.username}, (err, rusult) => {
                if (rusult.length == 0) {
                    res.send("2");
                    return
                }
                var mongodbpassword = rusult[0].password;
                if (mongodbpassword == password) {
                    mongodb.updateMany('admInfos', {"username": fields.username},
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

exports.admChangePhoneNumber = (req, res, next) => {
    if (req.session.login != "1") {

        res.send("只有登录才有资格查看");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let username = fields.username;
            let PhoneNumber = fields.PhoneNumber;
            mongodb.updateMany('admInfos', {"username": username},
                {
                    $set: {"phone": PhoneNumber}
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
        })
    }
};




//移动模块
exports.admGetBZRM = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('C-weekSell', {}, (err, result) => {
                if (err) {
                    res.json("-1")
                }
                else {
                    res.json(result)

                }
            })
        })
    }
};

exports.admAddBZRM = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('C-weekSell',{'img': fields.img},(err, result) => {
                if (err) {
                    res.json("-2")
                }
                else {
                    if (result.length !== 0) {
                        res.json("2");
                    }
                    else {
                        mongodb.insertOne('C-weekSell',
                            {
                                'img': fields.img,
                                'title': fields.title,
                                'price': fields.price,
                                'id': fields.id,
                                'sindex': fields.sindex
                            },
                            (err, result) => {
                                if (err) {
                                    res.json("-1")
                                }
                                else {
                                    res.json('1')
                                }
                            }
                        )
                    }

                }
            })

        })
    }
};

exports.admUpdateBZRM = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            let index = fields.index;
            mongodb.updateMany('C-weekSell',
                {'img': fields.img},
                {
                    $set: {
                        'img': fields.img,
                        'title': fields.title,
                        'price': fields.price,
                        'id': fields.id,
                        'sindex': fields.sindex
                    }
                },
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {

                        res.json('1')
                    }
                })
        })
    }
};

exports.admDeleteBZRM = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.deleteMany('C-weekSell',
                {'img': fields.img},
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {
                        res.json('1')

                    }

                })
        })
    }
};


exports.admGetSYLB = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('banner', {}, (err, result) => {
                if (err) {
                    res.json("-1")
                }
                else {
                    res.json(result)

                }
            })
        })
    }
};

exports.admAddSYLB = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('banner',{'img': fields.img},(err, result) => {
                if (err) {
                    res.json("-2")
                }
                else {
                    if (result.length !== 0) {
                        res.json("2");
                    }
                    else {
                        mongodb.insertOne('banner',
                            {
                                'img': fields.img,
                                'title': fields.title,
                                'price': fields.price,
                                'id': fields.id,
                                'sindex': fields.sindex
                            },
                            (err, result) => {
                                if (err) {
                                    res.json("-1")
                                }
                                else {
                                    res.json('1')
                                }
                            }
                        )
                    }

                }
            })

        })
    }
};

exports.admUpdateSYLB = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            let index = fields.index;
            mongodb.updateMany('banner',
                {'img': fields.img},
                {
                    $set: {
                        'img': fields.img,
                        'title': fields.title,
                        'price': fields.price,
                        'id': fields.id,
                        'sindex': fields.sindex
                    }
                },
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {

                        res.json('1')
                    }
                })
        })
    }
};

exports.admDeleteSYLB = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.deleteMany('banner',
                {'img': fields.img},
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {
                        res.json('1')

                    }

                })
        })
    }
};


exports.admGetSYTT = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('headerLine', {}, (err, result) => {
                if (err) {
                    res.json("-1")
                }
                else {
                    res.json(result)

                }
            })
        })
    }
};

exports.admAddSYTT = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('headerLine',{'id': fields.id},(err, result) => {
                if (err) {
                    res.json("-2")
                }
                else {
                    if (result.length !== 0) {
                        res.json("2");
                    }
                    else {
                        mongodb.insertOne('headerLine',
                            {
                                'text': fields.img,
                                'id':fields.id
                            },
                            (err, result) => {
                                if (err) {
                                    res.json("-1")
                                }
                                else {
                                    res.json('1')
                                }
                            }
                        )
                    }

                }
            })

        })
    }
};

exports.admUpdateSYTT = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {

            mongodb.updateMany('headerLine',
                {'id': fields.id},
                {
                    $set: {
                        'text': fields.img,
                        'id': fields.id
                    }
                },
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {

                        res.json('1')
                    }
                })
        })
    }
};

exports.admDeleteSYTT = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.deleteMany('headerLine',
                {'id': fields.id},
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {
                        res.json('1')

                    }

                })
        })
    }
};


exports.admGetSYFJ = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('nearby', {}, (err, result) => {
                if (err) {
                    res.json("-1")
                }
                else {
                    res.json(result)

                }
            })
        })
    }
};

exports.admAddSYFJ = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('nearby',{'id': fields.id},(err, result) => {
                if (err) {
                    res.json("-2")
                }
                else {
                    if (result.length !== 0) {
                        res.json("2");
                    }
                    else {
                        mongodb.insertOne('nearby',
                            {
                                'img': fields.img,
                                'id':fields.id
                            },
                            (err, result) => {
                                if (err) {
                                    res.json("-1")
                                }
                                else {
                                    res.json('1')
                                }
                            }
                        )
                    }

                }
            })

        })
    }
};

exports.admUpdateSYFJ = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {

            mongodb.updateMany('nearby',
                {'id': fields.id},
                {
                    $set: {
                        'img': fields.img,
                        'id': fields.id
                    }
                },
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {

                        res.json('1')
                    }
                })
        })
    }
};

exports.admDeleteSYFJ = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.deleteMany('nearby',
                {'id': fields.id},
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {
                        res.json('1')

                    }

                })
        })
    }
};






exports.admGetSYTJ = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('recommend', {}, (err, result) => {
                if (err) {
                    res.json("-1")
                }
                else {
                    res.json(result)

                }
            })
        })
    }
};

exports.admAddSYTJ = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('recommend',{'img': fields.img},(err, result) => {
                if (err) {
                    res.json("-2")
                }
                else {
                    if (result.length !== 0) {
                        res.json("2");
                    }
                    else {
                        mongodb.insertOne('recommend',
                            {
                                'img': fields.img,
                                'title': fields.title,
                                'price': fields.price,
                                'id': fields.id,
                                'sindex': fields.sindex
                            },
                            (err, result) => {
                                if (err) {
                                    res.json("-1")
                                }
                                else {
                                    res.json('1')
                                }
                            }
                        )
                    }

                }
            })

        })
    }
};

exports.admUpdateSYTJ = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            let index = fields.index;
            mongodb.updateMany('recommend',
                {'img': fields.img},
                {
                    $set: {
                        'img': fields.img,
                        'title': fields.title,
                        'price': fields.price,
                        'id': fields.id,
                        'sindex': fields.sindex
                    }
                },
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {

                        res.json('1')
                    }
                })
        })
    }
};

exports.admDeleteSYTJ = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.deleteMany('recommend',
                {'img': fields.img},
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {
                        res.json('1')

                    }

                })
        })
    }
};




exports.admGetSYMS = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('jx', {}, (err, result) => {
                if (err) {
                    res.json("-1")
                }
                else {
                    res.json(result)

                }
            })
        })
    }
};

exports.admAddSYMS1 = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('jx', {'time':'10'}, (err, result) => {
                if (err) {
                    res.json('-1')
                }
                else {
                    let list = result[0].list1;
                    let a = {
                        'img': fields.img,
                        'title': fields.title,
                        'price': fields.price,
                        'id': fields.id,
                        'sindex': fields.sindex
                    };
                    list.push(a);
                    mongodb.updateMany('jx',
                        {'time':'10'},
                        {
                            $set: {
                                'list1':list
                            }
                        },
                        (err, result) => {
                            if (err) {
                                res.json('-1')
                            }
                            else {

                                res.json('1')
                            }
                        })

                }
            })

        })
    }
};

exports.admAddSYMS2 = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('jx', {'time':'15'}, (err, result) => {
                if (err) {
                    res.json('-1')
                }
                else {
                    let list = result[0].list2;
                    let a = {
                        'img': fields.img,
                        'title': fields.title,
                        'price': fields.price,
                        'id': fields.id,
                        'sindex': fields.sindex
                    };
                    list.push(a);
                    mongodb.updateMany('jx',
                        {'time':'15'},
                        {
                            $set: {
                                'list2':list
                            }
                        },
                        (err, result) => {
                            if (err) {
                                res.json('-1')
                            }
                            else {

                                res.json('1')
                            }
                        })

                }
            })

        })
    }
};

exports.admAddSYMS3 = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('jx', {'time':'20'}, (err, result) => {
                if (err) {
                    res.json('-1')
                }
                else {
                    let list = result[0].list3;
                    let a = {
                        'img': fields.img,
                        'title': fields.title,
                        'price': fields.price,
                        'id': fields.id,
                        'sindex': fields.sindex
                    };
                    list.push(a);
                    mongodb.updateMany('jx',
                        {'time':'20'},
                        {
                            $set: {
                                'list3':list
                            }
                        },
                        (err, result) => {
                            if (err) {
                                res.json('-1')
                            }
                            else {

                                res.json('1')
                            }
                        })

                }
            })

        })
    }
};

exports.admUpdateSYMS = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            let index = fields.dindex;
            mongodb.find('jx', {}, (err, result) => {
                if (err) {
                    res.json('-1')
                }
                else {
                    let length1 = result[0].list1.length;
                    let length2 = result[1].list2.length;
                    let length3 = result[2].list3.length;

                    let length4 = length1+length2;
                    let length5 = length1+length2+length3;
                    if (index <= length1) {
                        mongodb.find('jx', {'time': '10'}, (err, result) => {
                            if (err) {
                                res.json('-1')
                            }
                            else {
                                let list = result[0].list1;

                                list.splice(index, 1);
                                let a = {
                                    'img': fields.img,
                                    'title': fields.title,
                                    'price': fields.price,
                                    'id': fields.id,
                                    'sindex': fields.sindex
                                };
                                list.push(a);

                                mongodb.updateMany('jx',
                                    {'time': '10'},
                                    {
                                        $set: {
                                            'list1': list
                                        }
                                    },
                                    (err, result) => {
                                        if (err) {
                                            res.json('-1')
                                        }
                                        else {

                                            res.json('1')
                                        }
                                    })

                            }
                        })
                    }
                    else if (index >length1 && index <= length4) {
                        mongodb.find('jx', {'time': '15'}, (err, result) => {
                            if (err) {
                                res.json('-1')
                            }
                            else {
                                let list = result[0].list2;
                                list.splice(index - length1, 1);
                                let a = {
                                    'img': fields.img,
                                    'title': fields.title,
                                    'price': fields.price,
                                    'id': fields.id,
                                    'sindex': fields.sindex
                                };
                                list.push(a);
                                mongodb.updateMany('jx',
                                    {'time': '15'},
                                    {
                                        $set: {
                                            'list2': list
                                        }
                                    },
                                    (err, result) => {
                                        if (err) {
                                            res.json('-1')
                                        }
                                        else {

                                            res.json('1')
                                        }
                                    })

                            }
                        })
                    }
                    else if (index >length4 && index < length5) {
                        mongodb.find('jx', {'time': '20'}, (err, result) => {
                            if (err) {
                                res.json('-1')
                            }
                            else {
                                let list = result[0].list3;
                                list.splice(index - length4, 1);
                                let a = {
                                    'img': fields.img,
                                    'title': fields.title,
                                    'price': fields.price,
                                    'id': fields.id,
                                    'sindex': fields.sindex
                                };
                                list.push(a);
                                mongodb.updateMany('jx',
                                    {'time': '20'},
                                    {
                                        $set: {
                                            'list3': list
                                        }
                                    },
                                    (err, result) => {
                                        if (err) {
                                            res.json('-1')
                                        }
                                        else {

                                            res.json('1')
                                        }
                                    })

                            }
                        })
                    }
                }
            })

        })
    }
};


exports.admDeleteSYMS = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            let index = fields.index;
            mongodb.find('jx', {}, (err, result) => {
                if (err) {
                    res.json('-1')
                }
                else {
                    let length1 = result[0].list1.length;
                    let length2 = result[1].list2.length;
                    let length3 = result[2].list3.length;

                    let length4 = length1+length2;
                    let length5 = length1+length2+length3;
                    if (index <= length1) {
                        mongodb.find('jx', {'time': '10'}, (err, result) => {
                            if (err) {
                                res.json('-1')
                            }
                            else {
                                let list = result[0].list1;

                                list.splice(index, 1);
                                mongodb.updateMany('jx',
                                    {'time': '10'},
                                    {
                                        $set: {
                                            'list1': list
                                        }
                                    },
                                    (err, result) => {
                                        if (err) {
                                            res.json('-1')
                                        }
                                        else {

                                            res.json('1')
                                        }
                                    })

                            }
                        })
                    }
                    else if (index >length1 && index <= length4) {
                        mongodb.find('jx', {'time': '15'}, (err, result) => {
                            if (err) {
                                res.json('-1')
                            }
                            else {
                                let list = result[0].list2;
                                list.splice(index - length1, 1);
                                mongodb.updateMany('jx',
                                    {'time': '15'},
                                    {
                                        $set: {
                                            'list2': list
                                        }
                                    },
                                    (err, result) => {
                                        if (err) {
                                            res.json('-1')
                                        }
                                        else {

                                            res.json('1')
                                        }
                                    })

                            }
                        })
                    }
                    else if (index >length4 && index < length5) {
                        mongodb.find('jx', {'time': '20'}, (err, result) => {
                            if (err) {
                                res.json('-1')
                            }
                            else {
                                let list = result[0].list3;
                                list.splice(index - length4, 1);
                                mongodb.updateMany('jx',
                                    {'time': '20'},
                                    {
                                        $set: {
                                            'list3': list
                                        }
                                    },
                                    (err, result) => {
                                        if (err) {
                                            res.json('-1')
                                        }
                                        else {

                                            res.json('1')
                                        }
                                    })

                            }
                        })
                    }
                }
            })

        })
    }
};





exports.admGetJXHU = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('Tuijian', {}, (err, result) => {
                if (err) {
                    res.json("-1")
                }
                else {
                    res.json(result)

                }
            })
        })
    }
};

exports.admAddJXHU = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('Tuijian',{'img': fields.img},(err, result) => {
                if (err) {
                    res.json("-2")
                }
                else {
                    if (result.length !== 0) {
                        res.json("2");
                    }
                    else {
                        mongodb.insertOne('Tuijian',
                            {
                                'img': fields.img,
                                'title': fields.title,
                                'price': fields.price,
                                'id': fields.id,
                                'sindex': fields.sindex
                            },
                            (err, result) => {
                                if (err) {
                                    res.json("-1")
                                }
                                else {
                                    res.json('1')
                                }
                            }
                        )
                    }

                }
            })

        })
    }
};

exports.admUpdateJXHU = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            let index = fields.index;
            mongodb.updateMany('Tuijian',
                {'img': fields.img},
                {
                    $set: {
                        'img': fields.img,
                        'title': fields.title,
                        'price': fields.price,
                        'id': fields.id,
                        'sindex': fields.sindex
                    }
                },
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {

                        res.json('1')
                    }
                })
        })
    }
};

exports.admDeleteJXHU = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.deleteMany('Tuijian',
                {'img': fields.img},
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {
                        res.json('1')

                    }

                })
        })
    }
};



exports.admGetXPCJ = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('ChuJian', {}, (err, result) => {
                if (err) {
                    res.json("-1")
                }
                else {
                    res.json(result)

                }
            })
        })
    }
};

exports.admAddXPCJ = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('ChuJian',{'img': fields.img},(err, result) => {
                if (err) {
                    res.json("-2")
                }
                else {
                    if (result.length !== 0) {
                        res.json("2");
                    }
                    else {
                        mongodb.insertOne('ChuJian',
                            {
                                'img': fields.img,
                                'title': fields.title,
                                'price': fields.price,
                                'id': fields.id,
                                'sindex': fields.sindex
                            },
                            (err, result) => {
                                if (err) {
                                    res.json("-1")
                                }
                                else {
                                    res.json('1')
                                }
                            }
                        )
                    }

                }
            })

        })
    }
};

exports.admUpdateXPCJ = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            let index = fields.index;
            mongodb.updateMany('ChuJian',
                {'img': fields.img},
                {
                    $set: {
                        'img': fields.img,
                        'title': fields.title,
                        'price': fields.price,
                        'id': fields.id,
                        'sindex': fields.sindex
                    }
                },
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {

                        res.json('1')
                    }
                })
        })
    }
};

exports.admDeleteXPCJ = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.deleteMany('ChuJian',
                {'img': fields.img},
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {
                        res.json('1')

                    }

                })
        })
    }
};



exports.admGetSYRM = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('hotSell', {}, (err, result) => {
                if (err) {
                    res.json("-1")
                }
                else {
                    res.json(result)

                }
            })
        })
    }
};

exports.admAddSYRM = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('hotSell',{'img': fields.img},(err, result) => {
                if (err) {
                    res.json("-2")
                }
                else {
                    if (result.length !== 0) {
                        res.json("2");
                    }
                    else {
                        mongodb.insertOne('hotSell',
                            {
                                'img': fields.img,
                                'title': fields.title,
                                'price': fields.price,
                                'id': fields.id,
                                'sindex': fields.sindex
                            },
                            (err, result) => {
                                if (err) {
                                    res.json("-1")
                                }
                                else {
                                    res.json('1')
                                }
                            }
                        )
                    }

                }
            })

        })
    }
};

exports.admUpdateSYRM = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            let index = fields.index;
            mongodb.updateMany('hotSell',
                {'img': fields.img},
                {
                    $set: {
                        'img': fields.img,
                        'title': fields.title,
                        'price': fields.price,
                        'id': fields.id,
                        'sindex': fields.sindex
                    }
                },
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {

                        res.json('1')
                    }
                })
        })
    }
};

exports.admDeleteSYRM = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.deleteMany('hotSell',
                {'img': fields.img},
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {
                        res.json('1')

                    }

                })
        })
    }
};



exports.admGetXPTJ = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('C-newRec', {}, (err, result) => {
                if (err) {
                    res.json("-1")
                }
                else {
                    res.json(result)

                }
            })
        })
    }
};

exports.admAddXPTJ = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('C-newRec',{'img': fields.img},(err, result) => {
                if (err) {
                    res.json("-2")
                }
                else {
                    if (result.length !== 0) {
                        res.json("2");
                    }
                    else {
                        mongodb.insertOne('C-newRec',
                            {
                                'img': fields.img,
                                'title': fields.title,
                                'price': fields.price,
                                'id': fields.id,
                                'sindex': fields.sindex
                            },
                            (err, result) => {
                                if (err) {
                                    res.json("-1")
                                }
                                else {
                                    res.json('1')
                                }
                            }
                        )
                    }

                }
            })

        })
    }
};

exports.admUpdateXPTJ = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            let index = fields.index;
            mongodb.updateMany('C-newRec',
                {'img': fields.img},
                {
                    $set: {
                        'img': fields.img,
                        'title': fields.title,
                        'price': fields.price,
                        'id': fields.id,
                        'sindex': fields.sindex
                    }
                },
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {

                        res.json('1')
                    }
                })
        })
    }
};

exports.admDeleteXPTJ = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.deleteMany('C-newRec',
                {'img': fields.img},
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {
                        res.json('1')

                    }

                })
        })
    }
};



exports.admGetYCJX = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('C-ycjx', {}, (err, result) => {
                if (err) {
                    res.json("-1")
                }
                else {
                    res.json(result)

                }
            })
        })
    }
};

exports.admAddYCJX = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('C-ycjx',{'img': fields.img},(err, result) => {
                if (err) {
                    res.json("-2")
                }
                else {
                    if (result.length !== 0) {
                        res.json("2");
                    }
                    else {
                        mongodb.insertOne('C-ycjx',
                            {
                                'img': fields.img,
                                'title': fields.title,
                                'price': fields.price,
                                'id': fields.id,
                                'sindex': fields.sindex
                            },
                            (err, result) => {
                                if (err) {
                                    res.json("-1")
                                }
                                else {
                                    res.json('1')
                                }
                            }
                        )
                    }

                }
            })

        })
    }
};

exports.admUpdateYCJX = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            let index = fields.index;
            mongodb.updateMany('C-ycjx',
                {'img': fields.img},
                {
                    $set: {
                        'img': fields.img,
                        'title': fields.title,
                        'price': fields.price,
                        'id': fields.id,
                        'sindex': fields.sindex
                    }
                },
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {

                        res.json('1')
                    }
                })
        })
    }
};

exports.admDeleteYCJX = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.deleteMany('C-ycjx',
                {'img': fields.img},
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {
                        res.json('1')

                    }

                })
        })
    }
};




exports.admGetDZSX = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('C-Discount', {}, (err, result) => {
                if (err) {
                    res.json("-1")
                }
                else {
                    res.json(result)

                }
            })
        })
    }
};

exports.admAddDZSX = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('C-Discount',{'img': fields.img},(err, result) => {
                if (err) {
                    res.json("-2")
                }
                else {
                    if (result.length !== 0) {
                        res.json("2");
                    }
                    else {
                        mongodb.insertOne('C-Discount',
                            {
                                'img': fields.img,
                                'title': fields.title,
                                'price': fields.price,
                                'id': fields.id,
                                'sindex': fields.sindex
                            },
                            (err, result) => {
                                if (err) {
                                    res.json("-1")
                                }
                                else {
                                    res.json('1')
                                }
                            }
                        )
                    }

                }
            })

        })
    }
};

exports.admUpdateDZSX = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            let index = fields.index;
            mongodb.updateMany('C-Discount',
                {'img': fields.img},
                {
                    $set: {
                        'img': fields.img,
                        'title': fields.title,
                        'price': fields.price,
                        'id': fields.id,
                        'sindex': fields.sindex
                    }
                },
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {

                        res.json('1')
                    }
                })
        })
    }
};

exports.admDeleteDZSX = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.deleteMany('C-Discount',
                {'img': fields.img},
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {
                        res.json('1')

                    }

                })
        })
    }
};







exports.admGetXSMS = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('C-XsMs', {}, (err, result) => {
                if (err) {
                    res.json("-1")
                }
                else {
                    res.json(result)

                }
            })
        })
    }
};

exports.admAddXSMS = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('C-XsMs',{'img': fields.img},(err, result) => {
                if (err) {
                    res.json("-2")
                }
                else {
                    if (result.length !== 0) {
                        res.json("2");
                    }
                    else {
                        mongodb.insertOne('C-XsMs',
                            {
                                'img': fields.img,
                                'title': fields.title,
                                'price': fields.price,
                                'id': fields.id,
                                'sindex': fields.sindex
                            },
                            (err, result) => {
                                if (err) {
                                    res.json("-1")
                                }
                                else {
                                    res.json('1')
                                }
                            }
                        )
                    }

                }
            })

        })
    }
};

exports.admUpdateXSMS = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            let index = fields.index;
            mongodb.updateMany('C-XsMs',
                {'img': fields.img},
                {
                    $set: {
                        'img': fields.img,
                        'title': fields.title,
                        'price': fields.price,
                        'id': fields.id,
                        'sindex': fields.sindex
                    }
                },
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {

                        res.json('1')
                    }
                })
        })
    }
};

exports.admDeleteXSMS = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.deleteMany('C-XsMs',
                {'img': fields.img},
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {
                        res.json('1')

                    }

                })
        })
    }
};



exports.admGetSYST = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('C-syst', {}, (err, result) => {
                if (err) {
                    res.json("-1")
                }
                else {
                    res.json(result)

                }
            })
        })
    }
};

exports.admAddSYST = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('C-syst',{'img': fields.img},(err, result) => {
                if (err) {
                    res.json("-2")
                }
                else {
                    if (result.length !== 0) {
                        res.json("2");
                    }
                    else {
                        mongodb.insertOne('C-syst',
                            {
                                'img': fields.img,
                                'title': fields.title,
                                'price': fields.price,
                                'id': fields.id,
                                'sindex': fields.sindex
                            },
                            (err, result) => {
                                if (err) {
                                    res.json("-1")
                                }
                                else {
                                    res.json('1')
                                }
                            }
                        )
                    }

                }
            })

        })
    }
};

exports.admUpdateSYST = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            let index = fields.index;
            mongodb.updateMany('C-syst',
                {'img': fields.img},
                {
                    $set: {
                        'img': fields.img,
                        'title': fields.title,
                        'price': fields.price,
                        'id': fields.id,
                        'sindex': fields.sindex
                    }
                },
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {

                        res.json('1')
                    }
                })
        })
    }
};

exports.admDeleteSYST = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.deleteMany('C-syst',
                {'img': fields.img},
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {
                        res.json('1')

                    }

                })
        })
    }
};



exports.admGetTSCY = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('C-tscy', {}, (err, result) => {
                if (err) {
                    res.json("-1")
                }
                else {
                    res.json(result)

                }
            })
        })
    }
};

exports.admAddTSCY = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('C-tscy',{'img': fields.img},(err, result) => {
                if (err) {
                    res.json("-2")
                }
                else {
                    if (result.length !== 0) {
                        res.json("2");
                    }
                    else {
                        mongodb.insertOne('C-tscy',
                            {
                                'img': fields.img,
                                'title': fields.title,
                                'price': fields.price,
                                'id': fields.id,
                                'sindex': fields.sindex
                            },
                            (err, result) => {
                                if (err) {
                                    res.json("-1")
                                }
                                else {
                                    res.json('1')
                                }
                            }
                        )
                    }

                }
            })

        })
    }
};

exports.admUpdateTSCY = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            let index = fields.index;
            mongodb.updateMany('C-tscy',
                {'img': fields.img},
                {
                    $set: {
                        'img': fields.img,
                        'title': fields.title,
                        'price': fields.price,
                        'id': fields.id,
                        'sindex': fields.sindex
                    }
                },
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {

                        res.json('1')
                    }
                })
        })
    }
};

exports.admDeleteTSCY = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.deleteMany('C-tscy',
                {'img': fields.img},
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {
                        res.json('1')

                    }

                })
        })
    }
};





exports.admGetJXLH = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('C-TjLh', {}, (err, result) => {
                if (err) {
                    res.json("-1")
                }
                else {
                    res.json(result)

                }
            })
        })
    }
};

exports.admAddJXLH = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('C-TjLh',{'img': fields.img},(err, result) => {
                if (err) {
                    res.json("-2")
                }
                else {
                    if (result.length !== 0) {
                        res.json("2");
                    }
                    else {
                        mongodb.insertOne('C-TjLh',
                            {
                                'img': fields.img,
                                'title': fields.title,
                                'price': fields.price,
                                'id': fields.id,
                                'sindex': fields.sindex
                            },
                            (err, result) => {
                                if (err) {
                                    res.json("-1")
                                }
                                else {
                                    res.json('1')
                                }
                            }
                        )
                    }

                }
            })

        })
    }
};

exports.admUpdateJXLH = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            let index = fields.index;
            mongodb.updateMany('C-TjLh',
                {'img': fields.img},
                {
                    $set: {
                        'img': fields.img,
                        'title': fields.title,
                        'price': fields.price,
                        'id': fields.id,
                        'sindex': fields.sindex
                    }
                },
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {

                        res.json('1')
                    }
                })
        })
    }
};

exports.admDeleteJXLH = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.deleteMany('C-TjLh',
                {'img': fields.img},
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {
                        res.json('1')

                    }

                })
        })
    }
};




exports.admGetSPSU = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('search', {}, (err, result) => {
                if (err) {
                    res.json("-1")
                }
                else {
                    res.json(result)

                }
            })
        })
    }
};

exports.admAddSPSU = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('search',{'id': fields.id},(err, result) => {
                if (err) {
                    res.json("-2")
                }
                else {
                    if (result.length !== 0) {
                        res.json("2");
                    }
                    else {
                        mongodb.insertOne('search',
                            {
                                'goods': fields.img,
                                'id':fields.id
                            },
                            (err, result) => {
                                if (err) {
                                    res.json("-1")
                                }
                                else {
                                    res.json('1')
                                }
                            }
                        )
                    }

                }
            })

        })
    }
};

exports.admUpdateSPSU = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            let index = fields.index;
            mongodb.updateMany('search',
                {'id': fields.id},
                {
                    $set: {
                        'goods': fields.img,
                        'id': fields.id
                    }
                },
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {

                        res.json('1')
                    }
                })
        })
    }
};

exports.admDeleteSPSU = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.deleteMany('search',
                {'id': fields.id},
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {
                        res.json('1')

                    }

                })
        })
    }
};

exports.AdmGetUserInfoList = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('userinfos',{},(err,reslut)=>{
                if(err){
                    console.log(err)
                }
                else {
                    let a = reslut;
                    let b=[]
                    for(let i=0;i<a.length;i++){
                        let c ={
                            'username':a[i].username,
                            'avatar':a[i].avatar
                        }
                        b.push(c)
                    }

                    res.json(b)
                }
            })
        })
    }
};

exports.AdmGetLtList = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.find('LtList', {}, (err, reslut) => {
                if (err) {
                    console.log(err)
                }
                else {
                    res.json(reslut)
                }
            })
        })
    }
};

exports.admDeleteLT = (req, res, next) => {
    if (req.session.login !== "1") {

        res.json("-2");
    }
    else {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            mongodb.deleteMany('LtList',
                {'username': fields.username},
                (err, result) => {
                    if (err) {
                        res.json('-1')
                    }
                    else {
                        res.json('1')

                    }

                })
        })
    }
};



































































































