$(function(){

    var list=$(".side"),
        count=0;

    for(var i=0;i<list.length;i++){

        var t=0,
            str=[],
            p=[];

        list[i].flag="ok";
        list[i].index=i;

        list[i].onclick=function(){

            if(this.flag==null){
                this.onclick=function(){}
            }
            else{

               t++;
               str[t]=this.innerHTML;
               p[t]=this.index;
               
               if(this.flag==="ok"){

                  $(this).css("transform"," rotateY(180deg)");
                   this.flag="error";

                }else if(this.flag==="error"){
                  $(this).css("transform"," rotateY(0deg)");
                  this.flag="ok";
                }

              
               if(t==2){

                    if(str[1]!=str[2]){
                        setTimeout(function(){

                            $(list[p[1]]).css("transform"," rotateY(0deg)");
                            $(list[p[2]]).css("transform"," rotateY(0deg)");
                             t=0;
                          
                        },500);
                    
                        list[p[1]].flag="ok";
                        list[p[2]].flag="ok";

                     }else{
                            count+=2;
                            list[p[1]].flag=null;
                            list[p[2]].flag=null;

                            if(count==list.length){
                                alert("恭喜你过关！");
                            }
                            t=0;
                    }
                
               }
             }
          }
      
    }

 })