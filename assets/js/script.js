$("#currentDay").text(moment().format('dddd, MMMM D, YYYY h:mm'));

$(document).ready(function () {


  $(".saveBtn").on("click", function () {
    var comment = $(this).siblings(".comment").val();
    var time = $(this).parent().attr("id");

    console.log("comment: ", comment);
    console.log("time: ", time);

    localStorage.setItem(time, comment);
  });



  function hourBlock(){


    var currentTime = moment().hours()


    $('.hourBlock').each(function () {

    var timeBlock =  $(this).parent().attr("id");
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




// location.reload() clear