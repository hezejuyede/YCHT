const express = require("express");                       //引入EXPRESS框架
const indexrourer = require("./controller/indexRouter");  //引入主页路由
const userrouter  = require('./controller/userRouter');  //引入客户路由
const admRouter   = require('./controller/admRouter');   //引入管理端路由
const sesssion = require("express-session");              //引入session模块
const cookieParser = require('cookie-parser');           //引入cookieParser模块

const app = express();                                   //实例化ESPRESS
app.use(cookieParser());                                //使用cookieParser模块
 
app.use(sesssion({                                    //使用session中间件
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

//引入中间件

app.set("view engine", "ejs");                         //使用EJS模板
app.use(express.static("./public"));                   //静态PUBLIC
app.use(express.static("./HT"));                       //静态后台
app.use("/avatar", express.static("./avatar"));        //静态avatar

//后台系统网站
app.get('/HTSystem', (req, res, next) => {
    res.render("H");
});
//移动端网站
app.get('/MobileYSX', (req, res, next) => {
    res.render("M")
});
//PC端网站
app.get('/PcYSX', (req, res, next) => {
    res.render("P")
});












//公共部分（客户端）
app.post("/userRegister", userrouter.userRegister);  //用户注册
app.post("/userlogin", userrouter.userlogin);        //用户登录


app.post('/shoppingCart', userrouter.shoppingCart);  //获得购物车
app.post('/api/shoppingCart', userrouter.shoppingCart);  //获得购物车
app.post('/MobileUserAddProduct',userrouter.MobileUserAddProduct); //添加到购物车
app.post('/api/MobileUserAddProduct',userrouter.MobileUserAddProduct); //添加到购物车

app.post('/setFollowGoods',userrouter.setFollowGoods); //添加收藏
app.post('/api/setFollowGoods',userrouter.setFollowGoods); //添加到收藏

app.post('/MobileUserPayment',userrouter.MobileUserPayment); //付款页面
app.post('/api/MobileUserPayment',userrouter.MobileUserPayment); //付款页面



app.post('/getUserAddressList', userrouter.getUserAddressList);            //获得用户地址
app.post('/setUserAddressList', userrouter.setUserAddressList);            //新增用户地址
app.post('/deleteUserAddressList', userrouter.deleteUserAddressList);      //删除用户地址
app.post('/updateUserAddressList', userrouter.updateUserAddressList);      //修改用户地址
app.post('/mrUserAddressList', userrouter.mrUserAddressList);              //设置默认地址

app.post('/api/getUserAddressList', userrouter.getUserAddressList);            //获得用户地址
app.post('/api/setUserAddressList', userrouter.setUserAddressList);            //新增用户地址
app.post('/api/deleteUserAddressList', userrouter.deleteUserAddressList);      //删除用户地址
app.post('/api/updateUserAddressList', userrouter.updateUserAddressList);      //修改用户地址
app.post('/api/mrUserAddressList', userrouter.mrUserAddressList);              //设置默认地址



app.post('/UserChangeAvatar', userrouter.UserChangeAvatar);      //修改头像
app.post('/UserChangePhone', userrouter.UserChangePhone);        //修改手机号
app.post('/UserChangeID', userrouter.UserChangeID);              //修改ID
app.post('/UserChangeSex', userrouter.UserChangeSex);            //修改性别
app.post('/UserChangeAge', userrouter.UserChangeAge);            //修改年龄
app.post('/UserChangeEmail', userrouter.UserChangeEmail);        //修改邮箱
app.post('/UserChangePassWord', userrouter.UserChangePassWord);  //修改密码


app.post('/api/UserChangeAvatar', userrouter.UserChangeAvatar);      //修改头像
app.post('/api/UserChangePhone', userrouter.UserChangePhone);        //修改手机号
app.post('/api/UserChangeID', userrouter.UserChangeID);              //修改ID
app.post('/api/UserChangeSex', userrouter.UserChangeSex);            //修改性别
app.post('/api/UserChangeAge', userrouter.UserChangeAge);            //修改年龄
app.post('/api/UserChangeEmail', userrouter.UserChangeEmail);        //修改邮箱
app.post('/api/UserChangePassWord', userrouter.UserChangePassWord);  //修改密码









//PC端请求的数据
app.get("/api/banner",indexrourer.banner);
app.get('/api/bannerNav',indexrourer.bannerNav);
app.get('/api/jx', indexrourer.jx);
app.get('/api/headerLine', indexrourer.headerLine);
app.get('/api/tsBuy', indexrourer.tsbuy);
app.get('/api/pcRecommend', indexrourer.pcRecommend);
app.get('/api/pcGoodsList', indexrourer.pcGoodsList);
app.get('/api/userSay', indexrourer.userSay);
app.post('/api/shoppingCart',userrouter.shoppingCart);
app.get('/api/myAddress',indexrourer.myAddress);
app.get('/api/userInfo',indexrourer.userInfo);
app.get('/api/productDetails',indexrourer.productDetails);
app.post("/api/userRegister",userrouter.userRegister);
app.post("/api/userlogin",userrouter.userlogin);







//移动端请求的数据
app.get("/banner",indexrourer.banner);
app.get('/headerLine', indexrourer.headerLine);
app.get('/jx', indexrourer.jx);




app.get('/recommend', indexrourer.recommend);
app.get('/api/recommend', indexrourer.recommend);




app.get('/tuijian', indexrourer.tuijian);
app.get('/api/tuijian', indexrourer.tuijian);

app.get('/hotSell', indexrourer.hotSell);
app.get('/api/hotSell', indexrourer.hotSell);

app.get('/chujian', indexrourer.chujian);
app.get('/api/chujian', indexrourer.chujian);

app.get('/goodsList', indexrourer.goodsList);
app.get('/api/goodsList', indexrourer.goodsList);

app.get("/search",indexrourer.search);
app.get("/api/search",indexrourer.search);

app.get('/hot', indexrourer.hot);
app.get('/api/hot', indexrourer.hot);

app.get("/leftLists",indexrourer.leftLists);
app.get("/api/leftLists",indexrourer.leftLists);
app.get('/rightLists', indexrourer.rightLists);
app.get('/api/rightLists', indexrourer.rightLists);

app.get('/MobileGoodsDetails', indexrourer.MobileGoodsDetails);
app.get('/api/MobileGoodsDetails', indexrourer.MobileGoodsDetails);

app.get('/MUserInfos', indexrourer.MuserInfos);
app.get('/api/MUserInfos', indexrourer.MuserInfos);

app.post('/searchGoods', indexrourer.searchGoods);
app.post('/api/searchGoods', indexrourer.searchGoods);

app.post('/userOrderPJ',userrouter.userOrderPJ);
app.post('/api/userOrderPJ',userrouter.userOrderPJ);

app.post('/userBalance',userrouter.userBalance);
app.post('/api/userBalance',userrouter.userBalance);

app.post('/userBalance',userrouter.userBalance);
app.post('/api/userBalance',userrouter.userBalance);

app.get('/getUserInfo',userrouter.getUserInfo);
app.get('/api/getUserInfo',userrouter.getUserInfo);









//后台管理系统请求


app.post('/admRegester',admRouter.admRegester);
app.post('/admLogin',admRouter.admLogin);
app.get('/admUserOrder',admRouter.userOrder);
app.get('/admUserOrderDetail',admRouter.admUserOrderDetail);
app.get('/admUserList',admRouter.admUserList);

app.get('/admProductAll', admRouter.admProductAll);
app.post('/admAddProduct', admRouter.admAddProduct);
app.get('/admproduct', admRouter.admProduct);
app.get('/admProductDetails', admRouter.admProductDetails);
app.get('/admProductClassify', admRouter.admProductClassify);
app.get('/admFindProduct', admRouter.admFindProduct);
app.get('/admUserNumber', admRouter.admUserNumber);
app.get('/admOrderNumber', admRouter.admOrderNumber);
app.get('/admProductNumber', admRouter.admProductNumber);
app.get('/admOrderWFK', admRouter.admOrderWFK);
app.get('/admOrderDFH', admRouter.admOrderDFH);
app.get('/admOrderDTK', admRouter.admOrderDTK);
app.get('/admOrderState', admRouter.admOrderState);
app.post('/admChangeOrderState', admRouter.admChangeOrderState);
app.post('/admUserInfos', admRouter.admUserInfos);
app.post('/admDeleteProduct', admRouter.admDeleteProduct);
app.post("/admChangeUserID", admRouter.admChangeUserID);
app.post("/admChangePassWord", admRouter.admChangePassWord);
app.post("/admChangePhoneNumber", admRouter.admChangePhoneNumber);

app.listen(3000);                                 //监听3000端口
console.log("SERVER START");                     //控制台打印服务器成功启动信息