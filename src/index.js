module.exports = function check(str, bracketsConfig) {
    let stack = [];
    stack.push(str[0]);
    for (let i = 1; i < str.length; i++){
        let len = stack.length;
        for (let j = 0; j < bracketsConfig.length; j++){
            if (str[i] == bracketsConfig[j][0]){
                if (stack[stack.length - 1] == str[i] && bracketsConfig[j][0] == bracketsConfig[j][1]){
                    stack.pop();
                    break;
                }
                stack.push(str[i]);
                break;
            }
            if (str[i] == bracketsConfig[j][1] && bracketsConfig[j][0] == stack[stack.length - 1]){
                stack.pop();
                break;
            }
        }
        if (len == stack.length) return false;
    }
    if (stack.length > 0) return false;
    else return true;
}

