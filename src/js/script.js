'use strict'

import {template} from './template.js'
import  {VirtualKeyboard} from './virtual-keboard.js'

window.onload = () =>{
    const lang = Number(localStorage.getItem('lang'))
    document.querySelector('body').innerHTML = template(lang)

    const keyboard = document.querySelector('.keyboard'),
        textArea = document.querySelector('.textarea'),
        keysDOM = keyboard.querySelectorAll('.key'),
        languageBtn = document.getElementById('Language')

    const VKeyboard = new VirtualKeyboard(textArea, keysDOM, languageBtn, lang)

    window.onkeydown = (e) => {
        try {
            VKeyboard.pressKey(e.code, document.getElementById(`${e.code}`))
            return false
        } catch (e) {
        }
    }

    window.onkeyup = (e) => {
        try {
            VKeyboard.upKey(e.code, document.getElementById(`${e.code}`))
            return false
        } catch (e) {
        }
    }

    keyboard.onmousedown = (e) => {
        if (!e.target.classList.contains('keyboard__row')) {
            VKeyboard.pressKey(e.target.id, e.target)
        }
    }

    keyboard.onmouseup = (e) => {
        if (!e.target.classList.contains('keyboard__row')) {
            VKeyboard.upKey(e.target.id, e.target)
        }
    }

    textArea.onclick = () => {
        VKeyboard.setPosition(textArea.selectionStart)
    }
}