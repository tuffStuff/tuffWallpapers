var numOpenApps = 0;
$(document).ready(function(){
	alert("x");
	$("#startIconImg").bind("click", function(){
		startIcon.Events.initializeStartPopup();
	});
});

var startIcon = [];
startIcon.Events = {
	initializeStartPopup: function() {
	
		
		
		$("#startListApp1").bind("click", function () {

			

			$(".tuffWallpapersAddFolder").bind("click", function() {
				
				
				var addMenuIcon="";
				addMenuIcon += '<td class="desktop-base-structure-taskbar-content-column" id="taskbar-open-app1">';
					addMenuIcon += '<div class="appListHolder"><img id="app1Icon" class="taskbar-icon" src="../images/appbar.scrabble.t.png" /></div><div class="appListHolder"><p class= "menuText">Add Folder</p></div>';
				addMenuIcon += '</td>';
				
				$("#remove").remove();
				$("#desktop-base-structure-taskbar-content-row").append(addMenuIcon);
				popup.add.folder();		
			});
			
			$(".tuffWallpapersAddWallpaper").bind("click", function() {
				var html = '<img id="startIconImg" class="taskbar-icon" src="../images/appbar.os.windows.8.png" />';
				$("#taskbar-startmenu-icon").empty().append(html);	
				$("#startIconImg").bind("click", function(){
					startIcon.Events.initializeStartPopup();
				});	
				
				var addMenuIcon="";
				addMenuIcon += '<td class="desktop-base-structure-taskbar-content-column" id="taskbar-open-app1">';
					addMenuIcon += '<div class="appListHolder"><img id="app1Icon" class="taskbar-icon" src="../images/appbar.scrabble.t.png" /></div><div class="appListHolder"><p class= "menuText">Add Wallpaper</p></div>';
				addMenuIcon += '</td>';
				addMenuIcon += '<td id= "remove" style="width:auto;"></td>';
				
				$("#remove").remove();
				$("#desktop-base-structure-taskbar-content-row").append(addMenuIcon);	
			});
			$(".tuffWallpapersEditFolder").bind("click", function() {
				var html = '<img id="startIconImg" class="taskbar-icon" src="../images/appbar.os.windows.8.png" />';
				$("#taskbar-startmenu-icon").empty().append(html);	
				$("#startIconImg").bind("click", function(){
					startIcon.Events.initializeStartPopup();
				});	
				
				var addMenuIcon="";
				addMenuIcon += '<td class="desktop-base-structure-taskbar-content-column" id="taskbar-open-app1">';
					addMenuIcon += '<div class="appListHolder"><img id="app1Icon" class="taskbar-icon" src="../images/appbar.scrabble.t.png" /></div><div class="appListHolder"><p class= "menuText">Edit Folder</p></div>';
				addMenuIcon += '</td>';
				addMenuIcon += '<td id= "remove" style="width:auto;"></td>';
				
				$("#remove").remove();
				$("#desktop-base-structure-taskbar-content-row").append(addMenuIcon);	
			});
			$(".tuffWallpapersEditWallpaper").bind("click", function() {
				var html = '<img id="startIconImg" class="taskbar-icon" src="../images/appbar.os.windows.8.png" />';
				$("#taskbar-startmenu-icon").empty().append(html);	
				$("#startIconImg").bind("click", function(){
					startIcon.Events.initializeStartPopup();
				});	
				
				var addMenuIcon="";
				addMenuIcon += '<td class="desktop-base-structure-taskbar-content-column" id="taskbar-open-app1">';
					addMenuIcon += '<div class="appListHolder"><img id="app1Icon" class="taskbar-icon" src="../images/appbar.scrabble.t.png" /></div><div class="appListHolder"><p class= "menuText">Edit Wallpaper</p></div>';
				addMenuIcon += '</td>';
				addMenuIcon += '<td id= "remove" style="width:auto;"></td>';
				
				$("#remove").remove();
				$("#desktop-base-structure-taskbar-content-row").append(addMenuIcon);	
			});
			$(".tuffWallpapersEditUser").bind("click", function() {
				var html = '<img id="startIconImg" class="taskbar-icon" src="../images/appbar.os.windows.8.png" />';
				$("#taskbar-startmenu-icon").empty().append(html);	
				$("#startIconImg").bind("click", function(){
					startIcon.Events.initializeStartPopup();
				});	
				
				var addMenuIcon="";
				addMenuIcon += '<td class="desktop-base-structure-taskbar-content-column" id="taskbar-open-app1">';
					addMenuIcon += '<div class="appListHolder"><img id="app1Icon" class="taskbar-icon" src="../images/appbar.scrabble.t.png" /></div><div class="appListHolder"><p class= "menuText">Edit User</p></div>';
				addMenuIcon += '</td>';
				addMenuIcon += '<td id= "remove" style="width:auto;"></td>';
				
				$("#remove").remove();
				$("#desktop-base-structure-taskbar-content-row").append(addMenuIcon);	
			});
			$(".tuffWallpapersDeleteUser").bind("click", function() {
				var html = '<img id="startIconImg" class="taskbar-icon" src="../images/appbar.os.windows.8.png" />';
				$("#taskbar-startmenu-icon").empty().append(html);	
				$("#startIconImg").bind("click", function(){
					startIcon.Events.initializeStartPopup();
				});	
				
				var addMenuIcon="";
				addMenuIcon += '<td class="desktop-base-structure-taskbar-content-column" id="taskbar-open-app1">';
					addMenuIcon += '<div class="appListHolder"><img id="app1Icon" class="taskbar-icon" src="../images/appbar.scrabble.t.png" /></div><div class="appListHolder"><p class= "menuText">Delete User</p></div>';
				addMenuIcon += '</td>';
				addMenuIcon += '<td id= "remove" style="width:auto;"></td>';
				
				$("#remove").remove();
				$("#desktop-base-structure-taskbar-content-row").append(addMenuIcon);	
			});
			$(".tuffWallpapersTaskList").bind("click", function() {
				var html = '<img id="startIconImg" class="taskbar-icon" src="../images/appbar.os.windows.8.png" />';
				$("#taskbar-startmenu-icon").empty().append(html);	
				$("#startIconImg").bind("click", function(){
					startIcon.Events.initializeStartPopup();
				});	
				
				var addMenuIcon="";
				addMenuIcon += '<td class="desktop-base-structure-taskbar-content-column" id="taskbar-open-app1">';
					addMenuIcon += '<div class="appListHolder"><img id="app1Icon" class="taskbar-icon" src="../images/appbar.scrabble.t.png" /></div><div class="appListHolder"><p class= "menuText">Task List</p></div>';
				addMenuIcon += '</td>';
				addMenuIcon += '<td id= "remove" style="width:auto;"></td>';
				
				$("#remove").remove();
				$("#desktop-base-structure-taskbar-content-row").append(addMenuIcon);	
			});
			$(".tuffWallpapersReports").bind("click", function() {
				var html = '<img id="startIconImg" class="taskbar-icon" src="../images/appbar.os.windows.8.png" />';
				$("#taskbar-startmenu-icon").empty().append(html);	
				$("#startIconImg").bind("click", function(){
					startIcon.Events.initializeStartPopup();
				});	
				
				var addMenuIcon="";
				addMenuIcon += '<td class="desktop-base-structure-taskbar-content-column" id="taskbar-open-app1">';
					addMenuIcon += '<div class="appListHolder"><img id="app1Icon" class="taskbar-icon" src="../images/appbar.scrabble.t.png" /></div><div class="appListHolder"><p class= "menuText">View Reports</p></div>';
				addMenuIcon += '</td>';
				addMenuIcon += '<td id= "remove" style="width:auto;"></td>';
				
				$("#remove").remove();
				$("#desktop-base-structure-taskbar-content-row").append(addMenuIcon);	
			});
			$(".tuffWallpapersSettings").bind("click", function() {
				var html = '<img id="startIconImg" class="taskbar-icon" src="../images/appbar.os.windows.8.png" />';
				$("#taskbar-startmenu-icon").empty().append(html);	
				$("#startIconImg").bind("click", function(){
					startIcon.Events.initializeStartPopup();
				});	
				
				var addMenuIcon="";
				addMenuIcon += '<td class="desktop-base-structure-taskbar-content-column" id="taskbar-open-app1">';
					addMenuIcon += '<div class="appListHolder"><img id="app1Icon" class="taskbar-icon" src="../images/appbar.scrabble.t.png" /></div><div class="appListHolder"><p class= "menuText">Settings</p></div>';
				addMenuIcon += '</td>';
				addMenuIcon += '<td id= "remove" style="width:auto;"></td>';
				
				$("#remove").remove();
				$("#desktop-base-structure-taskbar-content-row").append(addMenuIcon);	
			});
		});
		
		$(".QuotesForHopePanel").bind("click", function () {
			if(!($(this).children().last().children().hasClass("selected"))){
				$(".selected").removeClass("selected");
				$(this).children().last().children().addClass("selected");
			}
			else {
				$(".selected").removeClass("selected");
			}
			
			var html = "";
			
			html += "<table id='startMenuSubMenu'>";
				html += "<tr><td><div class='tuffWallpapersTaskList appPanel'>";
						html+= "<div class='appListHolder'><img class= 'subAppIcon' src='../images/appbar.list.select.png' /></div><div class='appListHolder'><p class='subAppName'>Task List</p></div>";
					html += "</div></td></tr>";
					html += "<tr><td><div class='tuffWallpapersReports appPanel'>";
						html+= "<div class='appListHolder'><img class= 'subAppIcon' src='../images/appbar.newspaper.png' /></div><div class='appListHolder'><p class='subAppName'>View Reports</p></div>";
					html += "</div></td></tr>";
					html += "<tr><td><div class='tuffWallpapersSettings appPanel'>";
						html+= "<div class='appListHolder'><img class= 'subAppIcon' src='../images/appbar.settings.png' /></div><div class='appListHolder'><p class='subAppName'>QFH Settings</p></div>";
					html += "</div></td></tr>";
			html += "</table>";
			$("#startMenuContentItemRight").empty().append(html);
			$(".subAppName").bind("click", function() {
				var html = '<img id="startIconImg" class="taskbar-icon" src="../images/appbar.os.windows.8.png" />';
				$("#taskbar-startmenu-icon").empty().append(html);	
				$("#startIconImg").bind("click", function(){
					startIcon.Events.initializeStartPopup();
				});	
			});
		});
		$(".TuffOSPanel").bind("click", function () {
			if(!($(this).children().last().children().hasClass("selected"))){
				$(".selected").removeClass("selected");
				$(this).children().last().children().addClass("selected");
			}
			else {
				$(".selected").removeClass("selected");
			}
			var html = "";
			
			html += "<table id='startMenuSubMenu'>";
				html += "<tr><td><div class='tuffWallpapersTaskList appPanel'>";
						html+= "<div class='appListHolder'><img class= 'subAppIcon' src='../images/appbar.list.select.png' /></div><div class='appListHolder'><p class='subAppName'>Task List</p></div>";
					html += "</div></td></tr>";
					html += "<tr><td><div class='tuffWallpapersReports appPanel'>";
						html+= "<div class='appListHolder'><img class= 'subAppIcon' src='../images/appbar.newspaper.png' /></div><div class='appListHolder'><p class='subAppName'>View Reports</p></div>";
					html += "</div></td></tr>";
					html += "<tr><td><div class='tuffWallpapersSettings appPanel'>";
						html+= "<div class='appListHolder'><img class= 'subAppIcon' src='../images/appbar.settings.png' /></div><div class='appListHolder'><p class='subAppName'>TuffOS Settings</p></div>";
					html += "</div></td></tr>";
			html += "</table>";
			$("#startMenuContentItemRight").empty().append(html);
			$(".subAppName").bind("click", function() {
				var html = '<img id="startIconImg" class="taskbar-icon" src="../images/appbar.os.windows.8.png" />';
				$("#taskbar-startmenu-icon").empty().append(html);	
				$("#startIconImg").bind("click", function(){
					startIcon.Events.initializeStartPopup();
				});	
			});
		});
		$(".KuyaKuyaPanel").bind("click", function () {
			if(!($(this).children().last().children().hasClass("selected"))){
				$(".selected").removeClass("selected");
				$(this).children().last().children().addClass("selected");
			}
			else {
				$(".selected").removeClass("selected");
			}
			var html = "";
			
			html += "<table id='startMenuSubMenu'>";
				html += "<tr><td><div class='tuffWallpapersSettings appPanel'>";
						html+= "<div class='appListHolder'><img class= 'subAppIcon' src='../images/appbar.list.reorder.png' /></div><div class='appListHolder'><p class='subAppName'>Error: - No Apps -</p></div>";
					html += "</div></td></tr>";
			html += "</table>";
			$("#startMenuContentItemRight").empty().append(html);
		});
		$(".MusicPlayerPanel").bind("click", function () {
			if(!($(this).children().last().children().hasClass("selected"))){
				$(".selected").removeClass("selected");
				$(this).children().last().children().addClass("selected");
			}
			else {
				$(".selected").removeClass("selected");
			}
			var html = "";
			
			html += "<table id='startMenuSubMenu'>";
				html += "<tr><td><div class='tuffWallpapersSettings appPanel'>";
						html+= "<div class='appListHolder'><img class= 'subAppIcon' src='../images/appbar.list.reorder.png' /></div><div class='appListHolder'><p class='subAppName'>Error: - No Apps -</p></div>";
					html += "</div></td></tr>";
			html += "</table>";
			$("#startMenuContentItemRight").empty().append(html);
		});
		$(".DocumentStoragePanel").bind("click", function () {
			if(!($(this).children().last().children().hasClass("selected"))){
				$(".selected").removeClass("selected");
				$(this).children().last().children().addClass("selected");
			}
			else {
				$(".selected").removeClass("selected");
			}
			var html = "";
			
			html += "<table id='startMenuSubMenu'>";
				html += "<tr><td><div class='tuffWallpapersSettings appPanel'>";
						html+= "<div class='appListHolder'><img class= 'subAppIcon' src='../images/appbar.list.reorder.png' /></div><div class='appListHolder'><p class='subAppName'>Error: - No Apps -</p></div>";
					html += "</div></td></tr>";
			html += "</table>";
			$("#startMenuContentItemRight").empty().append(html);
		});
		$(".PersonalSchedulerPanel").bind("click", function () {
			if(!($(this).children().last().children().hasClass("selected"))){
				$(".selected").removeClass("selected");
				$(this).children().last().children().addClass("selected");
			}
			else {
				$(".selected").removeClass("selected");
			}
			var html = "";
			
			html += "<table id='startMenuSubMenu'>";
				html += "<tr><td><div class='tuffWallpapersSettings appPanel'>";
						html+= "<div class='appListHolder'><img class= 'subAppIcon' src='../images/appbar.list.reorder.png' /></div><div class='appListHolder'><p class='subAppName'>Error: - No Apps -</p></div>";
					html += "</div></td></tr>";
			html += "</table>";
			$("#startMenuContentItemRight").empty().append(html);
		});
		$(".AllApplicationsPanel").bind("click", function () {
			if(!($(this).children().last().children().hasClass("selected"))){
				$(".selected").removeClass("selected");
				$(this).children().last().children().addClass("selected");
			}
			else {
				$(".selected").removeClass("selected");
			}
			var html = "";
			
			html += "<table id='startMenuSubMenu'>";
				html += "<tr><td><div class='tuffWallpapersTaskList appPanel'>";
						html+= "<div class='appListHolder'><img class= 'subAppIcon' src='../images/appbar.list.select.png' /></div><div class='appListHolder'><p class='subAppName'>Task List</p></div>";
					html += "</div></td></tr>";
					html += "<tr><td><div class='tuffWallpapersReports appPanel'>";
						html+= "<div class='appListHolder'><img class= 'subAppIcon' src='../images/appbar.newspaper.png' /></div><div class='appListHolder'><p class='subAppName'>Reports</p></div>";
					html += "</div></td></tr>";
					html += "<tr><td><div class='tuffWallpapersSettings appPanel'>";
						html+= "<div class='appListHolder'><img class= 'subAppIcon' src='../images/appbar.settings.png' /></div><div class='appListHolder'><p class='subAppName'>Settings</p></div>";
					html += "</div></td></tr>";
			html += "</table>";
			$("#startMenuContentItemRight").empty().append(html);
			$(".subAppName").bind("click", function() {
				var html = '<img id="startIconImg" class="taskbar-icon" src="../images/appbar.os.windows.8.png" />';
				$("#taskbar-startmenu-icon").empty().append(html);	
				$("#startIconImg").bind("click", function(){
					startIcon.Events.initializeStartPopup();
				});	
			});
		});
		
		$("#startIconImg").bind("click", function(){
			var html = '<img id="startIconImg" class="taskbar-icon" src="../images/appbar.os.windows.8.png" />';
			$("#taskbar-startmenu-icon").empty().append(html);
			
			$("#startIconImg").bind("click", function(){
				startIcon.Events.initializeStartPopup();
			});		
		});
	}
};

