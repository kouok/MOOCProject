window.onload=function(){
    	var serch=document.getElementById('serch')
    	// var ipt=document.getElementById('ipt')
    	var show=document.getElementById('show')
       
       serch.onkeyup=function(){
 
       	var val=this.value;
        var osc=document.createElement("script");
            osc.src="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+ val +"&cb=fly";
         document.body.appendChild(osc)
       }
      
      function fly(data){
       console.log(123) 
        show.style.display = 'block';
        show.innerHTML="";	
        // console.log(data)
         for(var i=0;i<data.s.length;i++){
             var oli=document.createElement("li");
             var oa=document.createElement("a")
              oli.appendChild(oa);
             oa.innerHTML=data.s[i];
             oa.href="https://www.baidu.com/s?wd="+data.s[i];
             show.appendChild(oli);
         }

      }

      // document.body.onclick=function(){
      // 	show.style.display="none"
      // }
   }
