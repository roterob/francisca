$(document).ready(function(){
	$('#cbox').jflickrfeed({
		flickrbase: 'http://api.flickr.com/services/feeds/',
		feedapi: 'photoset.gne',
		qstrings: {
			set: '72157628773264369',
			nsid: '73806935@N03',
			limit: 50,
			lang: 'en-us'
		},
		itemTemplate: '<li>'+
						'<a rel="colorbox" href="{{image_z}}" title="{{title}}">' +
							'<img src="{{image_m}}" alt="{{title}}" />' +
						'</a>' +
					  '</li>'
	}, function(data) {
		$('#cbox a').colorbox();
	});
	
	$('#cycle').jflickrfeed({
		limit: 14,
		qstrings: {
			id: '37304598@N02'
		},
		itemTemplate: '<li><img src="{{image}}" alt="{{title}}" /><div>{{title}}</div></li>'
	}, function(data) {
		$('#cycle div').hide();
		$('#cycle').cycle({
			timeout: 5000
		});
		$('#cycle li').hover(function(){
			$(this).children('div').show();
		},function(){
			$(this).children('div').hide();
		});
	});

});