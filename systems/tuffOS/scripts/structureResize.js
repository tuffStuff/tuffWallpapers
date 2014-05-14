$(document).ready(function(){
	resizeTriggers();
});

$(window).resize(function (){
	resizeTriggers();
});

function resizeTriggers(){
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	
	
	$("table#desktop-base-structure").height(windowHeight);
	$("table#desktop-base-structure").width(windowWidth);
	
	$("tr#desktop-base-structure-taskbar-row").height("45px");
	$("tr#desktop-base-structure-taskbar-row").width(windowWidth);
	
	$("table#desktop-base-structure-taskbar-content").height("45px;");
	$("table#desktop-base-structure-taskbar-content").width(windowWidth);
	
	$("table#desktop-base-structure-taskbar-content-row").height("45px;");
	$("table#desktop-base-structure-taskbar-content-row").width(windowWidth);
	
	$("tr#desktop-base-structure-landscape-row").height(windowHeight - 45);
	$("tr#desktop-base-structure-landscape-row").width(windowWidth);
	
	completeResizeTriggers();
}

function completeResizeTriggers() {
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	
	$("table#desktop-base-structure").height(windowHeight);
	$("table#desktop-base-structure").width(windowWidth);
	
	$("tr#desktop-base-structure-taskbar-row").height("45px");
	$("tr#desktop-base-structure-taskbar-row").width(windowWidth);
	
	$("table#desktop-base-structure-taskbar-content").height("45px;");
	$("table#desktop-base-structure-taskbar-content").width(windowWidth);
	
	$("table#desktop-base-structure-taskbar-content-row").height("45px;");
	$("table#desktop-base-structure-taskbar-content-row").width(windowWidth);
	
	$("tr#desktop-base-structure-landscape-row").height(windowHeight - 45);
	$("tr#desktop-base-structure-landscape-row").width(windowWidth);
}
