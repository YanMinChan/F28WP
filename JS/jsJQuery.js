function modify() {
	//usage of JQuery magic $()
	$("div").width("100pt");
  }

$(function(){
	$("#bob").text("Blue");
	$(".lnk").wrap("<h1></h1>");
	$("#parent2").parent().css({"color":"red"});
})