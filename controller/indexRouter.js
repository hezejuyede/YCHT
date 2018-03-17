const mongodb = require("../models/mongodb.js");        //引入mongodb的数据库
const md5 = require("../models/md5.js");               //引入MD5加密
const formidable = require("formidable");             //引入formidable
const path = require('path');                        //引入PATH模块
const fs = require('fs');                           //引入FS模块
const gm = require('gm');                          //引入GM
const ObjectId = require('mongodb').ObjectID;     //引入OjeckID模块


const bannerNav =[
    [
        {
            goodsName: "螃蟹",
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
            ]
        },
        {
            goodsName: "大虾",
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
            ]
        },
        {
            goodsName: "鲜鱼",
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
            ]
        },

    ],
    [
        {
            goodsName: "羊肉",
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
            ]
        },
        {
            goodsName: "牛肉",
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
            ]
        },
        {
            goodsName: "猪肉",
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
            ]
        },

    ],
    [
        {
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
            ]
        },
        {
            goodsName: "调料",
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
            ]
        },

    ],
    [
        {
            goodsName: "鸡肉",
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
            ]
        },

        {
            goodsName: "鸭肉",
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
            ]
        },
    ],
    [
        {
            goodsName: "面点",
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
            ]
        },
    ]
];

const tsbuy = [
        [
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/crad/3.jpg",
                title: "面包蟹",
                id: "PX003",
                price: "293",
                number: "193",
                size:"1"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/chichens/1.jpg",
                title: "肉食鸡",
                id: "JR001",
                price: "291",
                number: "191",
                size:"1"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/ducks/1.jpg",
                title: "整鸭",
                id: "YZ001",
                price: "291",
                number: "191",
                size:"1"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/cows/1.jpg",
                title: "牛排",
                id: "NR001",
                price: "291",
                number: "191",
                size:"1"
            }
        ],
        [
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/2.jpg",
                title: "暖胃羊肉汤",
                id: "YR002",
                price: "292",
                number: "192",
                size:"羊肉既能御风寒，又能补身体，是秋冬进补的不错选择"

            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/pigs/2.jpg",
                title: "咖喱猪排饭",
                id: "YR002",
                price: "292",
                number: "192",
                size:"咖喱与猪排的完美结合~一口咬下去实在太满足了~好吃的停不下来"
            }
        ],
        [
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/fishs/1.jpg",
                title: "新鲜大西洋海捕三文鱼2KG",
                id: "XY001",
                price: "291",
                number: "191",
                baoMing:"14268"
            },
        ],
        [
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/1.jpg",
                title: "白虾",
                id: "DX001",
                price: "291",
                number: "191"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/7.jpg",
                title: "整羊",
                id: "YR007",
                price: "297",
                number: "197"
            }
        ]
    ];

const pcRecommend=[
    [
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/crad/2.jpg",
            title: "梭子蟹",
            id: "PX002",
            price: "292",
            number: "192"

        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/chichens/3.jpg",
            title: "大鸡腿",
            id: "JR003",
            price: "293",
            number: "193"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/ducks/4.jpg",
            title: "鸭锁骨",
            id: "YZ004",
            price: "294",
            number: "194"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/cows/4.jpg",
            title: "牛肉卷",
            id: "NR004",
            price: "294",
            number: "194"
        }

    ],
    [
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/pigs/7.jpg",
            title: "梅花肉",
            id: "ZR007",
            price: "297",
            number: "197"

        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/8.jpg",
            title: "羊肋排",
            id: "YR008",
            price: "298",
            number: "198"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/fishs/6.jpg",
            title: "鲫鱼",
            id: "XY006",
            price: "296",
            number: "196"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/6.jpg",
            title: "维基虾",
            id: "DX006",
            price: "296",
            number: "196"
        }

    ],
    [
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/2.jpg",
            title: "皮皮虾",
            id: "DX002",
            price: "292",
            number: "192"

        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/crad/9.jpg",
            title: "河蟹",
            id: "PX009",
            price: "299",
            number: "199"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/bolus/2.jpg",
            title: "火锅丸",
            id: "WZ002",
            price: "292",
            number: "192"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/1.jpg",
            title: "白虾",
            id: "DX001",
            price: "291",
            number: "191"
        }

    ],
    [
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/crad/5.jpg",
            title: "雪蟹",
            id: "PX005",
            price: "295",
            number: "195"

        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/chichens/8.jpg",
            title: "乌鸡",
            id: "JR008",
            price: "298",
            number: "198"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/ducks/7.jpg",
            title: "鸭腿",
            id: "YZ007",
            price: "297",
            number: "197"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/10.jpg",
            title: "羊肉片/卷 ",
            id: "YR0010",
            price: "289",
            number: "189"
        }

    ]
];

