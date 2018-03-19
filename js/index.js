//字符串格式化
String.prototype.format=function()  
{  
  if(arguments.length==0) return this;  
  for(var s=this, i=0; i<arguments.length; i++)  
    s=s.replace(new RegExp("\\{"+i+"\\}","g"), arguments[i]);  
  return s;  
};  

/*获取元素在其父元素的位置 
 *参数（子元素，父元素）
 *返回 （子元素位置）*/
function indexOfFather(child,father){
	var i=father.index(child);
	return i;
}
/*返回指定条件的元素
 *参数（条件，对象）
 * 返回（数组集合）*/  
function returnMatchElement(condition,b){
	if(a){
		b=0;
	}
	else
	{
		b=1;
	}
	return b;
}

//左边手风琴选项卡点击自动关闭其它选项卡
$("div.nav-item").click(
	function(){
		var n=$("div.nav-item").index($(this));
		var tm=setTimeout(
			function(){
				for(var i=0;i<$("div.nav-item").length;i++){
					if(i!=n){
						if($("div.nav-item").eq(i).attr("aria-expanded")=="true"){
						$("div.nav-item").eq(i).click();
						}
					}
				}
			}
		)
	}
)


//左边选项卡选项点击后在右边导航栏上显示并选中
$("li.nav-item").click(
	function(){
		if($(this).attr('href')==undefined){return 0;}
		if($("li.tab-btn").text().indexOf($(this).text())>0){
			
		}
		else{
			
			var strLi='<li class="tab-btn active" href="{0}">{1}<span class="fa fa-close"></span></li>';
			
			$("li.tab-btn:last").after(strLi.format($(this).attr('href'),$(this).text()));
		}
		
		//右边按钮点击增加选中状态
		$("li.tab-btn").click(
			function(){
				$("li.tab-btn").removeClass("active");
				$(this).addClass("active");
				$(".iframe").attr("src",$(this).attr("href"));
				
				var l=$("li.tab-btn").index($(this));
				
				var ul=$(".tabs-box").outerWidth();
				var li=function(){
					var tw=0;
					for(var i=0;i<l;i++){
						tw+=$("li.tab-btn").eq(i).outerWidth();
					}
					return tw;
					console.log(tw);
				}();
			}
		)
		
		//判断是否已存在在导航栏中
		var item=$(this);
		$("li.tab-btn").each(
			function(){
			 if($(this).attr('href')==item.attr('href')){
			 	$(this).trigger('click');
			 }
			}
		)
		
		//点击选项卡上的关闭按钮关闭此选项卡
		$("span.fa-close").click(
			function(){
				var i=$("li.tab-btn").index($(this).parent());
				var l=$("li.tab-btn").length;
				$(this).parent().remove();
				if($(this).parent().hasClass('active')){
					if(i==l-1){
						$("li.tab-btn").eq(i-1).click();
					}
					else if(i>=0)
					{
						$("li.tab-btn").eq(i).click();
					}
				}
			}
		)
		
		//标签栏标签超出范围
		var ul=$(".tabs-box").outerWidth();
		var li=function(){
			var tw=0;
			$("li.tab-btn").each(
				function(){
					tw+=$(this).outerWidth();
				}
			);
			return tw;
			console.log(tw);
		}();
		if(li>ul){
			var l=-(li/2);
			$(".tabs-box").css("margin-left",l)
		}
	}
)

//窗口大小改变事件
$(window).resize(
	function(){
		var x=$("#tabs-crtl").position().left;
		$(".dropdown-menu").css("left",x);
	}
)
$(window).resize();

//标签栏点击标签向前滚动返回第一个
$("#btn-back").click(
	function(){
		$(".tabs-box").css("margin-left",0);
	}
)
//标签栏点击向后滚动按钮将任务条跳至最后一个
$("#tab-forward").click(
	function(){
		var ul=$(".tabs-content").outerWidth();
		var li=function(){
			var tw=0;
			$("li.tab-btn").each(
				function(){
					tw+=$(this).outerWidth();
				}
			);
			return tw;
			console.log(tw);
		}();
		console.log(li);
		console.log(ul);
		if(li>ul){
			var l=-(li-ul);
			
			$(".tabs-box").css("margin-left",l)
		}
	}
)

//关闭选项卡组 功能
//关闭当前选项卡
$('#drp-this').click(
	function(){
		$("li.tab-btn").each(
			function(){
				console.log($(this).attr('id')!="tab-index");
				if($(this).hasClass('active')&&$(this).attr('id')!="tab-index"){
					$(this).remove();
				}		
			}
		)
	}
)

//关闭全部选项卡
$('#drp-all').click(
	function(){
		$("li.tab-btn").each(
			function(){
				console.log($(this).attr('id')!="tab-index");
				if($(this).attr('id')!="tab-index"){
					$(this).remove();
					console.log($(this).html());
				}
				else{
					$(this).click();
				}
				
			}
		)
	}
)

//关闭其他选项卡
$('#drp-other').click(
	function(){
		$("li.tab-btn").each(
			function(){
				console.log($(this).attr('id')!="tab-index");
				if(!$(this).hasClass('active')&&$(this).attr('id')!="tab-index"){
					$(this).remove();
				}
			}
		)
	}
)
//显示关闭主题设置页面
$("#menu-btn-theme").click(
	function(){
		if($(".theme-box").hasClass('hidden')){
			$(".theme-box").removeClass('hidden')
		}
		else{
			$(".theme-box").addClass('hidden')
		}
	}
)
//更换主题
$(".theme-choose-item").click(
	function(){
		$(".nav-content").css("background",$(this).css("background"));
		$(".nav-item").css("color","#eee");
	}
)

