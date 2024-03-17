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

export default elementGenerator;