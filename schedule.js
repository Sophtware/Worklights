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
		// $(this).parent().parent().parent().parent().get(0).siblings().css( "background-color", "red" );
		counter = 1;
		trs = $(this).parent().parent().parent().parent().parent();
		for (i = 0; i < 3; i++) {
			// console.log(trs.get(i));
			// element = trs.get(i);
			$(trs).css( "background-color", "gold" );
			trs = $(trs).next();

		}
	});



	$(".default").click(function(){
		// $(this).parent().parent().parent().parent().get(0).siblings().css( "background-color", "red" );
		counter = 1;
		trs = $(this).parent().parent().parent().parent().parent();
		// console.log(trs);
		for (i = 0; i < 1; i++) {
			// console.log(trs.get(i));
			// element = trs.get(i);
			$(trs).css( "background-color", "whitesmoke" );
			trs = $(trs).next();

		}
	});


	$(".weekend").click(function(){
		// $(this).parent().parent().parent().parent().get(0).siblings().css( "background-color", "red" );
		counter = 1;
		trs = $(this).parent().parent().parent().parent().parent();
		// console.log(trs);
		for (i = 0; i < 4; i++) {
			// console.log(trs.get(i));
			// element = trs.get(i);
			$(trs).css( "background-color", "burlywood" );
			trs = $(trs).next();

		}
	});
	

	$(".table-condensed td").click(function(){
		console.log("hahah")
		day = $(this).html();
		date = $($(this).parent().parent().parent().find("thead").find(".datepicker-switch")).html();
		$("#current-date").html(day + " " + date);
	});


});
