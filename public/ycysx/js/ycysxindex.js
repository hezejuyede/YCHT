// main的JS特效
window.onload = function () {
    getNowTime()
};

function getNowTime() {

}


$(document).ready(() => {

    jQuery.get('/JQSecondKill', ((data) => {
        let SK1 = data[0].list1;
        let SK2 = data[1].list2;
        let SK3 = data[2].list3;

        $(SK1).each((index, e) => {
            $('#sk1').append("<div class="+"time-preference-goods-templet"+"><a href='goodsdetails/" + SK1[index].id + SK1[index].sindex+"'class="+"goods-item-link"+"><div class="+"goods-item-price"+"><span class="+"goods-item-price-jd"+">"+"￥"+SK1[index].price+"</span><span class="+"goods-item-price-promo"+">"+"￥"+"399"+"</span></div><img src="+SK1[index].img +"><p class="+"goods-item-name"+">"+SK1[index].title+"</p><div class="+"goods-item-progress"+"><p class="+"goods-item-progress_text"+">好评率99%</p></div><p class="+"goods-item-btn"+">立即抢购</p></a></div>");
        });
        $(SK2).each((index, e) => {


            $('#sk2').append("<div class="+"time-preference-goods-templet"+"><a href='goodsdetails/" + SK2[index].id + SK2[index].sindex+"'class="+"goods-item-link"+"><div class="+"goods-item-price"+"><span class="+"goods-item-price-jd"+">"+"￥"+SK2[index].price+"</span><span class="+"goods-item-price-promo"+">"+"￥"+"399"+"</span></div><img src="+SK2[index].img +"><p class="+"goods-item-name"+">"+SK2[index].title+"</p><div class="+"goods-item-progress"+"><p class="+"goods-item-progress_text"+">好评率99%</p></div><p class="+"goods-item-btn"+">立即抢购</p></a></div>");
        });
        $(SK3).each((index, e) => {
            $('#sk3').append("<div class="+"time-preference-goods-templet"+"><a href='goodsdetails/" + SK3[index].id + SK3[index].sindex+"' class="+"goods-item-link"+"><div class="+"goods-item-price"+"><span class="+"goods-item-price-jd"+">"+"￥"+SK3[index].price+"</span><span class="+"goods-item-price-promo"+">"+"￥"+"399"+"</span></div><img src="+SK3[index].img +"><p class="+"goods-item-name"+">"+SK3[index].title+"</p><div class="+"goods-item-progress"+"><p class="+"goods-item-progress_text"+">好评率99%</p></div><p class="+"goods-item-btn"+">立即抢购</p></a></div>");
        });

    }));

    jQuery.get('/JQLeftNav', ((data) => {
        $(data).each((index,e)=>{

            $('.menu-left-first-ul').append(
                "<li> <i class="+'iconfont'+" "+data[index].icon + "></i><a >" + data[index].text + "</a><span> > </span> </li>"
            );
        })
    }));

    jQuery.get('/JQBannerList', ((data) => {

        $(data).each((index, e) => {
            $('.content-banner-center-img')
                .append(" <li><a href='goodsdetails/" + data[index].id + data[index].sindex+"'><img src=" + data[index].img + "></a></li>");
            $('.content-banner-center-circle')
                .append("<li></li>")
        });
        let count = 0;
        let isGo = false;
        let timer;
        let bannerUl = $('.content-banner-center-img')[0];
        let bannerLi = $('.content-banner-center-img li');
        let length = bannerLi.length;

        let left = $(" .left");
        let right = $(".right");


        const ol = $('.content-banner-center-circle');
        const olLi = $('.content-banner-center-circle li');
        olLi[0].style.backgroundColor = "#3ec455";
        let showtime = () => {
            timer = setInterval(() => {
                if (isGo === false) {
                    if (count < bannerLi.length) {
                        count++;
                        bannerUl.style.transform = "translate(" + -800 * count + "px)";
                        if (count >= bannerLi.length - 1) {
                            count = bannerLi.length - 1;
                            isGo = true;
                        }

                    }
                    else {
                        count = bannerLi.length - 1;
                        isGo = true;
                    }

                }
                else {
                    if (count >= 0) {
                        count--;
                        bannerUl.style.transform = "translate(" + -800 * count + "px)";
                        if (count <= 0) {
                            count = 0;
                            isGo = false;
                        }
                    }
                    else {
                        count = 0;
                        isGo = false;
                    }

                }
                $(olLi).each((index, e) => {
                    $(olLi[index]).css('backgroundColor', "#666666");
                });
                $(olLi[count]).css('backgroundColor', "#3ec455");

            }, 4000)
        };
        showtime();

        left.mouseenter(() => {
            clearInterval(timer)
        });
        left.mouseleave(() => {
            showtime();

        });
        left.click(() => {
            if (count < bannerLi.length) {
                count++
                if (count === bannerLi.length) {
                    clearInterval(timer)
                }
                else {
                    bannerUl.style.transform = "translate(" + -800 * count + "px)";
                    $(olLi).each((index, e) => {
                        olLi[index].style.backgroundColor = "#666666";
                    });
                    olLi[count].style.backgroundColor = "#3ec455";
                }
            }


        });

        right.mouseenter(() => {
            clearInterval(timer)
        });
        right.mouseleave(() => {
            showtime();
        });

        right.click(() => {
            if (count >= 0) {
                count--;
                if (count < 0) {
                    clearInterval(timer)
                }
                else {
                    bannerUl.style.transform = "translate(" + -800 * count + "px)";
                    $(olLi).each((index, e) => {
                        olLi[index].style.backgroundColor = "#666666";
                    });
                    olLi[count].style.backgroundColor = "#3ec455";

                }
            }

        });

        ol.mouseenter(() => {
            clearInterval(timer)
            olLi.each((index, e) => {
                $(olLi[index]).on('mouseenter', () => {
                    $(olLi[index])
                        .css('backgroundColor', "#3ec455")
                        .siblings()
                        .css('backgroundColor', "#666666");
                    count = index;
                    bannerUl.style.transform = "translate(" + -800 * count + "px)";
                    count = index+1;
                })
            });
        });

        ol.mouseleave(() => {
            showtime();
        });
    }));

    jQuery.get('/JQProductList',((data)=>{
        console.log(data)

        let pxc = data[0].classify;
        let pxb = data[0].bannerImg;
        let pxr = data[0].leftImg;
        let pxImg = data[0].goodsImg;

        $(pxc).each((index,e)=>{
            $('#crabList').append("<a >" + pxc[index].name +"</a>")

        });
        $(pxb).each((index, e) => {
            $('#crabUL').append(" <li><a><img src=" + pxb[index].img + "></a></li>");
            $('#crabOL').append("<li></li>")
        });
       /* $(pxr).each((index, e) => {
            $('#crabRight').append(" <img src=" + pxr[index].img + ">");
        });*/
        $(pxImg).each((index, e) => {
            $('#cradProductList').append( "<div class="+"goods-list-bottom-templet"+"><a href='goodsdetails/" + 'PXL' + index+"'class="+"goods-list-bottom-templet-link"+"><img src=" + pxImg[index].img + "><p class="+"goods-list-bottom-templet-name"+">" + pxImg[index].title +"</p></a><p class="+"goods-list-bottom-templet-price"+">"+"￥"+ pxImg[index].price +"</p></div>");
        });


        let count = 0;
        let isGo = false;
        let timer;
        let bannerUl = $('#crabUL')[0];

        let bannerLi = $('.crabUL li');
        let length = bannerLi.length;

        let left = $(" #crabLeft");
        let right = $("#crabRight");


        const ol = $('#crabOL');

        const olLi = $('.crabOL li');
        olLi[0].style.backgroundColor = "#3ec455";
        let showtime = () => {
            timer = setInterval(() => {
                if (isGo === false) {
                    if (count < bannerLi.length) {
                        count++;
                        bannerUl.style.transform = "translate(" + -600 * count + "px)";
                        if (count >= bannerLi.length - 1) {
                            count = bannerLi.length - 1;
                            isGo = true;
                        }

                    }
                    else {
                        count = bannerLi.length - 1;
                        isGo = true;
                    }

                }
                else {
                    if (count >= 0) {
                        count--;
                        bannerUl.style.transform = "translate(" + -600 * count + "px)";
                        if (count <= 0) {
                            count = 0;
                            isGo = false;
                        }
                    }
                    else {
                        count = 0;
                        isGo = false;
                    }

                }
                $(olLi).each((index, e) => {
                    $(olLi[index]).css('backgroundColor', "#666666");
                });
                $(olLi[count]).css('backgroundColor', "#3ec455");

            }, 4000)
        };
        showtime();

        left.mouseenter(() => {
            clearInterval(timer)
        });
        left.mouseleave(() => {
            showtime();

        });
        left.click(() => {
            if (count < bannerLi.length) {
                count++
                if (count === bannerLi.length) {
                    clearInterval(timer)
                }
                else {
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    $(olLi).each((index, e) => {
                        olLi[index].style.backgroundColor = "#666666";
                    });
                    olLi[count].style.backgroundColor = "#3ec455";
                }
            }


        });

        right.mouseenter(() => {
            clearInterval(timer)
        });
        right.mouseleave(() => {
            showtime();
        });

        right.click(() => {
            if (count >= 0) {
                count--;
                if (count < 0) {
                    clearInterval(timer)
                }
                else {
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    $(olLi).each((index, e) => {
                        olLi[index].style.backgroundColor = "#666666";
                    });
                    olLi[count].style.backgroundColor = "#3ec455";

                }
            }

        });

        ol.mouseenter(() => {
            clearInterval(timer)
            olLi.each((index, e) => {
                $(olLi[index]).on('mouseenter', () => {
                    $(olLi[index])
                        .css('backgroundColor', "#3ec455")
                        .siblings()
                        .css('backgroundColor', "#666666");
                    count = index;
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    count = index+1;
                })
            });
        });

        ol.mouseleave(() => {
            showtime();
        });

    }));

    jQuery.get('/JQProductList',((data)=>{

        let pxc = data[4].classify;
        let pxb = data[4].bannerImg;
        let pxr = data[4].leftImg;
        let pxImg = data[4].goodsImg;

        $(pxc).each((index,e)=>{
            $('#shrimpList').append("<a >" + pxc[index].name +"</a>")
        });
        $(pxb).each((index, e) => {
            $('#shrimpUL').append(" <li><a><img src=" + pxb[index].img + "></a></li>");
            $('#shrimpOL').append("<li></li>")
        });
        /* $(pxr).each((index, e) => {
             $('#crabRight').append(" <img src=" + pxr[index].img + ">");
         });*/
        $(pxImg).each((index, e) => {
            $('#shrimpProductList').append( "<div class="+"goods-list-bottom-templet"+"><a href='goodsdetails/" + 'DXL' + index+"'class="+"goods-list-bottom-templet-link"+"><img src=" + pxImg[index].img + "><p class="+"goods-list-bottom-templet-name"+">" + pxImg[index].title +"</p></a><p class="+"goods-list-bottom-templet-price"+">"+"￥"+ pxImg[index].price +"</p></div>");
        });


        let count = 0;
        let isGo = false;
        let timer;
        let bannerUl = $('#shrimpUL')[0];

        let bannerLi = $('.shrimpUL li');
        let length = bannerLi.length;

        let left = $(" #shrimpLeft");
        let right = $("#shrimpRight");


        const ol = $('#shrimpOL');

        const olLi = $('.shrimpOL li');
        olLi[0].style.backgroundColor = "#3ec455";
        let showtime = () => {
            timer = setInterval(() => {
                if (isGo === false) {
                    if (count < bannerLi.length) {
                        count++;
                        bannerUl.style.transform = "translate(" + -600 * count + "px)";
                        if (count >= bannerLi.length - 1) {
                            count = bannerLi.length - 1;
                            isGo = true;
                        }

                    }
                    else {
                        count = bannerLi.length - 1;
                        isGo = true;
                    }

                }
                else {
                    if (count >= 0) {
                        count--;
                        bannerUl.style.transform = "translate(" + -600 * count + "px)";
                        if (count <= 0) {
                            count = 0;
                            isGo = false;
                        }
                    }
                    else {
                        count = 0;
                        isGo = false;
                    }

                }
                $(olLi).each((index, e) => {
                    $(olLi[index]).css('backgroundColor', "#666666");
                });
                $(olLi[count]).css('backgroundColor', "#3ec455");

            }, 4000)
        };
        showtime();

        left.mouseenter(() => {
            clearInterval(timer)
        });
        left.mouseleave(() => {
            showtime();

        });
        left.click(() => {
            if (count < bannerLi.length) {
                count++
                if (count === bannerLi.length) {
                    clearInterval(timer)
                }
                else {
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    $(olLi).each((index, e) => {
                        olLi[index].style.backgroundColor = "#666666";
                    });
                    olLi[count].style.backgroundColor = "#3ec455";
                }
            }


        });

        right.mouseenter(() => {
            clearInterval(timer)
        });
        right.mouseleave(() => {
            showtime();
        });

        right.click(() => {
            if (count >= 0) {
                count--;
                if (count < 0) {
                    clearInterval(timer)
                }
                else {
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    $(olLi).each((index, e) => {
                        olLi[index].style.backgroundColor = "#666666";
                    });
                    olLi[count].style.backgroundColor = "#3ec455";

                }
            }

        });

        ol.mouseenter(() => {
            clearInterval(timer)
            olLi.each((index, e) => {
                $(olLi[index]).on('mouseenter', () => {
                    $(olLi[index])
                        .css('backgroundColor', "#3ec455")
                        .siblings()
                        .css('backgroundColor', "#666666");
                    count = index;
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    count = index+1;
                })
            });
        });

        ol.mouseleave(() => {
            showtime();
        });

    }));

    jQuery.get('/JQProductList',((data)=>{

        let pxc = data[9].classify;
        let pxb = data[9].bannerImg;
        let pxr = data[9].leftImg;
        let pxImg = data[9].goodsImg;

        $(pxc).each((index,e)=>{
            $('#fishList').append("<a >" + pxc[index].name +"</a>")
        });
        $(pxb).each((index, e) => {
            $('#fishUL').append(" <li><a><img src=" + pxb[index].img + "></a></li>");
            $('#fishOL').append("<li></li>")
        });
        /* $(pxr).each((index, e) => {
             $('#crabRight').append(" <img src=" + pxr[index].img + ">");
         });*/
        $(pxImg).each((index, e) => {
            $('#fishProductList').append( "<div class="+"goods-list-bottom-templet"+"><a href='goodsdetails/" + 'XYL' + index+"'class="+"goods-list-bottom-templet-link"+"><img src=" + pxImg[index].img + "><p class="+"goods-list-bottom-templet-name"+">" + pxImg[index].title +"</p></a><p class="+"goods-list-bottom-templet-price"+">"+"￥"+ pxImg[index].price +"</p></div>");
        });


        let count = 0;
        let isGo = false;
        let timer;
        let bannerUl = $('#fishUL')[0];

        let bannerLi = $('.fishUL li');
        let length = bannerLi.length;

        let left = $(" #fishLeft");
        let right = $("#fishRight");


        const ol = $('#fishOL');

        const olLi = $('.fishOL li');
        olLi[0].style.backgroundColor = "#3ec455";
        let showtime = () => {
            timer = setInterval(() => {
                if (isGo === false) {
                    if (count < bannerLi.length) {
                        count++;
                        bannerUl.style.transform = "translate(" + -600 * count + "px)";
                        if (count >= bannerLi.length - 1) {
                            count = bannerLi.length - 1;
                            isGo = true;
                        }

                    }
                    else {
                        count = bannerLi.length - 1;
                        isGo = true;
                    }

                }
                else {
                    if (count >= 0) {
                        count--;
                        bannerUl.style.transform = "translate(" + -600 * count + "px)";
                        if (count <= 0) {
                            count = 0;
                            isGo = false;
                        }
                    }
                    else {
                        count = 0;
                        isGo = false;
                    }

                }
                $(olLi).each((index, e) => {
                    $(olLi[index]).css('backgroundColor', "#666666");
                });
                $(olLi[count]).css('backgroundColor', "#3ec455");

            }, 4000)
        };
        showtime();

        left.mouseenter(() => {
            clearInterval(timer)
        });
        left.mouseleave(() => {
            showtime();

        });
        left.click(() => {
            if (count < bannerLi.length) {
                count++
                if (count === bannerLi.length) {
                    clearInterval(timer)
                }
                else {
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    $(olLi).each((index, e) => {
                        olLi[index].style.backgroundColor = "#666666";
                    });
                    olLi[count].style.backgroundColor = "#3ec455";
                }
            }


        });

        right.mouseenter(() => {
            clearInterval(timer)
        });
        right.mouseleave(() => {
            showtime();
        });

        right.click(() => {
            if (count >= 0) {
                count--;
                if (count < 0) {
                    clearInterval(timer)
                }
                else {
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    $(olLi).each((index, e) => {
                        olLi[index].style.backgroundColor = "#666666";
                    });
                    olLi[count].style.backgroundColor = "#3ec455";

                }
            }

        });

        ol.mouseenter(() => {
            clearInterval(timer)
            olLi.each((index, e) => {
                $(olLi[index]).on('mouseenter', () => {
                    $(olLi[index])
                        .css('backgroundColor', "#3ec455")
                        .siblings()
                        .css('backgroundColor', "#666666");
                    count = index;
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    count = index+1;
                })
            });
        });

        ol.mouseleave(() => {
            showtime();
        });

    }));

    jQuery.get('/JQProductList',((data)=>{

        let pxc = data[3].classify;
        let pxb = data[3].bannerImg;
        let pxr = data[3].leftImg;
        let pxImg = data[3].goodsImg;

        $(pxc).each((index,e)=>{
            $('#duckList').append("<a >" + pxc[index].name +"</a>")
        });
        $(pxb).each((index, e) => {
            $('#duckUL').append(" <li><a><img src=" + pxb[index].img + "></a></li>");
            $('#duckOL').append("<li></li>")
        });
        /* $(pxr).each((index, e) => {
             $('#crabRight').append(" <img src=" + pxr[index].img + ">");
         });*/
        $(pxImg).each((index, e) => {
            $('#duckProductList').append( "<div class="+"goods-list-bottom-templet"+"><a href='goodsdetails/" + 'YXL' + index+"'class="+"goods-list-bottom-templet-link"+"><img src=" + pxImg[index].img + "><p class="+"goods-list-bottom-templet-name"+">" + pxImg[index].title +"</p></a><p class="+"goods-list-bottom-templet-price"+">"+"￥"+ pxImg[index].price +"</p></div>");
        });


        let count = 0;
        let isGo = false;
        let timer;
        let bannerUl = $('#duckUL')[0];

        let bannerLi = $('.duckUL li');
        let length = bannerLi.length;

        let left = $(" #duckLeft");
        let right = $("#duckRight");


        const ol = $('#duckOL');

        const olLi = $('.duckOL li');
        olLi[0].style.backgroundColor = "#3ec455";
        let showtime = () => {
            timer = setInterval(() => {
                if (isGo === false) {
                    if (count < bannerLi.length) {
                        count++;
                        bannerUl.style.transform = "translate(" + -600 * count + "px)";
                        if (count >= bannerLi.length - 1) {
                            count = bannerLi.length - 1;
                            isGo = true;
                        }

                    }
                    else {
                        count = bannerLi.length - 1;
                        isGo = true;
                    }

                }
                else {
                    if (count >= 0) {
                        count--;
                        bannerUl.style.transform = "translate(" + -600 * count + "px)";
                        if (count <= 0) {
                            count = 0;
                            isGo = false;
                        }
                    }
                    else {
                        count = 0;
                        isGo = false;
                    }

                }
                $(olLi).each((index, e) => {
                    $(olLi[index]).css('backgroundColor', "#666666");
                });
                $(olLi[count]).css('backgroundColor', "#3ec455");

            }, 4000)
        };
        showtime();

        left.mouseenter(() => {
            clearInterval(timer)
        });
        left.mouseleave(() => {
            showtime();

        });
        left.click(() => {
            if (count < bannerLi.length) {
                count++
                if (count === bannerLi.length) {
                    clearInterval(timer)
                }
                else {
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    $(olLi).each((index, e) => {
                        olLi[index].style.backgroundColor = "#666666";
                    });
                    olLi[count].style.backgroundColor = "#3ec455";
                }
            }


        });

        right.mouseenter(() => {
            clearInterval(timer)
        });
        right.mouseleave(() => {
            showtime();
        });

        right.click(() => {
            if (count >= 0) {
                count--;
                if (count < 0) {
                    clearInterval(timer)
                }
                else {
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    $(olLi).each((index, e) => {
                        olLi[index].style.backgroundColor = "#666666";
                    });
                    olLi[count].style.backgroundColor = "#3ec455";

                }
            }

        });

        ol.mouseenter(() => {
            clearInterval(timer)
            olLi.each((index, e) => {
                $(olLi[index]).on('mouseenter', () => {
                    $(olLi[index])
                        .css('backgroundColor', "#3ec455")
                        .siblings()
                        .css('backgroundColor', "#666666");
                    count = index;
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    count = index+1;
                })
            });
        });

        ol.mouseleave(() => {
            showtime();
        });

    }));

    jQuery.get('/JQProductList',((data)=>{

        let pxc = data[2].classify;
        let pxb = data[2].bannerImg;
        let pxr = data[2].leftImg;
        let pxImg = data[2].goodsImg;

        $(pxc).each((index,e)=>{
            $('#chickenList').append("<a >" + pxc[index].name +"</a>")
        });
        $(pxb).each((index, e) => {
            $('#chickenUL').append(" <li><a><img src=" + pxb[index].img + "></a></li>");
            $('#chickenOL').append("<li></li>")
        });
        /* $(pxr).each((index, e) => {
             $('#crabRight').append(" <img src=" + pxr[index].img + ">");
         });*/
        $(pxImg).each((index, e) => {
            $('#chickenProductList').append( "<div class="+"goods-list-bottom-templet"+"><a href='goodsdetails/" + 'JXL' + index+"'class="+"goods-list-bottom-templet-link"+"><img src=" + pxImg[index].img + "><p class="+"goods-list-bottom-templet-name"+">" + pxImg[index].title +"</p></a><p class="+"goods-list-bottom-templet-price"+">"+"￥"+ pxImg[index].price +"</p></div>");
        });


        let count = 0;
        let isGo = false;
        let timer;
        let bannerUl = $('#chickenUL')[0];

        let bannerLi = $('.chickenUL li');
        let length = bannerLi.length;

        let left = $(" #chickenLeft");
        let right = $("#chickenRight");


        const ol = $('#chickenOL');

        const olLi = $('.chickenOL li');
        olLi[0].style.backgroundColor = "#3ec455";
        let showtime = () => {
            timer = setInterval(() => {
                if (isGo === false) {
                    if (count < bannerLi.length) {
                        count++;
                        bannerUl.style.transform = "translate(" + -600 * count + "px)";
                        if (count >= bannerLi.length - 1) {
                            count = bannerLi.length - 1;
                            isGo = true;
                        }

                    }
                    else {
                        count = bannerLi.length - 1;
                        isGo = true;
                    }

                }
                else {
                    if (count >= 0) {
                        count--;
                        bannerUl.style.transform = "translate(" + -600 * count + "px)";
                        if (count <= 0) {
                            count = 0;
                            isGo = false;
                        }
                    }
                    else {
                        count = 0;
                        isGo = false;
                    }

                }
                $(olLi).each((index, e) => {
                    $(olLi[index]).css('backgroundColor', "#666666");
                });
                $(olLi[count]).css('backgroundColor', "#3ec455");

            }, 4000)
        };
        showtime();

        left.mouseenter(() => {
            clearInterval(timer)
        });
        left.mouseleave(() => {
            showtime();

        });
        left.click(() => {
            if (count < bannerLi.length) {
                count++
                if (count === bannerLi.length) {
                    clearInterval(timer)
                }
                else {
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    $(olLi).each((index, e) => {
                        olLi[index].style.backgroundColor = "#666666";
                    });
                    olLi[count].style.backgroundColor = "#3ec455";
                }
            }


        });

        right.mouseenter(() => {
            clearInterval(timer)
        });
        right.mouseleave(() => {
            showtime();
        });

        right.click(() => {
            if (count >= 0) {
                count--;
                if (count < 0) {
                    clearInterval(timer)
                }
                else {
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    $(olLi).each((index, e) => {
                        olLi[index].style.backgroundColor = "#666666";
                    });
                    olLi[count].style.backgroundColor = "#3ec455";

                }
            }

        });

        ol.mouseenter(() => {
            clearInterval(timer)
            olLi.each((index, e) => {
                $(olLi[index]).on('mouseenter', () => {
                    $(olLi[index])
                        .css('backgroundColor', "#3ec455")
                        .siblings()
                        .css('backgroundColor', "#666666");
                    count = index;
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    count = index+1;
                })
            });
        });

        ol.mouseleave(() => {
            showtime();
        });

    }));

    jQuery.get('/JQProductList',((data)=>{

        let pxc = data[7].classify;
        let pxb = data[7].bannerImg;
        let pxr = data[7].leftImg;
        let pxImg = data[7].goodsImg;

        $(pxc).each((index,e)=>{
            $('#pigList').append("<a >" + pxc[index].name +"</a>")
        });
        $(pxb).each((index, e) => {
            $('#pigUL').append(" <li><a><img src=" + pxb[index].img + "></a></li>");
            $('#pigOL').append("<li></li>")
        });
        /* $(pxr).each((index, e) => {
             $('#crabRight').append(" <img src=" + pxr[index].img + ">");
         });*/
        $(pxImg).each((index, e) => {
            $('#pigProductList').append( "<div class="+"goods-list-bottom-templet"+"><a href='goodsdetails/" + 'ZRL' + index+"'class="+"goods-list-bottom-templet-link"+"><img src=" + pxImg[index].img + "><p class="+"goods-list-bottom-templet-name"+">" + pxImg[index].title +"</p></a><p class="+"goods-list-bottom-templet-price"+">"+"￥"+ pxImg[index].price +"</p></div>");
        });


        let count = 0;
        let isGo = false;
        let timer;
        let bannerUl = $('#pigUL')[0];

        let bannerLi = $('.pigUL li');
        let length = bannerLi.length;

        let left = $(" #pigLeft");
        let right = $("#pigRight");


        const ol = $('#pigOL');

        const olLi = $('.pigOL li');
        olLi[0].style.backgroundColor = "#3ec455";
        let showtime = () => {
            timer = setInterval(() => {
                if (isGo === false) {
                    if (count < bannerLi.length) {
                        count++;
                        bannerUl.style.transform = "translate(" + -600 * count + "px)";
                        if (count >= bannerLi.length - 1) {
                            count = bannerLi.length - 1;
                            isGo = true;
                        }

                    }
                    else {
                        count = bannerLi.length - 1;
                        isGo = true;
                    }

                }
                else {
                    if (count >= 0) {
                        count--;
                        bannerUl.style.transform = "translate(" + -600 * count + "px)";
                        if (count <= 0) {
                            count = 0;
                            isGo = false;
                        }
                    }
                    else {
                        count = 0;
                        isGo = false;
                    }

                }
                $(olLi).each((index, e) => {
                    $(olLi[index]).css('backgroundColor', "#666666");
                });
                $(olLi[count]).css('backgroundColor', "#3ec455");

            }, 4000)
        };
        showtime();

        left.mouseenter(() => {
            clearInterval(timer)
        });
        left.mouseleave(() => {
            showtime();

        });
        left.click(() => {
            if (count < bannerLi.length) {
                count++
                if (count === bannerLi.length) {
                    clearInterval(timer)
                }
                else {
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    $(olLi).each((index, e) => {
                        olLi[index].style.backgroundColor = "#666666";
                    });
                    olLi[count].style.backgroundColor = "#3ec455";
                }
            }


        });

        right.mouseenter(() => {
            clearInterval(timer)
        });
        right.mouseleave(() => {
            showtime();
        });

        right.click(() => {
            if (count >= 0) {
                count--;
                if (count < 0) {
                    clearInterval(timer)
                }
                else {
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    $(olLi).each((index, e) => {
                        olLi[index].style.backgroundColor = "#666666";
                    });
                    olLi[count].style.backgroundColor = "#3ec455";

                }
            }

        });

        ol.mouseenter(() => {
            clearInterval(timer)
            olLi.each((index, e) => {
                $(olLi[index]).on('mouseenter', () => {
                    $(olLi[index])
                        .css('backgroundColor', "#3ec455")
                        .siblings()
                        .css('backgroundColor', "#666666");
                    count = index;
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    count = index+1;
                })
            });
        });

        ol.mouseleave(() => {
            showtime();
        });

    }));

    jQuery.get('/JQProductList',((data)=>{

        let pxc = data[6].classify;
        let pxb = data[6].bannerImg;
        let pxr = data[6].leftImg;
        let pxImg = data[6].goodsImg;

        $(pxc).each((index,e)=>{
            $('#cowList').append("<a >" + pxc[index].name +"</a>")
        });
        $(pxb).each((index, e) => {
            $('#cowUL').append(" <li><a><img src=" + pxb[index].img + "></a></li>");
            $('#cowOL').append("<li></li>")
        });
        /* $(pxr).each((index, e) => {
             $('#crabRight').append(" <img src=" + pxr[index].img + ">");
         });*/
        $(pxImg).each((index, e) => {
            $('#cowProductList').append( "<div class="+"goods-list-bottom-templet"+"><a href='goodsdetails/" + 'NRL' + index+"'class="+"goods-list-bottom-templet-link"+"><img src=" + pxImg[index].img + "><p class="+"goods-list-bottom-templet-name"+">" + pxImg[index].title +"</p></a><p class="+"goods-list-bottom-templet-price"+">"+"￥"+ pxImg[index].price +"</p></div>");
        });


        let count = 0;
        let isGo = false;
        let timer;
        let bannerUl = $('#cowUL')[0];

        let bannerLi = $('.cowUL li');
        let length = bannerLi.length;

        let left = $(" #cowLeft");
        let right = $("#cowRight");


        const ol = $('#cowOL');

        const olLi = $('.cowOL li');
        olLi[0].style.backgroundColor = "#3ec455";
        let showtime = () => {
            timer = setInterval(() => {
                if (isGo === false) {
                    if (count < bannerLi.length) {
                        count++;
                        bannerUl.style.transform = "translate(" + -600 * count + "px)";
                        if (count >= bannerLi.length - 1) {
                            count = bannerLi.length - 1;
                            isGo = true;
                        }

                    }
                    else {
                        count = bannerLi.length - 1;
                        isGo = true;
                    }

                }
                else {
                    if (count >= 0) {
                        count--;
                        bannerUl.style.transform = "translate(" + -600 * count + "px)";
                        if (count <= 0) {
                            count = 0;
                            isGo = false;
                        }
                    }
                    else {
                        count = 0;
                        isGo = false;
                    }

                }
                $(olLi).each((index, e) => {
                    $(olLi[index]).css('backgroundColor', "#666666");
                });
                $(olLi[count]).css('backgroundColor', "#3ec455");

            }, 4000)
        };
        showtime();

        left.mouseenter(() => {
            clearInterval(timer)
        });
        left.mouseleave(() => {
            showtime();

        });
        left.click(() => {
            if (count < bannerLi.length) {
                count++
                if (count === bannerLi.length) {
                    clearInterval(timer)
                }
                else {
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    $(olLi).each((index, e) => {
                        olLi[index].style.backgroundColor = "#666666";
                    });
                    olLi[count].style.backgroundColor = "#3ec455";
                }
            }


        });

        right.mouseenter(() => {
            clearInterval(timer)
        });
        right.mouseleave(() => {
            showtime();
        });

        right.click(() => {
            if (count >= 0) {
                count--;
                if (count < 0) {
                    clearInterval(timer)
                }
                else {
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    $(olLi).each((index, e) => {
                        olLi[index].style.backgroundColor = "#666666";
                    });
                    olLi[count].style.backgroundColor = "#3ec455";

                }
            }

        });

        ol.mouseenter(() => {
            clearInterval(timer)
            olLi.each((index, e) => {
                $(olLi[index]).on('mouseenter', () => {
                    $(olLi[index])
                        .css('backgroundColor', "#3ec455")
                        .siblings()
                        .css('backgroundColor', "#666666");
                    count = index;
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    count = index+1;
                })
            });
        });

        ol.mouseleave(() => {
            showtime();
        });

    }));

    jQuery.get('/JQProductList',((data)=>{

        let pxc = data[10].classify;
        let pxb = data[10].bannerImg;
        let pxr = data[10].leftImg;
        let pxImg = data[10].goodsImg;

        $(pxc).each((index,e)=>{
            $('#sheepList').append("<a >" + pxc[index].name +"</a>")
        });
        $(pxb).each((index, e) => {
            $('#sheepUL').append(" <li><a><img src=" + pxb[index].img + "></a></li>");
            $('#sheepOL').append("<li></li>")
        });
        /* $(pxr).each((index, e) => {
             $('#crabRight').append(" <img src=" + pxr[index].img + ">");
         });*/
        $(pxImg).each((index, e) => {
            $('#sheepProductList').append( "<div class="+"goods-list-bottom-templet"+"><a href='goodsdetails/" + 'YRL' + index+"'class="+"goods-list-bottom-templet-link"+"><img src=" + pxImg[index].img + "><p class="+"goods-list-bottom-templet-name"+">" + pxImg[index].title +"</p></a><p class="+"goods-list-bottom-templet-price"+">"+"￥"+ pxImg[index].price +"</p></div>");
        });


        let count = 0;
        let isGo = false;
        let timer;
        let bannerUl = $('#sheepUL')[0];

        let bannerLi = $('.sheepUL li');
        let length = bannerLi.length;

        let left = $(" #sheepLeft");
        let right = $("#sheepRight");


        const ol = $('#sheepOL');

        const olLi = $('.sheepOL li');
        olLi[0].style.backgroundColor = "#3ec455";
        let showtime = () => {
            timer = setInterval(() => {
                if (isGo === false) {
                    if (count < bannerLi.length) {
                        count++;
                        bannerUl.style.transform = "translate(" + -600 * count + "px)";
                        if (count >= bannerLi.length - 1) {
                            count = bannerLi.length - 1;
                            isGo = true;
                        }

                    }
                    else {
                        count = bannerLi.length - 1;
                        isGo = true;
                    }

                }
                else {
                    if (count >= 0) {
                        count--;
                        bannerUl.style.transform = "translate(" + -600 * count + "px)";
                        if (count <= 0) {
                            count = 0;
                            isGo = false;
                        }
                    }
                    else {
                        count = 0;
                        isGo = false;
                    }

                }
                $(olLi).each((index, e) => {
                    $(olLi[index]).css('backgroundColor', "#666666");
                });
                $(olLi[count]).css('backgroundColor', "#3ec455");

            }, 4000)
        };
        showtime();

        left.mouseenter(() => {
            clearInterval(timer)
        });
        left.mouseleave(() => {
            showtime();

        });
        left.click(() => {
            if (count < bannerLi.length) {
                count++
                if (count === bannerLi.length) {
                    clearInterval(timer)
                }
                else {
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    $(olLi).each((index, e) => {
                        olLi[index].style.backgroundColor = "#666666";
                    });
                    olLi[count].style.backgroundColor = "#3ec455";
                }
            }


        });

        right.mouseenter(() => {
            clearInterval(timer)
        });
        right.mouseleave(() => {
            showtime();
        });

        right.click(() => {
            if (count >= 0) {
                count--;
                if (count < 0) {
                    clearInterval(timer)
                }
                else {
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    $(olLi).each((index, e) => {
                        olLi[index].style.backgroundColor = "#666666";
                    });
                    olLi[count].style.backgroundColor = "#3ec455";

                }
            }

        });

        ol.mouseenter(() => {
            clearInterval(timer)
            olLi.each((index, e) => {
                $(olLi[index]).on('mouseenter', () => {
                    $(olLi[index])
                        .css('backgroundColor', "#3ec455")
                        .siblings()
                        .css('backgroundColor', "#666666");
                    count = index;
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    count = index+1;
                })
            });
        });

        ol.mouseleave(() => {
            showtime();
        });

    }));

    jQuery.get('/JQProductList',((data)=>{

        let pxc = data[8].classify;
        let pxb = data[8].bannerImg;
        let pxr = data[8].leftImg;
        let pxImg = data[8].goodsImg;

        $(pxc).each((index,e)=>{
            $('#noodleList').append("<a >" + pxc[index].name +"</a>")
        });
        $(pxb).each((index, e) => {
            $('#noodleUL').append(" <li><a><img src=" + pxb[index].img + "></a></li>");
            $('#noodleOL').append("<li></li>")
        });
        /* $(pxr).each((index, e) => {
             $('#crabRight').append(" <img src=" + pxr[index].img + ">");
         });*/
        $(pxImg).each((index, e) => {
            $('#noodleProductList').append( "<div class="+"goods-list-bottom-templet"+"><a href='goodsdetails/" + 'JMD' + index+"'class="+"goods-list-bottom-templet-link"+"><img src=" + pxImg[index].img + "><p class="+"goods-list-bottom-templet-name"+">" + pxImg[index].title +"</p></a><p class="+"goods-list-bottom-templet-price"+">"+"￥"+ pxImg[index].price +"</p></div>");
        });


        let count = 0;
        let isGo = false;
        let timer;
        let bannerUl = $('#noodleUL')[0];

        let bannerLi = $('.noodleUL li');
        let length = bannerLi.length;

        let left = $(" #noodleLeft");
        let right = $("#noodleRight");


        const ol = $('#noodleOL');

        const olLi = $('.noodleOL li');
        olLi[0].style.backgroundColor = "#3ec455";
        let showtime = () => {
            timer = setInterval(() => {
                if (isGo === false) {
                    if (count < bannerLi.length) {
                        count++;
                        bannerUl.style.transform = "translate(" + -600 * count + "px)";
                        if (count >= bannerLi.length - 1) {
                            count = bannerLi.length - 1;
                            isGo = true;
                        }

                    }
                    else {
                        count = bannerLi.length - 1;
                        isGo = true;
                    }

                }
                else {
                    if (count >= 0) {
                        count--;
                        bannerUl.style.transform = "translate(" + -600 * count + "px)";
                        if (count <= 0) {
                            count = 0;
                            isGo = false;
                        }
                    }
                    else {
                        count = 0;
                        isGo = false;
                    }

                }
                $(olLi).each((index, e) => {
                    $(olLi[index]).css('backgroundColor', "#666666");
                });
                $(olLi[count]).css('backgroundColor', "#3ec455");

            }, 4000)
        };
        showtime();

        left.mouseenter(() => {
            clearInterval(timer)
        });
        left.mouseleave(() => {
            showtime();

        });
        left.click(() => {
            if (count < bannerLi.length) {
                count++
                if (count === bannerLi.length) {
                    clearInterval(timer)
                }
                else {
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    $(olLi).each((index, e) => {
                        olLi[index].style.backgroundColor = "#666666";
                    });
                    olLi[count].style.backgroundColor = "#3ec455";
                }
            }


        });

        right.mouseenter(() => {
            clearInterval(timer)
        });
        right.mouseleave(() => {
            showtime();
        });

        right.click(() => {
            if (count >= 0) {
                count--;
                if (count < 0) {
                    clearInterval(timer)
                }
                else {
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    $(olLi).each((index, e) => {
                        olLi[index].style.backgroundColor = "#666666";
                    });
                    olLi[count].style.backgroundColor = "#3ec455";

                }
            }

        });

        ol.mouseenter(() => {
            clearInterval(timer)
            olLi.each((index, e) => {
                $(olLi[index]).on('mouseenter', () => {
                    $(olLi[index])
                        .css('backgroundColor', "#3ec455")
                        .siblings()
                        .css('backgroundColor', "#666666");
                    count = index;
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    count = index+1;
                })
            });
        });

        ol.mouseleave(() => {
            showtime();
        });

    }));

    jQuery.get('/JQProductList',((data)=>{

        let pxc = data[1].classify;
        let pxb = data[1].bannerImg;
        let pxr = data[1].leftImg;
        let pxImg = data[1].goodsImg;

        $(pxc).each((index,e)=>{
            $('#TWLList').append("<a >" + pxc[index].name +"</a>")
        });
        $(pxb).each((index, e) => {
            $('#TWLUL').append(" <li><a><img src=" + pxb[index].img + "></a></li>");
            $('#TWLOL').append("<li></li>")
        });
        /* $(pxr).each((index, e) => {
             $('#crabRight').append(" <img src=" + pxr[index].img + ">");
         });*/
        $(pxImg).each((index, e) => {
            $('#TWLProductList').append( "<div class="+"goods-list-bottom-templet"+"><a href='goodsdetails/" + 'TWL' + index+"'class="+"goods-list-bottom-templet-link"+"><img src=" + pxImg[index].img + "><p class="+"goods-list-bottom-templet-name"+">" + pxImg[index].title +"</p></a><p class="+"goods-list-bottom-templet-price"+">"+"￥"+ pxImg[index].price +"</p></div>");
        });


        let count = 0;
        let isGo = false;
        let timer;
        let bannerUl = $('#TWLUL')[0];

        let bannerLi = $('.TWLUL li');
        let length = bannerLi.length;

        let left = $(" #TWLLeft");
        let right = $("#TWLRight");


        const ol = $('#TWLOL');

        const olLi = $('.TWLOL li');
        olLi[0].style.backgroundColor = "#3ec455";
        let showtime = () => {
            timer = setInterval(() => {
                if (isGo === false) {
                    if (count < bannerLi.length) {
                        count++;
                        bannerUl.style.transform = "translate(" + -600 * count + "px)";
                        if (count >= bannerLi.length - 1) {
                            count = bannerLi.length - 1;
                            isGo = true;
                        }

                    }
                    else {
                        count = bannerLi.length - 1;
                        isGo = true;
                    }

                }
                else {
                    if (count >= 0) {
                        count--;
                        bannerUl.style.transform = "translate(" + -600 * count + "px)";
                        if (count <= 0) {
                            count = 0;
                            isGo = false;
                        }
                    }
                    else {
                        count = 0;
                        isGo = false;
                    }

                }
                $(olLi).each((index, e) => {
                    $(olLi[index]).css('backgroundColor', "#666666");
                });
                $(olLi[count]).css('backgroundColor', "#3ec455");

            }, 4000)
        };
        showtime();

        left.mouseenter(() => {
            clearInterval(timer)
        });
        left.mouseleave(() => {
            showtime();

        });
        left.click(() => {
            if (count < bannerLi.length) {
                count++;
                if (count === bannerLi.length) {
                    clearInterval(timer)
                }
                else {
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    $(olLi).each((index, e) => {
                        olLi[index].style.backgroundColor = "#666666";
                    });
                    olLi[count].style.backgroundColor = "#3ec455";
                }
            }


        });

        right.mouseenter(() => {
            clearInterval(timer)
        });
        right.mouseleave(() => {
            showtime();
        });

        right.click(() => {
            if (count >= 0) {
                count--;
                if (count < 0) {
                    clearInterval(timer)
                }
                else {
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    $(olLi).each((index, e) => {
                        olLi[index].style.backgroundColor = "#666666";
                    });
                    olLi[count].style.backgroundColor = "#3ec455";

                }
            }

        });

        ol.mouseenter(() => {
            clearInterval(timer);
            olLi.each((index, e) => {
                $(olLi[index]).on('mouseenter', () => {
                    $(olLi[index])
                        .css('backgroundColor', "#3ec455")
                        .siblings()
                        .css('backgroundColor', "#666666");
                    count = index;
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    count = index+1;
                })
            });
        });

        ol.mouseleave(() => {
            showtime();
        });

    }));

    jQuery.get('/JQProductList',((data)=>{

        let pxc = data[5].classify;
        let pxb = data[5].bannerImg;
        let pxr = data[5].leftImg;
        let pxImg = data[5].goodsImg;

        $(pxc).each((index,e)=>{
            $('#HGWList').append("<a >" + pxc[index].name +"</a>")
        });
        $(pxb).each((index, e) => {
            $('#HGWUL').append(" <li><a><img src=" + pxb[index].img + "></a></li>");
            $('#HGWOL').append("<li></li>")
        });
        /* $(pxr).each((index, e) => {
             $('#crabRight').append(" <img src=" + pxr[index].img + ">");
         });*/
        $(pxImg).each((index, e) => {
            $('#HGWProductList').append( "<div class="+"goods-list-bottom-templet"+"><a href='goodsdetails/" + 'HGW' + index+"'class="+"goods-list-bottom-templet-link"+"><img src=" + pxImg[index].img + "><p class="+"goods-list-bottom-templet-name"+">" + pxImg[index].title +"</p></a><p class="+"goods-list-bottom-templet-price"+">"+"￥"+ pxImg[index].price +"</p></div>");
        });


        let count = 0;
        let isGo = false;
        let timer;
        let bannerUl = $('#HGWUL')[0];

        let bannerLi = $('.HGWUL li');
        let length = bannerLi.length;

        let left = $(" #HGWLeft");
        let right = $("#HGWRight");


        const ol = $('#HGWOL');

        const olLi = $('.HGWOL li');
        olLi[0].style.backgroundColor = "#3ec455";
        let showtime = () => {
            timer = setInterval(() => {
                if (isGo === false) {
                    if (count < bannerLi.length) {
                        count++;
                        bannerUl.style.transform = "translate(" + -600 * count + "px)";
                        if (count >= bannerLi.length - 1) {
                            count = bannerLi.length - 1;
                            isGo = true;
                        }

                    }
                    else {
                        count = bannerLi.length - 1;
                        isGo = true;
                    }

                }
                else {
                    if (count >= 0) {
                        count--;
                        bannerUl.style.transform = "translate(" + -600 * count + "px)";
                        if (count <= 0) {
                            count = 0;
                            isGo = false;
                        }
                    }
                    else {
                        count = 0;
                        isGo = false;
                    }

                }
                $(olLi).each((index, e) => {
                    $(olLi[index]).css('backgroundColor', "#666666");
                });
                $(olLi[count]).css('backgroundColor', "#3ec455");

            }, 4000)
        };
        showtime();

        left.mouseenter(() => {
            clearInterval(timer)
        });
        left.mouseleave(() => {
            showtime();

        });
        left.click(() => {
            if (count < bannerLi.length) {
                count++;
                if (count === bannerLi.length) {
                    clearInterval(timer)
                }
                else {
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    $(olLi).each((index, e) => {
                        olLi[index].style.backgroundColor = "#666666";
                    });
                    olLi[count].style.backgroundColor = "#3ec455";
                }
            }


        });

        right.mouseenter(() => {
            clearInterval(timer)
        });
        right.mouseleave(() => {
            showtime();
        });

        right.click(() => {
            if (count >= 0) {
                count--;
                if (count < 0) {
                    clearInterval(timer)
                }
                else {
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    $(olLi).each((index, e) => {
                        olLi[index].style.backgroundColor = "#666666";
                    });
                    olLi[count].style.backgroundColor = "#3ec455";

                }
            }

        });

        ol.mouseenter(() => {
            clearInterval(timer);
            olLi.each((index, e) => {
                $(olLi[index]).on('mouseenter', () => {
                    $(olLi[index])
                        .css('backgroundColor', "#3ec455")
                        .siblings()
                        .css('backgroundColor', "#666666");
                    count = index;
                    bannerUl.style.transform = "translate(" + -600 * count + "px)";
                    count = index+1;
                })
            });
        });

        ol.mouseleave(() => {
            showtime();
        });

    }));

    let count = 0;
    $("#SKLeft").on("click", (() => {
        if (count < 5) {
            count++;
            $("#sk1").css("left", -222 * count + "px");
            $("#sk2").css("left", -222 * count + "px");
            $("#sk3").css("left", -222 * count + "px");
        }

    }));

    $("#SKRight").on("click", (() => {
        if (count > 0) {
            count--;
            console.log(count);
            $("#sk1").css("left", -222 * count + "px");
            $("#sk2").css("left", -222 * count + "px");
            $("#sk3").css("left", -222 * count + "px");
        }


    }));

    $('.time-preference-bottom>ol li:first-child')
        .addClass("time-preference-bottom-ol-li");

    $('.time-preference-bottom>ol li').on({
        mouseenter:function () {
            $(this)
                .addClass("time-preference-bottom-ol-li")
                .siblings()
                .removeClass("time-preference-bottom-ol-li");
            $('.sk')
                .eq($(this).index())
                .show()
                .siblings()
                .hide()

        }
    });

    $(".time-preference-morning").css("background-color","#10A8FF");

    $(".time-preference-a a").on("click",function () {
        $(this)
            .css("background-color","#10A8FF")
            .siblings().css("background-color","");
        $(".sk")
            .eq( $(this).index())
            .show()
            .siblings()
            .hide();
    });



    jQuery.get('/JQUserSay',((data)=>{

        $(data).each((index,e)=>{
            $('.UserSay-ol').append("<li></li>")
        });
        const olLi = $('.UserSay-ol li');
        olLi[0].style.backgroundColor = "#3ec455";

        $('.UserSay-ol li').on({
            mouseenter:function () {
                olLi.each((index,e)=>{
                    olLi[index].style.backgroundColor = "#c81623";
                });
                olLi[$(this).index()].style.backgroundColor = "#3ec455";



                $('.UserSay-div')
                    .eq($(this).index())
                    .show()
                    .siblings()
                    .hide()

            }
        });

        let u1 = data[0];
        let u2 = data[1];
        let u3 = data[2];

        $(u1).each((index,e)=>{
            $('#u1').append("<div class="+ "user-evaluate-main-templete" +"><img src="+ u1[index].avatar +"><p class="+"user-evaluate-main-templete-name"+">"+ u1[index].name +"</p><div><i class="+ "iconfont-"+"></i></div><p class="+"user-evaluate-content"+">"+ u1[index].content +"</p><div class="+"goods-imgs"+"><img src="+ u1[index].img +"></div><p class="+"user-evaluate-time"+">"+ u1[index].time +"</p></div>")

        });

        $(u2).each((index,e)=>{
            $('#u2').append("<div class="+ "user-evaluate-main-templete" +"><img src="+ u2[index].avatar +"><p class="+"user-evaluate-main-templete-name"+">"+ u2[index].name +"</p><div><i class="+ "iconfont-"+"></i></div><p class="+"user-evaluate-content"+">"+ u2[index].content +"</p><div class="+"goods-imgs"+"><img src="+ u2[index].img +"></div><p class="+"user-evaluate-time"+">"+ u2[index].time +"</p></div>")
        });

        $(u3).each((index,e)=>{
            $('#u3').append("<div class="+ "user-evaluate-main-templete" +"><img src="+ u3[index].avatar +"><p class="+"user-evaluate-main-templete-name"+">"+ u3[index].name +"</p><div><i class="+ "iconfont-"+"></i></div><p class="+"user-evaluate-content"+">"+ u3[index].content +"</p><div class="+"goods-imgs"+"><img src="+ u3[index].img +"></div><p class="+"user-evaluate-time"+">"+ u3[index].time +"</p></div>")
        });

    }));

    $("#UserSayLR-l").on("click", (() => {
        if (count < 3) {
            count++;
            $("#u1").css("left", -360 * count + "px");
            $("#u2").css("left", -360 * count + "px");
            $("#u3").css("left", -360 * count + "px");
        }

    }));

    $("#UserSayLR-r").on("click", (() => {
        if (count > 0) {
            count--;
            $("#u1").css("left", -360 * count + "px");
            $("#u2").css("left", -360 * count + "px");
            $("#u3").css("left", -360 * count + "px");
        }


    }));








});


