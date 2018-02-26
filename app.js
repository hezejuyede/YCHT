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
app.get('/api/shoppingCart',indexrourer.shoppingCart);
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

app.get('/shoppingCart', indexrourer.shoppingCart);
app.get('/goodsDetails',indexrourer.productDetails);
app.get('/MUserInfos',indexrourer.MuserInfos);
app.post('/searchGoods',indexrourer.searchGoods);



//后台管理系统请求
app.post('/admRegester',admRouter.admRegester);
app.post('/admLogin',admRouter.admLogin);
app.get('/admUserOrder',admRouter.userOrder);
app.get('/admUserOrderDetail',admRouter.admUserOrderDetail);
app.get('/admproduct', admRouter.admProduct);
app.get('/admProductDetails',admRouter.admProductDetails);
app.get('/admUserList',admRouter.userList);
app.get('/admProductAll',admRouter.admProductAll);
app.post('/admAddProduct',admRouter.admAddProduct);
                                                 



app.listen(3000);                                 //监听3000端口
console.log("SERVER START");                     //控制台打印服务器成功启动信息