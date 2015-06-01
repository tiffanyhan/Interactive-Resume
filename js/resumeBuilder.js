// add bio information
var bio = {
	"name" : "Tiffany Han",
	"role" : "Web Designer | Front-End Developer",
	"contacts": {
		"email" : "hantiffany@gmail.com",
		"cell" : "six two six two one five seven nine four one",
		"github" : "tiffanyhan",
		"location" : "Los Angeles, CA",
	},
	"pictureURL" : "images/portfolio-pic.jpg",
	"welcomeMessage" : "Welcome to my page!",
	"skills" : ["HTML", "CSS", "Javascript", "teaching", "writing"]
}

// add work information
var work = {
	"jobs" : [
		{
			"position" : "Tutor/Mentor",
			"employer" : "PCC PASS program",
			"dates" : "January 2011- present",
			"city" : "Pasadena, CA",
			"description" : "Provide academic tutoring for low-income, minority, and at-risk students; refer students to appropriate services and programs when relevant; assist counselors in presenting weekly educational workshops for students on various topics, such as study skills and college applications"
		},
		{
			"position" : "Writing Consultant",
			"employer" : "PCC Writing Center",
			"dates" : "January 2012- August 2012",
			"city" : "Pasadena, CA",
			"description" : "Assisted students in improving academic achievement by meeting with them on a regular basis to clarify learning problems and work on study skills; worked with students to develop a tutoring plan that fit each student’s individual needs; assessed students’ progress throughout tutoring sessions"
		}
	]
}

// add projects information
var projects = {
	"myProjects" : [
		{
			"title" : "Toplist",
			"dates" : "May 2015",
			"description" : "I created a fictional 'My Favorite App' page.  This was my first time working from a design mock-up.  It was also my first time working in more than one column.  I was able to get the page looking pretty close to the original and was quite happy with the results.",
			"images" : "images/toplistIMG.png"
		},
		{
			"title" : "Framework",
			"dates" : "May 2015",
			"description" : "Working from a design mock, I created my own CSS grid framework using Flexbox in order to create this rough draft of a portfolio page.  This was my first time using Flexbox and so far it's my favorite CSS framework.  I really liked how the design turned out and ended up using this project as a template for my 'real' portfolio page.",
			"images" : "images/frameworkIMG.png"
		},
		{
			"title" : "Bootstrap",
			"dates" : "May 2015",
			"description" : "This project was similar to the 'Framework' one I had previously done.  However, this time the design was slightly different and I used Bootstrap instead of my own framework based on Flexbox.  I didn't like working with Bootstrap as much as Flexbox, but this was only my first time using it so I could still change my mind in the future.",
			"images" : "images/bootstrapIMG.png"
		},
		{
			"title" : "The Brighton Times",
			"dates" : "May 2015",
			"description" : "In this project, I designed and coded a fully responsive home page for the fictional newspaper 'The Brighton Times'.  I learned a lot about media queries, mobile-first design, and responsive web design techniques in general.",
			"images" : "images/timesIMG.png"
		}
	]
}

// add education information
var education = {
	"schools" : [
		{
			"school" : "UCLA",
			"city" : "Los Angeles, CA",
			"degree": "BA",
			"major" : "Philosophy",
			"graduation" : "in progress"
		},
		{
			"school" : "Pasadena City College",
			"city" : "Pasadena, CA",
			"degree": "AA",
			"major" : "Music",
			"graduation" : "2015"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Responsive Web Design Fundamentals",
			"school" : "Udacity",
			"dates" : "2015",
			"URL" : "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
		},
		{
			"title" : "How to Use Git and Github",
			"school" : "Udacity",
			"dates" : "2015",
			"URL" : "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
		},
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"dates" : "2015",
			"URL" : "https://www.udacity.com/course/javascript-basics--ud804"
		}
	]
}

/* ---------------- start BIO section -------------------- */

bio.displayBio = function() {
	// add name and role to top of header
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	// add contacts section
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.cell);
	$("#topContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	// add bio pic
	var formattedbioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
	$("#header").append(formattedbioPic);

	// add welcome message
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);

	// add skills section
	if (bio.skills.length > 0) {

		$("#header").append(HTMLskillsStart);

		for (skill in bio.skills) {

			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}

// invoke funciton
bio.displayBio();

/* ---------------- start WORK section -------------------- */

work.displayWork = function() {
	for (each in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[each].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[each].position);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[each].dates);
		$(".work-entry:last").append(formattedWorkDates);

		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[each].city);
		$(".work-entry:last").append(formattedWorkLocation);

		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[each].description);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

// invoke function
work.displayWork();

/* ---------------- start PROJECTS section -------------------- */

projects.displayProjects = function () {
	for (project in projects.myProjects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.myProjects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.myProjects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.myProjects[project].description);
		$(".project-entry:last").append(formattedDescription);

		var formattedImage = HTMLprojectImage.replace("%data%", projects.myProjects[project].images);
		$(".project-entry:last").append(formattedImage);
	}
}

// invoke function
projects.displayProjects();

/* ---------------- start EDUCATION section -------------------- */

education.displayEducation = function() {
	// start brick and mortar schools section
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].school);
		$(".education-entry:last").append(formattedName);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].graduation);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}

	// start online courses section
	$("#education").append(HTMLonlineClasses);

	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedOnlineTitle);

		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedOnlineSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].URL);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}

// invoke funciton
education.displayEducation();

/* ------------------- add other things to footer ------------------- */

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.cell);
$("#footerContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#footerContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#footerContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts").append(formattedLocation);


$("#mapDiv").append(googleMap);

$("#main").append(internationalizeButton);

$("button").click(function inName(oldName) {
	oldName = oldName.trim().split(" ");
	console.log(oldName);
	oldName[1] = oldName[1].toUpperCase();
	oldName[0] = oldName[0].slice(0,1).toUpperCase() + oldName[0].slice(1).toLowerCase;

	return oldName[0] + " " + oldName[1];
});















































