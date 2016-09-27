$(function() {

    $("#submit-routine").on("click", function search(e) {
    	e.preventDefault();
        $('#routines tr:last').after('<tr><td>' + $("#routine-name").val()
        	+ '</td><td>'+ $("#routine-time").val()+' hr' +'</td></tr>');
        $("#routine-name").val("");
        $("#routine-time").val("");
        $("#routine-created-success").removeClass("hidden");
    });

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
		for (i = 0; i < 2; i++) {
			$(trs).css( "background-color", "#5bc0de" );
			trs = $(trs).next();
		}

		for (i = 0; i < 1; i++) {
			$(trs).css( "background-color", "#d9534f" );
			trs = $(trs).next();
		}

		for (i = 0; i < 2; i++) {
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

	$("#routine-slider").slider({ 
		id: "routine-slider", 
		min: 0, 
		max: 10, 
		range: true, 
		value: [3, 7]
	});


});
