var visiable = true;
$(function(){
    $('#btnShow').click(function(){
        if( visiable == false ){
          $('.d1').hide();
          $('.d1-title').html("Click To Show Text");
          visiable = true;
        }else{
          $('.d1').show();
          $('.d1-title').html("Click To Show Text");
          visiable = false;
        }
        console.log(visiable);
    });
});
