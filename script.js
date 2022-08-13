// Used Moment JS for functions for live time and to display on header.  
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss"));

var updateTime = setInterval(function () {
    var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss")
    $("#currentDay").text(currentTime)
}, 1000);

// Used the even listener with JQuery for save button function. 
$(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var task = $(this).siblings(".description").val();
    localStorage.setItem(time, task);
});

// Used to retrive data that is being stored for each hour. 
$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));

// Used  Moment JS for function, loop and styling. 
function compareHour() {
    var hour = moment().hour();
    
    $(".input-group-text hour").each(function () {
        var block = $(this).attr("id");
       
        // Add/remove past/present/future classes based on current hour with if/else statement. 
        if (block < hour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        } else if (block == hour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
};

// call on the function
compareHour();

