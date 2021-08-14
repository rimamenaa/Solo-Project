

$('.num').change(function() {
   // create a variable for the correct numbers
     var correctNum =[4,3,5,8,7,1,6,9,2,2,7,6,3,4,9,1,8,5,9,8,1,2,5,6,3,4,7,1,9,3,4,2,7,8,5,6,8,6,7,9,1,5,2,3,4,5,2,4,6,8,3,7,1,9,7,4,9,1,3,2,5,6,8,6,1,2,5,9,8,4,7,3,3,5,8,7,6,4,9,2,1]
        //loop through the input numbers
         var numList = $(".num");
         correctNum.forEach(function(element, i) {
           // check if the input number matches the right answer number, if so, change the background color of that box to green. If not, change it to red
            if (+$(numList[i]).val() === correctNum[i]) {
               $('#'+ $(numList[i]).attr('id')).css("background-color", "#8FBC8F")
            }
            else  $('#'+ $(numList[i]).attr('id')).css("background-color", "#FA8072")
         })
 })

var btn = $('.btn');
btn.click(function() {
   // loop through the input background colors
   // when you click on the submit button, if one input in red, an alert saying that you lost appears, and vice versa.
      for(var i=0; i<81; i++) {
         if ($('.num')[i].style['background-color'] === "rgb(250, 128, 114)") {
            $('.alert.lost').show();
         return;
         }
      }
    $('.alert.success').show();
})

// click to change the theme to dark
$('#dark').click(function() {
    $("body").css("background-color", "#212121").css("color", "white")
    $('.num').css("color", "white")
     $('tr').css("border-bottom-color", "#818181")
})