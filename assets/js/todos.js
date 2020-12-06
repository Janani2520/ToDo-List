
$("ul").on("click", "li", function(){
	$(this).toggleClass("strike");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		if($(this).val()==""){
			alert("This toDo is empty!! Enter a value");
			$("ul").$(this).remove;
		}
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});
$("#toggle").click(function(){
    $("input[type='text']").slideToggle(200);
});