const PcGoodsList = [
    [
        {
            goodsName: "螃蟹",
            title:"鲜活大螃蟹，肉质细嫩，膏似凝脂，味道鲜美",
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
                    price: "291",
                    number: "191"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/crad/2.jpg",
                    title: "梭子蟹",
                    id: "PX002",
                    price: "292",
                    number: "192"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/crad/3.jpg",
                    title: "面包蟹",
                    id: "PX003",
                    price: "293",
                    number: "193"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/crad/4.jpg",
                    title: "青蟹",
                    id: "PX004",
                    price: "294",
                    number: "194"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/crad/5.jpg",
                    title: "雪蟹",
                    id: "PX005",
                    price: "295",
                    number: "195"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/crad/6.jpg",
                    title: "珍宝蟹",
                    id: "PX006",
                    price: "296",
                    number: "196"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/crad/7.jpg",
                    title: "醉蟹",
                    id: "PX007",
                    price: "297",
                    number: "197"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/crad/8.jpg",
                    title: "红毛蟹",
                    id: "PX008",
                    price: "298",
                    number: "198"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/crad/9.jpg",
                    title: "河蟹",
                    id: "PX009",
                    price: "299",
                    number: "199"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/crad/10.jpg",
                    title: "大闸蟹",
                    id: "PX0010",
                    price: "289",
                    number: "189"
                }
            ]
        }
    ],
    [
        {
            goodsName: "大虾",
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
                    price: "291",
                    number: "191"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/2.jpg",
                    title: "皮皮虾",
                    id: "DX002",
                    price: "292",
                    number: "192"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/3.jpg",
                    title: "黑虎虾",
                    id: "DX003",
                    price: "293",
                    number: "193"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/4.jpg",
                    title: "小龙虾",
                    id: "DX004",
                    price: "294",
                    number: "194"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/5.jpg",
                    title: "大龙虾",
                    id: "DX005",
                    price: "295",
                    number: "195"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/6.jpg",
                    title: "维基虾",
                    id: "DX006",
                    price: "296",
                    number: "196"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/12.jpg",
                    title: "北极甜虾",
                    id: "DX007",
                    price: "297",
                    number: "197"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/8.jpg",
                    title: "虾仁",
                    id: "DX008",
                    price: "298",
                    number: "198"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/9.jpg",
                    title: "虾皮",
                    id: "DX009",
                    price: "299",
                    number: "199"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/10.jpg",
                    title: "红虾",
                    id: "DX0010",
                    price: "289",
                    number: "189"
                }
            ]
        }
    ],
    [
        {
            goodsName: "鲜鱼",
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
                    price: "291",
                    number: "191"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/fishs/2.jpg",
                    title: "金枪鱼刺身",
                    id: "XY002",
                    price: "292",
                    number: "192"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/fishs/3.jpg",
                    title: "带鱼",
                    id: "XY003",
                    price: "293",
                    number: "193"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/fishs/4.jpg",
                    title: "多春鱼",
                    id: "XY004",
                    price: "294",
                    number: "194"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/fishs/5.jpg",
                    title: "鲳鱼",
                    id: "XY005",
                    price: "295",
                    number: "195"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/fishs/6.jpg",
                    title: "鲫鱼",
                    id: "XY006",
                    price: "296",
                    number: "196"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/fishs/7.jpg",
                    title: "胖头鱼",
                    id: "XY007",
                    price: "297",
                    number: "197"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/fishs/8.jpg",
                    title: "多春鱼",
                    id: "XY008",
                    price: "298",
                    number: "198"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/fishs/9.jpg",
                    title: "鲈鱼",
                    id: "XY009",
                    price: "299",
                    number: "199"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/fishs/10.jpg",
                    title: "鳕鱼",
                    id: "XY0010",
                    price: "289",
                    number: "189"
                }
            ]
        }
    ],
    [
        {
            goodsName: "羊肉",
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
                    price: "291",
                    number: "191"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/2.jpg",
                    title: "羊肉块",
                    id: "YR002",
                    price: "292",
                    number: "192"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/3.jpg",
                    title: "羊肉串",
                    id: "YR003",
                    price: "293",
                    number: "193"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/12.jpg",
                    title: "羊腰子",
                    id: "YR004",
                    price: "294",
                    number: "194"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/5.jpg",
                    title: "羊杂",
                    id: "YR005",
                    price: "295",
                    number: "195"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/6.jpg",
                    title: "羊肉馅",
                    id: "YR006",
                    price: "296",
                    number: "196"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/7.jpg",
                    title: "整羊",
                    id: "YR007",
                    price: "297",
                    number: "197"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/8.jpg",
                    title: "羊肋排",
                    id: "YR008",
                    price: "298",
                    number: "198"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/9.jpg",
                    title: "羊蝎子",
                    id: "YR009",
                    price: "299",
                    number: "199"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/10.jpg",
                    title: "羊肉片/卷 ",
                    id: "YR0010",
                    price: "289",
                    number: "189"
                }
            ]
        }
    ],
    [
        {
            goodsName: "牛肉",
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
                    price: "291",
                    number: "191"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/cows/2.jpg",
                    title: "牛腩",
                    id: "NR002",
                    price: "292",
                    number: "192"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/cows/3.jpg",
                    title: "牛里脊",
                    id: "NR003",
                    price: "293",
                    number: "193"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/cows/4.jpg",
                    title: "牛肉卷",
                    id: "NR004",
                    price: "294",
                    number: "194"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/cows/5.jpg",
                    title: "牛腱",
                    id: "NR005",
                    price: "295",
                    number: "195"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/cows/6.jpg",
                    title: "牛肋条",
                    id: "NR006",
                    price: "296",
                    number: "196"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/cows/7.jpg",
                    title: "牛骨",
                    id: "NR007",
                    price: "297",
                    number: "197"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/cows/8.jpg",
                    title: "牛肉串",
                    id: "NR008",
                    price: "298",
                    number: "198"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/cows/9.jpg",
                    title: "牛腿",
                    id: "NR009",
                    price: "299",
                    number: "199"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/cows/10.jpg",
                    title: "牛肉块",
                    id: "NR0010",
                    price: "289",
                    number: "189"
                }

            ]
        }
    ],
    [
        {
            goodsName: "猪肉",
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
                    price: "291",
                    number: "191"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/pigs/2.jpg",
                    title: "猪排",
                    id: "ZR002",
                    price: "292",
                    number: "192"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/pigs/3.jpg",
                    title: "猪脊骨",
                    id: "ZR003",
                    price: "293",
                    number: "193"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/pigs/4.jpg",
                    title: "猪里脊",
                    id: "ZR004",
                    price: "294",
                    number: "194"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/pigs/5.jpg",
                    title: "猪腿肉",
                    id: "ZR005",
                    price: "295",
                    number: "195"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/pigs/6.jpg",
                    title: "猪肉馅",
                    id: "ZR006",
                    price: "296",
                    number: "196"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/pigs/7.jpg",
                    title: "梅花肉",
                    id: "ZR007",
                    price: "297",
                    number: "197"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/pigs/8.jpg",
                    title: "猪肘子",
                    id: "ZR008",
                    price: "298",
                    number: "198"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/pigs/9.jpg",
                    title: "猪腿肉",
                    id: "ZR009",
                    price: "299",
                    number: "199"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/pigs/10.jpg",
                    title: "猪肉块",
                    id: "ZR0010",
                    price: "289",
                    number: "189"
                }

            ]
        }
    ],
    [
        {
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
                    price: "291",
                    number: "191"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/bolus/2.jpg",
                    title: "火锅丸",
                    id: "WZ002",
                    price: "292",
                    number: "192"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/bolus/3.jpg",
                    title: "火锅丸",
                    id: "WZ003",
                    price: "293",
                    number: "193"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/bolus/4.jpg",
                    title: "火锅丸",
                    id: "WZ004",
                    price: "294",
                    number: "194"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/bolus/5.jpg",
                    title: "火锅丸",
                    id: "WZ005",
                    price: "295",
                    number: "195"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/bolus/6.jpg",
                    title: "火锅丸",
                    id: "WZ006",
                    price: "296",
                    number: "196"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/bolus/7.jpg",
                    title: "火锅丸",
                    id: "WZ007",
                    price: "297",
                    number: "197"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/bolus/8.jpg",
                    title: "火锅丸",
                    id: "WZ008",
                    price: "298",
                    number: "198"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/bolus/9.jpg",
                    title: "火锅丸",
                    id: "WZ009",
                    price: "299",
                    number: "199"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/bolus/10.jpg",
                    title: "火锅丸",
                    id: "WZ0010",
                    price: "289",
                    number: "189"
                }

            ]
        }
    ],
    [
        {
            goodsName: "调料",
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
                    price: "291",
                    number: "191"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/2.jpg",
                    title: "酱油",
                    id: "TL002",
                    price: "292",
                    number: "192"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/3.jpg",
                    title: "豆瓣酱",
                    id: "TL003",
                    price: "293",
                    number: "193"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/4.jpg",
                    title: "味极鲜",
                    id: "TL004",
                    price: "294",
                    number: "194"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/5.jpg",
                    title: "油",
                    id: "TL005",
                    price: "295",
                    number: "195"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/6.jpg",
                    title: "精盐",
                    id: "TL006",
                    price: "296",
                    number: "196"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/7.jpg",
                    title: "鸡精",
                    id: "TL007",
                    price: "297",
                    number: "197"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/8.jpg",
                    title: "料酒",
                    id: "TL008",
                    price: "298",
                    number: "198"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/9.jpg",
                    title: "麻辣火锅底料",
                    id: "TL009",
                    price: "299",
                    number: "199"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/10.jpg",
                    title: "三鲜火锅底料",
                    id: "TL0010",
                    price: "289",
                    number: "189"
                }

            ]
        }
    ],
    [
        {
            goodsName: "鸡肉",
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
                    price: "291",
                    number: "191"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/chichens/2.jpg",
                    title: "鸡爪",
                    id: "JR002",
                    price: "292",
                    number: "192"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/chichens/3.jpg",
                    title: "大鸡腿",
                    id: "JR003",
                    price: "293",
                    number: "193"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/chichens/4.jpg",
                    title: "翅中",
                    id: "JR004",
                    price: "294",
                    number: "194"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/chichens/5.jpg",
                    title: "鸡胸肉",
                    id: "JR005",
                    price: "295",
                    number: "195"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/chichens/6.jpg",
                    title: "鸡胗",
                    id: "JR006",
                    price: "296",
                    number: "196"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/chichens/7.jpg",
                    title: "老母鸡",
                    id: "JR007",
                    price: "297",
                    number: "197"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/chichens/8.jpg",
                    title: "乌鸡",
                    id: "JR008",
                    price: "298",
                    number: "198"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/chichens/9.jpg",
                    title: "小鸡腿",
                    id: "JR009",
                    price: "299",
                    number: "199"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/chichens/10.jpg",
                    title: "大公鸡",
                    id: "JR0010",
                    price: "289",
                    number: "189"
                }

            ]
        }
    ],
    [
        {
            goodsName: "鸭肉",
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
                    price: "291",
                    number: "191"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/ducks/2.jpg",
                    title: "鸭掌",
                    id: "YZ002",
                    price: "292",
                    number: "192"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/ducks/3.jpg",
                    title: "大鸭腿",
                    id: "YZ003",
                    price: "293",
                    number: "193"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/ducks/4.jpg",
                    title: "鸭锁骨",
                    id: "YZ004",
                    price: "294",
                    number: "194"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/ducks/5.jpg",
                    title: "鸭舌",
                    id: "YZ005",
                    price: "295",
                    number: "195"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/ducks/6.jpg",
                    title: "鸭肉快",
                    id: "YZ006",
                    price: "296",
                    number: "196"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/ducks/7.jpg",
                    title: "鸭腿",
                    id: "YZ007",
                    price: "297",
                    number: "197"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/ducks/8.jpg",
                    title: "鸭翅",
                    id: "YZ008",
                    price: "298",
                    number: "198"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/ducks/9.jpg",
                    title: "鸭胗",
                    id: "YZ009",
                    price: "299",
                    number: "199"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/ducks/10.jpg",
                    title: "鸭肠",
                    id: "YZ0010",
                    price: "289",
                    number: "189"
                }

            ]
        }
    ],
    [
        {
            goodsName: "面点",
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
                    price: "291",
                    number: "191"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/noodles/2.jpg",
                    title: "烧麦",
                    id: "MD002",
                    price: "292",
                    number: "192"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/noodles/3.jpg",
                    title: "油条",
                    id: "MD003",
                    price: "293",
                    number: "193"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/noodles/4.jpg",
                    title: "大馒头",
                    id: "MD004",
                    price: "294",
                    number: "194"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/noodles/5.jpg",
                    title: "花卷",
                    id: "MD005",
                    price: "295",
                    number: "195"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/noodles/6.jpg",
                    title: "糖三角",
                    id: "MD006",
                    price: "296",
                    number: "196"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/noodles/7.jpg",
                    title: "手工水饺",
                    id: "MD007",
                    price: "297",
                    number: "197"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/noodles/8.jpg",
                    title: "水晶包",
                    id: "MD008",
                    price: "298",
                    number: "198"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/noodles/9.jpg",
                    title: "双色花卷",
                    id: "MD009",
                    price: "299",
                    number: "199"
                },
                {
                    img: "http://www.ilqiqi.top/images/mYc/goods/noodles/10.jpg",
                    title: "蒸饺",
                    id: "MD0010",
                    price: "289",
                    number: "189"
                }

            ]
        }
    ]
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

        }
    ],
    [
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

        }
    ],
    [
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

        }
    ],
    [
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

const shoppingCart = [
    {
        img: "http://www.ilqiqi.top/images/mYc/goods/crad/1.jpg",
        title: "【现货】今锦上 阳澄湖大闸蟹888型现货实物生鲜礼盒 公蟹3.5两",
        size: "400g 10-14只",
        price: 290,
        number: 1,
        select: "false",
        goodsPrice: 290
    },
    {
        img: "http://www.ilqiqi.top/images/mYc/goods/crad/2.jpg",
        title: "【现货】今锦上 阳澄湖大闸蟹888型现货实物生鲜礼盒 公蟹3.5两",
        size: "400g 10-14只",
        price: 291,
        number: 2,
        select: "false",
        goodsPrice: 582

    },
    {
        img: "http://www.ilqiqi.top/images/mYc/goods/crad/3.jpg",
        title: "【现货】今锦上 阳澄湖大闸蟹888型现货实物生鲜礼盒 公蟹3.5两",
        size: "400g 10-14只",
        price: 292,
        number: 3,
        select: "false",
        goodsPrice: 876

    },
    {
        img: "http://www.ilqiqi.top/images/mYc/goods/crad/4.jpg",
        title: "【现货】今锦上 阳澄湖大闸蟹888型现货实物生鲜礼盒 公蟹3.5两",
        size: "400g 10-14只",
        price: 293,
        number: 4,
        select: "false",
        goodsPrice: 1172
    }
];

const myAddress = [
    {
        name: '一一',
        address: '永丰街道办事处(青年路北)巨野县永丰街道办事处健康路1号',
        iphoneNumber: '13550739985',
        mr: 'true'
    },
    {
        name: '尔尔',
        address: '永丰街道办事处(青年路北)巨野县永丰街道办事处健康路2号',
        iphoneNumber: '14550739985',
        mr: 'false'
    },
    {
        name: '三三',
        address: '永丰街道办事处(青年路北)巨野县永丰街道办事处健康路3号',
        iphoneNumber: '12550739985',
        mr: 'false'
    },
    {
        name: '四四',
        address: '永丰街道办事处(青年路北)巨野县永丰街道办事处健康路4号',
        iphoneNumber: '11550739985',
        mr: 'false'
    },
    {
        name: '五五',
        address: '永丰街道办事处(青年路北)巨野县永丰街道办事处健康路5号',
        iphoneNumber: '16550739985',
        mr: 'false'
    }
];

const userInfo = [
    {
        avatar: 'http://www.ilqiqi.top/pc/img/content/content_banner/no_login.jpg',
        name: '七七',
        sex: '女',
        age: '32',
        phoneNumber: '13888888888',
        email: '1574408801@qq.com'
    },
];

const productDetails = [
    {

        goodsInfo: [
            {
                title: '亿成优生鲜 爱尔兰面包蟹（1000-800g*2只）熟冻黄金蟹 海鲜 螃蟹',
                price: 199,
                number: 999,
                id: 'px004',
                gg:'共1600-2000g 2只装 大螃蟹 海鲜年货',
                sl:1
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
            {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'},

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
            {text:'商品介绍'},
            {text:'规格与包装'},
            {text:'售后保障'},
            {text:'商品评价'}
        ]

    }
];


const mUserInfos = [{
    userInfo: [
        {username: "七七"},
        {avatar: "http://www.ilqiqi.top/pc/img/content/content_banner/no_login.jpg"},
        {age: '32'},
        {sex: "女"},
        {phoneNumber: '15550729985'},
        {email: '1574408801@qq.com'},
        {address: "山东省菏泽市巨野县永丰街道办事处健康路77号"},
    ],
    collect: [
        {
            img: 'http://www.ilqiqi.top/images/mYc/goods/crad/1.jpg',
            title: '【现货】阳澄好记 阳澄湖大闸蟹(公3.5两母2.5两4对8只)生鲜鲜活螃蟹',
            price: 195,
            number: 1,
            id: 'px001',
        },
        {
            img: 'http://www.ilqiqi.top/images/mYc/goods/crad/2.jpg',
            title: '【现货】阳澄好记 阳澄湖大闸蟹(公3.5两母2.5两4对8只)生鲜鲜活螃蟹',
            price: 196,
            number: 2,
            id: 'px002',
        },
        {
            img: 'http://www.ilqiqi.top/images/mYc/goods/crad/3.jpg',
            title: '【现货】阳澄好记 阳澄湖大闸蟹(公3.5两母2.5两4对8只)生鲜鲜活螃蟹',
            price: 197,
            number: 3,
            id: 'px003',
        },
        {
            img: 'http://www.ilqiqi.top/images/mYc/goods/crad/4.jpg',
            title: '【现货】阳澄好记 阳澄湖大闸蟹(公3.5两母2.5两4对8只)生鲜鲜活螃蟹',
            price: 198,
            number: 4,
            id: 'px004',
        },
        {
            img: 'http://www.ilqiqi.top/images/mYc/goods/crad/5.jpg',
            title: '【现货】阳澄好记 阳澄湖大闸蟹(公3.5两母2.5两4对8只)生鲜鲜活螃蟹',
            price: 199,
            number: 5,
            id: 'px005',
        }
    ],
    shoppingCart: [
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/crad/1.jpg",
            title: "【现货】今锦上 阳澄湖大闸蟹888型现货实物生鲜礼盒 公蟹3.5两",
            size: "400g 10-14只",
            price: 290,
            number: 1,
            select: "false",
            goodsPrice: 290
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/crad/2.jpg",
            title: "【现货】今锦上 阳澄湖大闸蟹888型现货实物生鲜礼盒 公蟹3.5两",
            size: "400g 10-14只",
            price: 291,
            number: 2,
            select: "false",
            goodsPrice: 582

        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/crad/3.jpg",
            title: "【现货】今锦上 阳澄湖大闸蟹888型现货实物生鲜礼盒 公蟹3.5两",
            size: "400g 10-14只",
            price: 292,
            number: 3,
            select: "false",
            goodsPrice: 876

        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/crad/4.jpg",
            title: "【现货】今锦上 阳澄湖大闸蟹888型现货实物生鲜礼盒 公蟹3.5两",
            size: "400g 10-14只",
            price: 293,
            number: 4,
            select: "false",
            goodsPrice: 1172
        }
    ],
    ypl: [
        {
            img: 'http://www.ilqiqi.top/images/mYc/goods/crad/6.jpg',
            title: '【现货】阳澄好记 阳澄湖大闸蟹(公3.5两母2.5两4对8只)生鲜鲜活螃蟹',
            price: 196,
            number: 1,
            id: 'px006',
            star:'4.5',
            text:'买过好几次了，不错。快递很敬业',
            time:'2018年2月5日'
        },
        {
            img: 'http://www.ilqiqi.top/images/mYc/goods/crad/7.jpg',
            title: '【现货】阳澄好记 阳澄湖大闸蟹(公3.5两母2.5两4对8只)生鲜鲜活螃蟹',
            price: 197,
            number: 1,
            id: 'px007',
            star: '4.6',
            text: '买过好几次了，不错。快递很敬业',
            time: '2018年2月6日'

        },
        {
            img: 'http://www.ilqiqi.top/images/mYc/goods/crad/8.jpg',
            title: '【现货】阳澄好记 阳澄湖大闸蟹(公3.5两母2.5两4对8只)生鲜鲜活螃蟹',
            price: 198,
            number: 1,
            id: 'px008',
            star:'4.7',
            text:'买过好几次了，不错。快递很敬业',
            time:'2018年2月7日'
        },
        {
            img: 'http://www.ilqiqi.top/images/mYc/goods/fishs/8.jpg',
            title: '【2件9折3件8.5折】鲜元素 冷冻新西兰银鳕鱼 500g 4-6片 袋装 海鲜水产',
            price: 197,
            number: 1,
            id: 'xy008',
            star:'4.8',
            text:'买过好几次了，不错。快递很敬业',
            time:'2018年2月8日'
        },
    ],
    wpl: [
        {
            img: 'http://www.ilqiqi.top/images/mYc/goods/crad/9.jpg',
            title: '【现货】阳澄好记 阳澄湖大闸蟹(公3.5两母2.5两4对8只)生鲜鲜活螃蟹',
            price: 196,
            number: 1,
            id: 'px009',
            time:'2018年2月5日'
        },
        {
            img: 'http://www.ilqiqi.top/images/mYc/goods/crad/10.jpg',
            title: '【现货】阳澄好记 阳澄湖大闸蟹(公3.5两母2.5两4对8只)生鲜鲜活螃蟹',
            price: 197,
            number: 1,
            id: 'px0010',
            time:'2018年2月6日'
        },
        {
            img: 'http://www.ilqiqi.top/images/mYc/goods/fishs/10.jpg',
            title: '【2件9折3件8.5折】鲜元素 冷冻新西兰银鳕鱼 500g 4-6片 袋装 海鲜水产',
            price: 197,
            number: 1,
            id: 'xy0010',
            time:'2018年2月7日'
        },
        {
            img: 'http://www.ilqiqi.top/images/mYc/goods/fishs/9.jpg',
            title: '【2件9折3件8.5折】鲜元素 冷冻新西兰银鳕鱼 500g 4-6片 袋装 海鲜水产',
            price: 197,
            number: 1,
            id: 'xy009',
            time:'2018年2月8日'
        },
    ],
    info: [
        {text: '您购买的【现货】阳澄好记 阳澄湖大闸蟹(公3.5两母2.5两4对8只)生鲜鲜活螃蟹，已经确认收货了'},
        {text: '您购买的【现货】阳澄好记 阳澄湖大闸蟹(公3.5两母2.5两4对8只)生鲜鲜活螃蟹，已经确认收货了'},
        {text: '您购买的【现货】阳澄好记 阳澄湖大闸蟹(公3.5两母2.5两4对8只)生鲜鲜活螃蟹，已经确认收货了'},
        {text: '您购买的【现货】阳澄好记 阳澄湖大闸蟹(公3.5两母2.5两4对8只)生鲜鲜活螃蟹，已经确认收货了'},
        {text: '您购买的【现货】阳澄好记 阳澄湖大闸蟹(公3.5两母2.5两4对8只)生鲜鲜活螃蟹，已经确认收货了'}
    ],
    ye: [{ye: 199}]
}];

const MgoodsDetails = [{


}];

const rightLists = [
    {
        img: "http://www.ilqiqi.top/images/mYc/goods/crad/11.jpg",
        goodsImg: [
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/crad/1.jpg",
                title: "帝王蟹",
                id: "PX001",
                price: "291",
                number: "191"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/crad/2.jpg",
                title: "梭子蟹",
                id: "PX002",
                price: "292",
                number: "192"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/crad/3.jpg",
                title: "面包蟹",
                id: "PX003",
                price: "293",
                number: "193"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/crad/4.jpg",
                title: "青蟹",
                id: "PX004",
                price: "294",
                number: "194"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/crad/5.jpg",
                title: "雪蟹",
                id: "PX005",
                price: "295",
                number: "195"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/crad/6.jpg",
                title: "珍宝蟹",
                id: "PX006",
                price: "296",
                number: "196"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/crad/7.jpg",
                title: "醉蟹",
                id: "PX007",
                price: "297",
                number: "197"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/crad/8.jpg",
                title: "红毛蟹",
                id: "PX008",
                price: "298",
                number: "198"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/crad/9.jpg",
                title: "河蟹",
                id: "PX009",
                price: "299",
                number: "199"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/crad/10.jpg",
                title: "大闸蟹",
                id: "PX0010",
                price: "289",
                number: "189"
            }

        ]
    },
    {
        img: "http://www.ilqiqi.top/images/mYc/goods/chichens/11.jpg",
        goodsImg: [
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/chichens/1.jpg",
                title: "肉食鸡",
                id: "JR001",
                price: "291",
                number: "191"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/chichens/2.jpg",
                title: "鸡爪",
                id: "JR002",
                price: "292",
                number: "192"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/chichens/3.jpg",
                title: "大鸡腿",
                id: "JR003",
                price: "293",
                number: "193"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/chichens/4.jpg",
                title: "翅中",
                id: "JR004",
                price: "294",
                number: "194"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/chichens/5.jpg",
                title: "鸡胸肉",
                id: "JR005",
                price: "295",
                number: "195"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/chichens/6.jpg",
                title: "鸡胗",
                id: "JR006",
                price: "296",
                number: "196"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/chichens/7.jpg",
                title: "老母鸡",
                id: "JR007",
                price: "297",
                number: "197"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/chichens/8.jpg",
                title: "乌鸡",
                id: "JR008",
                price: "298",
                number: "198"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/chichens/9.jpg",
                title: "小鸡腿",
                id: "JR009",
                price: "299",
                number: "199"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/chichens/10.jpg",
                title: "大公鸡",
                id: "JR0010",
                price: "289",
                number: "189"
            }

        ]
    },
    {
        img: "http://www.ilqiqi.top/images/mYc/goods/ducks/11.jpg",
        goodsImg: [
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/ducks/1.jpg",
                title: "整鸭",
                id: "YZ001",
                price: "291",
                number: "191"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/ducks/2.jpg",
                title: "鸭掌",
                id: "YZ002",
                price: "292",
                number: "192"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/ducks/3.jpg",
                title: "大鸭腿",
                id: "YZ003",
                price: "293",
                number: "193"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/ducks/4.jpg",
                title: "鸭锁骨",
                id: "YZ004",
                price: "294",
                number: "194"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/ducks/5.jpg",
                title: "鸭舌",
                id: "YZ005",
                price: "295",
                number: "195"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/ducks/6.jpg",
                title: "鸭肉快",
                id: "YZ006",
                price: "296",
                number: "196"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/ducks/7.jpg",
                title: "鸭腿",
                id: "YZ007",
                price: "297",
                number: "197"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/ducks/8.jpg",
                title: "鸭翅",
                id: "YZ008",
                price: "298",
                number: "198"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/ducks/9.jpg",
                title: "鸭胗",
                id: "YZ009",
                price: "299",
                number: "199"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/ducks/10.jpg",
                title: "鸭肠",
                id: "YZ0010",
                price: "289",
                number: "189"
            }

        ]
    },
    {
        img: "http://www.ilqiqi.top/images/mYc/goods/cows/11.jpg",
        goodsImg: [
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/cows/1.jpg",
                title: "牛排",
                id: "NR001",
                price: "291",
                number: "191"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/cows/2.jpg",
                title: "牛腩",
                id: "NR002",
                price: "292",
                number: "192"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/cows/3.jpg",
                title: "牛里脊",
                id: "NR003",
                price: "293",
                number: "193"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/cows/4.jpg",
                title: "牛肉卷",
                id: "NR004",
                price: "294",
                number: "194"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/cows/5.jpg",
                title: "牛腱",
                id: "NR005",
                price: "295",
                number: "195"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/cows/6.jpg",
                title: "牛肋条",
                id: "NR006",
                price: "296",
                number: "196"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/cows/7.jpg",
                title: "牛骨",
                id: "NR007",
                price: "297",
                number: "197"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/cows/8.jpg",
                title: "牛肉串",
                id: "NR008",
                price: "298",
                number: "198"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/cows/9.jpg",
                title: "牛腿",
                id: "NR009",
                price: "299",
                number: "199"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/cows/10.jpg",
                title: "牛肉块",
                id: "NR0010",
                price: "289",
                number: "189"
            }

        ]
    },
    {
        img: "http://www.ilqiqi.top/images/mYc/goods/pigs/11.jpg",
        goodsImg: [
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/pigs/1.jpg",
                title: "五花肉",
                id: "ZR001",
                price: "291",
                number: "191"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/pigs/2.jpg",
                title: "猪排",
                id: "ZR002",
                price: "292",
                number: "192"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/pigs/3.jpg",
                title: "猪脊骨",
                id: "ZR003",
                price: "293",
                number: "193"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/pigs/4.jpg",
                title: "猪里脊",
                id: "ZR004",
                price: "294",
                number: "194"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/pigs/5.jpg",
                title: "猪腿肉",
                id: "ZR005",
                price: "295",
                number: "195"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/pigs/6.jpg",
                title: "猪肉馅",
                id: "ZR006",
                price: "296",
                number: "196"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/pigs/7.jpg",
                title: "梅花肉",
                id: "ZR007",
                price: "297",
                number: "197"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/pigs/8.jpg",
                title: "猪肘子",
                id: "ZR008",
                price: "298",
                number: "198"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/pigs/9.jpg",
                title: "猪腿肉",
                id: "ZR009",
                price: "299",
                number: "199"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/pigs/10.jpg",
                title: "猪肉块",
                id: "ZR0010",
                price: "289",
                number: "189"
            }

        ]
    },
    {
        img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/11.jpg", goodsImg: [
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/1.jpg",
            title: "羊腿",
            id: "YR001",
            price: "291",
            number: "191"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/2.jpg",
            title: "羊肉块",
            id: "YR002",
            price: "292",
            number: "192"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/3.jpg",
            title: "羊肉串",
            id: "YR003",
            price: "293",
            number: "193"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/12.jpg",
            title: "羊腰子",
            id: "YR004",
            price: "294",
            number: "194"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/5.jpg",
            title: "羊杂",
            id: "YR005",
            price: "295",
            number: "195"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/6.jpg",
            title: "羊肉馅",
            id: "YR006",
            price: "296",
            number: "196"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/7.jpg",
            title: "整羊",
            id: "YR007",
            price: "297",
            number: "197"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/8.jpg",
            title: "羊肋排",
            id: "YR008",
            price: "298",
            number: "198"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/9.jpg",
            title: "羊蝎子",
            id: "YR009",
            price: "299",
            number: "199"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/sheeps/10.jpg",
            title: "羊肉片/卷 ",
            id: "YR0010",
            price: "289",
            number: "189"
        }

    ]
    },
    {
        img: "http://www.ilqiqi.top/images/mYc/goods/fishs/11.jpg", goodsImg: [
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/fishs/1.jpg",
            title: "三文鱼",
            id: "XY001",
            price: "291",
            number: "191"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/fishs/2.jpg",
            title: "金枪鱼刺身",
            id: "XY002",
            price: "292",
            number: "192"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/fishs/3.jpg",
            title: "带鱼",
            id: "XY003",
            price: "293",
            number: "193"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/fishs/4.jpg",
            title: "多春鱼",
            id: "XY004",
            price: "294",
            number: "194"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/fishs/5.jpg",
            title: "鲳鱼",
            id: "XY005",
            price: "295",
            number: "195"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/fishs/6.jpg",
            title: "鲫鱼",
            id: "XY006",
            price: "296",
            number: "196"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/fishs/7.jpg",
            title: "胖头鱼",
            id: "XY007",
            price: "297",
            number: "197"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/fishs/8.jpg",
            title: "多春鱼",
            id: "XY008",
            price: "298",
            number: "198"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/fishs/9.jpg",
            title: "鲈鱼",
            id: "XY009",
            price: "299",
            number: "199"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/fishs/10.jpg",
            title: "鳕鱼",
            id: "XY0010",
            price: "289",
            number: "189"
        }

    ]
    },
    {
        img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/11.jpg", goodsImg: [
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/1.jpg",
            title: "白虾",
            id: "DX001",
            price: "291",
            number: "191"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/2.jpg",
            title: "皮皮虾",
            id: "DX002",
            price: "292",
            number: "192"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/3.jpg",
            title: "黑虎虾",
            id: "DX003",
            price: "293",
            number: "193"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/4.jpg",
            title: "小龙虾",
            id: "DX004",
            price: "294",
            number: "194"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/5.jpg",
            title: "大龙虾",
            id: "DX005",
            price: "295",
            number: "195"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/6.jpg",
            title: "维基虾",
            id: "DX006",
            price: "296",
            number: "196"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/12.jpg",
            title: "北极甜虾",
            id: "DX007",
            price: "297",
            number: "197"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/8.jpg",
            title: "虾仁",
            id: "DX008",
            price: "298",
            number: "198"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/9.jpg",
            title: "虾皮",
            id: "DX009",
            price: "299",
            number: "199"
        },
        {
            img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/10.jpg",
            title: "红虾",
            id: "DX0010",
            price: "289",
            number: "189"
        }

    ]
    },
    {
        img: "http://www.ilqiqi.top/images/mYc/goods/bolus/11.jpg",
        goodsImg: [
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/bolus/1.jpg",
                title: "火锅丸",
                id: "WZ001",
                price: "291",
                number: "191"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/bolus/2.jpg",
                title: "火锅丸",
                id: "WZ002",
                price: "292",
                number: "192"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/bolus/3.jpg",
                title: "火锅丸",
                id: "WZ003",
                price: "293",
                number: "193"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/bolus/4.jpg",
                title: "火锅丸",
                id: "WZ004",
                price: "294",
                number: "194"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/bolus/5.jpg",
                title: "火锅丸",
                id: "WZ005",
                price: "295",
                number: "195"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/bolus/6.jpg",
                title: "火锅丸",
                id: "WZ006",
                price: "296",
                number: "196"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/bolus/7.jpg",
                title: "火锅丸",
                id: "WZ007",
                price: "297",
                number: "197"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/bolus/8.jpg",
                title: "火锅丸",
                id: "WZ008",
                price: "298",
                number: "198"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/bolus/9.jpg",
                title: "火锅丸",
                id: "WZ009",
                price: "299",
                number: "199"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/bolus/10.jpg",
                title: "火锅丸",
                id: "WZ0010",
                price: "289",
                number: "189"
            }

        ]
    },
    {
        img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/11.jpg",
        goodsImg: [
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/1.jpg",
                title: "香醋",
                id: "TL001",
                price: "291",
                number: "191"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/2.jpg",
                title: "酱油",
                id: "TL002",
                price: "292",
                number: "192"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/3.jpg",
                title: "豆瓣酱",
                id: "TL003",
                price: "293",
                number: "193"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/4.jpg",
                title: "味极鲜",
                id: "TL004",
                price: "294",
                number: "194"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/5.jpg",
                title: "油",
                id: "TL005",
                price: "295",
                number: "195"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/6.jpg",
                title: "精盐",
                id: "TL006",
                price: "296",
                number: "196"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/7.jpg",
                title: "鸡精",
                id: "TL007",
                price: "297",
                number: "197"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/8.jpg",
                title: "料酒",
                id: "TL008",
                price: "298",
                number: "198"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/9.jpg",
                title: "麻辣火锅底料",
                id: "TL009",
                price: "299",
                number: "199"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/seasonings/10.jpg",
                title: "三鲜火锅底料",
                id: "TL0010",
                price: "289",
                number: "189"
            }

        ]
    },
    {
        img: "http://www.ilqiqi.top/images/mYc/goods/noodles/11.jpg",
        goodsImg: [
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/noodles/1.jpg",
                title: "包子",
                id: "MD001",
                price: "291",
                number: "191"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/noodles/2.jpg",
                title: "烧麦",
                id: "MD002",
                price: "292",
                number: "192"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/noodles/3.jpg",
                title: "油条",
                id: "MD003",
                price: "293",
                number: "193"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/noodles/4.jpg",
                title: "大馒头",
                id: "MD004",
                price: "294",
                number: "194"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/noodles/5.jpg",
                title: "花卷",
                id: "MD005",
                price: "295",
                number: "195"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/noodles/6.jpg",
                title: "糖三角",
                id: "MD006",
                price: "296",
                number: "196"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/noodles/7.jpg",
                title: "手工水饺",
                id: "MD007",
                price: "297",
                number: "197"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/noodles/8.jpg",
                title: "水晶包",
                id: "MD008",
                price: "298",
                number: "198"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/noodles/9.jpg",
                title: "双色花卷",
                id: "MD009",
                price: "299",
                number: "199"
            },
            {
                img: "http://www.ilqiqi.top/images/mYc/goods/noodles/10.jpg",
                title: "蒸饺",
                id: "MD0010",
                price: "289",
                number: "189"
            }

        ]
    },
];



