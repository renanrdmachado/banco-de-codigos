<script>
// Abertura de modal
$('body').append('<div class="popup-all"><div class="popup-mask"></div><div class="popup-form"><div class="popup-close"><i class="fi-x"></i></div><div class="popup-ctt"></div></div></div>');
$('a').click(function(){
  if($(this).attr('rel')=='popup'){

    $('.popup-all').toggle('fast');
    var href = $(this).attr('href'); 
    var gethref = this.hash.substr(1);
       $('.popup-ctt').html('Carregando...');
      
      jQuery.ajax({
          url: '/wp-content/themes/bdrops/template/popup.php?href='+gethref,
          success: function(data) {
              jQuery('.popup-ctt').html(data);
          }
        })
  }
});

 // Fechar com clique na mask
$('.popup-mask').click(function(){
  $('.popup-all').hide('fast');
});
$('.popup-close').click(function(){
  $('.popup-all').hide('fast');
})
</script>
