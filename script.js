"use strict";

$(document).ready(function () {
  // Save button click event
  $("button[id^='save_button']").on("click", function () {
    var description = $(this).siblings("textarea").val();
    var time = $(this).siblings("div[id^='hour']").text().trim();
    localStorage.setItem(time, description);
  });

  // Load saved descriptions
  $("div[id^='timeblock_']").each(function () {
    var time = $(this).children("div[id^='hour']").text().trim();
    var description = localStorage.getItem(time);
    if (description) {
      $(this).children("textarea").val(description);
    }
  });

  // Update date and time
  var currentDayEl = $("#currentDay");
  var currentDateEl = $("#currentDate");
  var currentTimeEl = $("#currentTime");

  function updateDateTime() {
    var now = moment();
    currentDayEl.text(now.format("dddd"));
    currentDateEl.text(now.format("MMM Do, YYYY"));
    currentTimeEl.text(now.format("h:mm:ss A"));
  }

  setInterval(function () {
    var now = moment();
    currentDayEl.text(now.format("dddd, MMMM Do YYYY, h:mm:ss a"));
  }, 1000);

  // Set timeblock class based on current hour
  var currentHour = moment().hours();

  function updateColors() {
    // Loop through all time blocks
    $(".time-block").each(function () {
      // Get the hour for this time block
      var blockHour = parseInt($(this).attr("id").split("_")[1]);
  
      // Add or remove classes based on the current hour and the time block hour
      if (blockHour < currentHour) {
        $(this).removeClass("present future").addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
    });
  }
  updateDateTime();
  updateColors();

  $('#hour_09 .description').val(localStorage.getItem('hour_09'));
  $('#hour_10 .description').val(localStorage.getItem('hour_10'));
  $('#hour_11 .description').val(localStorage.getItem('hour_11'));
  $('#hour_12 .description').val(localStorage.getItem('hour_12'));
  $('#hour_13 .description').val(localStorage.getItem('hour_13'));
  $('#hour_14 .description').val(localStorage.getItem('hour_14'));
  $('#hour_15 .description').val(localStorage.getItem('hour_15'));
  $('#hour_16 .description').val(localStorage.getItem('hour_16'));
  $('#hour_17 .description').val(localStorage.getItem('hour_17'));
  $('#hour_18 .description').val(localStorage.getItem('hour_18'));
  // Set current day text
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm a"));
});
