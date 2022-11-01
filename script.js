


 function myFunction() {
    var element = document.getElementById("nlinks");
    var CSS = element.style.visibility;
    if(CSS != "hidden"){
      element.style.visibility = "hidden";
    }else if(CSS == "hidden"){
      element.style.visibility = "visible";
    }
    window.addEventListener('resize',function(){
     
          if( this.window.innerWidth >700){
              document.getElementById("nlinks").style.visibility="visible";
          }
       });
 }
// for filterage 
 function ff(){
  const fltr = document.querySelector('.cards-filtr-select');
  function toutMune(){//show all prodact
    document.getElementById("Sushi").style.display="block";
    document.getElementById("Salade").style.display="block";
    document.getElementById("Plats").style.display="block";
  }
   if(fltr.value =="Salade"){
    toutMune();
      document.getElementById("Sushi").style.display="none";
      document.getElementById("Plats").style.display="none";
   }
  else if(fltr.value =="Plats"){
    toutMune();
      document.getElementById("Sushi").style.display="none";
      document.getElementById("Salade").style.display="none";
    }
   else if(fltr.value =="Sushi"){
      toutMune();
      alert("lllllll");
      document.getElementById("Plats").style.display="none";
      document.getElementById("Salade").style.display="none";
    }
    else if(fltr.value =="Toutes les categories"){
    toutMune();
    }

 }
 var sum=0
function paine(id){
  var plase =document.getElementById(id);
  var card= plase.parentElement.parentElement;
   var img =card.getElementsByTagName("img")[0].src;
   var name =card.getElementsByTagName("span")[0].textContent;
   var price =card.getElementsByTagName("span")[1].textContent;
   sum+= parseInt(price);
   console.log(img);
   document.querySelector(".product").innerHTML+='<div class="cardCA">  <span>'+name+'</span> <div class="img-card">   <img src="'+img+'" alt=""> </div> <div class="prix">  <span>'+price+'</span>  </div> </div>';
}
 function totl(){
  
  alert(sum);
  sum=0;
  document.querySelector(".product").innerHTML='';
 }

