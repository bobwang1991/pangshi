/**
 * Created by admin on 2016/10/16.
 */
var common = {
    //手机适配
    phoneH5 : function() {
        var sw = window.screen.width,
            createMeta = document.createElement("meta"),
            scale = sw / 750;//计算缩放比
        var metaAttr = {
            "name": "viewport",
            "content": "width=750,initial-scale=" + scale + ",maximum-scale=" + scale + ",minimum-scale=" + scale + ",user-scalable=no"
        };
        for (var key in metaAttr) {
            createMeta[key] = metaAttr[key];
        }
        //alert( sw );
        document.getElementsByTagName("head")[0].appendChild(createMeta);
    },
    //获取游览器窗口高度
    windowHeight : function () {
        var hMain = $(window).height();
        $('#wrap').height(hMain);
        $('#popUp').height(hMain);
    },
    //打分随机数特效
    scoleRandonNum : function () {
        var g_Interval = 1;
        var g_PersonCount = 100;//参加抽奖人数
        var g_Timer;
        function updateRndNum(){
            var num = Math.floor(Math.random()*g_PersonCount+1);
            $('#ResultNum').html(num);
        }

        function beginTimer(){
            g_Timer = setTimeout(beat, g_Interval);
        }

        function beat() {
            g_Timer = setTimeout(beat, g_Interval);
            updateRndNum();
        }
        beginTimer();
        setTimeout(function(){
            clearTimeout(g_Timer);
            $("#ResultNum").addClass("flip animated");
        },3000);
    },
    //随机出现
    randomShow : function () {
        var oAim = document.getElementById('aim');
        var aAimDiv = oAim.getElementsByTagName('div');
        var x = 0;
        var y = 0;

        for ( var i = 0 ; i < aAimDiv.length ; i++ ) {

            x = Math.floor( Math.random()*250 );
            y = Math.floor( Math.random()*250 + 110 );

            aAimDiv[i].style.top = y + 'px';
            aAimDiv[i].style.left = x + 'px';
        }
    },
    //点击显示，原来的隐藏封装插件
    showPopUp : function ( myJson ) {
        var popUp = myJson.obj1;
        var shoppingInfo = myJson.obj2;
        var btn = myJson.btn;
        btn.click(function () {
            popUp.show();
            shoppingInfo.hide();
        });
    },
    //点击显示，原来的不隐藏封装插件
    showPopUpProduct : function ( myJson ) {
        var product1 = myJson.obj1;
        var product2 = myJson.obj2;
        var product3 = myJson.obj3;
        var product4 = myJson.obj4;
        var pop = myJson.popUp;
        var title = myJson.title;
        var need = myJson.need;
        var num = myJson.num;
        var close = myJson.close;

        var oProduct = document.getElementById(product1);
        var oProduct1 = document.getElementById(product2);
        var oProduct2 = document.getElementById(product3);
        var oProduct3 = document.getElementById(product4);
        var oProductDiv = oProduct.getElementsByTagName('div');
        var oProductDiv1 = oProduct1.getElementsByTagName('div');
        var oPopUp = document.getElementById(pop);
        var aTitle = oPopUp.querySelector(title);
        var aNeedScore = oPopUp.querySelector('.popContent').querySelector(need);
        var aNum = oPopUp.querySelector('.popContent').querySelector(num);
        var oClose = document.querySelector(close);

        for ( var i = 0 ; i < oProductDiv.length ; i++ ) {
            oProductDiv[i].onclick = function (e) {
                e = e||event;
                oPopUp.style.display = 'block';
                aTitle.innerHTML = '旁氏米粹洁面乳100g';
                aNeedScore.innerHTML = '1200';
                aNum.innerHTML = '50';
                e.cancelBubble = true;
            };
        }

        for ( var i = 0 ; i < oProductDiv1.length ; i++ ) {
            oProductDiv1[i].onclick = function (e) {
                e = e||event;
                oPopUp.style.display = 'block';
                aTitle.innerHTML = '旁氏米粹洁面乳150g';
                aNeedScore.innerHTML = '1800';
                aNum.innerHTML = '40';
                e.cancelBubble = true;
            };
        }
        oProduct2.onclick = function(e) {
            e = e||event;
            oPopUp.style.display = 'block';
            aTitle.innerHTML = '旁氏无瑕透白精致防护日霜50g';
            aNeedScore.innerHTML = '2200';
            aNum.innerHTML = '30';
            e.cancelBubble = true;
        };
        oProduct3.onclick = function(e) {
            e = e||event;
            oPopUp.style.display = 'block';
            aTitle.innerHTML = '旁氏水润盈泽系列深海胶原保湿精华露30m';
            aNeedScore.innerHTML = '2800';
            aNum.innerHTML = '15';
            e.cancelBubble = true;
        };

        oClose.onclick = function () {
            oPopUp.style.display = 'none';
        };

    },
    //随机加载图片load插件
    randomPicLoad : function () {
        var x = Math.ceil( Math.random() * 18 );
        $('.js-chickendinner').chickenDinner({
            path: 'images/',
            altTag: 'fiveStar',
            fadeInTime:2000,
            TheImages: ['scoleStar-' + 3 + '.png']
        });
    }
};

function hrefLink() {
    window.location.href = 'shoppingInfo.html';
}