const mongodb = require("../models/mongodb.js");        //引入mongodb的数据库
const md5 = require("../models/md5.js");               //引入MD5加密
const formidable = require("formidable");             //引入formidable
const path = require('path');                        //引入PATH模块
const fs = require('fs');                           //引入FS模块
const gm = require('gm');                          //引入GM
const ObjectId = require('mongodb').ObjectID;     //引入OjeckID模块

const left = [
    {"icon": "icon-px_pangxie", "text": "蟹系列"},

    {"icon": "icon-chicken", "text": "鸡系列"},

    {"icon": "icon-ya", "text": "鸭系列"},

    {"icon": "icon-niu", "text": "牛系列"},

    {"icon": "icon-pig", "text": "猪系列"},

    {"icon": "icon-kaoquanyang", "text": "羊系列"},

    {"icon": "icon-yu", "text": "鱼系列"},

    {"icon": "icon-xiazi", "text": "虾系列"},

    {"icon": "icon-huoguo1", "text": "火锅丸"},

    {"icon": "icon-_tiaoweipin", "text": "调味品"},

    {"icon": "icon-Rice", "text": "精面点"}
];

const banner = [
    {
        img:'http://www.ilqiqi.top/images/mYC/FPCimg/content_banner/1.jpg',

    },
    {
        img:'http://www.ilqiqi.top/images/mYC/FPCimg/content_banner/2.jpg',

    },
    {
        img:'http://www.ilqiqi.top/images/mYC/FPCimg/content_banner/3.jpg',

    },
    {
        img:'http://www.ilqiqi.top/images/mYC/FPCimg/content_banner/4.jpg',

    }
    ,
    {
        img:'http://www.ilqiqi.top/images/mYC/FPCimg/content_banner/5.jpg',

    }
    ,
    {
        img:'http://www.ilqiqi.top/images/mYC/FPCimg/content_banner/7.jpg',

    } ,
    {
        img:'http://www.ilqiqi.top/images/mYC/FPCimg/content_banner/8.jpg',

    }
    ,
    {
        img:'http://www.ilqiqi.top/images/mYC/FPCimg/content_banner/9.jpg',

    }
    ,
    {
        img:'http://www.ilqiqi.top/images/mYC/FPCimg/content_banner/10.jpg',

    }

];

