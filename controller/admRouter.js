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

        orderNumber: '12345678909',
        orderTime: '2018-02-14,08:08:08',
        name: "七七",
        phoneNumber: "15550739985",
        address: "山东省菏泽市巨野县永丰街道办事处健康路77号",
        orderState: "未付款",
        orderStyle: "在线支付",
        orderAmount: "￥199",
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
    },
    {

        orderNumber: '12345678909',
        orderTime: '2018-02-14,08:08:08',
        name: "七七",
        phoneNumber: "15550739985",
        address: "山东省菏泽市巨野县永丰街道办事处健康路77号",
        orderState: "待退款",
        orderStyle: "在线支付",
        orderAmount: "￥199",
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
    },
    {

        orderNumber: '12345678909',
        orderTime: '2018-02-14,08:08:08',
        name: "七七",
        phoneNumber: "15550739985",
        address: "山东省菏泽市巨野县永丰街道办事处健康路77号",
        orderState: "已关闭",
        orderStyle: "在线支付",
        orderAmount: "￥199",
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
    },
    {

        orderNumber: '12345678909',
        orderTime: '2018-02-14,08:08:08',
        name: "七七",
        phoneNumber: "15550739985",
        address: "山东省菏泽市巨野县永丰街道办事处健康路77号",
        orderState: "已退款",
        orderStyle: "在线支付",
        orderAmount: "￥199",
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
    },
    {
        orderNumber: '12345678909',
        orderTime: '2018-02-14,08:08:08',
        name: "七七",
        phoneNumber: "15550739985",
        address: "山东省菏泽市巨野县永丰街道办事处健康路77号",
        orderState: "已发货",
        orderStyle: "在线支付",
        orderAmount: "￥199",
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
    },
    {
        orderNumber: '12345678909',
        orderTime: '2018-02-14,08:08:08',
        name: "七七",
        phoneNumber: "15550739985",
        address: "山东省菏泽市巨野县永丰街道办事处健康路77号",
        orderState: "未评价",
        orderStyle: "在线支付",
        orderAmount: "￥199",
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
    },
    {
        orderNumber: '12345678909',
        orderTime: '2018-02-14,08:08:08',
        name: "七七",
        phoneNumber: "15550739985",
        address: "山东省菏泽市巨野县永丰街道办事处健康路77号",
        orderState: "已评价",
        orderStyle: "在线支付",
        orderAmount: "￥199",
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
const productList =[
    {
        img: 'http://www.ilqiqi.top/images/mYc/goods/crad/1.jpg',
        id: "PXL",
        goodsName: "螃蟹类",
        classify: [
            {
                name: "帝王蟹"
            },
            {
                name: "大闸蟹"
            },
            {
                name: "梭子蟹"
            },
            {
                name: "面包蟹/黄金蟹"
            },
            {
                name: "雪蟹"
            },
            {
                name: "青蟹 "
            },
            {
                name: "珍宝蟹"
            },
            {
                name: "红毛蟹"
            },
            {
                name: "醉蟹"
            }
        ],
        bannerImg: [
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_crads/13.jpg',
                id: "bpx1"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_crads/14.jpg',
                id: "bpx2"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_crads/15.jpg',
                id: "bpx3"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_crads/16.jpg',
                id: "bpx4"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_crads/17.jpg',
                id: "bpx5"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_crads/18.jpg',
                id: "bpx6"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_crads/19.jpg',
                id: "bpx7"
            }


        ],
        leftImg: [
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_crads/12.jpg',
                id: "PXlI001"
            }
        ],
        goodsImg: [
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/crad/1.jpg",
                title: "帝王蟹",
                id: "PX001",
                price: 291,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/crad/1.jpg",
                        name: '优生鲜 螃蟹 帝王蟹',
                        fl: '螃蟹',
                        id: "PX001",
                        price:  291,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1
                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/crad/2.jpg",
                title: "梭子蟹",
                id: "PX002",
                price: 292,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/crad/2.jpg",
                        name: '优生鲜 螃蟹 梭子蟹',
                        fl: '螃蟹',
                        id: "PX002",
                        price: 292,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1
                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/crad/3.jpg",
                title: "面包蟹",
                id: "PX003",
                price: 293,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/crad/3.jpg",
                        name: '优生鲜 螃蟹 面包蟹',
                        fl: '螃蟹',
                        id: "PX003",
                        price: 293,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1
                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/crad/4.jpg",
                title: "青蟹",
                id: "PX004",
                price: 294,
                number: 999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/crad/4.jpg",
                        name: '优生鲜 螃蟹 青蟹',
                        fl: '螃蟹',
                        id: "PX004",
                        price: 294,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1
                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/crad/5.jpg",
                title: "雪蟹",
                id: "PX005",
                price: 295,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/crad/5.jpg",
                        name: '优生鲜 螃蟹 雪蟹',
                        fl: '螃蟹',
                        id: "PX005",
                        price: 295,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1
                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/crad/6.jpg",
                title: "珍宝蟹",
                id: "PX006",
                price: 296,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/crad/6.jpg",
                        name: '优生鲜 螃蟹 珍宝蟹',
                        fl: '螃蟹',
                        id: "PX008",
                        price: 296,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1
                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/crad/7.jpg",
                title: "醉蟹",
                id: "PX007",
                price: 297,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/crad/7.jpg",
                        name: '优生鲜 螃蟹 醉蟹',
                        fl: '螃蟹',
                        id: "PX007",
                        price: 297,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1
                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/crad/8.jpg",
                title: "红毛蟹",
                id: "PX008",
                price: 298,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/crad/8.jpg",
                        name: '优生鲜 螃蟹 红毛蟹',
                        fl: '螃蟹',
                        id: "PX008",
                        price: 298,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1
                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/crad/9.jpg",
                title: "河蟹",
                id: "PX009",
                price: 299,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/crad/9.jpg",
                        name: '优生鲜 螃蟹 河蟹',
                        fl: '螃蟹',
                        id: "PX009",
                        price: 299,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1
                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/crad/10.jpg",
                title: "大闸蟹",
                id: "PX0010",
                price: 290,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/crad/10.jpg",
                        name: '优生鲜 螃蟹 大闸蟹',
                        fl:'螃蟹',
                        id: "PX0010",
                        price: 290,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1
                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            }
        ]
    },
    {
        img: 'http://www.ilqiqi.top/images/mYc/goods/seasonings/1.jpg',
        id: 'TWL',
        goodsName: "调味料",
        classify: [
            {
                name: "食用油"
            },
            {
                name: "盐"
            },
            {
                name: "酱油"
            },
            {
                name: "食用酱"
            },
            {
                name: "香醋"
            },
            {
                name: "盐 "
            },
            {
                name: "味精"
            },
            {
                name: "火锅底料"
            },
            {
                name: "火锅调料"
            }
        ],
        bannerImg: [
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_tiaoliao/14.jpg',
                id: "btl1"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_tiaoliao/16.jpg',
                id: "btl2"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_tiaoliao/17.jpg',
                id: "btl3"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_tiaoliao/18.jpg',
                id: "btl4"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_tiaoliao/19.jpg',
                id: "btl5"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_tiaoliao/20.jpg',
                id: "btl6"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_tiaoliao/15.jpg',
                id: "btl9"
            }


        ],
        leftImg: [
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_tiaoliao/22.jpg',
                id: "TLlI001"
            }
        ],
        goodsImg: [
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/1.jpg",
                title: "香醋",
                id: "TL001",
                price: 291,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/1.jpg",
                        name: '优生鲜 调味料 香醋',
                        fl: '调味料',
                        id: "TL001",
                        price:  291,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/2.jpg",
                title: "酱油",
                id: "TL002",
                price: 292,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/2.jpg",
                        name: '优生鲜 调味料 酱油',
                        fl: '调味料',
                        id: "TL002",
                        price:  292,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/3.jpg",
                title: "豆瓣酱",
                id: "TL003",
                price: 293,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/3.jpg",
                        name: '优生鲜 调味料 香醋',
                        fl: '调味料',
                        id: "TL003",
                        price:  293,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/4.jpg",
                title: "味极鲜",
                id: "TL004",
                price: 294,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/4.jpg",
                        name: '优生鲜 调味料 味极鲜',
                        fl: '调味料',
                        id: "TL004",
                        price:  294,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/5.jpg",
                title: "油",
                id: "TL005",
                price: 295,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/5.jpg",
                        name: '优生鲜 调味料 油',
                        fl: '调味料',
                        id: "TL005",
                        price:  295,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/6.jpg",
                title: "精盐",
                id: "TL006",
                price: 296,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/6.jpg",
                        name: '优生鲜 调味料 精盐',
                        fl: '调味料',
                        id: "TL006",
                        price:  296,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/7.jpg",
                title: "鸡精",
                id: "TL007",
                price: 297,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/7.jpg",
                        name: '优生鲜 调味料 香醋',
                        fl: '调味料',
                        id: "TL007",
                        price:  297,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/8.jpg",
                title: "料酒",
                id: "TL008",
                price: 298,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/8.jpg",
                        name: '优生鲜 调味料 料酒',
                        fl: '调味料',
                        id: "TL008",
                        price:  298,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/9.jpg",
                title: "麻辣火锅底料",
                id: "TL009",
                price: 299,
                number: 9999,
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/9.jpg",
                        name: '优生鲜 调味料 麻辣火锅底料',
                        fl: '调味料',
                        id: "TL009",
                        price:  299,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/10.jpg",
                title: "三鲜火锅底料",
                id: "TL0010",
                price: 290,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/10.jpg",
                        name: '优生鲜 调味料 三鲜火锅底料',
                        fl: '调味料',
                        id: "TL0010",
                        price:  290,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            }

        ]
    },
    {
        img: 'http://www.ilqiqi.top/images/mYc/goods/chichens/1.jpg',
        id: 'JXL',
        goodsName: "鸡系列",
        classify: [
            {
                name: "鸡翅"
            },
            {
                name: "整鸡"
            },
            {
                name: "鸡胸肉"
            },
            {
                name: "鸡腿"
            },
            {
                name: "鸡爪"
            },
            {
                name: "鸡肉块 "
            },
            {
                name: "鸡胗/鸡肫"
            },
            {
                name: "鸡柳"
            },
            {
                name: "鸡肉串"
            },
            {
                name: "鸡心"
            },
            {
                name: "鸡肉丁"
            }
        ],
        bannerImg: [
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_chichen/15.jpg',
                id: "bjr1"
            },

            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_chichen/16.jpg',
                id: "bjr2"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_chichen/17.jpg',
                id: "bjr3"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_chichen/18.jpg',
                id: "bjr4"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_chichen/19.jpg',
                id: "bjr5"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_chichen/20.jpg',
                id: "bjr6"
            }


        ],
        leftImg: [
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_chichen/23.jpg',
                id: "JRlI001"
            }
        ],
        goodsImg: [
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/chichens/1.jpg",
                title: "肉食鸡",
                id: "JR001",
                price: 291,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/chichens/1.jpg",
                        name: '优生鲜 鸡系列 肉食鸡',
                        fl: '鸡系列',
                        id: "JR001",
                        price:  291,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/chichens/2.jpg",
                title: "鸡爪",
                id: "JR002",
                price: 291,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/chichens/2.jpg",
                        name: '优生鲜 鸡系列 鸡爪',
                        fl: '鸡系列',
                        id: "JR002",
                        price:  291,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/chichens/3.jpg",
                title: "大鸡腿",
                id: "JR003",
                price: 293,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/chichens/3.jpg",
                        name: '优生鲜 鸡系列 大鸡腿',
                        fl: '鸡系列',
                        id: "JR003",
                        price:  293,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/chichens/4.jpg",
                title: "翅中",
                id: "JR004",
                price: "294",
                number: "194",
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/chichens/4.jpg",
                        name: '优生鲜 鸡系列 翅中',
                        fl: '鸡系列',
                        id: "JR004",
                        price:  294,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/chichens/5.jpg",
                title: "鸡胸肉",
                id: "JR005",
                price: 295,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/chichens/5.jpg",
                        name: '优生鲜 鸡系列 鸡胸肉',
                        fl: '鸡系列',
                        id: "JR005",
                        price:  295,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/chichens/6.jpg",
                title: "鸡胗",
                id: "JR006",
                price: 296,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/chichens/6.jpg",
                        name: '优生鲜 鸡系列 鸡胗',
                        fl: '鸡系列',
                        id: "JR006",
                        price:  296,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/chichens/7.jpg",
                title: "老母鸡",
                id: "JR007",
                price: 297,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/chichens/7.jpg",
                        name: '优生鲜 鸡系列 老母鸡',
                        fl: '鸡系列',
                        id: "JR007",
                        price:  297,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/chichens/8.jpg",
                title: "乌鸡",
                id: "JR008",
                price: 298,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/chichens/8.jpg",
                        name: '优生鲜 鸡系列 乌鸡',
                        fl: '鸡系列',
                        id: "JR008",
                        price:  298,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/chichens/9.jpg",
                title: "小鸡腿",
                id: "JR009",
                price: 299,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/chichens/9.jpg",
                        name: '优生鲜 鸡系列 小鸡腿',
                        fl: '鸡系列',
                        id: "JR009",
                        price:  299,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/chichens/10.jpg",
                title: "大公鸡",
                id: "JR0010",
                price: 290,
                number: 99999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/chichens/10.jpg",
                        name: '优生鲜 鸡系列 大公鸡',
                        fl: '鸡系列',
                        id: "JR0101",
                        price:  290,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            }

        ]
    },
    {
        img: 'http://www.ilqiqi.top/images/mYc/goods/ducks/1.jpg',
        id: 'YXL',
        goodsName: "鸭系列",
        classify: [
            {
                name: "整鸭"
            },
            {
                name: "鸭腿"
            },
            {
                name: "鸭胸"
            },
            {
                name: "鸭掌"
            },
            {
                name: "鸭胗/鸭肫"
            },
            {
                name: "鸭翅 "
            },
            {
                name: "鸭脖 "
            },
            {
                name: "鸭舌"
            },
            {
                name: "鸭肉块"
            },
            {
                name: "鸭头"
            },
            {
                name: "鸭血"
            }
        ],
        bannerImg: [
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_duck/14.jpg',
                id: "byz1"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_duck/15.jpg',
                id: "byz2"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_duck/16.jpg',
                id: "byz3"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_duck/17.jpg',
                id: "byz4"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_duck/18.jpg',
                id: "byz5"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_duck/19.jpg',
                id: "byz6"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_duck/20.jpg',
                id: "byz7"
            }


        ],
        leftImg: [
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_duck/22.jpg',
                id: "YZlI001"
            }
        ],
        goodsImg: [
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/ducks/1.jpg",
                title: "整鸭",
                id: "YZ001",
                price: 291,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/ducks/1.jpg",
                        name: '优生鲜 鸭系列 整鸭',
                        fl: '鸭系列',
                        id: "YZ001",
                        price:  291,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/ducks/2.jpg",
                title: "鸭掌",
                id: "YZ002",
                price: 292,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/ducks/2.jpg",
                        name: '优生鲜 鸭系列 鸭掌',
                        fl: '鸭系列',
                        id: "YZ002",
                        price:  292,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/ducks/3.jpg",
                title: "大鸭腿",
                id: "YZ003",
                price: 293,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/ducks/3.jpg",
                        name: '优生鲜 鸭系列 大鸭腿',
                        fl: '鸭系列',
                        id: "YZ003",
                        price:  293,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/ducks/4.jpg",
                title: "鸭锁骨",
                id: "YZ004",
                price: 294,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/ducks/4.jpg",
                        name: '优生鲜 鸭系列 整鸭',
                        fl: '鸭系列',
                        id: "YZ004",
                        price:  294,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/ducks/5.jpg",
                title: "鸭舌",
                id: "YZ005",
                price: 295,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/ducks/5.jpg",
                        name: '优生鲜 鸭系列 鸭舌',
                        fl: '鸭系列',
                        id: "YZ005",
                        price:  295,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/ducks/6.jpg",
                title: "鸭肉快",
                id: "YZ006",
                price: 296,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/ducks/6.jpg",
                        name: '优生鲜 鸭系列 鸭肉快',
                        fl: '鸭系列',
                        id: "YZ006",
                        price:  296,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/ducks/7.jpg",
                title: "鸭腿",
                id: "YZ007",
                price: 297,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/ducks/7.jpg",
                        name: '优生鲜 鸭系列 鸭腿',
                        fl: '鸭系列',
                        id: "YZ007",
                        price:  297,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/ducks/8.jpg",
                title: "鸭翅",
                id: "YZ008",
                price: 298,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/ducks/8.jpg",
                        name: '优生鲜 鸭系列 鸭翅',
                        fl: '鸭系列',
                        id: "YZ008",
                        price:  298,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/ducks/9.jpg",
                title: "鸭胗",
                id: "YZ009",
                price: 299,
                number: 999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/ducks/9.jpg",
                        name: '优生鲜 鸭系列 鸭胗',
                        fl: '鸭系列',
                        id: "YZ009",
                        price:  299,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/ducks/10.jpg",
                title: "鸭肠",
                id: "YZ0010",
                price: 290,
                number: "189",
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/ducks/10.jpg",
                        name: '优生鲜 鸭系列 鸭肠',
                        fl: '鸭系列',
                        id: "YZ0010",
                        price:  290,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            }

        ]
    },
    {
        img: 'http://www.ilqiqi.top/images/mYc/goods/shrimps/1.jpg',
        id: 'DXL',
        goodsName: "大虾类",
        classify: [
            {
                name: "白虾"
            },
            {
                name: "大龙虾"
            },
            {
                name: "小龙虾"
            },
            {
                name: "北极甜虾"
            },
            {
                name: "虾仁"
            },
            {
                name: "皮皮虾 "
            },
            {
                name: "基围虾 "
            },
            {
                name: "红虾"
            },
            {
                name: "黑虎虾"
            },
            {
                name: "对虾/竹节虾"
            }
        ],
        bannerImg: [

            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_shrimps/15.jpg',
                id: "bdx3"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_shrimps/16.jpg',
                id: "bdx4"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_shrimps/17.jpg',
                id: "bdx5"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_shrimps/18.jpg',
                id: "bdx6"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_shrimps/19.jpg',
                id: "bdx7"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_shrimps/20.jpg',
                id: "bdx7"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_shrimps/21.jpg',
                id: "bdx7"
            }


        ],
        leftImg: [
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_shrimps/22.jpg',
                id: "DXlI001"
            }
        ],
        goodsImg: [
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/1.jpg",
                title: "白虾",
                id: "DX001",
                price: 291,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/1.jpg",
                        name: '优生鲜 虾系列 白虾',
                        fl: '虾系列',
                        id: "DX001",
                        price:  291,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/2.jpg",
                title: "皮皮虾",
                id: "DX002",
                price: 292,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/2.jpg",
                        name: '优生鲜 虾系列 皮皮虾',
                        fl: '虾系列',
                        id: "DX002",
                        price:  292,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/3.jpg",
                title: "黑虎虾",
                id: "DX003",
                price: 293,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/3.jpg",
                        name: '优生鲜 虾系列 黑虎虾',
                        fl: '虾系列',
                        id: "DX003",
                        price:  293,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/4.jpg",
                title: "小龙虾",
                id: "DX004",
                price: 294,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/4.jpg",
                        name: '优生鲜 虾系列 小龙虾',
                        fl: '虾系列',
                        id: "DX004",
                        price:  294,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/5.jpg",
                title: "大龙虾",
                id: "DX005",
                price: "295",
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/5.jpg",
                        name: '优生鲜 虾系列 大龙虾',
                        fl: '虾系列',
                        id: "DX005",
                        price:  295,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/6.jpg",
                title: "维基虾",
                id: "DX006",
                price: 296,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/6.jpg",
                        name: '优生鲜 虾系列 维基虾',
                        fl: '虾系列',
                        id: "DX006",
                        price:  296,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/12.jpg",
                title: "北极甜虾",
                id: "DX007",
                price: 297,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/12.jpg",
                        name: '优生鲜 虾系列 白虾',
                        fl: '虾系列',
                        id: "DX007",
                        price:  297,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/8.jpg",
                title: "虾仁",
                id: "DX008",
                price: 298,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/8.jpg",
                        name: '优生鲜 虾系列 虾仁',
                        fl: '虾系列',
                        id: "DX008",
                        price:  298,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/9.jpg",
                title: "虾皮",
                id: "DX009",
                price: 299,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/9.jpg",
                        name: '优生鲜 虾系列 虾皮',
                        fl: '虾系列',
                        id: "DX009",
                        price:  299,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/10.jpg",
                title: "红虾",
                id: "DX0010",
                price: 290,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/10.jpg",
                        name: '优生鲜 虾系列 红虾',
                        fl: '虾系列',
                        id: "DX0010",
                        price:  290,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            }
        ]

    },
    {
        img: 'http://www.ilqiqi.top/images/mYc/goods/bolus/1.jpg',
        id: 'HGW',
        goodsName: "火锅丸",
        classify: [
            {
                name: "牛肉丸"
            },
            {
                name: "鱼丸"
            },
            {
                name: "鱼豆腐"
            },
            {
                name: "火锅肠"
            },
            {
                name: "墨鱼丸"
            },
            {
                name: "蟹柳 "
            },
            {
                name: "贡丸"
            },
            {
                name: "火锅饺"
            },
            {
                name: "滑类"
            },
            {
                name: "包心丸"
            }
        ],
        bannerImg: [
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_huoguo/14.jpg',
                id: "bwz1"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_huoguo/16.jpg',
                id: "bwz2"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_huoguo/17.jpg',
                id: "bwz3"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_huoguo/18.jpg',
                id: "bwz4"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_huoguo/19.jpg',
                id: "bwz5"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_huoguo/20.jpg',
                id: "bwz6"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_huoguo/15.jpg',
                id: "bwz9"
            }


        ],
        leftImg: [
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_huoguo/22.jpg',
                id: "WZlI001"
            }
        ],
        goodsImg: [
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/bolus/1.jpg",
                title: "火锅丸",
                id: "WZ001",
                price: 291,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/bolus/1.jpg",
                        name: '优生鲜 火锅丸',
                        fl: '火锅丸',
                        id: "WZ001",
                        price:  291,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/bolus/2.jpg",
                title: "火锅丸",
                id: "WZ002",
                price: 292,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/bolus/2.jpg",
                        name: '优生鲜 火锅丸',
                        fl: '火锅丸',
                        id: "WZ002",
                        price:  292,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/bolus/3.jpg",
                title: "火锅丸",
                id: "WZ003",
                price: 293,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/bolus/3.jpg",
                        name: '优生鲜 火锅丸',
                        fl: '火锅丸',
                        id: "WZ003",
                        price:  293,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/bolus/4.jpg",
                title: "火锅丸",
                id: "WZ004",
                price: 294,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/bolus/4.jpg",
                        name: '优生鲜 火锅丸',
                        fl: '火锅丸',
                        id: "WZ004",
                        price:  294,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/bolus/5.jpg",
                title: "火锅丸",
                id: "WZ005",
                price: 295,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/bolus/5.jpg",
                        name: '优生鲜 火锅丸',
                        fl: '火锅丸',
                        id: "WZ001",
                        price:  295,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/bolus/6.jpg",
                title: "火锅丸",
                id: "WZ006",
                price: 296,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/bolus/6.jpg",
                        name: '优生鲜 火锅丸',
                        fl: '火锅丸',
                        id: "WZ001",
                        price:  291,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/bolus/7.jpg",
                title: "火锅丸",
                id: "WZ007",
                price: 297,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/bolus/7.jpg",
                        name: '优生鲜 火锅丸',
                        fl: '火锅丸',
                        id: "WZ007",
                        price:  297,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/bolus/8.jpg",
                title: "火锅丸",
                id: "WZ008",
                price: 298,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/bolus/8.jpg",
                        name: '优生鲜 火锅丸',
                        fl: '火锅丸',
                        id: "WZ001",
                        price:  298,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/bolus/9.jpg",
                title: "火锅丸",
                id: "WZ009",
                price: 299,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/bolus/9.jpg",
                        name: '优生鲜 火锅丸',
                        fl: '火锅丸',
                        id: "WZ001",
                        price:  299,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/bolus/10.jpg",
                title: "火锅丸",
                id: "WZ0010",
                price: 290,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/bolus/10.jpg",
                        name: '优生鲜 火锅丸',
                        fl: '火锅丸',
                        id: "WZ0010",
                        price:  290,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            }

        ]
    },
    {
        img: 'http://www.ilqiqi.top/images/mYc/goods/fishs/1.jpg',
        id: 'XYL',
        goodsName: "鲜鱼类",
        classify: [
            {
                name: "三文鱼"
            },
            {
                name: "鳕鱼"
            },
            {
                name: "黄鱼/黄花鱼"
            },
            {
                name: "带鱼"
            },
            {
                name: "金枪鱼"
            },
            {
                name: "鲳鱼"
            },
            {
                name: "巴沙鱼"
            },
            {
                name: "鲈鱼"
            },
            {
                name: "鲽鱼"
            },
            {
                name: "胖头鱼"
            },
            {
                name: "鲫鱼"
            }
        ],
        bannerImg: [
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_fishs/14.jpg',
                id: "bxy2"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_fishs/15.jpg',
                id: "bxy3"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_fishs/16.jpg',
                id: "bxy4"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_fishs/17.jpg',
                id: "bxy5"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_fishs/18.jpg',
                id: "bxy6"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_fishs/19.jpg',
                id: "bxy7"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_fishs/20.jpg',
                id: "bxy8"
            }
        ],
        leftImg: [
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_fishs/21.jpg',
                id: "XYlI001"
            }
        ],
        goodsImg: [
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/fishs/1.jpg",
                title: "三文鱼",
                id: "XY001",
                price:  291,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/fishs/1.jpg",
                        name: '优生鲜 鲜鱼类 三文鱼',
                        fl: '鲜鱼类',
                        id: "XY001",
                        price:  291,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/fishs/2.jpg",
                title: "金枪鱼刺身",
                id: "XY002",
                price:  292,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/fishs/2.jpg",
                        name: '优生鲜 鲜鱼类 三文鱼',
                        fl: '鲜鱼类',
                        id: "XY002",
                        price:  292,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/fishs/3.jpg",
                title: "带鱼",
                id: "XY003",
                price:  293,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/fishs/3.jpg",
                        name: '优生鲜 鲜鱼类 带鱼',
                        fl: '鲜鱼类',
                        id: "XY003",
                        price:  293,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/fishs/4.jpg",
                title: "多春鱼",
                id: "XY004",
                price:  294,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/fishs/4.jpg",
                        name: '优生鲜 鲜鱼类 多春鱼',
                        fl: '鲜鱼类',
                        id: "XY004",
                        price:  294,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/fishs/5.jpg",
                title: "鲳鱼",
                id: "XY005",
                price:  295,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/fishs/5.jpg",
                        name: '优生鲜 鲜鱼类 鲳鱼',
                        fl: '鲜鱼类',
                        id: "XY005",
                        price:  295,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/fishs/6.jpg",
                title: "鲫鱼",
                id: "XY006",
                price:  296,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/fishs/6.jpg",
                        name: '优生鲜 鲜鱼类 鲫鱼',
                        fl: '鲜鱼类',
                        id: "XY006",
                        price:  296,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/fishs/7.jpg",
                title: "胖头鱼",
                id: "XY007",
                price:  297,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/fishs/7.jpg",
                        name: '优生鲜 鲜鱼类 胖头鱼',
                        fl: '鲜鱼类',
                        id: "XY007",
                        price:  297,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/fishs/8.jpg",
                title: "多春鱼",
                id: "XY008",
                price:  298,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/fishs/8.jpg",
                        name: '优生鲜 鲜鱼类 多春鱼',
                        fl: '鲜鱼类',
                        id: "XY008",
                        price:  298,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/fishs/9.jpg",
                title: "鲈鱼",
                id: "XY009",
                price:  299,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/fishs/9.jpg",
                        name: '优生鲜 鲜鱼类 鲈鱼',
                        fl: '鲜鱼类',
                        id: "XY009",
                        price:  299,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/fishs/10.jpg",
                title: "鳕鱼",
                id: "XY0010",
                price:  290,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/fishs/10.jpg",
                        name: '优生鲜 鲜鱼类 鳕鱼',
                        fl: '鲜鱼类',
                        id: "XY0010",
                        price:  290,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            }
        ]
    },
    {   
        img: 'http://www.ilqiqi.top/images/mYc/goods/sheeps/1.jpg',
        id: 'YRL',
        goodsName: "羊肉类",
        classify: [
            {
                name: "羊肉片/卷"
            },
            {
                name: "羊肋排"
            },
            {
                name: "羊腿 "
            },
            {
                name: "羊蝎子"
            },
            {
                name: "羊肉串"
            },
            {
                name: "羊肉块 "
            },
            {
                name: "羊杂"
            },
            {
                name: "西式羊排"
            },
            {
                name: "整羊"
            },
            {
                name: "羊肉半成品"
            }
        ],
        bannerImg: [
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_sheeps/14.jpg',
                id: "byr2"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_fishs/15.jpg',
                id: "byr3"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_sheeps/16.jpg',
                id: "byr4"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_sheeps/17.jpg',
                id: "byr5"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_sheeps/18.jpg',
                id: "byr6"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_sheeps/19.jpg',
                id: "byr7"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_sheeps/20.jpg',
                id: "byr8"
            }


        ],
        leftImg: [
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_sheeps/13.jpg',
                id: "YRlI001"
            }
        ],
        goodsImg: [
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/1.jpg",
                title: "羊腿",
                id: "YR001",
                price: 291,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/1.jpg",
                        name: '优生鲜 羊系列 羊腿',
                        fl: '羊系列',
                        id: "YR001",
                        price:  291,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/2.jpg",
                title: "羊肉块",
                id: "YR002",
                price: 292,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/2.jpg",
                        name: '优生鲜 羊系列 羊肉块',
                        fl: '羊系列',
                        id: "YR002",
                        price:  292,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/3.jpg",
                title: "羊肉串",
                id: "YR003",
                price: 293,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/3.jpg",
                        name: '优生鲜 羊系列 羊肉串',
                        fl: '羊系列',
                        id: "YR003",
                        price:  293,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/12.jpg",
                title: "羊腰子",
                id: "YR004",
                price: 294,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/12.jpg",
                        name: '优生鲜 羊系列 羊腰子',
                        fl: '羊系列',
                        id: "YR004",
                        price:  294,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/5.jpg",
                title: "羊杂",
                id: "YR005",
                price: 295,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/5.jpg",
                        name: '优生鲜 羊系列 羊杂',
                        fl: '羊系列',
                        id: "YR005",
                        price:  295,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/6.jpg",
                title: "羊肉馅",
                id: "YR006",
                price: 296,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/6.jpg",
                        name: '优生鲜 羊系列 羊肉馅',
                        fl: '羊系列',
                        id: "YR006",
                        price:  296,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/7.jpg",
                title: "整羊",
                id: "YR007",
                price: 297,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/7.jpg",
                        name: '优生鲜 羊系列 整羊',
                        fl: '羊系列',
                        id: "YR007",
                        price:  297,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/8.jpg",
                title: "羊肋排",
                id: "YR008",
                price: 298,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/8.jpg",
                        name: '优生鲜 羊系列 羊肋排',
                        fl: '羊系列',
                        id: "YR008",
                        price:  298,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/9.jpg",
                title: "羊蝎子",
                id: "YR009",
                price: 299,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/9.jpg",
                        name: '优生鲜 羊系列 羊蝎子',
                        fl: '羊系列',
                        id: "YR009",
                        price:  299,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/10.jpg",
                title: "羊肉片/卷 ",
                id: "YR0010",
                price: 290,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/10.jpg",
                        name: '优生鲜 羊系列 羊肉片/卷',
                        fl: '羊系列',
                        id: "YR0010",
                        price:  290,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            }
        ]
    },
    {
        img: 'http://www.ilqiqi.top/images/mYc/goods/cows/1.jpg',
        id: 'NRL',
        goodsName: "牛肉类",
        classify: [
            {
                name: "牛腩"
            },
            {
                name: "牛腱"
            },
            {
                name: "原切牛排"
            },
            {
                name: "调理牛排"
            },
            {
                name: "牛里脊"
            },
            {
                name: "牛肉片/卷 "
            },
            {
                name: "牛尾"
            },
            {
                name: "牛肋条"
            },
            {
                name: "牛蹄筋"
            },
            {
                name: "牛骨"
            }
        ],
        bannerImg: [

            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_cows/15.jpg',
                id: "bnr3"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_cows/16.jpg',
                id: "bnr4"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_cows/17.jpg',
                id: "bnr5"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_cows/18.jpg',
                id: "bnr6"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_cows/19.jpg',
                id: "bnr7"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_cows/20.jpg',
                id: "bnr8"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_cows/21.jpg',
                id: "bnr9"
            }


        ],
        leftImg: [
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_cows/22.jpg',
                id: "NRlI001"
            }
        ],
        goodsImg: [
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/cows/1.jpg",
                title: "牛排",
                id: "NR001",
                price: 291,
                number: 999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/cows/1.jpg",
                        name: '优生鲜 牛系列 牛排',
                        fl: '牛系列',
                        id: "NR001",
                        price:  291,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/cows/2.jpg",
                title: "牛腩",
                id: "NR002",
                price: 292,
                number: 999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/cows/2.jpg",
                        name: '优生鲜 牛系列 牛腩',
                        fl: '牛系列',
                        id: "NR002",
                        price:  292,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/cows/3.jpg",
                title: "牛里脊",
                id: "NR003",
                price: 293,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/cows/3.jpg",
                        name: '优生鲜 牛系列 牛里脊',
                        fl: '牛系列',
                        id: "NR003",
                        price:  293,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/cows/4.jpg",
                title: "牛肉卷",
                id: "NR004",
                price: 294,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/cows/4.jpg",
                        name: '优生鲜 牛系列 牛肉卷',
                        fl: '牛系列',
                        id: "NR004",
                        price:  294,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/cows/5.jpg",
                title: "牛腱",
                id: "NR005",
                price: 295,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/cows/5.jpg",
                        name: '优生鲜 牛系列 牛腱',
                        fl: '牛系列',
                        id: "NR005",
                        price:  295,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/cows/6.jpg",
                title: "牛肋条",
                id: "NR006",
                price: 296,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/cows/6.jpg",
                        name: '优生鲜 牛系列 牛肋条',
                        fl: '牛系列',
                        id: "NR006",
                        price:  296,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/cows/7.jpg",
                title: "牛骨",
                id: "NR007",
                price: 297,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/cows/7.jpg",
                        name: '优生鲜 牛系列 牛骨',
                        fl: '牛系列',
                        id: "NR007",
                        price:  297,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/cows/8.jpg",
                title: "牛肉串",
                id: "NR008",
                price: 298,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/cows/8.jpg",
                        name: '优生鲜 牛系列 牛肉串',
                        fl: '牛系列',
                        id: "NR008",
                        price:  298,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/cows/9.jpg",
                title: "牛腿",
                id: "NR009",
                price: 299,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/cows/9.jpg",
                        name: '优生鲜 牛系列 牛腿',
                        fl: '牛系列',
                        id: "NR009",
                        price:  299,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/cows/10.jpg",
                title: "牛肉块",
                id: "NR0010",
                price: 290,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/cows/10.jpg",
                        name: '优生鲜 牛系列 牛肉块',
                        fl: '牛系列',
                        id: "NR0010",
                        price:  290,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            }

        ]
    },
    {
        img: 'http://www.ilqiqi.top/images/mYc/goods/pigs/1.jpg',
        id: 'ZRL',
        goodsName: "猪肉类",
        classify: [
            {
                name: "排骨"
            },
            {
                name: "猪蹄"
            },
            {
                name: "五花肉"
            },
            {
                name: "猪里脊"
            },
            {
                name: "猪排"
            },
            {
                name: "梅花肉"
            },
            {
                name: "猪肘"
            },
            {
                name: "汤骨/棒骨"
            },
            {
                name: "猪腿肉"
            },
            {
                name: "熟食"
            },
            {
                name: "腔骨/脊骨"
            }
        ],
        bannerImg: [
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_pig/15.jpg',
                id: "bzr1"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_pig/16.jpg',
                id: "bzr2"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_pig/17.jpg',
                id: "bzr3"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_pig/18.jpg',
                id: "bzr4"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_pig/19.jpg',
                id: "bzr5"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_pig/20.jpg',
                id: "bzr6"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_pig/21.jpg',
                id: "bzr7"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_pig/20.jpg',
                id: "bzr8"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_pig/21.jpg',
                id: "bzr9"
            }


        ],
        leftImg: [
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_pig/22.jpg',
                id: "ZRlI001"
            }
        ],
        goodsImg: [
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/pigs/1.jpg",
                title: "五花肉",
                id: "ZR001",
                price: 291,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/pigs/1.jpg",
                        name: '优生鲜 猪系列 五花肉',
                        fl: '猪系列',
                        id: "ZR001",
                        price:  291,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/pigs/2.jpg",
                title: "猪排",
                id: "ZR002",
                price: 292,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/pigs/2.jpg",
                        name: '优生鲜 猪系列 猪排',
                        fl: '猪系列',
                        id: "ZR002",
                        price:  292,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/pigs/3.jpg",
                title: "猪脊骨",
                id: "ZR003",
                price: 293,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/pigs/3.jpg",
                        name: '优生鲜 猪系列 猪脊骨',
                        fl: '猪系列',
                        id: "ZR003",
                        price:  293,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/pigs/4.jpg",
                title: "猪里脊",
                id: "ZR004",
                price: 294,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/pigs/4.jpg",
                        name: '优生鲜 猪系列 猪里脊',
                        fl: '猪系列',
                        id: "ZR004",
                        price:  294,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/pigs/5.jpg",
                title: "猪腿肉",
                id: "ZR005",
                price: 295,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/pigs/5.jpg",
                        name: '优生鲜 猪系列 猪腿肉',
                        fl: '猪系列',
                        id: "ZR005",
                        price:  295,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/pigs/6.jpg",
                title: "猪肉馅",
                id: "ZR006",
                price: 296,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/pigs/6.jpg",
                        name: '优生鲜 猪系列 猪肉馅',
                        fl: '猪系列',
                        id: "ZR006",
                        price:  296,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/pigs/7.jpg",
                title: "梅花肉",
                id: "ZR007",
                price: 297,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/pigs/7.jpg",
                        name: '优生鲜 猪系列 梅花肉',
                        fl: '猪系列',
                        id: "ZR007",
                        price:  297,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/pigs/8.jpg",
                title: "猪肘子",
                id: "ZR008",
                price: 298,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/pigs/8.jpg",
                        name: '优生鲜 猪系列 猪肘子',
                        fl: '猪系列',
                        id: "ZR008",
                        price:  298,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/pigs/9.jpg",
                title: "猪腿肉",
                id: "ZR009",
                price: 299,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/pigs/9.jpg",
                        name: '优生鲜 猪系列 猪腿肉',
                        fl: '猪系列',
                        id: "ZR009",
                        price:  299,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/pigs/10.jpg",
                title: "猪肉块",
                id: "ZR0010",
                price: 290,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/pigs/10.jpg",
                        name: '优生鲜 猪系列 猪肉块',
                        fl: '猪系列',
                        id: "ZR0010",
                        price:  291,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            }

        ]
    },
    {
        img: 'http://www.ilqiqi.top/images/mYc/goods/noodles/1.jpg',
        id: 'MDL',
        goodsName: "面点类",
        classify: [
            {
                name: "手抓饼"
            },
            {
                name: "馒头"
            },
            {
                name: "烧饼/馅饼"
            },
            {
                name: "粽子"
            },
            {
                name: "烧麦"
            },
            {
                name: "肠粉 "
            },
            {
                name: "花卷 "
            },
            {
                name: "油条"
            },
            {
                name: "春卷"
            },
            {
                name: "年糕"
            },
            {
                name: "水晶包"
            },
            {
                name: "包子"
            }
        ],
        bannerImg: [
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_noodles/14.jpg',
                id: "bmd1"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_noodles/15.jpg',
                id: "bmd2"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_noodles/16.jpg',
                id: "bmd3"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_noodles/17.jpg',
                id: "bmd4"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_noodles/18.jpg',
                id: "bmd5"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_noodles/19.jpg',
                id: "bmd6"
            },
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_noodles/20.jpg',
                id: "bmd7"
            }


        ],
        leftImg: [
            {
                img: 'http://www.ilqiqi.top/pc/img/content/content_goods_noodles/22.jpg',
                id: "MDlI001"
            }
        ],
        goodsImg: [
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/noodles/1.jpg",
                title: "包子",
                id: "MD001",
                price: 291,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/noodles/1.jpg",
                        name: '优生鲜 面点系列 包子',
                        fl: '面点系列',
                        id: "MD001",
                        price: 291,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/noodles/2.jpg",
                title: "烧麦",
                id: "MD002",
                price: 292,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/noodles/2.jpg",
                        name: '优生鲜 面点系列 烧麦',
                        fl: '面点系列',
                        id: "MD002",
                        price: 292,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/noodles/3.jpg",
                title: "油条",
                id: "MD003",
                price: 293,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/noodles/3.jpg",
                        name: '优生鲜 面点系列 油条',
                        fl: '面点系列',
                        id: "MD003",
                        price: 293,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/noodles/4.jpg",
                title: "大馒头",
                id: "MD004",
                price: 294,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/noodles/4.jpg",
                        name: '优生鲜 面点系列 大馒头',
                        fl: '面点系列',
                        id: "MD004",
                        price: 294,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/noodles/5.jpg",
                title: "花卷",
                id: "MD005",
                price: 295,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/noodles/5.jpg",
                        name: '优生鲜 面点系列 花卷',
                        fl: '面点系列',
                        id: "MD005",
                        price: 295,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/noodles/6.jpg",
                title: "糖三角",
                id: "MD006",
                price: 296,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/noodles/6.jpg",
                        name: '优生鲜 面点系列 糖三角',
                        fl: '面点系列',
                        id: "MD006",
                        price: 296,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/noodles/7.jpg",
                title: "手工水饺",
                id: "MD007",
                price: 297,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/noodles/7.jpg",
                        name: '优生鲜 面点系列 手工水饺',
                        fl: '面点系列',
                        id: "MD007",
                        price: 297,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/noodles/8.jpg",
                title: "水晶包",
                id: "MD008",
                price: 298,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/noodles/8.jpg",
                        name: '优生鲜 面点系列 包子',
                        fl: '面点系列',
                        id: "MD008",
                        price: 298,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/noodles/9.jpg",
                title: "双色花卷",
                id: "MD009",
                price: 299,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/noodles/9.jpg",
                        name: '优生鲜 面点系列 双色花卷',
                        fl: '面点系列',
                        id: "MD009",
                        price: 299,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/noodles/10.jpg",
                title: "蒸饺",
                id: "MD0010",
                price: 290,
                number: 9999,
                state: '1',
                goodsInfo: [
                    {
                        img: "http://www.ilqiqi.top/images/mYc/goods/noodles/10.jpg",
                        name: '优生鲜 面点系列 蒸饺',
                        fl: '面点系列',
                        id: "MD0010",
                        price: 290,
                        number: 9999,
                        gg: '500g左右',
                        state: '1',
                        sl: 1

                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'}

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text: '商品介绍'},
                    {text: '规格与包装'},
                    {text: '售后保障'},
                    {text: '商品评价'}
                ]
            }

        ]
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









































































































