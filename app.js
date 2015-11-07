
/*$('#search').on('load',function(){
	$(this).hide();
	
});*/


	//window width and height are decreased by 30 to take the tolerance of 15 pixes at each side into account
	function scale(width, height, padding, border){
		var scrWidth = $(window).width()- 30,
			scrHeight = $(window).height() -30,
			ifrPadding = 2 * padding,
			ifrBorder = 2 * border,
			ifrWidth = width + ifrPadding + ifrBorder,
			ifrHeight = height + ifrPadding + ifrBorder,
			h,w;
		if(ifrWidth < scrWidth && ifrHeight < scrHeight){
			w = ifrWidth;
			h = ifrHeight;
		}
		else if ((ifrWidth/scrWidth) > (ifrHeight/scrHeight))
			{
				w = scrWidth;
				h = (scrWidth / ifrWidth) * ifrHeight;
			}
		else
			{
				h = scrHeight;
				w = (scrHeight / ifrHeight)* ifrWidth;
			}
		return{
			"width": w - ( ifrPadding + ifrBorder),
			"height": h - (ifrPadding + ifrBorder)
		};
	};
	$(".ui-popup iframe")
		.attr("width",0)
		.attr("height","auto");
	$("#popupMap iframe").contents().find("#map_canvas")
		.css({"width": 0, "height" : 0});
	$("#popupMap").on({
		popupforreposition: function (){
			var size = scale(480,320,0,1),
				w = size.width,
				h = size.height;
			$( "popupMap iframe")
				.attr("width",w)
				.attr("height",h);
			$("#popupMap iframe").contents().find("#map_canvas")
			.css({"width":w, "height" : h});
		},
		popupafterclose: function(){
			$('#popupMap iframe')
				.attr("width", 0)
				.attr("height",0);
			$("#popupMap iframe").contents().find("#map_canvas")
				.css({"width": 0, "height" : 0});
		
	}
});


/*$( document ).on( "pagecreate", "#lunch",*/ /*function() {
    $( “.menus" ).on( "click", function() {*/
 /*       var target = $( this ),
		 var menu = target.attr("id");*/
						/* var*/ /*closebtn = '<a href = "#" data-rel="back" class = "ui-btn ui-corner-all ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btnright">Close</a>';
		 $( header )
            .appendTo( $( popup )
                .appendTo( $.mobile.activePage )
                .popup() )
            .toolbar()*/
       /*     .before( closebtn )
            .after( img );*/
        // Wait with opening the popup until the popup image has been loaded in the DOM.
        // This ensures the popup gets the correct size and position
        $( ".photo", "#popup-" + short ).load(function() {
            // Open the popup
            $( "#popup-" + short ).popup( "open" );
            // Clear the fallback
            clearTimeout( fallback );
        });
        // Fallback in case the browser doesn't fire a load event
        var fallback = setTimeout(function() {
            $( "#popup-" + short ).popup( "open" );
        }, 2000);
    
    // Set a max-height to make large images shrink to fit the screen.
    $( document ).on( "popupbeforeposition", ".ui-popup", function() {
        var image = $( this ).children( "img" ),
            height = image.height(),
            width = image.width();
        // Set height and width attribute of the image
        $( this ).attr({ "height": height, "width": width });
        // 68px: 2 * 15px for top/bottom tolerance, 38px for the header.
        var maxHeight = $( window ).height() - 68 + "px";
        $( "img.photo", this ).css( "max-height", maxHeight );
    });
    // Remove the popup after it has been closed to manage DOM size
    $( document ).on( "popupafterclose", ".ui-popup", function() {
        $( this ).remove();
    });


 
// Setter
