module.exports = function repeater(str, options) {
    let result = '';
    let times = options.hasOwnProperty('repeatTimes') ? options['repeatTimes'] : 1;
    let separator = options.hasOwnProperty('separator') ? options['separator'] : "+";
    let addition = options.hasOwnProperty('addition') ? options['addition'] : '';
    let additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes') ? options['additionRepeatTimes'] : 0;
    let additionalSeparator = options.hasOwnProperty('additionSeparator') ? options['additionSeparator'] : '';
    let additionalString = repeatString(addition, additionRepeatTimes, additionalSeparator) ;
    separator = additionalString + separator;

    result = repeatString(str, times, separator);
    if (options.hasOwnProperty('addition')) result += additionalString;
    return result;
};

function repeatString(str, times, connector) {
    let result = str;
    while (times > 1) {
        result = result + connector + str;
        times--;
    }
    return result;
};