const userSay = [
    [
        {
            avatar: "http://www.ilqiqi.top/pc/img/content/content_banner/no_login.jpg",
            img: "http://www.ilqiqi.top/pc/img/content/content_goods_crads/11.jpg",
            star: "4.5",
            name: "qiqi",
            content: "买过好几次了，不错。快递很敬业。",
            time: "2018-01-23 21:51:24"

        },
        {
            avatar: "http://www.ilqiqi.top/pc/img/content/content_banner/no_login.jpg",
            img: "http://www.ilqiqi.top/pc/img/content/content_goods_crads/12.jpg",
            star: "4.6",
            name: "七七",
            content: "螃蟹很好吃，过年再买一批",
            time: "2018-01-24 21:51:24"

        },
        {
            avatar: "http://www.ilqiqi.top/pc/img/content/content_banner/no_login.jpg",
            img: "http://www.ilqiqi.top/pc/img/content/content_goods_cows/12.jpg",
            star: "5",
            name: "jd_151284gxg",
            content: "牛肉馅很新鲜，包的饺子很香，很爱吃的。",
            time: "2018-01-25 21:51:24"

        },
        {
            avatar: "http://www.ilqiqi.top/pc/img/content/content_banner/no_login.jpg",
            img: "http://www.ilqiqi.top/pc/img/content/content_goods_crads/8.jpg",
            star: "4.5",
            name: "qiqi",
            content: "还没做呢 改天有时间试试",
            time: "2018-01-20 21:51:24"

        },
        {
            avatar: "http://www.ilqiqi.top/pc/img/content/content_banner/no_login.jpg",
            img: "http://www.ilqiqi.top/pc/img/content/content_goods_crads/9.jpg",
            star: "4.6",
            name: "七七",
            content: "味道不错，加工也方便，已经多次购买了，图片就用同一张了",
            time: "2018-01-21 21:51:24"

        },
        {
            avatar: "http://www.ilqiqi.top/pc/img/content/content_banner/no_login.jpg",
            img: "http://www.ilqiqi.top/pc/img/content/content_goods_cows/10.jpg",
            star: "5",
            name: "jd_151284gxg",
            content: "冻品海鲜挺好的，京东自营的买着放心，品质一如既往，好评",
            time: "2018-01-22 21:51:24"

        }
    ],
    [
        {
            avatar: "http://www.ilqiqi.top/pc/img/content/content_banner/no_login.jpg",
            img: "http://www.ilqiqi.top/pc/img/content/content_goods_crads/1.jpg",
            star: "4.5",
            name: "qiqi",
            content: "不怎么喜欢～",
            time: "2018-01-11 21:51:24"

        },
        {
            avatar: "http://www.ilqiqi.top/pc/img/content/content_banner/no_login.jpg",
            img: "http://www.ilqiqi.top/pc/img/content/content_goods_crads/2.jpg",
            star: "4.6",
            name: "七七",
            content: "中午下单，晚上九点送到家，快递小哥太辛苦，梨好吃，包装也很好！",
            time: "2018-01-12 21:51:24"

        },
        {
            avatar: "http://www.ilqiqi.top/pc/img/content/content_banner/no_login.jpg",
            img: "http://www.ilqiqi.top/pc/img/content/content_goods_cows/3.jpg",
            star: "5",
            name: "jd_151284gxg",
            content: " 刚到的就榨了 好吃",
            time: "2018-01-13 21:51:24"

        },
        {
            avatar: "http://www.ilqiqi.top/pc/img/content/content_banner/no_login.jpg",
            img: "http://www.ilqiqi.top/pc/img/content/content_goods_sheeps/1.jpg",
            star: "4.5",
            name: "qiqi",
            content: " 第二次买，卤着吃，就喜欢这种带点筋的，不错",
            time: "2018-01-01 21:51:24"

        },
        {
            avatar: "http://www.ilqiqi.top/pc/img/content/content_banner/no_login.jpg",
            img: "http://www.ilqiqi.top/pc/img/content/content_goods_sheeps/2.jpg",
            star: "4.6",
            name: "七七",
            content: "新鲜好吃，物超所值，口感好，鲜嫩美味，儿子很满意，给五星！",
            time: "2018-01-02 21:51:24"

        },
        {
            avatar: "http://www.ilqiqi.top/pc/img/content/content_banner/no_login.jpg",
            img: "http://www.ilqiqi.top/pc/img/content/content_goods_sheeps/3.jpg",
            star: "5",
            name: "jd_151284gxg",
            content: " 配送很及时还不错的还不错的还不错的",
            time: "2018-01-03 21:51:24"

        }
    ],
    [
        {
            avatar: "http://www.ilqiqi.top/pc/img/content/content_banner/no_login.jpg",
            img: "http://www.ilqiqi.top/pc/img/content/content_goods_pig/1.jpg",
            star: "4.5",
            name: "qiqi",
            content: "亿成买方便快捷价格合理，还是进口的，吃着放心",
            time: "2018-01-04 21:51:24"

        },
        {
            avatar: "http://www.ilqiqi.top/pc/img/content/content_banner/no_login.jpg",
            img: "http://www.ilqiqi.top/pc/img/content/content_goods_crads/2.jpg",
            star: "4.6",
            name: "七七",
            content: "放八角 桂皮炖好 打小包 放冰箱 味道还可以 跟家里差点",
            time: "2018-01-05 21:51:24"

        },
        {
            avatar: "http://www.ilqiqi.top/pc/img/content/content_banner/no_login.jpg",
            img: "http://www.ilqiqi.top/pc/img/content/content_goods_cows/3.jpg",
            star: "5",
            name: "jd_151284gxg",
            content: "比菜市场便宜多了，超值价钱，以后买牛肉就点亿成了。",
            time: "2018-01-06 21:51:24"

        },
        {
            avatar: "http://www.ilqiqi.top/pc/img/content/content_banner/no_login.jpg",
            img: "http://www.ilqiqi.top/pc/img/content/content_goods_fishs/1.jpg",
            star: "4.5",
            name: "qiqi",
            content: "已经切成小块，给娃儿买来吃的，一直都在回购，不错，亿成又快价格也合理",
            time: "2018-01-13 21:51:24"

        },
        {
            avatar: "http://www.ilqiqi.top/pc/img/content/content_banner/no_login.jpg",
            img: "http://www.ilqiqi.top/pc/img/content/content_goods_fishs/2.jpg",
            star: "4.6",
            name: "七七",
            content: "买了几次了，搞活动赶紧下手，孩子爱吃",
            time: "2018-01-14 21:51:24"

        },
        {
            avatar: "http://www.ilqiqi.top/pc/img/content/content_banner/no_login.jpg",
            img: "http://www.ilqiqi.top/pc/img/content/content_goods_fishs/3.jpg",
            star: "5",
            name: "jd_151284gxg",
            content: "买了几次了，搞活动赶紧下手，孩子爱吃",
            time: "2018-01-15 21:51:24"

        }
    ]
];

exports.JQLeftNav = (req, res, next) => {

   /* mongodb.find("leftLists", {}, (err, result) => {
        if (err) {
            res.send("err");
        }
        res.json(result)
    })
*/
   res.json(left)


};


exports.JQLeftNavList = (req, res, next) => {

    mongodb.find("P-ProductList", {}, (err, result) => {
        if (err) {
            res.json("err");
        }
        let a =result;
        let b = [];
        for (let i=0;i<a.length;i++){
            b.push(a[i].classify)

        }

        res.json(b)
    })

};


exports.JQBannerList = (req, res, next) => {

    mongodb.find("banner", {}, (err, result) => {
        if (err) {
            res.json("err");
        }
        else {
            res.json(result)
        }
    })

};


exports.JQProductList = (req, res, next) => {
    mongodb.find("P-ProductList", {}, (err, result) => {
        if (err) {
            res.json("err");
        }
        else {
            res.json(result)
        }
    })
};


exports.JQSecondKill = (req, res, next) => {
    mongodb.find("jx", {}, (err, result) => {
        if (err) {
            res.json("err");
        }
        else {
            res.json(result)
        }
    })
};


exports.JQUserSay = (req, res, next) => {
    res.json(userSay)
};

exports.EveryGoodsDetails = (req, res, next) => {
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
                res.json(goodsDetails);
            }

        }))
    }
};


exports.JQeryShoppingCart = (req, res, next) => {
    let username = req.session.username;
    mongodb.find('userinfos', {username: username}, ((err, result) => {
        if (err) {
            res.json("-1")
        }
        else {
            res.json(result[0].shoppingCart);
        }
    }))

};














