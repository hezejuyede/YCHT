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


//公共部分
app.post("/userRegister",userrouter.userRegister);  //用户注册
app.post("/userlogin",userrouter.userlogin);        //用户登录

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
app.get('/recommend', indexrourer.recommend);
app.get('/jx', indexrourer.jx);

app.get('/tuijian', indexrourer.tuijian);

app.get('/hotSell', indexrourer.hotSell);

app.get('/chujian', indexrourer.chujian);

app.get('/goodsList', indexrourer.goodsList);

app.get("/search",indexrourer.search);

app.get('/hot', indexrourer.hot);

app.get("/leftLists",indexrourer.leftLists);

app.get('/rightLists', indexrourer.rightLists);


app.post('/getUserAddressList', userrouter.getUserAddressList);
app.post('/setUserAddressList', userrouter.setUserAddressList);
app.post('/deleteUserAddressList', userrouter.deleteUserAddressList);
app.post('/updateUserAddressList', userrouter.updateUserAddressList);
app.post('/mrUserAddressList', userrouter.mrUserAddressList);



app.get('/MobileGoodsDetails', indexrourer.MobileGoodsDetails);
app.get('/MUserInfos', indexrourer.MuserInfos);
app.post('/searchGoods', indexrourer.searchGoods);


app.post('/shoppingCart', userrouter.shoppingCart);
app.post('/MobileUserAddProduct',userrouter.MobileUserAddProduct);
app.post('/MobileUserPayment',userrouter.MobileUserPayment);









//后台管理系统请求
app.get('/HTSystem',admRouter.HTSystem);
app.get('/MobileYSX',admRouter.MobileYSX);
app.get('/PCYSX',admRouter.PCYSX);


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