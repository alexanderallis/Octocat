$(document).ready(function(){
  'use strict';
  $( ".contributions" ).click(function() {
    $(".tab").removeClass("clicked");
    $( this ).addClass( "clicked" );
    $(".popular-repositories").show();
    $(".public-block").hide();
    $( ".repo-block" ).hide();
  });
  $(".repos").click(function(){
    $(".tab").removeClass("clicked");
    $( this ).addClass( "clicked" );
    $( ".repo-block" ).show();
    $( ".popular-repositories" ).hide();
    $(".public-block").hide();
  });
  $(".public").click(function(){
    $(".tab").removeClass("clicked");
    $( this ).addClass( "clicked" );
    $(".public-block").show();
    $( ".popular-repositories" ).hide();
    $( ".repo-block" ).hide();
  });
})

// console.log("hello");

// -----------------------------------------------------------------USER INFO


$.getJSON("https://api.github.com/users/octocat", function( json ){

$(".insert-username").html(json.name);
$(".login").html(json.login);
$(".company").html(json.company);
$(".location").html(json.location);
$(".email").html(json.email);
$(".blog").html(json.blog);
$(".created_at").html("Joined on " + json.created_at);

});

// ------------------------------------------------------POPULAR REPOSITORIES

$.getJSON("https://api.github.com/users/octocat/repos", function( json ){


  var sorted = _.sortBy(json, "stargazers_count");
  var inverse = sorted.length-1;
  // console.log(sorted.length-1);

// for(var i = sorted.length-1; i >=0; i--){
//   console.log(sorted[i].stargazers_count);
// }

  for(var i = sorted.length -1; i >= 0 ; i--){

  $(".popular-repositories").append('<div class="pop-repo"><span class="octicon octicon-repo"></span><div class="pop-repo-sub"><a class="pop-repo-name-0"href="#">' + sorted[i].name + '</a><p>This repo is for demonstration purposes only.</p></div><div class="stars"><div class="num-stars num-stars-0">' + sorted[i].stargazers_count + '</div><div class="octicon octicon-star"></div></div></div> ');
  // $(".pop-repo-name-"+(inverse-i)).html(sorted[i].name);
  // $(".num-stars-"+(inverse-i)).html(sorted[i].stargazers_count);

}
//An explanation of inverse function:
//If sorted.length (the length of the object) is 4,
//when you subtract the variable i (which counts down from 4)
//you get stuff.
// 4-4 = 0
// 4-3 = 1
// 4-2 = 2
// 4-1 = 3
// 4-0 = 4

// for(var i = 4; i >= 0; i--){
//
// $(".pop-repo-name-"+i).html(sorted[i].name);
// $(".num-stars-"+i).html(sorted[i].stargazers_count);
//
// }

});

// ------------------------------------------------------ALL REPOSITORIES

$.getJSON("https://api.github.com/users/octocat/repos", function( json ){

  var sorted = _.sortBy(json, "stargazers_count");

  for(var i = sorted.length -1; i >= 0 ; i--){

  $(".popular-repositories").append('<div class="pop-repo"><span class="octicon octicon-repo"></span><div class="pop-repo-sub"><a class="pop-repo-name-0"href="#">' + sorted[i].name + '</a><p>This repo is for demonstration purposes only.</p></div><div class="stars"><div class="num-stars num-stars-0">' + sorted[i].stargazers_count + '</div><div class="octicon octicon-star"></div></div></div> ');

}


// var people = [
//   {
//      "f_name":"john",
//      "l_name":"doe",
//      "sequence":"0",
//      "title":"president",
//      "url":"google.com",
//      "color":"333333"
//   },
//   {
//      "f_name":"michael",
//      "l_name":"agoodyear",
//      "sequence":"0",
//      "title":"general manager",
//      "url":"google.com",
//      "color":"333333"
//   }
// ];
//
//
// var sorted = _.sortBy(people, "l_name");
// console.log(sorted[0].l_name);
