$("#currentDay").text(moment().format('dddd, MMMM D, YYYY h:mm'));

$(document).ready( function() {


  $(".saveBtn").on("click", function () {
    var comment = $(this).siblings(".comment").val();
    var time = $(this).parent().attr("id");

    console.log("comment: ", comment);
    console.log("time: ", time);

    localStorage.setItem(time, comment);
  });



  function hourBlock(){


    var currentTime = moment().hours()


    $('.hourBlock').each( function () {

    var timeBlock =  parseInt($(this).parent().attr("id"));
    console.log(timeBlock)
    
    if(timeBlock < currentTime){
        $('.input').addClass('past');

    } else if(timeBlock === currentTime){
        $('.input').removeClass('past');
        $('.input').addClass('present');
    } else {
        $('.input').removeClass('past');
        $('.input').removeClass('present');
        $('.input').addClass('future');
    }
    })


  }

  hourBlock()


  $('#9 .comment' ).val(localStorage.getItem('9'))
  $('#10 .comment' ).val(localStorage.getItem('10'))
  $('#11 .comment' ).val(localStorage.getItem('11'))
  $('#12 .comment' ).val(localStorage.getItem('12'))
  $('#13 .comment' ).val(localStorage.getItem('13'))
  $('#14 .comment' ).val(localStorage.getItem('14'))
  $('#15 .comment' ).val(localStorage.getItem('15'))
  $('#16 .comment' ).val(localStorage.getItem('16'))
  $('#17 .comment' ).val(localStorage.getItem('17'))
  $('#18 .comment' ).val(localStorage.getItem('18'))
  
});

// clear local storage
$(".clear").on("click", function () {
  localStorage.clear();
  $("#9 .comment").val(" ");
  $("#10 .comment").val(" ");
  $("#11 .comment").val(" ");
  $("#12 .comment").val(" ");
  $("#13 .comment").val(" ");
  $("#14 .comment").val(" ");
  $("#15 .comment").val(" ");
  $("#16 .comment").val(" ");
  $("#17 .comment").val(" ");
  $("#18 .comment").val(" ");
});