"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;/**
 * This function is get from https://gist.github.com/eyecatchup/9536706
 * Credit to eyecatchup
 */ /**
 * HSV to RGB color conversion
 *
 * H runs from 0 to 360 degrees
 * S and V run from 0 to 100
 *
 * Ported from the excellent java algorithm by Eugene Vishnevsky at:
 * http://www.cs.rit.edu/~ncs/color/t_convert.html
 */var _default=function(a,c,d){var m,n,o,u,w,x,y,z,e=Math.floor,j=Math.round,k=Math.max,l=Math.min;return(a=k(0,l(360,a)),c=k(0,l(100,c)),d=k(0,l(100,d)),c/=100,d/=100,0===c)?(m=n=o=d,[j(255*m),j(255*n),j(255*o)]):(a/=60,u=e(a),w=a-u,x=d*(1-c),y=d*(1-c*w),z=d*(1-c*(1-w)),(0===u?(m=d,n=z,o=x):1===u?(m=y,n=d,o=x):2===u?(m=x,n=d,o=z):3===u?(m=x,n=y,o=d):4===u?(m=z,n=x,o=d):(// case 5:
m=d,n=x,o=y),[j(255*m),j(255*n),j(255*o)]))};exports.default=_default;