// import cardContainer from "./modules/cardContainer.js";
// import render from "./modules/render.js";


// Card Container
const cardContainer = elementGenerator('div', { class: 'container' })
// Data Structure
const cardData = [
    {
        img: 'image/discord-round-color-icon.png',
        title: 'Discord',
        time: '12 min ago',
        desc: 'hello megademy🙋‍♀️'
    },
    {
        img: 'image/instagram-icon-logo-free-png.webp',
        title: 'Instagram',
        time: '30 min ago',
        desc: 'new post:@sarabook📚'
    },
    {
        img: 'image/Telegram_logo.svg.webp',
        title: 'Telegram',
        time: '59 min ago',
        desc: '😍💫دانلود رایگان فیلم فسیل'
    },
]

function cardGenerator(img, title, time, desc) {
    // Create card Item Div & set CSSClass
    const cardItem = elementGenerator(
        'div',
        { class: 'card' },
        // Childs:
        // Create card Image
        elementGenerator('img', { src: img }),
        // Create card Title
        elementGenerator('p', { class: 'title' }, title),
        // Create card Time
        elementGenerator('span', { class: 'time' }, time),
        // Create card Desc
        elementGenerator('span', { class: 'discription' }, desc),
    )

    return cardItem

}

//============== AutoGenerator ===============

cardData.forEach(card => {
    cardContainer.appendChild(
        cardGenerator(card.img, card.title, card.time, card.desc)
    )
})
cardData.forEach(card => {
    cardContainer.appendChild(
        cardGenerator(card.img, card.title, card.time, card.desc)
    )
})
cardData.forEach(card => {
    cardContainer.appendChild(
        cardGenerator(card.img, card.title, card.time, card.desc)
    )
})

 //===================================

// Dynamic Element Generator
function elementGenerator(tagName, attrbiutes, ...childs) {
    // Create Element
    const element = document.createElement(tagName)

    // Does 'Attrbiutes' parameter exist?
    if (attrbiutes) {
        Object.keys(attrbiutes).forEach(key => {
            element.setAttribute(key, attrbiutes[key])
        })
    }

    // Does 'childs' parameter exist?
    if (childs) {
        childs.forEach(child => {
            if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child))
            } else {
                element.appendChild(child)
            }
        })
    }

    return element
}


// add "render.js" folder to index.js for temporary period
function render(parent, child) {
    parent.appendChild(child)
}

export default render;

render(document.body, cardContainer)