"use strict";

webpackJsonp([1], { "/TnU": function TnU(t, s) {}, 0: function _(t, s) {}, "0Kvs": function Kvs(t, s) {}, "3T09": function T09(t, s) {}, "6nv3": function nv3(t, s) {}, "7sxG": function sxG(t, s) {}, "7v7/": function v7(t, s) {}, "8PXj": function PXj(t, s) {}, CF4o: function CF4o(t, s) {}, DKxr: function DKxr(t, s) {}, DsSy: function DsSy(t, s) {}, DvsZ: function DvsZ(t, s) {}, DwU0: function DwU0(t, s) {}, F1BJ: function F1BJ(t, s) {}, IFlw: function IFlw(t, s) {}, KMbX: function KMbX(t, s) {}, M7SI: function M7SI(t, s) {}, NHnr: function NHnr(t, s, i) {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 });var e = i("MVMM"),
        a = (i("Rfgr"), { render: function render() {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { attrs: { id: "app" } }, [s("router-view")], 1);
      }, staticRenderFns: [] });var n = i("Z0/y")({ name: "app" }, a, !1, function (t) {
      i("M7SI");
    }, null, null).exports,
        o = i("zO6J"),
        r = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { attrs: { id: "searchNavbar" } }, [i("div", { staticClass: "searchNavbar-top" }, [i("div", { staticClass: "top-left" }, [i("p", { on: { click: function click(s) {
              t.$router.go(-1);
            } } }, [i("i", { staticClass: "iconfont icon-left-trangle" })])]), t._v(" "), t._m(0), t._v(" "), i("div", { staticClass: "top-right" }, [i("i", { staticClass: "iconfont icon-caidan", on: { click: t.changeNavbar } })])]), t._v(" "), i("div", { class: { BottomNone: t.isBottom, BottomBlock: !t.isBottom } }, [i("div", { staticClass: "searchNavbar-bottom" }, [i("router-link", { attrs: { to: "/" } }, [i("i", { staticClass: "iconfont icon-zhuye" }), t._v(" "), i("span", {}, [t._v("首页")])]), t._v(" "), i("router-link", { attrs: { to: "/Classify" } }, [i("i", { staticClass: "iconfont icon-fenlei" }), t._v(" "), i("span", {}, [t._v("分类")])]), t._v(" "), i("router-link", { attrs: { to: "/Nearby" } }, [i("i", { staticClass: "iconfont icon-fujin" }), t._v(" "), i("span", {}, [t._v("附近")])]), t._v(" "), i("router-link", { attrs: { to: "/ShoppingCart" } }, [i("i", { staticClass: "iconfont icon-gouwuche1" }), t._v(" "), i("span", {}, [t._v("购物车")])]), t._v(" "), i("router-link", { attrs: { to: "/UserInfo" } }, [i("i", { staticClass: "iconfont icon-unie64d" }), t._v(" "), i("span", {}, [t._v("我的")])])], 1)])]);
      }, staticRenderFns: [function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "top-center" }, [s("i", { staticClass: "iconfont icon-sousuo" }), this._v(" "), s("form", [s("input", { attrs: { type: "text", placeholder: "新鲜鸡腿" } })])]);
      }] };var c = i("Z0/y")({ name: "searchNavbar", data: function data() {
        return { isBottom: !1 };
      }, methods: { changeNavbar: function changeNavbar() {
          this.isBottom = !this.isBottom;
        } } }, r, !1, function (t) {
      i("yIeE");
    }, "data-v-9aec934a", null).exports,
        l = { props: { title: { type: String, default: "正在载入中...." } } },
        d = { render: function render() {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "loading" }, [s("img", { staticStyle: { width: "80px", height: "80px" }, attrs: { src: i("oos2"), alt: "" } }), this._v(" "), s("p", { staticClass: "desc" }, [this._v(this._s(this.title))])]);
      }, staticRenderFns: [] };var v = i("Z0/y")(l, d, !1, function (t) {
      i("O0f5");
    }, "data-v-7b0fe02e", null).exports,
        u = i("2sCs"),
        p = i.n(u),
        m = { components: { SearchNavbar: c, Loading: v }, name: "classify", data: function data() {
        return { leftLists: [], rightLists: [], goodsList: [], num: 0, isDefaultGoods: !0, isPrice: !1, isSell: !1, isSaixuan: !1, isupPrice: !1, isdownPrice: !1 };
      }, created: function created() {
        this._getClassifyLeft(), this._getClassifyRight();
      }, methods: { _getClassifyLeft: function _getClassifyLeft() {
          var t = this;p.a.get("/api/MLeftLists").then(function (s) {
            t.leftLists = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        }, _getClassifyRight: function _getClassifyRight() {
          var t = this;p.a.get("/api/MRightLists").then(function (s) {
            t.rightLists = s.data, t.rightLists.forEach(function (s, i, e) {
              t.goodsList.push(e[i].goodsImg);
            });
          }).catch(function (t) {
            console.log(t);
          });
        }, tab: function tab(t) {
          this.num = t;
        }, lookGoods: function lookGoods(t, s, i) {
          this.$router.push({ path: "/GoodsDetails/", query: { id: s, index: i } });
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
            i = t._self._c || s;return i("div", { attrs: { id: "classify" } }, [i("search-navbar"), t._v(" "), i("main", { staticClass: "classify" }, [i("section", { staticClass: "classify-left" }, [i("div", { staticClass: "left-sxclassifys" }, [t._v("\n        生鲜分类\n      ")]), t._v(" "), i("div", { staticClass: "left-lists" }, t._l(t.leftLists, function (s, e) {
          return i("div", [i("div", { class: { active: e === t.num }, on: { click: function click(s) {
                t.tab(e);
              } } }, [i("i", { class: s.icon }), t._v(" "), i("span", [t._v(t._s(s.text))])])]);
        }))]), t._v(" "), i("section", { staticClass: "classify-right" }, t._l(t.rightLists, function (s, e) {
          return i("div", { directives: [{ name: "show", rawName: "v-show", value: e == t.num, expression: " index == num" }] }, [i("div", { staticClass: "classify-right-top" }, [i("div", { staticClass: "goodsImg" }, [i("img", { attrs: { src: s.img } })]), t._v(" "), i("div", { staticClass: "goodsSort" }, [i("div", { class: { divActive: t.isDefaultGoods }, on: { click: function click(s) {
                t.defaultGoods(e);
              } } }, [t._v("默认\n            ")]), t._v(" "), i("div", { on: { click: function click(s) {
                t.price(e);
              } } }, [i("div", { class: { divActive: t.isPrice } }, [i("span", [t._v("价格")])]), t._v(" "), i("div", {}, [i("div", { class: { divActive: t.isupPrice } }, [i("i", { staticClass: "iconfont icon-sanjiao2" })]), t._v(" "), i("div", { class: { divActive: t.isdownPrice } }, [i("i", { staticClass: "iconfont icon-sanjiao1" })])])]), t._v(" "), i("div", { class: { divActive: t.isSell }, on: { click: function click(s) {
                t.salesVolume(e);
              } } }, [t._v("\n              销量\n            ")]), t._v(" "), i("div", { class: { divActive: t.isSaixuan }, on: { click: function click(s) {
                t.screen(e);
              } } }, [t._v("\n              筛选\n            ")])])]), t._v(" "), i("div", { staticClass: "classify-right-bottom" }, t._l(t.goodsList, function (s, e) {
            return i("div", { directives: [{ name: "show", rawName: "v-show", value: e == t.num, expression: " index == num" }] }, t._l(t.goodsList[t.num], function (s) {
              return i("div", { staticClass: "classify-right-bottom-template" }, [i("img", { staticClass: "template-img", attrs: { src: s.img }, on: { click: function click(i) {
                    t.lookGoods(e, s.id, s.index);
                  } } }), t._v(" "), i("p", { staticClass: "template-title" }, [t._v(t._s(s.title))]), t._v(" "), i("p", { staticClass: "template-price" }, [t._v("￥" + t._s(s.price) + "元")]), t._v(" "), i("p", { staticClass: "template-number" }, [t._v("月销：" + t._s(s.number))])]);
            }));
          }))]);
        }))]), t._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: !t.leftLists.length, expression: "!leftLists.length" }], staticClass: "loading-container" }, [i("loading")], 1)], 1);
      }, staticRenderFns: [] };var g = i("Z0/y")(m, h, !1, function (t) {
      i("6nv3");
    }, "data-v-4337e64e", null).exports,
        f = { name: "details", methods: {}, components: { SearchNavbar: c } },
        _ = { render: function render() {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { attrs: { id: "details" } }, [s("search-navbar")], 1);
      }, staticRenderFns: [] };var w = i("Z0/y")(f, _, !1, function (t) {
      i("rXwG");
    }, "data-v-4b8b2dbe", null).exports,
        C = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("header", { attrs: { id: "navherder" } }, [i("div", { staticClass: "navherder", class: { dowmAppShow: t.isdowmAppShow, dowmAppHide: !t.isdowmAppShow } }, [i("div", { staticClass: " down-app" }, [i("div", { staticClass: "clearfix down-app-left" }, [i("div", { staticClass: "colse-app" }, [i("i", { staticClass: "iconfont icon-guanbi", on: { click: t.closeApp } })]), t._v(" "), i("div", { staticClass: "yclogo" }), t._v(" "), i("div", { staticClass: "newMan" }, [i("router-link", { staticClass: "open-app", attrs: { to: "" } }, [t._v("打开亿成APP购物")]), t._v(" "), i("router-link", { staticClass: "newuser", attrs: { to: "" } }, [t._v("新人领188元红包")])], 1)]), t._v(" "), i("div", { staticClass: "clearfix down-app-rgiht" }, [i("router-link", { attrs: { to: "" } }, [t._v("立即打开")])], 1)])])]);
      }, staticRenderFns: [] };var x = i("Z0/y")({ name: "navheader", data: function data() {
        return { isdowmAppShow: !0 };
      }, methods: { closeApp: function closeApp() {
          this.isdowmAppShow = !this.isdowmAppShow;
        } }, components: {} }, C, !1, function (t) {
      i("F1BJ");
    }, "data-v-12391864", null).exports,
        y = { render: function render() {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { class: { hideModal: this.isHideModal } }, [s("div", { staticClass: "modal" }, [s("div", { staticClass: "modal-message" }, [this._v("\n      " + this._s(this.msg) + "\n    ")])])]);
      }, staticRenderFns: [] };var b = i("Z0/y")({ name: "modal", data: function data() {
        return {};
      }, methods: {}, props: ["msg", "isHideModal"] }, y, !1, function (t) {
      i("sivq");
    }, "data-v-420bea66", null).exports,
        S = i("3cXf"),
        A = i.n(S);function I(t, s, i, e, a) {
      if (null == sessionStorage.getItem("userInfo")) {
        var n = { setParam: function setParam(t, s) {
            localStorage.setItem(t, s);
          }, getParam: function getParam(t) {
            return localStorage.getItem(t);
          } },
            o = { img: s, title: i, price: e, id: a, num: 1, index: t },
            r = localStorage.getItem("ShoppingCart");if (null == r || "" == r) {
          var c = { productlist: [{ img: o.img, title: o.title, num: o.num, id: o.id, price: o.price, index: t }], totalNumber: o.num, totalAmount: o.price * o.num };n.setParam("ShoppingCart", "'" + A()(c));
        } else {
          var l = JSON.parse(r.substr(1, r.length)),
              d = l.productlist,
              v = !1;for (var u in d) {
            d[u].id == o.id && (d[u].num = parseInt(d[u].num) + parseInt(o.num), v = !0);
          }v || d.push({ img: o.img, title: o.title, num: o.num, id: o.id, price: o.price, index: t }), l.totalNumber = parseInt(l.totalNumber) + parseInt(o.num), l.totalAmount = parseFloat(l.totalAmount) + parseInt(o.num) * parseFloat(o.price), n.setParam("ShoppingCart", "'" + A()(l));
        }
      } else {
        var m = { setParam: function setParam(t, s) {
            localStorage.setItem(t, s);
          }, getParam: function getParam(t) {
            return localStorage.getItem(t);
          } },
            h = { img: s, title: i, price: e, id: a, num: 1, index: t },
            g = localStorage.getItem("ShoppingCart");if (null == g || "" == g) {
          var f = { productlist: [{ img: h.img, title: h.title, num: h.num, id: h.id, price: h.price, index: t }], totalNumber: h.num, totalAmount: h.price * h.num };m.setParam("ShoppingCart", "'" + A()(f));
        } else {
          var _ = JSON.parse(g.substr(1, g.length)),
              w = _.productlist,
              C = !1;for (var x in w) {
            w[x].id == h.id && (w[x].num = parseInt(w[x].num) + parseInt(h.num), C = !0);
          }C || w.push({ img: h.img, title: h.title, num: h.num, id: h.id, price: h.price, index: t }), _.totalNumber = parseInt(_.totalNumber) + parseInt(h.num), _.totalAmount = parseFloat(_.totalAmount) + parseInt(h.num) * parseFloat(h.price), m.setParam("ShoppingCart", "'" + A()(_));
        }var y = m.getParam("ShoppingCart");y = JSON.parse(y.substr(1, y.length)), p.a.post("/api/MobileUserAddProduct", { shoppingCart: y }).then(function (t) {}).catch(function (t) {
          console.log(t);
        });
      }
    }function k() {
      var t = localStorage.getItem("ShoppingCart");t = JSON.parse(t.substr(1, t.length)), p.a.post("/api/MobileUserAddProduct", { shoppingCart: t }).then(function (t) {}).catch(function (t) {
        console.log(t);
      });
    }function q() {
      var t = new Date(),
          s = t.getFullYear(),
          i = t.getMonth() + 1,
          e = t.getDate(),
          a = t.getHours(),
          n = t.getMinutes(),
          o = t.getSeconds();return i >= 1 && i <= 9 && (i = "0" + i), e >= 0 && e <= 9 && (e = "0" + e), a >= 1 && a <= 9 && (a = "0" + a), n >= 1 && n <= 9 && (n = "0" + n), o >= 1 && o <= 9 && (o = "0" + o), s + "-" + i + "-" + e + "-" + a + ":" + n + ":" + o;
    }var M = { name: "goodsDetails", components: { SearchNavbar: c, Navheader: x, Modal: b, Loading: v }, data: function data() {
        return { goodsDetailsTop: [{ text: "商品" }, { text: "详情" }, { text: "评论" }], goodsDetailsCenter: [{}, {}, {}], goodsInfoGeTop: [{ text: "商品介绍" }, { text: "规格参数" }, { text: "包装售货" }], goodsInfoGeBottom: [{}, {}, {}], num: 0, num1: 0, message: "", HideModal: !0, goodsInfo: [], productImg: [], details: [], goodsImg: "", title: "", price: "", number: 1, img: "", gg: "", province: "", city: "" };
      }, computed: { swiper: function swiper() {
          return this.$refs.mySwiper.swiper;
        } }, created: function created() {
        var t = this;setTimeout(function () {
          t._getGoodsDetails();
        }, 2e3), this._getIPAddress();
      }, methods: { _getGoodsDetails: function _getGoodsDetails() {
          var t = this;p.a.get("/api/MobileGoodsDetails", { params: { id: this.$route.query.id, index: this.$route.query.index } }).then(function (s) {
            t.goodsImg = s.data.img, t.title = s.data.title, t.price = s.data.price, t.gg = s.data.number, t.productImg = s.data.productImg, t.details = s.data.details;
          }).catch(function (t) {
            console.log(t);
          });
        }, _getIPAddress: function _getIPAddress() {
          var t = remote_ip_info.province,
              s = remote_ip_info.city;this.province = t, this.city = s;
        }, tab: function tab(t) {
          this.num = t;
        }, tab1: function tab1(t) {
          this.num1 = t;
        }, collection: function collection() {
          var t = this,
              s = this.$refs.Collection;if ("iconfont icon-heart" === s.className) {
            if (null === sessionStorage.getItem("userInfo")) {
              this.message = "登录才能收藏", this.HideModal = !1;var i = this;setTimeout(function () {
                i.message = "", i.HideModal = !0;
              }, 2e3);
            } else {
              s.className = "iconfont icon-heart red";var e = this.title,
                  a = this.price,
                  n = this.$route.query.id,
                  o = this.$route.query.index,
                  r = { img: this.goodsImg, title: e, goodsPrice: a, num: 1, id: n };p.a.post("/api/setFollowGoods", { FollowGoods: r }).then(function (s) {
                if ("1" === s.data) {
                  t.message = "收藏成功", t.HideModal = !1;var i = t;setTimeout(function () {
                    i.message = "", i.HideModal = !0;
                  }, 2e3);
                } else if ("-1" === s.data) {
                  t.message = "收藏失败", t.HideModal = !1;var e = t;setTimeout(function () {
                    e.message = "", e.HideModal = !0, e.goodsCart.splice(o, 1);
                  }, 2e3);
                } else if ("-2" === s.data) {
                  t.message = "登录才能收藏", t.HideModal = !1;var a = t;setTimeout(function () {
                    a.message = "", a.HideModal = !0;
                  }, 2e3);
                }
              }).catch(function (t) {
                console.log(t);
              });
            }
          } else if ("iconfont icon-heart red" === s.className) if (null === sessionStorage.getItem("userInfo")) {
            this.message = "登录才能收藏", this.HideModal = !1;var c = this;setTimeout(function () {
              c.message = "", c.HideModal = !0;
            }, 2e3);
          } else s.className = "iconfont icon-heart ", p.a.post("/api/DetailsDeleteFollowGoods").then(function (s) {
            if ("1" === s.data) {
              t.message = "取消收藏成功", t.HideModal = !1;var i = t;setTimeout(function () {
                i.message = "", i.HideModal = !0;
              }, 2e3);
            } else if ("-1" === s.data) {
              t.message = "已经加入购物车", t.HideModal = !1;var e = t;setTimeout(function () {
                e.message = "", e.HideModal = !0;
              }, 2e3);
            }
          }).catch(function (t) {
            console.log(t);
          });
        }, addCart: function addCart() {
          var t = this.title,
              s = this.price,
              i = this.$route.query.id;I(this.$route.query.index, this.goodsImg, t, s, i), this.message = "已经加入购物车", this.HideModal = !1;var e = this;setTimeout(function () {
            e.message = "", e.HideModal = !0;
          }, 2e3);
        }, nowBuy: function nowBuy() {
          this.$router.push({ path: "/BuyProduct/", query: { id: this.$route.query.id, index: this.$route.query.index, img: this.goodsImg, title: this.title, price: this.price, number: this.number } });
        }, addNumber: function addNumber() {
          this.number++;
        }, minusNumber: function minusNumber() {
          this.number > 1 && this.number--;
        }, LXKF: function LXKF() {
          this.$router.push({ path: "/LxKf" });
        } } },
        T = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { attrs: { id: "goodsDetails" } }, [i("navheader"), t._v(" "), i("search-navbar"), t._v(" "), i("div", { staticClass: "goodsDetails-top" }, t._l(t.goodsDetailsTop, function (s, e) {
          return i("div", {}, [i("div", { class: { topBottom: e === t.num }, on: { click: function click(s) {
                t.tab(e);
              } } }, [t._v("\n        " + t._s(s.text) + "\n      ")])]);
        })), t._v(" "), i("div", { staticClass: "goodsDetails-center" }, t._l(t.goodsDetailsCenter, function (s, e) {
          return i("div", { staticClass: "goodsInfo" }, [i("div", { directives: [{ name: "show", rawName: "v-show", value: 0 == e && e == t.num, expression: "index==0&&index==num" }], staticClass: "goodsInfo-img" }, [i("div", { staticClass: "goodsInfo-img-top" }, [i("img", { attrs: { src: t.goodsImg, alt: "" } })]), t._v(" "), i("div", { staticClass: "goodsInfo-img-center" }, [i("div", { staticClass: "center-title" }, [i("span", { staticClass: "title-text" }, [t._v("亿成优生鲜  " + t._s(t.title))])]), t._v(" "), i("div", { staticClass: "center-price" }, [i("span", [t._v("亿成价")]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", { staticStyle: { color: "firebrick", "font-size": "22px" } }, [t._v("￥" + t._s(t.price))]), t._v(" "), i("span", [t._v("元")])]), t._v(" "), i("div", { staticClass: "center-gg" }, [i("span", [t._v("库存数量：")]), i("span", [t._v(t._s(t.gg) + "件")])]), t._v(" "), i("div", { staticClass: "center-number" }, [i("div", { staticClass: "center-number-left" }, [t._v("购买数量：")]), t._v(" "), i("div", { staticClass: "center-number-right" }, [i("span", { on: { click: t.minusNumber } }, [t._v("-")]), t._v(" "), i("span", [t._v(t._s(t.number))]), t._v(" "), i("span", { on: { click: t.addNumber } }, [t._v("+")])])]), t._v(" "), i("div", { staticClass: "center-address" }, [i("span", [t._v("送至:")]), t._v("\n             "), i("span", [t._v(t._s(t.province))]), t._v(" \n            "), i("span", [t._v(t._s(t.city))]), t._v(" \n             "), i("i", { staticClass: "iconfont icon-dizhi" })])])]), t._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: 1 == e && e == t.num, expression: "index==1&&index==num" }], staticClass: "goodsInfo-ge" }, [i("div", { staticClass: "goodsInfo-ge-top" }, t._l(t.goodsInfoGeTop, function (s, e) {
            return i("div", { class: { fontColor: e === t.num1 }, on: { click: function click(s) {
                  t.tab1(e);
                } } }, [t._v("\n            " + t._s(s.text) + "\n          ")]);
          })), t._v(" "), t._l(t.goodsInfoGeBottom, function (s, e) {
            return i("div", { staticClass: "goodsInfo-ge-bottom" }, [i("div", { directives: [{ name: "show", rawName: "v-show", value: 0 == e && e == t.num1, expression: "index==0&&index==num1" }], staticClass: "ge-bottom-one" }, t._l(t.productImg, function (t, s) {
              return i("div", { staticClass: "ge-bottom-img" }, [i("img", { attrs: { src: t.pimg, alt: "" } })]);
            })), t._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: 1 == e && e == t.num1, expression: "index==1&&index==num1" }], staticClass: "ge-bottom-two" }, t._l(t.details, function (s, e) {
              return i("div", { staticClass: "ge-bottom-two-tr" }, [i("div", {}, [i("span", [t._v("品牌")]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", [t._v(t._s(s.pp))])]), t._v(" "), i("div", {}, [i("span", [t._v("保质期")]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", [t._v(t._s(s.bzq))])]), t._v(" "), i("div", {}, [i("span", [t._v("净含量")]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", [t._v(t._s(s.jhl))])]), t._v(" "), i("div", {}, [i("span", [t._v("储存条件")]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", [t._v(t._s(s.tj))])])]);
            })), t._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: 2 == e && e == t.num1, expression: "index==2&&index==num1" }], staticClass: "ge-bottom-three" }, [t._m(0, !0), t._v(" "), t._m(1, !0), t._v(" "), t._m(2, !0)])]);
          })], 2), t._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: 2 == e && e == t.num, expression: "index==2&&index==num" }], staticClass: "goodsInfo-pl" }, [t._v("\n        2\n      ")])]);
        })), t._v(" "), i("div", { staticClass: "goodsDetails-bottom" }, [i("div", { staticClass: "bottom-kf" }, [i("i", { staticClass: "iconfont icon-kefu", on: { click: t.LXKF } }, [t._v("客服")]), t._v(" "), i("i", { ref: "Collection", staticClass: "iconfont icon-heart", on: { click: t.collection } }, [t._v("收藏")])]), t._v(" "), i("div", { staticClass: "bottom-addCart", on: { click: t.addCart } }, [t._v("\n      加入购物车\n    ")]), t._v(" "), i("div", { staticClass: "bottom-NowBuy", on: { click: t.nowBuy } }, [t._v("\n      立即购买\n    ")])]), t._v(" "), i("modal", { attrs: { msg: t.message, isHideModal: t.HideModal } }), t._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: 0 === t.goodsImg.length, expression: "goodsImg.length===0" }], staticClass: "loading-container" }, [i("loading")], 1)], 1);
      }, staticRenderFns: [function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", {}, [s("p", {}, [this._v("包装清单")]), this._v(" "), s("div", {}, [this._v("面包蟹原厂包装（漏气断脚为正常现象）、+食品专用控温冰袋1-2个+高密度食品专用保温泡沫箱1个+三层瓦楞纸箱（有效对抗暴力运输）+顺丰空运、使命必达（京津冀次日达）。")])]);
      }, function () {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", {}, [i("p", {}, [t._v("售后服务")]), t._v(" "), i("div", {}, [t._v("1、生鲜“优鲜赔”绿色通道"), i("br"), t._v("\n                生鲜自营商品的破损或腐坏等问题，请在商品签收后48小时内提交“优鲜赔”申请，100分钟内审核通过后即享补偿，无需返回商品；非鲜活易腐类商品需上门取件。"), i("br"), t._v("\n                2、专业生鲜客服团队—让您售后无忧"), i("br"), t._v("\n                微信在线客服：YC-fresh"), i("br"), t._v("\n                亿成生鲜客服电话：400-626-3311"), i("br"), t._v("\n                服务时间：09:00-24:00"), i("br"), t._v("\n                生鲜商品售后政策"), i("br"), t._v("\n                注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，京东生鲜不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若亿成生鲜没有及时更新，请大家谅解！"), i("br")])]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", {}, [s("p", {}, [this._v("价格说明")]), this._v(" "), s("div", {}, [this._v("1、亿成价：亿成价为商品的销售价，是您最终决定是否购买商品的依据。"), s("br"), this._v("2、划线价：商品展示的划横线价格为参考价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在亿成平台上曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。"), s("br"), this._v("3、折扣：如无特殊说明，折扣指销售商在原价、或划线价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。"), s("br"), this._v("4、异常问题：商品促销信息以商品详情页“促销”栏中的信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。"), s("br")])]);
      }] };var P = i("Z0/y")(M, T, !1, function (t) {
      i("QnS+");
    }, "data-v-397a6aa4", null).exports,
        N = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("footer", { attrs: { id: "navfooter" } }, [i("router-link", { class: { footerA: t.isfooterA }, attrs: { to: "/" } }, [i("i", { staticClass: "iconfont icon-zhuye" }), t._v(" "), i("span", [t._v("首页")])]), t._v(" "), i("router-link", { attrs: { to: "/Classify" } }, [i("i", { staticClass: "iconfont icon-fenlei" }), t._v(" "), i("span", [t._v("分类")])]), t._v(" "), i("router-link", { attrs: { to: "/Nearby" } }, [i("i", { staticClass: "iconfont icon-fujin" }), t._v(" "), i("span", [t._v("附近")])]), t._v(" "), i("router-link", { attrs: { to: "/ShoppingCart" } }, [i("i", { staticClass: "iconfont icon-gouwuche1" }), t._v(" "), i("span", [t._v("购物车")])]), t._v(" "), i("router-link", { attrs: { to: "/UserInfo" } }, [i("i", { staticClass: "iconfont icon-iconfonticonfontwode1" }), t._v(" "), i("span", [t._v("我的")])])], 1);
      }, staticRenderFns: [] };var E = i("Z0/y")({ name: "navfooter", data: function data() {
        return { isfooterA: !0 };
      }, methods: {}, components: {} }, N, !1, function (t) {
      i("DvsZ");
    }, "data-v-c5aba38c", null).exports,
        L = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { staticClass: "yc-navbar" }, [i("ul", [i("li", [i("router-link", { attrs: { to: "/NowRec" } }, [i("i", { staticClass: "iconfont icon-xinpinbiaoqian" }), t._v(" "), i("span", [t._v("新品推荐")])])], 1), t._v(" "), i("li", [i("router-link", { attrs: { to: "/weekSell" } }, [i("i", { staticClass: "iconfont icon-remai" }), t._v(" "), i("span", [t._v("本周热卖")])])], 1), t._v(" "), i("li", [i("router-link", { attrs: { to: "/YcJx" } }, [i("i", { staticClass: "iconfont icon-jingxuan" }), t._v(" "), i("span", [t._v("亿成精选")])])], 1), t._v(" "), i("li", [i("router-link", { attrs: { to: "/Discount" } }, [i("i", { staticClass: "iconfont icon-dazhehuodong" }), t._v(" "), i("span", [t._v("打折生鲜")])])], 1), t._v(" "), i("li", [i("router-link", { attrs: { to: "/XsMs" } }, [i("i", { staticClass: "iconfont icon-miaosha1" }), t._v(" "), i("span", [t._v("限时秒杀")])])], 1)]), t._v(" "), i("ul", [i("li", [i("router-link", { attrs: { to: "/FreeEat" } }, [i("i", { staticClass: "iconfont icon-iconfonticon" }), t._v(" "), i("span", [t._v("深夜食堂")])])], 1), t._v(" "), i("li", [i("router-link", { attrs: { to: "/TsCy" } }, [i("i", { staticClass: "iconfont icon-tesefuwu" }), t._v(" "), i("span", [t._v("特色菜肴")])])], 1), t._v(" "), i("li", [i("router-link", { attrs: { to: "/LogisticsInfo" } }, [i("i", { staticClass: "iconfont icon-shangpin" }), t._v(" "), i("span", [t._v("精选礼盒")])])], 1), t._v(" "), i("li", [i("router-link", { attrs: { to: "/myOrder" } }, [i("i", { staticClass: "iconfont icon-dingdan1" }), t._v(" "), i("span", [t._v("查看订单")])])], 1), t._v(" "), i("li", [i("router-link", { attrs: { to: "/LxKf" } }, [i("i", { staticClass: "iconfont icon-kefu1" }), t._v(" "), i("span", [t._v("联系客服")])])], 1)])]);
      }, staticRenderFns: [] };var H = i("Z0/y")({ name: "yc-navbar", data: function data() {
        return {};
      }, methods: {} }, L, !1, function (t) {
      i("3T09");
    }, "data-v-267fed52", null).exports,
        z = i("41jX"),
        G = i.n(z);i("aEDl");var R = { name: "banner", components: { swiper: z.swiper, swiperSlide: z.swiperSlide }, data: function data() {
        return { bannerImg: [], swiperOption: { direction: "horizontal", loop: !0, pagination: ".swiper-pagination", prevButton: ".swiper-button-prev", nextButton: ".swiper-button-next", autoplay: 3e3, autoplayDisableOnInteraction: !1 } };
      }, computed: { swiper: function swiper() {
          return this.$refs.mySwiper.swiper;
        } }, created: function created() {
        this._getBanner();
      }, methods: { _getBanner: function _getBanner() {
          var t = this;p.a.get("/api/banner").then(function (s) {
            t.bannerImg = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        }, showBanner: function showBanner(t, s, i) {
          this.$router.push({ path: "/GoodsDetails/", query: { id: s, index: i } });
        } } },
        j = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { attrs: { id: "banner" } }, [i("swiper", { ref: "mySwiper", attrs: { options: t.swiperOption } }, [t._l(t.bannerImg, function (s, e) {
          return i("swiper-slide", { key: s.id }, [i("img", { staticStyle: { width: "100%" }, attrs: { src: s.img }, on: { click: function click(i) {
                t.showBanner(e, s.id, s.sindex);
              } } })]);
        }), t._v(" "), i("div", { staticClass: "swiper-pagination", attrs: { slot: "pagination" }, slot: "pagination" }), t._v(" "), i("div", { staticClass: "swiper-scrollbar", attrs: { slot: "scrollbar" }, slot: "scrollbar" })], 2)], 1);
      }, staticRenderFns: [] };var D = i("Z0/y")(R, j, !1, function (t) {
      i("0Kvs");
    }, "data-v-0225b20b", null).exports,
        B = { name: "index-headerLine", data: function data() {
        return { headerLines: [] };
      }, mounted: function mounted() {
        this.changeHeaderLine();
      }, created: function created() {
        this._getheaderLine();
      }, methods: { changeHeaderLine: function changeHeaderLine() {
          this.$refs.headerline;var t = this.$refs.headerlineD,
              s = 0;setInterval(function () {
            3 == ++s && (s = 0);var i = -20 * s;t.style.top = i + "px";
          }, 3e3);
        }, _getheaderLine: function _getheaderLine() {
          var t = this;p.a.get("/api/headerLine").then(function (s) {
            t.headerLines = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        } } },
        F = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { staticClass: "index-headerLine" }, [i("div", { ref: "headerline", staticClass: "yc-headline" }, [i("div", { ref: "headerlineD", staticClass: "yc-headline-box" }, t._l(t.headerLines, function (s, e) {
          return i("div", { staticClass: "yc-headline-div" }, [i("span", [t._v("生鲜头条:")]), t._v(" "), i("router-link", { staticClass: "yc-headline-firsta", attrs: { to: "" } }, [t._v("\n          " + t._s(s.text) + "\n        ")])], 1);
        }))])]);
      }, staticRenderFns: [] };var Y = i("Z0/y")(B, F, !1, function (t) {
      i("jNDR");
    }, "data-v-c0cef0da", null).exports;i("aEDl");var U = { name: "recommend", components: { swiper: z.swiper, swiperSlide: z.swiperSlide }, data: function data() {
        return { recommend: [], swiperOption1: { notNextTick: !0, autoplay: 3e3, loop: !0, autoplayDisableOnInteraction: !1, direction: "horizontal", effect: "coverflow", grabCursor: !0, setWrapperSize: !0, autoHeight: !0, paginationType: "bullets", pagination: ".swiper-pagination", paginationClickable: !0, scrollbar: ".swiper-scrollbar", mousewheelControl: !0, observeParents: !0 } };
      }, computed: { swiper: function swiper() {
          return this.$refs.mySwiper.swiper;
        } }, created: function created() {
        this._getrecommend();
      }, methods: { _getrecommend: function _getrecommend() {
          var t = this;p.a.get("/api/recommend").then(function (s) {
            t.recommend = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        }, showRecommend: function showRecommend(t, s, i) {
          this.$router.push({ path: "/GoodsDetails/", query: { id: s, index: i } });
        } } },
        O = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { staticClass: "recommend" }, [i("swiper", { ref: "mySwiper", attrs: { options: t.swiperOption1 } }, [t._l(t.recommend, function (s, e) {
          return i("swiper-slide", { key: s.id }, [i("img", { staticClass: "bannerimg", staticStyle: { width: "100%" }, attrs: { src: s.img }, on: { click: function click(i) {
                t.showRecommend(e, s.id, s.sindex);
              } } })]);
        }), t._v(" "), i("div", { staticClass: "swiper-pagination", attrs: { slot: "pagination" }, slot: "pagination" }), t._v(" "), i("div", { staticClass: "swiper-scrollbar", attrs: { slot: "scrollbar" }, slot: "scrollbar" })], 2)], 1);
      }, staticRenderFns: [] };var J = i("Z0/y")(U, O, !1, function (t) {
      i("DsSy");
    }, "data-v-de7263e2", null).exports,
        Z = { name: "yc-goodsList", components: { Modal: b }, data: function data() {
        return { message: "", HideModal: !0, bolus: [], chichens: [], cows: [], crad: [], ducks: [], fishs: [], noodles: [], sheeps: [], shrimps: [], pigs: [], seasonings: [] };
      }, created: function created() {
        this._getGoodsList();
      }, methods: { _getGoodsList: function _getGoodsList() {
          var t = this;p.a.get("/api/goodsList").then(function (s) {
            t.crad = s.data[0].goodsImg, t.shrimps = s.data[4].goodsImg, t.fishs = s.data[9].goodsImg, t.pigs = s.data[7].goodsImg, t.cows = s.data[6].goodsImg, t.sheeps = s.data[10].goodsImg, t.ducks = s.data[3].goodsImg, t.chichens = s.data[2].goodsImg, t.bolus = s.data[5].goodsImg, t.noodles = s.data[8].goodsImg, t.seasonings = s.data[1].goodsImg;
          }).catch(function (t) {
            console.log(t);
          });
        }, addCart: function addCart(t, s, i, e, a) {
          I(t, s, i, e, a), this.message = "已经加入购物车", this.HideModal = !1;var n = this;setTimeout(function () {
            n.message = "", n.HideModal = !0;
          }, 2e3);
        }, lookCrabGoods: function lookCrabGoods(t) {
          this.$router.push({ path: "/GoodsDetails/", query: { id: "PXL", index: t } });
        }, lookPigsGoods: function lookPigsGoods(t) {
          this.$router.push({ path: "/GoodsDetails/", query: { id: "ZRL", index: t } });
        }, lookCowGoods: function lookCowGoods(t) {
          this.$router.push({ path: "/GoodsDetails/", query: { id: "NRL", index: t } });
        }, lookFishGoods: function lookFishGoods(t) {
          this.$router.push({ path: "/GoodsDetails/", query: { id: "XYL", index: t } });
        }, lookDuckGoods: function lookDuckGoods(t) {
          this.$router.push({ path: "/GoodsDetails/", query: { id: "YXL", index: t } });
        }, lookShrimpsGoods: function lookShrimpsGoods(t) {
          this.$router.push({ path: "/GoodsDetails/", query: { id: "DXL", index: t } });
        }, lookSheepGoods: function lookSheepGoods(t) {
          this.$router.push({ path: "/GoodsDetails/", query: { id: "YRL", index: t } });
        }, lookChichenGoods: function lookChichenGoods(t) {
          this.$router.push({ path: "/GoodsDetails/", query: { id: "JXL", index: t } });
        }, lookSeasoningGoods: function lookSeasoningGoods(t) {
          this.$router.push({ path: "/GoodsDetails/", query: { id: "TWL", index: t } });
        }, lookBolusGoods: function lookBolusGoods(t) {
          this.$router.push({ path: "/GoodsDetails/", query: { id: "HGW", index: t } });
        }, lookNoodlesGoods: function lookNoodlesGoods(t) {
          this.$router.push({ path: "/GoodsDetails/", query: { id: "MDL", index: t } });
        } } },
        X = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { staticClass: "yc-goodsList" }, [i("h3", [t._v("亿成生鲜产品特色推荐")]), t._v(" "), i("div", { staticClass: "clearfix yc-goodsList-classify" }, [i("h4", [t._v("蟹产品")]), t._v(" "), t._l(t.crad, function (s, e) {
          return i("div", { staticClass: "goodslist" }, [i("div", { staticClass: "clearfix goodslistOne" }, [i("img", { directives: [{ name: "lazy", rawName: "v-lazy", value: s.img, expression: "item.img" }], attrs: { width: "100%" }, on: { click: function click(s) {
                t.lookCrabGoods(e);
              } } }), t._v(" "), i("p", { staticClass: "goods-title" }, [t._v(t._s(s.title))]), t._v(" "), i("div", { staticClass: "addCart" }, [i("p", [t._v("￥" + t._s(s.price))]), t._v(" "), i("p", { on: { click: function click(i) {
                t.addCart(e, s.img, s.title, s.price, s.id);
              } } }, [t._v("加入购物车")])])])]);
        })], 2), t._v(" "), i("div", { staticClass: "clearfix yc-goodsList-classify" }, [i("h4", [t._v("虾产品")]), t._v(" "), t._l(t.shrimps, function (s, e) {
          return i("div", { staticClass: "goodslist" }, [i("div", { staticClass: "clearfix goodslistOne" }, [i("img", { directives: [{ name: "lazy", rawName: "v-lazy", value: s.img, expression: "item.img" }], attrs: { width: "100%" }, on: { click: function click(s) {
                t.lookShrimpsGoods(e);
              } } }), t._v(" "), i("p", { staticClass: "goods-title" }, [t._v(t._s(s.title))]), t._v(" "), i("div", { staticClass: "addCart" }, [i("p", [t._v("￥" + t._s(s.price))]), t._v(" "), i("p", { on: { click: function click(i) {
                t.addCart(e, s.img, s.title, s.price, s.id);
              } } }, [t._v("加入购物车")])])])]);
        })], 2), t._v(" "), i("div", { staticClass: "clearfix yc-goodsList-classify" }, [i("h4", [t._v("鱼产品")]), t._v(" "), t._l(t.fishs, function (s, e) {
          return i("div", { staticClass: "goodslist" }, [i("div", { staticClass: "clearfix goodslistOne" }, [i("img", { directives: [{ name: "lazy", rawName: "v-lazy", value: s.img, expression: "item.img" }], attrs: { width: "100%" }, on: { click: function click(s) {
                t.lookFishGoods(e);
              } } }), t._v(" "), i("p", { staticClass: "goods-title" }, [t._v(t._s(s.title))]), t._v(" "), i("div", { staticClass: "addCart" }, [i("p", [t._v("￥" + t._s(s.price))]), t._v(" "), i("p", { on: { click: function click(i) {
                t.addCart(e, s.img, s.title, s.price, s.id);
              } } }, [t._v("加入购物车")])])])]);
        })], 2), t._v(" "), i("div", { staticClass: "clearfix yc-goodsList-classify" }, [i("h4", [t._v("牛产品")]), t._v(" "), t._l(t.cows, function (s, e) {
          return i("div", { staticClass: "goodslist" }, [i("div", { staticClass: "clearfix goodslistOne" }, [i("img", { directives: [{ name: "lazy", rawName: "v-lazy", value: s.img, expression: "item.img" }], attrs: { width: "100%" }, on: { click: function click(s) {
                t.lookCowGoods(e);
              } } }), t._v(" "), i("p", { staticClass: "goods-title" }, [t._v(t._s(s.title))]), t._v(" "), i("div", { staticClass: "addCart" }, [i("p", [t._v("￥" + t._s(s.price))]), t._v(" "), i("p", { on: { click: function click(i) {
                t.addCart(e, s.img, s.title, s.price, s.id);
              } } }, [t._v("加入购物车")])])])]);
        })], 2), t._v(" "), i("div", { staticClass: "clearfix yc-goodsList-classify" }, [i("h4", [t._v("猪产品")]), t._v(" "), t._l(t.pigs, function (s, e) {
          return i("div", { staticClass: "goodslist" }, [i("div", { staticClass: "clearfix goodslistOne" }, [i("img", { directives: [{ name: "lazy", rawName: "v-lazy", value: s.img, expression: "item.img" }], attrs: { width: "100%" }, on: { click: function click(s) {
                t.lookPigsGoods(e);
              } } }), t._v(" "), i("p", { staticClass: "goods-title" }, [t._v(t._s(s.title))]), t._v(" "), i("div", { staticClass: "addCart" }, [i("p", [t._v("￥" + t._s(s.price))]), t._v(" "), i("p", { on: { click: function click(i) {
                t.addCart(e, s.img, s.title, s.price, s.id);
              } } }, [t._v("加入购物车")])])])]);
        })], 2), t._v(" "), i("div", { staticClass: "clearfix yc-goodsList-classify" }, [i("h4", [t._v(" 羊产品")]), t._v(" "), t._l(t.sheeps, function (s, e) {
          return i("div", { staticClass: "goodslist" }, [i("div", { staticClass: "clearfix goodslistOne" }, [i("img", { directives: [{ name: "lazy", rawName: "v-lazy", value: s.img, expression: "item.img" }], attrs: { width: "100%" }, on: { click: function click(s) {
                t.lookSheepGoods(e);
              } } }), t._v(" "), i("p", { staticClass: "goods-title" }, [t._v(t._s(s.title))]), t._v(" "), i("div", { staticClass: "addCart" }, [i("p", [t._v("￥" + t._s(s.price))]), t._v(" "), i("p", { on: { click: function click(i) {
                t.addCart(e, s.img, s.title, s.price, s.id);
              } } }, [t._v("加入购物车")])])])]);
        })], 2), t._v(" "), i("div", { staticClass: "clearfix yc-goodsList-classify" }, [i("h4", [t._v("鸡产品")]), t._v(" "), t._l(t.chichens, function (s, e) {
          return i("div", { staticClass: "goodslist" }, [i("div", { staticClass: "clearfix goodslistOne" }, [i("img", { directives: [{ name: "lazy", rawName: "v-lazy", value: s.img, expression: "item.img" }], attrs: { width: "100%" }, on: { click: function click(s) {
                t.lookChichenGoods(e);
              } } }), t._v(" "), i("p", { staticClass: "goods-title" }, [t._v(t._s(s.title))]), t._v(" "), i("div", { staticClass: "addCart" }, [i("p", [t._v("￥" + t._s(s.price))]), t._v(" "), i("p", { on: { click: function click(i) {
                t.addCart(e, s.img, s.title, s.price, s.id);
              } } }, [t._v("加入购物车")])])])]);
        })], 2), t._v(" "), i("div", { staticClass: "clearfix yc-goodsList-classify" }, [i("h4", [t._v("鸭产品")]), t._v(" "), t._l(t.ducks, function (s, e) {
          return i("div", { staticClass: "goodslist" }, [i("div", { staticClass: "clearfix goodslistOne" }, [i("img", { directives: [{ name: "lazy", rawName: "v-lazy", value: s.img, expression: "item.img" }], attrs: { width: "100%" }, on: { click: function click(s) {
                t.lookDuckGoods(e);
              } } }), t._v(" "), i("p", { staticClass: "goods-title" }, [t._v(t._s(s.title))]), t._v(" "), i("div", { staticClass: "addCart" }, [i("p", [t._v("￥" + t._s(s.price))]), t._v(" "), i("p", { on: { click: function click(i) {
                t.addCart(e, s.img, s.title, s.price, s.id);
              } } }, [t._v("加入购物车")])])])]);
        })], 2), t._v(" "), i("div", { staticClass: "clearfix yc-goodsList-classify" }, [i("h4", [t._v(" 面点产品")]), t._v(" "), t._l(t.noodles, function (s, e) {
          return i("div", { staticClass: "goodslist" }, [i("div", { staticClass: "clearfix goodslistOne" }, [i("img", { directives: [{ name: "lazy", rawName: "v-lazy", value: s.img, expression: "item.img" }], attrs: { width: "100%" }, on: { click: function click(s) {
                t.lookNoodlesGoods(e);
              } } }), t._v(" "), i("p", { staticClass: "goods-title" }, [t._v(t._s(s.title))]), t._v(" "), i("div", { staticClass: "addCart" }, [i("p", [t._v("￥" + t._s(s.price))]), t._v(" "), i("p", { on: { click: function click(i) {
                t.addCart(e, s.img, s.title, s.price, s.id);
              } } }, [t._v("加入购物车")])])])]);
        })], 2), t._v(" "), i("div", { staticClass: "clearfix yc-goodsList-classify" }, [i("h4", [t._v("火锅丸产品")]), t._v(" "), t._l(t.bolus, function (s, e) {
          return i("div", { staticClass: "goodslist" }, [i("div", { staticClass: "clearfix goodslistOne" }, [i("img", { directives: [{ name: "lazy", rawName: "v-lazy", value: s.img, expression: "item.img" }], attrs: { width: "100%" }, on: { click: function click(s) {
                t.lookBolusGoods(e);
              } } }), t._v(" "), i("p", { staticClass: "goods-title" }, [t._v(t._s(s.title))]), t._v(" "), i("div", { staticClass: "addCart" }, [i("p", [t._v("￥" + t._s(s.price))]), t._v(" "), i("p", { on: { click: function click(i) {
                t.addCart(e, s.img, s.title, s.price, s.id);
              } } }, [t._v("加入购物车")])])])]);
        })], 2), t._v(" "), i("div", { staticClass: "clearfix yc-goodsList-classify" }, [i("h4", [t._v(" 调味品产品")]), t._v(" "), t._l(t.seasonings, function (s, e) {
          return i("div", { staticClass: "goodslist" }, [i("div", { staticClass: "clearfix goodslistOne" }, [i("img", { directives: [{ name: "lazy", rawName: "v-lazy", value: s.img, expression: "item.img" }], attrs: { width: "100%" }, on: { click: function click(s) {
                t.lookSeasoningGoods(e);
              } } }), t._v(" "), i("p", { staticClass: "goods-title" }, [t._v(t._s(s.title))]), t._v(" "), i("div", { staticClass: "addCart" }, [i("p", [t._v("￥" + t._s(s.price))]), t._v(" "), i("p", { on: { click: function click(i) {
                t.addCart(e, s.img, s.title, s.price, s.id);
              } } }, [t._v("加入购物车")])])])]);
        })], 2), t._v(" "), i("modal", { attrs: { msg: t.message, isHideModal: t.HideModal } })], 1);
      }, staticRenderFns: [] };var W = i("Z0/y")(Z, X, !1, function (t) {
      i("h38p");
    }, "data-v-39d30309", null).exports,
        Q = { render: function render() {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "yc-bottom" }, [this._m(0), this._v(" "), this._m(1), this._v(" "), s("div", { staticClass: "end" }, [s("img", { attrs: { src: "http://www.ilqiqi.top/images/mYc/nbi/footer.jpg" } }), this._v(" "), s("router-link", { attrs: { to: "" } }, [this._v("查看更多")])], 1)]);
      }, staticRenderFns: [function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "yc-bottom-top" }, [s("div", { staticClass: "yc-bottom-top-center" }, [s("div", {}, [s("span", [this._v("/精挑细选的/")])]), this._v(" "), s("div", {}), this._v(" "), s("div", {}, [s("span", [this._v("/分健康美味/")])])])]);
      }, function () {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { staticClass: "yc-bottom-center" }, [i("div", [i("div", {}, [i("i", { staticClass: "iconfont icon-yudashuye" })]), t._v(" "), i("div", {}, [i("span", [t._v("精挑")]), t._v(" "), i("span", [t._v("细选")])])]), t._v(" "), i("div", [i("div", {}, [i("i", { staticClass: "iconfont icon-cailanzi-" })]), t._v(" "), i("div", {}, [i("span", [t._v("产地")]), t._v(" "), i("span", [t._v("直销")])])]), t._v(" "), i("div", [i("div", {}, [i("i", { staticClass: "iconfont icon-shipinanquanicon" })]), t._v(" "), i("div", {}, [i("span", [t._v("严格")]), t._v(" "), i("span", [t._v("质检")])])]), t._v(" "), i("div", [i("div", {}, [i("i", { staticClass: "iconfont icon-quanchenglenglian " })]), t._v(" "), i("div", {}, [i("span", [t._v("全程")]), t._v(" "), i("span", [t._v("冷链")])])]), t._v(" "), i("div", [i("div", {}, [i("i", { staticClass: "iconfont icon-shouhou" })]), t._v(" "), i("div", {}, [i("span", [t._v("售后")]), t._v(" "), i("span", [t._v("无忧")])])])]);
      }] };var K = i("Z0/y")({ name: "yc-bottom", data: function data() {
        return {};
      }, methods: {} }, Q, !1, function (t) {
      i("XXFe");
    }, "data-v-7fcad232", null).exports;i("aEDl");var $ = { name: "yc-good-goods", data: function data() {
        return { swiperOption2: { direction: "horizontal", loop: !0, pagination: ".swiper-pagination", prevButton: ".swiper-button-prev", nextButton: ".swiper-button-next", autoplay: 3e3, effect: "cube", slidesPerView: 3, centeredSlides: !0, coverflow: { rotate: 30, stretch: 10, depth: 60, modifier: 2, slideshadows: !0 } }, YCJX: [], hotSell: [], weekHotSell: [], chujian: [] };
      }, computed: { swiper: function swiper() {
          return this.$refs.mySwiper.swiper;
        } }, created: function created() {
        this._getYCJX(), this._getWeekHotSell(), this._getchujian();
      }, methods: { _getYCJX: function _getYCJX() {
          var t = this;p.a.get("/api/tuijian").then(function (s) {
            t.YCJX = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        }, _getWeekHotSell: function _getWeekHotSell() {
          var t = this;p.a.get("/api/hotSell").then(function (s) {
            t.weekHotSell = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        }, _getchujian: function _getchujian() {
          var t = this;p.a.get("/api/chujian").then(function (s) {
            t.chujian = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        }, showCJ: function showCJ(t, s, i) {
          this.$router.push({ path: "/GoodsDetails/", query: { id: s, index: i } });
        }, showRM: function showRM(t, s, i) {
          this.$router.push({ path: "/GoodsDetails/", query: { id: s, index: i } });
        }, showjx4: function showjx4(t, s, i) {
          this.$router.push({ path: "/GoodsDetails/", query: { id: s, index: i } });
        } } },
        V = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { staticClass: "yc-good-goods" }, [t._m(0), t._v(" "), i("div", { staticClass: "yc-good-goods-center" }, [i("h3"), t._v(" "), i("div", { staticClass: "center-img" }, [i("swiper", { ref: "mySwiper", attrs: { options: t.swiperOption2 } }, [t._l(t.YCJX, function (s, e) {
          return i("swiper-slide", { key: s.id }, [i("p", { staticClass: "center-ul-li-a-p" }, [i("span", [t._v("￥" + t._s(s.price))]), t._v(" "), i("span", [t._v("多个")])]), t._v(" "), i("div", { on: { click: function click(i) {
                t.showjx4(e, s.id, s.sindex);
              } } }, [i("img", { staticClass: "goodsImg", attrs: { src: s.img } }), t._v(" "), i("p", { staticClass: "center-ul-li-a-p-title" }, [t._v(t._s(s.title))]), t._v(" "), i("p", { staticClass: "center-ul-li-a-p-text" }, [t._v("亿成，多，快，好，省")])])]);
        }), t._v(" "), i("div", { staticClass: "swiper-pagination", attrs: { slot: "pagination" }, slot: "pagination" }), t._v(" "), i("div", { staticClass: "swiper-scrollbar", attrs: { slot: "scrollbar" }, slot: "scrollbar" }), t._v(" "), i("div", { staticClass: "swiper-button-prev", attrs: { slot: "button-prev" }, slot: "button-prev" }), t._v(" "), i("div", { staticClass: "swiper-button-next", attrs: { slot: "button-next" }, slot: "button-next" })], 2)], 1)]), t._v(" "), i("div", { staticClass: "yc-good-goods-bottom" }, [i("div", { staticClass: "yc-good-goods-bottom-more" }, [i("router-link", { attrs: { to: "" } }, [i("span", [t._v("更多优选精品")]), t._v(" "), i("span", [t._v(" > ")])])], 1), t._v(" "), i("div", { staticClass: "yc-good-goods-bottom-list" }, [i("div", { staticClass: "yc-good-goods-bottom-new" }, [i("h3", [t._v("新品初见")]), t._v(" "), t._l(t.chujian, function (s, e) {
          return i("div", { staticClass: "new-price" }, [i("div", { staticClass: "chujianImg" }, [i("div", { staticClass: "hot-topone-price" }, [i("span", [t._v("￥" + t._s(s.price))]), t._v(" "), i("span", [t._v(t._s(s.number) + "只")])]), t._v(" "), i("img", { attrs: { src: s.img }, on: { click: function click(i) {
                t.showCJ(e, s.id, s.sindex);
              } } })]), t._v(" "), i("p", [t._v(t._s(s.title))]), t._v(" "), i("p", [t._v("每周三上新货")])]);
        })], 2), t._v(" "), i("div", { staticClass: "yc-good-goods-bottom-hot" }, [i("h3", [t._v("本周热卖")]), t._v(" "), t._l(t.weekHotSell, function (s, e) {
          return i("div", { staticClass: "hot-topone" }, [i("div", { staticClass: "chujianImg" }, [i("div", { staticClass: "hot-topone-price" }, [i("span", [t._v("￥" + t._s(s.price))]), t._v(" "), i("span", [t._v(t._s(s.number) + "只")])]), t._v(" "), i("img", { attrs: { src: s.img, alt: "" }, on: { click: function click(i) {
                t.showRM(e, s.id, s.sindex);
              } } })]), t._v(" "), i("div", { staticClass: "hot-topone-goods" }, [i("span", [t._v(t._s(s.title))]), i("br"), t._v(" "), i("span", [t._v("本周销量第一")])])]);
        })], 2)])])]);
      }, staticRenderFns: [function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "yc-good-goods-top" }, [s("h2", [this._v("精选好货")]), this._v(" "), s("p", [this._v("SELECTED")])]);
      }] };var tt = { name: "index", data: function data() {
        return { userName: "", login: "", number: "" };
      }, created: function created() {
        this._getUserInfo(), this._getChatList();
      }, methods: { _getUserInfo: function _getUserInfo() {
          if (null === sessionStorage.getItem("userInfo")) console.log("用户还没有登录");else {
            var t = sessionStorage.getItem("userInfo");t = JSON.parse(t), this.userName = t.username, this.login = t.state;
          }
        }, outLogin: function outLogin() {
          sessionStorage.clear(), window.location.reload();
        }, UserLogin: function UserLogin() {
          this.$router.push({ path: "/Login" });
        }, intoSearch: function intoSearch() {
          this.$router.push({ path: "/search" });
        }, goToMessage: function goToMessage() {
          this.$router.push({ path: "/LxKf" });
        }, _getChatList: function _getChatList() {
          var t = this;p.a.post("/api/getUserWDChatList").then(function (s) {
            console.log(s.data), t.number = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        } } },
        st = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { staticClass: "search", attrs: { id: "search" } }, [t._m(0), t._v(" "), t._m(1), t._v(" "), i("div", { staticClass: "sousuo" }, [i("i", { staticClass: "iconfont icon-sousuo" }), t._v(" "), i("form", { attrs: { action: "", method: "get" } }, [i("input", { staticClass: "SearchInput", attrs: { type: "text", placeholder: "新鲜鸡腿" }, on: { click: t.intoSearch } })])]), t._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: "1" === t.login, expression: "login ==='1'" }], staticClass: "search-login" }, [i("div", { on: { click: t.outLogin } }, [t._v("退出")])]), t._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: "1" !== t.login, expression: "login !=='1'" }], staticClass: "search-login" }, [i("div", { on: { click: t.UserLogin } }, [t._v("登录")])]), t._v(" "), i("div", { staticClass: "search-message" }, [i("div", { directives: [{ name: "show", rawName: "v-show", value: "1" === t.login && this.number > 0, expression: "login ==='1' && this.number>0" }], staticClass: "search-message-wd" }, [t._v(t._s(t.number))]), t._v(" "), i("div", [i("i", { staticClass: "iconfont icon-xiaoxi1", on: { click: t.goToMessage } })])])]);
      }, staticRenderFns: [function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "search-saoyisao" }, [s("i", { staticClass: "iconfont icon-saoyisaoerweimasaomasaomiao" }), this._v(" "), s("span", { staticClass: "saoyisao-test" }, [this._v("扫一扫")])]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "search-logo" }, [s("span", {}, [this._v("YC")])]);
      }] };var it = { name: "yc-kellsecond", components: { Modal: b }, data: function data() {
        return { message: "", HideModal: !0, KStimeList: [], jx1: [], jx2: [], jx3: [], isJx1: !1, isJx2: !1, isJx3: !0, num: 0, jx1Start: "", jx2Start: "", jx3Start: "", hour1: "01", minute1: 59, second1: 60, hour2: "01", minute2: 59, second2: 60, hour3: "01", minute3: 59, second3: 60 };
      }, created: function created() {
        this._getjx(), this._putTimeList(), this._getNowTime();
      }, methods: { _getjx: function _getjx() {
          var t = this;p.a.get("/api/jx").then(function (s) {
            t.jx1 = s.data[0].list1, t.jx2 = s.data[1].list2, t.jx3 = s.data[2].list3;
          });
        }, _getKsTime: function _getKsTime() {}, _putTimeList: function _putTimeList() {
          var t = [{ date: "", time: "10:00" }, { date: "", time: "15:00" }, { date: "", time: "20:00" }],
              s = new Date().toLocaleDateString();t.filter(function (t) {
            return "10:00" === t.time;
          })[0].date = s, t.filter(function (t) {
            return "15:00" === t.time;
          })[0].date = s, t.filter(function (t) {
            return "20:00" === t.time;
          })[0].date = s, this.KStimeList = t;
        }, _getNowTime: function _getNowTime() {
          var t = this,
              s = new Date().getHours();if (s >= 10 && s < 15) {
            if (this.num = 0, this.isJx1 = !0, this.isJx2 = !1, this.isJx3 = !1, this.jx1Start = 2, this.jx2Start = 1, this.jx3Start = 1, 2 === this.jx1Start) var i = setInterval(function () {
              t.second1--, t.second1 < 10 && (t.second1 = "0" + t.second1, "00" === t.second1 && (t.second1 = 59, t.minute1--, t.minute1 < 10 && (t.minute1 = "0" + t.minute1, "00" === t.minute1 && (t.minute1 = 59, t.hour1 = "00", (t.hour1 = "00" === t.minute1) && window.clearInterval(i)))));
            }, 1e3);
          } else if (s >= 15 && s < 20) {
            if (this.num = 1, this.isJx2 = !0, this.isJx1 = !1, this.isJx3 = !1, this.jx1Start = 3, this.jx2Start = 2, this.jx3Start = 1, 2 === this.jx2Start) var e = setInterval(function () {
              t.second2--, t.second2 < 10 && (t.second2 = "0" + t.second2, "00" === t.second2 && (t.second2 = 59, t.minute2--, t.minute2 < 10 && (t.minute2 = "0" + t.minute2, "00" === t.minute2 && (t.minute2 = 59, t.hour2 = "00", (t.hour2 = "00" === t.minute2) && window.clearInterval(e)))));
            }, 1e3);
          } else if ((s >= 20 || s < 10) && (this.num = 2, this.isJx3 = !0, this.isJx1 = !1, this.isJx2 = !1, this.jx1Start = 1, this.jx2Start = 3, this.jx3Start = 2, 2 === this.jx3Start)) var a = setInterval(function () {
            t.second3--, t.second3 < 10 && (t.second3 = "0" + t.second3, "00" === t.second3 && (t.second3 = 59, t.minute3--, t.minute3 < 10 && (t.minute3 = "0" + t.minute3, "00" === t.minute3 && (t.minute3 = 59, t.hour3 = "00", (t.hour3 = "00" === t.minute3) && window.clearInterval(a)))));
          }, 1e3);
        }, tab: function tab(t) {
          this.num = t, this.sIndex = t, 0 === this.num ? (this.isJx1 = !0, this.isJx2 = !1, this.isJx3 = !1) : 1 === this.num ? (this.isJx2 = !0, this.isJx1 = !1, this.isJx3 = !1) : 2 === this.num && (this.isJx3 = !0, this.isJx1 = !1, this.isJx2 = !1);
        }, showjx1: function showjx1(t, s, i) {
          if (2 === this.jx1Start) this.$router.push({ path: "/GoodsDetails/", query: { id: s, index: i } });else if (1 === this.jx1Start) {
            this.message = "秒杀还没有开始", this.HideModal = !1;var e = this;setTimeout(function () {
              e.message = "", e.HideModal = !0;
            }, 2e3);
          } else if (3 === this.jx1Start) {
            this.message = "已经错过秒杀时间，请下次购买", this.HideModal = !1;var a = this;setTimeout(function () {
              a.message = "", a.HideModal = !0;
            }, 2e3);
          }
        }, showjx2: function showjx2(t, s, i) {
          if (2 === this.jx2Start) this.$router.push({ path: "/GoodsDetails/", query: { id: s, index: i } });else if (1 === this.jx2Start) {
            this.message = "秒杀还没有开始", this.HideModal = !1;var e = this;setTimeout(function () {
              e.message = "", e.HideModal = !0;
            }, 2e3);
          } else if (3 === this.jx2Start) {
            this.message = "已经错过秒杀时间，请下次购买", this.HideModal = !1;var a = this;setTimeout(function () {
              a.message = "", a.HideModal = !0;
            }, 2e3);
          }
        }, showjx3: function showjx3(t, s, i) {
          if (2 === this.jx3Start) this.$router.push({ path: "/GoodsDetails/", query: { id: s, index: i } });else if (1 === this.jx3Start) {
            this.message = "秒杀还没有开始", this.HideModal = !1;var e = this;setTimeout(function () {
              e.message = "", e.HideModal = !0;
            }, 2e3);
          } else if (3 === this.jx3Start) {
            this.message = "已经错过秒杀时间，请下次购买", this.HideModal = !1;var a = this;setTimeout(function () {
              a.message = "", a.HideModal = !0;
            }, 2e3);
          }
        } } },
        et = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { staticClass: "yc-kellsecond" }, [i("p", { staticClass: "yc-kellsecond-title" }, [t._v("亿成限时秒杀")]), t._v(" "), i("div", { staticClass: " yc-kellsecond-time", attrs: { id: "kstimes" } }, t._l(t.KStimeList, function (s, e) {
          return i("div", { attrs: { id: "time-div" } }, [i("div", { class: { active: e === t.num }, on: { click: function click(s) {
                t.tab(e);
              } } }, [i("p", { ref: "pspantime1", refInFor: !0, staticClass: "pspantime" }, [t._v(t._s(s.date))]), t._v(" "), i("p", { staticClass: "jidian" }, [t._v(t._s(s.time))])])]);
        })), t._v(" "), i("div", [i("div", { directives: [{ name: "show", rawName: "v-show", value: 0 === t.num, expression: "num===0" }], staticClass: "yc-kellsecond-test" }, [i("div", { directives: [{ name: "show", rawName: "v-show", value: 1 === t.jx1Start, expression: "jx1Start ===1" }], staticClass: "yc-kellsecond-test-div" }, [i("div", { staticClass: "yc-kellsecond-leftTitle" }, [t._v("\n          请耐心等候\n        ")]), t._v(" "), t._m(0)]), t._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: 2 === t.jx1Start, expression: "jx1Start ===2" }], staticClass: "yc-kellsecond-test-div" }, [i("div", { staticClass: "yc-kellsecond-leftTitle" }, [t._v("\n          正在抢购，先下单先得\n        ")]), t._v(" "), i("div", { staticClass: "yc-kellsecond-timeend" }, [i("span", [t._v("距结束:")]), t._v(" "), i("span", { staticClass: "num" }, [t._v(t._s(t.hour1))]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", { staticClass: "num" }, [t._v(t._s(t.minute1))]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", { staticClass: "num" }, [t._v(t._s(t.second1))])])]), t._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: 3 === t.jx1Start, expression: "jx1Start ===3" }], staticClass: "yc-kellsecond-test-div" }, [i("div", { staticClass: "yc-kellsecond-leftTitle" }, [t._v("\n          已经结束\n        ")]), t._v(" "), t._m(1)])]), t._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: 1 === t.num, expression: "num===1" }], staticClass: "yc-kellsecond-test" }, [i("div", { directives: [{ name: "show", rawName: "v-show", value: 1 === t.jx2Start, expression: "jx2Start ===1" }], staticClass: "yc-kellsecond-test-div" }, [i("div", { staticClass: "yc-kellsecond-leftTitle" }, [t._v("\n          请耐心等候\n        ")]), t._v(" "), t._m(2)]), t._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: 2 === t.jx2Start, expression: "jx2Start ===2" }], staticClass: "yc-kellsecond-test-div" }, [i("div", { staticClass: "yc-kellsecond-leftTitle" }, [t._v("\n          正在抢购，先下单先得\n        ")]), t._v(" "), i("div", { staticClass: "yc-kellsecond-timeend" }, [i("span", [t._v("距结束:")]), t._v(" "), i("span", { staticClass: "num" }, [t._v(t._s(t.hour2))]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", { staticClass: "num" }, [t._v(t._s(t.minute2))]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", { staticClass: "num" }, [t._v(t._s(t.second2))])])]), t._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: 3 === t.jx2Start, expression: "jx2Start ===3" }], staticClass: "yc-kellsecond-test-div" }, [i("div", { staticClass: "yc-kellsecond-leftTitle" }, [t._v("\n          已经结束\n        ")]), t._v(" "), t._m(3)])]), t._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: 2 === t.num, expression: "num===2" }], staticClass: "yc-kellsecond-test" }, [i("div", { directives: [{ name: "show", rawName: "v-show", value: 1 === t.jx3Start, expression: "jx3Start ===1" }], staticClass: "yc-kellsecond-test-div" }, [i("div", { staticClass: "yc-kellsecond-leftTitle" }, [t._v("\n          请耐心等候\n        ")]), t._v(" "), t._m(4)]), t._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: 2 === t.jx3Start, expression: "jx3Start ===2" }], staticClass: "yc-kellsecond-test-div" }, [i("div", { staticClass: "yc-kellsecond-leftTitle" }, [t._v("\n          正在抢购，先下单先得\n        ")]), t._v(" "), i("div", { staticClass: "yc-kellsecond-timeend" }, [i("span", [t._v("距结束:")]), t._v(" "), i("span", { staticClass: "num" }, [t._v(t._s(t.hour3))]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", { staticClass: "num" }, [t._v(t._s(t.minute3))]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", { staticClass: "num" }, [t._v(t._s(t.second3))])])]), t._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: 3 === t.jx3Start, expression: "jx3Start ===3" }], staticClass: "yc-kellsecond-test-div" }, [i("div", { staticClass: "yc-kellsecond-leftTitle" }, [t._v("\n          已经结束\n        ")]), t._v(" "), t._m(5)])])]), t._v(" "), i("div", { attrs: { id: "ks" } }, [i("div", { staticClass: "yc-kellsecond-goods-list" }, [t._l(t.jx1, function (s, e) {
          return i("div", { directives: [{ name: "show", rawName: "v-show", value: t.isJx1, expression: "isJx1" }], staticClass: "yc-kellsecond-goods-list-div" }, [i("div", [i("img", { attrs: { src: s.img, width: "100", height: "100" }, on: { click: function click(i) {
                t.showjx1(e, s.id, s.sindex);
              } } }), t._v(" "), i("span", { staticClass: "yc-kellsecond-link-name" }, [t._v(t._s(s.title))]), t._v(" "), i("span", { staticClass: "yc-kellsecond-link-pirce" }, [t._v("￥" + t._s(s.price))]), t._v(" "), i("span", { staticClass: "yc-kellsecond-link-buy", on: { click: function click(i) {
                t.showjx1(e, s.id, s.sindex);
              } } }, [t._v("立即购买")])])]);
        }), t._v(" "), t._l(t.jx2, function (s, e) {
          return i("div", { directives: [{ name: "show", rawName: "v-show", value: t.isJx2, expression: "isJx2" }], staticClass: "yc-kellsecond-goods-list-div" }, [i("div", [i("img", { attrs: { src: s.img, width: "100", height: "100" }, on: { click: function click(i) {
                t.showjx2(e, s.id, s.sindex);
              } } }), t._v(" "), i("span", { staticClass: "yc-kellsecond-link-name" }, [t._v(t._s(s.title))]), t._v(" "), i("span", { staticClass: "yc-kellsecond-link-pirce" }, [t._v("￥" + t._s(s.price))]), t._v(" "), i("span", { staticClass: "yc-kellsecond-link-buy", on: { click: function click(i) {
                t.showjx2(e, s.id, s.sindex);
              } } }, [t._v("立即购买")])])]);
        }), t._v(" "), t._l(t.jx3, function (s, e) {
          return i("div", { directives: [{ name: "show", rawName: "v-show", value: t.isJx3, expression: "isJx3" }], staticClass: "yc-kellsecond-goods-list-div" }, [i("div", [i("img", { attrs: { src: s.img, width: "100", height: "100" }, on: { click: function click(i) {
                t.showjx3(e, s.id, s.sindex);
              } } }), t._v(" "), i("span", { staticClass: "yc-kellsecond-link-name" }, [t._v(t._s(s.title))]), t._v(" "), i("span", { staticClass: "yc-kellsecond-link-pirce" }, [t._v("￥" + t._s(s.price))]), t._v(" "), i("span", { staticClass: "yc-kellsecond-link-buy", on: { click: function click(i) {
                t.showjx3(e, s.id, s.sindex);
              } } }, [t._v("立即购买")])])]);
        })], 2)]), t._v(" "), i("modal", { attrs: { msg: t.message, isHideModal: t.HideModal } })], 1);
      }, staticRenderFns: [function () {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { staticClass: "yc-kellsecond-timeend" }, [i("span", [t._v("距开始:")]), t._v(" "), i("span", { staticClass: "num" }, [t._v("02")]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", { staticClass: "num" }, [t._v("00")]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", { staticClass: "num" }, [t._v("00")])]);
      }, function () {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { staticClass: "yc-kellsecond-timeend" }, [i("span", [t._v("已结束:")]), t._v(" "), i("span", { staticClass: "num" }, [t._v("00")]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", { staticClass: "num" }, [t._v("00")]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", { staticClass: "num" }, [t._v("00")])]);
      }, function () {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { staticClass: "yc-kellsecond-timeend" }, [i("span", [t._v("距开始:")]), t._v(" "), i("span", { staticClass: "num" }, [t._v("02")]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", { staticClass: "num" }, [t._v("00")]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", { staticClass: "num" }, [t._v("00")])]);
      }, function () {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { staticClass: "yc-kellsecond-timeend" }, [i("span", [t._v("已结束:")]), t._v(" "), i("span", { staticClass: "num" }, [t._v("00")]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", { staticClass: "num" }, [t._v("00")]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", { staticClass: "num" }, [t._v("00")])]);
      }, function () {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { staticClass: "yc-kellsecond-timeend" }, [i("span", [t._v("距开始:")]), t._v(" "), i("span", { staticClass: "num" }, [t._v("02")]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", { staticClass: "num" }, [t._v("00")]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", { staticClass: "num" }, [t._v("00")])]);
      }, function () {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { staticClass: "yc-kellsecond-timeend" }, [i("span", [t._v("已结束:")]), t._v(" "), i("span", { staticClass: "num" }, [t._v("00")]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", { staticClass: "num" }, [t._v("00")]), t._v(" "), i("span", [t._v(":")]), t._v(" "), i("span", { staticClass: "num" }, [t._v("00")])]);
      }] };var at = { name: "index", components: { NavHeader: x, NavFooter: E, Loading: v, Modal: b, Navbar: H, HeaderLine: Y, Recommend: J, GoodsList: W, Bottom: K, GoodGoods: i("Z0/y")($, V, !1, function (t) {
          i("/TnU");
        }, "data-v-bb80407e", null).exports, Banner: D, Search: i("Z0/y")(tt, st, !1, function (t) {
          i("cf/s");
        }, "data-v-3127e19e", null).exports, YsxSk: i("Z0/y")(it, et, !1, function (t) {
          i("vMvA");
        }, "data-v-9327f42c", null).exports }, data: function data() {
        return { imgs: [] };
      }, computed: {}, mounted: function mounted() {
        this.showUp(), this.showSearch(), this.bianse();
      }, created: function created() {
        var t = this;setTimeout(function () {
          t._getBanner();
        }, 1e3);
      }, methods: { _getBanner: function _getBanner() {
          var t = this;p.a.get("/api/banner").then(function (s) {
            t.imgs = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        }, showSearch: function showSearch() {
          var t = this.$refs.suosuo,
              s = this.$refs.suosuo.offsetHeight;window.addEventListener("scroll", function () {
            var i = window.scrollY;i > s ? (t.style.position = "fixed", t.style.maxWidth = "640px", t.style.width = "100%", t.style.top = 0, t.style.zIndex = 999) : i <= s && (t.style.position = "");
          });
        }, bianse: function bianse() {
          var t = this.$refs.suosuo,
              s = this.$refs.banner.offsetHeight;window.addEventListener("scroll", function () {
            var i = window.scrollY;if (i > s) t.style.background = "rgba(240,240,240,1)";else {
              var e = i / s * .85;t.style.background = "rgba(240,240,240," + e + ")";
            }
          });
        }, showUp: function showUp() {
          var t = this.$refs.goodGoods.offsetHeight,
              s = this.$refs.upTop;window.addEventListener("scroll", function () {
            var i = window.scrollY;i >= t ? s.style.display = "block" : i < t && (s.style.display = "none");
          });
        }, upToTop: function upToTop() {
          document.body.scrollTop = 0, document.documentElement.scrollTop = 0;
        } } },
        nt = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { attrs: { id: "index" } }, [i("header", [i("nav-header")], 1), t._v(" "), i("main", [i("section", { ref: "suosuo" }, [i("search")], 1), t._v(" "), i("section", { ref: "banner" }, [i("banner")], 1), t._v(" "), i("section", [i("navbar")], 1), t._v(" "), i("section", [i("header-line")], 1), t._v(" "), i("section", [i("recommend")], 1), t._v(" "), i("section", [i("ysx-sk")], 1), t._v(" "), i("section", { ref: "goodGoods" }, [i("good-goods")], 1), t._v(" "), i("section", [i("goods-list")], 1), t._v(" "), i("section", [i("bottom")], 1), t._v(" "), i("section", [i("div", { ref: "upTop", staticClass: "upTop", on: { click: t.upToTop } }, [i("i", { staticClass: "iconfont icon-xiangshang" })]), t._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: !t.imgs.length, expression: "!imgs.length" }], staticClass: "loading-container" }, [i("loading")], 1)])]), t._v(" "), i("footer", [i("nav-footer")], 1)]);
      }, staticRenderFns: [] };var ot = i("Z0/y")(at, nt, !1, function (t) {
      i("DKxr");
    }, "data-v-468ace92", null).exports,
        rt = { name: "login", components: { Modal: b }, data: function data() {
        return { ismlogin: !1, ismnlogin: !0, isuserlogin: !0, isdxlogin: !1, message: "", HideModal: !0, username: "", password: "", userNameErrText: "", userNameState: !1, passwordErrText: "", passwordState: !1 };
      }, methods: { backHome: function backHome() {
          this.$router.push({ path: "/" });
        }, mLogin: function mLogin() {
          this.ismlogin = !1, this.ismnlogin = !0, this.isuserlogin = !0, this.isdxlogin = !1;
        }, mNLogin: function mNLogin() {
          this.ismlogin = !0, this.ismnlogin = !1, this.isuserlogin = !1, this.isdxlogin = !0;
        }, gotoregister: function gotoregister() {
          this.$router.push({ path: "/Register" });
        }, userNameBlur: function userNameBlur(t) {
          0 === t.length ? this.userNameErrText = "用户名不能为空" : (this.userNameErrText = "", this.userNameState = !0);
        }, userNameFocus: function userNameFocus(t) {
          0 === t.length && (this.userNameErrText = "请填写用户名");
        }, passwordBlur: function passwordBlur(t) {
          0 === t.length ? this.passwordErrText = "密码不能为空" : (this.passwordErrText = "", this.passwordState = !0);
        }, passwordFocus: function passwordFocus(t) {
          0 === t.length && (this.passwordErrText = "请填写密码");
        }, login: function login() {
          var t = this;if (!0 === this.userNameState && !0 === this.passwordState) p.a.post("/api/userlogin", { username: this.username, password: this.password }).then(function (s) {
            if ("1" === s.data.state) {
              var i = s.data;i = A()(i), console.log(i), sessionStorage.setItem("userInfo", i), t.message = "登录成功", t.HideModal = !1, t.$socket.emit("CustomerService", { username: t.username });var e = t;setTimeout(function () {
                e.message = "", e.HideModal = !0, e.$router.push({ path: "/" });
              }, 2e3);
            } else if ("2" === s.data) {
              t.message = "该用户没有注册", t.HideModal = !1;var a = t;setTimeout(function () {
                a.message = "", a.HideModal = !0, a.username = "", a.password = "";
              }, 2e3);
            } else if ("-1" === s.data) {
              t.message = "密码错误", t.HideModal = !1;var n = t;setTimeout(function () {
                n.message = "", n.HideModal = !0, n.password = "";
              }, 2e3);
            }
          }).catch(function (t) {
            console.log(t);
          });else {
            this.message = "请正确填写信息", this.HideModal = !1;var s = this;setTimeout(function () {
              s.message = "", s.HideModal = !0;
            }, 2e3);
          }
        } } },
        ct = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { attrs: { id: "login" } }, [i("header", { staticClass: "login-header" }, [i("i", { staticClass: "iconfont icon-left-trangle", on: { click: t.backHome } }), t._v(" "), i("h3", [t._v("亿成用户登录")])]), t._v(" "), i("main", { staticClass: "login-main" }, [i("section", { staticClass: "changelogin" }, [i("div", { staticClass: "changelogin-left", on: { click: t.mLogin } }, [i("div", { class: { userlogin: t.isuserlogin } }, [t._v("账户密码登录")])]), t._v(" "), i("div", { staticClass: "changelogin-right", on: { click: t.mNLogin } }, [i("div", { class: { dxlogin: t.isdxlogin } }, [t._v("短信验证码登录")])])]), t._v(" "), i("section", { class: { mlgon: t.ismlogin } }, [i("div", { staticClass: "loginInput" }, [i("div", { staticClass: "login-userName" }, [i("div", {}, [t._v("账号")]), t._v(" "), i("div", {}, [i("input", { directives: [{ name: "model", rawName: "v-model", value: t.username, expression: "username" }], attrs: { type: "text", placeholder: "注册用户名" }, domProps: { value: t.username }, on: { blur: function blur(s) {
              t.userNameBlur(t.username);
            }, focus: function focus(s) {
              t.userNameFocus(t.username);
            }, input: function input(s) {
              s.target.composing || (t.username = s.target.value);
            } } })]), t._v(" "), i("div", { staticClass: "userErrText" }, [i("span", [t._v(t._s(t.userNameErrText))])])]), t._v(" "), i("div", { staticClass: "login-password" }, [i("div", {}, [t._v("密码")]), t._v(" "), i("div", {}, [i("input", { directives: [{ name: "model", rawName: "v-model", value: t.password, expression: "password" }], attrs: { type: "password", placeholder: "请输入密码" }, domProps: { value: t.password }, on: { blur: function blur(s) {
              t.passwordBlur(t.password);
            }, focus: function focus(s) {
              t.passwordFocus(t.password);
            }, input: function input(s) {
              s.target.composing || (t.password = s.target.value);
            } } })]), t._v(" "), i("div", { staticClass: "passwordErrText" }, [i("span", [t._v(t._s(t.passwordErrText))])])])])]), t._v(" "), i("section", { class: { mnlgon: t.ismnlogin } }, [t._m(0)]), t._v(" "), i("section", { staticClass: "registerBtn" }, [i("div", { on: { click: t.login } }, [i("span", [t._v("登录")])])]), t._v(" "), i("section", { staticClass: "clearfix speedRegiter" }, [t._m(1), t._v(" "), i("div", [i("i", { staticClass: "iconfont icon-phone" }), t._v(" "), i("span", { on: { click: t.gotoregister } }, [t._v("手机快速注册")])])])]), t._v(" "), t._m(2), t._v(" "), i("modal", { attrs: { msg: t.message, isHideModal: t.HideModal } })], 1);
      }, staticRenderFns: [function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "mobileLogin" }, [s("div", { staticClass: "login-getyzm" }, [s("div", {}, [s("input", { attrs: { type: "text", placeholder: "请输入手机号" } })]), this._v(" "), s("div", {}, [this._v("请点击获取验证码")]), this._v(" "), s("div", [s("i", { staticClass: "iconfont icon-guanbi" })])]), this._v(" "), s("div", { staticClass: "login-putyzm" }, [s("div", {}, [s("input", { attrs: { type: "password", placeholder: "请输入收到的验证码" } })]), this._v(" "), s("div", [s("i", { staticClass: "iconfont icon-guanbi" })])])]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", [s("i", { staticClass: "iconfont icon-mima" }), this._v(" "), s("span", [this._v("忘记密码")])]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("footer", { staticClass: "clearfix login-footer" }, [s("div", { staticClass: "login-footer-top" }, [s("div", {}), this._v(" "), s("div", {}, [this._v("其他登录")]), this._v(" "), s("div", {})]), this._v(" "), s("div", { staticClass: "login-footer-center" }, [s("i", { staticClass: "iconfont icon-qq1" }), this._v(" "), s("i", { staticClass: "iconfont icon-weixin1" })]), this._v(" "), s("div", { staticClass: "login-footer-bottom" }, [s("span", {}, [this._v("登录即代表您已同意亿成隐私政策")])])]);
      }] };var lt = i("Z0/y")(rt, ct, !1, function (t) {
      i("Wshz");
    }, "data-v-33aeb194", null).exports,
        dt = { name: "register", data: function data() {
        return { message: "", HideModal: !0, username1: "", username1ErrText: "", username1State: !1, password1: "", password1ErrText: "", password1State: !1, password2: "", password2ErrText: "", password2State: !1, email: "", emailErrText: "", emailState: !1, phone: "", phoneErrText: "", phoneState: !1 };
      }, components: { Modal: b }, methods: { username1Blur: function username1Blur(t) {
          var s = t;0 === s.length ? this.username1ErrText = "用户名不能为空" : s.length < 3 ? this.username1ErrText = "用户名至少为3位" : (this.username1ErrText = "", this.username1State = !0);
        }, username1Focus: function username1Focus(t) {
          0 === t.length && (this.username1ErrText = "请填写至少4位的用户名");
        }, password1Blur: function password1Blur(t) {
          var s = t;0 === s.length ? this.password1ErrText = "密码不能为空" : s.length < 6 ? this.password1ErrText = "密码不能少于6位" : (this.password1ErrText = "", this.password1State = !0);
        }, password1Focus: function password1Focus(t) {
          0 === t.length && (this.password1ErrText = "请填写至少6位密码");
        }, password2Blur: function password2Blur(t) {
          var s = this.password1;0 === t.length ? this.password2ErrText = "确认密码不能为空" : t.length > 0 && t !== s ? this.password2ErrText = "两次密码不一样" : (this.password2ErrText = "", this.password2State = !0);
        }, password2Focus: function password2Focus(t) {
          0 === t.length && (this.password2ErrText = "请填写确认密码");
        }, emailBlur: function emailBlur(t) {
          var s = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(t);0 === t.length ? this.emailErrText = "邮箱不能为空" : t.length > 0 && !1 === s ? this.emailErrText = "邮箱格式错误" : (this.emailErrText = "", this.emailState = !0);
        }, emailFocus: function emailFocus(t) {
          0 === t.length && (this.emailErrText = "请填写邮箱");
        }, phoneBlur: function phoneBlur(t) {
          var s = /^1[34578][0-9]{9}$/.test(t);0 === t.length ? this.phoneErrText = "手机号不能为空" : !1 === s ? this.phoneErrText = "手机号格式不正确" : (this.phoneErrText = "", this.phoneState = !0);
        }, phoneFocus: function phoneFocus(t) {
          0 === t.length && (this.phoneErrText = "请填写手机号");
        }, backHome: function backHome() {
          this.$router.push({ path: "/login" });
        }, register: function register() {
          var t = this;if (!0 === this.username1State && !0 === this.password1State && !0 === this.password2State && !0 === this.emailState && !0 === this.phoneState) {
            var s = q();p.a.post("/api/userRegister", { username1: this.username1, password1: this.password1, password2: this.password2, email: this.email, phone: this.phone, time: s }).then(function (s) {
              if ("1" === s.data) {
                t.message = "注册成功", t.HideModal = !1;var i = t;setTimeout(function () {
                  i.message = "", i.HideModal = !0, i.$router.push({ path: "/Login" });
                }, 2e3);
              } else if ("2" === s.data) {
                t.message = "该用户已经注册", t.HideModal = !1;var e = t;setTimeout(function () {
                  e.message = "", e.HideModal = !0, e.username1 = "";
                }, 2e3);
              } else if ("-1" === s.data) {
                t.message = "注册失败", t.HideModal = !1;var a = t;setTimeout(function () {
                  a.message = "", a.HideModal = !0;
                }, 2e3);
              }
            }).catch(function (t) {
              console.log(t);
            });
          } else {
            this.message = "信息填写不正确", this.HideModal = !1;var i = this;setTimeout(function () {
              i.message = "", i.HideModal = !0, i.$router.push({ path: "/Login" });
            }, 2e3);
          }
        } } },
        vt = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { attrs: { id: "register" } }, [i("header", { staticClass: "register-header" }, [i("i", { staticClass: "iconfont icon-left-trangle", on: { click: t.backHome } }), t._v(" "), i("h3", [t._v("亿成用户注册")])]), t._v(" "), i("main", { staticClass: "register-main" }, [i("section", [i("div", { staticClass: "input-div" }, [i("div", {}, [t._v("用户名:")]), t._v(" "), i("div", {}, [i("input", { directives: [{ name: "model", rawName: "v-model", value: t.username1, expression: "username1" }], attrs: { type: "text", placeholder: "请输入用户名" }, domProps: { value: t.username1 }, on: { blur: function blur(s) {
              t.username1Blur(t.username1);
            }, focus: function focus(s) {
              t.username1Focus(t.username1);
            }, input: function input(s) {
              s.target.composing || (t.username1 = s.target.value);
            } } })])]), t._v(" "), i("div", { staticClass: "errText" }, [t._v("\n        " + t._s(t.username1ErrText) + "\n      ")])]), t._v(" "), i("section", [i("div", { staticClass: "input-div" }, [i("div", {}, [t._v("密码:")]), t._v(" "), i("div", {}, [i("input", { directives: [{ name: "model", rawName: "v-model", value: t.password1, expression: "password1" }], attrs: { type: "password", placeholder: "请输入密码" }, domProps: { value: t.password1 }, on: { blur: function blur(s) {
              t.password1Blur(t.password1);
            }, focus: function focus(s) {
              t.password1Focus(t.password1);
            }, input: function input(s) {
              s.target.composing || (t.password1 = s.target.value);
            } } })])]), t._v(" "), i("div", { staticClass: "errText" }, [t._v("\n        " + t._s(t.password1ErrText) + "\n      ")])]), t._v(" "), i("section", [i("div", { staticClass: "input-div" }, [i("div", {}, [t._v("确认密码:")]), t._v(" "), i("div", {}, [i("input", { directives: [{ name: "model", rawName: "v-model", value: t.password2, expression: "password2" }], attrs: { type: "password", placeholder: "请输入确认密码" }, domProps: { value: t.password2 }, on: { blur: function blur(s) {
              t.password2Blur(t.password2);
            }, focus: function focus(s) {
              t.password2Focus(t.password2);
            }, input: function input(s) {
              s.target.composing || (t.password2 = s.target.value);
            } } })])]), t._v(" "), i("div", { staticClass: "errText" }, [t._v("\n        " + t._s(t.password2ErrText) + "\n      ")])]), t._v(" "), i("section", [i("div", { staticClass: "input-div" }, [i("div", {}, [t._v("邮箱:")]), t._v(" "), i("div", {}, [i("input", { directives: [{ name: "model", rawName: "v-model", value: t.email, expression: "email" }], attrs: { type: "text", placeholder: "请输入邮箱" }, domProps: { value: t.email }, on: { blur: function blur(s) {
              t.emailBlur(t.email);
            }, focus: function focus(s) {
              t.emailFocus(t.email);
            }, input: function input(s) {
              s.target.composing || (t.email = s.target.value);
            } } })])]), t._v(" "), i("div", { staticClass: "errText" }, [t._v("\n        " + t._s(t.emailErrText) + "\n      ")])]), t._v(" "), i("section", [i("div", { staticClass: "input-div" }, [i("div", {}, [t._v("手机号:")]), t._v(" "), i("div", {}, [i("input", { directives: [{ name: "model", rawName: "v-model", value: t.phone, expression: "phone" }], attrs: { type: "text", placeholder: "请输入手机号" }, domProps: { value: t.phone }, on: { blur: function blur(s) {
              t.phoneBlur(t.phone);
            }, focus: function focus(s) {
              t.phoneFocus(t.phone);
            }, input: function input(s) {
              s.target.composing || (t.phone = s.target.value);
            } } })])]), t._v(" "), i("div", { staticClass: "errText" }, [t._v("\n        " + t._s(t.phoneErrText) + "\n      ")])]), t._v(" "), i("modal", { attrs: { msg: t.message, isHideModal: t.HideModal } })], 1), t._v(" "), i("footer", { staticClass: "register-footer" }, [i("div", { on: { click: t.register } }, [i("span", [t._v("点击注册")])])])]);
      }, staticRenderFns: [] };var ut = i("Z0/y")(dt, vt, !1, function (t) {
      i("OahG");
    }, "data-v-3530d15a", null).exports,
        pt = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { class: { confirm: t.showHideConfirm } }, [i("div", { staticClass: "ysx-confirm" }, [i("div", { staticClass: "confirm-div" }, [i("div", { staticClass: "confirm-div-top" }, [t._v("\n        " + t._s(t.confirmMessage) + "\n      ")]), t._v(" "), i("div", { staticClass: "confirm-div-bottom" }, [i("div", { staticClass: "confirm-div-bottom-left", on: { click: function click(s) {
              t.userConfirm();
            } } }, [t._v("确认")]), t._v(" "), i("div", { staticClass: "confirm-div-bottom-right", on: { click: function click(s) {
              t.userCancel();
            } } }, [t._v("取消")])])])])]);
      }, staticRenderFns: [] };var mt = { components: { SearchNavbar: c, Confirm: i("Z0/y")({ name: "confirm", data: function data() {
            return { confirm1: "", showHideConfirm1: "" };
          }, methods: { userConfirm: function userConfirm() {
              this.confirm1 = !0, this.$emit("ConfirmEvent", this.confirm1);
            }, userCancel: function userCancel() {
              this.showHideConfirm1 = !0, this.$emit("hideConfirm", this.showHideConfirm1);
            } }, props: ["confirmMessage", "showHideConfirm"] }, pt, !1, function (t) {
          i("DwU0");
        }, "data-v-013b16a6", null).exports, Loading: v, Modal: b }, name: "shoppingCart", data: function data() {
        return { imgs: [], message: "", HideModal: !0, CartLength: "", goodsCartLength: "", showHideConfirm: !0, confirmMessage: "确认删除", index: "", confirm: !1, goodsCart: [], goodsPrice: 0, allGoodsPrice: 0, allGoodsNumber: 0, allSelect: !0, allSelectState: !1, oneSelect: !1, oneGoodsPrice: 0, oneGoodsNumber: 0, orderList: [], shoppingCartState: !1 };
      }, mounted: function mounted() {}, created: function created() {
        var t = this;this._getShoppingCart(), setTimeout(function () {
          t._getBanner();
        }, 1e3);
      }, methods: { _getBanner: function _getBanner() {
          var t = this;p.a.get("/api/banner").then(function (s) {
            t.imgs = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        }, _getShoppingCart: function _getShoppingCart() {
          var t = this;if (null === localStorage.getItem("ShoppingCart")) this.CartLength = 0;else if (this.CartLength = 1, null === sessionStorage.getItem("userInfo")) {
            var s = localStorage.getItem("ShoppingCart");s = JSON.parse(s.substr(1, s.length)), this.goodsCart = s.productlist, this.goodsPrice = this.goodsCart[0].num * this.goodsCart[0].price, this.goodsNumber = this.goodsCart[0].num, this.allGoodsPrice = s.totalAmount, this.allGoodsNumber = s.totalNumber;
          } else {
            var i = localStorage.getItem("ShoppingCart");i = JSON.parse(i.substr(1, i.length)), p.a.post("/api/shoppingCart", { shoppingCart: i }).then(function (s) {
              t.goodsCart = s.data.productlist, t.goodsPrice = t.goodsCart[0].num * t.goodsCart[0].price, t.allGoodsPrice = s.data.totalAmount, t.allGoodsNumber = s.data.totalNumber;
            }).catch(function (t) {
              console.log(t);
            });
          }
        }, hideConfirm: function hideConfirm(t) {
          this.showHideConfirm = t;
        }, confirmEvent: function confirmEvent(t) {
          this.confirm = t, this.showHideConfirm = t;var s = this.index;if (!0 === this.confirm) if (null === sessionStorage.getItem("userInfo")) {
            var i = this.goodsCart[s].id,
                e = localStorage.getItem("ShoppingCart"),
                a = JSON.parse(e.substr(1, e.length)),
                n = a.productlist;if (n.length > 1) {
              var o = [];for (var r in n) {
                n[r].id === i ? (a.totalNumber = parseInt(a.totalNumber) - parseInt(n[r].num), a.totalAmount = parseFloat(a.totalAmount) - parseInt(n[r].num) * parseFloat(n[r].price)) : o.push(n[r]);
              }a.productlist = o, localStorage.setItem("ShoppingCart", "'" + A()(a)), k();var c = localStorage.getItem("ShoppingCart");c = JSON.parse(c.substr(1, c.length)), this.allGoodsPrice = c.totalAmount, this.allGoodsNumber = c.totalNumber, this.goodsCart.splice(s, 1);
            } else 1 === n.length && (this.goodsCart.splice(s, 1), localStorage.clear("ShoppingCart"));
          } else {
            var l = this.goodsCart[s].id,
                d = localStorage.getItem("ShoppingCart"),
                v = JSON.parse(d.substr(1, d.length)),
                u = v.productlist;if (u.length > 1) {
              var p = [];for (var m in u) {
                u[m].id === l ? (v.totalNumber = parseInt(v.totalNumber) - parseInt(u[m].num), v.totalAmount = parseFloat(v.totalAmount) - parseInt(u[m].num) * parseFloat(u[m].price)) : p.push(u[m]);
              }v.productlist = p, localStorage.setItem("ShoppingCart", "'" + A()(v)), k();var h = localStorage.getItem("ShoppingCart");h = JSON.parse(h.substr(1, h.length)), this.allGoodsPrice = h.totalAmount, this.allGoodsNumber = h.totalNumber, this.goodsCart.splice(s, 1);
            } else 1 === u.length && (this.goodsCart.splice(s, 1), localStorage.clear("ShoppingCart"));
          }
        }, deleteGoods: function deleteGoods(t) {
          this.showHideConfirm = !1, this.index = t;
        }, addGoods: function addGoods(t) {
          if (this.allSelect = !0, this.oneSelect = !1, null === sessionStorage.getItem("userInfo")) {
            var s = this.goodsCart[t].id;I(t, this.goodsCart[t].img, this.goodsCart[t].title, this.goodsCart[t].price, s), this.goodsCart[t].num++, this.goodsPrice = this.goodsCart[0].num * this.goodsCart[0].price;var i = localStorage.getItem("ShoppingCart");i = JSON.parse(i.substr(1, i.length)), this.allGoodsPrice = i.totalAmount, this.allGoodsNumber = i.totalNumber;
          } else {
            var e = this.goodsCart[t].id;I(t, this.goodsCart[t].img, this.goodsCart[t].title, this.goodsCart[t].price, e), k(), this.goodsCart[t].num++, this.goodsPrice = this.goodsCart[0].num * this.goodsCart[0].price;var a = localStorage.getItem("ShoppingCart");a = JSON.parse(a.substr(1, a.length)), this.allGoodsPrice = a.totalAmount, this.allGoodsNumber = a.totalNumber;
          }
        }, minusGoods: function minusGoods(t) {
          if (this.allSelect = !0, this.oneSelect = !1, this.goodsCart[t].num > 1) {
            var s = this.goodsCart[t].id,
                i = localStorage.getItem("ShoppingCart"),
                e = JSON.parse(i.substr(1, i.length)),
                a = e.productlist;a[t].id === s && a[t].num--, e.totalNumber > 1 && (e.totalNumber = parseInt(e.totalNumber) - 1), e.totalAmount > a[t].price && (e.totalAmount = parseFloat(e.totalAmount) - parseFloat(a[t].price)), localStorage.setItem("ShoppingCart", "'" + A()(e)), this.goodsCart[t].num--, this.goodsPrice = this.goodsCart[0].num * this.goodsCart[0].price;var n = localStorage.getItem("ShoppingCart");n = JSON.parse(n.substr(1, n.length)), this.allGoodsPrice = n.totalAmount, this.allGoodsNumber = n.totalNumber;
          } else if (this.goodsCart[t].num > 1) {
            var o = this.goodsCart[t].id,
                r = localStorage.getItem("ShoppingCart"),
                c = JSON.parse(r.substr(1, r.length)),
                l = c.productlist;l[t].id === o && l[t].num--, c.totalNumber > 1 && (c.totalNumber = parseInt(c.totalNumber) - 1), c.totalAmount > l[t].price && (c.totalAmount = parseFloat(c.totalAmount) - parseFloat(l[t].price)), localStorage.setItem("ShoppingCart", "'" + A()(c)), k(), this.goodsCart[t].num--, this.goodsPrice = this.goodsCart[0].num * this.goodsCart[0].price;var d = localStorage.getItem("ShoppingCart");d = JSON.parse(d.substr(1, d.length)), this.allGoodsPrice = d.totalAmount, this.allGoodsNumber = d.totalNumber;
          }
        }, oneChange: function oneChange(t, s, i) {
          this.oneSelect = !0, this.allSelect = !1, this.shoppingCartState = !1;var e = this.$refs.xuanze,
              a = this.$refs.allChange;if ("iconfont icon-xuanze" === e[t].className) {
            e[t].className = "iconfont icon-xuanze1", this.oneGoodsNumber -= s, this.oneGoodsPrice -= i, this.orderList.splice(t, 1);for (var n = 0; n < e.length; n++) {
              "iconfont icon-xuanze1" === e[n].className && (a.className = "iconfont icon-xuanze1", this.allSelectState = !1);
            }
          } else if ("iconfont icon-xuanze1" === e[t].className) {
            e[t].className = "iconfont icon-xuanze", this.shoppingCartState = !0, this.oneGoodsNumber += s, this.oneGoodsPrice += i;var o = localStorage.getItem("ShoppingCart"),
                r = (o = JSON.parse(o.substr(1, o.length))).productlist[t];this.orderList.push(r);for (var c = 0; c < e.length; c++) {
              if (e[c].className !== e[0].className) a.className = "iconfont icon-xuanze1";else for (var l = c; l > 0; l--) {
                e[c].className === e[l].className ? a.className = "iconfont icon-xuanze" : a.className = "iconfont icon-xuanze1";
              }
            }
          }
        }, allchange: function allchange() {
          var t = this.$refs.xuanze,
              s = this.$refs.allChange;if ("iconfont icon-xuanze1" === s.className) {
            s.className = "iconfont icon-xuanze";for (var i = 0; i < t.length; i++) {
              t[i].className = "iconfont icon-xuanze";
            }this.allSelect = !0, this.oneSelect = !1, this.allSelectState = !0, this.oneGoodsNumber = this.allGoodsNumber, this.oneGoodsPrice = this.allGoodsPrice, this.shoppingCartState = !0;
          } else if ("iconfont icon-xuanze" === s.className) {
            s.className = "iconfont icon-xuanze1", this.shoppingCartState = !1;for (var e = 0; e < t.length; e++) {
              t[e].className = "iconfont icon-xuanze1";
            }this.allSelect = !1, this.oneSelect = !0, this.allSelectState = !1, this.oneGoodsNumber = 0, this.oneGoodsPrice = 0;
          }
        }, followGoods: function followGoods(t, s, i, e, a, n) {
          var o = this;if (null === sessionStorage.getItem("userInfo")) {
            this.message = "登录才能收藏", this.HideModal = !1;var r = this;setTimeout(function () {
              r.message = "", r.HideModal = !0;
            }, 2e3);
          } else {
            var c = this.goodsCart[t].id,
                l = localStorage.getItem("ShoppingCart"),
                d = JSON.parse(l.substr(1, l.length)),
                v = d.productlist;if (v.length > 1) {
              var u = [];for (var m in v) {
                v[m].id === c ? (d.totalNumber = parseInt(d.totalNumber) - parseInt(v[m].num), d.totalAmount = parseFloat(d.totalAmount) - parseInt(v[m].num) * parseFloat(v[m].price)) : u.push(v[m]);
              }d.productlist = u, localStorage.setItem("ShoppingCart", "'" + A()(d)), k();var h = localStorage.getItem("ShoppingCart");h = JSON.parse(h.substr(1, h.length)), this.allGoodsPrice = h.totalAmount, this.allGoodsNumber = h.totalNumber, this.goodsCart.splice(t, 1);
            } else 1 === v.length && localStorage.clear("ShoppingCart");var g = { img: s, title: i, goodsPrice: e, num: a, id: c };p.a.post("/api/setFollowGoods", { FollowGoods: g }).then(function (s) {
              if ("1" === s.data) {
                o.message = "收藏成功", o.HideModal = !1;var i = o;setTimeout(function () {
                  i.message = "", i.HideModal = !0, i.goodsCart.splice(t, 1);
                }, 2e3);
              } else if ("-1" === s.data) {
                o.message = "收藏失败", o.HideModal = !1;var e = o;setTimeout(function () {
                  e.message = "", e.HideModal = !0, e.goodsCart.splice(t, 1);
                }, 2e3);
              } else if ("-2" === s.data) {
                o.message = "登录才能收藏", o.HideModal = !1;var a = o;setTimeout(function () {
                  a.message = "", a.HideModal = !0;
                }, 2e3);
              }
            }).catch(function (t) {
              console.log(t);
            });
          }
        }, gotoJS: function gotoJS() {
          if (!0 === this.shoppingCartState) {
            if (!0 === this.allSelectState) {
              var t = localStorage.getItem("ShoppingCart"),
                  s = (t = JSON.parse(t.substr(1, t.length))).productlist,
                  i = t.totalAmount;this.$router.push({ path: "/cartProduct/", query: { productList: s, totalAmount: i } });
            } else this.$router.push({ path: "/cartProduct/", query: { productList: this.orderList, totalAmount: this.oneGoodsPrice } });
          } else {
            this.message = "请选择商品", this.HideModal = !1;var e = this;setTimeout(function () {
              e.message = "", e.HideModal = !0;
            }, 2e3);
          }
        } } },
        ht = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { staticClass: "myShoppingCart" }, [i("div", { directives: [{ name: "show", rawName: "v-show", value: 0 === t.CartLength, expression: "CartLength===0" }], staticClass: "noShoppingCart" }, [i("search-navbar"), t._v(" "), t._m(0)], 1), t._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: 1 === t.CartLength, expression: "CartLength===1" }], attrs: { id: "shoppingCart" } }, [i("search-navbar"), t._v(" "), i("section", { staticClass: "goodsList" }, t._l(t.goodsCart, function (s, e) {
          return i("div", { staticClass: "goodsList-template" }, [i("div", { staticClass: "goodsList-templatel-left" }, [i("i", { ref: "xuanze", refInFor: !0, staticClass: "iconfont icon-xuanze1", on: { click: function click(i) {
                t.oneChange(e, s.num, s.price);
              } } })]), t._v(" "), i("div", { staticClass: "goodsList-template-center" }, [i("img", { attrs: { src: s.img } })]), t._v(" "), i("div", { staticClass: "goodsList-template-right" }, [i("div", { staticClass: "right-top" }, [i("p", { staticClass: "right-top-title" }, [t._v(t._s(s.title))])]), t._v(" "), i("div", { staticClass: "right-center" }, [i("span", { staticClass: "right-center-price" }, [t._v("价格：￥" + t._s(t.goodsPrice))])]), t._v(" "), i("div", { staticClass: "right-bottom" }, [i("div", { staticClass: "right-bottom-addMinus" }, [i("span", { staticClass: "add", on: { click: function click(s) {
                t.minusGoods(e);
              } } }, [t._v("-")]), t._v(" "), i("span", { ref: "numberGoods", refInFor: !0, staticClass: "number" }, [t._v(t._s(s.num))]), t._v(" "), i("span", { staticClass: "Minus", on: { click: function click(s) {
                t.addGoods(e);
              } } }, [t._v("+")])]), t._v(" "), i("div", [i("span", { staticClass: "follow", on: { click: function click(i) {
                t.followGoods(e, s.img, s.title, s.price, s.num, s.id);
              } } }, [t._v("\n                 移到收藏\n              ")]), t._v(" "), i("span", { staticClass: "delete", on: { click: function click(s) {
                t.deleteGoods(e);
              } } }, [t._v("删除")])])])])]);
        })), t._v(" "), i("section", { staticClass: "cart-footer" }, [i("div", { staticClass: "cart-footer-left" }, [i("i", { ref: "allChange", staticClass: "iconfont icon-xuanze1" }), t._v(" "), i("span", { on: { click: t.allchange } }, [t._v("全选")])]), t._v(" "), i("div", { staticClass: "cart-footer-center" }, [i("div", { directives: [{ name: "show", rawName: "v-show", value: !0 === t.oneSelect, expression: "oneSelect===true" }] }, [i("div", {}, [i("span", [t._v("一共")]), t._v(" "), i("span", { ref: "zg" }, [t._v(t._s(t.oneGoodsNumber) + "件")])]), t._v(" "), i("div", {}, [i("span", [t._v("总价")]), t._v(" "), i("span", { ref: "zj" }, [t._v(t._s(t.oneGoodsPrice) + "元")])])]), t._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: !0 === t.allSelect, expression: "allSelect===true" }] }, [i("div", {}, [i("span", [t._v("一共")]), t._v(" "), i("span", { ref: "zg" }, [t._v(t._s(t.allGoodsNumber) + "件")])]), t._v(" "), i("div", {}, [i("span", [t._v("总价")]), t._v(" "), i("span", { ref: "zj" }, [t._v(t._s(t.allGoodsPrice) + "元")])])])]), t._v(" "), i("div", { staticClass: "cart-footer-right" }, [i("span", { on: { click: t.gotoJS } }, [t._v("结算")])])]), t._v(" "), i("confirm", { attrs: { confirmMessage: t.confirmMessage, showHideConfirm: t.showHideConfirm }, on: { hideConfirm: t.hideConfirm, ConfirmEvent: t.confirmEvent } }), t._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: !t.imgs.length, expression: "!imgs.length" }], staticClass: "loading-container" }, [i("loading")], 1), t._v(" "), i("modal", { attrs: { msg: t.message, isHideModal: t.HideModal } })], 1)]);
      }, staticRenderFns: [function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "noShoppingCart-bottom" }, [s("img", { attrs: { src: i("R9n1"), alt: "" } }), this._v("\n      购物车为空\n    ")]);
      }] };var gt = i("Z0/y")(mt, ht, !1, function (t) {
      i("8PXj");
    }, "data-v-731682a4", null).exports,
        ft = (i("du6P"), { name: "szUserInfo", props: ["isSzUserInfo", "showHideSzUserInfo"], components: { Modal: b }, data: function data() {
        return { croppa: {}, avatar: "", message: "", HideModal: !0, age: "", ageState: !1, ageErrText: "", isAgeErrText: !1, sex: "", sexState: !1, sexErrText: "", isSexErrText: !1, id: "", idState: !1, idErrText: "", isIdErrText: !1, phone: "", phoneState: !1, phoneErrText: "", isPhoneErrText: !1, email: "", emailState: !1, emailErrText: "", isEmailErrText: !1, password1: "", password2: "", password3: "", passwordState: !1, isPassword: !0, password1ErrText: "", password2ErrText: "", password3ErrText: "", isPassword1ErrText: !1, isPassword2ErrText: !1, isPassword3ErrText: !1, isHSAvatar: !0, isPhone: !0, isSex: !0, isAge: !0, isId: !0, isEmail: !0 };
      }, created: function created() {
        this._getUserInfo();
      }, methods: { _getUserInfo: function _getUserInfo() {
          var t = this;p.a.get("/api/getUserInfo").then(function (s) {
            t.avatar = s.data.avatar, t.age = s.data.age, t.sex = s.data.sex, t.id = s.data.name, t.email = s.data.email, t.phone = s.data.phone;
          }).catch(function (t) {
            console.log(t);
          });
        }, goToBlack: function goToBlack() {
          this.isSzUserInfo1 = !0, this.$emit("showHideSzUserInfo", this.isSzUserInfo1);
        }, onInit: function onInit() {
          this.croppa.addClipPlugin(function (t, s, i, e, a) {
            t.beginPath(), t.arc(s + e / 2, i + a / 2, e / 2, 0, 2 * Math.PI, !0), t.closePath();
          });
        }, SHAvatar: function SHAvatar() {
          this.isHSAvatar = !1;
        }, backFirst: function backFirst() {
          this.isHSAvatar = !0;
        }, uploadAvatar: function uploadAvatar() {
          this.croppa.hasImage() ? this.croppa.generateBlob(function (t) {
            var s = new FormData();s.append("file", t), s.append("other", "blahblahblah"), console.log(s);
          }) : alert("还没有上传图片");
        }, changeSex: function changeSex() {
          !0 === this.isSex ? this.isSex = !1 : !1 === this.isSex && (this.isSex = !0);
        }, changeAge: function changeAge() {
          !0 === this.isAge ? this.isAge = !1 : !1 === this.isAge && (this.isAge = !0);
        }, changeId: function changeId() {
          !0 === this.isId ? this.isId = !1 : !1 === this.isId && (this.isId = !0);
        }, changePhone: function changePhone() {
          !0 === this.isPhone ? this.isPhone = !1 : !1 === this.isPhone && (this.isPhone = !0);
        }, changeEmail: function changeEmail() {
          !0 === this.isEmail ? this.isEmail = !1 : !1 === this.isEmail && (this.isEmail = !0);
        }, changePassword: function changePassword() {
          !0 === this.isPassword ? this.isPassword = !1 : !1 === this.isPassword && (this.isPassword = !0);
        }, phoneBlur: function phoneBlur(t) {
          var s = /^1[34578][0-9]{9}$/.test(t);0 === t.length ? (this.isPhoneErrText = !0, this.phoneErrText = "手机号不能为空") : !1 === s ? (this.isPhoneErrText = !0, this.phoneErrText = "手机号格式不正确") : (this.phoneErrText = "", this.isPhoneErrText = !1, this.phoneState = !0);
        }, emailBlur: function emailBlur(t) {
          var s = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(t);0 === t.length ? (this.isPhoneErrText = !0, this.emailErrText = "邮箱不能为空", this.isEmailErrText = !0) : t.length > 0 && !1 === s ? (this.isPhoneErrText = !0, this.emailErrText = "邮箱格式错误", this.isEmailErrText = !0) : (this.emailErrText = "", this.isEmailErrText = !1, this.emailState = !0);
        }, idBlur: function idBlur(t) {
          0 === t.length ? (this.isIdErrText = !0, this.idErrText = "ID不能为空") : t.length < 2 ? (this.idErrText = "ID至少为2位", this.isIdErrText = !0) : (this.idErrText = "", this.idState = !0, this.isIdErrText = !1);
        }, sexBlur: function sexBlur(t) {
          0 === t.length ? (this.sexErrText = "性别不能为空", this.isSexErrText = !0) : "男" === t || "女" === t ? (this.sexErrText = "", this.sexState = !0, this.isSexErrText = !1) : (this.sexErrText = "性别只能为男或女", this.isSexErrText = !0);
        }, ageBlur: function ageBlur(t) {
          0 === t.length ? (this.ageErrText = "年龄不能为空", this.isAgeErrText = !0) : (this.ageErrText = "", this.ageState = !0, this.isAgeErrText = !1);
        }, password1Blur: function password1Blur(t) {
          0 === t.length ? (this.password1ErrText = "密码不能为空", this.isPassword1ErrText = !0) : t.length < 6 ? (this.password1ErrText = "密码不能少于6位", this.isPassword1ErrText = !0) : (this.password1ErrText = "", this.isPassword1ErrText = !1);
        }, password2Blur: function password2Blur(t) {
          var s = this.password3;0 === t.length ? (this.password2ErrText = "确认密码不能为空", this.isPassword2ErrText = !0) : t.length > 0 && t !== s ? (this.password2ErrText = "两次密码不一样", this.isPassword2ErrText = !0) : (this.password2ErrText = "", this.passwordState = !0, this.isPassword2ErrText = !0);
        }, password3Blur: function password3Blur(t) {
          0 === t.length ? (this.password3ErrText = "密码不能为空", this.isPassword3ErrText = !0) : t.length < 6 ? (this.password3ErrText = "密码不能少于6位", this.isPassword3ErrText = !0) : (this.password3ErrText = "", this.isPassword3ErrText = !1);
        }, setSex: function setSex() {
          var t = this;if (!0 === this.sexState) p.a.post("/api/UserChangeSex", { sex: this.sex }).then(function (s) {
            if ("1" === s.data) {
              t.message = "修改成功", t.HideModal = !1;var i = t;setTimeout(function () {
                i.message = "", i.HideModal = !0;
              }, 2e3);
            }
          }).catch(function (t) {
            console.log(t);
          });else {
            this.message = "信息填写错误", this.HideModal = !1;var s = this;setTimeout(function () {
              s.message = "", s.HideModal = !0;
            }, 2e3);
          }
        }, setAge: function setAge() {
          var t = this;if (!0 === this.ageState) p.a.post("/api/UserChangeAge", { age: this.age }).then(function (s) {
            if ("1" === s.data) {
              t.message = "修改成功", t.HideModal = !1;var i = t;setTimeout(function () {
                i.message = "", i.HideModal = !0;
              }, 2e3);
            }
          }).catch(function (t) {
            console.log(t);
          });else {
            this.message = "信息填写错误", this.HideModal = !1;var s = this;setTimeout(function () {
              s.message = "", s.HideModal = !0;
            }, 2e3);
          }
        }, setId: function setId() {
          var t = this;if (!0 === this.idState) p.a.post("/api/UserChangeID", { id: this.id }).then(function (s) {
            if ("1" === s.data) {
              t.message = "修改成功", t.HideModal = !1;var i = t;setTimeout(function () {
                i.message = "", i.HideModal = !0;
              }, 2e3);
            }
          }).catch(function (t) {
            console.log(t);
          });else {
            this.message = "信息填写错误", this.HideModal = !1;var s = this;setTimeout(function () {
              s.message = "", s.HideModal = !0;
            }, 2e3);
          }
        }, setPhone: function setPhone() {
          var t = this;if (!0 === this.phoneState) p.a.post("/api/UserChangePhone", { phone: this.phone }).then(function (s) {
            if ("1" === s.data) {
              t.message = "修改成功", t.HideModal = !1;var i = t;setTimeout(function () {
                i.message = "", i.HideModal = !0;
              }, 2e3);
            }
          }).catch(function (t) {
            console.log(t);
          });else {
            this.message = "信息填写错误", this.HideModal = !1;var s = this;setTimeout(function () {
              s.message = "", s.HideModal = !0;
            }, 2e3);
          }
        }, setEmail: function setEmail() {
          var t = this;if (!0 === this.emailState) p.a.post("/api/UserChangeEmail", { email: this.email }).then(function (s) {
            if ("1" === s.data) {
              t.message = "修改成功", t.HideModal = !1;var i = t;setTimeout(function () {
                i.message = "", i.HideModal = !0;
              }, 2e3);
            }
          }).catch(function (t) {
            console.log(t);
          });else {
            this.message = "信息填写错误", this.HideModal = !1;var s = this;setTimeout(function () {
              s.message = "", s.HideModal = !0;
            }, 2e3);
          }
        }, setPassword: function setPassword() {
          var t = this;if (!0 === this.passwordState) p.a.post("/api/UserChangePassWord", { password1: this.password1, password2: this.password2 }).then(function (s) {
            if ("1" === s.data) {
              t.message = "修改成功", t.HideModal = !1;var i = t;setTimeout(function () {
                i.message = "", i.HideModal = !0;
              }, 2e3);
            }
          }).catch(function (t) {
            console.log(t);
          });else {
            this.message = "信息填写错误", this.HideModal = !1;var s = this;setTimeout(function () {
              s.message = "", s.HideModal = !0;
            }, 2e3);
          }
        } } }),
        _t = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { class: { szUserInfo: t.isSzUserInfo } }, [i("div", { staticClass: "szUserInfo-div" }, [i("div", { staticClass: "szUserInfo-div-top" }, [i("i", { staticClass: "iconfont icon-left-trangle", on: { click: t.goToBlack } }), t._v(" "), i("span", [t._v("个人信息")])]), t._v(" "), i("div", { staticClass: "szUserInfo-template first" }, [i("div", { staticClass: "szUserInfo-template-left" }, [t._v("头像")]), t._v(" "), i("div", { staticClass: "szUserInfo-template-center" }, [i("img", { staticStyle: { width: "80px", height: "80px", "border-radius": "50%" }, attrs: { src: t.avatar, alt: "" }, on: { click: function click(s) {
              t.croppa.chooseFile(), t.SHAvatar();
            } } })]), t._v(" "), t._m(0)]), t._v(" "), i("div", { staticClass: "szUserInfo-template" }, [i("div", { staticClass: "szUserInfo-template-left" }, [t._v("电话")]), t._v(" "), i("div", { staticClass: "szUserInfo-template-center", on: { click: t.changePhone } }, [t._v("\n        " + t._s(t.phone) + "\n      ")]), t._v(" "), t._m(1)]), t._v(" "), i("div", { class: { hide: t.isPhone } }, [i("div", { staticClass: "XGInput" }, [i("div", { staticClass: "XGInput-left" }, [t._v("修改电话:")]), t._v(" "), i("div", { staticClass: "XGInput-center" }, [i("input", { directives: [{ name: "model", rawName: "v-model", value: t.phone, expression: "phone" }], attrs: { type: "text" }, domProps: { value: t.phone }, on: { blur: function blur(s) {
              t.phoneBlur(t.phone);
            }, input: function input(s) {
              s.target.composing || (t.phone = s.target.value);
            } } })]), t._v(" "), i("div", { staticClass: "XGInput-right", on: { click: t.setPhone } }, [t._v("\n          提交修改\n        ")])]), t._v(" "), i("div", { class: { errText: t.isPhoneErrText } }, [t._v("\n        " + t._s(t.phoneErrText) + "\n      ")])]), t._v(" "), i("div", { staticClass: "szUserInfo-template" }, [i("div", { staticClass: "szUserInfo-template-left" }, [t._v("邮箱")]), t._v(" "), i("div", { staticClass: "szUserInfo-template-center", on: { click: t.changeEmail } }, [t._v("\n        " + t._s(t.email) + "\n      ")]), t._v(" "), t._m(2)]), t._v(" "), i("div", { class: { hide: t.isEmail } }, [i("div", { staticClass: "XGInput" }, [i("div", { staticClass: "XGInput-left" }, [t._v("修改邮箱:")]), t._v(" "), i("div", { staticClass: "XGInput-center" }, [i("input", { directives: [{ name: "model", rawName: "v-model", value: t.email, expression: "email" }], attrs: { type: "text" }, domProps: { value: t.email }, on: { blur: function blur(s) {
              t.emailBlur(t.email);
            }, input: function input(s) {
              s.target.composing || (t.email = s.target.value);
            } } })]), t._v(" "), i("div", { staticClass: "XGInput-right", on: { click: t.setEmail } }, [t._v("\n          提交修改\n        ")])]), t._v(" "), i("div", { class: { errText: t.isEmailErrText } }, [t._v("\n        " + t._s(t.emailErrText) + "\n      ")])]), t._v(" "), i("div", { staticClass: "szUserInfo-template" }, [i("div", { staticClass: "szUserInfo-template-left" }, [t._v("昵称")]), t._v(" "), 0 === t.id.length ? i("div", { staticClass: "szUserInfo-template-center", on: { click: t.changeId } }, [t._v("\n        修改/添加\n      ")]) : t._e(), t._v(" "), t.id.length > 0 ? i("div", { staticClass: "szUserInfo-template-center", on: { click: t.changeId } }, [t._v("\n        " + t._s(t.id) + "\n      ")]) : t._e(), t._v(" "), t._m(3)]), t._v(" "), i("div", { class: { hide: t.isId } }, [i("div", { staticClass: "XGInput" }, [i("div", { staticClass: "XGInput-left" }, [t._v("修改昵称:")]), t._v(" "), i("div", { staticClass: "XGInput-center" }, [i("input", { directives: [{ name: "model", rawName: "v-model", value: t.id, expression: "id" }], attrs: { type: "text" }, domProps: { value: t.id }, on: { blur: function blur(s) {
              t.idBlur(t.id);
            }, input: function input(s) {
              s.target.composing || (t.id = s.target.value);
            } } })]), t._v(" "), i("div", { staticClass: "XGInput-right", on: { click: t.setId } }, [t._v("\n          提交修改\n        ")])]), t._v(" "), i("div", { class: { errText: t.isIdErrText } }, [t._v("\n        " + t._s(t.idErrText) + "\n      ")])]), t._v(" "), i("div", { staticClass: "szUserInfo-template" }, [i("div", { staticClass: "szUserInfo-template-left" }, [t._v("年龄")]), t._v(" "), 0 === t.age.length ? i("div", { staticClass: "szUserInfo-template-center", on: { click: t.changeAge } }, [t._v("\n        修改/添加\n      ")]) : t._e(), t._v(" "), t.age.length > 0 ? i("div", { staticClass: "szUserInfo-template-center", on: { click: t.changeAge } }, [t._v("\n        " + t._s(t.age) + "\n      ")]) : t._e(), t._v(" "), t._m(4)]), t._v(" "), i("div", { class: { hide: t.isAge } }, [i("div", { staticClass: "XGInput" }, [i("div", { staticClass: "XGInput-left" }, [t._v("修改年龄:")]), t._v(" "), i("div", { staticClass: "XGInput-center" }, [i("input", { directives: [{ name: "model", rawName: "v-model", value: t.age, expression: "age" }], attrs: { type: "number" }, domProps: { value: t.age }, on: { blur: function blur(s) {
              t.ageBlur(t.age);
            }, input: function input(s) {
              s.target.composing || (t.age = s.target.value);
            } } })]), t._v(" "), i("div", { staticClass: "XGInput-right", on: { click: t.setAge } }, [t._v("\n          提交修改\n        ")])]), t._v(" "), i("div", { class: { errText: t.isAgeErrText } }, [t._v("\n        " + t._s(t.ageErrText) + "\n      ")])]), t._v(" "), i("div", { staticClass: "szUserInfo-template" }, [i("div", { staticClass: "szUserInfo-template-left" }, [t._v("性别")]), t._v(" "), 0 === t.sex.length ? i("div", { staticClass: "szUserInfo-template-center", on: { click: t.changeSex } }, [t._v("\n        修改/添加\n      ")]) : t._e(), t._v(" "), t.sex.length > 0 ? i("div", { staticClass: "szUserInfo-template-center", on: { click: t.changeSex } }, [t._v("\n        " + t._s(t.sex) + "\n      ")]) : t._e(), t._v(" "), t._m(5)]), t._v(" "), i("div", { class: { hide: t.isSex } }, [i("div", { staticClass: "XGInput" }, [i("div", { staticClass: "XGInput-left" }, [t._v("修改性别:")]), t._v(" "), i("div", { staticClass: "XGInput-center" }, [i("input", { directives: [{ name: "model", rawName: "v-model", value: t.sex, expression: "sex" }], attrs: { type: "text" }, domProps: { value: t.sex }, on: { blur: function blur(s) {
              t.sexBlur(t.sex);
            }, input: function input(s) {
              s.target.composing || (t.sex = s.target.value);
            } } })]), t._v(" "), i("div", { staticClass: "XGInput-right", on: { click: t.setSex } }, [t._v("\n          提交修改\n        ")])]), t._v(" "), i("div", { class: { errText: t.isSexErrText } }, [t._v("\n        " + t._s(t.sexErrText) + "\n      ")])]), t._v(" "), i("div", { staticClass: "szUserInfo-template" }, [i("div", { staticClass: "szUserInfo-template-left" }, [t._v("密码")]), t._v(" "), i("div", { staticClass: "szUserInfo-template-center", on: { click: t.changePassword } }, [t._v("\n        修改/添加\n      ")]), t._v(" "), t._m(6)]), t._v(" "), i("div", { class: { hide: t.isPassword } }, [i("div", { staticClass: "XGInput" }, [i("div", { staticClass: "XGInput-left" }, [t._v("初始密码:")]), t._v(" "), i("div", { staticClass: "XGInput-center" }, [i("input", { directives: [{ name: "model", rawName: "v-model", value: t.password1, expression: "password1" }], attrs: { type: "password" }, domProps: { value: t.password1 }, on: { blur: function blur(s) {
              t.password1Blur(t.password1);
            }, input: function input(s) {
              s.target.composing || (t.password1 = s.target.value);
            } } })])]), t._v(" "), i("div", { class: { errText: t.isPassword1ErrText } }, [t._v("\n        " + t._s(t.password1ErrText) + "\n      ")])]), t._v(" "), i("div", { class: { hide: t.isPassword } }, [i("div", { staticClass: "XGInput" }, [i("div", { staticClass: "XGInput-left" }, [t._v("设置密码:")]), t._v(" "), i("div", { staticClass: "XGInput-center" }, [i("input", { directives: [{ name: "model", rawName: "v-model", value: t.password3, expression: "password3" }], attrs: { type: "password" }, domProps: { value: t.password3 }, on: { blur: function blur(s) {
              t.password3Blur(t.password3);
            }, input: function input(s) {
              s.target.composing || (t.password3 = s.target.value);
            } } })])]), t._v(" "), i("div", { class: { errText: t.isPassword3ErrText } }, [t._v("\n        " + t._s(t.password3ErrText) + "\n      ")])]), t._v(" "), i("div", { class: { hide: t.isPassword } }, [i("div", { staticClass: "XGInput" }, [i("div", { staticClass: "XGInput-left" }, [t._v("确认密码:")]), t._v(" "), i("div", { staticClass: "XGInput-center" }, [i("input", { directives: [{ name: "model", rawName: "v-model", value: t.password2, expression: "password2" }], attrs: { type: "password" }, domProps: { value: t.password2 }, on: { blur: function blur(s) {
              t.password2Blur(t.password2);
            }, input: function input(s) {
              s.target.composing || (t.password2 = s.target.value);
            } } })]), t._v(" "), i("div", { staticClass: "XGInput-right", on: { click: t.setPassword } }, [t._v("\n          提交修改\n        ")])]), t._v(" "), i("div", { class: { errText: t.isPassword2ErrText } }, [t._v("\n        " + t._s(t.password2ErrText) + "\n      ")])]), t._v(" "), i("div", { class: { HSAvatar: t.isHSAvatar } }, [i("div", { staticClass: "CZAvatar" }, [i("div", { staticClass: "CZAvatar-top" }, [i("croppa", { attrs: { width: 340, height: 340, "prevent-white-space": "", "disable-click-to-choose": "" }, on: { init: t.onInit }, model: { value: t.croppa, callback: function callback(s) {
              t.croppa = s;
            }, expression: "croppa" } })], 1), t._v(" "), i("div", { staticClass: "CZAvatar-bottom" }, [i("div", { on: { click: t.backFirst } }, [t._v("返回上级")]), t._v(" "), i("div", { on: { click: function click(s) {
              t.croppa.chooseFile();
            } } }, [t._v("从新选择")]), t._v(" "), i("div", { on: { click: t.uploadAvatar } }, [t._v("点击上传")])])])]), t._v(" "), i("modal", { attrs: { msg: t.message, isHideModal: t.HideModal } })], 1)]);
      }, staticRenderFns: [function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "szUserInfo-template-right" }, [s("i", { staticClass: "iconfont icon-right-trangle" })]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "szUserInfo-template-right" }, [s("i", { staticClass: "iconfont icon-right-trangle" })]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "szUserInfo-template-right" }, [s("i", { staticClass: "iconfont icon-right-trangle" })]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "szUserInfo-template-right" }, [s("i", { staticClass: "iconfont icon-right-trangle" })]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "szUserInfo-template-right" }, [s("i", { staticClass: "iconfont icon-right-trangle" })]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "szUserInfo-template-right" }, [s("i", { staticClass: "iconfont icon-right-trangle" })]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "szUserInfo-template-right" }, [s("i", { staticClass: "iconfont icon-right-trangle" })]);
      }] };var wt = { components: { Modal: b, SearchNavbar: c, Loading: v, SzUserInfo: i("Z0/y")(ft, _t, !1, function (t) {
          i("iaOg");
        }, "data-v-3b285e9b", null).exports }, name: "userInfo", data: function data() {
        return { message: "", HideModal: !0, navBar: [{ icon: "iconfont icon-xingzhuang60kaobei2", text: "收藏" }, { icon: "iconfont icon-yijingpinglun", text: "评论" }, { icon: "iconfont icon-qianbao", text: "钱包" }], Bottom: [{}, {}, {}], dpj: [{ text: "已经评论" }, { text: "待评论" }], twoBottom: [{}, {}], num: 0, num1: 0, avatar: "", username: "", login: "", collect: [], ypl: [], yplTime: "", wplTime: "", wpl: [], info: [], ye: "", isSzUserInfo: !0 };
      }, created: function created() {
        var t = this;this._getUserCollect(), setTimeout(function () {
          t._getUserInfo();
        }, 1e3);
      }, methods: { _getUserCollect: function _getUserCollect() {
          if (null === sessionStorage.getItem("userInfo")) console.log("用户还没有登录");else {
            var t = sessionStorage.getItem("userInfo");t = JSON.parse(t), this.login = t.state, this.avatar = t.avatar, this.username = t.username;
          }
        }, _getUserInfo: function _getUserInfo() {
          var t = this;"1" === this.login && p.a.all([p.a.post("/api/userOrderPJ"), p.a.post("/api/userBalance"), p.a.post("/api/getFollowGoods")]).then(p.a.spread(function (s, i, e) {
            if (s.data.length > 0) {
              for (var a = s.data, n = [], o = [], r = 0; r < a.length; r++) {
                "未评价" === a[r].orderState ? o.push(a[r]) : "已评价" === a[r].orderState && n.push(a[r]);
              }n.length > 0 && (t.ypl = n[0].orderDetail, t.yplTime = n[0].orderTime), o.length > 0 && (t.wpl = o[0].orderDetail, t.wplTime = o[0].orderTime);
            }t.ye = i.data, t.collect = e.data;
          })).catch(function (t) {
            console.log(t);
          });
        }, szUserInfo: function szUserInfo() {
          this.isSzUserInfo = !1;
        }, showHideSzUserInfo: function showHideSzUserInfo(t) {
          this.isSzUserInfo = t;
        }, tab: function tab(t) {
          this.num = t;
        }, tab1: function tab1(t) {
          this.num1 = t;
        }, goToGoods: function goToGoods(t) {
          console.log(t);
        }, deleteGoods: function deleteGoods(t) {
          var s = this;p.a.post("/api/deleteFollowGoods", { index: t }).then(function (i) {
            if ("1" === i.data) {
              s.message = "删除成功", s.HideModal = !1;var e = s;setTimeout(function () {
                e.message = "", e.HideModal = !0, e.collect.splice(t, 1);
              }, 2e3);
            } else if ("-1" === i.data) {
              s.message = "已经加入购物车", s.HideModal = !1;var a = s;setTimeout(function () {
                a.message = "", a.HideModal = !0;
              }, 2e3);
            }
          }).catch(function (t) {
            console.log(t);
          });
        }, gotoLogin: function gotoLogin() {
          this.$router.push({ path: "/Login" });
        }, tx: function tx() {
          alert("1");
        }, cz: function cz() {
          alert("2");
        } } },
        Ct = { render: function render() {
        var t = this,
            s = t.$createElement,
            e = t._self._c || s;return e("div", { staticClass: "buyProductIndex" }, ["1" !== t.login ? e("div", { staticClass: "noLogin" }, [e("img", { attrs: { src: i("R9n1"), alt: "" } }), t._v(" "), e("p", [t._v("您好，登录才查看用户信息 ")]), t._v(" "), e("p", { on: { click: t.gotoLogin } }, [t._v("点击前往登录页")])]) : t._e(), t._v(" "), "1" === t.login ? e("div", { attrs: { id: "userInfo" } }, [e("sz-user-info", { attrs: { isSzUserInfo: t.isSzUserInfo }, on: { showHideSzUserInfo: t.showHideSzUserInfo } }), t._v(" "), e("search-navbar"), t._v(" "), e("div", { staticClass: "mysx-userInfo" }, [e("div", { staticClass: "userInfo-top" }, [e("div", { staticClass: "userInfo-top-top" }, [e("i", { staticClass: "iconfont icon-xiaoxi2" }), t._v(" "), e("i", { staticClass: "iconfont icon-shezhi", on: { click: t.szUserInfo } })]), t._v(" "), e("div", { staticClass: "userInfo-top-bottom" }, [e("img", { attrs: { src: t.avatar, alt: "" }, on: { click: t.szUserInfo } }), t._v(" "), e("div", {}, [e("p", { on: { click: t.szUserInfo } }, [t._v(t._s(t.username))]), t._v(" "), e("p", { on: { click: t.szUserInfo } }, [t._v("个人信息 >")])])])]), t._v(" "), e("div", { staticClass: "userInfo-content" }, [e("div", { staticClass: "userInfo-content-top" }, t._l(t.navBar, function (s, i) {
          return e("div", { class: { border: i === t.num }, on: { click: function click(s) {
                t.tab(i);
              } } }, [e("i", { class: s.icon }), t._v(" "), e("span", { class: { red: i === t.num } }, [t._v(t._s(s.text))])]);
        })), t._v(" "), t._l(t.Bottom, function (s, i) {
          return e("div", { staticClass: "userInfo-content-bottom" }, [e("div", { directives: [{ name: "show", rawName: "v-show", value: 0 == i && i == t.num, expression: "index==0&&index==num" }], staticClass: "bottom-one" }, [0 === t.collect.length ? e("div", { staticClass: "noData" }, [t._v("\n              您暂无收藏\n            ")]) : t._e(), t._v(" "), t.collect.length > 0 ? e("div", {}, t._l(t.collect, function (s, i) {
            return e("div", { staticClass: "scTemplate" }, [e("div", { staticClass: "scTemplate-img", on: { click: function click(s) {
                  t.goToGoods(i);
                } } }, [e("img", { attrs: { src: s.img } })]), t._v(" "), e("div", { staticClass: "scTemplate-goods", on: { click: function click(s) {
                  t.goToGoods(i);
                } } }, [e("p", { staticClass: "title-text" }, [t._v(t._s(s.title))]), t._v(" "), e("p", {}, [t._v("价格：￥" + t._s(s.goodsPrice))]), t._v(" "), e("p", {}, [t._v("数量：" + t._s(s.num))])]), t._v(" "), e("div", { staticClass: "scTemplate-cz" }, [e("p", { on: { click: function click(s) {
                  t.deleteGoods(i);
                } } }, [t._v("移除收藏")])])]);
          })) : t._e()]), t._v(" "), e("div", { directives: [{ name: "show", rawName: "v-show", value: 1 == i && i == t.num, expression: "index==1&&index==num" }], staticClass: "bottom-two" }, [e("div", { staticClass: "bottom-two-top" }, t._l(t.dpj, function (s, i) {
            return e("div", { class: { red: i === t.num1 }, on: { click: function click(s) {
                  t.tab1(i);
                } } }, [t._v("\n                " + t._s(s.text) + "\n              ")]);
          })), t._v(" "), t._l(t.twoBottom, function (s, i) {
            return e("div", { staticClass: "bottom-two-bottom" }, [e("div", { directives: [{ name: "show", rawName: "v-show", value: 0 == i && i == t.num1, expression: "index==0&&index==num1" }], staticClass: "bottom-two-bottom-ypj" }, [0 === t.ypl.length ? e("div", { staticClass: "noData" }, [t._v("\n                  没有已评论订单\n                ")]) : t._e(), t._v(" "), t.ypl.length > 0 ? e("div", {}, t._l(t.ypl, function (s, i) {
              return e("div", { staticClass: "ypj-template" }, [e("div", { staticClass: "template-img" }, [e("img", { staticStyle: { width: "60px", height: "60px" }, attrs: { src: s.img } })]), t._v(" "), e("div", { staticClass: "template-info" }, [e("div", { staticClass: "template-info-top" }, [t._m(0, !0), t._v(" "), e("div", { staticClass: "clearfix template-time" }, [e("span", [t._v(t._s(t.yplTime))])])]), t._v(" "), e("div", { staticClass: "template-content" }, [t._v("\n                        " + t._s(s.pl) + "\n                      ")])])]);
            })) : t._e()]), t._v(" "), e("div", { directives: [{ name: "show", rawName: "v-show", value: 1 == i && i == t.num1, expression: "index==1&&index==num1" }], staticClass: "bottom-two-bottom-wpj" }, [0 === t.ypl.length ? e("div", { staticClass: "noData" }, [t._v("\n                  没有未评论订单\n                ")]) : t._e(), t._v(" "), t.ypl.length > 0 ? e("div", {}, t._l(t.wpl, function (s, i) {
              return e("div", { staticClass: "wpj-template" }, [e("div", { staticClass: "template-img" }, [e("img", { staticStyle: { width: "60px", height: "60px" }, attrs: { src: s.img } })]), t._v(" "), e("div", { staticClass: "template-info" }, [e("div", { staticClass: "template-info-top" }, [e("div", { staticClass: "clearfix template-star" }, [t._v("\n                          " + t._s(s.title) + "\n                        ")]), t._v(" "), e("div", { staticClass: "clearfix template-time" }, [e("span", [t._v("下单时间：" + t._s(t.wplTime))])])]), t._v(" "), e("div", { staticClass: "template-content" }, [t._v("\n                        去评论\n                      ")])])]);
            })) : t._e()])]);
          })], 2), t._v(" "), e("div", { directives: [{ name: "show", rawName: "v-show", value: 2 == i && i == t.num, expression: "index==2&&index==num" }], staticClass: "bottom-three" }, [e("div", {}, [e("i", { staticClass: "iconfont icon-yue" }), e("br"), t._v(" "), e("span", { staticClass: "ye" }, [t._v("￥" + t._s(t.ye))]), t._v(" "), e("p", { on: { click: t.tx } }, [t._v("提现")]), t._v(" "), e("p", { on: { click: t.cz } }, [t._v("充值")])])])]);
        })], 2)]), t._v(" "), e("div", { directives: [{ name: "show", rawName: "v-show", value: 0 === t.ye.length, expression: "ye.length===0" }], staticClass: "loading-container" }, [e("loading")], 1), t._v(" "), e("modal", { attrs: { msg: t.message, isHideModal: t.HideModal } })], 1) : t._e()]);
      }, staticRenderFns: [function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "clearfix template-star" }, [s("i", { staticClass: "iconfont icon-xingzhuang60kaobei2" }), this._v(" "), s("i", { staticClass: "iconfont icon-xingzhuang60kaobei2" }), this._v(" "), s("i", { staticClass: "iconfont icon-xingzhuang60kaobei2" }), this._v(" "), s("i", { staticClass: "iconfont icon-xingzhuang60kaobei2" }), this._v(" "), s("i", { staticClass: "iconfont icon-xingzhuang60kaobei2" })]);
      }] };var xt = i("Z0/y")(wt, Ct, !1, function (t) {
      i("qJdi");
    }, "data-v-578c50e6", null).exports;i("aEDl");var yt = { name: "nearby", components: { SearchNavbar: c, swiper: z.swiper, swiperSlide: z.swiperSlide, Loading: v }, data: function data() {
        return { nearbyImg: [{ img: "http://www.ilqiqi.top/images/mYc/nbi/banner/banner1.jpg" }, { img: "http://www.ilqiqi.top/images/mYc/nbi/banner/banner2.jpg" }, { img: "http://www.ilqiqi.top/images/mYc/nbi/banner/banner3.jpg" }], ImgList: [], swiperOption: { direction: "horizontal", loop: !0, pagination: ".swiper-pagination", prevButton: ".swiper-button-prev", nextButton: ".swiper-button-next", autoplay: 3e3, autoplayDisableOnInteraction: !1 } };
      }, computed: { swiper: function swiper() {
          return this.$refs.mySwiper.swiper;
        } }, created: function created() {
        var t = this;setTimeout(function () {
          t._getBanner();
        }, 1e3);
      }, methods: { _getBanner: function _getBanner() {
          var t = this;p.a.get("/api/mobileNearby").then(function (s) {
            t.ImgList = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        }, showBanner: function showBanner(t, s, i) {
          this.$router.push({ path: "/GoodsDetails/", query: { id: s, index: i } });
        } } },
        bt = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { attrs: { id: "nearby" } }, [i("search-navbar"), t._v(" "), i("div", { staticClass: "nearbyBanner" }, [i("swiper", { ref: "mySwiper", attrs: { options: t.swiperOption } }, [t._l(t.nearbyImg, function (s, e) {
          return i("swiper-slide", { key: s.id }, [i("img", { staticStyle: { width: "100%" }, attrs: { src: s.img }, on: { click: function click(i) {
                t.showBanner(e, s.id, s.sindex);
              } } })]);
        }), t._v(" "), i("div", { staticClass: "swiper-pagination", attrs: { slot: "pagination" }, slot: "pagination" }), t._v(" "), i("div", { staticClass: "swiper-scrollbar", attrs: { slot: "scrollbar" }, slot: "scrollbar" })], 2)], 1), t._v(" "), i("div", { staticClass: "FoodsList" }, [i("div", { staticClass: "FoodsList-top" }), t._v(" "), i("div", { staticClass: "FoodsList-list" }, t._l(t.ImgList, function (t, s) {
          return i("div", { staticClass: "FoodsList-list-img" }, [i("img", { attrs: { src: t.img, alt: "" } })]);
        }))]), t._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: !t.ImgList.length, expression: "!ImgList.length" }], staticClass: "loading-container" }, [i("loading")], 1)], 1);
      }, staticRenderFns: [] };var St = i("Z0/y")(yt, bt, !1, function (t) {
      i("T8xf");
    }, "data-v-53813740", null).exports,
        At = { components: { SearchNavbar: c }, name: "search", data: function data() {
        return { search: [], hot: [] };
      }, created: function created() {
        this._getSearch(), this._gethot();
      }, methods: { _getSearch: function _getSearch() {
          var t = this;p.a.get("/api/search").then(function (s) {
            t.search = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        }, _gethot: function _gethot() {
          var t = this;p.a.get("/api/hot").then(function (s) {
            t.hot = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        }, searchGoodsName: function searchGoodsName() {
          p.a.post("", { goodsID: "" }).then(function (t) {
            console.log(t);
          }).catch(function (t) {
            console.log(t);
          });
        }, deleteGoods: function deleteGoods() {
          alert("hihi");
        } } },
        It = { render: function render() {
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
      }] };var kt = i("Z0/y")(At, It, !1, function (t) {
      i("hs/j");
    }, "data-v-0f0bd167", null).exports,
        qt = i("8Plb"),
        Mt = i.n(qt),
        Tt = { name: "citySelect", props: ["isCitySelect", "showHideAdd"], data: function data() {
        return { placeholders: { province: "请选择所在省份", city: "请选择所在城市", area: "请选择所在县区" }, select: { province: "", city: "", area: "" }, cityDetails: "", name: "", phone: "", citys: "", message: "", HideModal: !0, addressText: "", addressState: !1, nameText: "", nameState: !1, phoneText: "", phoneState: !1 };
      }, components: { Modal: b, "v-distpicker": Mt.a }, methods: { addressBlur: function addressBlur(t) {
          0 === t.length ? this.addressText = "详细地址不能为空" : (this.addressText = "", this.addressState = !0);
        }, addressFocus: function addressFocus(t) {
          0 === t.length && (this.addressText = "请填写地址");
        }, nameBlur: function nameBlur(t) {
          0 === t.length ? this.nameText = "收货人不能为空" : (this.nameText = "", this.nameState = !0);
        }, nameFocus: function nameFocus(t) {
          0 === t.length && (this.nameText = "请填写姓名");
        }, phoneBlur: function phoneBlur(t) {
          var s = /^1[34578][0-9]{9}$/.test(t);0 === t.length ? this.phoneText = "手机号不能为空" : t.length > 0 && !1 === s ? this.phoneText = "手机号格式不正确" : (this.phoneText = "", this.phoneState = !0);
        }, phoneFocus: function phoneFocus(t) {
          0 === t.length && (this.phoneText = "请填写电话");
        }, onSelected: function onSelected(t) {
          this.citys = t.province.value + t.city.value + t.area.value;
        }, closeModal: function closeModal() {
          this.isCitySelect1 = !0, this.$emit("showHideAdd", this.isCitySelect1);
        }, QRTJ: function QRTJ() {
          var t = this;if ("" !== this.citys && !0 === this.phoneState && !0 === this.nameState && !0 === this.addressState) {
            var s = { citys: this.citys, cityDetails: this.cityDetails, name: this.name, phone: this.phone };p.a.post("/api/setUserAddressList", { address: s }).then(function (s) {
              if ("1" === s.data) {
                t.message = "修改成功", t.HideModal = !1;var i = t;setTimeout(function () {
                  i.message = "", i.HideModal = !0, i.$router.go(0);
                }, 2e3);
              }
            }).catch(function (t) {
              console.log(t);
            });
          } else alert("收货信息不能为空");
        } } },
        Pt = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { class: { citySelect: t.isCitySelect } }, [i("div", { staticClass: "citySelect-div" }, [i("div", { staticClass: "citySelect-div-top" }, [i("span", [t._v("填写地址")]), t._v(" "), i("i", { staticClass: "iconfont icon-guanbi ", on: { click: t.closeModal } })]), t._v(" "), i("v-distpicker", { attrs: { type: "mobile", province: t.select.province, city: t.select.city, area: t.select.area, placeholders: t.placeholders }, on: { selected: t.onSelected } }), t._v(" "), i("div", { staticClass: "citySelect-div-city" }, [t._v("地址:" + t._s(t.citys))]), t._v(" "), i("div", { staticClass: "citySelect-div-address" }, [i("input", { directives: [{ name: "model", rawName: "v-model", value: t.cityDetails, expression: "cityDetails" }], attrs: { name: "address", type: "text", placeholder: "填写详细地址" }, domProps: { value: t.cityDetails }, on: { blur: function blur(s) {
              t.addressBlur(t.cityDetails);
            }, focus: function focus(s) {
              t.addressFocus(t.cityDetails);
            }, input: function input(s) {
              s.target.composing || (t.cityDetails = s.target.value);
            } } }), t._v(" "), i("i", { staticClass: "iconfont icon-right-trangle" }), t._v(" "), i("p", { staticClass: "TextP" }, [t._v(t._s(t.addressText))])]), t._v(" "), i("div", { staticClass: "citySelect-div-name" }, [i("input", { directives: [{ name: "model", rawName: "v-model", value: t.name, expression: "name" }], attrs: { name: "name", type: "text", placeholder: "姓名" }, domProps: { value: t.name }, on: { blur: function blur(s) {
              t.nameBlur(t.name);
            }, focus: function focus(s) {
              t.nameFocus(t.name);
            }, input: function input(s) {
              s.target.composing || (t.name = s.target.value);
            } } }), t._v(" "), i("i", { staticClass: "iconfont icon-right-trangle" }), t._v(" "), i("p", { staticClass: "TextP" }, [t._v(t._s(t.nameText))])]), t._v(" "), i("div", { staticClass: "citySelect-div-iphone" }, [i("input", { directives: [{ name: "model", rawName: "v-model", value: t.phone, expression: "phone" }], attrs: { name: "phone", type: "number", placeholder: "电话" }, domProps: { value: t.phone }, on: { blur: function blur(s) {
              t.phoneBlur(t.phone);
            }, focus: function focus(s) {
              t.phoneFocus(t.phone);
            }, input: function input(s) {
              s.target.composing || (t.phone = s.target.value);
            } } }), t._v(" "), i("i", { staticClass: "iconfont icon-right-trangle" }), t._v(" "), i("p", { staticClass: "TextP" }, [t._v(t._s(t.phoneText))])]), t._v(" "), i("button", { on: { click: t.QRTJ } }, [t._v("确认提交")]), t._v(" "), i("modal", { attrs: { msg: t.message, isHideModal: t.HideModal } })], 1)]);
      }, staticRenderFns: [] };var Nt = i("Z0/y")(Tt, Pt, !1, function (t) {
      i("IFlw");
    }, "data-v-651c73d6", null).exports,
        Et = { name: "citySelect", props: ["isUpdateCitySelect", "upindex", "upname", "upphone", "upcityDetails", "upcitys"], data: function data() {
        return { placeholders: { province: "请选择所在省份", city: "请选择所在城市", area: "请选择所在县区" }, select: { province: "", city: "", area: "" }, message: "", HideModal: !0, citys: "", cityDetails: "", name: "", phone: "", index: "", addressText: "", addressState: !1, nameText: "", nameState: !1, phoneText: "", phoneState: !1 };
      }, components: { Modal: b, "v-distpicker": Mt.a }, methods: { addressBlur: function addressBlur(t) {
          0 === t.length ? this.addressText = "详细地址不能为空" : (this.addressText = "", this.addressState = !0);
        }, addressFocus: function addressFocus(t) {
          0 === t.length && (this.addressText = "请填写地址");
        }, nameBlur: function nameBlur(t) {
          0 === t.length ? this.nameText = "收货人不能为空" : (this.nameText = "", this.nameState = !0);
        }, nameFocus: function nameFocus(t) {
          0 === t.length && (this.nameText = "请填写姓名");
        }, phoneBlur: function phoneBlur(t) {
          var s = /^1[34578][0-9]{9}$/.test(t);0 === t.length ? this.phoneText = "手机号不能为空" : t.length > 0 && !1 === s ? this.phoneText = "手机号格式不正确" : (this.phoneText = "", this.phoneState = !0);
        }, phoneFocus: function phoneFocus(t) {
          0 === t.length && (this.phoneText = "请填写电话");
        }, onSelected: function onSelected(t) {
          this.citys = t.province.value + t.city.value + t.area.value;
        }, closeModal: function closeModal() {
          this.isCitySelect2 = !0, this.$emit("showHideUpdateAdd", this.isCitySelect2);
        }, QRTJ: function QRTJ() {
          var t = this;if ("" !== this.citys && !0 === this.phoneState && !0 === this.nameState && !0 === this.addressState) {
            var s = this.$refs.upindex.value,
                i = { citys: this.citys, cityDetails: this.cityDetails, name: this.name, phone: this.phone };p.a.post("/api/updateUserAddressList", { address: i, index: s }).then(function (s) {
              if ("1" === s.data) {
                t.message = "修改成功", t.HideModal = !1;var i = t;setTimeout(function () {
                  i.message = "", i.HideModal = !0, i.$router.go(0);
                }, 2e3);
              }
            }).catch(function (t) {
              console.log(t);
            });
          } else alert("收货信息不能为空");
        } } },
        Lt = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { class: { citySelect: t.isUpdateCitySelect } }, [i("div", { staticClass: "citySelect-div" }, [i("div", { staticClass: "citySelect-div-top" }, [i("span", [t._v("填写地址")]), t._v(" "), i("i", { staticClass: "iconfont icon-guanbi ", on: { click: t.closeModal } })]), t._v(" "), i("v-distpicker", { attrs: { type: "mobile", province: t.select.province, city: t.select.city, area: t.select.area, placeholders: t.placeholders }, on: { selected: t.onSelected } }), t._v(" "), i("div", { staticClass: "citySelect-div-city" }, [t._v("地址:" + t._s(t.citys))]), t._v(" "), i("div", { staticClass: "citySelect-div-address" }, [i("input", { directives: [{ name: "model", rawName: "v-model", value: t.cityDetails, expression: "cityDetails" }], attrs: { name: "address", type: "text", placeholder: "填写详细地址" }, domProps: { value: t.cityDetails }, on: { blur: function blur(s) {
              t.addressBlur(t.cityDetails);
            }, focus: function focus(s) {
              t.addressFocus(t.cityDetails);
            }, input: function input(s) {
              s.target.composing || (t.cityDetails = s.target.value);
            } } }), t._v(" "), i("i", { staticClass: "iconfont icon-right-trangle" }), t._v(" "), i("p", { staticClass: "TextP" }, [t._v(t._s(t.addressText))])]), t._v(" "), i("div", { staticClass: "citySelect-div-name" }, [i("input", { directives: [{ name: "model", rawName: "v-model", value: t.name, expression: "name" }], attrs: { name: "name", type: "text", placeholder: "姓名" }, domProps: { value: t.name }, on: { blur: function blur(s) {
              t.nameBlur(t.name);
            }, focus: function focus(s) {
              t.nameFocus(t.name);
            }, input: function input(s) {
              s.target.composing || (t.name = s.target.value);
            } } }), t._v(" "), i("i", { staticClass: "iconfont icon-right-trangle" }), t._v(" "), i("p", { staticClass: "TextP" }, [t._v(t._s(t.nameText))])]), t._v(" "), i("div", { staticClass: "citySelect-div-iphone" }, [i("input", { directives: [{ name: "model", rawName: "v-model", value: t.phone, expression: "phone" }], attrs: { name: "phone", type: "number", placeholder: "电话" }, domProps: { value: t.phone }, on: { blur: function blur(s) {
              t.phoneBlur(t.phone);
            }, focus: function focus(s) {
              t.phoneFocus(t.phone);
            }, input: function input(s) {
              s.target.composing || (t.phone = s.target.value);
            } } }), t._v(" "), i("i", { staticClass: "iconfont icon-right-trangle" }), t._v(" "), i("p", { staticClass: "TextP" }, [t._v(t._s(t.phoneText))])]), t._v(" "), i("div", { ref: "upindex", staticStyle: { display: "none" } }, [t._v(t._s(t.upindex))]), t._v(" "), i("button", { on: { click: t.QRTJ } }, [t._v("确认提交")]), t._v(" "), i("modal", { attrs: { msg: t.message, isHideModal: t.HideModal } })], 1)]);
      }, staticRenderFns: [] };var Ht = { components: { Add: Nt, Modal: b, UpdateAddress: i("Z0/y")(Et, Lt, !1, function (t) {
          i("VLuo");
        }, "data-v-f032219e", null).exports }, name: "changeAddress", props: ["isAddress", "showHideAddress"], data: function data() {
        return { addressList: [], cites: "", isCitySelect: !0, hideAdd: !0, message: "", HideModal: !0, isUpdateCitySelect: !0, index: "", name: "", phone: "", citys: "", cityDetails: "" };
      }, created: function created() {
        this._getAddress();
      }, methods: { _getAddress: function _getAddress() {
          var t = this;p.a.post("/api/getUserAddressList").then(function (s) {
            s.data.length > 0 && (t.addressList = s.data);
          }).catch(function (t) {
            console.log(t);
          });
        }, addAddress: function addAddress() {
          this.isCitySelect = !1;
        }, updateAddress: function updateAddress(t, s, i, e, a) {
          this.isUpdateCitySelect = !1, this.index = t, this.name = s, this.phone = i, this.citys = e, this.cityDetails = a;
        }, deleteAddress: function deleteAddress(t) {
          var s = this;p.a.post("/api/deleteUserAddressList", { index: t }).then(function (t) {
            if ("1" === t.data) {
              s.message = "删除成功", s.HideModal = !1;var i = s;setTimeout(function () {
                i.message = "", i.HideModal = !0, i.$router.go(0);
              }, 2e3);
            }
          }).catch(function (t) {});
        }, goBack: function goBack() {
          this.isCitySelect1 = !0, this.$emit("showHideAddress", this.isCitySelect1);
        }, manageAddress: function manageAddress() {
          alert("hhahah");
        }, szmr: function szmr(t) {
          var s = this;p.a.post("/api/mrUserAddressList", { index: t }).then(function (t) {
            if ("1" === t.data) {
              s.message = "设置成功", s.HideModal = !1;var i = s;setTimeout(function () {
                i.message = "", i.HideModal = !0, i.$router.go(0);
              }, 2e3);
            } else if ("-1" === t.data) {
              s.message = "设置失败", s.HideModal = !1;var e = s;setTimeout(function () {
                e.message = "", e.HideModal = !0, e.$router.go(0);
              }, 2e3);
            }
          }).catch(function (t) {
            console.log(t);
          });
        }, showHideAdd: function showHideAdd(t) {
          this.isCitySelect = t;
        }, showHideUpdateAdd: function showHideUpdateAdd(t) {
          this.isUpdateCitySelect = t;
        } } },
        zt = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { class: { Address: t.isAddress } }, [i("div", { attrs: { id: "changeAddress" } }, [i("div", { staticClass: "changeAddress-top" }, [i("i", { staticClass: "iconfont icon-left-trangle", on: { click: t.goBack } }), t._v(" "), i("span", [t._v("选择收货地址")]), t._v(" "), i("span", { staticClass: "manageAddress", on: { click: t.manageAddress } }, [t._v("管理")])]), t._v(" "), i("div", { staticClass: "changeAddress-bottom" }, t._l(t.addressList, function (s, e) {
          return i("div", { staticClass: "changeAddress-bottom-template" }, [i("div", { staticClass: "changeAddress-bottom-template-top" }, [t._v("\n          " + t._s(s.name) + t._s(s.phone) + "\n          "), i("span", { staticClass: "szmr", on: { click: function click(s) {
                t.szmr(e);
              } } }, [t._v("选择改地址")])]), t._v(" "), i("div", { staticClass: "changeAddress-bottom-template-bottom" }, [t._v("\n          " + t._s(s.citys) + t._s(s.cityDetails) + "\n\n          "), i("i", { staticClass: "iconfont icon-bianji", on: { click: function click(i) {
                t.updateAddress(e, s.name, s.phone, s.citys, s.cityDetails);
              } } }), t._v(" "), i("i", { staticClass: "iconfont icon-shanchu", on: { click: function click(s) {
                t.deleteAddress(e);
              } } })])]);
        })), t._v(" "), i("add", { attrs: { cites: t.cites, isCitySelect: t.isCitySelect }, on: { showHideAdd: t.showHideAdd } }), t._v(" "), i("update-address", { attrs: { isUpdateCitySelect: t.isUpdateCitySelect, upindex: t.index, upname: t.name, upphone: t.phone, upcitys: t.citys, upcityDetails: t.cityDetails }, on: { showHideUpdateAdd: t.showHideUpdateAdd } }), t._v(" "), i("modal", { attrs: { msg: t.message, isHideModal: t.HideModal } }), t._v(" "), i("div", { staticClass: "newAddress" }, [i("span", { on: { click: t.addAddress } }, [t._v("新增收货地址")])])], 1)]);
      }, staticRenderFns: [] };var Gt = i("Z0/y")(Ht, zt, !1, function (t) {
      i("tJMp");
    }, "data-v-1df9c123", null).exports,
        Rt = { components: { Modal: b, ChangeAddress: Gt, Loading: v }, name: "buyProduct", data: function data() {
        return { shoppingCart: [], totalPrice: 0, login: "", username: "", phone: "", name: "", citys: "", cityDetails: "", isAddress: !0, message: "", HideModal: !0 };
      }, created: function created() {
        this._getProduct();
      }, methods: { _getProduct: function _getProduct() {
          var t = this;if (null === sessionStorage.getItem("userInfo")) console.log("用户还没有登录");else {
            var s = sessionStorage.getItem("userInfo");s = JSON.parse(s), this.login = s.state, this.username = s.username;var i = { id: this.$route.query.id, index: this.$route.query.index, img: this.$route.query.img, title: this.$route.query.title, price: this.$route.query.price, num: this.$route.query.number };this.shoppingCart.push(i), this.totalPrice = this.$route.query.price * this.$route.query.number, p.a.post("/api/MobileUserPayment").then(function (s) {
              s.data.addressList;var i = s.data.addressMr;t.name = i.name, t.phone = i.phone, t.citys = i.citys, t.cityDetails = i.cityDetails;
            }).catch(function (t) {
              console.log(t);
            });
          }
        }, gotoLogin: function gotoLogin() {
          this.$router.push({ path: "/Login" });
        }, changeAddress: function changeAddress() {
          this.isAddress = !1;
        }, showHideAddress: function showHideAddress(t) {
          this.isAddress = t;
        }, payment: function payment() {
          for (var t = this, s = "", i = 0; i < 11; i++) {
            s += Math.floor(10 * Math.random());
          }var e = q(),
              a = { orderNumber: s, time: e, name: this.username, phoneNumber: this.phone, address: this.citys + this.cityDetails, orderState: "未付款", orderStyle: "在线支付", orderAmount: this.totalPrice, orderDetail: this.shoppingCart };p.a.post("/api/setUserOrderState", { orderInfo: a }).then(function (i) {
            if ("1" === i.data) {
              t.message = "订单提交成功", t.HideModal = !1;var e = t;setTimeout(function () {
                e.message = "", e.HideModal = !0, e.$router.push({ path: "/PayPage/", query: { Num: s } });
              }, 2e3);
            }
          }).catch(function (t) {
            console.log(t);
          });
        } } },
        jt = { render: function render() {
        var t = this,
            s = t.$createElement,
            e = t._self._c || s;return e("div", { staticClass: "buyProductIndex" }, [e("change-address", { attrs: { isAddress: t.isAddress }, on: { showHideAddress: t.showHideAddress } }), t._v(" "), "1" !== t.login ? e("div", { staticClass: "noLogin" }, [e("img", { attrs: { src: i("R9n1"), alt: "" } }), t._v(" "), e("p", [t._v("您好，登录才能购买")]), t._v(" "), e("p", { on: { click: t.gotoLogin } }, [t._v("点击前往登录页")])]) : t._e(), t._v(" "), "1" === t.login ? e("div", { attrs: { id: "buyProduct" } }, [e("div", { staticClass: "buyProduct-top" }, [e("i", { staticClass: "iconfont icon-left-trangle", on: { click: function click(s) {
              t.$router.go(-1);
            } } }), t._v(" "), e("span", [t._v("购买宝贝")])]), t._v(" "), e("div", { staticClass: "buyProduct-product" }, t._l(t.shoppingCart, function (s, i) {
          return e("div", { staticClass: "buyProduct-product-template" }, [e("div", { staticClass: "template-img" }, [e("img", { attrs: { src: s.img, alt: "" } })]), t._v(" "), e("div", { staticClass: "template-info" }, [e("div", { staticClass: "template-info-title" }, [t._v("\n            亿成优生鲜-" + t._s(s.title) + "\n          ")]), t._v(" "), e("div", { staticClass: "template-info-info" }, [e("div", { staticClass: "template-info-info-price" }, [t._v("总价:￥" + t._s(s.price))]), t._v(" "), e("div", { staticClass: "template-info-info-number" }, [t._v("数量：" + t._s(s.num) + "件")])])])]);
        })), t._v(" "), e("div", { staticClass: "buyProduct-address" }, [e("div", { staticClass: "buyProduct-address-left" }, [t._v("\n        收货地址\n      ")]), t._v(" "), e("div", { staticClass: "buyProduct-address-center" }, [t.phone.length > 0 ? e("div", {}, [e("div", {}, [t._v(t._s(t.name) + t._s(t.phone))]), t._v(" "), e("div", { on: { click: t.changeAddress } }, [t._v(t._s(t.citys) + t._s(t.cityDetails))])]) : t._e(), t._v(" "), 0 == t.phone.length ? e("div", {}, [e("span", { on: { click: t.changeAddress } }, [t._v("添加地址")])]) : t._e()]), t._v(" "), t._m(0)]), t._v(" "), t._m(1), t._v(" "), e("div", { staticClass: "buyProduct-bottom" }, [e("div", { staticClass: "buyProduct-bottom-left" }, [e("span", [t._v("实付款:")]), t._v(" "), e("span", [t._v("￥" + t._s(t.totalPrice) + "元")])]), t._v(" "), e("div", { staticClass: "buyProduct-bottom-right", on: { click: t.payment } }, [t._v("确认")])]), t._v(" "), e("div", { directives: [{ name: "show", rawName: "v-show", value: 0 === t.shoppingCart.length, expression: "shoppingCart.length===0" }], staticClass: "loading-container" }, [e("loading")], 1)]) : t._e(), t._v(" "), e("modal", { attrs: { msg: t.message, isHideModal: t.HideModal } })], 1);
      }, staticRenderFns: [function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "buyProduct-address-right" }, [s("i", { staticClass: "iconfont icon-right-trangle" })]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "buyProduct-yf" }, [s("div", { staticClass: "buyProduct-yf-left" }, [this._v("运费")]), this._v(" "), s("div", { staticClass: "buyProduct-yf-right" }, [this._v("￥0.00")])]);
      }] };var Dt = i("Z0/y")(Rt, jt, !1, function (t) {
      i("blyU");
    }, "data-v-773c6298", null).exports,
        Bt = { components: { Modal: b, ChangeAddress: Gt, Loading: v }, name: "buyProduct", data: function data() {
        return { shoppingCart: [], totalPrice: 0, login: "", username: "", phone: "", name: "", citys: "", cityDetails: "", isAddress: !0, message: "", HideModal: !0 };
      }, created: function created() {
        this._getProduct();
      }, methods: { _getProduct: function _getProduct() {
          var t = this;if (null === sessionStorage.getItem("userInfo")) console.log("用户还没有登录");else {
            var s = sessionStorage.getItem("userInfo");s = JSON.parse(s), this.login = s.state, this.username = s.username;var i = this.$route.query.productList;void 0 !== i[0].img && (i = A()(i), localStorage.setItem("orderProduct", i));var e = localStorage.getItem("orderProduct");e = JSON.parse(e), this.shoppingCart = e, this.totalPrice = this.$route.query.totalAmount, p.a.post("/api/MobileUserPayment").then(function (s) {
              s.data.addressList;var i = s.data.addressMr;t.name = i.name, t.phone = i.phone, t.citys = i.citys, t.cityDetails = i.cityDetails;
            }).catch(function (t) {
              console.log(t);
            });
          }
        }, gotoLogin: function gotoLogin() {
          this.$router.push({ path: "/Login" });
        }, changeAddress: function changeAddress() {
          this.isAddress = !1;
        }, showHideAddress: function showHideAddress(t) {
          this.isAddress = t;
        }, payment: function payment() {
          for (var t = this, s = "", i = 0; i < 11; i++) {
            s += Math.floor(10 * Math.random());
          }var e = q(),
              a = { orderNumber: s, time: e, name: this.username, phoneNumber: this.phone, address: this.citys + this.cityDetails, orderState: "未付款", orderStyle: "在线支付", orderAmount: this.totalPrice, orderDetail: this.shoppingCart };p.a.post("/api/setUserOrderState", { orderInfo: a }).then(function (i) {
            if ("1" === i.data) {
              t.message = "订单提交成功", t.HideModal = !1;var e = t;setTimeout(function () {
                e.message = "", e.HideModal = !0, e.$router.push({ path: "/PayPage/", query: { Num: s } });
              }, 2e3);
            }
          }).catch(function (t) {
            console.log(t);
          });
        } } },
        Ft = { render: function render() {
        var t = this,
            s = t.$createElement,
            e = t._self._c || s;return e("div", { staticClass: "buyProductIndex" }, [e("change-address", { attrs: { isAddress: t.isAddress }, on: { showHideAddress: t.showHideAddress } }), t._v(" "), "1" !== t.login ? e("div", { staticClass: "noLogin" }, [e("img", { attrs: { src: i("R9n1"), alt: "" } }), t._v(" "), e("p", [t._v("您好，登录才能购买")]), t._v(" "), e("p", { on: { click: t.gotoLogin } }, [t._v("点击前往登录页")])]) : t._e(), t._v(" "), "1" === t.login ? e("div", { attrs: { id: "buyProduct" } }, [e("div", { staticClass: "buyProduct-top" }, [e("i", { staticClass: "iconfont icon-left-trangle", on: { click: function click(s) {
              t.$router.go(-1);
            } } }), t._v(" "), e("span", [t._v("购买宝贝")])]), t._v(" "), e("div", { staticClass: "buyProduct-product" }, t._l(t.shoppingCart, function (s, i) {
          return e("div", { staticClass: "buyProduct-product-template" }, [e("div", { staticClass: "template-img" }, [e("img", { attrs: { src: s.img, alt: "" } })]), t._v(" "), e("div", { staticClass: "template-info" }, [e("div", { staticClass: "template-info-title" }, [t._v("\n            亿成优生鲜-" + t._s(s.title) + "\n          ")]), t._v(" "), e("div", { staticClass: "template-info-info" }, [e("div", { staticClass: "template-info-info-price" }, [t._v("总价:￥" + t._s(s.price))]), t._v(" "), e("div", { staticClass: "template-info-info-number" }, [t._v("数量：" + t._s(s.num) + "件")])])])]);
        })), t._v(" "), e("div", { staticClass: "buyProduct-address" }, [e("div", { staticClass: "buyProduct-address-left" }, [t._v("\n        收货地址\n      ")]), t._v(" "), e("div", { staticClass: "buyProduct-address-center" }, [t.phone.length > 0 ? e("div", {}, [e("div", {}, [t._v(t._s(t.name) + t._s(t.phone))]), t._v(" "), e("div", { on: { click: t.changeAddress } }, [t._v(t._s(t.citys) + t._s(t.cityDetails))])]) : t._e(), t._v(" "), 0 == t.phone.length ? e("div", {}, [e("span", { on: { click: t.changeAddress } }, [t._v("添加地址")])]) : t._e()]), t._v(" "), t._m(0)]), t._v(" "), t._m(1), t._v(" "), e("div", { staticClass: "buyProduct-bottom" }, [e("div", { staticClass: "buyProduct-bottom-left" }, [e("span", [t._v("实付款:")]), t._v(" "), e("span", [t._v("￥" + t._s(t.totalPrice) + "元")])]), t._v(" "), e("div", { staticClass: "buyProduct-bottom-right", on: { click: t.payment } }, [t._v("确认")])])]) : t._e(), t._v(" "), e("div", { directives: [{ name: "show", rawName: "v-show", value: 0 === t.shoppingCart.length, expression: "shoppingCart.length===0" }], staticClass: "loading-container" }, [e("loading")], 1), t._v(" "), e("modal", { attrs: { msg: t.message, isHideModal: t.HideModal } })], 1);
      }, staticRenderFns: [function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "buyProduct-address-right" }, [s("i", { staticClass: "iconfont icon-right-trangle" })]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "buyProduct-yf" }, [s("div", { staticClass: "buyProduct-yf-left" }, [this._v("运费")]), this._v(" "), s("div", { staticClass: "buyProduct-yf-right" }, [this._v("￥0.00")])]);
      }] };var Yt = i("Z0/y")(Bt, Ft, !1, function (t) {
      i("vNQI");
    }, "data-v-4639e127", null).exports,
        Ut = { name: "PayPage", data: function data() {
        return { totalPrice: "", login: "", order: [], price: "", iszfb: !0, iswx: !0 };
      }, created: function created() {
        this._getZfInfo();
      }, methods: { _getZfInfo: function _getZfInfo() {
          var t = this;if (null === sessionStorage.getItem("userInfo")) console.log("用户还没有登录");else {
            var s = sessionStorage.getItem("userInfo");s = JSON.parse(s), this.login = s.state, p.a.post("/api/getUserOrderState", { num: this.$route.query.Num }).then(function (s) {
              t.order = s.data[0].orderDetail, t.price = s.data[0].orderAmount;
            }).catch(function (t) {
              console.log(t);
            });
          }
        }, goToLogin: function goToLogin() {
          this.$router.push({ path: "/Login" });
        }, selectedZfb: function selectedZfb() {
          this.iswx = !0, this.iszfb = !1;
        }, selectedWx: function selectedWx() {
          this.iszfb = !0, this.iswx = !1;
        } } },
        Ot = { render: function render() {
        var t = this,
            s = t.$createElement,
            e = t._self._c || s;return e("div", { staticClass: "PayPage" }, [e("div", { directives: [{ name: "show", rawName: "v-show", value: "1" !== t.login, expression: "login !=='1'" }], staticClass: "noLogin" }, [e("img", { attrs: { src: i("R9n1"), alt: "" } }), t._v(" "), e("p", [t._v("您好，登录才能购买")]), t._v(" "), e("p", { on: { click: t.goToLogin } }, [t._v("点击前往登录页")])]), t._v(" "), e("div", { directives: [{ name: "show", rawName: "v-show", value: "1" === t.login, expression: "login==='1'" }], attrs: { id: "PayPage" } }, [e("div", { staticClass: "PayPage-top" }, [e("i", { staticClass: "iconfont icon-left-trangle", on: { click: function click(s) {
              t.$router.go(-1);
            } } }), t._v(" "), e("span", [t._v("支付订单")])]), t._v(" "), e("div", { staticClass: "PayPage-order" }, t._l(t.order, function (s, i) {
          return e("div", { staticClass: "order-template" }, [e("div", { staticClass: "order-template-left" }, [e("img", { attrs: { src: s.img, alt: "" } })]), t._v(" "), e("div", { staticClass: "order-template-right" }, [e("div", { staticClass: "order-template-right-top" }, [e("span", {}, [t._v("￥" + t._s(s.price))]), t._v(" "), e("i", { staticClass: "iconfont icon-guanbi" }), t._v(" "), e("span", [t._v(t._s(s.num) + "个")])]), t._v(" "), e("div", { staticClass: "order-template-right-bottom" }, [t._v(t._s(s.title))])])]);
        })), t._v(" "), e("div", { staticClass: "PayPage-zfState" }, [e("div", { staticClass: "wxzf" }, [t._m(0), t._v(" "), e("div", { staticClass: "wxzfl-center" }, [t._v("\n          微信支付\n        ")]), t._v(" "), e("div", { staticClass: "wxzfl-right", on: { click: t.selectedWx } }, [e("i", { class: { "iconfont icon-xuanze1": t.iswx, "iconfont icon-xuanze": !t.iswx } })])]), t._v(" "), e("div", { staticClass: "zfbzf" }, [t._m(1), t._v(" "), t._m(2), t._v(" "), e("div", { staticClass: "zfbzf-right", on: { click: t.selectedZfb } }, [e("i", { class: { "iconfont icon-xuanze1": t.iszfb, "iconfont icon-xuanze": !t.iszfb } })])])]), t._v(" "), e("div", { staticClass: "PayPage-TJ" }, [t._v("\n      确认支付￥" + t._s(t.price) + "\n    ")])])]);
      }, staticRenderFns: [function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "wxzfl-left" }, [s("i", { staticClass: "iconfont icon-weixinzhifu" })]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "zfbzf-left" }, [s("i", { staticClass: "iconfont icon-zhifubao1" })]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "zfbzf-center" }, [s("span", [this._v("支付宝支付")])]);
      }] };var Jt = i("Z0/y")(Ut, Ot, !1, function (t) {
      i("V8DF");
    }, "data-v-2e5c68c6", null).exports;i("aEDl");var Zt = { components: { Modal: b, SearchNavbar: c, YcNavbar: H, Navheader: x, swiper: z.swiper, swiperSlide: z.swiperSlide }, name: "newRec", data: function data() {
        return { message: "", HideModal: !0, topImg: [{ img: "http://www.ilqiqi.top/images/mYc/nbi/cj.png" }], swiperOption: { direction: "horizontal", pagination: ".swiper-pagination", prevButton: ".swiper-button-prev", nextButton: ".swiper-button-next", autoplayDisableOnInteraction: !1 }, productList: [], productList1: [{ img: "http://www.ilqiqi.top/images/mYc/goods/crad/3.jpg", title: "面包蟹", price: "293", id: "PXL", sindex: 2 }, { img: "http://www.ilqiqi.top/images/mYc/goods/chichens/3.jpg", title: "大鸡腿", price: "293", id: "JXL", sindex: 2 }, { img: "http://www.ilqiqi.top/images/mYc/goods/crad/3.jpg", title: "大鸭腿", price: "291", id: "YXL", sindex: 2 }, { img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/3.jpg", title: "黑虎虾", price: "293", id: "DXL", sindex: 2 }, { img: "http://www.ilqiqi.top/images/mYc/goods/bolus/3.jpg", title: "火锅丸", price: "293", id: "HGW", sindex: 2 }] };
      }, computed: { swiper: function swiper() {
          return this.$refs.mySwiper.swiper;
        } }, created: function created() {
        this._getProductList();
      }, methods: { _getProductList: function _getProductList() {
          var t = this;p.a.get("/api/MNavBarNewRec").then(function (s) {
            t.productList = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        }, showProduct: function showProduct(t, s, i) {
          this.$router.push({ path: "/GoodsDetails/", query: { id: s, index: i } });
        }, addCart: function addCart(t, s, i, e, a) {
          I(t, s, i, e, a), this.message = "已经加入购物车", this.HideModal = !1;var n = this;setTimeout(function () {
            n.message = "", n.HideModal = !0;
          }, 2e3);
        } } },
        Xt = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { attrs: { id: "newRec" } }, [i("navheader"), t._v(" "), i("search-navbar"), t._v(" "), i("div", { staticClass: "newRec-content" }, [i("div", { staticClass: "newRec-content-top" }, [i("swiper", { ref: "mySwiper", attrs: { options: t.swiperOption } }, [t._l(t.topImg, function (t, s) {
          return i("swiper-slide", { key: t.id }, [i("img", { staticStyle: { width: "100%" }, attrs: { src: t.img } })]);
        }), t._v(" "), i("div", { staticClass: "swiper-scrollbar", attrs: { slot: "scrollbar" }, slot: "scrollbar" })], 2)], 1), t._v(" "), i("div", { staticClass: "newRec-content-center" }), t._v(" "), i("div", { staticClass: "newRec-content-bottom" }, t._l(t.productList, function (s, e) {
          return i("div", { staticClass: "newRec-template" }, [i("div", { staticClass: "newRec-template-left", on: { click: function click(i) {
                t.showProduct(e, s.id, s.sindex);
              } } }, [i("img", { attrs: { src: s.img, alt: "" } })]), t._v(" "), i("div", { staticClass: "newRec-template-right" }, [i("div", { staticClass: "newRec-template-title", on: { click: function click(i) {
                t.showProduct(e, s.id, s.sindex);
              } } }, [t._v("\n            亿成优生鲜-" + t._s(s.title))]), t._v(" "), i("div", { staticClass: "newRec-template-price", on: { click: function click(i) {
                t.showProduct(e, s.id, s.sindex);
              } } }, [t._v("\n            亿成新品价格：￥" + t._s(s.price) + "\n          ")]), t._v(" "), i("div", { staticClass: "newRec-template-cz", on: { click: function click(i) {
                t.addCart(e, s.img, s.title, s.price, s.id);
              } } }, [t._v("\n              加入购物车\n          ")])])]);
        }))]), t._v(" "), i("modal", { attrs: { msg: t.message, isHideModal: t.HideModal } })], 1);
      }, staticRenderFns: [] };var Wt = i("Z0/y")(Zt, Xt, !1, function (t) {
      i("kePm");
    }, "data-v-76f5a357", null).exports;i("aEDl");var Qt = { components: { Modal: b, SearchNavbar: c, YcNavbar: H, Navheader: x, swiper: z.swiper, swiperSlide: z.swiperSlide }, name: "Discount", data: function data() {
        return { message: "", HideModal: !0, topImg: [{ img: "http://www.ilqiqi.top/images/mYc/nbi/dz1.jpg" }, { img: "http://www.ilqiqi.top/images/mYc/nbi/dz2.jpg" }, { img: "http://www.ilqiqi.top/images/mYc/nbi/dz3.jpg" }, { img: "http://www.ilqiqi.top/images/mYc/nbi/dz4.jpg" }], swiperOption: { direction: "horizontal", loop: !0, pagination: ".swiper-pagination", prevButton: ".swiper-button-prev", nextButton: ".swiper-button-next", autoplay: 3e3, autoplayDisableOnInteraction: !1 }, productList: [], productList1: [{ img: "http://www.ilqiqi.top/images/mYc/goods/crad/4.jpg", title: "青蟹", price: "294", id: "PXL", sindex: 4 }, { img: "http://www.ilqiqi.top/images/mYc/goods/chichens/4.jpg", title: "翅中", price: "294", id: "JXL", sindex: 3 }, { img: "http://www.ilqiqi.top/images/mYc/goods/ducks/4.jpg", title: "鸭锁骨", price: "294", id: "YXL", sindex: 3 }, { img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/4.jpg", title: "小龙虾", price: "294", id: "DXL", sindex: 3 }, { img: "http://www.ilqiqi.top/images/mYc/goods/bolus/4.jpg", title: "火锅丸", price: "294", id: "HGW", sindex: 3 }] };
      }, computed: { swiper: function swiper() {
          return this.$refs.mySwiper.swiper;
        } }, created: function created() {
        this._getProductList();
      }, methods: { _getProductList: function _getProductList() {
          var t = this;p.a.get("/api/MNavBarDiscount").then(function (s) {
            t.productList = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        }, showProduct: function showProduct(t, s, i) {
          this.$router.push({ path: "/GoodsDetails/", query: { id: s, index: i } });
        }, addCart: function addCart(t, s, i, e, a) {
          I(t, s, i, e, a), this.message = "已经加入购物车", this.HideModal = !1;var n = this;setTimeout(function () {
            n.message = "", n.HideModal = !0;
          }, 2e3);
        } } },
        Kt = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { attrs: { id: "Discount" } }, [i("navheader"), t._v(" "), i("search-navbar"), t._v(" "), i("div", { staticClass: "newRec-content" }, [i("div", { staticClass: "newRec-content-top" }, [i("swiper", { ref: "mySwiper", attrs: { options: t.swiperOption } }, [t._l(t.topImg, function (t, s) {
          return i("swiper-slide", { key: t.id }, [i("img", { staticStyle: { width: "100%" }, attrs: { src: t.img } })]);
        }), t._v(" "), i("div", { staticClass: "swiper-pagination", attrs: { slot: "pagination" }, slot: "pagination" }), t._v(" "), i("div", { staticClass: "swiper-scrollbar", attrs: { slot: "scrollbar" }, slot: "scrollbar" })], 2)], 1), t._v(" "), i("div", { staticClass: "newRec-content-center" }), t._v(" "), i("div", { staticClass: "newRec-content-bottom" }, t._l(t.productList, function (s, e) {
          return i("div", { staticClass: "newRec-template" }, [i("div", { staticClass: "newRec-template-left", on: { click: function click(i) {
                t.showProduct(e, s.id, s.sindex);
              } } }, [i("img", { attrs: { src: s.img, alt: "" } })]), t._v(" "), i("div", { staticClass: "newRec-template-right" }, [i("div", { staticClass: "newRec-template-title", on: { click: function click(i) {
                t.showProduct(e, s.id, s.sindex);
              } } }, [t._v("\n            亿成优生鲜-" + t._s(s.title))]), t._v(" "), i("div", { staticClass: "newRec-template-price", on: { click: function click(i) {
                t.showProduct(e, s.id, s.sindex);
              } } }, [t._v("\n            限时折扣价格：￥" + t._s(s.price) + "\n          ")]), t._v(" "), i("div", { staticClass: "newRec-template-cz", on: { click: function click(i) {
                t.addCart(e, s.img, s.title, s.price, s.id);
              } } }, [t._v("\n            加入购物车\n          ")])])]);
        }))]), t._v(" "), i("modal", { attrs: { msg: t.message, isHideModal: t.HideModal } })], 1);
      }, staticRenderFns: [] };var $t = i("Z0/y")(Qt, Kt, !1, function (t) {
      i("YYK1");
    }, "data-v-8393cf78", null).exports;i("aEDl");var Vt = { components: { Modal: b, SearchNavbar: c, YcNavbar: H, Navheader: x, swiper: z.swiper, swiperSlide: z.swiperSlide }, name: "newRec", data: function data() {
        return { message: "", HideModal: !0, topImg: [{ img: "http://www.ilqiqi.top/images/mYc/nbi/sy01.png" }], swiperOption: { direction: "horizontal", pagination: ".swiper-pagination", prevButton: ".swiper-button-prev", nextButton: ".swiper-button-next", autoplayDisableOnInteraction: !1 }, productList: [], productList1: [{ img: "http://www.ilqiqi.top/images/mYc/goods/crad/6.jpg", title: "珍宝蟹", price: "296", id: "PXL", sindex: 5 }, { img: "http://www.ilqiqi.top/images/mYc/goods/chichens/6.jpg", title: "鸡胗", price: "296", id: "JXL", sindex: 5 }, { img: "http://www.ilqiqi.top/images/mYc/goods/crad/6.jpg", title: "鸭肉快", price: "296", id: "YXL", sindex: 5 }, { img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/6.jpg", title: "维基虾", price: "296", id: "DXL", sindex: 5 }, { img: "http://www.ilqiqi.top/images/mYc/goods/bolus/6.jpg", title: "火锅丸", price: "296", id: "HGW", sindex: 5 }] };
      }, computed: { swiper: function swiper() {
          return this.$refs.mySwiper.swiper;
        } }, created: function created() {
        this._getProductList();
      }, methods: { _getProductList: function _getProductList() {
          var t = this;p.a.get("/api/MNavBarSySt").then(function (s) {
            t.productList = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        }, showProduct: function showProduct(t, s, i) {
          this.$router.push({ path: "/GoodsDetails/", query: { id: s, index: i } });
        }, addCart: function addCart(t, s, i, e, a) {
          I(t, s, i, e, a), this.message = "已经加入购物车", this.HideModal = !1;var n = this;setTimeout(function () {
            n.message = "", n.HideModal = !0;
          }, 2e3);
        } } },
        ts = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { attrs: { id: "newRec" } }, [i("navheader"), t._v(" "), i("search-navbar"), t._v(" "), i("div", { staticClass: "newRec-content" }, [i("div", { staticClass: "newRec-content-top" }, [i("swiper", { ref: "mySwiper", attrs: { options: t.swiperOption } }, [t._l(t.topImg, function (t, s) {
          return i("swiper-slide", { key: t.id }, [i("img", { staticStyle: { width: "100%" }, attrs: { src: t.img } })]);
        }), t._v(" "), i("div", { staticClass: "swiper-scrollbar", attrs: { slot: "scrollbar" }, slot: "scrollbar" })], 2)], 1), t._v(" "), i("div", { staticClass: "newRec-content-center" }), t._v(" "), i("div", { staticClass: "newRec-content-bottom" }, t._l(t.productList, function (s, e) {
          return i("div", { staticClass: "newRec-template" }, [i("div", { staticClass: "newRec-template-left", on: { click: function click(i) {
                t.showProduct(e, s.id, s.sindex);
              } } }, [i("img", { attrs: { src: s.img, alt: "" } })]), t._v(" "), i("div", { staticClass: "newRec-template-right" }, [i("div", { staticClass: "newRec-template-title", on: { click: function click(i) {
                t.showProduct(e, s.id, s.sindex);
              } } }, [t._v("\n            亿成优生鲜-" + t._s(s.title))]), t._v(" "), i("div", { staticClass: "newRec-template-price", on: { click: function click(i) {
                t.showProduct(e, s.id, s.sindex);
              } } }, [t._v("\n            亿成新品价格：￥" + t._s(s.price) + "\n          ")]), t._v(" "), i("div", { staticClass: "newRec-template-cz", on: { click: function click(i) {
                t.addCart(e, s.img, s.title, s.price, s.id);
              } } }, [t._v("\n            加入购物车\n          ")])])]);
        }))]), t._v(" "), i("modal", { attrs: { msg: t.message, isHideModal: t.HideModal } })], 1);
      }, staticRenderFns: [] };var ss = i("Z0/y")(Vt, ts, !1, function (t) {
      i("nyqd");
    }, "data-v-40fa6bf7", null).exports;i("aEDl");var is = { components: { Modal: b, SearchNavbar: c, YcNavbar: H, Navheader: x, swiper: z.swiper, swiperSlide: z.swiperSlide }, name: "newRec", data: function data() {
        return { message: "", HideModal: !0, topImg: [{ img: "http://www.ilqiqi.top/images/mYc/nbi/jx1.png" }], swiperOption: { direction: "horizontal", pagination: ".swiper-pagination", prevButton: ".swiper-button-prev", nextButton: ".swiper-button-next", autoplayDisableOnInteraction: !1 }, productList: [] };
      }, computed: { swiper: function swiper() {
          return this.$refs.mySwiper.swiper;
        } }, created: function created() {
        this._getProductList();
      }, methods: { _getProductList: function _getProductList() {
          var t = this;p.a.get("/api/MNavBarJxLh").then(function (s) {
            t.productList = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        }, showProduct: function showProduct(t, s, i) {
          this.$router.push({ path: "/GoodsDetails/", query: { id: s, index: i } });
        }, addCart: function addCart(t, s, i, e, a) {
          I(t, s, i, e, a), this.message = "已经加入购物车", this.HideModal = !1;var n = this;setTimeout(function () {
            n.message = "", n.HideModal = !0;
          }, 2e3);
        } } },
        es = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { attrs: { id: "newRec" } }, [i("navheader"), t._v(" "), i("search-navbar"), t._v(" "), i("div", { staticClass: "newRec-content" }, [i("div", { staticClass: "newRec-content-top" }, [i("swiper", { ref: "mySwiper", attrs: { options: t.swiperOption } }, [t._l(t.topImg, function (t, s) {
          return i("swiper-slide", { key: t.id }, [i("img", { staticStyle: { width: "100%" }, attrs: { src: t.img } })]);
        }), t._v(" "), i("div", { staticClass: "swiper-scrollbar", attrs: { slot: "scrollbar" }, slot: "scrollbar" })], 2)], 1), t._v(" "), i("div", { staticClass: "newRec-content-center" }), t._v(" "), i("div", { staticClass: "newRec-content-bottom" }, t._l(t.productList, function (s, e) {
          return i("div", { staticClass: "newRec-template" }, [i("div", { staticClass: "newRec-template-left", on: { click: function click(i) {
                t.showProduct(e, s.id, s.sindex);
              } } }, [i("img", { attrs: { src: s.img, alt: "" } })]), t._v(" "), i("div", { staticClass: "newRec-template-right" }, [i("div", { staticClass: "newRec-template-title", on: { click: function click(i) {
                t.showProduct(e, s.id, s.sindex);
              } } }, [t._v("\n            亿成优生鲜-" + t._s(s.title))]), t._v(" "), i("div", { staticClass: "newRec-template-price", on: { click: function click(i) {
                t.showProduct(e, s.id, s.sindex);
              } } }, [t._v("\n            亿成新品价格：￥" + t._s(s.price) + "\n          ")]), t._v(" "), i("div", { staticClass: "newRec-template-cz", on: { click: function click(i) {
                t.addCart(e, s.img, s.title, s.price, s.id);
              } } }, [t._v("\n            加入购物车\n          ")])])]);
        }))]), t._v(" "), i("modal", { attrs: { msg: t.message, isHideModal: t.HideModal } })], 1);
      }, staticRenderFns: [] };var as = i("Z0/y")(is, es, !1, function (t) {
      i("bwMv");
    }, "data-v-e93d7122", null).exports,
        ns = { components: { Modal: b }, name: "LxKf", data: function data() {
        return { message: "", HideModal: !0, EmitMessage: "", onMessage: [], avatar: "", username: "", login: "", CustomerService: "", CustomerServiceAvatar: "", CustomerServiceContent: "", content: "", wztx: !0, yytx: !1, wzsy: !0, yysy: !1, emitMes: !1, AddProject: !0, LxKfFJ: !1, WxFace: !1, WXFj: !1, WXBQ: [{ img: "http://www.ilqiqi.top/images/mYC/arclist/1.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/2.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/3.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/4.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/5.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/6.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/7.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/8.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/9.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/10.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/11.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/12.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/12.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/14.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/15.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/16.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/17.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/18.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/19.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/20.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/21.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/22.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/23.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/24.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/25.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/26.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/27.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/28.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/29.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/30.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/31.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/32.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/33.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/34.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/35.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/36.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/37.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/38.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/39.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/40.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/41.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/42.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/43.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/44.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/45.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/46.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/47.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/48.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/49.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/50.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/51.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/52.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/53.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/54.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/55.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/56.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/57.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/58.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/59.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/60.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/61.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/62.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/63.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/64.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/65.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/66.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/67.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/68.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/69.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/70.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/71.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/72.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/73.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/74.gif" }, { img: "http://www.ilqiqi.top/images/mYC/arclist/75.gif" }] };
      }, mounted: function mounted() {
        var t = this;this.$socket.on("privateMsg", function (s, i, e) {
          if (e.user === t.username) {
            t.content = e.message, t.avatar = e.avatar;var a = e.time.slice(5),
                n = { direction: "left", leftContent: t.content, leftAvatar: t.avatar, time: a, state: "1" };t.onMessage.push(n);
          } else if ("CustomerService" === e.user) {
            t.CustomerService = e.user, t.CustomerServiceContent = e.message, t.CustomerServiceAvatar = e.avatar;var o = { direction: "right", time: e.time.slice(5), rightContent: t.CustomerServiceContent, rightAvatar: t.CustomerServiceAvatar, state: "1" };t.onMessage.push(o);
          }p.a.post("/api/UserChatList", { chatMessage: t.onMessage }).then(function (t) {
            console.log("1");
          }).catch(function (t) {
            console.log(t);
          });
        });
      }, computed: {}, created: function created() {
        this._getUserCollect(), this._getChatList();
      }, methods: { _getUserCollect: function _getUserCollect() {
          if (null === sessionStorage.getItem("userInfo")) console.log("用户还没有登录");else {
            var t = sessionStorage.getItem("userInfo");t = JSON.parse(t), this.login = t.state, this.avatar = t.avatar, this.username = t.username, this.$socket.emit("CustomerService", { username: this.username });
          }
        }, _getChatList: function _getChatList() {
          var t = this;p.a.post("/api/getUserChatList").then(function (s) {
            console.log(s.data), t.onMessage = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        }, emitMessage: function emitMessage() {
          var t = q();this.$socket.emit("privateMessage", this.username, "CustomerService", { message: this.EmitMessage, time: t, user: this.username, avatar: this.avatar }), this.EmitMessage = "";
        }, changeWztx: function changeWztx() {
          !0 === this.wztx ? (this.wztx = !1, this.yytx = !0, this.wzsy = !1, this.yysy = !0) : !1 === this.wztx && (this.wztx = !0, this.yytx = !1, this.wzsy = !0, this.yysy = !1);
        }, messageOnInput: function messageOnInput(t) {
          var s = t.length;s > 0 ? (this.emitMes = !0, this.AddProject = !1) : 0 === s && (this.emitMes = !1, this.AddProject = !0);
        }, showFace: function showFace() {
          this.$refs.LxKfBottom.style.bottom = "150px", this.LxKfFJ = !0, this.WxFace = !0;
        }, AddFJ: function AddFJ() {
          this.$refs.LxKfBottom.style.bottom = "150px", this.LxKfFJ = !0, this.WxFace = !1, this.WXFj = !0;
        }, selectBQ: function selectBQ(t) {
          var s = t.target.cloneNode(!0);document.querySelector("#bottomText").append(s);
        }, gotoLogin: function gotoLogin() {
          this.$router.push({ path: "/Login" });
        }, HideBottom: function HideBottom() {
          this.$refs.LxKfBottom.style.bottom = "0px", this.LxKfFJ = !1, this.WxFace = !1;
        } } },
        os = { render: function render() {
        var t = this,
            s = t.$createElement,
            e = t._self._c || s;return e("div", { staticClass: "LXKF" }, ["1" !== t.login ? e("div", { staticClass: "noLogin" }, [e("img", { attrs: { src: i("R9n1"), alt: "" } }), t._v(" "), e("p", [t._v("您好，登录账号才能和客服联系 ")]), t._v(" "), e("p", { on: { click: t.gotoLogin } }, [t._v("点击前往登录页")])]) : t._e(), t._v(" "), "1" === t.login ? e("div", { attrs: { id: "LxKf" } }, [e("div", { staticClass: "LxKf-top" }, [e("i", { staticClass: "iconfont icon-xiangzuo", on: { click: function click(s) {
              t.$router.go(-1);
            } } }), t._v(" "), e("span", [t._v("水汪汪客服")]), t._v(" "), e("i", { staticClass: "iconfont icon-solid-person" })]), t._v(" "), e("div", { staticClass: "LxKf-center", on: { click: t.HideBottom } }, t._l(t.onMessage, function (s, i) {
          return e("div", {}, [e("div", { directives: [{ name: "show", rawName: "v-show", value: "left" === s.direction, expression: "item.direction === 'left'" }], staticClass: "left-template" }, [e("div", { staticClass: "left-template-time" }, [t._v(t._s(s.time))]), t._v(" "), e("div", { staticClass: "left-template-content" }, [e("p", {}, [t._v("\n              " + t._s(s.leftContent) + "\n            ")])]), t._v(" "), e("div", { staticClass: "left-template-avatar" }, [e("img", { attrs: { src: s.leftAvatar, alt: "" } })])]), t._v(" "), e("div", { directives: [{ name: "show", rawName: "v-show", value: "right" === s.direction, expression: "item.direction=== 'right'" }], staticClass: "right-template" }, [e("div", { staticClass: "right-template-avatar" }, [e("img", { attrs: { src: s.rightAvatar, alt: "" } })]), t._v(" "), e("div", { staticClass: "right-template-time" }, [t._v(" " + t._s(s.time))]), t._v(" "), e("div", { staticClass: "right-template-content" }, [e("p", {}, [t._v("\n              " + t._s(s.rightContent) + "\n            ")])])])]);
        })), t._v(" "), e("div", { ref: "LxKfBottom", staticClass: "LxKf-bottom" }, [e("div", { staticClass: "LxKf-bottom-left1", on: { click: t.changeWztx } }, [e("i", { directives: [{ name: "show", rawName: "v-show", value: !0 === t.wztx, expression: "wztx===true" }], staticClass: "iconfont icon-yuyin" }), t._v(" "), e("i", { directives: [{ name: "show", rawName: "v-show", value: !0 === t.yytx, expression: "yytx===true" }], staticClass: "iconfont icon-jianpan" })]), t._v(" "), e("div", { staticClass: "LxKf-bottom-left2" }, [e("input", { directives: [{ name: "show", rawName: "v-show", value: !0 === t.wzsy, expression: "wzsy===true" }, { name: "model", rawName: "v-model", value: t.EmitMessage, expression: "EmitMessage" }], attrs: { id: "bottomText", contenteditable: "true" }, domProps: { value: t.EmitMessage }, on: { input: [function (s) {
              s.target.composing || (t.EmitMessage = s.target.value);
            }, function (s) {
              t.messageOnInput(t.EmitMessage);
            }] } }), t._v(" "), e("p", { directives: [{ name: "show", rawName: "v-show", value: !0 === t.yysy, expression: "yysy===true" }] }, [t._v("\n          按住 说话\n        ")])]), t._v(" "), e("div", { staticClass: "LxKf-bottom-right1" }, [e("i", { staticClass: "iconfont icon-smiling", on: { click: t.showFace } })]), t._v(" "), e("div", { staticClass: "LxKf-bottom-right2" }, [e("p", { directives: [{ name: "show", rawName: "v-show", value: t.emitMes, expression: "emitMes" }], on: { click: t.emitMessage } }, [t._v("发送")]), t._v(" "), e("i", { directives: [{ name: "show", rawName: "v-show", value: t.AddProject, expression: "AddProject" }], staticClass: "iconfont icon-jiahao", on: { click: t.AddFJ } })])]), t._v(" "), e("div", { directives: [{ name: "show", rawName: "v-show", value: !0 === t.LxKfFJ, expression: "LxKfFJ===true" }], staticClass: "LxKf-FJ" }, [e("div", { directives: [{ name: "show", rawName: "v-show", value: !0 === t.WxFace, expression: "WxFace===true" }], ref: "SowWxFace", staticClass: "wxFace" }, t._l(t.WXBQ, function (s, i) {
          return e("div", {}, [e("img", { staticStyle: { float: "left" }, attrs: { src: s.img, alt: "" }, on: { click: function click(s) {
                t.selectBQ(s);
              } } })]);
        })), t._v(" "), e("div", { directives: [{ name: "show", rawName: "v-show", value: !0 === t.WXFj, expression: "WXFj===true" }], staticClass: "WXFj" }, [t._m(0), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), t._m(3), t._v(" "), t._m(4), t._v(" "), t._m(5), t._v(" "), t._m(6), t._v(" "), t._m(7)])]), t._v(" "), e("modal", { attrs: { msg: t.message, isHideModal: t.HideModal } })], 1) : t._e()]);
      }, staticRenderFns: [function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", {}, [s("i", { staticClass: "iconfont icon-xiangce1" }), this._v(" "), s("span", [this._v("相册")])]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", {}, [s("i", { staticClass: "iconfont icon-xiangji" }), this._v(" "), s("span", [this._v("拍摄")])]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", {}, [s("i", { staticClass: "iconfont icon-shipin" }), this._v(" "), s("span", [this._v("视频聊天")])]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", {}, [s("i", { staticClass: "iconfont icon-dizhi" }), this._v(" "), s("span", [this._v("位置")])]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", {}, [s("i", { staticClass: "iconfont icon-icon-test" }), this._v(" "), s("span", [this._v("红包")])]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", {}, [s("i", { staticClass: "iconfont icon-solid-person" }), this._v(" "), s("span", [this._v("名片")])]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", {}, [s("i", { staticClass: "iconfont icon-ai01" }), this._v(" "), s("span", [this._v("语音输入")])]);
      }, function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", {}, [s("i", { staticClass: "iconfont icon-favorite" }), this._v(" "), s("span", [this._v("我的收藏")])]);
      }] };var rs = i("Z0/y")(ns, os, !1, function (t) {
      i("mJFc");
    }, "data-v-1d26fd22", null).exports,
        cs = { components: { Modal: b, SearchNavbar: c, YcNavbar: H, Navheader: x }, name: "newRec", data: function data() {
        return { num: 0, message: "", login: "", HideModal: !0, icon: [{ text: "未付款", font: "iconfont icon-weifukuan" }, { text: "待发货", font: "iconfont icon-dengdai-copy" }, { text: "已发货", font: "iconfont icon-ccgl-yundanguanli-1" }, { text: "待退货", font: "iconfont icon-ccgl-tuihuosunyi-7" }, { text: "待退款", font: "iconfont icon-tuihuotuikuan" }, { text: "未评价", font: "iconfont icon-pingjia-copy" }, { text: "已评价", font: "iconfont icon-yijingpinglun" }, { text: "已关闭", font: "iconfont icon-yijingguanbi" }], bottom: [{}, {}, {}, {}, {}, {}, {}, {}], orderState: [] };
      }, computed: {}, created: function created() {
        this._getUserCollect(), this._getUserInfo();
      }, methods: { _getUserCollect: function _getUserCollect() {
          if (null === sessionStorage.getItem("userInfo")) console.log("用户还没有登录");else {
            var t = sessionStorage.getItem("userInfo");t = JSON.parse(t), this.login = t.state;
          }
        }, _getUserInfo: function _getUserInfo() {
          var t = this;"1" === this.login && p.a.get("/api/userOrderState", { params: { select: "未付款" } }).then(function (s) {
            t.orderState = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        }, tab: function tab(t, s) {
          var i = this;this.num = t, p.a.get("/api/userOrderState", { params: { select: s } }).then(function (t) {
            i.orderState = t.data;
          }).catch(function (t) {
            console.log(t);
          });
        }, goToLogin: function goToLogin() {
          this.$router.push({ path: "/Login" });
        } } },
        ls = { render: function render() {
        var t = this,
            s = t.$createElement,
            e = t._self._c || s;return e("div", { staticClass: "myOrderState" }, ["1" !== t.login ? e("div", { staticClass: "noLogin" }, [e("img", { attrs: { src: i("R9n1"), alt: "" } }), t._v(" "), e("p", [t._v("您好，登录才查看用户信息 ")]), t._v(" "), e("p", { on: { click: t.goToLogin } }, [t._v("点击前往登录页")])]) : t._e(), t._v(" "), "1" == t.login ? e("div", { attrs: { id: "newRec" } }, [e("navheader"), t._v(" "), e("search-navbar"), t._v(" "), e("div", { staticClass: "newRec-content" }, [e("div", { staticClass: "clearfix newRec-content-top" }, t._l(t.icon, function (s, i) {
          return e("div", { staticClass: "iconStyle", class: { border: i === t.num }, on: { click: function click(e) {
                t.tab(i, s.text);
              } } }, [e("span", [t._v(t._s(s.text))]), t._v(" "), e("i", { class: s.font })]);
        })), t._v(" "), e("div", { staticClass: "newRec-content-bottom" }, t._l(t.bottom, function (s, i) {
          return e("div", { directives: [{ name: "show", rawName: "v-show", value: i === t.num, expression: "index===num" }], staticClass: "bottom-div" }, [e("div", { directives: [{ name: "show", rawName: "v-show", value: 0 === t.orderState.length, expression: "orderState.length===0" }], staticClass: "bottom-div-noOrder" }, [t._v("\n            暂无订单\n\n          ")]), t._v(" "), t._l(t.orderState, function (s, i) {
            return e("div", { directives: [{ name: "show", rawName: "v-show", value: t.orderState.length > 0, expression: "orderState.length>0" }], staticClass: "bottom-div-product" }, [e("div", { staticClass: "product-left" }, t._l(s, function (s, i) {
              return e("div", { staticClass: "product-left-template" }, [e("div", { staticClass: "product-left-template-left" }, [e("img", { attrs: { src: s.img, alt: "" } })]), t._v(" "), e("div", { staticClass: "product-left-template-right" }, [e("div", {}, [t._v(t._s(s.title))]), t._v(" "), e("div", {}, [t._v("价格：" + t._s(s.price) + "元")]), t._v(" "), e("div", {}, [t._v("数量：" + t._s(s.num))])])]);
            })), t._v(" "), t._m(0, !0)]);
          })], 2);
        }))]), t._v(" "), e("modal", { attrs: { msg: t.message, isHideModal: t.HideModal } })], 1) : t._e()]);
      }, staticRenderFns: [function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "product-right" }, [s("p", {}, [this._v("点击操作")])]);
      }] };var ds = i("Z0/y")(cs, ls, !1, function (t) {
      i("7sxG");
    }, "data-v-a3530db6", null).exports;i("aEDl");var vs = { components: { Modal: b, SearchNavbar: c, YcNavbar: H, Navheader: x, swiper: z.swiper, swiperSlide: z.swiperSlide }, name: "newRec", data: function data() {
        return { message: "", HideModal: !0, topImg: [{ img: "http://www.ilqiqi.top/images/mYc/nbi/hgyh.png" }], swiperOption: { direction: "horizontal", pagination: ".swiper-pagination", prevButton: ".swiper-button-prev", nextButton: ".swiper-button-next", autoplayDisableOnInteraction: !1 }, productList: [], productList1: [{ img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/7.jpg", title: "北极甜虾", price: "297", id: "DXL", sindex: 1 }, { img: "http://www.ilqiqi.top/images/mYc/goods/fishs/1.jpg", title: "三文鱼", price: "291", id: "DXL", sindex: 0 }, { img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/10.jpg", title: "红虾", price: "290", id: "DXL", sindex: 1 }, { img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/8.jpg", title: "虾仁", price: "298", id: "DXL", sindex: 1 }, { img: "http://www.ilqiqi.top/images/mYc/goods/bolus/7.jpg", title: "火锅丸", price: "296", id: "HGW", sindex: 6 }, { img: "http://www.ilqiqi.top/images/mYc/goods/bolus/8.jpg", title: "火锅丸", price: "298", id: "HGW", sindex: 7 }, { img: "http://www.ilqiqi.top/images/mYc/goods/bolus/9.jpg", title: "火锅丸", price: "299", id: "HGW", sindex: 8 }, { img: "http://www.ilqiqi.top/images/mYc/goods/bolus/10.jpg", title: "火锅丸", price: "290", id: "HGW", sindex: 9 }] };
      }, computed: { swiper: function swiper() {
          return this.$refs.mySwiper.swiper;
        } }, created: function created() {
        this._getProductList();
      }, methods: { _getProductList: function _getProductList() {
          var t = this;p.a.get("/api/MNavBarTsCy").then(function (s) {
            t.productList = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        }, showProduct: function showProduct(t, s, i) {
          this.$router.push({ path: "/GoodsDetails/", query: { id: s, index: i } });
        }, addCart: function addCart(t, s, i, e, a) {
          I(t, s, i, e, a), this.message = "已经加入购物车", this.HideModal = !1;var n = this;setTimeout(function () {
            n.message = "", n.HideModal = !0;
          }, 2e3);
        } } },
        us = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { attrs: { id: "newRec" } }, [i("navheader"), t._v(" "), i("search-navbar"), t._v(" "), i("div", { staticClass: "newRec-content" }, [i("div", { staticClass: "newRec-content-top" }, [i("swiper", { ref: "mySwiper", attrs: { options: t.swiperOption } }, [t._l(t.topImg, function (t, s) {
          return i("swiper-slide", { key: t.id }, [i("img", { staticStyle: { width: "100%" }, attrs: { src: t.img } })]);
        }), t._v(" "), i("div", { staticClass: "swiper-scrollbar", attrs: { slot: "scrollbar" }, slot: "scrollbar" })], 2)], 1), t._v(" "), i("div", { staticClass: "newRec-content-center" }), t._v(" "), i("div", { staticClass: "newRec-content-bottom" }, t._l(t.productList, function (s, e) {
          return i("div", { staticClass: "newRec-template" }, [i("div", { staticClass: "newRec-template-left", on: { click: function click(i) {
                t.showProduct(e, s.id, s.sindex);
              } } }, [i("img", { attrs: { src: s.img, alt: "" } })]), t._v(" "), i("div", { staticClass: "newRec-template-right" }, [i("div", { staticClass: "newRec-template-title", on: { click: function click(i) {
                t.showProduct(e, s.id, s.sindex);
              } } }, [t._v("\n            亿成优生鲜-" + t._s(s.title))]), t._v(" "), i("div", { staticClass: "newRec-template-price", on: { click: function click(i) {
                t.showProduct(e, s.id, s.sindex);
              } } }, [t._v("\n            亿成新品价格：￥" + t._s(s.price) + "\n          ")]), t._v(" "), i("div", { staticClass: "newRec-template-cz", on: { click: function click(i) {
                t.addCart(e, s.img, s.title, s.price, s.id);
              } } }, [t._v("\n            加入购物车\n          ")])])]);
        }))]), t._v(" "), i("modal", { attrs: { msg: t.message, isHideModal: t.HideModal } })], 1);
      }, staticRenderFns: [] };var ps = i("Z0/y")(vs, us, !1, function (t) {
      i("7v7/");
    }, "data-v-50a15864", null).exports;i("aEDl");var ms = { components: { Modal: b, SearchNavbar: c, YcNavbar: H, Navheader: x, swiper: z.swiper, swiperSlide: z.swiperSlide }, name: "newRec", data: function data() {
        return { message: "", HideModal: !0, topImg: [{ img: "http://www.ilqiqi.top/images/mYc/nbi/xl.png" }], swiperOption: { direction: "horizontal", pagination: ".swiper-pagination", prevButton: ".swiper-button-prev", nextButton: ".swiper-button-next", autoplayDisableOnInteraction: !1 }, productList: [] };
      }, computed: { swiper: function swiper() {
          return this.$refs.mySwiper.swiper;
        } }, created: function created() {
        this._getProductList();
      }, methods: { _getProductList: function _getProductList() {
          var t = this;p.a.get("/api/MNavBarWeekSell").then(function (s) {
            t.productList = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        }, showProduct: function showProduct(t, s, i) {
          this.$router.push({ path: "/GoodsDetails/", query: { id: s, index: i } });
        }, addCart: function addCart(t, s, i, e, a) {
          I(t, s, i, e, a), this.message = "已经加入购物车", this.HideModal = !1;var n = this;setTimeout(function () {
            n.message = "", n.HideModal = !0;
          }, 2e3);
        } } },
        hs = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { attrs: { id: "newRec" } }, [i("navheader"), t._v(" "), i("search-navbar"), t._v(" "), i("div", { staticClass: "newRec-content" }, [i("div", { staticClass: "clearfix newRec-content-top" }, [i("swiper", { ref: "mySwiper", attrs: { options: t.swiperOption } }, [t._l(t.topImg, function (t, s) {
          return i("swiper-slide", { key: t.id }, [i("img", { staticStyle: { width: "100%" }, attrs: { src: t.img } })]);
        }), t._v(" "), i("div", { staticClass: "swiper-scrollbar", attrs: { slot: "scrollbar" }, slot: "scrollbar" })], 2), t._v(" "), i("div", { staticClass: "BottomImg" }, t._l(t.productList, function (s, e) {
          return i("div", { staticClass: "BottomImg-template", on: { click: function click(i) {
                t.showProduct(e, s.id, s.sindex);
              } } }, [i("img", { attrs: { src: s.img, alt: "" } })]);
        }))], 1), t._v(" "), i("div", { staticClass: "newRec-content-center" }), t._v(" "), i("div", { staticClass: "newRec-content-bottom" }, t._l(t.productList, function (s, e) {
          return i("div", { staticClass: "newRec-template" }, [i("div", { staticClass: "newRec-template-left", on: { click: function click(i) {
                t.showProduct(e, s.id, s.sindex);
              } } }, [i("img", { attrs: { src: s.img, alt: "" } })]), t._v(" "), i("div", { staticClass: "newRec-template-right" }, [i("div", { staticClass: "newRec-template-title", on: { click: function click(i) {
                t.showProduct(e, s.id, s.sindex);
              } } }, [t._v("\n            亿成优生鲜-" + t._s(s.title))]), t._v(" "), i("div", { staticClass: "newRec-template-price", on: { click: function click(i) {
                t.showProduct(e, s.id, s.sindex);
              } } }, [t._v("\n            亿成新品价格：￥" + t._s(s.price) + "\n          ")]), t._v(" "), i("div", { staticClass: "newRec-template-cz", on: { click: function click(i) {
                t.addCart(e, s.img, s.title, s.price, s.id);
              } } }, [t._v("\n            加入购物车\n          ")])])]);
        }))]), t._v(" "), i("modal", { attrs: { msg: t.message, isHideModal: t.HideModal } })], 1);
      }, staticRenderFns: [] };var gs = i("Z0/y")(ms, hs, !1, function (t) {
      i("KMbX");
    }, "data-v-86ed5718", null).exports;i("aEDl");var fs = { components: { Modal: b, SearchNavbar: c, YcNavbar: H, Navheader: x, swiper: z.swiper, swiperSlide: z.swiperSlide }, name: "XsMs", data: function data() {
        return { message: "", HideModal: !0, topImg: [{ img: "http://www.ilqiqi.top/images/mYc/nbi/ms1.jpg" }, { img: "http://www.ilqiqi.top/images/mYc/nbi/ms2.jpg" }], swiperOption: { direction: "horizontal", loop: !0, pagination: ".swiper-pagination", prevButton: ".swiper-button-prev", nextButton: ".swiper-button-next", autoplay: 3e3, autoplayDisableOnInteraction: !1 }, productList: [], productList1: [{ img: "http://www.ilqiqi.top/images/mYc/goods/crad/5.jpg", title: "雪蟹", price: "294", id: "PXL", sindex: 4 }, { img: "http://www.ilqiqi.top/images/mYc/goods/chichens/5.jpg", title: "鸡胸肉", price: "294", id: "JXL", sindex: 3 }, { img: "http://www.ilqiqi.top/images/mYc/goods/ducks/5.jpg", title: "鸭舌", price: "294", id: "YXL", sindex: 3 }, { img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/5.jpg", title: "大龙虾", price: "295", id: "DXL", sindex: 3 }, { img: "http://www.ilqiqi.top/images/mYc/goods/bolus/5.jpg", title: "火锅丸", price: "295", id: "HGW", sindex: 4 }] };
      }, computed: { swiper: function swiper() {
          return this.$refs.mySwiper.swiper;
        } }, created: function created() {
        this._getProductList();
      }, methods: { _getProductList: function _getProductList() {
          var t = this;p.a.get("/api/MNavBarXsMs").then(function (s) {
            t.productList = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        }, showProduct: function showProduct(t, s, i) {
          this.$router.push({ path: "/GoodsDetails/", query: { id: s, index: i } });
        }, addCart: function addCart(t, s, i, e, a) {
          I(t, s, i, e, a), this.message = "已经加入购物车", this.HideModal = !1;var n = this;setTimeout(function () {
            n.message = "", n.HideModal = !0;
          }, 2e3);
        } } },
        _s = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { attrs: { id: "XsMs" } }, [i("navheader"), t._v(" "), i("search-navbar"), t._v(" "), i("div", { staticClass: "newRec-content" }, [i("div", { staticClass: "newRec-content-top" }, [i("swiper", { ref: "mySwiper", attrs: { options: t.swiperOption } }, [t._l(t.topImg, function (t, s) {
          return i("swiper-slide", { key: t.id }, [i("img", { staticStyle: { width: "100%" }, attrs: { src: t.img } })]);
        }), t._v(" "), i("div", { staticClass: "swiper-pagination", attrs: { slot: "pagination" }, slot: "pagination" }), t._v(" "), i("div", { staticClass: "swiper-scrollbar", attrs: { slot: "scrollbar" }, slot: "scrollbar" })], 2)], 1), t._v(" "), i("div", { staticClass: "newRec-content-center" }), t._v(" "), i("div", { staticClass: "newRec-content-bottom" }, t._l(t.productList, function (s, e) {
          return i("div", { staticClass: "newRec-template" }, [i("div", { staticClass: "newRec-template-left", on: { click: function click(i) {
                t.showProduct(e, s.id, s.sindex);
              } } }, [i("img", { attrs: { src: s.img, alt: "" } })]), t._v(" "), i("div", { staticClass: "newRec-template-right" }, [i("div", { staticClass: "newRec-template-title", on: { click: function click(i) {
                t.showProduct(e, s.id, s.sindex);
              } } }, [t._v("\n            亿成优生鲜-" + t._s(s.title))]), t._v(" "), i("div", { staticClass: "newRec-template-price", on: { click: function click(i) {
                t.showProduct(e, s.id, s.sindex);
              } } }, [t._v("\n            限时秒杀价格：￥" + t._s(s.price) + "\n          ")]), t._v(" "), i("div", { staticClass: "newRec-template-cz", on: { click: function click(i) {
                t.addCart(e, s.img, s.title, s.price, s.id);
              } } }, [t._v("\n            加入购物车\n          ")])])]);
        }))]), t._v(" "), i("modal", { attrs: { msg: t.message, isHideModal: t.HideModal } })], 1);
      }, staticRenderFns: [] };var ws = i("Z0/y")(fs, _s, !1, function (t) {
      i("RTLj");
    }, "data-v-3d0c1ec7", null).exports;i("aEDl");var Cs = { components: { Modal: b, SearchNavbar: c, YcNavbar: H, Navheader: x, swiper: z.swiper, swiperSlide: z.swiperSlide }, name: "newRec", data: function data() {
        return { message: "", HideModal: !0, topImg: [{ img: "http://www.ilqiqi.top/images/mYc/nbi/yx3.jpg" }, { img: "http://www.ilqiqi.top/images/mYc/nbi/yx2.jpg" }], swiperOption: { direction: "horizontal", loop: !0, pagination: ".swiper-pagination", prevButton: ".swiper-button-prev", nextButton: ".swiper-button-next", autoplay: 3e3, autoplayDisableOnInteraction: !1 }, productList: [], productList1: [{ img: "http://www.ilqiqi.top/images/mYc/goods/crad/1.jpg", title: "帝王蟹", price: "291", id: "PXL", sindex: 1 }, { img: "http://www.ilqiqi.top/images/mYc/goods/chichens/1.jpg", title: "肉食鸡", price: "291", id: "JXL", sindex: 1 }, { img: "http://www.ilqiqi.top/images/mYc/goods/crad/1.jpg", title: "整鸭", price: "291", id: "YXL", sindex: 1 }, { img: "http://www.ilqiqi.top/images/mYc/goods/shrimps/1.jpg", title: "白虾", price: "291", id: "DXL", sindex: 1 }, { img: "http://www.ilqiqi.top/images/mYc/goods/bolus/1.jpg", title: "火锅丸", price: "291", id: "HGW", sindex: 1 }] };
      }, computed: { swiper: function swiper() {
          return this.$refs.mySwiper.swiper;
        } }, created: function created() {
        this._getProductList();
      }, methods: { _getProductList: function _getProductList() {
          var t = this;p.a.get("/api/MNavBarYcJX").then(function (s) {
            t.productList = s.data;
          }).catch(function (t) {
            console.log(t);
          });
        }, showProduct: function showProduct(t, s, i) {
          this.$router.push({ path: "/GoodsDetails/", query: { id: s, index: i } });
        }, addCart: function addCart(t, s, i, e, a) {
          I(t, s, i, e, a), this.message = "已经加入购物车", this.HideModal = !1;var n = this;setTimeout(function () {
            n.message = "", n.HideModal = !0;
          }, 2e3);
        } } },
        xs = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { attrs: { id: "newRec" } }, [i("navheader"), t._v(" "), i("search-navbar"), t._v(" "), i("div", { staticClass: "newRec-content" }, [i("div", { staticClass: "newRec-content-top" }, [i("swiper", { ref: "mySwiper", attrs: { options: t.swiperOption } }, [t._l(t.topImg, function (t, s) {
          return i("swiper-slide", { key: t.id }, [i("img", { staticStyle: { width: "100%" }, attrs: { src: t.img } })]);
        }), t._v(" "), i("div", { staticClass: "swiper-pagination", attrs: { slot: "pagination" }, slot: "pagination" }), t._v(" "), i("div", { staticClass: "swiper-scrollbar", attrs: { slot: "scrollbar" }, slot: "scrollbar" })], 2)], 1), t._v(" "), t._m(0), t._v(" "), i("div", { staticClass: "newRec-content-bottom" }, t._l(t.productList, function (s, e) {
          return i("div", { staticClass: "newRec-template" }, [i("div", { staticClass: "newRec-template-left", on: { click: function click(i) {
                t.showProduct(e, s.id, s.sindex);
              } } }, [i("img", { attrs: { src: s.img, alt: "" } })]), t._v(" "), i("div", { staticClass: "newRec-template-right" }, [i("div", { staticClass: "newRec-template-title", on: { click: function click(i) {
                t.showProduct(e, s.id, s.sindex);
              } } }, [t._v("\n            亿成优生鲜-" + t._s(s.title))]), t._v(" "), i("div", { staticClass: "newRec-template-price", on: { click: function click(i) {
                t.showProduct(e, s.id, s.sindex);
              } } }, [t._v("\n            亿成新品价格：￥" + t._s(s.price) + "\n          ")]), t._v(" "), i("div", { staticClass: "newRec-template-cz", on: { click: function click(i) {
                t.addCart(e, s.img, s.title, s.price, s.id);
              } } }, [t._v("\n            加入购物车\n          ")])])]);
        }))]), t._v(" "), i("modal", { attrs: { msg: t.message, isHideModal: t.HideModal } })], 1);
      }, staticRenderFns: [function () {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", { staticClass: "newRec-content-center" }, [s("h3", [this._v("本/期/精/选")]), this._v(" "), s("p", [this._v("FRESH PREMIUM")])]);
      }] };var ys = i("Z0/y")(Cs, xs, !1, function (t) {
      i("zOIU");
    }, "data-v-e5002660", null).exports;e.a.use(o.a);var bs = new o.a({ routes: [{ path: "/", name: "Index", component: ot }, { path: "/Login", name: "Login", component: lt }, { path: "/Register", name: "Register", component: ut }, { path: "/Classify", name: "Classify", component: g }, { path: "/UserInfo", name: "UserInfo", component: xt }, { path: "/ShoppingCart", name: "ShoppingCart", component: gt }, { path: "/Details", name: "Details", component: w }, { path: "/GoodsDetails/", name: "GoodsDetails", component: P }, { path: "/Nearby", name: "Nearby", component: St }, { path: "/Search", name: "Search", component: kt }, { path: "/BuyProduct", name: "BuyProduct", component: Dt }, { path: "/cartProduct", name: "cartProduct", component: Yt }, { path: "/PayPage", name: "PayPage", component: Jt }, { path: "/nowRec", name: "NowRec", component: Wt }, { path: "/Discount", name: "Discount", component: $t }, { path: "/FreeEat", name: "FreeEat", component: ss }, { path: "/LogisticsInfo", name: "LogisticsInfo", component: as }, { path: "/LxKf", name: "LxKf", component: rs }, { path: "/myOrder", name: "myOrder", component: ds }, { path: "/TsCy", name: "TsCy", component: ps }, { path: "/weekSell", name: "weekSell", component: gs }, { path: "/XsMs", name: "XsMs", component: ws }, { path: "/YcJx", name: "YcJx", component: ys }] }),
        Ss = (i("CF4o"), i("SjFd")),
        As = i.n(Ss),
        Is = i("mJM0"),
        ks = i.n(Is),
        qs = i("Q/R+"),
        Ms = i.n(qs),
        Ts = i("JOg9"),
        Ps = i.n(Ts);e.a.config.productionTip = !1, e.a.use(G.a), e.a.use(As.a, { loading: i("R9n1") }), e.a.component("v-distpicker", Mt.a), e.a.use(ks.a), e.a.use(Ms.a, Ps()("http://47.93.253.190:3000")), new e.a({ el: "#app", router: bs, render: function render(t) {
        return t(n);
      }, data: { Hub: new e.a() } });
  }, O0f5: function O0f5(t, s) {}, OahG: function OahG(t, s) {}, "QnS+": function QnS(t, s) {}, R9n1: function R9n1(t, s) {
    t.exports = "data:image/png;base64,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";
  }, RTLj: function RTLj(t, s) {}, Rfgr: function Rfgr(t, s) {}, T8xf: function T8xf(t, s) {}, UGy7: function UGy7(t, s, i) {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 });var e = { render: function render() {
        var t = this.$createElement;return (this._self._c || t)("div", { class: this.slideClass }, [this._t("default")], 2);
      }, staticRenderFns: [] },
        a = i("Z0/y")({ name: "swiper-slide", data: function data() {
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
        } } }, e, !1, null, null, null);s.default = a.exports;
  }, V8DF: function V8DF(t, s) {}, VLuo: function VLuo(t, s) {}, Wshz: function Wshz(t, s) {}, XXFe: function XXFe(t, s) {}, YYK1: function YYK1(t, s) {}, aEDl: function aEDl(t, s) {}, blyU: function blyU(t, s) {}, bwMv: function bwMv(t, s) {}, "cf/s": function cfS(t, s) {}, du6P: function du6P(t, s) {}, h38p: function h38p(t, s) {}, "hs/j": function hsJ(t, s) {}, iaOg: function iaOg(t, s) {}, jNDR: function jNDR(t, s) {}, kePm: function kePm(t, s) {}, mJFc: function mJFc(t, s) {}, nyqd: function nyqd(t, s) {}, oos2: function oos2(t, s) {
    t.exports = "data:image/gif;base64,R0lGODlhZABkAKIEAN7e3rq6uv///5mZmQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjA4RUZDMDI3MjA2ODExODA4M0Y1OTQyMzVDRDM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMzE0Rjk3NDdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzE0Rjk3MzdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVBMTZDQjczOTIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwOEVGQzAyNzIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQFAAAEACwAAAAAZABkAAAD/0i63P4wykmrvTjrzbv/YCiOZGme6CasbOqObPvOXRzTeGbLeT/tK18KQLwABZeBUlghOgGVY0VJHTAlT2cUOK0ur4+s9sedeKngsBhK3lHO3zRjXZRIJfC4fEFv28xwew50bBB3EHlWgg2EEYcOiYtqYo5lD3mSk5QPjwyRmYNrhpYNmKChog6dCp+njKkNqwSmrq+wDG6QtD4BvRiNsX+lu296Hb3IARd9qjyegRZnH8nUTbfR0IDZG9TdFJsa0trEGd3eE08eVcWJihzm5ovt6x7w8WDz9CD25z35aCT4Vcvxz9gIgchwFJyBUOG8HvwckqNhT6K4K/1oXJST0P8HwFogQ4ocSbKkyVoFP8pJaRARS31MXsJ0KdNdzJo2L+FsqXFnzmE7r/j8CVRmmqDjXh7F2UXpSqMno0qdSrWq1ZNENWby4m/mzY0uJvYUa6JdV7NjW4XNZ1Ft2X9nH5ZIKYSuiIX44ILAu5StOr8RvGIQ/EwuB8OBuW4Aq9NtBseNCbOTXJjx4G14MDdVPJny5qyROS9gDJkmzxkTLZM95ZhcaVCQU6+WJ1v17D2lxb4WRLa3Zkmvff/mPZxV8VnH8x5fvfur5cqem3tMjvw5dJW4qd++HRe7ac/GRWcX/9176NNCwYcn//3qevXuz6OPn9g6/czw7xedrz9x//8KAAYo4IAEFthAAgAh+QQFAAAEACwLAAUAPwAjAAADxUi63P4QyAmrvfhNmrvP2/aNJBNyZdqdkvoFsMcCnmCTcB6AbGb/gpcuhpn5gLfOMFfsXZA/z5JoMT6hQeV0V3VWsEnt8mL9YkdbbsT7AGeF00rZ4U5t5ewGWJVenyB1fHEaeQt7Ln0Oc4aHiIMNiwqNjo8mIW2TCwObcGOQl3qZCpukA1KVCyJ0Zw6lrhl3I6IErrUYniRQELW2FzouQBW8vC7FDcPExsrIvcouzK/OxdCk0sbU1svI2drJ3NfR387V4hgJACH5BAUAAAQALBoABQA/ACMAAAPFSLrcHjC6Sau9L0LMu1ea9o0kE0pl6p2b6g3wynpATcL4wLEBV/+ATw63m2GAv9cwduEdkbbOkmlxXqBRzpRKsVawWe20afxiR1tdxTsBB9HbddnhTsW78wZYlcafKHV8YxNsDHsufRl/dIeIgw2FCo2OjyYhbZOUS4oohpkXAqEVd5CdnlAeoaoCFKQ0Zxirsq1DKaigsrO0XCRAsbm6LsIKwMDDwsXGxynJucsqzcHPI9Gq09DR1y7N2sjF3cPO4MfWHQkAIfkEBQAABAAsLgAFADEAMAAAA71Is0z+MMpJJ2s1a33v/qDTYWFJjYupSugQBvAKtR9sB7KI1ncs05qeLQfMCH2rIuWIVCknzJxiV2HiiFRoVPqEbLnZiFWqGy2P5HJHi053CV/3WjJOq1Pi+AbAz3jobR98gwAyehSEiYY9e4mKi02Ijo92kpOUlRCXk5kRm46dnp+EoZqjfaWmn6kSq6ytl6+Wg7IZtLW4ubq7vL2dAsDBwsPApcTHyL/Iy8GZzM/FdtDPztPHytbDodnCDgkAIfkEBQAABAAsOwAKACQAPwAAA69IujzOMMpJnB0062u1h1z3jeEzeqV5Zum6te6UYrFc1vaNR/De9D4FMDgLLoqngDLHSSqfkuHkSV3ympqqlunRbndeLy4sjpG/5jN1rLayz0a4kUCeL9B2BTTP7/v/gIERAISFhoeELoiLjCeMj4YjkJOJHpSTkpeLjpqIK52RgqKjpKUjAoECqqp+q66oea+vdrKyRrW2Qbi5O7u8OL6uusGsw8Fzx7S4fMt9sxEJACH5BAUAAAQALDsAGQAkAD8AAAOtSLrcziO+SV+8o2qL8f5d+GmhOHJldzZpuS6t+RKxOtO1dCv5DrU+VirokBGFmaNyyWw6n8yAdEqtSl/WrPak7VJH3vB1Iw6Dy1ku2rpaf6HwuHzuBMQBePwzz7cz+31LgIBHg4REhoc+iYo7jHyIj3oTApUCGpJ+DZaWG48PnJ2ehg6hoqONCqanqJOlq02rlbGyTLKXtrW5prSwu6G9vL/Aw6xHusW4yU/EOwkAIfkEBQAABAAsLgAtADEAMQAAA7lIutz+ZMhJq4Q4L8u7/k0nUmA5nlepoaf6sZ67wpb80pOt73zv/8CgcLgLEGWBZPIIUjqNTMzzGX1Mp1XGFZtVbLnZL7gqdnYJZWUPwAZo0lBbu/0p7+b0+laHz+vHCwKCgw59fn9LD4OEhYZCi4uNjkCQjA2GbJSVAg+Ybj+bnJ2YoJsYpD6hp6g8qqt9qaavsK2ys3i1lR+sNq4ZvDK+v7Q6wreZO8a3PcpdzVnP0JBnitPU1dcOCQAh+QQFAAAEACwaADoAPwAkAAADyEi63P4wkiGrvXhojbu3W0h9ZCmKZZqdqOo+7PnOTCzTs33jrh7yL99GIigKXIFkoCIcOYzGlFIJ0j2g0dKUWmVdsUXSltttMcBZBmDNdozJZecZ/WC33W8cOtyw2/F5L3tHDn53DW9Jgnt1hgAPiUsqgxCOj5CJk3SVjhGZJZSchp6fH4wRlhKlHaGifqqrFq2uf7CBF6cSqRWxRJu6nby3smAXu8JbrMUWx7ZTHlgYzc6SQIXB1jPT2Snb3CWj39qv4jRr5QwJACH5BAUAAAQALAsAOgA/ACQAAAPHSLrcJC7KSesUGNvNu8og5I3kE4Jlap2n6kZs+86xPKu1fZc5uuM9zS8VFE0ASIBrwBxccpZkMtVsSmob6bRUtTpiHO3W0/V+fVkx0hFoux1l80ytZLvbkbjzRq8z7ndwenN0EYBvgnEvfYaHAXmDKoyNhxJ6eyWFEo6PloqZmpSAE5egYhScFJEek5uOqqtpahWpsJ+yWha1tl0doRO7pLdRp7qvFsMVs8aVyGWsUhzBvJhDDdPWKtjZJdvcJM3fL+Hi450qCQAh+QQFAAAEACwFAC0AMQAxAAADukgq3P5MyUmrlTDryzvRoOONU2hG5HiaKblurfpCsTs3da7vfO//wKBwCAQQa4Bk8jhSOo1My/MZpUynVckVW91ymd7vMezMkpXmsyfADvDIo3Z75yXJ57pt6o7PUfd8bBUDhIVDgW6DhYRCiIkTi4tAjhaRhj+UipaYiBeWjD6dnp+hopWkPaanmzyZo6w6rq+RrYEjnwO1fLeosbu8sDm2wLS6giS4WavFypC9zQrJ0M6S09SX1s4SCQAh+QQFAAAEACwFABkAJAA/AAADrki6Ks4wytmcpRjb/bJfXPh5oThSZXlOqbpGrfmC8TZD9XUz+Q63vp8riOMQUZ2jcslsOp8MgHRKrUpf1qz2pO1SR97w1SMOg8tZLtq6Wn+h8Lh8Tj8F4oF83qnv35V+fkeBgUSEhTuHiDOKiy+NfT6QepKTGQOYAxOQHpmZEoofnp8RhyOjpBCCp6iYTK2aS7CxR7OvsLK4uai3rb2jv8BKtrvCxZ5Nvsm8TsYRCQAh+QQFAAAEACwFAAoAJAA/AAADrki63K4ivklnvKJqi+X+S3eBoOiRmnmilMqm7tvG8kPXjZrhzs1Dvl+Qp6MAjqii48gEkILN6AcalcIwj2p1g81qt7yv9icG18pWHJr5I6zbijI8/p0vzHa6M8/v+/+AGgGDhIWGgyyHioski46FII+SiBuTkpGWio2ZhyickIGhoqOkogOAA6mpfKqtp3Curm2xsT+0tTW3uC+6uyy9rTjAqsLDtr2wt3bKebI/CQA7";
  }, qJdi: function qJdi(t, s) {}, rXwG: function rXwG(t, s) {}, sivq: function sivq(t, s) {}, syvT: function syvT(t, s, i) {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 });var e = "undefined" != typeof window;e && (window.Swiper = i("Bnvi"));var a = { name: "swiper", props: { options: { type: Object, default: function _default() {
            return { autoplay: 3500 };
          } }, notNextTick: { type: Boolean, default: function _default() {
            return !1;
          } } }, data: function data() {
        return { defaultSwiperClasses: { wrapperClass: "swiper-wrapper" } };
      }, ready: function ready() {
        !this.swiper && e && (this.swiper = new Swiper(this.$el, this.options));
      }, mounted: function mounted() {
        var t = this,
            s = function () {
          if (!t.swiper && e) {
            delete t.options.notNextTick;var s = !1;for (var i in t.defaultSwiperClasses) {
              t.defaultSwiperClasses.hasOwnProperty(i) && t.options[i] && (s = !0, t.defaultSwiperClasses[i] = t.options[i]);
            }var a = function a() {
              t.swiper = new Swiper(t.$el, t.options);
            };s ? t.$nextTick(a) : a();
          }
        }(this.options.notNextTick || this.notNextTick) ? s() : this.$nextTick(s);
      }, updated: function updated() {
        this.swiper && this.swiper.update();
      }, beforeDestroy: function beforeDestroy() {
        this.swiper && (this.swiper.destroy(), delete this.swiper);
      } },
        n = { render: function render() {
        var t = this,
            s = t.$createElement,
            i = t._self._c || s;return i("div", { staticClass: "swiper-container" }, [t._t("parallax-bg"), t._v(" "), i("div", { class: t.defaultSwiperClasses.wrapperClass }, [t._t("default")], 2), t._v(" "), t._t("pagination"), t._v(" "), t._t("button-prev"), t._v(" "), t._t("button-next"), t._v(" "), t._t("scrollbar")], 2);
      }, staticRenderFns: [] },
        o = i("Z0/y")(a, n, !1, null, null, null);s.default = o.exports;
  }, tJMp: function tJMp(t, s) {}, vMvA: function vMvA(t, s) {}, vNQI: function vNQI(t, s) {}, yIeE: function yIeE(t, s) {}, zOIU: function zOIU(t, s) {} }, ["NHnr"]);
//# sourceMappingURL=app.f3c0c2666bbf74744d82.js.map
//# sourceMappingURL=app.f3c0c2666bbf74744d82.js.map