exports.bannerNav = (req, res, next) => {
    res.json(bannerNav)
};
exports.tsbuy = (req, res, next) => {
    res.json(tsbuy)
};
exports.pcRecommend = (req, res, next) => {
    res.json(pcRecommend)
};
exports.pcGoodsList = (req, res, next)=> {
  res.json(PcGoodsList)
};
exports.userSay = (req, res, next)=> {
    res.json(userSay)
};




exports.myAddress = (req, res, next)=> {
    res.json(myAddress)
};
exports.userInfo = (req, res, next)=> {
    res.json(userInfo)
};
exports.productDetails = (req, res, next)=> {

    res.json(productDetails)
};



exports.goodsList = (req, res, next) => {
    mongodb.find('P-ProductList', {}, ((err, result) => {
        res.json(result);
    }))
};

exports.MobileGoodsDetails = (req, res, next) => {
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
                console.log(goodsDetails);

                res.json(goodsDetails);
            }

        }))
    }

};





exports.jx = (req, res, next)=> {
    mongodb.find("jx",{},(err,result)=>{
        if(err){
            res.send(err)
        }else {
            res.json(result)
        }
    })
};


exports.goodsList = (req, res, next) => {
    mongodb.find('P-ProductList', {}, ((err, result) => {
        res.json(result);
    }))
};

