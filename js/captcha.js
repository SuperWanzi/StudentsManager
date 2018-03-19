//保存验证码字符串
var captcha=creatCaptchaImg();

//生成验证码图片
function creatCaptchaImg(){
	var CaptchaNum=new Array(4);
	var imgSrc=new Array(4);
	var str="";
	
	var c=document.createElement('canvas');
	var ctx=c.getContext('2d');
	
    c.width=200;
    c.height=50;
    
    ctx.fillStyle='#fff';//画布填充颜色
    ctx.fillRect(0,0,c.width,c.height);
    
	//随机生成四个随机数并存入数组
	for(var i=0;i<CaptchaNum.length;i++){
		CaptchaNum[i]=Math.floor(Math.random()*10);
		imgSrc[i]="img/captcha/"+CaptchaNum[i]+".png";
		str+=CaptchaNum[i];
	}
	
	function drawing(n){
        if(n<CaptchaNum.length){
            var img=new Image;
//          img.crossOrigin = 'Anonymous'; //解决跨域
            img.src=imgSrc[n];
            img.onload=function(){
                ctx.drawImage(img,n*40,0,50,50);
                drawing(n+1);//递归
            }
        }else{
            //保存生成作品图片
            var src=c.toDataURL();
           	$("#captcha").attr("src",src);
        }
    }	
	drawing(0);
	return str;
};
//点击验证码图片更换验证码
$('#captcha').click(
	function(){
	captcha=creatCaptchaImg();
	}
)

//提交按钮 验证码验证
$("input:submit").click(
	function(){
		
		/*
		 * 预留位
		 * 
		 * 判断用户名和密码是否填写正确
		 * 
		 */
		console.log($("input[name='code']").val());
		console.log(captcha);
		if($("input[name='code']").val()===captcha){
			console.log('true');
			alert("成功")
		}
		else{
			console.log('false');
			captcha=creatCaptchaImg();
			alert("失败")
		}
		//返回false 不提交表单
		return false;
	}
)
