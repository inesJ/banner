function loadBannerData(){
  var docUrl = 'https://spreadsheets.google.com/feeds/cells/0AjpZIpAGKxCEdGlfQ2JkNVlnT2NTcEZiOFFDOUNNcGc/od6/public/basic?alt=json';
	$.getJSON(docUrl, function(data) {
		var entries = data.feed.entry;
		var html = '';
		for(var i = 1; i<=entries.length; i+=2){
			var output = entries[i].content.$t;
			html = html+('<p>'+output+'</p>');
			//
		}
		$('.text').wrapInner(html);
	});
}
