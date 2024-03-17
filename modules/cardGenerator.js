import elementGenerator from "./elementGenerator.js"


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

export default cardContainer;