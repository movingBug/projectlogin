/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-03 09:11:32
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-03 09:13:40
 */
let data = {

}
function changeState(state = data, action) {
    let { type } = action;
    switch (type) {
        default:
            return { ...state }
    }
}

export default changeState;