//右侧公告
$(document).ready(function () {
    $(".content-banner-right-center-cx").on({
        mouseenter:function ()  {
            $(".content-banner-right-center-cx-list").show();
            $(".content-banner-right-center-gg-list").hide();
        }
    });
    $(".content-banner-right-center-gg").on({
        mouseenter:function () {
            $(".content-banner-right-center-gg-list").show();
            $(".content-banner-right-center-cx-list").hide();
        }
    })
});



//右侧小图标
$(document).ready(function () {
    var iis = $("#iconsprite i");
    for (var i = 0; i < iis.length; i++) {
        iis[i].style.backgroundPosition = "0" + (-i * 25) + "px"
    }
});




//header 的 JS 特效

//顶部广告点击消失
$(document).ready(function () {
    $(".closetop").on("click", function () {
        $(".topbaner").hide();
    })
});

// 导航栏点击显示地址
$(document).ready(function () {
    $(".select-address .item").on("click",function () {
        $(this).clone()
            .replaceAll($(".dnl>span"))

    })
});


//顶部固定导航栏
$(document).ready(function () {
    $(window).on("scroll",function (event) {
        if ($(window).scrollTop()>$('.content-banner').height()){
            $('.header-floatsearch').show().addClass("fixed-top");
            $(".leftnavbar").show();
        }
        else {
            $('.header-floatsearch').hide().removeClass("fixed-top");
            $(".leftnavbar").hide();
        }
    })
});



// 搜索栏
$(document).ready(function () {
    $(".bottomsearch , .inputfirst").on({
        focusin:function (event) {
            $(this).attr("placeholder","")
        },
        focusout:function (event) {
            $(this).attr("placeholder","生鲜开抢")
        }
    })
});





















