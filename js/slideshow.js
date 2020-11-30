var currentSlideNumber = 0; // 슬라이드 번호를 0번에 시작
var slide = document.getElementsByClassName('slide');

function moveNext() {

      if (currentSlideNumber != slide.length - 1) {

         // 현재 슬라이드를 왼쪽으로 fade out
         
         slide[currentSlideNumber].style = "animation:fade_out_rtl 0.6s forwards"

         // 다음 슬라이드를 화면으로 fade in

         slide[currentSlideNumber + 1].style = "animation:fade_in_rtl 0.6s forwards"
         currentSlideNumber++;

         playRestart();
         indexDisplay(currentSlideNumber);
        
      }
      else {   // 마지막 슬라이드에서 클릭될 때 

         // 현재 슬라이드를 왼쪽으로 fade out
         
         slide[currentSlideNumber].style = "animation:fade_out_rtl 0.6s forwards";

         // 다음 슬라이드를 화면으로 fade in

         slide[0].style = "animation:fade_in_rtl 0.6s forwards";

         currentSlideNumber = 0;
         playRestart();
         indexDisplay(currentSlideNumber);

      }

   }

function movePrev() {

   if (currentSlideNumber !=0 )
      {
         // 현재 슬라이드 왼쪽에서 오른쪽으로 fade out

         slide[currentSlideNumber].style = " animation:fade_out_ltr 0.4s forwards"

         // 이전 슬라이드가 왼쪽에서 화면으로 fade in

         slide[currentSlideNumber - 1].style = " animation:fade_in_ltr 0.4s forwards"

         currentSlideNumber--;
         playRestart();
         indexDisplay(currentSlideNumber);
      }  
      else 
         {
            // 현재 슬라이드 왼쪽에서 오른쪽으로 fade out

         slide[0].style = "animation:fade_out_ltr 0.4s forwards"

         // 이전 슬라이드가 왼쪽에서 화면으로 fade in

         slide[slide.length - 1].style = "animation:fade_in_ltr 0.4s forwards"

         currentSlideNumber = slide.length - 1;

         playRestart();
         indexDisplay(currentSlideNumber);
       
      }

}

function slideChange(indexNumber) {

   
   var direction = indexNumber - currentSlideNumber;
   var distance = Math.abs(direction); 
   
   if ( direction > 0)

      {
         // 현재 슬라이드를 왼쪽으로 fade out
         for (i=0; i<distance; i++)
         slide[currentSlideNumber + i].style = "animation:fade_out_rtl_" + i + " 0.6s forwards ease-in";

         // for (i=0; i<distance; i++)
         // slide[currentSlideNumber + i].style = "animation:fade_out_rtl " + (0.4 + i*0.2) + "s forwards ease-in";

         // 다음 슬라이드를 화면으로 fade in

         slide[indexNumber].style = "animation:fade_in_rtl 0.6s forwards ease-in";
         
         currentSlideNumber = indexNumber;

         indexDisplay();
         playRestart();

      } else if ( direction < 0) {

          // 현재 슬라이드를 오른쪽으로 fade out

          for (i=0; i<distance; i++)
          slide[currentSlideNumber - i].style = "animation:fade_out_ltr_" + i + " 0.6s forwards ease-in";
 
          // 다음 슬라이드를 화면으로 fade in
 
          slide[indexNumber].style = "animation:fade_in_ltr 0.6s forwards ease-in";
         
         currentSlideNumber = indexNumber;

         indexDisplay();
         playRestart();

      }


 }

 function indexDisplay(number)
 {
    for (i=0; i<slide.length; i++)
    { 
       document.querySelectorAll('.slide_index_bt span')[i].style = "width: 8px; height:8px; background: rgba(255,255,255,0.4);border-radius: 4px; display: block;border:none;"
     }

     document.querySelectorAll('.slide_index_bt span')[currentSlideNumber].style ="width: 12px; height: 12px; border: 2px solid white; background: none; border-radius: 6px; ";
 } 

 var slideLoopState = 1;

 var slideLoop = setInterval(moveNext,5000);

 function stopPlaySlide() { 
    if (slideLoopState == 1) 
    {
    clearInterval(slideLoop);
    document.getElementById('playstop_bt').src="img/play.svg";
    slideLoopState = 0;

    } else { 
      slideLoop = setInterval(moveNext,5000);
      document.getElementById('playstop_bt').src="img/stop.svg";
      slideLoopState = 1;

    }
 }

 function playRestart() { 
   if ( slideLoopState == 1)
      {
         clearInterval(slideLoop);
         slideLoop = setInterval(moveNext,5000);
      }
 }

// var iiii = 0;
//  function imgChage() {
   
//    document.getElementById('img').src = "imgname_" + i + ".png";
//    iiii++
//    if (i==3) { return();}
//    setTimeout(imgChange,100);   
// }