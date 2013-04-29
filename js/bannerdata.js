function loadBannerData(){
	var docUrl = 'https://spreadsheets.google.com/feeds/list/0AjpZIpAGKxCEdGlfQ2JkNVlnT2NTcEZiOFFDOUNNcGc/od6/public/values?alt=json'
	$.getJSON(docUrl, function(data) {
		var entries = data.feed.entry;
		var html = '';
		$.each(entries, function(i){
			var bid = entries[i].gsx$bannerid.$t;
			var loc = entries[i].gsx$locale.$t;
			html = '<p>'+bid+'</p><p>'+loc+'</p>';
			$('.ad').attr('id',bid).attr('data-locale',loc);
			
		});
		$('.text').wrapInner(html);
	});

}
