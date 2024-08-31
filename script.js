function appendCharacter(character) {
    const display = document.getElementById('result');
    display.value += character;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteCharacter() {
    const display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('result');
    try {
        display.value = eval(display.value.replace('×', '*').replace('÷', '/'));
    } catch (error) {
        display.value = 'Error';
    }
}
