var url = 'https://raw.githubusercontent.com/mohanmohadikar/json-docs/master/about_us_content.json';
$(function() {

    $.getJSON(url, function(data) {
        $.each(data.CENTRAL_ADVISORY, function(i, f) {
            console.log(f.name)
        var element = "<div class='col-lg-5 advisory-list-card'>" +"<img src='"+f.imgLink+"' class='person-img'/>"+ "<p class='adv-name'>" + f.name + "</p>" +
            "<p class='adv-position'>" + f.position + "</p>" + "<p class='statement'>" + f.statement + "</p>" + "<a target='_blank' href='"+f.link+"'>" + "<p class='adv-name'><i class='fa fa-linkedin person-linkedin'></i></p>" + "</a>" + "</div>" 
            $(element).appendTo(".advisory-list");
        });

    });

    $.getJSON(url, function(data) {
        $.each(data.PROCESS_DEVELOPMENT, function(i, f) {
            console.log(f.name)
        var element = "<div class='col-lg-3 process-development-list-card'>" +"<img src='"+f.imgLink+"' class='person-img'/>"+ "<p class='person-name'>" + f.name + "</p>" +
            "<p class='person-position'>" + f.position + "</p>" + "<p class='statement'>" + f.statement + "</p>" + "<a target='_blank' href='"+f.link+"'>" + "<p class='adv-name'><i class='fa fa-linkedin person-linkedin'></i></p>" + "</a>" + "</div>" 
            $(element).appendTo(".process-development-list");
        });

    });

    $.getJSON(url, function(data) {
        $.each(data.TEAM_MEMBERS, function(i, f) {
            console.log(f.name)
        var element = "<div class='col-lg-3 team-member-list-card'>" +"<img src='"+f.imgLink+"' class='person-img'/>"+ "<p class='person-name'>" + f.name + "</p>" +
            "<p class='person-position'>" + f.position + "</p>" + "<p class='statement'>" + f.statement + "</p>" + "<a target='_blank' href='"+f.link+"'>" + "<p class='adv-name'><i class='fa fa-linkedin person-linkedin'></i></p>" + "</a>" + "</div>" 
            $(element).appendTo(".team-member-list");
        });

    });

    $.getJSON(url, function(data) {
        $.each(data.LEARN_MORE, function(i, f) {
        var element = "<div class='col-lg-3 learn-more-list-card "+f.img_class+"'>" + "<p class='learn-more-text'>" + f.text + "</p>" +
        "<a target='_blank' class='learn-more-link' href='"+ f.visit_link +"'><i class='fa fa-link'></i> Open Link</a>"+"</div>" 
            $(element).appendTo(".learn-more-list");
        });

    });

});