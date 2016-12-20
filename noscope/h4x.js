requirejs.config({
  paths: {},
  shim: {}
});
define([
    'qlik',
    'jquery',
    'text!./h4xcode.css'
  ],
  function(qlik, $, h4x) {
    return {
      paint: function($element, layout) {
        var self = this;
         $( '<style>' ).html(h4x).appendTo( 'head' );
        var sheet = $('#grid-wrap');
        var imageUrl = 'http://www.crestock.com/uploads/blog/wallpapers/xmas08/crestock-1293599-2560x1600.jpg';
        var objects = $('article.qv-object.qvt-visualization');

        //sheet.css('background-image', 'url("' + imageUrl + '")');
        sheet.addClass('haxer');
        objects.addClass('hax');


      }
    };
  });
