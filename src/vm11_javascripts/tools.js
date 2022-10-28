
var formatted_phone = function (phone) {
    // var phone ="asdasd";
    if(phone.length==11)
        phone = phone.substring(0,3)+"-"+phone.substring(3,7)+"-"+phone.substring(7,11);
    return phone;//"010-8542-9052";
}
const tools = {
    formatted_phone : formatted_phone,
}  
export default tools;
