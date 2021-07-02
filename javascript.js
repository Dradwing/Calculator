var screenvalue=document.getElementsByClassName('screen')[0];
var buttons=document.querySelectorAll('button');
for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener("click",function(){
        if(this.innerHTML=='x')
        {
            screenvalue.innerHTML=screenvalue.innerHTML+'*'; 
            return;
        }
        if(this.innerHTML=='=')
        {
           try{ screenvalue.innerHTML=eval(screenvalue.innerHTML);}
           catch{
               screenvalue.innerHTML="Invalid Input";
           }
            return;
        }
        if(this.innerHTML=='AC')
        {
            screenvalue.innerHTML=" ";
            return;
        }
      screenvalue.innerHTML=screenvalue.innerHTML+this.innerHTML;
    });
}