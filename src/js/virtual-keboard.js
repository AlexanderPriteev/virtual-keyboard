export class VirtualKeyboard {
    constructor(textArea, keysDOM, languageBtn, lang = false) {
        this.keys = new Map([
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
            ['Space', ['', '', '', '', '', '', '', '']],
            ['AltRight', ['Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt']],
            ['ControlRight', ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']],
            ['ArrowLeft', ['←', '←', '←', '←', '←', '←', '←', '←']],
            ['ArrowDown', ['↓', '↓', '↓', '↓', '↓', '↓', '↓', '↓']],
            ['ArrowRight', ['→', '→', '→', '→', '→', '→', '→', '→']],
            ['Language', ['EN', 'EN', 'EN', 'EN', 'РУ', 'РУ', 'РУ', 'РУ']]
        ])
        this.functionKeys = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'Space', 'AltLeft', 'AltRight', 'ControlRight', 'Language']
        this.changeLanguage = new Set()
        this.caretPos = 0
        this.caps = false
        this.language = lang
        this.textArea = textArea
        this.keysDOM = keysDOM
        this.languageBtn = languageBtn
    }

    pressKey(thisCode, thisKey) {
        switch (thisCode) {

            case 'Backspace':
                this.textArea.value = this.textArea.value.substring(0, this.caretPos - 1) + this.textArea.value.substring(this.caretPos)
                this.caretPos--
                break
            case 'Tab':
                this.textArea.value = this.textArea.value.substring(0, this.caretPos) + '    ' + this.textArea.value.substring(this.caretPos)
                this.caretPos += 4
                break
            case 'Delete':
                this.textArea.value = this.textArea.value.substring(0, this.caretPos) + this.textArea.value.substring(this.caretPos + 1)
                break
            case 'CapsLock':
                document.getElementById(`CapsLock`).classList.toggle('key--primary')
                this.caps = !(this.caps)
                this.changeKeys()
                break
            case 'Enter':
                this.textArea.value = this.addSymbol(this.textArea.value, this.caretPos++, "\n")
                break
            case 'ControlLeft':
                this.changeLanguage.add(thisCode)
                break
            case 'AltLeft':
                this.changeLanguage.add(thisCode)
                break
            case 'ShiftLeft':
            case 'ShiftRight':
                this.keysDOM.forEach((e) => {
                    e.innerText = this.keys.get(e.id)[this.caps ? (this.language ? 6 : 2) : (this.language ? 5 : 1)]
                })
                break
            case 'Space':
                this.textArea.value = this.addSymbol(this.textArea.value, this.caretPos++, ' ')
                break
            case 'Language':
                this.toggleLanguage()
                break
            default:
                if (this.functionKeys.indexOf(thisCode) === -1)
                    this.textArea.value = this.addSymbol(this.textArea.value, this.caretPos++, thisKey.innerText)

        }
        thisKey.classList.add('active')
        this.textArea.blur()
    }

    upKey(thisCode, thisKey) {
        thisKey.classList.remove('active')
        if (thisCode === 'ControlLeft' || thisCode === 'AltLeft') {
            if (this.changeLanguage.size === 2) {
                this.toggleLanguage()
            }
            this.changeLanguage.delete(thisCode)
        }
        if (thisCode === 'ShiftLeft' || thisCode === 'ShiftRight') this.changeKeys()
    }

    changeKeys() {
        this.keysDOM.forEach((e) => {
            e.innerText = this.keys.get(e.id)[this.caps ? (this.language ? 7 : 3) : (this.language ? 4 : 0)]
        })
    }

    addSymbol(str, index, symbol) {
        return str.substring(0, index) + symbol + str.substring(index)
    }

    setPosition(position) {
        this.caretPos = position
    }
    toggleLanguage(){
        this.languageBtn.innerText = this.languageBtn.innerText === 'EN' ? 'РУ' : 'EN'
        this.language = !(this.language)
        localStorage.setItem('lang', this.language ? '1' : '0')
        this.changeKeys()
    }
}