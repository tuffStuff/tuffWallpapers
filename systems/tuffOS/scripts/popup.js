popup = [];
popup.utilities = {
    launchPopup: function (windowNumber) {
        $("div#hiddenPopupContent" + windowNumber).empty();
        $("div#hiddenPopupContent" + windowNumber).attr("id", "displayedPopupContent" + windowNumber);
    	  
     	$("#displayedPopupContent").bind("click", function(){
     		alert("got div");
     	});
    },
    hidePopup: function (windowNumber) {
        $("div#displayedPopupContent" + windowNumber).empty();
        $("div#displayedPopupContent" + windowNumber).attr("id", "hiddenPopupContent" + windowNumber);

        $("#taskbar-app"+ windowNumber +"-icon").empty();
        numOpenApps = numOpenApps - 1;
        
        //popup.utilities.repositionWindowAndMenuItems(windowNumber);
	},
	repositionWindowAndMenuItems: function(windowNumber){
		
	}
};
popup.iframe = {
    load: function (path, windowNumber) {
        var url = path;
        popup.utilities.launchPopup(windowNumber);
        url += "?windowNumber=" + windowNumber;
        var html = "";
        html += "<iframe src='" + url +"' id='iframePopup' style='z-index:99999;'></iframe>";
        $("div#displayedPopupContent" + windowNumber).append(html);
    },


};
