var numOpenApps = 0;
$(document).ready(function(){
		$("#startIconImg").bind("click", function(){
			tuffOS.Menu.initializeStartPopup();
	});
});

var tuffOS = [];
tuffOS.Menu = {
	initializeStartPopup: function (){
		var menuObject = [
			{appIcon: "../images/appbar.scrabble.t.png", appName: "TuffWallpapers", appTable: "tuffWallpapersApplication"},
			{appIcon: "../images/appbar.scrabble.q.png", appName: "Quotes For Hope", appTable: "quotesForHopeApplication"},
			{appIcon: "../images/appbar.scrabble.t.png", appName: "TuffOS Cloud", appTable: "tuffOSApplication"},
			{appIcon: "../images/appbar.scrabble.k.png", appName: "KuyaKuya Store", appTable: "kuyaKuyaApplication"},
			{appIcon: "../images/appbar.scrabble.m.png", appName: "Music Player", appTable: "musicPlayerApplication"},
			{appIcon: "../images/appbar.scrabble.d.png", appName: "DocumentStorage", appTable: "documentStorageApplication"},
			{appIcon: "../images/appbar.scrabble.p.png", appName: "Personal Scheduler", appTable: "personalSchedulerApplication"},
			{appIcon: "../images/appbar.scrabble.a.png", appName: "All Application", appTable: "allApplication"},
		];
		
		
		var startMenuHTML = "";
		startMenuHTML += "<div id='startMenuPopup'>";
			startMenuHTML += "<table id='startMenuContent'>";
				startMenuHTML += "<tr class='startMenuContentBufferRow' id='startMenuContentBufferTop'>";
					startMenuHTML += "<td colspan = '2' class='startMenuContentBufferColumn'>";
						startMenuHTML += "<div id='userName'>Charles Tousignant</div>";
						startMenuHTML += "<div id='accountType'>Platinum Account</div>";
					startMenuHTML += "</td>";
				startMenuHTML += "</tr>";
				startMenuHTML += "<tr id='startMenuContentSection'>";
					startMenuHTML += "<td id='startMenuContentItemLeft'>";
						startMenuHTML += "<table>";
							for(c =0; c < 8; c++) {
								startMenuHTML += "<tr><td><div id = 'startListApp" + c +"' class='appPanel' category-table ='" + menuObject[c].appTable + "'>";
								startMenuHTML += "<div class='appListHolder'><img class='appIcon' src='" + menuObject[c].appIcon + "' /></div><div class='appListHolder'><p class='appName'>" + menuObject[c].appName + "</p></div>";
								startMenuHTML += "</div></td></tr>";
							}
						startMenuHTML += "</table>";	
					startMenuHTML += "</td>";
					startMenuHTML += "<td id='startMenuContentItemRight'>";
					startMenuHTML += "</td>";
				startMenuHTML += "</tr>";
				startMenuHTML += "<tr class='startMenuContentBufferRow' id='startMenuContentBufferBottom'>";
					startMenuHTML += "<td colspan = '2' class='startMenuContentBufferColumn'>";
					startMenuHTML += "</td>";
				startMenuHTML += "</tr>";
			startMenuHTML += "</table>";
		startMenuHTML += "</div>";
		
		$("#taskbar-startmenu-icon").append(startMenuHTML);
		
		tuffOS.Menu.bindStartMenuList();
		
		$("#startIconImg").bind("click", function(){
			var html = '<img id="startIconImg" class="taskbar-icon" src="../images/appbar.os.windows.8.png" />';
			$("#taskbar-startmenu-icon").empty().append(html);
			$("#startIconImg").bind("click", function(){
				tuffOS.Menu.initializeStartPopup();
			});		
		});
		
	},
	
	bindStartMenuList: function() {
		for(c = 0; c < 8; c++) {
			$("#startListApp" + c).bind("click", function(){
				var sendElement = this;
				var appObject = [
					{appIcon: "../images/appbar.folder.png", parentIcon: "../images/appbar.scrabble.t.png", appName: "Add Folder", appPath: "../index/addFolder.html"},
					{appIcon: "../images/appbar.page.png", parentIcon: "../images/appbar.scrabble.t.png",	appName: "Add Wallpaper", appPath: "../index/addFolder.html"},
					{appIcon: "../images/appbar.folder.png",  parentIcon: "../images/appbar.scrabble.t.png", appName: "Edit Folder", appPath: "../index/editFolder.html"},
					{appIcon: "../images/appbar.page.png",  parentIcon: "../images/appbar.scrabble.t.png", appName: "Edit Wallpaper", appPath: "../index/editFolder.html"},
					{appIcon: "../images/appbar.user.png", parentIcon: "../images/appbar.scrabble.t.png", appName: "Edit User", appPath: "../index/editUser.html"},
					{appIcon: "../images/appbar.user.png",  parentIcon: "../images/appbar.scrabble.t.png", appName: "Delete User", appPath: "../index/deleteUser.html"},
					{appIcon: "../images/appbar.list.select.png", parentIcon: "../images/appbar.scrabble.t.png", appName: "Task Lists", appPath: "../index/taskList.html"},
					{appIcon: "../images/appbar.newspaper.png", parentIcon: "../images/appbar.scrabble.t.png", appName: "View Reports", appPath: "../index/viewReports.html"},
					{appIcon: "../images/appbar.settings.png", parentIcon: "../images/appbar.scrabble.t.png", appName: "TuffOS Settings", appPath: "../index/tuffOSSettings.html"},
				];	
				
				tuffOS.Menu.appSubMenuWrite(sendElement, appObject);
			});
		}
	},
	
	appSubMenuWrite: function(sentElement, appObject) {
		if(!($(sentElement).children().last().children().hasClass("selected"))){
			$(".selected").removeClass("selected");
			$(sentElement).children().last().children().addClass("selected");
			
			var html="";
			html += "<table id='startMenuSubMenu'>";
				for(var c = 0; c < appObject.length; c++){
					if (c < 9) {
						html += "<tr><td><div id ='subApp" + c + "' class='appPanel' data-column-path ='" + appObject[c].appPath + "' data-column-parent ='" + appObject[c].parentIcon + "' data-column-name='" + appObject[c].appName + "'>";
							html+= "<div class='appListHolder'><img class= 'subAppIcon' src='" + appObject[c].appIcon + "' /></div><div class='appListHolder'><p class='subAppName'>" + appObject[c].appName + "</p></div>";
						html += "</div></td></tr>";
					}
				}
			html += "</html>";		
			$("#startMenuContentItemRight").empty().append(html);
			
			for(var h = 0; h < appObject.length; h++){
				$("#subApp" + h).bind("click", function(){
					var parentIcon = $(this).attr("data-column-parent");
					var appName = $(this).attr("data-column-name");
					var html = '<img id="startIconImg" class="taskbar-icon" src="../images/appbar.os.windows.8.png" />';
					$("#taskbar-startmenu-icon").empty().append(html);	
					
					$("#startIconImg").bind("click", function(){
						tuffOS.Menu.initializeStartPopup();
					});	
					
					if(numOpenApps < 5){
						var addMenuIcon="";
						addMenuIcon += '<div class="appListHolder"><img id="app1Icon" class="taskbar-icon" src="' + parentIcon + '" /></div><div class="appListHolder"><p class= "menuText">' + appName + '</p></div>';
						$("#taskbar-app"+numOpenApps+"-icon").append(addMenuIcon);
						popup.iframe.load($(this).attr("data-column-path"), numOpenApps);
						numOpenApps = numOpenApps + 1;
					}
					else{
						alert("There are to many apps open. Can not open more windows.");
					}
					
				});
			}
		}
		else {
			$(".selected").removeClass("selected");
		}
	}
};
