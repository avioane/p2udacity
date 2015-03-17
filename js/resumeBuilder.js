
//append(funThoughts);

var bio = {
	"name": "George Munteanu",
	"role": "Developer",
	"skills": ["Java", "Oracle", "HTML", "CSS", "Actionscript", "JSON", "Javascript", "T-SQL"],
	"contacts": {
		"email": "george.munt [atthe] gmail",
		"location" : "Chicago NW suburbs",
		"otherLocations" : ["Bloc A13a, Galati, Romania", "Bloc M, Micro 20, Galati, Romania", "Mundelein, IL"],
		"mobile": "000-000-1234",
		"github": "avioane",
		"blog": "http://www.teamliquid.net/blogs/ggofthejungle",
		"twitter": "avioane"
	},
	"welcomeMessage": "Hello! This is my project 2 resume for Udacity Front-End Developer Nanodegree",
	"bioPic": "images/fry.jpg",

	"displayBio":function(){
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
			
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
				$("#header").append(formattedPic);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#header").append(formattedWelcomeMsg);

		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGitHub);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedLocation);

		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart); 

			var formattedSkill;
			for (skill in bio.skills) {
				formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}		   
		}

		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGitHub);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedLocation);

	} // end display function
};

bio.displayBio();

var education = {
	"schools": [
	{
		"name": "Dominican University",
		"dates": "2006-2010",
		"degree": "Bachelor of Science",
		"city": "River Forest, IL",
		"majors": ["CS","CIS"],
		"url": "http://dom.edu"
	}],

	"onlineCourses": [
	{
		"title": "JavaScript Basics",
		"dates": "2015",
		"school": "Udacity",
		"url": "http://www.udacity.com/course/ud804"
	},
	 {
		"title": "Intro to HTML and CSS",
		"school": " Udacity",
		"dates": "2014",
		"url": "https://www.udacity.com/course/ud304"
	}
	],

	"displayEducation":function(){

		 //$('#education').append(HTMLschools);
		 for (var i = 0; i < education.schools.length; i++) {
		 	$("#education").append(HTMLschoolStart);

		        //var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);

		        var formattedName = HTMLschoolName.replace("%data%", "<a href=\"" + education.schools[i].url + "\" target=\"_blank\">" + education.schools[i].name + "</a>");
		        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].city);
		        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

		        var formattedSchoolData = formattedLocation + formattedName + formattedDegree + formattedDates  + formattedMajor;
		        $('.education-entry:last').append(formattedSchoolData);
		      //  $('.education-entry').find('a').attr("href", education.schools[i].url);
		  }

		if (education["onlineCourses"].length > 0){
			$('.education-entry:last').append(HTMLonlineClasses);
			for (var i = 0; i < education.onlineCourses.length; i++) {
				
				//var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url); //I am using education.onlineCourses[i].url directly in the line below
				//console.log(formattedOnlineURL);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", "<a href=\"" + education.onlineCourses[i].url + "\" target=\"_blank\">" + education.onlineCourses[i].title + "</a>");
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);

				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates + "");

		        var formattedOnlineData = formattedOnlineTitle + formattedOnlineSchool  + formattedOnlineDates; //+ formattedOnlineURL;
		        $('.education-entry:last').append(formattedOnlineData);
		        //$('.education-entry').find('a').attr("href", education.onlineCourses[i].url);
		    }
		}

	}

};

education.displayEducation();


var work = {
	"jobs": [
	{
		"employer": "AT&T",
		"title": "Developer",
		"location": "Hofmann Estates, IL",
		"dates": "2010 - present",
		"description": "Back end and front end developer. Worked mostly with Java, Oracle, .NET (C#, VB, ASP), T-SQL, SSIS, Unix commands."
	},
	{
		"employer": "Exelon",
		"title": "Student intern",
		"location": "Oak Brook Terrace, IL",
		"dates": "Summer of 2009",
		"description": "C#.NET, VB.NET, batch scripts"
	},
	{
		"employer": "Dominican University",
		"title": "IT Student worker",
		"location": "River Forest, IL",
		"dates": "2006 - 2010",
		"description": "IT helpdesk for community of 3,300 students, teachers, and staff"
	}
	],

	"displayWork":function() {
		$("#workExperience").append(HTMLworkStart);

		for(job in work.jobs) {
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);	

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDate);

			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);		
		}
}
};


work.displayWork();

var projects = {
	"project": [
	{
		"title": "Avioane Battleship",
		"dates": "2013-present",
		"description":  "Flash-based multiplayer game similar to Battleship, popular in Romania. Can be played at airplanes.ro. Skills used: Java, Actionscript, Adobe Flash, Adobe Flash Builder",
		"img": ["images/avi.png","images/avi2.jpg"],
		"url": ["http://airplanes.ro"]
	},
	{
		"title": "Udacity - P1 - HTML and CSS",
		"dates": "January - February 2015",
		"description":  "Create a mock website using HTML and CSS",
		"img": ["images/html.png","images/css.jpg"]
	},
	{
		"title": "Udacity - P2 - Javascript and Jquery",
		"dates": "January - February 2015",
		"description":  "Create your own resume using Javascript and Jquery",
		"img": ["images/js.jpg","images/jq.png"]
	}],

	"displayProjects":function()

	{
	$("#projects").append(HTMLprojectStart);
	for (proj in projects.project) 
	{
		if(projects.project[proj].url !== undefined)
		{	
			var formattedTitle = HTMLprojectTitle.replace("%data%", "<a href=\"" + projects.project[proj].url + "\" target=\"_blank\">" + projects.project[proj].title + "</a>");
		}
		else
		{
			var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[proj].title);
		}
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.project[proj].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[proj].description);
		$(".project-entry:last").append(formattedDescription);

		var formattedImage="";
		if (projects.project[proj].img.length > 0) {
			for (i in projects.project[proj].img) {
				formattedImage += HTMLprojectImage.replace("%data%", projects.project[proj].img[i]);
			}
		}

		$(".project-entry:last").append(formattedImage);
	}
}
};

projects.displayProjects();

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

//var name = "George Munteanu";
function inName(name){
	console.log(name);
	if (name !== undefined)
	{
		var iname=name.split(" ");
		console.log(iname);
		iname[1]=iname[1].toUpperCase();
		iname[0]=iname[0].slice(0,1).toUpperCase() + iname[0].slice(1).toLowerCase();
		return iname[0] + " " + iname[1];
	}
	else
	{
		console.log("name parameter is null");
		return "";
	}
}
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);


/*
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
*/
//var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

//$("#header").append(formattedBiopic);
//$("#header").append(formattedWelcomeMessage);

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);