// Used Moment JS for functions for live time and to display on header.  
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss"));

var updateTime = setInterval(function () {
    var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss")
    $("#currentDay").text(currentTime)
}, 1000);

// Used the even listener with JQuery for save button function. 
$(".saveBtn").on("click", function () {
    var time = $(this).siblings(".description").attr("id");
    var task = $(this).siblings(".description").val();
    console.log(time, task); 
    localStorage.setItem(time, task);
});

// Used to retrive data that is being stored for each hour. 
console.log(localStorage.getItem("9am"));
$("#9am").val(localStorage.getItem("9am"));
$("#10am").val(localStorage.getItem("10am"));
$("#11am").val(localStorage.getItem("11am"));
$("#12pm").val(localStorage.getItem("12pm"));
$("#1pm").val(localStorage.getItem("1pm"));
$("#2pm").val(localStorage.getItem("2pm"));
$("#3pm").val(localStorage.getItem("3pm"));
$("#4pm").val(localStorage.getItem("4pm"));
$("#5pm").val(localStorage.getItem("5pm"));

// Used  Moment JS for function, loop and styling. 
function compareHour() {
    var hour = moment().hour();
    console.log(hour); 
    
    $(".input-group-text").each(function () {
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

// Call on the function
compareHour();

