/*
This is empty on purpose! Your code to build the resume will go here.
*/
var work = {
	"jobs":[
	{
		"employer": "Rockwell Collins",
		"title": "Technical Intern",
		"location": "Cedar Rapids",
		"dates": "Jun 2014 - Aug 2014",
		"description": "Support Program LCVS by coordinating the disconitue part product line without imfluences on any customers"
	},

	{
		"employer": "Beihang University Signal Processing Lab",
		"title": "Research Assistant",
		"location": "Beijing",
		"dates": "Jun 2012 - Sep 2012",
		"description": "Built an pbject tracking system using particle filter"
	},

	{
		"employer": "Beihang University Image Processing and Pattern Recognition Lab",
		"title": "Research Assistant",
		"location": "Beijing",
		"dates": "Mar 2012 - Jun 2012",
		"description": "Worked in Visual Studio to design a car detection system"
	}
	]
};

var projects = {
	"projects": [
	{
		"title": "Android Application Development",
		"dates": "Apr 2015 - May 2015",
		"description": "1. Designed the layout of a weather android application using XML files. 2. Developed and programmed all the java code in Android Studio"
	},

	{
		"title": "Image Parsing",
		"dates": "Mar 2015 - May 2015",
		"description": "1. Designed and Implemented Recursive Neural Nework algorithm to parse an image 2. Combined with Greedy algorithm to reduce time complexity"
	},

	{
		"title": "Course Rating and Recommendation Website",
		"dates": "Oct 2014 - Dec 2014",
		"description": "1. Designed responsive font-end layouts using Html, Css and Bootstrap grid system 2. Wrote C# code to implement functions in back-end 3. Wrote most SQL query language to interative with database 4. Helped teammate debug SQL query code"
	},

	{
		"title": "Image Retrieval",
		"dates": "Feb 2014 - Apr 2014",
		"description": "1.Proposed a 3D covariance matrix model to represent image 2.Combined integral image method to reduce time complexity"
	}
	]
};

var bio = {
	"name": "Qichen Jing",
	"role": "Software Developer",
	"contacts": {
		"mobile": "(857)400-6603",
		"email": "jingqc@bu.edu",
		"github": "QichenJ",
		"website": "www.derecjing.com",
		"location": "Milpitas"
	},
	"welcomeMessage": "Hello, nice to meet you",
	"skills": [
	"Java", "Html", "Css", "Javascript", "C#", "C++", "Python", "SQL", "Matlab"
	],
	"bioPic": "images/QichenJ.jpg"
};

var education = {
	"schools": [
	{
		"name": "Boston University",
		"location": "Boston",
		"degree": "MS",
		"major": "Computer Engineer",
		"dates": "Sep 2013 - May 2015",
		"url": "www.bu.edu"
	},

	{
		"name": "Beihang University",
		"location": "Beijing",
		"degree": "BS",
		"major": "Electrical Engineer",
		"dates": "Sep 2009 - Jun 2013",
		"url": "http://www.buaa.edu.cn"
	}
	],
	"onlineCourses": [
	{
		"title": "Font-end Nano degree",
		"school": "Udacity",
		"dates": "Aug 2015 - Sep 2015",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}
	]
};
//Display header part
bio.display = function() {
	var data = "%data%";
	var formattedName = HTMLheaderName.replace(data, bio.name);
	var formattedRole = HTMLheaderRole.replace(data, bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
	$("#topContacts, #footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
	$("#topContacts, #footerContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
	$("#topContacts, #footerContacts").append(formattedGithub);
	var formattedBlog = HTMLblog.replace(data, bio.contacts.website);
	$("#topContacts, #footerContacts").append(formattedBlog);
	var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
	$("#topContacts, #footerContacts").append(formattedLocation);

	var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedImage);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcome);
	//Display skills
	if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for(skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
		}
	}
};
bio.display();

//Display education
education.display = function(){
	var data = "%data%";
	var len = education.schools.length;
	for(var i = 0;  i < len; i++) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace(data, education.schools[i].name);
		$(".education-entry:last").append(formattedName);
		var formattedDegree = HTMLschoolDegree.replace(data, education.schools[i].degree);
		$(".education-entry:last").append(formattedDegree);
		var formattedDates = HTMLschoolDates.replace(data, education.schools[i].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace(data, education.schools[i].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace(data, education.schools[i].major);
		$(".education-entry:last").append(formattedMajor);
	}
	len = education.onlineCourses.length;
	for(var i = 0; i < len; i++) {
		$("#education").append(HTMLonlineClasses);
		var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[i].title);
		$("#education h3:last").append(formattedOnlineTitle);
		var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[i].school);
		$("#education h3:last").append(formattedOnlineSchool);
		var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[i].dates);
		$("#education h3:last").append(formattedOnlineDates);
		var formattedOnlineUrl = HTMLonlineURL.replace(data, education.onlineCourses[i].url);
		$("#education h3:last").append(formattedOnlineUrl);
	}
};
education.display();
//Display work experience
work.display = function() {
	var len = work.jobs.length;
	for(var i = 0; i < len; i++) {
		var data = "%data%";
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace(data, work.jobs[i].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace(data, work.jobs[i].description);
		$(".work-entry:last").append(formattedDescription);
	}
};
work.display();
//Display projects
projects.display = function() {
	var len = projects.projects.length;
	for(var i = 0; i < len; i++) {
		var data = "%data%";
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[i].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);
		$(".project-entry:last").append(formattedDescription);
	}
};
projects.display();
//international name
function inName(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);