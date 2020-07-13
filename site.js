let state = {
    sections: [],
}

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
        behavior: 'smooth'
    })
}

const onCallToAction = aboutSection => {
    return event => {
        scrollTo(aboutSection);
        event.preventDefault();
    }
}

function App () {
    const sections = [...document.querySelectorAll('section')]
    const aboutSection = sections[1];
    const callToActionButton = document.querySelectorAll('.call-to-action')

    setState({ sections });
    callToActionButton.addEventListener('click', onCallToAction(aboutSection));
   
}

document.addEventListener('DOMContentLoaded', App);