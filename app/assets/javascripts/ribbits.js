function countChars(){
	var text_length = $("#ribbitText").val().length; 
	$("#charCount").text(text_length);
	if(text_length	> 140){
		$("#charCount").addClass("limit");
		$("#ribbitBtn").attr('disabled','disabled');
	}else{
		$("#charCount").removeClass("limit");
		$("#ribbitBtn").removeAttr("disabled");
	}
}

$("#ribbitText").keyup(function(){
	countChars();
});


$("#ribbitText").keydown(function(){
	countChars();
});