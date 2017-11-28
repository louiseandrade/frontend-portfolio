/*
This is empty on purpose! Your code to build the resume will go here.
 */


/*
    Objects
 */

var bio = {
    "name": "Louise Cordier",
    "role": "Programmer",
    "contacts": [{
        "mobile": "+55718285838",
        "email": "mandeumemailparacordier@gmail.com",
        "github": "louisecordier",
        "location": "São Paulo"
    }],
    "welcomeMessage": "Hello, it's me.",
    "skills": ['html', 'javascript', 'css', 'photoshop'],
    "biopic": 'images/fry.jpg'
};

var education = {
    "schools": [{
        "name": "",
        "location": "",
        "degree": "",
        "majors": [""],
        "dates": "9999-22-22"
    }],
    "onlineCourses": [{
        "title": "",
        "school": "",
        "dates": "9999-99-99",
        "url": ""
    }]
};

var jobs = [{
    "employer": "",
    "title": "",
    "location": "",
    "dates": 'in progress|9999-99-99',
    "description": ""
}];

var projects = [
    {
        "title": "",
        "dates": "9999-99-99",
        "description": "",
        "images": [""]
    }];

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
            //this.contacts[i][prop]
            var formattedContactGeneric = HTMLcontactGeneric.replace("%data%", this.contacts[i][prop]).replace("%contact%", prop);
            $("#topContacts").append(formattedContactGeneric);
        }
    }

    var formattedBiopic = HTMLbioPic.replace("%data%", this.biopic);
    $("#header").append(formattedBiopic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    $("#header").append(HTMLskillsStart);

    for(i = 0; i<this.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", this.skills[i]);
        $("#skills").append(formattedSkill);

    }





};

bio.display();