
function cargarImagenes(flickrSetId) {
	$('#cbox').empty().jflickrfeed({
		flickrbase: 'http://api.flickr.com/services/feeds/',
		feedapi: 'photoset.gne',
		qstrings: {
			set: flickrSetId,
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
}

$(document).ready(function(){
    var flickrSets = {
		"lnkPiedras": "72157628773264369",
		"lnkIlustraciones": "72157628855567197",
		"lnkMunecas": "",
		"lnkOtros": "",
		"lnkContacto": ""
	};

	$('#mainNav A').click(function(){
		var flickrSet = flickrSets[this.id];
		if(flickrSet){
			$('#mainNav .active').removeClass('active');
			$(this).addClass('active');
			cargarImagenes(flickrSet);
		}
		else
			alert("Opción no implementada");
	});
	
	
});
