let privousCurrentValue = document.getElementById("currentValue");

function increase() {
    let secondPrivousCurrentValue = privousCurrentValue.textContent;
    let updateValue = parseInt(secondPrivousCurrentValue) + 1;
    privousCurrentValue.textContent = updateValue;
    if (updateValue > 0) {
        privousCurrentValue.style.color = "green";
    } else if (updateValue < 0) {
        privousCurrentValue.style.color = "red";
    } else {
        privousCurrentValue.style.color = "orange";
    }

}

function decrease() {
    let secondPrivousCurrentValue = privousCurrentValue.textContent;
    let updateValue = parseInt(secondPrivousCurrentValue) - 1;
    privousCurrentValue.textContent = updateValue;
    if (updateValue > 0) {
        privousCurrentValue.style.color = "green";
    } else if (updateValue < 0) {
        privousCurrentValue.style.color = "red";
    } else {
        privousCurrentValue.style.color = "orange";
    }

}

function reset() {
    let secondPrivousCurrentValue = privousCurrentValue.textContent;
    let updateValue = 0;
    privousCurrentValue.textContent = updateValue;
    if (updateValue > 0) {
        privousCurrentValue.style.color = "green";
    } else if (updateValue < 0) {
        privousCurrentValue.style.color = "red";
    } else {
        privousCurrentValue.style.color = "orange";
    }

}