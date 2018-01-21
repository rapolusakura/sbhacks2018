// function postData(input) {
//   $.ajax({
//     type: "POST",
//     url: "test.py",
//     data: {
//       param: input
//     },
//     success: callbackFunc
//   });
// }
//
// function callbackFunc(response) {
//   // do something with the response
//   $('div#output').text(response);
// }

function generate(response) {
  $.get('layout/scripts/test.py', {
    topic: response
  }, function(data) {
    $('div#output').text(data);
  });
}
//   $('div#output').text($.ajax({
//     url: "test.py",
//     data: {
//       param: response
//     },
//     async: false
//   }).responseText);
// }
// document.getElementById('name').onkeydown = function(event) {
//   if (event.keyCode == 13) {
//     var name = $('input#name').val();
//     if ($.trim(name) != '') {
//       $.post('print.php', {
//         name: name
//       }, function(data) {
//
// //$.ajax({
//  url: "some.php",
//  async: false
// }).responseText;
//  $.ajax({
//    type: "POST",
//    url: "call.php",
//    data: {
//      param: response
//    }
//    success: function(result) {
//      $('div#output').text(result);
//    },
//  });