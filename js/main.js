
function togglemobile(menu)
{
   menu.classList.toggle('open');
}



/***********slider**************** */




//**********login******* */
const container =document.getElementById('login');
let popup=document.getElementById('loginbt');
popup.addEventListener("click",()=>{
   container.style.visibility='visible';

});

/************ Timer ************ */
const counttime=()=>
{
   const upperdata=new Date('jan 29,2022 00:00:00:00');
   const currentdate=new Date().getTime();
   const diffDate =upperdata-currentdate;
   const second=1000;
   const minit=second*60;
   const hours=minit*60;
   const days=hours*24;

   const remindays=Math.floor(diffDate/days);
   const reminhours=Math.floor((diffDate%days)/hours);
   const reminsec=Math.floor((diffDate%hours)/minit);
   const reminsecond=Math.floor((diffDate%minit)/second);
   var d=document.getElementById('days');
   var h=document.getElementById('hours');

   var m=document.getElementById('min');

   var s=document.getElementById('sec');
d.innerHTML=remindays;
h.innerHTML=reminhours;
m.innerHTML=reminsec;
s.innerHTML=reminsecond;

}

setInterval(counttime,1000);



/****************TImer end **************** */

//**********popup book************** *

const callImage = image => {
   document.getElementById("imageView").setAttribute("src", image.getAttribute("src"));
   document.getElementById('popUP').style.display = "block";
}
const hideModule = id => document.getElementById(id).style.display = "none";