function requiredField(objString) {
    var str = objString.value;
    var str = str.replace(/^\s+|\s+$/, '');
    if (str.length == 0) {
        alert('This is a required field.');
        objString.value = '';
        objString.focus();
        return false;
    }
    if (isNaN()) {
        alert("This is not a number.");
        objString.value = '';
        objString.focus();
        return false;
    }
}

function WAAddError(formElement, errorMsg, focusIt, stopIt) {
    if (document.WAFV_Error) {
        document.WAFV_Error += "\n" + errorMsg;
    } else {
        document.WAFV_Error = errorMsg;
    }
    if (!document.WAFV_InvalidArray) {
        document.WAFV_InvalidArray = new Array();
    }
    document.WAFV_InvalidArray[document.WAFV_InvalidArray.length] = formElement;
    if (focusIt && !document.WAFV_Focus) {
        document.WAFV_Focus = focusIt;
    }
    if (stopIt == 1) {
        document.WAFV_Stop = true;
    } else if (stopIt == 2) {
        formElement.WAFV_Continue = true;
    } else if (stopIt == 3) {
        formElement.WAFV_Stop = true;
        formElement.WAFV_Continue = false;
    }
}

function WAValidateNM(formElement, errorMsg, minLength, maxLength, allowDecimals, roundDecimals, reformatDecimals, punctuationMarks, focusIt, stopIt, required) {
    var isValid = true;
    var theThousand = punctuationMarks.charAt(0);
    var theDecimal = punctuationMarks.charAt(1);
    var theCheck = 11 / 10;
    var trueDecimal = (String(theCheck).charAt(1));
    var value = formElement.value;
    var decimalIndex = value.length;
    if (punctuationMarks.indexOf(trueDecimal) < 0 && value.indexOf(trueDecimal) >= 0) {
        isValid = false;
    }
    if (value.lastIndexOf(theDecimal) >= 0) {
        decimalIndex = value.lastIndexOf(theDecimal);
    }
    while (value.indexOf(theThousand) >= 0) {
        decimalIndex = value.length;
        if (value.lastIndexOf(theDecimal) >= 0) {
            decimalIndex = value.lastIndexOf(theDecimal);
        }
        if ((decimalIndex - (value.lastIndexOf(theThousand) + 1)) % 3 != 0)
            isValid = false;
        value = value.substring(0, value.lastIndexOf(theThousand)) + value.substring(value.lastIndexOf(theThousand) + 1);
    }
    if (trueDecimal != theDecimal) {
        while (value.indexOf(theDecimal) >= 0) {
            value = value.substring(0, value.indexOf(theDecimal)) + trueDecimal + value.substring(value.indexOf(theDecimal) + 1);
        }
    }
    if ((!document.WAFV_Stop && !formElement.WAFV_Stop) && !(!required && value == "")) {
        for (var x = 0; x < value.length; x++) {
            if (isNaN(parseInt(value.charAt(x))) && (value.charAt(x) != " " && value.charAt(x) != "," && value.charAt(x) != ".")) {
                isValid = false;
            }
        }
        if (value == "") {
            isValid = false;
        }
        var oldVal = String(value);
        if (oldVal.indexOf(trueDecimal) >= 0) {
            while (oldVal.charAt(oldVal.length - 1) == "0" || oldVal.charAt(oldVal.length - 1) == trueDecimal) {
                if (oldVal.charAt(oldVal.length - 1) == trueDecimal) {
                    oldVal = oldVal.substring(0, oldVal.length - 1);
                    break;
                } else oldVal = oldVal.substring(0, oldVal.length - 1);
            }
            if (oldVal.indexOf(trueDecimal) == 0)
                oldVal = "0" + oldVal;
        }
        if (String(allowDecimals) != "") {
            if (String(value).indexOf(".") > 0 && ((String(value).indexOf(".") + allowDecimals + 2 <= String(value).length) || allowDecimals == 0)) {
                isValid = false;
            }
        }
        value = parseFloat(value);
        if (isNaN(value)) {
            isValid = false;
        } else if (String(value).length != String(oldVal).length && String(oldVal).substring(String(value).length + 1).search(/^\.?0*$/) == -1) {
            isValid = false;
        } else if ((String(minLength) != "" && minLength > value) || (String(maxLength) != "" && maxLength < value)) {
            isValid = false;
        }
    }
    if (!isValid) {
        WAAddError(formElement, errorMsg, focusIt, stopIt);
    } else {
        if (value != "") {
            if (roundDecimals != "") {
                value = Math.round(value * roundDecimals) / roundDecimals;
            }
            if (reformatDecimals != "") {
                value = String(value);
                if (value.indexOf(trueDecimal) < 0)
                    value += trueDecimal;
                if (value.indexOf(trueDecimal) < value.length - reformatDecimals) {
                    value = value.substring(0, value.indexOf(trueDecimal) + reformatDecimals + 1);
                } else {
                    while (value.indexOf(trueDecimal) > value.length - reformatDecimals - 1) {
                        value += "0";
                    }
                }
            }
        }
        if (trueDecimal != theDecimal) {
            value = String(value);
            while (value.indexOf(trueDecimal) >= 0) {
                value = value.substring(0, value.indexOf(trueDecimal)) + theDecimal + value.substring(value.indexOf(trueDecimal) + 1);
            }
        }
        if (roundDecimals != "" || reformatDecimals != "")
            formElement.value = value;
    }
}

function WAAlertErrors(errorHead, errorFoot, setFocus, submitForm) {
    if (!document.WAFV_StopAlert) {
        document.WAFV_StopAlert = true;
        if (document.WAFV_InvalidArray) {
            document.WAFV_Stop = true;
            var errorMsg = document.WAFV_Error;
            if (errorHead != "")
                errorMsg = errorHead + "\n" + errorMsg;
            if (errorFoot != "")
                errorMsg += "\n" + errorFoot;
            document.MM_returnValue = false;
            if (document.WAFV_Error != "")
                alert(errorMsg.replace(/&quot;/g, '"'));
            else if (submitForm)
                submitForm.submit();
            if (setFocus && document.WAFV_Focus) {
                document.tempFocus = document.WAFV_Focus;
                setTimeout("document.tempFocus.focus();setTimeout('document.WAFV_Stop = false;document.WAFV_StopAlert = false;',1)", 1);
            } else {
                document.WAFV_Stop = false;
                document.WAFV_StopAlert = false;
            }
            for (var x = 0; x < document.WAFV_InvalidArray.length; x++) {
                document.WAFV_InvalidArray[x].WAFV_Stop = false;
            }
        } else {
            document.WAFV_Stop = false;
            document.WAFV_StopAlert = false;
            if (submitForm) {
                submitForm.submit();
            }
            document.MM_returnValue = true;
        }
        document.WAFV_Focus = false;
        document.WAFV_Error = false;
        document.WAFV_InvalidArray = false;
    }
}
