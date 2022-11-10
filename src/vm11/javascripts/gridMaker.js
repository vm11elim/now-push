// var do1 = function () {
//   var matrix = new this.Point(500,500);
//   var n = 30;
//   var result = this.getAvatar_byMatrix(matrix,n);
//   console.log(result);
// }

import { connectFirestoreEmulator } from "firebase/firestore";

var Point = function (x,y) {//이렇게 하면 생성자까지 겸함. 
  this.x = x;
  this.y = y;
  this.print = "("+x+","+y+")";
  // this.print = "("+x.toFixed(1)+","+y.toFixed(1)+")";
}
var getdum = function (w,h)
{
  var r;
  var big,small;
  big = (w>=h)? w : h;
  small = (w>=h)? h : w; 

  return big/small ;
}
var getMin = function (w,h)
{
  var r;
  var big,small;
  big = (w>=h)? w : h;
  small = (w>=h)? h : w; 

  return small ;
}
var getMax = function (w,h)
{
  var r;
  var big,small;
  big = (w>=h)? w : h;
  small = (w>=h)? h : w; 

  return big ;
}


//사이즈만 맞춰주면 wrap은 알아서 Dom 이 함. 
// var getRatio = function (XY,w_h)
// {
//   var sum= (XY.x+XY.y);
//   return (w_h)? XY.x/sum : XY.y/sum;
// }

// //큰정사각형 l*l에 n개의 작은 정사각형이 들어갈때, 작은 정사각형 1개의 s*s를 구하시오.   (소인수분해 개념)
// var getTinySquare_byCount = function (b,n)
// {
//   var a = Math.sqrt(n);
//   var s = b/a;
//   return s;
// }


// function primeFactors(n) {
//   const factors = [];
//   let divisor = 2;

//   while (n >= 2) {
//     if (n % divisor == 0) {
//       factors.push(divisor);
//       n = n / divisor;
//     } else {
//       divisor++;
//     }
//   }
//   return factors;
// }



//큰 직사각형 W,H에 n개의 작은 정사각형이 들어갈때, 작은 정사각형 1개의 wh를 구하시오.   (소인수분해 개념)
// var getAvatar_byMatrix = function (W,H,n)
// {
//   var M = new Point(W,H);
//   var min = getMin(W,H);
  
//   var s = getTinySquare_byRect_Count(W,H,n);
//   var s = new Point(s,s);
//   return s;
// }


var isWidth_Flow = function (W,s)
{


}
var isHeight_Flow = function (H,s)
{

}


//큰 직사각형 W,H에 r기울기의 작은 직사각형 n개의 wh를 구하시오.
var getAvatar_byMatrix = function (W,H,n,ratio)
{

  
  var M = new Point(W,H);
  var min = getMin(W,H);
  
  // var s = getTinySquare_byRect_Count_Legacy2(W,H,n);

  var s = getTinySquare_byRect_Count(W,H,n,ratio);
  var s = new Point(s,s);///ratio,s*ratio);//*ratio);
  return s;
  
}



//큰직사각형 w*h에 n개의 작은 정사각형이 들어갈때, 작은 정사각형 1개의 s*s를 구하시오.   (소인수분해 개념)
var getTinySquare_byRect_Count = function (w,h,n,ratio)
{
  var Rect = (w*h); //직사각형 넓이를 
  var rect = Rect/n;//개수만큼 나눠서. 
  rect = rect*ratio;//비율만큼. 
  // rect = rect;//*ratio;//비율만큼. 
  // return Math.sqrt(rect);//루트해주기. 
  return Math.sqrt(rect)*0.9;//루트해주기. 
}

// var getTinySquare_byRect_Count_Legacy2 = function (w,h,n)
// {
  
//   var ab = get_ab(w,h,n);
//   var a = ab.a;
//   var b = ab.b;
//   console.log('a: '+a+'    b: '+b);

//   // return getMin(a,b);
//   // return (w/a);
//   var s = getMin(h,w);
//   var l = getMax(h,w);
//   var per = (s/l)*100;

//   console.log(per);
//   return (h/b)-per;
//   return (h/b)*0.6;//*per;
//   // var s = new Point(5,5);//,h/b);
//   // // var s = new Point(w/a,h/b);
//   // return s;

  
// }

// var get_ab = function (w,h,n)
// {
//   console.log('w: '+w+ '    h:'+h+"    n:"+n); 

//   // var tilt = (w>=h)?  w/h : h/w;
//   var tilt = w/h;
//   // var tilt = Math.ceil(w/h);//올림
//   // var tilt = Math.floor(w/h);// 버림
//   // var tilt = Math.round(w/h);// 반올림. 


//   console.log('tilt: '+tilt);

//   var a2 = n * tilt;
//   // var a2 = Math.floor(a2);
//   var a = Math.sqrt(a2);

//   // var a = Math.floor(a);


//   var b = a*(h/w);

//   var obj = {a:a,b:b}
//   return obj;
// }


// var getTinySquare_byRect_Count_Legacy = function (w,h,n)
// {  
//   var x = Math.sqrt((n*W)/H);
//   var y = (x*H)/W;
//   var s = H/y;
//   return s;
// }


const gridMaker = {
  getAvatar_byMatrix : getAvatar_byMatrix
}  
export default gridMaker;