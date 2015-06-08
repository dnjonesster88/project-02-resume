var formattedName = HTMLheaderName.replace("%data%", "Diane Noelle Jones");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Designer & Developer");
var formattedEmail = HTMLemail.replace("%data%", "diane@dianej.com");
var formattedMobile = HTMLmobile.replace("%data%","831-251-1291");
var formattedGitHub = HTMLgithub.replace("%data%","dnjonesster88");
var formattedTwitter = HTMLtwitter.replace("%data%","@dianejart");
var formattedImage = HTMLbioPic.replace("%data%", "images/deedle_square.jpg");


$("#header").append(formattedRole);
$("#header").prepend(formattedName);
$("ul#topContacts").append('<li>' + formattedEmail + '</li>');
$("ul#topContacts").append('<li>' + formattedMobile + '</li>');
$("ul#topContacts").append('<li>' + formattedGitHub + '</li>');
$("ul#topContacts").append('<li>' + formattedTwitter + '</li>');
$("#header").append(formattedImage);
$("#mapDiv").append(googleMap);



var bio = {
	"name" : "Diane Noelle Jones",
	"role" : "Web designer & developer",
	"contacts" : 
	{
		"mobile" : "831-251-1291",
		"email" : "diane@dianej.com",
		"github" : "dnjonesster88",
		"location" : "Aptos, CA"
	},
	"skills" : ["HTML5", "JavaScript", "CSS3", "Design", "Project Management"],
	"bioPic" : "images/deedle_square.jpg"
	
}


var education = {
	"schools" : [
	{
		"name": "Udacity",
		"city": "Online Nanodegree Program",
		"degree": "Front-end Web Developer Degree",
		"major": "Computer Science",
		"url": "http://udacity.com"
	},
	{
		"name": "Cal Poly, SLO",
		"city": "San Luis Obispo",
		"degree": "Bachelor of Architecture",
		"major": "Architecture",
		"url": "http://udacity.com"
	}
  ]
}




var work = {
	"jobs" : [
	{
		"company": "Optronic Technologies",
		"title": "Lead Web Developer &amp; Content Manager",
		"location": "Watsonville, CA",
		"dates": "May 2014 - current",
		"url": "http://telescope.com",
		"description" : "Developed web applications, user interfaces, websites, and animations using JavaScript, JQuery, HTML5, CSS3. Created standards-based, cross-browser compliant, responsive, high-impact web pages/user interfaces using a variety of web development tools. Using content management system (Site Manager), implemented targeted experiences and promotions. Managed and prioritized workflow and task assignment for Internet Marketing Operations team. Trained and supervised work of new hires and temporary workers."
	},
	{
		"company": "Advanced Onion",
		"title": "Mobile Web Developer",
		"location": "Monterey, CA",
		"dates": "Julu 2012 - July 2013",
		"url": "http://advancedonion.com",
		"description" : "Designed and developed a mobile application version of an existing online Naval Postgraduate School (NPS) course, EO3404 Applied Digital Signal Processing, for use on the iPad and desktop/laptop computers. This app was developed using HTML5, CSS3, JavaScript, and JQuery Mobile and is deployed to students as both a web app and as a stand-alone hybrid application for installation on mobile devices. This mobile version allows students to conveniently access their course textbook, video lectures, note-taking, and social networking all in a single touch-enabled interface. Particularly unique features are instructor led video quizzes, utilization of the device camera to include 'outside' material such as handwritten notes and screenshots from other computers, and full integration with the Sakai LMS forum to allow student and teacher interactions in a social networking framework. Designed as a reusable template for transfer to other NPS courses. Worked as a JavaScript developer for Northrop Grumman on the CEREBRO project at the DMDC in Seaside, CA. Wrote form validation scripts and provided test cases."
	},
	{
		"company": "General Dynamics Information Technology (GDIT)",
		"title": "Senior Web Designer &amp; Media Developer",
		"location": "Monterey, CA",
		"dates": "October 2006 - March 2012",
		"url": "http://gdit.com",
		"description" : "Worked with Naval Postgraduate School's (NPS) faculty clients, executive leadership, instructional designers, and programmers to create educational and marketing media in support of the NPS mission. Creation and testing of dynamic educational websites using standards-compliant xhtml, html5, css3, JavaScript, JQuery, 508 compliance; Mobile/iPhone application development; 3D modeling, visualizations, animations, graphics for web-based games and simulations; project management of e-Learning websites and LMS. Skin design and implementation. Production of video for the web, knowledge of best-practices for delivering web-based video, including video browser-compliant file types, codecs, bitrates & mobile applications. UI design. Developed tools, processes and tutorials for internal use by media development team."
	}
  ]
}



var projects = {
	"projects" : [
	{
		"title": "Sample Project 1",
		"client": "client name",
		"dates": "January 2015",
		"images": "http://placehold.it/350x150",
		"description" : "some text here"
	},
	{
		"title": "Sample Project 2",
		"client": "client name",
		"dates": "January 2015",
		"images": "http://placehold.it/350x150",
		"description" : "some text here"
	}
  ]
}


projects.display = function() {
	
	for(project in projects.projects) {
	$("#projects").append(HTMLprojectStart);
	
	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);
	
	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);
	
	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);
	
	if(projects.projects[project].images.length > 0) {
		
		for(image in projects.projects) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[image].images);
	     $(".project-entry:last").append(formattedImage);
	
		}
		
	}
	
}
}

if (bio.skills.length > 0) {
	
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
	
}

function displayWork() {

for(job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].company);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	
	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	
	var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);
	var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedWorkDescription);
	
	
	
}

} //close work function

displayWork(); //call the function
projects.display();

//create inName function:

function inName(name) {
	
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0]/slice(0,1).toUpperCase;
	name[0].slice(1).toLowerCase();
	
	return name[0] +" "+name[1];
	
	
}



