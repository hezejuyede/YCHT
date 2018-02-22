var mongodb = require("../models/mongodb.js");           //引入mongodb的数据库
var md5 = require("../models/md5.js");                  //引入MD5加密
var formidable = require("formidable");                //引入formidable
var path = require('path');                           //引入PATH模块
var fs = require('fs');                              //引入FS模块
var gm = require('gm');                             //引入GM
var ObjectId = require('mongodb').ObjectID;      //引入OjeckID模块


//公共部分

//1：注册。登录，修改个人信息，密码等处理路由

// 注册
exports.userregister = function (req, res, next) {
    //实例化formidable
    var form = new formidable.IncomingForm();

    // 处理传过来的数据
    form.parse(req, function (err, fields) {

        //实例化传过来的密码
        var password1 = fields.password1;

        //对实例化的密码进行MD5加密
        password1 = md5(md5(password1).substr(4, 7) + md5(password1));

        // 根据用户名进行数据库查找
        mongodb.find("userinfos", {"username": fields.username1}, function (err, result) {
            // 如果数据库错误，返回-1
            if (err) {
                res.send("-1");
                return;
            }
            // 如果返回查找的数据的长度不等于0，说明已经注册。返回2
           if (result.length != 0) {
                res.send("2");
                return;
            }
            //如果长度等于0，说明数据库没有该用户名，数据库插入该注册信息
            else {
                //数据库插入信息
                mongodb.insertOne("userinfos", {

                    //用户名 传入的用户名
                    "username": fields.username1,

                    //密码传入的加密密码
                    "password": password1,

                    // 传入的电话号
                    "phone":fields.phone,

                    // 传入的邮箱
                    "email" :fields.email,

                    //头像为avatar里默认的头像图片
                    "avatar": "avatar.jpg",
                    //输入的昵称
                    "name":"",
                    //输入的年龄
                    "age":"",
                    //输入的性别
                    "sex":""
                }, function (err, rusult) {
                    // 如果插入失败返回-1
                    if (err) {
                        res.send("-1");
                        return;
                    }
                    //插入成功则返回1
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
exports.userlogin = function(req,res,next){
    // 实例化formidable
    var form = new formidable.IncomingForm();
    // 处理传来的信息
    form.parse(req,function (err,fields) {
        // 实例化传来的密码
        var password = fields.password;
        //对密码进行MD5加密
        password = md5((md5(password).substr(4,7)+md5(password)));
        //根据用户名进行数据库查询
        mongodb.find("userinfos",{"username":fields.username},function (err,rusult) {
            // 如果查询的结果长度为0，说明没有该用户，返回为2
            if(rusult.length==0){res.send("2");return}
            //如果结果不为0 ，测说明数据库里有注册的账户 实例化查询结构的密码
            var mongodbpassword = rusult[0].password;
            // 如果实例化的密码和加密后的密码相等，侧验证正确;
            if (mongodbpassword == password)
            {
                // session记录传入账户的登录码为1
                req.session.login  = "1";
                //session记录登录的账户名为，数据库中的用户名
                req.session.username   = rusult[0].username;

                //session记录用户头像的账户名为
                req.session.useravatar   =rusult[0].avatar;
                //登录成功，返回登录吗为1
                res.send("1");return;}
            else {
                // 如果密码不相等，则说明密码错误，返回-1
                res.send("-1")
            }
        })
    })
};
//修改个人信息
exports.changeuserinfos = function(req,res,next){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields){
        userID    = fields.userID;
        usersex   = fields.usersex;
        userage   = fields.userage;
        userphone = fields.userphone;
        useremail = fields.useremail;
        console.log(userage);
        mongodb.updateMany("userinfos",{"username":req.session.username},
            {
                $set:{ "name":userID }
            }
            ,function(err,results){
                mongodb.updateMany("userinfos",{"username":req.session.username},
                    {
                        $set:{ "age":userage}
                    }
                    ,function(err,results){
                        mongodb.updateMany("userinfos",{"username":req.session.username},
                            {
                                $set:{ "sex":usersex}
                            }
                            ,function(err,results){
                                mongodb.updateMany("userinfos",{"username":req.session.username},
                                    {
                                        $set:{ "phone":userphone}
                                    }
                                    ,function(err,results){
                                        mongodb.updateMany("userinfos",{"username":req.session.username},
                                            {
                                                $set:{ "email":useremail}
                                            }
                                    ,function(err,results){
                                        if (err){res.send("-1");return;}
                                        else {res.send("1");}
                                    });

                            });
                    });

            });

    });
    })
};
//修改密码



// 2：头像处理
//处理上传头像
exports.upavatar = function(req,res,next){
    var form = new formidable.IncomingForm();
    form.uploadDir = path.normalize(__dirname+"/../avatar");
    form.parse(req,function(err, fields, files){
        var oldpath = files.touxiang.path;
        var nespath =path.normalize(__dirname+"/../avatar")+'/'+req.session.username;
        fs.rename(oldpath,nespath,function(err){
            if(err){res.send("上传失败");return;}
            req.session.useravatar =req.session.username;
            res.redirect("modifyAvatar");
        })
    });
};
//修改图片的路由
exports.modifyAvatar=function(req,res,next){

    res.render("./ycysx/modifyAvatar",{
        avatar:req.session.useravatar
    })
};
//进行剪切头像
exports.docut=function(req,res,next){
    var filename = req.session.avatar;
    var w = req.query.w;
    var h = req.query.h;
    var x = req.query.x;
    var y = req.query.y;
    gm("./avatar/"+ filename)
        .crop(w,h,x,y)
        .resize(100,100,"!",console.log(1))
        .write("./avatar/"+ filename,function(err){
            if(err){
                res.send("剪切失败");
                return;
            }
            mongodb.updateMany("userinfos",{"username":req.session.username},
                {$set:{ "avatar":req.session.useravatar}}
                ,function(err,results){
                    res.send("剪切成功");
                });
        });
};



//3:加入购物车，购车网相关操作，和购买等操作。


















// PC端亿成

//1：亿成网站主页
exports.ycindex = function (req,res,next) {

     res.render("./ycindex/ycindex");
};









//2：PC亿成优生鲜主页
exports.ycysx = function (req,res,next) {
    if(req.session.login == "1"){
        var login= true;
        var username = req.session.username;
        var useravatar   =  req.session.useravatar
    }else {
        var username = "";
        var useravatar   = "";
        var login    = false
    }
    mongodb.find("userinfos",{"username":req.session.name},function(err,result){
        if(err){throw (err);return;}
        else {res.render("./ycysx/ycysxindex",{
            "login":login,
            username:username,
            "useravatar":useravatar
        });
        }
    });
};

//PC亿成客户个人信息页面
exports.userinfos = function (req,res,next) {
    if(req.session.login == "1"){
        mongodb.find("userinfos",{"username":req.session.username},function(err,result){
            res.render("./ycysx/ycysxuserinfos",{
                "login":req.session.login == "1"?true:false,
                "username":req.session.login == "1"?req.session.username:"",
                "useravatar"      :result[0].avatar,
                "name"             :result[0].name,
                "sex"              :result[0].sex,
                "address"          :result[0].address,
                "email"            :result[0].email,
                "phone"            :result[0].phone,
                "age"              :result[0].age,
                "gouwuche"         :result[0].gouwuche
            });
        })
    }
    else {
        res.send("需要注册登录才能查看");
    }
};

//PC亿成优生鲜登录注册页面
exports.ploginregister = function (req,res,next) {

      res.render("./ycysx/login_register.ejs");
};

//PC亿成优生鲜商品详情页面
exports.goodsdetails = function (req,res,next) {

     res.render("./ycysx/goodsdetails.ejs")

};

//PC亿成优生鲜购物车页面
exports.shoppingcart = function (req,res,next) {

    res.render("./ycysx/shopping_cart.ejs")

};





















//3：移动端亿成优生鲜

// 移动端主页

exports.mysysx =function (req,res,next) {

     res.render('./mycysx/mycysxindex.ejs');
};

//移动端登录页面
exports.mlonginRegister = function (req,res,next) {



    res.render("./mycysx/mlonginRegister.ejs");
};

//移动端分类页面
exports.mycysxclassify =function (req,res,next) {

    res.render("./mycysx/mycysxclassify.ejs");
};

//移动端购物车页面
exports.mshoppingcart = function (req,res,next) {

    res.render("./mycysx/mshopping_cart.ejs")

};

//移动端我的信息页面
exports.mmyindex = function (req,res,next) {

    res.render("./mycysx/mmyindex.ejs");

};

//移动端商品详情信息页面
exports.mgoddsdatails = function (req,res,next) {

    res.render("./mycysx/mgoddsdatails.ejs")


};

//移动端订单详情信息页面

exports.mdatails = function (req,res,next) {

    res.render("./mycysx/mdatails.ejs")

};