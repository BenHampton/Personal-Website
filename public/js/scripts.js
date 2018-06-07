
var visiable = true;
$(function(){
  $('#btn').click(function(){
    if(visiable == false){
      $('#contents').hide();
      $('.btn').html("Click To Show");
      visiable = true;
    }else{
      $('#contents').show();
      $('btn').html("Click To Hide");
      visiable = false;
    }
  });
});
