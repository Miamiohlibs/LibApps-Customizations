$(document).ready(function() {
	
	if (localStorage.getItem("accordionItems") !== null) {
		$(".accordion-item-wrapper").html(localStorage.getItem("accordionItems"));	
	}
	
	if (localStorage.getItem("resultCode") !== null) {
		$(".accordion-result textarea").val(localStorage.getItem("resultCode"));	
	}
	
	if (localStorage.getItem("accordionId") !== null) {
		$(".accordion-id").val(localStorage.getItem("accordionId"));	
	}
	
	if (localStorage.getItem("startingId") !== null) {
		$(".starting-id").val(localStorage.getItem("startingId"));	
	}
	
	function createNewItem(order) {
		var newItem = '<div class="accordion-item">'+
			'<a href="#"><i class="glyphicon glyphicon-trash delete-item"></i></a>'+
			'<div class="form-group">'+
			'<label>Item '+order+' Title</label>'+
			'<input class="form-control" type="text" name="accordion-title">'+
			'</div>'+
			'<div class="form-group">'+
			'<label>Item '+order+' Description</label>'+
			'<textarea class="form-control" rows="8" name="accordion-description"></textarea>'+
			'</div>'+
			'</div>';

		$(".accordion-item-wrapper").append(newItem);
	}
	
	function createNewPanel(accordionId,panelId,title,description) {
		var newPanel = '\n\t<div class="panel panel-default">\n\t\t'+
			'<div class="panel-heading" role="tab" id="heading'+panelId+'">\n\t\t\t'+
				'<h3 class="panel-title">\n\t\t\t\t'+
					'<a data-toggle="collapse" data-parent="#accordion'+accordionId+'" href="#collapse'+panelId+'" aria-expanded="true" aria-controls="collapse'+panelId+'" class="collapsed">\n\t\t\t\t\t'+
						'<span>'+title+'</span> <i class="glyphicon glyphicon-plus"></i>\n\t\t\t\t'+
					'</a>\n\t\t\t'+
				'</h3>\n\t\t'+
			'</div>\n\t\t'+
			'<div id="collapse'+panelId+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading'+panelId+'">\n\t\t\t'+
				'<div class="panel-body">\n\t\t\t\t'+
					description+'\n\t\t\t'+
				'</div>\n\t\t'+
			'</div>\n\t'+
		'</div>';
		
		return newPanel;
	}
	
	$(".btn-add-new").click(function(e) {
		e.preventDefault();
		var order = $(".accordion-item").length + 1,
			startingId = parseInt($(".starting-id").text());
		
		createNewItem(order);
	});
	
	$(".accordion-item-wrapper").on("click",".delete-item",function() {
		if ($(".accordion-item").length > 1) {
			if (confirm("Are you sure you want to delete this accordion item?")) {
				$(this).closest(".accordion-item").remove();
			}
		} else {
			alert("Nice try, but you cannot delete the only accordion item available!");
		}
	});
	
	$(".btn-generate").click(function() {
		var numItems = $(".accordion-item").length,
			accordionId = parseInt($(".accordion-id").val()),
			startingId = parseInt($(".starting-id").val()),
			resultCode = "",
			itemsArray = [];
		
		$(".accordion-item-wrapper input").each(function() {
			$(this).attr("value",$(this).val());
		});
		
		$(".accordion-item-wrapper textarea").each(function() {
			$(this).html($(this).val());
		});
		
		for (var i = 0; i < $(".accordion-item").length; i++) {
			var panelId = (i + startingId),
				title = $(".accordion-item-wrapper .accordion-item:eq("+i+")").find("input").val(),
				description = $(".accordion-item-wrapper .accordion-item:eq("+i+")").find("textarea").val();

			itemsArray.push({
				panelId: panelId,
				title: title,
				description: description
			});
		}
		
		for (var i = 0; i < itemsArray.length; i++) {
			if (i == 0) {
				resultCode += '<div class="panel-group" id="accordion'+accordionId+'" role="tablist" aria-multiselectable="true">';
			}
			
			resultCode += createNewPanel(accordionId,itemsArray[i].panelId,itemsArray[i].title,itemsArray[i].description);
			
			if (i == (itemsArray.length - 1)) {
				resultCode += '\n</div>';
			}
		}
		
		//Populate preview and code output
		$(".accordion-preview").html(resultCode);
		$(".accordion-preview-wrapper").show();
		$(".accordion-result textarea").val(resultCode);
		
		//Get html of accordion items for storing
		var accordionItems = $(".accordion-item-wrapper").html();
		
		//Store that stuff
		localStorage.setItem("resultCode",resultCode);
		localStorage.setItem("accordionId",accordionId);
		localStorage.setItem("startingId",startingId);
		localStorage.setItem("accordionItems",accordionItems);
	});
});