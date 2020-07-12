var ConvexHullEditor = {};
{
  'use strict';

  ConvexHullEditor.Common = {};

  ConvexHullEditor.Common.initialize = function() {

  };
  
  ConvexHullEditor.Common.run = function(drawFunc) {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    drawFunc(context);
    return canvas;
  };
}
