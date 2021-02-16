'use strict'; 
//base
let body = document.querySelector('body');


function DomElement (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.element = '';
}
let cube;
DomElement.prototype.createElement = function () {
    if (this.selector.startsWith('.')) {
        this.element = document.createElement('div');
        this.element.textContent = "Тут должен быть текст";
        this.element.classList.add(`${this.selector.slice(1)}`);
        this.element.style.cssText = `height: ${this.height};
                                    width: ${this.width};
                                    background: ${this.bg};
                                    font-size: ${this.fontSize};
                                    position: absolute`;
                                    
        body.append(this.element);
        cube = document.querySelector(`.${this.selector.slice(1)}`);

    } else if (this.selector.startsWith('#')) {
        this.element = document.createElement('p');
        this.element.textContent = "Тут должен быть текст";
        this.element.setAttribute('id', `${this.selector.slice(1)}`);
        this.element.style.cssText = `height: ${this.height};
                                    width: ${this.width};
                                    background: ${this.bg};
                                    font-size: ${this.fontSize};
                                    position: absolute`;
        body.append(this.element);
        cube = document.querySelector(`#${this.selector.slice(1)}`);
    }
};

let domElement = new DomElement('.block', '100px', '100px', 'red', '10px');

document.addEventListener('DOMContentLoaded', function () {
    domElement.createElement();
    const element = document.querySelector(domElement.selector);
    let X = 0;
    let Y = 0;
    document.addEventListener('keydown', function (key) {
        if (key.code === 'ArrowRight') {
            X += 10;
            element.style.left = `${X}px`;
        } else if (key.code === 'ArrowDown') {
            Y += 10;
            element.style.top = `${Y}px`;
        } else if (key.code === 'ArrowLeft') {
            X -= 10;
            element.style.left = `${X}px`;
        } else if (key.code === 'ArrowUp') {
            Y -= 10;
            element.style.top = `${Y}px`;
        }
    });
});
