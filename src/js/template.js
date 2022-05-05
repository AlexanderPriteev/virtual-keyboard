export const template = (lang = 0) => {
    return `<div class="page-wrapper">
    <div class="container">
        <h1 class="headline">Virtual Keyboard</h1>
        <textarea class="textarea" aria-label=""></textarea>
        <div class="keyboard mb-2">
            <div class="keyboard__row">
                <span class="key" id="Backquote">${lang ? 'ё' : '\`'}</span>
                <span class="key" id="Digit1">1</span>
                <span class="key" id="Digit2">2</span>
                <span class="key" id="Digit3">3</span>
                <span class="key" id="Digit4">4</span>
                <span class="key" id="Digit5">5</span>
                <span class="key" id="Digit6">6</span>
                <span class="key" id="Digit7">7</span>
                <span class="key" id="Digit8">8</span>
                <span class="key" id="Digit9">9</span>
                <span class="key" id="Digit0">0</span>
                <span class="key" id="Minus">-</span>
                <span class="key" id="Equal">=</span>
                <span class="key key--xl key--dark" id="Backspace">Backspace</span>
            </div>
            <div class="keyboard__row">
                <span class="key key--md key--dark" id="Tab">Tab</span>
                <span class="key" id="KeyQ">${lang ? 'й' : 'q'}</span>
                <span class="key" id="KeyW">${lang ? 'ц' : 'w'}</span>
                <span class="key" id="KeyE">${lang ? 'у' : 'e'}</span>
                <span class="key" id="KeyR">${lang ? 'к' : 'r'}</span>
                <span class="key" id="KeyT">${lang ? 'е' : 't'}</span>
                <span class="key" id="KeyY">${lang ? 'н' : 'y'}</span>
                <span class="key" id="KeyU">${lang ? 'г' : 'u'}</span>
                <span class="key" id="KeyI">${lang ? 'ш' : 'i'}</span>
                <span class="key" id="KeyO">${lang ? 'щ' : 'o'}</span>
                <span class="key" id="KeyP">${lang ? 'з' : 'p'}</span>
                <span class="key" id="BracketLeft">${lang ? 'х' : '['}</span>
                <span class="key" id="BracketRight">${lang ? 'ъ' : ']'}</span>
                <span class="key" id="Backslash">\\</span>
                <span class="key key--md key--dark" id="Delete">Del</span>
            </div>
            <div class="keyboard__row">
                <span class="key key--xl key--dark" id="CapsLock">CapsLock</span>
                <span class="key" id="KeyA">${lang ? 'ф' : 'a'}</span>
                <span class="key" id="KeyS">${lang ? 'ы' : 's'}</span>
                <span class="key" id="KeyD">${lang ? 'в' : 'd'}</span>
                <span class="key" id="KeyF">${lang ? 'а' : 'f'}</span>
                <span class="key" id="KeyG">${lang ? 'п' : 'g'}</span>
                <span class="key" id="KeyH">${lang ? 'р' : 'h'}</span>
                <span class="key" id="KeyJ">${lang ? 'о' : 'j'}</span>
                <span class="key" id="KeyK">${lang ? 'л' : 'k'}</span>
                <span class="key" id="KeyL">${lang ? 'д' : 'l'}</span>
                <span class="key" id="Semicolon">${lang ? 'ж' : ';'}</span>
                <span class="key" id="Quote">${lang ? 'э' : '\''}</span>
                <span class="key key--lg key--dark" id="Enter">Enter</span>
            </div>
            <div class="keyboard__row">
                <span class="key key--xl key--dark" id="ShiftLeft">Shift</span>
                <span class="key" id="KeyZ">${lang ? 'я' : 'z'}</span>
                <span class="key" id="KeyX">${lang ? 'ч' : 'x'}</span>
                <span class="key" id="KeyC">${lang ? 'с' : 'c'}</span>
                <span class="key" id="KeyV">${lang ? 'м' : 'v'}</span>
                <span class="key" id="KeyB">${lang ? 'и' : 'b'}</span>
                <span class="key" id="KeyN">${lang ? 'т' : 'n'}</span>
                <span class="key" id="KeyM">${lang ? 'ь' : 'm'}</span>
                <span class="key" id="Comma">${lang ? 'б' : ','}</span>
                <span class="key" id="Period">${lang ? 'ю' : '.'}</span>
                <span class="key" id="Slash">${lang ? '.' : '/'}</span>
                <span class="key key--dark" id="ArrowUp">↑</span>
                <span class="key key--lg key--dark" id="ShiftRight">Shift</span>
            </div>
            <div class="keyboard__row">
                <span class="key key--dark" id="ControlLeft">Ctrl</span>
                <span class="key key--dark" id="MetaLeft">Win</span>
                <span class="key key--dark" id="AltLeft">Alt</span>
                <span class="key key--space" id="Space"></span>
                <span class="key key--dark" id="AltRight">Alt</span>
                <span class="key key--dark" id="ControlRight">Ctrl</span>
                <span class="key key--dark" id="ArrowLeft">←</span>
                <span class="key key--dark" id="ArrowDown">↓</span>
                <span class="key key--dark" id="ArrowRight">→</span>
                <span class="key key--primary" id="Language">${lang ? 'РУ' : 'EN'}</span>
            </div>
        </div>
        <p class="text mb-1">Клавиатура создана в операционной системе Windows</p>
        <p class="text">Для переключения языка: левые Ctrl + Alt или клавиша указывающая на текущий язык</p>
    </div>
</div>`
}