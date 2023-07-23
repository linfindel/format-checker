function check(pattern) {
    var data = document.getElementById(pattern).value;
    var patternMatched;

    console.log(data)

    if (pattern == "email") {
        if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi.test(data)) {
            patternMatched = true;
        }
    }

    else if (pattern == "phone") {
        if (/^(?=(?:\+|0{2})?(?:(?:[\(\-\)\.\/ \t\f]*\d){7,10})?(?:[\-\.\/ \t\f]?\d{2,3})(?:[\-\s]?[ext]{1,3}[\-\.\/ \t\f]?\d{1,4})?$)((?:\+|0{2})\d{0,3})?(?:[\-\.\/ \t\f]?)(\(0\d[ ]?\d{0,4}\)|\(\d{0,4}\)|\d{0,4})(?:[\-\.\/ \t\f]{0,2}\d){3,8}(?:[\-\s]?(?:x|ext)[\-\t\f ]?(\d{1,4}))?$/.test(data)) {
            patternMatched = true;
        }
    }

    else if (pattern == "date") {
        if (/(\b\d{1,2}\/\d{1,2}\/\d{2}\b)|(\b\d{1,2}-\d{1,2}-\d{2}\b)|(\b\d{1,2}\s(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s\d{2}\b)|(\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s\d{1,2},\s\d{2}\b)|(\b\d{1,2}\s(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\b)|(\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s\d{1,2}\b)|(\b\d{1,2}\/\d{1,2}\/\d{4}\b)|(\b\d{1,2}-\d{1,2}-\d{4}\b)|(\b\d{4}-\s(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s\d{1,2}\b)|(\b\d{4},\s(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s\d{1,2}\b)|(\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s\d{1,2},\s\d{4}\b)/gi.test(data)) {
            patternMatched = true;
        }
    }

    else if (pattern == "url") {
        if (/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(data)) {
            patternMatched = true;
        }
    }

    else if (pattern == "ip") {
        if (/^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::(\d{1,5}))?$/.test(data) || /^([0-9a-fA-F]{1,4}(:|::)){1,7}([0-9a-fA-F]{1,4})(?::(\d{1,5}))?$/.test(data)) {
            patternMatched = true;
        }
    }

    else if (pattern == "coordinates") {
        if (/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/.test(data)) {
            patternMatched = true;
        }
    }

    else if (pattern == "isbn") {
        if (/^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/.test(data)) {
            patternMatched = true;
        }
    }

    if (data == "") {
        document.getElementById(`${pattern}-card`).className = "card";
        document.getElementById(pattern).className = "";
    }

    else if (patternMatched) {
        document.getElementById(`${pattern}-card`).className = "card-success";
        document.getElementById(pattern).className = "input-success";
    }

    else {
        document.getElementById(`${pattern}-card`).className = "card-error";
        document.getElementById(pattern).className = "input-error";
    }
}