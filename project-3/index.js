$(document).ready(function () {
	
	$("#list-items").html(localStorage.getItem("listItems"));
	$(".add-items").submit(function(event) {
		event.preventDefault();
		
		var item = $("#todo-list-item").val();
		
		if (item) {
			if (item === "bake", "birthday", "cake") { 
				$("#list-items").append("<li><input class='checkbox' type='checkbox'/>" + "<img src='https://upload.wikimedia.org/wikipedia/commons/c/ca/Nuvola_cake_5.png'>" + "<a class='remove'>x</a><hr></li>");
			} else {	
				$("#list-items").append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
			}
			localStorage.setItem("listItems", $("#list-items").html())
			$("#todo-list-item").val("");
		}
	});
	
	$(document).on("change", ".checkbox", function() {
		if ($(this).attr("checked")) {
			$(this).removeAttr("checked");
		}	else {
			$(this).attr("checked", "checked");
		}
	
		$(this).parent().toggleClass("completed");
		localStorage.setItem("listItems", $("#list-items").html())
	});
	
	$(document).on("click", ".remove", function() {
		$(this).parent().slideUp( "slow", function() {
			$(this).remove();
		localStorage.setItem("listItems", $("#list-items").html())
		});
	});
});
