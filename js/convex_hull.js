var ConvexHull = {};
{
  'use strict';

  ConvexHull.Algorithm = {};

  // ギフト包装法
  ConvexHull.Algorithm.GiftWrapping = function(points) {
    if (points.length() < 3) {
      return null;
    }
    // 1. 最もx座標が小さく、その中でyも最も小さいものを求めて注目点とする
    let basep = null; 
    points.forEach(point => {
      if (basep == null) {
        basep = point;
      } else {
        if (basep.x > point.x && basep.y > point.y) {
          basep = point;
        }
      }
    });

    // 2. 次の点を求めるために、注目点ほか全ての点との偏角を求めて、最も左にあるものを選ぶ.
    let next = function(points, checkp) {
      let nextp = null;
      let nextrad = Math.PI;
      points.forEach(point =>{
        if (checkp == point) {
          continue;
        }
        if (nextp == null) {
          nextp = point;
        } else {
          let rad = Math.atan2(checkp.y - point.y, checkp.x - point.x);
          if (rad < nextrad) {
            nextrad = rad;
            nextp = point;
          }
        }
      });
      return nextp;
    };
    // 3. 一周するまで繰り返す.
    let result = [];
    let lastp = basep;
    do {
      result.push(lastp);
      lastp = next(points, lastp);
    }
    while(basep != lastp);
    result.push(basep);

    return result;
  }
}