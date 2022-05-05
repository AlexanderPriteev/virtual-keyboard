export const template = `<div class="page-wrapper">
    <div class="container">
        <h1 class="headline">Virtual Keyboard</h1>
        <textarea class="textarea" aria-label=""></textarea>
        <div class="keyboard mb-2">
            <div class="keyboard__row">
                <span class="key" id="Backquote">\`</span>
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
                <span class="key" id="KeyQ">q</span>
                <span class="key" id="KeyW">w</span>
                <span class="key" id="KeyE">e</span>
                <span class="key" id="KeyR">r</span>
                <span class="key" id="KeyT">t</span>
                <span class="key" id="KeyY">y</span>
                <span class="key" id="KeyU">u</span>
                <span class="key" id="KeyI">i</span>
                <span class="key" id="KeyO">o</span>
                <span class="key" id="KeyP">p</span>
                <span class="key" id="BracketLeft">[</span>
                <span class="key" id="BracketRight">]</span>
                <span class="key" id="Backslash">\\</span>
                <span class="key key--md key--dark" id="Delete">Del</span>
            </div>
            <div class="keyboard__row">
                <span class="key key--xl key--dark" id="CapsLock">CapsLock</span>
                <span class="key" id="KeyA">a</span>
                <span class="key" id="KeyS">s</span>
                <span class="key" id="KeyD">d</span>
                <span class="key" id="KeyF">f</span>
                <span class="key" id="KeyG">g</span>
                <span class="key" id="KeyH">h</span>
                <span class="key" id="KeyJ">j</span>
                <span class="key" id="KeyK">k</span>
                <span class="key" id="KeyL">l</span>
                <span class="key" id="Semicolon">;</span>
                <span class="key" id="Quote">'</span>
                <span class="key key--lg key--dark" id="Enter">Enter</span>
            </div>
            <div class="keyboard__row">
                <span class="key key--xl key--dark" id="ShiftLeft">Shift</span>
                <span class="key" id="KeyZ">z</span>
                <span class="key" id="KeyX">x</span>
                <span class="key" id="KeyC">c</span>
                <span class="key" id="KeyV">v</span>
                <span class="key" id="KeyB">b</span>
                <span class="key" id="KeyN">n</span>
                <span class="key" id="KeyM">m</span>
                <span class="key" id="Comma">,</span>
                <span class="key" id="Period">.</span>
                <span class="key" id="Slash">/</span>
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
                <span class="key key--primary" id="Language">EN</span>
            </div>
        </div>
        <p class="text mb-1">Клавиатура создана в операционной системе Windows</p>
        <p class="text">Для переключения языка: левые Ctrl + Alt или клавиша указывающая на текущий язык</p>
    </div>
</div>`