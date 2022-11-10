
var formatted_phone = function (phone) {
    // var phone ="asdasd";
    if(phone.length==11)
        phone = phone.substring(0,3)+"-"+phone.substring(3,7)+"-"+phone.substring(7,11);
    return phone;//"010-8542-9052";
}
navigator.vibrate =
  navigator.vibrate ||
  navigator.webkitVibrate ||
  navigator.mozVibrate ||
  navigator.msVibrate;
var vibrate = function (ms) {
    console.log("vibrate - safari ios, fold3도 지원안하는 듯.. ");
    if (navigator.vibrate) {
      navigator.vibrate(ms); // 진동을 울리게 한다. 1000ms = 1초
    } else {
      alert("진동을 지원하지 않는 기종 입니다.");
    }
}




const tools = {
    formatted_phone : formatted_phone,
    vibrate : vibrate,
}  
export default tools;
