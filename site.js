const setState = updateObject => {
    Object.keys(updateObject).map(key => {
        if (! state[key].hasOwnProperty) {
            throw Error(`State has no such property: ${key}`)
        }
    })

    state = {...updateObject};
}

const scrollTo = element => {
    const { offsetLeft, offsetTop } = element
    
    window.scrollTo({ 
        top: offsetTop, 
        left: offsetLeft, 
        behavior: 'smooth',
    })
}

const onCallToAction = aboutSection => {
    return event => {
        event.preventDefault()
        scrollTo(aboutSection)
    }
}

function App () {
    const sections = [...document.querySelectorAll('section')]
    const aboutSection = sections[1];
    const contactSection = sections[2];
    const scrollIntroductionClickButton = document.querySelector('.scroll-introduction-btn')
    const scrollAboutClickButton = document.querySelector('.scroll-about-btn')

    scrollIntroductionClickButton.addEventListener('click', onCallToAction(aboutSection));
    scrollAboutClickButton.addEventListener('click', onCallToAction(contactSection));
}

document.addEventListener('DOMContentLoaded', App);