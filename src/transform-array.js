module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw Error("Invalid argument");
    let i = 0;
    while (i < arr.length) {
        switch (arr[i]) {
            case '--discard-next':
                if ( arr[i + 2] == '--double-prev')
                    arr.splice(i, 3, arr[i + 1]);
                else {
                    arr.splice(i, 2);
                    i--;
                }
                break;
            case '--discard-prev':
                if (i == 0) arr.splice(i, 1);
                else {
                    arr.splice(i - 1, 2);
                    i--;
                }
                break;
            case '--double-next':
                if (i == arr.length - 1)
                    arr.splice(i, 1);
                else {
                    arr.splice(i, 1, arr[i + 1]);
                    i++;
                }
                break;
            case '--double-prev':
                if (i == 0)
                    arr.splice(i, 1);
                else {
                    arr.splice(i, 1, arr[i - 1]);
                    i++;
                }
                break;
        }
        i++;
    }
    return arr;
};