exports.banner = (req, res, next) => {
    mongodb.find("banner", {}, (err, result)=> {
        if (err) {
            res.send("err");
        }
        res.json(result)
    })

};

exports.headerLine = (req, res, next)=> {
    mongodb.find("headerLine", {}, (err, result)=> {
        if (err) {
            res.send("err");
            return;
        }
        res.json(result)
    })
};

exports.recommend = (req, res, next)=> {
    mongodb.find("recommend", {}, (err, result)=> {
        if (err) {
            res.send("err");
            return;
        }
        res.json(result)
    })
};

exports.tuijian = (req, res, next)=> {
    mongodb.find("Tuijian", {}, (err, result)=> {
        if (err) {
            res.send("err");
            return;
        }
        res.json(result)
    })

};

exports.hotSell = (req, res, next)=> {
    mongodb.find("hotSell",{},(err,result)=>{
        if(err){
            res.send(err);
        }
        else {
            res.json(result)
        }

    })
};

exports.chujian = (req, res, next)=> {
   mongodb.find("ChuJian",{},(err,result)=>{
       if(err){
           res.send(err);
       }
       else {
           res.json(result)
       }



   })
};

exports.search = (req, res, next)=> {
    mongodb.find("search",{},(err,result)=>{
       if(err){
           res.send(err)
       }
       else {
           res.json(result)
       }
    })
};

exports.hot = (req, res, next) => {
    mongodb.find("hot", {}, (err, result) => {
        if(err){
            res.send(err)
        }
        else {
            res.json(result)
        }

    })
};

exports.leftLists = (req, res, next)=> {
    mongodb.find("leftLists",{},(err,result)=>{
        if(err){res.send(err)}
        else {
            res.json(result)
        }
    })
};

exports.rightLists = (req, res, next)=> {
    /*mongodb.find("rightLists",{},(err,result)=>{
        if(err){
            res.json(err)
        }
        else {
            res.json(result)
        }

    })*/
    res.json(rightLists)
};

exports.MuserInfos = (req, res, next)=> {
    res.json(mUserInfos);
};

exports.searchGoods = (req,res,next)=>{

};

