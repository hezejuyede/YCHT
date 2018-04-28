$(document).ready(() => {

    $.get('/indexBanner', (data) => {

        $(data).each((index, e) => {
            $('.banner-ul').append("<li>" + "<img src=" + data[index].img + ">" + "</li>");
            $('.banner-ol').append('<li></li>');
        });
        let one = '<div class="banner-one"><h2>我们一直专注于提供高端的互联网应用服务！</h2><p>是众多中大型企业、集团和上市公司的长期合作伙伴！</p> <i class="iconfont icon-jiantou1-copy"></i></div>';
        let two = '<div class="banner-two"><h2>多年的专业经验</h2><p>不断优化方案策划、创意设计、</p><p>技术研发、用户体验和项目管理的品质，</p><p>对未知保持敬畏，并一路探索！</p></div>';
        let three = '<div class="banner-three"><h2>提供深度定制互联网应用服务！</h2><p>涵盖企业的品牌传播、数字整合营销、会员管理、业务服务支撑</p><div><a href=""><i class="iconfont icon-diannao01"></i><span>PC网站</span></a><a href=""><i class="iconfont icon-shoujichongzhi"></i><span>手机网站</span></a><a href=""><i class="iconfont icon-xiaochengxu"></i><span>小程序定制</span></a><a href=""><i class="iconfont icon-gongzhonghao1"></i><span>公众号定制</span></a><a href=""><i class="iconfont icon-msnui-weixin"></i><span>企业微信开发</span></a><a href=""><i class="iconfont icon-h5"></i><span>APP网站</span></a></div></div>';



        $('.banner-ul>li:first-child').append(one);
        $('.banner-ul>li:nth-child(2)').append(two);
        $('.banner-ul>li:last-child').append(three);



        let count = 0;
        let isGo = false;
        let timer;
        let bannerUl = $('.banner-ul')[0];
        let bannerLi = $('.banner-ul li');
        let length = bannerLi.length;

        let left = $(" #banner-left");
        let right = $("#banner-right");


        const ol = $('.banner-ol');
        const olLi = $('.banner-ol li');
        olLi[0].style.backgroundColor = "#3ec455";
        let showtime = () => {
            timer = setInterval(() => {
                if (isGo === false) {
                    if (count < bannerLi.length) {
                        count++;
                        bannerUl.style.transform = "translate(" + -1190 * count + "px)";
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
                        bannerUl.style.transform = "translate(" + -1190 * count + "px)";
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
                    bannerUl.style.transform = "translate(" + -1190 * count + "px)";
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
                    bannerUl.style.transform = "translate(" + -1190 * count + "px)";
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
                    bannerUl.style.transform = "translate(" + -1190 * count + "px)";
                    count = index+1;
                })
            });
        });
        ol.mouseleave(() => {
            showtime();
        });
    });

    $('#GoBackTop').on('click', () => {

        $("html,body").animate({scrollTop:0}, 500);
    });

    $('#closeKJ').on('click', () => {
        $('.qq,.help,.phone,.ewm').hide(500);
        $('#openKJ').css({'display': 'block'});
        $('#closeKJ').css({'display': 'none'});
    });
    $('#openKJ').on('click', () => {
        $('.qq,.help,.phone,.ewm').show(500);
        $('#openKJ').css({'display': 'none'});
        $('#closeKJ').css({'display': 'block'});
    });

});