// var do1 = function () {
//   var matrix = new this.Point(500,500);
//   var n = 30;
//   var result = this.getAvatar_byMatrix(matrix,n);
//   console.log(result);
// }

var Point = function (x,y) {//이렇게 하면 생성자까지 겸함. 
  this.x = x;
  this.y = y;
  this.print = "("+x.toFixed()+","+y.toFixed()+")";
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

//사이즈만 맞춰주면 wrap은 알아서 Dom 이 함. 
var getRatio = function (XY,w_h)
{
  var sum= (XY.x+XY.y);
  return (w_h)? XY.x/sum : XY.y/sum;
}

//큰정사각형 l*l에 n개의 작은 정사각형이 들어갈때, 작은 정사각형 1개의 s*s를 구하시오.   (소인수분해 개념)
var getTinySquare_byCount = function (b,n)
{
  var a = Math.sqrt(n);
  var s = b/a;
  return s;
}
//큰직사각형 w*h에 n개의 작은 정사각형이 들어갈때, 작은 정사각형 1개의 s*s를 구하시오.   (소인수분해 개념)
var getTinySquare_byRect_Count = function (w,h,n)
{
  var x = Math.sqrt((n*W)/H);
  var y = (x*H)/W;
  // var s = W/x;
  var s = H/y;
  return s;
  // var y = Math.sqrt(n*h/w);
  // var x = n/y;
  // var s = w/x;
  // return s;
}



//큰 직사각형 W,H에 n개의 작은 정사각형이 들어갈때, 작은 정사각형 1개의 wh를 구하시오.   (소인수분해 개념)
var getAvatar_byMatrix = function (W,H,n)
{
  // console.log('덤'+getdum(M.x,M.y));  

  var M = new Point(W,H);
  var min = getMin(W,H);

  var s = getTinySquare_byRect_Count(W,H,n);
  var s = new Point(s,s);
  return s;

  


  console.log("전체 rect"+M.print);

  // var a = n*getRatio(M,true);
  // var b = n*getRatio(M,false);
  // console.log(a);
  // console.log(b);
  // console.log(n);
  var s = Math.sqrt(M.x*M.y);
  console.log("넓이루트: "+s.toFixed());
  
  var result = new Point(s/10,s/10);
  console.log("부분 rect"+result.print);
  // a=10;
  // b=10;

  // var result = new Point(M.x/a,M.y/b);
  // var result = new Point(50,30);


  // var result = new Point(M.x/n,M.y/n);
  return result;
}
var listmaker = function (x,y) {
  var list = [];
  for(var i=0;i<n;i++)
    list.push(i);
  return list;
}



const gridMaker = {
  getAvatar_byMatrix : getAvatar_byMatrix
}  
export default gridMaker;