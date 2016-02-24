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

console.log("hello");
