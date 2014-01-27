$('.search').on('keyup', function () {
	var search = new RegExp($('.search').val(), 'i');
	$('li').each(function () {
		var text = $(this).text();
		if (search.test(text)) {
			$(this).show();
		} else {
			$(this).hide();
		}
	});
});
