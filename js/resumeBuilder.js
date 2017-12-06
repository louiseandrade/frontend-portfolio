/*
This is empty on purpose! Your code to build the resume will go here.
 */


/*
    Objects
 */

var bio = {
    "name": "Louise Cordier",
    "role": "Social media, design and future programmer",
    "contacts": [{
        "mobile": "+5571982212424",
        "email": "mandeumemailparacordier@gmail.com",
        "github": "louisecordier",
        "location": "São Paulo"
    }],
    "welcomeMessage": "Hello, it's me.",
    "skills": ['html', 'javascript', 'css', 'photoshop'],
    "biopic": 'images/louisecordier.jpg'
};

var education = {
    "schools": [{
        "name": "Feevale",
        "location": "Rio Grande do Sul - BR",
        "degree": "Ensino médio",
        "majors": [""],
        "dates": "2013-12-17"
    }],
    "onlineCourses": [{
        "title": "Udacity",
        "school": "Udacity",
        "dates": "2017-01-00",
        "url": "udacity.com"
    }]
};

var work = {
    "jobs":[{
        "employer": "Markat",
        "title": "Cofounder",
        "location": "São Paulo",
        "dates": 'in progress',
        "description": "Markat is a digital agency that works with Inbound Marketing, SEO, Social Networks and Chatbot. We want small and medium-sized companies to enter the online market in the best way with an affordable price."
    }]
};

var projects = {
    "projects": [
        {
            "title": "Mais Café",
            "dates": "2016",
            "description": "The Mais Café is a page that is intended to promote known writers, as well as independent authors.",
            "images": [""]
        }
    ]
};

/*
Inserting dynamically
 */

bio.display = function () {
    var formattedRole = HTMLheaderRole.replace("%data%", this.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", this.name);
    $("#header").prepend(formattedName);

    for (var i = 0; i < this.contacts.length; i++) {
        for (var prop in this.contacts[i]) {
            var formattedContactGeneric = HTMLcontactGeneric.replace("%data%", this.contacts[i][prop]).replace("%contact%", prop);
            $("#topContacts").append(formattedContactGeneric);
        }
    }

    for (i = 0; i < this.contacts.length; i++) {
        for (prop in this.contacts[i]) {
            formattedContactGeneric = HTMLcontactGeneric.replace("%data%", this.contacts[i][prop]).replace("%contact%", prop);
            $("#footerContacts").append(formattedContactGeneric);
        }
    }

    var formattedBiopic = HTMLbioPic.replace("%data%", this.biopic);
    $("#header").append(formattedBiopic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    $("#header").append(HTMLskillsStart);

    for (i = 0; i < this.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", this.skills[i]);
        $("#skills").append(formattedSkill);

    }
};

work.display = function () {
    $("#workExperience").append(HTMLworkStart);


    var jobs = this.jobs;
    for (var i = 0; i < jobs.length; i++) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", jobs[i].employer);

        var formattedWorkTitle = HTMLworkTitle.replace("%data%", jobs[i].title);
        $(".work-entry:last-child").append(formattedEmployer + formattedWorkTitle);

        var formattedWorkDates = HTMLworkDates.replace("%data%", jobs[i].dates);
        $(".work-entry:last-child").append(formattedWorkDates);

        var formattedWorkLocation = HTMLworkLocation.replace("%data%", jobs[i].location);
        $(".work-entry:last-child").append(formattedWorkLocation);

        var formattedWorkDescription = HTMLworkDescription.replace("%data%", jobs[i].description);
        $(".work-entry:last-child").append(formattedWorkDescription);

    }
};

projects.display = function () {
    $("#projects").append(HTMLprojectStart);


    var projects = this.projects;
    for (var i = 0; i < projects.length; i++) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects[i].title);
        $(".project-entry:last-child").append(formattedTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects[i].dates);
        $(".project-entry:last-child").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects[i].description);
        $(".project-entry:last-child").append(formattedProjectDescription);

        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects[i].image);
        $(".project-entry:last-child").append(formattedProjectImage);

    }
};

education.display = function () {
    var schools = education.schools;
    for (var i = 0; i < schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName= HTMLschoolName.replace("%data%", schools[i].name);

        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", schools[i].degree);
        $(".education-entry:last-child").append(formattedSchoolName + formattedSchoolDegree);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", schools[i].dates);
        $(".education-entry:last-child").append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", schools[i].location);
        $(".education-entry:last-child").append(formattedSchoolLocation);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", schools[i].image);
        $(".education-entry:last-child").append(formattedSchoolMajor);

    }
    var courses = education.onlineCourses;
    $("#education").append(HTMLonlineClasses);
    for (i = 0; i < courses.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", courses[i].title);

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", courses[i].school);
        $(".education-entry:last-child").append(formattedOnlineTitle + formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", courses[i].dates);
        $(".education-entry:last-child").append(formattedOnlineDates);

        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", courses[i].url);
        $(".education-entry:last-child").append(formattedOnlineUrl);

    }
};

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);