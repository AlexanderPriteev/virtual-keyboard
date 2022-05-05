'use strict'

const keys = new Map([
        ['Backquote', ['\`', '~', '~', '\`', 'ё', 'Ё', 'ё', 'Ё']],
        ['Digit1', ['1', '!', '!', '1', '1', '!', '!', '1']],
        ['Digit2', ['2', '@', '@', '2', '2', '\"', '\"', '2']],
        ['Digit3', ['3', '#', '#', '3', '3', '№', '№', '3']],
        ['Digit4', ['4', '$', '$', '4', '4', ';', ';', '4']],
        ['Digit5', ['5', '%', '%', '5', '5', '%', '%', '5']],
        ['Digit6', ['6', '^', '^', '6', '6', ':', ':', '6']],
        ['Digit7', ['7', '&', '&', '7', '7', '?', '?', '7']],
        ['Digit8', ['8', '*', '*', '8', '8', '*', '*', '8']],
        ['Digit9', ['9', '(', '(', '9', '9', '(', '(', '9']],
        ['Digit0', ['0', ')', ')', '0', '0', ')', ')', '0']],
        ['Minus', ['-', '_', '_', '-', '-', '_', '_', '-']],
        ['Equal', ['=', '+', '+', '=', '=', '+', '+', '=']],
        ['Backspace', ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace']],
        ['Tab', ['Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab']],
        ['KeyQ', ['q', 'Q', 'q', 'Q', 'й', 'Й', 'й', 'Й']],
        ['KeyW', ['w', 'W', 'w', 'W', 'ц', 'Ц', 'ц', 'Ц']],
        ['KeyE', ['e', 'E', 'e', 'E', 'у', 'У', 'у', 'У']],
        ['KeyR', ['r', 'R', 'r', 'R', 'к', 'К', 'к', 'К']],
        ['KeyT', ['t', 'T', 't', 'T', 'е', 'Е', 'е', 'Е']],
        ['KeyY', ['y', 'Y', 'y', 'Y', 'н', 'Н', 'н', 'Н']],
        ['KeyU', ['u', 'U', 'u', 'U', 'г', 'Г', 'г', 'Г']],
        ['KeyI', ['i', 'I', 'i', 'I', 'ш', 'Ш', 'ш', 'Ш']],
        ['KeyO', ['o', 'O', 'o', 'O', 'щ', 'Щ', 'щ', 'Щ']],
        ['KeyP', ['p', 'P', 'p', 'P', 'з', 'З', 'з', 'З']],
        ['BracketLeft', ['[', '{', '{', '[', 'х', 'Х', 'х', 'Х']],
        ['BracketRight', [']', '}', '}', ']', 'ъ', 'Ъ', 'ъ', 'Ъ']],
        ['Backslash', ['\\', '\|', '\|', '\\', '\\', '\/', '\/', '\\']],
        ['Delete', ['Del', 'Del', 'Del', 'Del', 'Del', 'Del', 'Del', 'Del']],
        ['CapsLock', ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock']],
        ['KeyA', ['a', 'A', 'a', 'A', 'ф', 'Ф', 'ф', 'Ф']],
        ['KeyS', ['s', 'S', 's', 'S', 'ы', 'Ы', 'ы', 'Ы']],
        ['KeyD', ['d', 'D', 'd', 'D', 'в', 'В', 'в', 'В']],
        ['KeyF', ['f', 'F', 'f', 'F', 'а', 'А', 'а', 'А']],
        ['KeyG', ['g', 'G', 'g', 'G', 'п', 'П', 'п', 'П']],
        ['KeyH', ['h', 'H', 'h', 'H', 'р', 'Р', 'р', 'Р']],
        ['KeyJ', ['j', 'J', 'j', 'J', 'о', 'О', 'о', 'О']],
        ['KeyK', ['k', 'K', 'k', 'K', 'л', 'Л', 'л', 'Л']],
        ['KeyL', ['l', 'L', 'l', 'L', 'д', 'Д', 'д', 'Д']],
        ['Semicolon', [';', ':', ':', ';', 'ж', 'Ж', 'ж', 'Ж']],
        ['Quote', ['\'', '\"', '\"', '\'', 'э', 'Э', 'э', 'Э']],
        ['Enter', ['Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter']],
        ['ShiftLeft', ['Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift']],
        ['KeyZ', ['z', 'Z', 'z', 'Z', 'я', 'Я', 'я', 'Я']],
        ['KeyX', ['x', 'X', 'x', 'X', 'ч', 'Ч', 'ч', 'Ч']],
        ['KeyC', ['c', 'C', 'c', 'C', 'с', 'С', 'с', 'С']],
        ['KeyV', ['v', 'V', 'v', 'V', 'м', 'М', 'м', 'М']],
        ['KeyB', ['b', 'B', 'b', 'B', 'и', 'И', 'и', 'И']],
        ['KeyN', ['n', 'N', 'n', 'N', 'т', 'Т', 'т', 'Т']],
        ['KeyM', ['m', 'M', 'm', 'M', 'ь', 'Ь', 'ь', 'Ь']],
        ['Comma', [',', '<', '<', ',', 'б', 'Б', 'б', 'Б']],
        ['Period', ['.', '>', '>', '.', 'ю', 'Ю', 'ю', 'Ю']],
        ['Slash', ['\/', '?', '?', '\/', '.', ',', ',', '.']],
        ['ArrowUp', ['↑', '↑', '↑', '↑', '↑', '↑', '↑', '↑']],
        ['ShiftRight', ['Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift']],
        ['ControlLeft', ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']],
        ['MetaLeft', ['Win', 'Win', 'Win', 'Win', 'Win', 'Win', 'Win', 'Win']],
        ['AltLeft', ['Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt']],
        ['Space', [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']],
        ['AltRight', ['Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt']],
        ['ControlRight', ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']],
        ['ArrowLeft', ['←', '←', '←', '←', '←', '←', '←', '←']],
        ['ArrowDown', ['↓', '↓', '↓', '↓', '↓', '↓', '↓', '↓']],
        ['ArrowRight', ['→', '→', '→', '→', '→', '→', '→', '→']],
        ['Language', ['EN', 'EN', 'EN', 'EN', 'РУ', 'РУ', 'РУ', 'РУ']]
    ]),
    functionKeys = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight'],
    textArea = document.querySelector('.textarea'),
    keyboard = document.querySelector('.keyboard'),
    languageBtn = document.getElementById('Language'),
    keysDOM = keyboard.querySelectorAll('.key')

let changeLanguage = new Set(),
    caretPos = 0,
    caps = false,
    language = false

const changeKeys = () => {
    keysDOM.forEach((e) => {
        e.innerText = keys.get(e.id)[caps ? (language ? 7 : 3) : (language ? 4 : 0)]
    })
}

const addSymbol = (str, index, symbol) => {
    return str.substring(0, index) + symbol + str.substring(index)
}

const pressKey = (thisCode, thisKey) => {
    switch (thisCode) {

        case 'Backspace':
            textArea.value = textArea.value.substring(0, caretPos - 1) + textArea.value.substring(caretPos)
            caretPos--
            break
        case 'Tab':
            textArea.value = textArea.value.substring(0, caretPos) + '    ' + textArea.value.substring(caretPos)
            caretPos += 4
            break
        case 'Delete':
            textArea.value = textArea.value.substring(0, caretPos) + textArea.value.substring(caretPos + 1)
            break
        case 'CapsLock':
            document.getElementById(`CapsLock`).classList.toggle('key--primary')
            caps = !(caps)
            changeKeys()
            break
        case 'Enter':
            textArea.value = addSymbol(textArea.value, caretPos++, "\n")
            break
        case 'ControlLeft':
            changeLanguage.add(thisCode)
            break
        case 'AltLeft':
            changeLanguage.add(thisCode)
            break
        case 'ShiftLeft':
        case 'ShiftRight':
            keysDOM.forEach((e) => {
                e.innerText = keys.get(e.id)[caps ? (language ? 6 : 2) : (language ? 5 : 1)]
            })
            break
        default:
            if (functionKeys.indexOf(thisCode) === -1) textArea.value = addSymbol(textArea.value, caretPos++, thisKey.innerText)

    }
    thisKey.classList.add('active')
    textArea.blur()
    return false
}

const upKey = (thisCode, thisKey) => {
    thisKey.classList.remove('active')
    if (thisCode === 'ControlLeft' || thisCode === 'AltLeft') {
        if (changeLanguage.size === 2) {
            languageBtn.innerText = languageBtn.innerText === 'EN' ? 'РУ' : 'EN'
            language = !(language)
            changeKeys()
        }
        changeLanguage.delete(thisCode)
    }
    if (thisCode === 'ShiftLeft' || thisCode === 'ShiftRight') changeKeys()
}

window.onkeydown = (e) => {
    try {
        const thisCode = e.code,
            thisKey = document.getElementById(`${thisCode}`)
        pressKey(thisCode, thisKey)

    } catch (e) {
    }
}

window.onkeyup = (e) => {
    try {
        const thisCode = e.code,
            thisKey = document.getElementById(`${thisCode}`)
        upKey(thisCode, thisKey)
    } catch (e) {
    }
    return false
}

keyboard.onmousedown = (e) => {
    if (!e.target.classList.contains('keyboard__row')) {
        const thisKey = e.target,
             thisCode = thisKey.id
        pressKey(thisCode, thisKey)
    }
}
keyboard.onmouseup = (e) => {
    if (!e.target.classList.contains('keyboard__row')) {
        const thisKey = e.target,
            thisCode = thisKey.id
        upKey(thisCode, thisKey)
    }
}

textArea.onclick = () => {
    caretPos = textArea.selectionStart
}