"use strict";

webpackJsonp([1], { "2urZ": function urZ(t, s) {}, "3FWe": function FWe(t, s) {}, "7Jy/": function Jy(t, s) {}, "9IKp": function IKp(t, s) {}, CF4o: function CF4o(t, s) {}, CJS6: function CJS6(t, s) {}, Cjxx: function Cjxx(t, s) {}, NHnr: function NHnr(t, s, i) {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 });var a = i("XwMK"),
        e = { render: function render() {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { attrs: { id: "app" } }, [s("router-view")], 1);
      }, staticRenderFns: [] },
        n = i("/Xao")({ name: "app" }, e, !1, function (t) {
      i("RD++");
    }, null, null).exports,
        o = i("zO6J"),
        c = { render: function render() {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { attrs: { id: "searchNavbar" } }, [s("div", { staticClass: "searchNavbar-top" }, [s("div", { staticClass: "top-left" }, [s("router-link", { attrs: { to: "/" } }, [s("i", { staticClass: "iconfont icon-left-trangle" })])], 1), this._v(" "), this._m(0), this._v(" "), s("div", { staticClass: "top-right" }, [s("i", { staticClass: "iconfont icon-caidan", on: { click: this.changeNavbar } })])]), this._v(" "), s("div", { class: { BottomNone: this.isBottom, BottomBlock: !this.isBottom } }, [s("div", { staticClass: "searchNavbar-bottom" }, [s("router-link", { attrs: { to: "" } }, [s("i", { staticClass: "iconfont icon-zhuye" }), this._v(" "), s("span", {}, [this._v("首页")])]), this._v(" "), s("router-link", { attrs: { to: "" } }, [s("i", { staticClass: "iconfont icon-fenlei" }), this._v(" "), s("span", {}, [this._v("分类")])]), this._v(" "), s("router-link", { attrs: { to: "" } }, [s("i", { staticClass: "iconfont icon-fujin" }), this._v(" "), s("span", {}, [this._v("附近")])]), this._v(" "), s("router-link", { attrs: { to: "" } }, [s("i", { staticClass: "iconfont icon-gouwuche1" }), this._v(" "), s("span", {}, [this._v("购物车")])]), this._v(" "), s("router-link", { attrs: { to: "" } }, [s("i", { staticClass: "iconfont icon-unie64d" }), this._v(" "), s("span", {}, [this._v("我的")])])], 1)])]);
      }, staticRenderFns: [function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "top-center" }, [s("i", { staticClass: "iconfont icon-sousuo" }), this._v(" "), s("form", [s("input", { attrs: { type: "text", placeholder: "新鲜鸡腿" } })])]);
      }] },
        r = i("/Xao")({ name: "searchNavbar", data: function data() {
        return { isBottom: !1 };
      }, methods: { changeNavbar: function changeNavbar() {
          this.isBottom = !this.isBottom;
        } } }, c, !1, function (t) {
      i("RK+I");
    }, "data-v-7c2fc31c", null).exports,
        l = i("2sCs"),
        v = i.n(l),
        d = { components: { SearchNavbar: r }, name: "classify", data: function data() {
        return { leftLists: [], rightLists: [], goodsList: [], num: 0, isDefaultGoods: !0, isPrice: !1, isSell: !1, isSaixuan: !1, isupPrice: !1, isdownPrice: !1 };
      }, created: function created() {
        this._getclassifyLeft(), this._getclassifyRight();
      }, methods: { _getclassifyLeft: function _getclassifyLeft() {
          var t = this;v.a.get("/api/leftLists").then(function (s) {
            t.leftLists = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        }, _getclassifyRight: function _getclassifyRight() {
          var t = this;v.a.get("/api/rightLists").then(function (s) {
            t.rightLists = s.data, t.rightLists.forEach(function (s, i, a) {
              t.goodsList.push(a[i].goodsImg);
            });
          }).catch(function (t) {
            console.log(t);
          });
        }, tab: function tab(t) {
          this.num = t;
        }, yiyuan: function yiyuan() {
          alert("一元");
        }, yibai: function yibai() {
          alert("一百元");
        }, liangbai: function liangbai() {
          alert("两百元");
        }, sanbai: function sanbai() {
          alert("三百元");
        }, sibai: function sibai() {
          alert("四百元");
        }, defaultGoods: function defaultGoods(t) {
          this.goodsList[t].sort(function (t, s) {
            return t.price - s.price;
          }), this.isDefaultGoods = !0, this.isPrice = !1, this.isSell = !1, this.isSaixuan = !1, this.isdownPrice = !1, this.isupPrice = !1;
        }, price: function price(t) {
          this.isDefaultGoods = !1, this.isPrice = !0, this.isSell = !1, this.isSaixuan = !1, this.isdownPrice = !0, this.isupPrice = !1, this.goodsList[t].sort(function (t, s) {
            return s.price - t.price;
          });
        }, salesVolume: function salesVolume(t) {
          this.isDefaultGoods = !1, this.isPrice = !1, this.isSell = !0, this.isSaixuan = !1, this.isdownPrice = !1, this.isupPrice = !1, this.goodsList[t].sort(function (t, s) {
            return s.number - t.number;
          });
        }, screen: function screen(t) {
          alert("hiehi");
        } } },
        h = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { attrs: { id: "classify" } }, [i("search-navbar"), t._v(" "), i("main", { staticClass: "classify" }, [i("section", { staticClass: "classify-left" }, [i("div", { staticClass: "left-sxclassifys" }, [t._v("\n        生鲜分类\n      ")]), t._v(" "), i("div", { staticClass: "left-lists" }, t._l(t.leftLists, function (s, a) {
          return i("div", [i("div", { class: { active: a === t.num }, on: { click: function click(s) {
                t.tab(a);
              } } }, [i("i", { class: s.icon }), t._v(" "), i("span", [t._v(t._s(s.text))])])]);
        }))]), t._v(" "), i("section", { staticClass: "classify-right" }, t._l(t.rightLists, function (s, a) {
          return i("div", { directives: [{ name: "show", rawName: "v-show", value: a == t.num, expression: " index == num" }] }, [i("div", { staticClass: "classify-right-top" }, [i("div", { staticClass: "goodsImg" }, [i("img", { attrs: { src: s.img } })]), t._v(" "), i("div", { staticClass: "goodsSort" }, [i("div", { class: { divActive: t.isDefaultGoods }, on: { click: function click(s) {
                t.defaultGoods(a);
              } } }, [t._v("默认\n            ")]), t._v(" "), i("div", { on: { click: function click(s) {
                t.price(a);
              } } }, [i("div", { class: { divActive: t.isPrice } }, [i("span", [t._v("价格")])]), t._v(" "), i("div", {}, [i("div", { class: { divActive: t.isupPrice } }, [i("i", { staticClass: "iconfont icon-sanjiao2" })]), t._v(" "), i("div", { class: { divActive: t.isdownPrice } }, [i("i", { staticClass: "iconfont icon-sanjiao1" })])])]), t._v(" "), i("div", { class: { divActive: t.isSell }, on: { click: function click(s) {
                t.salesVolume(a);
              } } }, [t._v("销量\n            ")]), t._v(" "), i("div", { class: { divActive: t.isSaixuan }, on: { click: function click(s) {
                t.screen(a);
              } } }, [t._v("筛选\n            ")])])]), t._v(" "), i("div", { staticClass: "classify-right-bottom" }, t._l(t.goodsList, function (s, a) {
            return i("div", { directives: [{ name: "show", rawName: "v-show", value: a == t.num, expression: " index == num" }] }, t._l(t.goodsList[t.num], function (s) {
              return i("div", { staticClass: "classify-right-bottom-template" }, [i("img", { staticClass: "template-img", attrs: { src: s.img } }), t._v(" "), i("p", { staticClass: "template-title" }, [t._v(t._s(s.title))]), t._v(" "), i("p", { staticClass: "template-price" }, [t._v("￥" + t._s(s.price) + "元")]), t._v(" "), i("p", { staticClass: "template-number" }, [t._v("月销：" + t._s(s.number))])]);
            }));
          }))]);
        }))])], 1);
      }, staticRenderFns: [] },
        u = i("/Xao")(d, h, !1, function (t) {
      i("9IKp");
    }, "data-v-c89dece2", null).exports,
        p = { name: "details", methods: {}, components: { SearchNavbar: r } },
        f = { render: function render() {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { attrs: { id: "details" } }, [s("search-navbar")], 1);
      }, staticRenderFns: [] },
        _ = i("/Xao")(p, f, !1, function (t) {
      i("PC1s");
    }, "data-v-1f6f05fd", null).exports,
        m = { render: function render() {
        var t = this.$createElement,
            s = this._self._c || t;return s("header", { attrs: { id: "navherder" } }, [s("div", { staticClass: "navherder", class: { dowmAppShow: this.isdowmAppShow, dowmAppHide: !this.isdowmAppShow } }, [s("div", { staticClass: " down-app" }, [s("div", { staticClass: "clearfix down-app-left" }, [s("div", { staticClass: "colse-app" }, [s("i", { staticClass: "iconfont icon-guanbi", on: { click: this.closeApp } })]), this._v(" "), s("div", { staticClass: "yclogo" }), this._v(" "), s("div", { staticClass: "newMan" }, [s("router-link", { staticClass: "open-app", attrs: { to: "" } }, [this._v("打开亿成APP购物")]), this._v(" "), s("router-link", { staticClass: "newuser", attrs: { to: "" } }, [this._v("新人领188元红包")])], 1)]), this._v(" "), s("div", { staticClass: "clearfix down-app-rgiht" }, [s("router-link", { attrs: { to: "" } }, [this._v("立即打开")])], 1)])])]);
      }, staticRenderFns: [] },
        g = i("/Xao")({ name: "navheader", data: function data() {
        return { isdowmAppShow: !0 };
      }, methods: { closeApp: function closeApp() {
          this.isdowmAppShow = !this.isdowmAppShow;
        } }, components: {} }, m, !1, function (t) {
      i("CJS6");
    }, "data-v-6cc74b2c", null).exports,
        C = i("41jX"),
        A = i.n(C);i("aEDl");var w = { name: "goodsDetails", components: { SearchNavbar: r, Navheader: g, swiper: C.swiper, swiperSlide: C.swiperSlide }, data: function data() {
        return { goodsDetailsTop: [{ text: "商品" }, { text: "详情" }, { text: "评论" }], goodsDetailsCenter: [{}, {}, {}], goodsInfoGeTop: [{ text: "商品介绍" }, { text: "规格参数" }, { text: "包装售货" }], goodsInfoGeBottom: [{}, {}, {}], num: 0, num1: 0, goodsInfo: [], smallImg: [], bigImg: [], productImg: [], details: [], showBottom: [], swiperOption: { direction: "horizontal", loop: !0, pagination: ".swiper-pagination", prevButton: ".swiper-button-prev", nextButton: ".swiper-button-next", autoplay: 3e3, autoplayDisableOnInteraction: !1 } };
      }, computed: { swiper: function swiper() {
          return this.$refs.mySwiper.swiper;
        } }, created: function created() {
        this._getGoodsDetails();
      }, methods: { _getGoodsDetails: function _getGoodsDetails() {
          var t = this;v.a.get("/api/goodsDetails").then(function (s) {
            t.goodsInfo = s.data[0].goodsInfo, t.smallImg = s.data[0].smallImg, t.bigImg = s.data[0].bigImg, t.productImg = s.data[0].productImg, t.details = s.data[0].details, t.showBottom = s.data[0].showBottom, console.log(t.smallImg);
          }).catch(function (t) {
            console.log(t);
          });
        }, tab: function tab(t) {
          this.num = t;
        }, tab1: function tab1(t) {
          this.num1 = t;
        }, collection: function collection() {
          "iconfont icon-heart" === this.$refs.Collection.className ? this.$refs.Collection.className = "iconfont icon-heart red" : "iconfont icon-heart red" === this.$refs.Collection.className && (this.$refs.Collection.className = "iconfont icon-heart ");
        }, addCart: function addCart() {
          alert("加入购物车");
        }, nowBuy: function nowBuy() {
          alert("hh");
        } } },
        b = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { attrs: { id: "goodsDetails" } }, [i("navheader"), t._v(" "), i("search-navbar"), t._v(" "), i("div", { staticClass: "goodsDetails-top" }, t._l(t.goodsDetailsTop, function (s, a) {
          return i("div", {}, [i("div", { class: { topBottom: a === t.num }, on: { click: function click(s) {
                t.tab(a);
              } } }, [t._v("\n        " + t._s(s.text) + "\n      ")])]);
        })), t._v(" "), i("div", { staticClass: "goodsDetails-center" }, t._l(t.goodsDetailsCenter, function (s, a) {
          return i("div", { staticClass: "goodsInfo" }, [i("div", { directives: [{ name: "show", rawName: "v-show", value: 0 == a && a == t.num, expression: "index==0&&index==num" }], staticClass: "goodsInfo-img" }, [i("div", { staticClass: "goodsInfo-img-top" }, [i("div", { staticClass: "top-img" }, [i("swiper", { ref: "mySwiper", refInFor: !0, attrs: { options: t.swiperOption } }, [t._l(t.smallImg, function (t) {
            return i("swiper-slide", { key: t.id }, [i("img", { attrs: { src: t.simg } })]);
          }), t._v(" "), i("div", { staticClass: "swiper-pagination", attrs: { slot: "pagination" }, slot: "pagination" }), t._v(" "), i("div", { staticClass: "swiper-scrollbar", attrs: { slot: "scrollbar" }, slot: "scrollbar" })], 2)], 1)]), t._v(" "), t._l(t.goodsInfo, function (s) {
            return i("div", { staticClass: "goodsInfo-img-center" }, [i("div", { staticClass: "center-title" }, [i("span", { staticClass: "title-text" }, [t._v(t._s(s.title))])]), t._v(" "), i("div", { staticClass: "center-price" }, [i("span", [t._v("亿成价")]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", { staticStyle: { color: "firebrick", "font-size": "22px" } }, [t._v("￥" + t._s(s.price))]), t._v(" "), i("span", [t._v("元")])]), t._v(" "), i("div", { staticClass: "center-gg" }, [i("span", [t._v("规格：")]), i("span", [t._v(t._s(s.gg))])]), t._v(" "), t._m(0, !0)]);
          })], 2), t._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: 1 == a && a == t.num, expression: "index==1&&index==num" }], staticClass: "goodsInfo-ge" }, [i("div", { staticClass: "goodsInfo-ge-top" }, t._l(t.goodsInfoGeTop, function (s, a) {
            return i("div", { class: { fontColor: a === t.num1 }, on: { click: function click(s) {
                  t.tab1(a);
                } } }, [t._v("\n            " + t._s(s.text) + "\n          ")]);
          })), t._v(" "), t._l(t.goodsInfoGeBottom, function (s, a) {
            return i("div", { staticClass: "goodsInfo-ge-bottom" }, [i("div", { directives: [{ name: "show", rawName: "v-show", value: 0 == a && a == t.num1, expression: "index==0&&index==num1" }], staticClass: "ge-bottom-one" }, t._l(t.productImg, function (t, s) {
              return i("div", { staticClass: "ge-bottom-img" }, [i("img", { attrs: { src: t.pimg, alt: "" } })]);
            })), t._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: 1 == a && a == t.num1, expression: "index==1&&index==num1" }], staticClass: "ge-bottom-two" }, t._l(t.details, function (s, a) {
              return i("div", { staticClass: "ge-bottom-two-tr" }, [i("div", {}, [i("span", [t._v("品牌")]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", [t._v(t._s(s.pp))])]), t._v(" "), i("div", {}, [i("span", [t._v("保质期")]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", [t._v(t._s(s.bzq))])]), t._v(" "), i("div", {}, [i("span", [t._v("净含量")]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", [t._v(t._s(s.jhl))])]), t._v(" "), i("div", {}, [i("span", [t._v("储存条件")]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", [t._v(t._s(s.tj))])])]);
            })), t._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: 2 == a && a == t.num1, expression: "index==2&&index==num1" }], staticClass: "ge-bottom-three" }, [t._m(1, !0), t._v(" "), t._m(2, !0), t._v(" "), t._m(3, !0)])]);
          })], 2), t._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: 2 == a && a == t.num, expression: "index==2&&index==num" }], staticClass: "goodsInfo-pl" }, [t._v("\n        2\n      ")])]);
        })), t._v(" "), i("div", { staticClass: "goodsDetails-bottom" }, [i("div", { staticClass: "bottom-kf" }, [i("i", { staticClass: "iconfont icon-kefu" }, [t._v("客服")]), t._v(" "), i("i", { ref: "Collection", staticClass: "iconfont icon-heart", on: { click: t.collection } }, [t._v("收藏")])]), t._v(" "), i("div", { staticClass: "bottom-addCart", on: { click: t.addCart } }, [t._v("\n      加入购物车\n    ")]), t._v(" "), i("div", { staticClass: "bottom-NowBuy", on: { click: t.nowBuy } }, [t._v("\n      立即购买\n    ")])])], 1);
      }, staticRenderFns: [function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "center-address" }, [s("span", [this._v("送至:")]), this._v("\n             "), s("span", [this._v("山东")]), this._v("\n             "), s("span", [this._v("济宁")]), this._v("\n             "), s("i", { staticClass: "iconfont icon-dizhi" })]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", {}, [s("p", {}, [this._v("包装清单")]), this._v(" "), s("div", {}, [this._v("面包蟹原厂包装（漏气断脚为正常现象）、+食品专用控温冰袋1-2个+高密度食品专用保温泡沫箱1个+三层瓦楞纸箱（有效对抗暴力运输）+顺丰空运、使命必达（京津冀次日达）。")])]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", {}, [s("p", {}, [this._v("售后服务")]), this._v(" "), s("div", {}, [this._v("1、生鲜“优鲜赔”绿色通道"), s("br"), this._v("\n                生鲜自营商品的破损或腐坏等问题，请在商品签收后48小时内提交“优鲜赔”申请，100分钟内审核通过后即享补偿，无需返回商品；非鲜活易腐类商品需上门取件。"), s("br"), this._v("\n                2、专业生鲜客服团队—让您售后无忧"), s("br"), this._v("\n                微信在线客服：YC-fresh"), s("br"), this._v("\n                亿成生鲜客服电话：400-626-3311"), s("br"), this._v("\n                服务时间：09:00-24:00"), s("br"), this._v("\n                生鲜商品售后政策"), s("br"), this._v("\n                注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，京东生鲜不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若亿成生鲜没有及时更新，请大家谅解！"), s("br")])]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", {}, [s("p", {}, [this._v("价格说明")]), this._v(" "), s("div", {}, [this._v("1、亿成价：亿成价为商品的销售价，是您最终决定是否购买商品的依据。"), s("br"), this._v("2、划线价：商品展示的划横线价格为参考价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在亿成平台上曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。"), s("br"), this._v("3、折扣：如无特殊说明，折扣指销售商在原价、或划线价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。"), s("br"), this._v("4、异常问题：商品促销信息以商品详情页“促销”栏中的信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。"), s("br")])]);
      }] },
        y = i("/Xao")(w, b, !1, function (t) {
      i("7Jy/");
    }, "data-v-e523768c", null).exports,
        x = { render: function render() {
        var t = this.$createElement,
            s = this._self._c || t;return s("footer", { attrs: { id: "navfooter" } }, [s("router-link", { class: { footerA: this.isfooterA }, attrs: { to: "/" } }, [s("i", { staticClass: "iconfont icon-zhuye" }), this._v(" "), s("span", [this._v("首页")])]), this._v(" "), s("router-link", { attrs: { to: "/Classify" } }, [s("i", { staticClass: "iconfont icon-fenlei" }), this._v(" "), s("span", [this._v("分类")])]), this._v(" "), s("router-link", { attrs: { to: "/Nearby" } }, [s("i", { staticClass: "iconfont icon-fujin" }), this._v(" "), s("span", [this._v("附近")])]), this._v(" "), s("router-link", { attrs: { to: "/ShoppingCart" } }, [s("i", { staticClass: "iconfont icon-gouwuche1" }), this._v(" "), s("span", [this._v("购物车")])]), this._v(" "), s("router-link", { attrs: { to: "/UserInfo" } }, [s("i", { staticClass: "iconfont icon-huiyuan" }), this._v(" "), s("span", [this._v("我的")])])], 1);
      }, staticRenderFns: [] },
        k = i("/Xao")({ name: "navfooter", data: function data() {
        return { isfooterA: !0 };
      }, methods: {}, components: {} }, x, !1, function (t) {
      i("wzzk");
    }, "data-v-2276d2c6", null).exports,
        I = { props: { title: { type: String, default: "正在载入中...." } } },
        z = { render: function render() {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "loading" }, [s("img", { staticStyle: { width: "80px", height: "80px" }, attrs: { src: i("oos2"), alt: "" } }), this._v(" "), s("p", { staticClass: "desc" }, [this._v(this._s(this.title))])]);
      }, staticRenderFns: [] },
        G = i("/Xao")(I, z, !1, function (t) {
      i("2urZ");
    }, "data-v-0cd39075", null).exports;i("aEDl");var B = { name: "index", components: { NavHeader: g, NavFooter: k, swiper: C.swiper, swiperSlide: C.swiperSlide, Loading: G }, data: function data() {
        return { imgs: [], nickName: [], headerLines: [], recommend: [], KStimeList: [], hotSell: [], weekHotSell: [], chujian: [], YCJX: [], jx1: [], jx2: [], jx3: [], isJx1: !1, isJx2: !1, isJx3: !0, bolus: [], chichens: [], cows: [], crad: [], ducks: [], fishs: [], noodles: [], sheeps: [], shrimps: [], pigs: [], seasonings: [], num: 0, swiperOption: { direction: "horizontal", loop: !0, pagination: ".swiper-pagination", prevButton: ".swiper-button-prev", nextButton: ".swiper-button-next", autoplay: 3e3, autoplayDisableOnInteraction: !1 }, swiperOption1: { notNextTick: !0, autoplay: 3e3, loop: !0, autoplayDisableOnInteraction: !1, direction: "horizontal", effect: "coverflow", grabCursor: !0, setWrapperSize: !0, autoHeight: !0, paginationType: "bullets", pagination: ".swiper-pagination", paginationClickable: !0, scrollbar: ".swiper-scrollbar", mousewheelControl: !0, observeParents: !0 }, swiperOption2: { direction: "horizontal", loop: !0, pagination: ".swiper-pagination", prevButton: ".swiper-button-prev", nextButton: ".swiper-button-next", autoplay: 3e3, effect: "cube", slidesPerView: 3, centeredSlides: !0, coverflow: { rotate: 30, stretch: 10, depth: 60, modifier: 2, slideshadows: !0 } } };
      }, computed: { swiper: function swiper() {
          return this.$refs.mySwiper.swiper;
        } }, mounted: function mounted() {
        this.showUp(), this.showSearch(), this.bianse(), this.changeHeaderLine();
      }, created: function created() {
        var t = this;this.$root.Hub.$on("userName", function () {
          t.nickName = "this.nickName", console.log(t.nickName);
        }), setTimeout(function () {
          t._getBanner();
        }, 4e3), this._getheaderLine(), this._getrecommend(), this._getjx(), this._getKsTime(), this._putTimeList(), this._getYCJX(), this._getWeekHotSell(), this._getchujian(), this._getGoodsList();
      }, methods: { _getBanner: function _getBanner() {
          var t = this;v.a.get("/api/banner").then(function (s) {
            t.imgs = s.data;
          });
        }, _getheaderLine: function _getheaderLine() {
          var t = this;v.a.get("/api/headerLine").then(function (s) {
            t.headerLines = s.data;
          });
        }, _getrecommend: function _getrecommend() {
          var t = this;v.a.get("api/recommend").then(function (s) {
            t.recommend = s.data;
          });
        }, _getjx: function _getjx() {
          var t = this;v.a.get("api/jx").then(function (s) {
            t.jx1 = s.data[0].list1, t.jx2 = s.data[1].list2, t.jx3 = s.data[2].list3;
          });
        }, _getKsTime: function _getKsTime() {
          var t = document.getElementsByClassName("num"),
              s = 7200,
              i = setInterval(function () {
            s--;var a = Math.floor(s / 3600),
                e = Math.floor(s / 60 % 60),
                n = s % 60;t[0].innerHTML = a > 10 ? Math.floor(a / 10) : 0, t[1].innerHTML = a % 10, t[2].innerHTML = e > 10 ? Math.floor(e / 10) : 0, t[3].innerHTML = e % 10, t[4].innerHTML = n > 10 ? Math.floor(n / 10) : 0, t[5].innerHTML = n % 10, t <= 0 && clearInterval(i);
          }, 1e3);
        }, _getYCJX: function _getYCJX() {
          var t = this;v.a.get("api/tuijian").then(function (s) {
            t.YCJX = s.data;
          });
        }, _getWeekHotSell: function _getWeekHotSell() {
          var t = this;v.a.get("api/hotSell").then(function (s) {
            t.weekHotSell = s.data;
          });
        }, _getchujian: function _getchujian() {
          var t = this;v.a.get("api/chujian").then(function (s) {
            t.chujian = s.data;
          });
        }, _putTimeList: function _putTimeList() {
          var t = [{ date: "", time: "10:00" }, { date: "", time: "15:00" }, { date: "", time: "20:00" }],
              s = new Date().toLocaleDateString();t.filter(function (t) {
            return "10:00" == t.time;
          })[0].date = s;t.filter(function (t) {
            return "15:00" == t.time;
          })[0].date = s;t.filter(function (t) {
            return "20:00" == t.time;
          })[0].date = s, this.KStimeList = t;
        }, _getGoodsList: function _getGoodsList() {
          var t = this;v.a.get("api/goodsList").then(function (s) {
            t.crad = s.data[0].goodsImg, t.shrimps = s.data[7].goodsImg, t.fishs = s.data[6].goodsImg, t.pigs = s.data[4].goodsImg, t.cows = s.data[3].goodsImg, t.sheeps = s.data[5].goodsImg, t.ducks = s.data[2].goodsImg, t.chichens = s.data[1].goodsImg, t.bolus = s.data[8].goodsImg, t.noodles = s.data[10].goodsImg, t.seasonings = s.data[9].goodsImg;
          });
        }, changeHeaderLine: function changeHeaderLine() {
          this.$refs.headerline;var t = this.$refs.headerlineD,
              s = 0;setInterval(function () {
            3 == ++s && (s = 0);var i = -20 * s;t.style.top = i + "px";
          }, 3e3);
        }, showUp: function showUp() {
          var t = this.$refs.goodGoods.offsetHeight,
              s = this.$refs.upTop;window.addEventListener("scroll", function () {
            var i = window.scrollY;i >= t ? s.style.display = "block" : i < t && (s.style.display = "none");
          });
        }, upToTop: function upToTop() {
          document.body.scrollTop = 0, document.documentElement.scrollTop = 0;
        }, showSearch: function showSearch() {
          var t = this.$refs.suosuo,
              s = this.$refs.suosuo.offsetHeight;window.addEventListener("scroll", function () {
            var i = window.scrollY;i > s ? (t.style.position = "fixed", t.style.maxWidth = "640px", t.style.width = "100%", t.style.top = 0, t.style.zIndex = 999) : i <= s && (t.style.position = "");
          });
        }, bianse: function bianse() {
          var t = this.$refs.suosuo,
              s = this.$refs.banner.offsetHeight;window.addEventListener("scroll", function () {
            var i = window.scrollY;if (i > s) t.style.background = "rgba(240,240,240,1)";else {
              var a = i / s * .85;t.style.background = "rgba(240,240,240," + a + ")";
            }
          });
        }, addCart: function addCart() {
          alert("已经加入购物车");
        }, lookGoods: function lookGoods() {
          alert("查看商品");
        }, intoSearch: function intoSearch() {
          this.$router.push({ path: "/search" });
        }, tab: function tab(t) {
          this.num = t, 0 == this.num ? (this.isJx1 = !0, this.isJx2 = !1, this.isJx3 = !1) : 1 == this.num ? (this.isJx2 = !0, this.isJx1 = !1, this.isJx3 = !1) : 2 == this.num && (this.isJx3 = !0, this.isJx1 = !1, this.isJx2 = !1);
        } } },
        j = { render: function render() {
        var t = this,
            s = t.$createElement,
            a = t._self._c || s;return a("div", { attrs: { id: "index" } }, [a("nav-header"), t._v(" "), a("main", [a("section", { ref: "suosuo", staticClass: "search", attrs: { id: "search" } }, [t._m(0), t._v(" "), t._m(1), t._v(" "), a("div", { staticClass: "sousuo" }, [a("i", { staticClass: "iconfont icon-sousuo" }), t._v(" "), a("form", { attrs: { action: "", method: "get" } }, [a("input", { staticClass: "SearchInput", attrs: { type: "text", placeholder: "新鲜鸡腿" }, on: { click: t.intoSearch } })])]), t._v(" "), t.nickName ? a("span", { domProps: { textContent: t._s(t.nickName) } }) : t._e(), t._v(" "), t.nickName ? a("div", { staticClass: "search-login" }, [a("router-link", { attrs: { to: "/Login" } }, [t._v("退出")])], 1) : t._e(), t._v(" "), t.nickName ? t._e() : a("div", { staticClass: "search-login" }, [a("router-link", { attrs: { to: "/Login" } }, [t._v("登录")])], 1), t._v(" "), a("div", { staticClass: "search-message" }, [a("router-link", { attrs: { to: "" } }, [a("i", { staticClass: "iconfont icon-xiaoxi" })])], 1)]), t._v(" "), a("section", { ref: "banner", staticClass: "YC-banner" }, [a("swiper", { ref: "mySwiper", attrs: { options: t.swiperOption } }, [t._l(t.imgs, function (t) {
          return a("swiper-slide", { key: t.id }, [a("img", { staticClass: "bannerimg", staticStyle: { width: "100%" }, attrs: { src: t.img } })]);
        }), t._v(" "), a("div", { staticClass: "swiper-pagination", attrs: { slot: "pagination" }, slot: "pagination" }), t._v(" "), a("div", { staticClass: "swiper-scrollbar", attrs: { slot: "scrollbar" }, slot: "scrollbar" })], 2)], 1), t._v(" "), a("section", { staticClass: "yc-navbar" }, [a("ul", [a("li", [a("router-link", { attrs: { to: "" } }, [a("i", { staticClass: "iconfont icon-xinpinbiaoqian" }), t._v(" "), a("span", [t._v("新品推荐")])])], 1), t._v(" "), a("li", [a("router-link", { attrs: { to: "" } }, [a("i", { staticClass: "iconfont icon-remai" }), t._v(" "), a("span", [t._v("本周热卖")])])], 1), t._v(" "), a("li", [a("router-link", { attrs: { to: "" } }, [a("i", { staticClass: "iconfont icon-jingxuan" }), t._v(" "), a("span", [t._v("亿成精选")])])], 1), t._v(" "), a("li", [a("router-link", { attrs: { to: "" } }, [a("i", { staticClass: "iconfont icon-dazhehuodong" }), t._v(" "), a("span", [t._v("打折生鲜")])])], 1), t._v(" "), a("li", [a("router-link", { attrs: { to: "" } }, [a("i", { staticClass: "iconfont icon-miaosha1" }), t._v(" "), a("span", [t._v("限时秒杀")])])], 1)]), t._v(" "), a("ul", [a("li", [a("router-link", { attrs: { to: "" } }, [a("i", { staticClass: "iconfont icon-mianfeishichi" }), t._v(" "), a("span", [t._v("免费试吃")])])], 1), t._v(" "), a("li", [a("router-link", { attrs: { to: "" } }, [a("i", { staticClass: "iconfont icon-lingquyouhuiquan" }), t._v(" "), a("span", [t._v("领优惠券")])])], 1), t._v(" "), a("li", [a("router-link", { attrs: { to: "" } }, [a("i", { staticClass: "iconfont icon-order" }), t._v(" "), a("span", [t._v("查看订单")])])], 1), t._v(" "), a("li", [a("router-link", { attrs: { to: "" } }, [a("i", { staticClass: "iconfont icon-wuliu" }), t._v(" "), a("span", [t._v("物流信息")])])], 1), t._v(" "), a("li", [a("router-link", { attrs: { to: "" } }, [a("i", { staticClass: "iconfont icon-kefu1" }), t._v(" "), a("span", [t._v("联系客服")])])], 1)])]), t._v(" "), a("section", [a("div", { ref: "headerline", staticClass: "yc-headline" }, [a("div", { ref: "headerlineD", staticClass: "yc-headline-box" }, t._l(t.headerLines, function (s, i) {
          return a("div", { staticClass: "yc-headline-div" }, [a("span", [t._v("生鲜头条:")]), t._v(" "), a("router-link", { staticClass: "yc-headline-firsta", attrs: { to: "" } }, [t._v("\n              " + t._s(s.text) + "\n            ")])], 1);
        }))])]), t._v(" "), a("section", { staticClass: "recommend" }, [a("swiper", { ref: "mySwiper", attrs: { options: t.swiperOption1 } }, [t._l(t.recommend, function (t) {
          return a("swiper-slide", { key: t.id }, [a("img", { staticClass: "bannerimg", staticStyle: { width: "100%" }, attrs: { src: t.img } })]);
        }), t._v(" "), a("div", { staticClass: "swiper-pagination", attrs: { slot: "pagination" }, slot: "pagination" }), t._v(" "), a("div", { staticClass: "swiper-scrollbar", attrs: { slot: "scrollbar" }, slot: "scrollbar" })], 2)], 1), t._v(" "), a("section", { staticClass: "yc-kellsecond" }, [a("p", { staticClass: "yc-kellsecond-title" }, [t._v("亿成限时秒杀")]), t._v(" "), a("div", { staticClass: " yc-kellsecond-time", attrs: { id: "kstimes" } }, t._l(t.KStimeList, function (s, i) {
          return a("div", { attrs: { id: "time-div" } }, [a("div", { class: { active: i === t.num }, on: { click: function click(s) {
                t.tab(i);
              } } }, [a("p", { ref: "pspantime1", refInFor: !0, staticClass: "pspantime" }, [t._v(t._s(s.date))]), t._v(" "), a("p", { staticClass: "jidian" }, [t._v(t._s(s.time))])])]);
        })), t._v(" "), t._m(2), t._v(" "), a("div", { attrs: { id: "ks" } }, [a("div", { staticClass: "yc-kellsecond-goods-list" }, [t._l(t.jx1, function (s) {
          return a("div", { directives: [{ name: "show", rawName: "v-show", value: t.isJx1, expression: "isJx1" }], staticClass: "yc-kellsecond-goods-list-div" }, [a("router-link", { attrs: { to: s.url } }, [a("img", { attrs: { src: s.img, width: "100", height: "100" } }), t._v(" "), a("span", { staticClass: "yc-kellsecond-link-name" }, [t._v(t._s(s.title))]), t._v(" "), a("span", { staticClass: "yc-kellsecond-link-pirce" }, [t._v("￥" + t._s(s.price))]), t._v(" "), a("span", { staticClass: "yc-kellsecond-link-buy" }, [t._v("立即购买")])])], 1);
        }), t._v(" "), t._l(t.jx2, function (s) {
          return a("div", { directives: [{ name: "show", rawName: "v-show", value: t.isJx2, expression: "isJx2" }], staticClass: "yc-kellsecond-goods-list-div" }, [a("router-link", { attrs: { to: s.url } }, [a("img", { attrs: { src: s.img, width: "100", height: "100" } }), t._v(" "), a("span", { staticClass: "yc-kellsecond-link-name" }, [t._v(t._s(s.title))]), t._v(" "), a("span", { staticClass: "yc-kellsecond-link-pirce" }, [t._v("￥" + t._s(s.price))]), t._v(" "), a("span", { staticClass: "yc-kellsecond-link-buy" }, [t._v("立即购买")])])], 1);
        }), t._v(" "), t._l(t.jx3, function (s) {
          return a("div", { directives: [{ name: "show", rawName: "v-show", value: t.isJx3, expression: "isJx3" }], staticClass: "yc-kellsecond-goods-list-div" }, [a("router-link", { attrs: { to: s.url } }, [a("img", { attrs: { src: s.img, width: "100", height: "100" } }), t._v(" "), a("span", { staticClass: "yc-kellsecond-link-name" }, [t._v(t._s(s.title))]), t._v(" "), a("span", { staticClass: "yc-kellsecond-link-pirce" }, [t._v("￥" + t._s(s.price))]), t._v(" "), a("span", { staticClass: "yc-kellsecond-link-buy" }, [t._v("立即购买")])])], 1);
        })], 2)])]), t._v(" "), a("section", { ref: "goodGoods", staticClass: "yc-good-goods" }, [t._m(3), t._v(" "), a("div", { staticClass: "yc-good-goods-center" }, [a("h3"), t._v(" "), a("div", { staticClass: "center-img" }, [a("swiper", { ref: "mySwiper", attrs: { options: t.swiperOption2 } }, [t._l(t.YCJX, function (s) {
          return a("swiper-slide", { key: s.id }, [a("p", { staticClass: "center-ul-li-a-p" }, [a("span", [t._v(t._s(s.price) + "￥")]), t._v(" "), a("span", [t._v("多个")])]), t._v(" "), a("router-link", { attrs: { to: "/Classify" } }, [a("img", { staticClass: "goodsImg", attrs: { src: s.img } }), t._v(" "), a("p", { staticClass: "center-ul-li-a-p-title" }, [t._v(t._s(s.title))]), t._v(" "), a("p", { staticClass: "center-ul-li-a-p-text" }, [t._v("亿成，多，快，好，省")])])], 1);
        }), t._v(" "), a("div", { staticClass: "swiper-pagination", attrs: { slot: "pagination" }, slot: "pagination" }), t._v(" "), a("div", { staticClass: "swiper-scrollbar", attrs: { slot: "scrollbar" }, slot: "scrollbar" }), t._v(" "), a("div", { staticClass: "swiper-button-prev", attrs: { slot: "button-prev" }, slot: "button-prev" }), t._v(" "), a("div", { staticClass: "swiper-button-next", attrs: { slot: "button-next" }, slot: "button-next" })], 2)], 1)]), t._v(" "), a("div", { staticClass: "yc-good-goods-bottom" }, [a("div", { staticClass: "yc-good-goods-bottom-more" }, [a("router-link", { attrs: { to: "" } }, [a("span", [t._v("更多优选精品")]), t._v(" "), a("span", [t._v(" > ")])])], 1), t._v(" "), a("div", { staticClass: "yc-good-goods-bottom-list" }, [a("div", { staticClass: "yc-good-goods-bottom-new" }, [a("h3", [t._v("新品初见")]), t._v(" "), t._l(t.chujian, function (s) {
          return a("router-link", { staticClass: "new-price", attrs: { to: "" } }, [a("div", { staticClass: "chujianImg" }, [a("div", { staticClass: "hot-topone-price" }, [a("span", [t._v("￥" + t._s(s.price))]), t._v(" "), a("span", [t._v(t._s(s.number) + "只")])]), t._v(" "), a("img", { attrs: { src: s.img } })]), t._v(" "), a("p", [t._v(t._s(s.title))]), t._v(" "), a("p", [t._v("每周三上新货")])]);
        })], 2), t._v(" "), a("div", { staticClass: "yc-good-goods-bottom-hot" }, [a("h3", [t._v("本周热卖")]), t._v(" "), t._l(t.weekHotSell, function (s) {
          return a("router-link", { staticClass: "hot-topone", attrs: { to: "" } }, [a("div", { staticClass: "chujianImg" }, [a("div", { staticClass: "hot-topone-price" }, [a("span", [t._v("￥" + t._s(s.price))]), t._v(" "), a("span", [t._v(t._s(s.number) + "只")])]), t._v(" "), a("img", { attrs: { src: s.img, alt: "" } })]), t._v(" "), a("div", { staticClass: "hot-topone-goods" }, [a("span", [t._v(t._s(s.title))]), a("br"), t._v(" "), a("span", [t._v("本周销量第一")])])]);
        })], 2)])])]), t._v(" "), a("section", { staticClass: "yc-goodsList" }, [a("h3", [t._v("亿成生鲜产品特色推荐")]), t._v(" "), a("div", { staticClass: "clearfix yc-goodsList-classify" }, [a("h4", [t._v("蟹产品")]), t._v(" "), t._l(t.crad, function (s, i) {
          return a("div", { staticClass: "goodslist" }, [a("div", { staticClass: "clearfix goodslistOne" }, [a("img", { directives: [{ name: "lazy", rawName: "v-lazy", value: s.img, expression: "item.img" }], attrs: { width: "100%" }, on: { click: t.lookGoods } }), t._v(" "), a("p", { staticClass: "goods-title" }, [t._v(t._s(s.title))]), t._v(" "), a("div", { staticClass: "addCart" }, [a("p", [t._v(t._s(s.price) + "￥")]), t._v(" "), a("p", { on: { click: t.addCart } }, [t._v("加入购物车")])])])]);
        })], 2), t._v(" "), a("div", { staticClass: "clearfix yc-goodsList-classify" }, [a("h4", [t._v("虾产品")]), t._v(" "), t._l(t.shrimps, function (s, i) {
          return a("div", { staticClass: "goodslist" }, [a("div", { staticClass: "clearfix goodslistOne" }, [a("img", { directives: [{ name: "lazy", rawName: "v-lazy", value: s.img, expression: "item.img" }], attrs: { width: "100%" }, on: { click: t.lookGoods } }), t._v(" "), a("p", { staticClass: "goods-title" }, [t._v(t._s(s.title))]), t._v(" "), a("div", { staticClass: "addCart" }, [a("p", [t._v(t._s(s.price) + "￥")]), t._v(" "), a("p", { on: { click: t.addCart } }, [t._v("加入购物车")])])])]);
        })], 2), t._v(" "), a("div", { staticClass: "clearfix yc-goodsList-classify" }, [a("h4", [t._v("鱼产品")]), t._v(" "), t._l(t.fishs, function (s, i) {
          return a("div", { staticClass: "goodslist" }, [a("div", { staticClass: "clearfix goodslistOne" }, [a("img", { directives: [{ name: "lazy", rawName: "v-lazy", value: s.img, expression: "item.img" }], attrs: { width: "100%" }, on: { click: t.lookGoods } }), t._v(" "), a("p", { staticClass: "goods-title" }, [t._v(t._s(s.title))]), t._v(" "), a("div", { staticClass: "addCart" }, [a("p", [t._v(t._s(s.price) + "￥")]), t._v(" "), a("p", { on: { click: t.addCart } }, [t._v("加入购物车")])])])]);
        })], 2), t._v(" "), a("div", { staticClass: "clearfix yc-goodsList-classify" }, [a("h4", [t._v("牛产品")]), t._v(" "), t._l(t.cows, function (s, i) {
          return a("div", { staticClass: "goodslist" }, [a("div", { staticClass: "clearfix goodslistOne" }, [a("img", { directives: [{ name: "lazy", rawName: "v-lazy", value: s.img, expression: "item.img" }], attrs: { width: "100%" }, on: { click: t.lookGoods } }), t._v(" "), a("p", { staticClass: "goods-title" }, [t._v(t._s(s.title))]), t._v(" "), a("div", { staticClass: "addCart" }, [a("p", [t._v(t._s(s.price) + "￥")]), t._v(" "), a("p", { on: { click: t.addCart } }, [t._v("加入购物车")])])])]);
        })], 2), t._v(" "), a("div", { staticClass: "clearfix yc-goodsList-classify" }, [a("h4", [t._v("猪产品")]), t._v(" "), t._l(t.pigs, function (s, i) {
          return a("div", { staticClass: "goodslist" }, [a("div", { staticClass: "clearfix goodslistOne" }, [a("img", { directives: [{ name: "lazy", rawName: "v-lazy", value: s.img, expression: "item.img" }], attrs: { width: "100%" }, on: { click: t.lookGoods } }), t._v(" "), a("p", { staticClass: "goods-title" }, [t._v(t._s(s.title))]), t._v(" "), a("div", { staticClass: "addCart" }, [a("p", [t._v(t._s(s.price) + "￥")]), t._v(" "), a("p", { on: { click: t.addCart } }, [t._v("加入购物车")])])])]);
        })], 2), t._v(" "), a("div", { staticClass: "clearfix yc-goodsList-classify" }, [a("h4", [t._v(" 羊产品")]), t._v(" "), t._l(t.sheeps, function (s, i) {
          return a("div", { staticClass: "goodslist" }, [a("div", { staticClass: "clearfix goodslistOne" }, [a("img", { directives: [{ name: "lazy", rawName: "v-lazy", value: s.img, expression: "item.img" }], attrs: { width: "100%" }, on: { click: t.lookGoods } }), t._v(" "), a("p", { staticClass: "goods-title" }, [t._v(t._s(s.title))]), t._v(" "), a("div", { staticClass: "addCart" }, [a("p", [t._v(t._s(s.price) + "￥")]), t._v(" "), a("p", { on: { click: t.addCart } }, [t._v("加入购物车")])])])]);
        })], 2), t._v(" "), a("div", { staticClass: "clearfix yc-goodsList-classify" }, [a("h4", [t._v("鸡产品")]), t._v(" "), t._l(t.chichens, function (s, i) {
          return a("div", { staticClass: "goodslist" }, [a("div", { staticClass: "clearfix goodslistOne" }, [a("img", { directives: [{ name: "lazy", rawName: "v-lazy", value: s.img, expression: "item.img" }], attrs: { width: "100%" }, on: { click: t.lookGoods } }), t._v(" "), a("p", { staticClass: "goods-title" }, [t._v(t._s(s.title))]), t._v(" "), a("div", { staticClass: "addCart" }, [a("p", [t._v(t._s(s.price) + "￥")]), t._v(" "), a("p", { on: { click: t.addCart } }, [t._v("加入购物车")])])])]);
        })], 2), t._v(" "), a("div", { staticClass: "clearfix yc-goodsList-classify" }, [a("h4", [t._v("鸭产品")]), t._v(" "), t._l(t.ducks, function (s, i) {
          return a("div", { staticClass: "goodslist" }, [a("div", { staticClass: "clearfix goodslistOne" }, [a("img", { directives: [{ name: "lazy", rawName: "v-lazy", value: s.img, expression: "item.img" }], attrs: { width: "100%" }, on: { click: t.lookGoods } }), t._v(" "), a("p", { staticClass: "goods-title" }, [t._v(t._s(s.title))]), t._v(" "), a("div", { staticClass: "addCart" }, [a("p", [t._v(t._s(s.price) + "￥")]), t._v(" "), a("p", { on: { click: t.addCart } }, [t._v("加入购物车")])])])]);
        })], 2), t._v(" "), a("div", { staticClass: "clearfix yc-goodsList-classify" }, [a("h4", [t._v(" 面点产品")]), t._v(" "), t._l(t.noodles, function (s, i) {
          return a("div", { staticClass: "goodslist" }, [a("div", { staticClass: "clearfix goodslistOne" }, [a("img", { directives: [{ name: "lazy", rawName: "v-lazy", value: s.img, expression: "item.img" }], attrs: { width: "100%" }, on: { click: t.lookGoods } }), t._v(" "), a("p", { staticClass: "goods-title" }, [t._v(t._s(s.title))]), t._v(" "), a("div", { staticClass: "addCart" }, [a("p", [t._v(t._s(s.price) + "￥")]), t._v(" "), a("p", { on: { click: t.addCart } }, [t._v("加入购物车")])])])]);
        })], 2), t._v(" "), a("div", { staticClass: "clearfix yc-goodsList-classify" }, [a("h4", [t._v("火锅丸产品")]), t._v(" "), t._l(t.bolus, function (s, i) {
          return a("div", { staticClass: "goodslist" }, [a("div", { staticClass: "clearfix goodslistOne" }, [a("img", { directives: [{ name: "lazy", rawName: "v-lazy", value: s.img, expression: "item.img" }], attrs: { width: "100%" }, on: { click: t.lookGoods } }), t._v(" "), a("p", { staticClass: "goods-title" }, [t._v(t._s(s.title))]), t._v(" "), a("div", { staticClass: "addCart" }, [a("p", [t._v(t._s(s.price) + "￥")]), t._v(" "), a("p", { on: { click: t.addCart } }, [t._v("加入购物车")])])])]);
        })], 2), t._v(" "), a("div", { staticClass: "clearfix yc-goodsList-classify" }, [a("h4", [t._v(" 调味品产品")]), t._v(" "), t._l(t.seasonings, function (s, i) {
          return a("div", { staticClass: "goodslist" }, [a("div", { staticClass: "clearfix goodslistOne" }, [a("img", { directives: [{ name: "lazy", rawName: "v-lazy", value: s.img, expression: "item.img" }], attrs: { width: "100%" }, on: { click: t.lookGoods } }), t._v(" "), a("p", { staticClass: "goods-title" }, [t._v(t._s(s.title))]), t._v(" "), a("div", { staticClass: "addCart" }, [a("p", [t._v(t._s(s.price) + "￥")]), t._v(" "), a("p", { on: { click: t.addCart } }, [t._v("加入购物车")])])])]);
        })], 2)]), t._v(" "), a("section", { staticClass: "yc-bottom" }, [t._m(4), t._v(" "), t._m(5), t._v(" "), a("div", { staticClass: "end" }, [a("img", { attrs: { src: i("Yh7j") } }), t._v(" "), a("router-link", { attrs: { to: "" } }, [t._v("查看更多")])], 1)])]), t._v(" "), a("div", { ref: "upTop", staticClass: "upTop", on: { click: t.upToTop } }, [a("i", { staticClass: "iconfont icon-xiangshang" })]), t._v(" "), a("div", { directives: [{ name: "show", rawName: "v-show", value: !t.imgs.length, expression: "!imgs.length" }], staticClass: "loading-container" }, [a("loading")], 1), t._v(" "), a("nav-footer")], 1);
      }, staticRenderFns: [function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "search-saoyisao" }, [s("i", { staticClass: "iconfont icon-saoyisaoerweimasaomasaomiao" }), this._v(" "), s("span", { staticClass: "saoyisao-test" }, [this._v("扫一扫")])]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "search-logo" }, [s("span", {}, [this._v("YC")])]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "yc-kellsecond-test" }, [s("div", [s("span", [this._v("正在抢购，先下单先得哦")])]), this._v(" "), s("div", { staticClass: "yc-kellsecond-timeend" }, [s("span", [this._v("距结束:")]), this._v(" "), s("span", { staticClass: "num" }, [this._v("0")]), this._v(" "), s("span", { staticClass: "num" }, [this._v("0")]), this._v(" "), s("span", { staticClass: "str" }, [this._v(":")]), this._v(" "), s("span", { staticClass: "num" }, [this._v("0")]), this._v(" "), s("span", { staticClass: "num" }, [this._v("0")]), this._v(" "), s("span", { staticClass: "str" }, [this._v(":")]), this._v(" "), s("span", { staticClass: "num" }, [this._v("0")]), this._v(" "), s("span", { staticClass: "num" }, [this._v("0")])])]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "yc-good-goods-top" }, [s("h2", [this._v("精选好货")]), this._v(" "), s("p", [this._v("SELECTED")])]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "yc-bottom-top" }, [s("div", { staticClass: "yc-bottom-top-center" }, [s("div", {}, [s("span", [this._v("/精挑细选的/")])]), this._v(" "), s("div", {}), this._v(" "), s("div", {}, [s("span", [this._v("/分健康美味/")])])])]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "yc-bottom-center" }, [s("div", [s("div", {}, [s("i", { staticClass: "iconfont icon-yudashuye" })]), this._v(" "), s("div", {}, [s("span", [this._v("精挑")]), this._v(" "), s("span", [this._v("细选")])])]), this._v(" "), s("div", [s("div", {}, [s("i", { staticClass: "iconfont icon-cailanzi-" })]), this._v(" "), s("div", {}, [s("span", [this._v("产地")]), this._v(" "), s("span", [this._v("直销")])])]), this._v(" "), s("div", [s("div", {}, [s("i", { staticClass: "iconfont icon-shipinanquanicon" })]), this._v(" "), s("div", {}, [s("span", [this._v("严格")]), this._v(" "), s("span", [this._v("质检")])])]), this._v(" "), s("div", [s("div", {}, [s("i", { staticClass: "iconfont icon-quanchenglenglian " })]), this._v(" "), s("div", {}, [s("span", [this._v("全程")]), this._v(" "), s("span", [this._v("冷链")])])]), this._v(" "), s("div", [s("div", {}, [s("i", { staticClass: "iconfont icon-shouhou" })]), this._v(" "), s("div", {}, [s("span", [this._v("售后")]), this._v(" "), s("span", [this._v("无忧")])])])]);
      }] },
        N = i("/Xao")(B, j, !1, function (t) {
      i("jNQ+");
    }, "data-v-8b66b092", null).exports,
        L = { name: "login", data: function data() {
        return { ismlogin: !1, ismnlogin: !0, isuserlogin: !0, isdxlogin: !1 };
      }, methods: { backHome: function backHome() {
          this.$router.push({ path: "/" });
        }, mLogin: function mLogin() {
          this.ismlogin = !1, this.ismnlogin = !0, this.isuserlogin = !0, this.isdxlogin = !1;
        }, mNLogin: function mNLogin() {
          this.ismlogin = !0, this.ismnlogin = !1, this.isuserlogin = !1, this.isdxlogin = !0;
        }, login: function login() {
          var t = this;v.a.post("/api/userlogin", { username: this.$refs.username.value, password: this.$refs.password.value }).then(function (s) {
            "1" == s.data.status ? (t.nickName = s.data.result, t.$root.Hub.$emit("userName", "this.nickName"), alert("登录成功")) : 2 == s.data ? alert("该用户没有注册") : -1 == s.data && alert(" 密码错误");
          }).catch(function (t) {
            console.log(t);
          });
        }, gotoregister: function gotoregister() {
          this.$router.push({ path: "/Register" });
        } }, components: {} },
        D = { render: function render() {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { attrs: { id: "login" } }, [s("header", { staticClass: "login-header" }, [s("i", { staticClass: "iconfont icon-left-trangle", on: { click: this.backHome } }), this._v(" "), s("h3", [this._v("亿成用户登录")])]), this._v(" "), s("main", { staticClass: "login-main" }, [s("section", { staticClass: "changelogin" }, [s("div", { staticClass: "changelogin-left", on: { click: this.mLogin } }, [s("div", { class: { userlogin: this.isuserlogin } }, [this._v("账户密码登录")])]), this._v(" "), s("div", { staticClass: "changelogin-right", on: { click: this.mNLogin } }, [s("div", { class: { dxlogin: this.isdxlogin } }, [this._v("短信验证码登录")])])]), this._v(" "), s("section", { class: { mlgon: this.ismlogin } }, [s("div", { staticClass: "loginInput" }, [s("div", { staticClass: "login-userName" }, [s("div", {}, [this._v("账号")]), this._v(" "), s("div", {}, [s("input", { ref: "username", attrs: { type: "text", placeholder: "用户名/邮箱/已验证手机" } })]), this._v(" "), this._m(0)]), this._v(" "), s("div", { staticClass: "login-password" }, [s("div", {}, [this._v("密码")]), this._v(" "), s("div", {}, [s("input", { ref: "password", attrs: { type: "password", placeholder: "请输入密码" } })]), this._v(" "), this._m(1)])])]), this._v(" "), s("section", { class: { mnlgon: this.ismnlogin } }, [this._m(2)]), this._v(" "), s("section", { staticClass: "registerBtn" }, [s("div", { on: { click: this.login } }, [s("span", [this._v("登录")])]), this._v(" "), this._m(3)]), this._v(" "), s("section", { staticClass: "clearfix speedRegiter" }, [this._m(4), this._v(" "), s("div", [s("i", { staticClass: "iconfont icon-phone" }), this._v(" "), s("span", { on: { click: this.gotoregister } }, [this._v("手机快速注册")])])])]), this._v(" "), this._m(5)]);
      }, staticRenderFns: [function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", [s("i", { staticClass: "iconfont icon-guanbi" })]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", [s("i", { staticClass: "iconfont icon-guanbi" })]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "mobileLogin" }, [s("div", { staticClass: "login-getyzm" }, [s("div", {}, [s("input", { attrs: { type: "text", placeholder: "请输入手机号" } })]), this._v(" "), s("div", {}, [this._v("请点击获取验证码")]), this._v(" "), s("div", [s("i", { staticClass: "iconfont icon-guanbi" })])]), this._v(" "), s("div", { staticClass: "login-putyzm" }, [s("div", {}, [s("input", { attrs: { type: "password", placeholder: "请输入收到的验证码" } })]), this._v(" "), s("div", [s("i", { staticClass: "iconfont icon-guanbi" })])])]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", {}, [s("span", [this._v("一键登录")])]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", [s("i", { staticClass: "iconfont icon-mima" }), this._v(" "), s("span", [this._v("忘记密码")])]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("footer", { staticClass: "clearfix login-footer" }, [s("div", { staticClass: "login-footer-top" }, [s("div", {}), this._v(" "), s("div", {}, [this._v("其他登录方式")]), this._v(" "), s("div", {})]), this._v(" "), s("div", { staticClass: "login-footer-center" }, [s("i", { staticClass: "iconfont icon-qq" }), this._v(" "), s("i", { staticClass: "iconfont icon-weixin" })]), this._v(" "), s("div", { staticClass: "login-footer-bottom" }, [s("span", {}, [this._v("登录即代表您已同意亿成隐私政策")])])]);
      }] },
        S = i("/Xao")(L, D, !1, function (t) {
      i("hs7O");
    }, "data-v-655941e1", null).exports,
        R = { name: "register", data: function data() {
        return {};
      }, components: {}, methods: { backHome: function backHome() {
          this.$router.push({ path: "/login" });
        }, register: function register() {
          v.a.post("/api/userRegister", { username1: this.$refs.username1.value, password1: this.$refs.password1.value, password2: this.$refs.password2.value, email: this.$refs.email.value, phone: this.$refs.phone.value }).then(function (t) {
            1 == t.data ? (alert("注册成功"), window.location.assign("/")) : 2 == t.data ? alert("该用户已经注册") : -1 == t.data && alert("注册失败");
          }).catch(function (t) {
            console.log(t);
          });
        } } },
        O = { render: function render() {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { attrs: { id: "register" } }, [s("header", { staticClass: "register-header" }, [s("i", { staticClass: "iconfont icon-left-trangle", on: { click: this.backHome } }), this._v(" "), s("h3", [this._v("亿成用户注册")])]), this._v(" "), s("main", { staticClass: "register-main" }, [s("section", {}, [s("div", {}, [this._v("用户名")]), this._v(" "), s("div", {}, [s("input", { ref: "username1", attrs: { type: "text", placeholder: "请输入用户名" } })])]), this._v(" "), s("section", {}, [s("div", {}, [this._v("密码")]), this._v(" "), s("div", {}, [s("input", { ref: "password1", attrs: { type: "password", placeholder: "请输入密码" } })])]), this._v(" "), s("section", {}, [s("div", {}, [this._v("确认密码")]), this._v(" "), s("div", {}, [s("input", { ref: "password2", attrs: { type: "password", placeholder: "请输入确认密码" } })])]), this._v(" "), s("section", {}, [s("div", {}, [this._v("邮箱")]), this._v(" "), s("div", {}, [s("input", { ref: "email", attrs: { type: "text", placeholder: "请输入邮箱" } })])]), this._v(" "), s("section", {}, [s("div", {}, [this._v("手机号")]), this._v(" "), s("div", {}, [s("input", { ref: "phone", attrs: { type: "text", placeholder: "请输入手机号" } })])])]), this._v(" "), s("footer", { staticClass: "register-footer" }, [s("div", { on: { click: this.register } }, [s("span", [this._v("点击注册")])])])]);
      }, staticRenderFns: [] },
        E = i("/Xao")(R, O, !1, function (t) {
      i("zsnD");
    }, "data-v-7ae77c35", null).exports,
        M = { components: { SearchNavbar: r }, name: "shoppingCart", data: function data() {
        return { goodsCart: [], allGoodsPrice: 0, allGoodsNumber: 0 };
      }, created: function created() {
        this._getGoodsCart();
      }, methods: { _getGoodsCart: function _getGoodsCart() {
          var t = this;v.a.get("/api/shoppingCart").then(function (s) {
            t.goodsCart = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        }, oneChange: function oneChange(t) {
          var s = this.$refs.xuanze;this.$refs.allChange;"iconfont icon-xuanze" === this.$refs.xuanze[t].className ? this.$refs.xuanze[t].className = "iconfont icon-xuanze1" : "iconfont icon-xuanze1" === this.$refs.xuanze[t].className && (this.$refs.xuanze[t].className = "iconfont icon-xuanze");for (var i = 0; i < s.length; i++) {
            "iconfont icon-xuanze" === s[i].className ? this.$refs.allChange.className = "iconfont icon-xuanze" : "iconfont icon-xuanze1" === s[i].className && (this.$refs.allChange.className = "iconfont icon-xuanze1");
          }
        }, allchange: function allchange() {
          var t = this.$refs.xuanze,
              s = this.$refs.allChange;if ("iconfont icon-xuanze1" === s.className) {
            s.className = "iconfont icon-xuanze";for (var i = 0; i < t.length; i++) {
              t[i].className = "iconfont icon-xuanze";
            }for (var a = this.goodsCart, e = 0, n = 0, o = 0; o < a.length; o++) {
              e += a[o].price * a[o].number, n += a[o].number;
            }this.allGoodsPrice = e, this.allGoodsNumber = n;
          } else if ("iconfont icon-xuanze" === s.className) {
            s.className = "iconfont icon-xuanze1";for (var c = 0; c < t.length; c++) {
              t[c].className = "iconfont icon-xuanze1";
            }this.allGoodsPrice = 0, this.allGoodsNumber = 0;
          }
        }, addGoods: function addGoods(t) {
          this.goodsCart[t].number++, this.goodsCart[t].goodsPrice = this.goodsCart[t].number * this.goodsCart[t].price;
        }, minusGoods: function minusGoods(t) {
          this.goodsCart[t].number > 1 && (this.goodsCart[t].number--, this.goodsCart[t].goodsPrice = this.goodsCart[t].number * this.goodsCart[t].price);
        }, followGoods: function followGoods() {
          alert("移入成功");
        }, deleteGoods: function deleteGoods(t) {
          this.goodsCart.splice(t, 1);
        } } },
        q = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { attrs: { id: "shoppingCart" } }, [i("search-navbar"), t._v(" "), i("section", { staticClass: "goodsList" }, t._l(t.goodsCart, function (s, a) {
          return i("div", { staticClass: "goodsList-template" }, [i("div", { staticClass: "goodsList-templatel-left" }, [i("i", { ref: "xuanze", refInFor: !0, staticClass: "iconfont icon-xuanze1", on: { click: function click(s) {
                t.oneChange(a);
              } } })]), t._v(" "), i("div", { staticClass: "goodsList-template-center" }, [i("img", { attrs: { src: s.img } })]), t._v(" "), i("div", { staticClass: "goodsList-template-right" }, [i("div", { staticClass: "right-top" }, [i("p", { staticClass: "right-top-title" }, [t._v(t._s(s.title))])]), t._v(" "), i("div", { staticClass: "right-center" }, [i("span", { staticClass: "right-center-price" }, [t._v("总价：￥" + t._s(s.goodsPrice))]), t._v(" "), i("span", { staticClass: "right-center-Specifications" }, [t._v("规格：" + t._s(s.size))])]), t._v(" "), i("div", { staticClass: "right-bottom" }, [i("div", { staticClass: "right-bottom-addMinus" }, [i("span", { staticClass: "add", on: { click: function click(s) {
                t.minusGoods(a);
              } } }, [t._v("-")]), t._v(" "), i("span", { ref: "numberGoods", refInFor: !0, staticClass: "number" }, [t._v(t._s(s.number))]), t._v(" "), i("span", { staticClass: "Minus", on: { click: function click(s) {
                t.addGoods(a);
              } } }, [t._v("+")])]), t._v(" "), i("div", [i("span", { staticClass: "follow", on: { click: t.followGoods } }, [t._v("关注")]), t._v(" "), i("span", { staticClass: "delete", on: { click: function click(s) {
                t.deleteGoods(a);
              } } }, [t._v("删除")])])])])]);
        })), t._v(" "), i("section", { staticClass: "cart-footer" }, [i("div", { staticClass: "cart-footer-left" }, [i("i", { ref: "allChange", staticClass: "iconfont icon-xuanze1" }), t._v(" "), i("span", { on: { click: t.allchange } }, [t._v("全选")])]), t._v(" "), i("div", { staticClass: "cart-footer-center" }, [i("span", [t._v("一共")]), t._v(" "), i("span", { ref: "zg" }, [t._v(t._s(t.allGoodsNumber))]), t._v(" "), i("span", [t._v("总价")]), t._v(" "), i("span", { ref: "zj" }, [t._v(t._s(t.allGoodsPrice))])]), t._v(" "), t._m(0)])], 1);
      }, staticRenderFns: [function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "cart-footer-right" }, [s("span", {}, [this._v("结算")])]);
      }] },
        J = i("/Xao")(M, q, !1, function (t) {
      i("Cjxx");
    }, "data-v-4d23e362", null).exports,
        Z = { components: { SearchNavbar: r }, name: "userInfo", methods: {} },
        U = { render: function render() {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { attrs: { id: "userInfo" } }, [s("search-navbar")], 1);
      }, staticRenderFns: [] },
        P = i("/Xao")(Z, U, !1, function (t) {
      i("iwZM");
    }, "data-v-1f637f87", null).exports,
        Q = { components: { SearchNavbar: r }, name: "nearby", methods: {} },
        H = { render: function render() {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { attrs: { id: "nearby" } }, [s("search-navbar")], 1);
      }, staticRenderFns: [] },
        F = i("/Xao")(Q, H, !1, function (t) {
      i("3FWe");
    }, "data-v-032a9d2f", null).exports,
        W = { components: { SearchNavbar: r }, name: "search", data: function data() {
        return { search: [], hot: [] };
      }, created: function created() {
        this._getSearch(), this._gethot();
      }, methods: { _getSearch: function _getSearch() {
          var t = this;v.a.get("/api/search").then(function (s) {
            t.search = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        }, _gethot: function _gethot() {
          var t = this;v.a.get("/api/hot").then(function (s) {
            t.hot = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        }, searchGoodsName: function searchGoodsName() {
          v.a.post("", { goodsID: "" }).then(function (t) {
            console.log(t);
          }).catch(function (t) {
            console.log(t);
          });
        }, deleteGoods: function deleteGoods() {
          alert("hihi");
        } } },
        T = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { attrs: { id: "search" } }, [i("search-navbar"), t._v(" "), i("section", { staticClass: "clearfix recently" }, [i("div", { staticClass: "top " }, [t._m(0), t._v(" "), i("div", {}, [i("i", { staticClass: "iconfont icon-shanchu", on: { click: t.deleteGoods } })])]), t._v(" "), t._l(t.search, function (s) {
          return i("div", { staticClass: "bottom" }, [i("p", { staticClass: "searchGoods", on: { click: t.searchGoodsName } }, [t._v(t._s(s.goods))])]);
        })], 2), t._v(" "), i("section", { staticClass: "hot" }, [t._m(1), t._v(" "), i("div", { staticClass: "bottom" }, t._l(t.hot, function (s) {
          return i("div", [i("p", { staticClass: "hotGoods", on: { click: t.searchGoodsName } }, [t._v(t._s(s.goods))])]);
        }))])], 1);
      }, staticRenderFns: [function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", {}, [s("p", {}, [this._v("最近搜索")])]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", [s("p", { staticClass: "top" }, [this._v("热门搜索")])]);
      }] },
        X = i("/Xao")(W, T, !1, function (t) {
      i("Ojl9");
    }, "data-v-8ff99728", null).exports;a.a.use(o.a);var V = new o.a({ routes: [{ path: "/", name: "Index", component: N }, { path: "/Login", name: "Login", component: S }, { path: "/Register", name: "Register", component: E }, { path: "/Classify", name: "Classify", component: u }, { path: "/UserInfo", name: "UserInfo", component: P }, { path: "/ShoppingCart", name: "ShoppingCart", component: J }, { path: "/Details", name: "Details", component: _ }, { path: "/GoodsDetails", name: "GoodsDetails", component: y }, { path: "/Nearby", name: "Nearby", component: F }, { path: "/Search", name: "Search", component: X }] }),
        K = (i("CF4o"), i("201h")),
        Y = i.n(K);a.a.config.productionTip = !1, a.a.use(A.a), a.a.use(Y.a, { loading: i("R9n1") }), new a.a({ el: "#app", router: V, render: function render(t) {
        return t(n);
      }, data: { Hub: new a.a() } });
  }, Ojl9: function Ojl9(t, s) {}, PC1s: function PC1s(t, s) {}, R9n1: function R9n1(t, s) {
    t.exports = "data:image/png;base64,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";
  }, "RD++": function RD(t, s) {}, "RK+I": function RKI(t, s) {}, UGy7: function UGy7(t, s, i) {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 });var a = { render: function render() {
        var t = this.$createElement;return (this._self._c || t)("div", { class: this.slideClass }, [this._t("default")], 2);
      }, staticRenderFns: [] },
        e = i("/Xao")({ name: "swiper-slide", data: function data() {
        return { slideClass: "swiper-slide" };
      }, ready: function ready() {
        this.update();
      }, mounted: function mounted() {
        this.update(), this.$parent.options.slideClass && (this.slideClass = this.$parent.options.slideClass);
      }, updated: function updated() {
        this.update();
      }, attached: function attached() {
        this.update();
      }, methods: { update: function update() {
          this.$parent && this.$parent.swiper && this.$parent.swiper.update && (this.$parent.swiper.update(!0), this.$parent.options.loop && this.$parent.swiper.reLoop());
        } } }, a, !1, null, null, null);s.default = e.exports;
  }, Yh7j: function Yh7j(t, s, i) {
    t.exports = i.p + "static/img/footer.825bfe4.jpg";
  }, aEDl: function aEDl(t, s) {}, hs7O: function hs7O(t, s) {}, iwZM: function iwZM(t, s) {}, "jNQ+": function jNQ(t, s) {}, oos2: function oos2(t, s) {
    t.exports = "data:image/gif;base64,R0lGODlhZABkAKIEAN7e3rq6uv///5mZmQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjA4RUZDMDI3MjA2ODExODA4M0Y1OTQyMzVDRDM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMzE0Rjk3NDdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzE0Rjk3MzdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVBMTZDQjczOTIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwOEVGQzAyNzIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+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";
  }, syvT: function syvT(t, s, i) {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 });var a = "undefined" != typeof window;a && (window.Swiper = i("Bnvi"));var e = { name: "swiper", props: { options: { type: Object, default: function _default() {
            return { autoplay: 3500 };
          } }, notNextTick: { type: Boolean, default: function _default() {
            return !1;
          } } }, data: function data() {
        return { defaultSwiperClasses: { wrapperClass: "swiper-wrapper" } };
      }, ready: function ready() {
        !this.swiper && a && (this.swiper = new Swiper(this.$el, this.options));
      }, mounted: function mounted() {
        var t = this,
            s = function () {
          if (!t.swiper && a) {
            delete t.options.notNextTick;var s = !1;for (var i in t.defaultSwiperClasses) {
              t.defaultSwiperClasses.hasOwnProperty(i) && t.options[i] && (s = !0, t.defaultSwiperClasses[i] = t.options[i]);
            }var e = function e() {
              t.swiper = new Swiper(t.$el, t.options);
            };s ? t.$nextTick(e) : e();
          }
        }(this.options.notNextTick || this.notNextTick) ? s() : this.$nextTick(s);
      }, updated: function updated() {
        this.swiper && this.swiper.update();
      }, beforeDestroy: function beforeDestroy() {
        this.swiper && (this.swiper.destroy(), delete this.swiper);
      } },
        n = { render: function render() {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "swiper-container" }, [this._t("parallax-bg"), this._v(" "), s("div", { class: this.defaultSwiperClasses.wrapperClass }, [this._t("default")], 2), this._v(" "), this._t("pagination"), this._v(" "), this._t("button-prev"), this._v(" "), this._t("button-next"), this._v(" "), this._t("scrollbar")], 2);
      }, staticRenderFns: [] },
        o = i("/Xao")(e, n, !1, null, null, null);s.default = o.exports;
  }, wzzk: function wzzk(t, s) {}, zsnD: function zsnD(t, s) {} }, ["NHnr"]);
//# sourceMappingURL=app.74817bc48ff9cb507801.js.map
//# sourceMappingURL=app.74817bc48ff9cb507801.js.map