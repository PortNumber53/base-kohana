/**
 * Date: 7/3/13
 * Time: 11:07 PM
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(function() {
	// Setup drop down menu
	$('.dropdown-toggle').dropdown();
	// Fix input element click problem
	$('.dropdown button, .dropdown label, .dropdown-menu, input .dropdown-menu .checkbox').on("click", function(e) {
		e.stopPropagation();
	});

	//$("img.lazy").lazyload();

	// bind form using ajaxForm
	$('.json-form').ajaxForm({
		// dataType identifies the expected content type of the server response
		dataType:  "json",
		type: "POST",
		// success identifies the function to invoke when the server response
		// has been received
		success:  function (response, statusText, xhr, $form) {
			if (response.error == false) {
				if (response.redirect_url) {
					history.pushState({id: 'updated product info'}, '', response.redirect_url);
					$form.attr("action", response.redirect_url);
					document.location = response.redirect_url;
				}
				if (response.message) {
					var template = $("#feedback").html();
					$(".form-feedback").html(template);

					var transform = {'tag':'li','html':'${message}'};
					var data = {
						message: response.message
					};
					$(".form-feedback > .alert").removeClass("alert-warning alert-danger").addClass("alert-success");
					$('#errorlist').json2html(data, transform);
					if (response.dismiss_timer) {
						setTimeout('$(".alert").alert("close")', response.dismiss_timer*1000);
					}
				}
			} else {
				var template = $("#feedback").html();
				$(".form-feedback").html(template);

				var transform = {'tag':'li','html':'${message}'};
				var data = {
					message: response.error.message
				};
				$(".form-feedback > .alert").removeClass("alert-warning alert-success").addClass("alert-danger");
				$('#errorlist').json2html(data, transform);
			}
		},
		error: function (response) {
			//console.log(response);
		}
	});

	$(".social-action").on("click", "li > a.share", function () {
		var network = $(this).data("network");
		var what = $(this).parent().parent().data('what');
		$.ajax({
			url: "/service/social/share/",
			type: 'POST',
			dataType: "json",
			data: {
				'logged_in': true,
				'what': what
			},
			success: function (response) {
			},
			error: function (response) {
			}
		});
	});

	$(".btn-action").on("click", function() {
		var serviceUrl = $(this).data("service");
		var what = $(this).data("what");
		var amount = $("#amount_"+what).val();
		$.ajax({
			url: serviceUrl,
			type: 'POST',
			dataType: "json",
			data: {
				'logged_in': true,
				'what': what,
				'amount': amount
			},
			success: function (response) {
			},
			error: function (response) {
			}
		});
	});
	$(".btn-grab").on("click", function() {
		var serviceUrl = $(this).data("service");
		var what = $(this).data("what");
		var businessId = $(this).data("business-id");
		var promotionId = $(this).data("promotion-id");
		var amount = $(this).data("amount");
		$.ajax({
			url: serviceUrl,
			type: 'POST',
			dataType: "json",
			data: {
				'logged_in': true,
				'what': what,
				'business_id': businessId,
				'promotion_id': promotionId,
				'amount': amount
			},
			success: function (response) {
			},
			error: function (response) {
			}
		});
	});

	$("#tableData").on("click", "button.btn-delete", function(e) {
		e.stopPropagation();
		if (confirm("Are you sure you want to delete this?")) {
			var objectId = $(this).data("object-id");
			var url = $(this).data("delete-link");
			$.ajax({
				url: url,
				type: 'POST',
				dataType: "json",
				data: {
					'what': objectId,
					'back_url': encodeURI(document.location)
				},
				success: function (response) {
					if (response.error == false) {
						if (response.redirect_url) {
							document.location = decodeURI(response.redirect_url);
						}
					}
					if (response.table_body) {
						$("#tableData > tbody").html(response.table_body);
					}
				},
				error: function (response) {
				}
			});
		}
	}).on("click", "button.btn-manage", function(e) {
			e.stopPropagation();
			var objectId = $(this).data("object-id");
			var url = $(this).data("action-link");
			$.ajax({
				url: url,
				type: 'POST',
				dataType: "json",
				data: {
					'what': objectId,
					'back_url': encodeURI(document.location)
				},
				success: function (response) {
					if (response.error == false) {
						if (response.redirect_url) {
							document.location = decodeURI(response.redirect_url);
						}
					}
					if (response.table_body) {
						$("#tableData > tbody").html(response.table_body);
					}
				},
				error: function (response) {
				}
			});
		}).on("click", ".clickable", function(e) {
			e.preventDefault();
			var url = $(this).data("edit-link");
			document.cookie = "back_url="+encodeURI(document.location);
			document.location = url;
		});

	$(".json-form").on("click", "button.btn-form-action", function() {
		var url = $(this).data("action-link");
		var objectId = $(this).data("object-id");

		var data = $(".json-form").serializeObject();
		//{
		//	'what': objectId,
		//	'back_url': encodeURI(document.location)
		//}

		$.ajax({
			url: url,
			type: 'POST',
			dataType: "json",
			data: data,
			success: function (response) {
				if (response.error == false) {
					if (response.redirect_url) {
						document.location = decodeURI(response.redirect_url);
					}
				}
				if (response.table_body) {
					$("#tableData > tbody").html(response.table_body);
				}
			},
			error: function (response) {
			}
		});
	});


	//Check back_URL
	var cookie_back = $.cookie("back_url");
	if (cookie_back != undefined) {
		$(".back-link").attr("href", cookie_back).removeClass("hidden");
	}
});
