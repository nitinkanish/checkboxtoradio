jQuery(document).ready(function(){
var checkboxesOne = document.querySelectorAll('[data-control="checkbox-dropdown"]');
$('.dropdown-label').on('click', function(e) {
  e.preventDefault();
  var ClassParent = jQuery(this).parent();
  if(ClassParent.hasClass('select-show')){

    ClassParent.removeClass('select-show');
    return false;
    
  } else {
	ClassParent.addClass('select-show');
  }
  });
  $('.home-list-check').on('click', 'input[type="checkbox"]', function() {   
	if($(this).is(":checked")){
		var checkTextH = $(this).val(); 
	  	$('.home-label').html(checkTextH);
    	$('.home-list-check input[type="checkbox"]').not(this).prop('checked', false); 
		$('[data-control="checkbox-dropdown"]').removeClass('select-show');
	} else {
		$('.home-label').html('Home Style Choice (SELECT ALL THAT APPLY)');
	}    
});
$('.hear-list-check').on('click', 'input[type="checkbox"]', function() {      
	if($(this).is(":checked")){
		var checkTextH = $(this).val(); 
	  	$('.here-label').html(checkTextH);
   		 $('.hear-list-check input[type="checkbox"]').not(this).prop('checked', false); 
		$('[data-control="checkbox-dropdown"]').removeClass('select-show');
	} else {
		$('.here-label').html('HOW DID YOU HEAR ABOUT US?');
	}
	});     
});
