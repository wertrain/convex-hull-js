var ConvexHull = {};
{
  'use strict';

  ConvexHull.Algorithm = {};

  // ギフト包装法
  ConvexHull.Algorithm.GiftWrapping = function(points) {
    if (points.length < 3) {
      return null;
    }
    // 1. 最もy座標が小さく、その中でxも最も小さいものを求めて注目点とする
    let basep = points[0]; 
    points.forEach(point => {
      if (basep.y > point.y || ((basep.y == point.y) && basep.x > point.x)) {
        basep = point;
      }
    });

    // 2. 次の点を求めるために、注目点ほか全ての点との偏角を求めて、最も左にあるものを選ぶ.
    let next = function(points, checkp) {
      let nextp = points[0];
      for (let i = 1, max = points.length; i < max; ++i) {
        let point = points[i];
        if (checkp == nextp) {
          nextp = point;
        } else {
          let v = (checkp.x - nextp.x) * (checkp.y - point.y) - (checkp.x - point.x) * (checkp.y - nextp.y);
          let ab = (checkp.x - nextp.x) * (checkp.x - nextp.x) + (checkp.y - nextp.y) * (checkp.y - nextp.y);
          let ac = (checkp.x - point.x) * (checkp.x - point.x) + (checkp.y - point.y) * (checkp.y - point.y);
          if (v > 0 || (v == 0 && Math.abs(ac) > Math.abs(ab))) {
            nextp = point;
          }
        }
      }
      return nextp;
    };
    // 3. 一周するまで繰り返す.
    let result = [];
    let lastp = basep;
    do {
      result.push(lastp);
      lastp = next(points, lastp);
    } while(basep != lastp);
    result.push(basep);

    return result;
  }

  // Grahan Scan
  ConvexHull.Algorithm.GrahanScan = function(points) {
    return [];
  }
  
  // Quickhull 法
  ConvexHull.Algorithm.Quickhull = function(points) {
    return [];
  }

  // デフォルトのアルゴリズムはギフト包装法
  ConvexHull.Algorithm.Function = ConvexHull.Algorithm.GiftWrapping;
}