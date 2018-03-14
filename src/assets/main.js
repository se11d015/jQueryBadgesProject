$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/4660814.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      addCourses(response.courses.completed);
    }
  });

  function addCourses(courses) {

    var $badges = $('#$badges');

    courses.forEach(function(course) {

        var $course = $('<div />', {
          'class': 'course'
        }).appendTo($badges);

        $('<h3 />', {
          'class': 'title'
        }).appendTo($course);

        $('<img />', {
          src: course.badge
        }).appendTo($course);

        $('<a />', {
          'class': 'btn btn-primary',
          target: course.url,
          text: 'See Course'
        }).appendTo($course);

      })
    }
  });
