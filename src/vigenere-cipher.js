class VigenereCipheringMachine {
    typeOfMachine = true;
    alphabet = ("abcdefghijklmnopqrstuvwxyz").toUpperCase().split("");

    constructor(type = true) {
        this.typeOfMachine = type;
    }

    encrypt(message, key) {
        let result = [];
        if (!message || !key) throw new Error('Message and key parameters are mandatory.');
        key = this.transformKeyString(message, key);
        let keyArray = key.toUpperCase().split("");
        let iter = 0;
        message.toUpperCase().split("").forEach((element, i) => {
            let indexMessageChar = this.alphabet.indexOf(element);
            if (indexMessageChar < 0) {
                result.push(element);
            }
            else {
                let indexKeyChar = this.alphabet.indexOf(keyArray[iter]);
                result.push(this.alphabet[(indexMessageChar + indexKeyChar) % this.alphabet.length]);
                iter++;
            }
        });
        if (!this.typeOfMachine) return result.reverse().join('');
        return result.join('');
    }

    transformKeyString(message, key) {
        let messageLen = message.length;
        let keyLen = key.length;
        let times = message.length / keyLen + 1;
        key = key.repeat(times).substr(0, messageLen);
        return key;
    }

    decrypt(message, key) {
        let result = [];
        if (!message || !key) throw new Error('Message and key parameters are mandatory.');
        key = this.transformKeyString(message, key);
        let keyArray = key.toUpperCase().split("");
        let iter = 0;
        message.toUpperCase().split("").forEach((element, i) => {
            let indexMessageChar;
            indexMessageChar = this.alphabet.indexOf(element);
            if (indexMessageChar < 0) {
                result.push(element);
            }
            else {
                let indexKeyChar = this.alphabet.indexOf(keyArray[iter]);
                let temp = (indexMessageChar - indexKeyChar) % this.alphabet.length;
                if (temp < 0) temp += this.alphabet.length;
                result.push(this.alphabet[temp]);
                iter++;
            }
        });
        if (!this.typeOfMachine) return result.reverse().join('');
        return result.join('');
    }
}

module.exports = VigenereCipheringMachine;
