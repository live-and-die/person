/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-03-29 20:40:53
 * @version $Id$
 */
 $(function(){
    // 头部热点轮播
    (function(){
        var $banner = $('.header_nav .navbar .navbar-nav')
        var $li = $banner.children();
        $banner.append($li.eq(0).clone());        
        var num = 0;
        console.log($banner);
        (function request(){
            num++;
            $banner.animate({top:(-num)*$li.eq(0).height()},function(){
                if(num == $li.length){
                    console.log(num)
                    num%=$li.length;
                    $banner.css({top:0});
                }
            });
            setTimeout(request,2000);
        })();

    })();

    //头部热点轮播
    (function(){
        var $banner = $('.banner .mark ul')
        console.log($banner);
        var $li = $banner.children();
        $banner.append($li.eq(0).clone());
        var num = 0;
        (function request(){
            num++;
            $banner.animate({top:-num*$li.eq(0).height()},function(){
                if(num==$li.length){
                    num%=$li.length;
                    $banner.css({top:0});
                }
            })
            setTimeout(request,2000);
        })();
    })();
    //头部视屏轮播
    (function(){
        $video=$(".banner .bg-video video");
       
        var length = $video.length;
        var num =0;
        var arr = ["vote_bg_video.mp4","magic_bg_video.mp4",
        "shelves_video.mp4","trading_video.mp4"];
        var $currentVideo;
        var $oldvideo ;
        var timer;
        var onoff = true;
         
        $oldvideo = $video.eq(num%length);
        var $tab = $('.banner .mark .content .d-flex .choose');//定义按钮
        var $line =$('.banner .mark .content .d-flex .choose i');//定义进度条
        var $oldline = $line.eq(num); 
        request();
        function request(){
            $oldline = $line.eq(num);           
            //播放进度
            var progress = $oldvideo[0].currentTime/$oldvideo[0].duration;
             $oldline.css({width:progress*100+'%'});
            if(progress>0.95&&onoff){ 
                onoff=false;
                $currentVideo=$video.eq((num+1)%length);
                $currentVideo[0].src ='video/'+ arr[(num+1)%arr.length];
                $currentVideo.animate({opacity:1},600);
                console.log($oldline);
                $currentVideo[0].play();//播放             
                $oldvideo.animate({opacity:0},500,function(){
                    $oldline.css({width:0});
                    $oldvideo[0].pause();//暂停
                    $oldvideo[0].src = '';
                    $oldvideo = $currentVideo;
                    onoff=true;
                    num++;
                    num=num%arr.length;
                    $oldline=$line.eq((num)%arr.length);
                    
                });

            }
            timer=requestAnimationFrame(request);
        };
        $tab.click(function(){
            cancelAnimationFrame(timer);
            $oldvideo[0].pause();//暂停
            $oldvideo[0].src='';
            $oldline.css({width:0});
            num = $(this).index();//获得按钮的下标
            $oldvideo = $video.eq(num%length);
            $oldvideo[0].src= 'video/'+ arr[(num)%arr.length];
            $oldvideo[0].play();
            onoff=true;
            request();
        });
    })();

    //视屏弹窗
    (function(){
        var $btn =$('.banner .mark .content .d-flex .btn-right');
        var $wrap =$('.banner .videoalert .wrap');
        var $Alert =$('.banner .videoalert');
        var $video =$('.banner .videoalert .videobox video');
        var $close =$('.banner .videoalert .videobox .close');
        // 让其从按钮处开始移动
        $Alert.css({top:$btn.offset().top,left:$btn.offset().left});
        //点击体验弹窗出现
        $btn.click(function(){
            $btn.animate({opacity:0,width:0},500,function(){
                $Alert.css({display:"block"});
                $Alert.animate({left:"50%",top:'50%'},500);
                $Alert.animate({
                        width:"200%",
                        height:"400%",
                        marginLeft:'-100%',
                        marginTop:'-100%'},500,function(){
                            $wrap.css({display:'block'});
                            $video[0].play();
                        });               
            });
        });
        //点击关闭按钮弹窗消失
        $close.click(function(){
            $video[0].pause();
            $wrap.css({display:'none'});
            $Alert.animate({
                        width:"50px",
                        height:"50px",
                        marginLeft:'0%',
                        marginTop:'0%'
                        
                        },800);
            $Alert.animate({top:$btn.offset().top,left:$btn.offset().left},500,
                function(){$Alert.css({display:"none"});
                $btn.animate({opacity:1,width:'140px'},500)
            });
        });

    })();

//波浪效果
    (function (){
        var canves = document.getElementById('wave');
        var ctx = canves.getContext('2d');
        var w = canves.width =canves.parentNode.offsetWidth;
        var h = canves.height =canves.parentNode.offsetHeight;
        var waveDefault = h/2;//默认高度
        var waveBo =waveDefault/4;//最大高度
        var colors =["rgba(0,222,255, 0.2)",
                    "rgba(157,192,249, 0.2)",
                     "rgba(0,168,255, 0.2)"];
        var num = 0;
        (function request(){
            ctx.clearRect(0,0,w,h)//擦除画布
            num++;
            for(var i=0; i<colors.length;i++){
                var angle = (num+i*50)*Math.PI/180;
                var sinHeight = Math.sin(angle)*waveBo;//左边
                var cosHeight = Math.cos( angle )*waveBo;//右边
                ctx.fillStyle=colors[i];//绘制边框
                ctx.beginPath();//开始路径
                ctx.moveTo(0,waveDefault+sinHeight)
                ctx.bezierCurveTo(w/2,waveDefault-waveBo+sinHeight,w/2,waveDefault-waveBo+cosHeight,w,waveDefault+cosHeight);
                ctx.lineTo(w,h);//右下角
                ctx.lineTo(0,h);//左下角
                ctx.lineTo(0,waveDefault+sinHeight);//回到画笔原点
                ctx.fill();          //画 填充
            }
            requestAnimationFrame(request);
        })();
    })();

    //开放式数字计算
    (function(){
        var $h = $(".open .container h2");
        var $span = $(".open .container .openbox .col-4 .number span");
        var arr= [106663389,340,36];
        var onoff = true;
        //当h标签top值小于200时，执行下面的数字计算函数
        $(window).scroll(function(){
            var top =$h.eq(0)[0].getBoundingClientRect().top;
            if(top<350&&onoff){
                onoff=false;
                for(i=0;i<arr.length;i++){
                    request(arr[i],1000,i);

                }
            }
        });
        function request(number,duration,index){
            var init_t = new Date();
            (function run(){
                var curent_t = new Date();
                var precent= (curent_t-init_t)/duration;//动画进度
                 if(precent>1){
                    precent=1;
                }else{
                    requestAnimationFrame(run);
                }
                var value = (number*precent).toFixed(0);
                switch(index){
                    case 0 :
                    one= (value/1000000).toFixed(0);
                    two= (value%1000000/1000).toFixed(0);
                    three = (value%1000000%1000).toFixed(0);
                    value = one+","+two+","+three;
                    $span.eq(index).html(value);
                    break;
                    case 1 :
                     $span.eq(index).html(value);
                     break;
                    case 2 :
                    value = value/10;
                     $span.eq(index).html(value);
                    break;
                }
            })();
        };
    })();

    //客户服务的图片滚动
    (function(){
        var $wrap = $(".custorm .images");
        var wrapW = $wrap.innerWidth();
        var $img = $wrap.find('img');
        var imgW = $img.innerWidth();
        var scrollwidth =imgW - wrapW;
        var num = 0;
        var onoff = true;
        (function run(){
            if(onoff){
                num--;
                if(num<=-scrollwidth){
                    onoff = false;
                }
            }          
            else{
                num++;
                if(num>=0){
                    onoff = true;
                }
            }           
            $img.css({left:num});
            requestAnimationFrame(run);
        })();
    })();

    // 案例
    (function(){
        var $tab =$(".case .nav-tabs li.btn");
        var $img = $(".case .container .picture ul li");
        var $pane = $('.case .container .tab-pane');
        var h = $pane.eq(0).innerHeight();
        var timer;
        var oldpane;
        console.log(h);
        $pane.css({top :-h});
        var num = 0;
        $pane.eq(0).css({top:0})
        $img.eq(0).css({display:"block"});
        $tab.click(function(){
            clearTimeout(timer);
            if($(this).index()==num){
                return 666;
            }else{

            oldpane = $pane.eq(num);
            oldpane.css({top:0}).show().animate({top:-h,opacity:0},1000);
            $tab.eq(num).removeClass('active');
            $img.eq(num).fadeOut();
            num = $(this).index();
            console.log($tab.children());
            $pane.eq(num).css({top:-h}).show().animate({top:0,opacity:1},1000);
            $tab.eq(num).addClass('active');
            $img.eq(num).fadeIn();
            timer=setTimeout(request,3000);
            }
        });
        request();
        function request(){
             oldpane = $pane.eq(num);
                         
            $tab.eq(num).removeClass('active');
            $img.eq(num).fadeOut();
            num++;
            num=num%$tab.length;
            $pane.eq(num).addClass('active show');
            $pane.eq(num).css({zIndex:10});
            setTimeout(function(){
                $pane.eq(num).animate({top:0,opacity:1},1000);
                oldpane.animate({top:h,opacity:0},1000,function(){
                    oldpane.css({top:-h});
                    oldpane.removeClass('active show');
                })
            },0);
             
            $tab.eq(num).addClass('active');
            $img.eq(num).fadeIn();
            timer=setTimeout(request,3000);
        }
    })();

    // canves的背景圆圈
    (function(){
        var $circle = $('.product #circle');
        var ctx = $circle.get(0).getContext('2d');
        var w = $circle.get(0).width = $circle.parent().innerWidth();
        var h = $circle.get(0).height =$circle.parent().innerHeight();
        // var canvas = document.getElementById('circle');
        // var ctx = canvas.getContext('2d');
        // var w = canvas.width = canvas.parentNode.offsetWidth;
        // var h = canvas.height = canvas.parentNode.offsetHeight;
        var r = 200;//最小圆的半径
        var R = Math.sqrt(Math.pow(w/2,2)+Math.pow(h/2,2));//最大圆
        var offs=125;//圆圆之间的距离
        var num =Math.floor((R-r)/offs);//圆的总个数

        var arr = [];
        for(var i = 0;i<num;i++){
            var obj={}
            obj.r =r+i*offs;
            arr.push(obj);
        }
        // 让圆圈动起来
        (function request(){
            ctx.clearRect(0,0,w,h);
            for (var i = 0; i < arr.length; i++) {
                arr[i].r++;
                arr[i].opacity=(R-arr[i].r/R);
                if(arr[i].r>R){
                    arr[i].r = 200;
                }
               draw(arr[i]);
            }
            requestAnimationFrame(request);
        })();
        // 画圆
        function draw(obj){
            ctx.beginPath();
            ctx.lineWidth=obj.r/150;
            ctx.strokeStyle = "rgba(255,255,255,"+obj.opacity+")";
            ctx.arc(w/2,h/2,obj.r,0,360*Math.PI/180,true);
            ctx.stroke();
        };
    })();




















 })

