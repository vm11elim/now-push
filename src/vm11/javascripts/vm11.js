import gridMaker from './gridMaker.js'
import tools from './tools.js'

var get_vm11 = function () {
    return "vm11";
}
const vm11 = {
    get_vm11 : get_vm11 ,
    tools : tools,
    gridMaker : gridMaker,
}  
export default vm11;
