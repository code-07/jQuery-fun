$(document).ready(function(){
	$(".pic, h1").hide();
	$(".slide").click(function(){
		$("p").slideToggle();
	});
	
	$(".show").click(function(){
		
		$(".pic1").animate({left: '510px'},1000);
		$(".pic2").animate({top: '0px'},3000);
		$(".pic1, h1").show(4000);
	});
});