# slider
一个易用的由html,css,js编写的轮播滑屏插件

### 使用方法

下载js文件Slider.js，在html文件中引用。

如下：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Slider</title>
		<!--引入文件-->
		<script src="js/slider.js"></script>
		<style>
			#myDiv{
				width:400px;
				height: 400px;
				position:relative;
				top:0px;
				bottom: 0px;
				overflow:hidden;
				background: #333;
			}
			
		</style>
	</head>
	<body>
			<div id="myDiv"></div>
	</body>
	<script>
		//图片地址数组
		let imgArr=['img/2.jpg','img/1.jpg','img/3.jpg','img/4.png','img/6.jpg'];
		
		//底部圆点样式
		let circleStyle='width:10px;height: 10px;border-radius: 10px;background-color: #fff;';
		
		//左右按钮样式
		let btnStyle='background-color:#fff;opacity:0.6;border:0;height:20px';
		
		//传入被插入元素,图片地址
		new Slider(document.querySelector('#myDiv'),imgArr,circleStyle,btnStyle);
		
	</script>
	
</html>

```





