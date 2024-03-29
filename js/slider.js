class Slider{
	constructor(ct,imgs,circleStyle,btnStyle) {
		this.currentPage=0;
		this.pageCount=imgs.length;
	    let width=ct.offsetWidth;
		let height=ct.offsetHeight;
		this.width=width;
		this.circleStyle=circleStyle;
		this.btnStyle=btnStyle;
		
		this.innerCt=document.createElement('div');
		this.innerCt.style.cssText='width:'+width*imgs.length+'px;'+'height:100%;padding:0px;margin:0px;overflow:hidden; position: relative;transition:transform 1s ease';
		ct.appendChild(this.innerCt);
		
		let circleCt=document.createElement('div');
		circleCt.style.cssText='position: absolute;bottom:0;left: 30%;padding: 10px 0;overflow:hidden;'
		circleCt.setAttribute('align','center');
		ct.appendChild(circleCt);
		this.circles=[];
		
		imgs.forEach((item,index)=>{
			let ct1=document.createElement('div');
			ct1.style.cssText='width:'+width+'px;'+'height:'+height+'px;'+'float:left;';
			ct1.setAttribute('align','center');
			let img=new Image();
			img.src=item;
			
			img.style.cssText='width:'+width+'px;'+'height:'+height+'px;';
			
			img.onload=()=>{
				img.style.marginTop=(height-img.height)/2+'px';
					}
			ct1.appendChild(img);
			this.innerCt.appendChild(ct1);
			
			let c=document.createElement('div');
			
			c.style.cssText=this.circleStyle+'display: inline-block;margin-left: 10px;float: left';
			this.circles.push(c);
			circleCt.appendChild(c);
			c.addEventListener('mouseover',()=>{
				this.slideTo(index);
			})
			
		});
		let css='position:absolute;top:50%;padding:0 10px;display: inline-block;float: left;margin-top:-15px;'+this.btnStyle;
		let btnLeft=document.createElement('button')
		btnLeft.innerHTML='<';
		let btnRight=document.createElement('button')
		btnRight.innerHTML='>';
		btnLeft.style.cssText=css;
		btnRight.style.cssText=css;
		btnLeft.style.left='0px';
		btnRight.style.right='0px';
		ct.appendChild(btnLeft);
		ct.appendChild(btnRight);
		btnLeft.addEventListener('click',()=>{
			if(this.currentPage===0)
			{
				return;
			}
			this.slideTo(this.currentPage-1);
	
			
		})
		btnRight.addEventListener('click',()=>{
			if(this.currentPage===this.pageCount-1)
			{
				return;
			}
			
			this.slideTo(this.currentPage+1);
			
		});
		this.slideTo(0);
		
	}
	
	
	
	slideTo(num){
		this.circles[this.currentPage].style.cssText=this.circleStyle+'display: inline-block;margin-left: 10px;float: left';
		this.circles[num].style.backgroundColor='red';
		let left=-num*this.width;
		console.log(left);
		this.innerCt.style.transform='translate('+left+'px,0px)';
		this.currentPage=num;
	}
}