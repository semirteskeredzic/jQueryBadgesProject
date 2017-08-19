$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/Endocannabinoid.json',
    dataType: 'jsonp',
    success: function(response){
      console.log('response', response.courses.completed);
      addCourses(response.courses.completed);
    }

  });

  function addCourses(courses) {

    var $badges = $('#badges');

    courses.forEach(function(course) {

      $('<div />',  {
        'class': 'course'
      }).appendTo($badges);
    });

  }

  // your code will go here

});
