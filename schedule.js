$(function() {

	$('.datepicker').datepicker({
	});

	$("#submit").click(function(){
		time = $("#time").val();
		task = $("#task").val();
		console.log(time);
		console.log(task);
		$("#time").val("");
		$("#task").val("");

		console.log($("#"+time).children("td.task"));
		$("#"+time).children("td.task").html(task);

	});

	$(".hw").click(function(){
		counter = 1;
		trs = $(this).parent().parent().parent().parent().parent();
		for (i = 0; i < 3; i++) {
			$(trs).css( "background-color", "#f0ad4e" );
			trs = $(trs).next();

		}
	});



	$(".default").click(function(){
		counter = 1;
		trs = $(this).parent().parent().parent().parent().parent();
		for (i = 0; i < 1; i++) {
			$(trs).css( "background-color", "#5bc0de" );
			trs = $(trs).next();

		}
	});


	$(".weekend").click(function(){
		counter = 1;
		trs = $(this).parent().parent().parent().parent().parent();
		for (i = 0; i < 4; i++) {
			$(trs).css( "background-color", "#5cb85c" );
			trs = $(trs).next();

		}
	});
	

	$(".table-condensed td").click(function(){
		day = $(this).html();
		date = $($(this).parent().parent().parent().find("thead").find(".datepicker-switch")).html();
		$("#current-date").html(day + " " + date);
	});


});
