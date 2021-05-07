// Your code goes here
const pageWheel = document.querySelector('.body')
pageWheel.addEventListener('wheel', () => {
    pageWheel.style.backgroundColor = 'gold'
    setTimeout(() => {
        pageWheel.style.backgroundColor = 'white'
    }, 3000)
})

const nav = document.querySelector('.nav')
nav.addEventListener('mouseenter', () => {
    nav.style.backgroundColor = 'yellow'
    setTimeout( () => {
        nav.style.backgroundColor = 'white'
    }, 3000)
})

nav.addEventListener('click', () => {
    nav.style.backgroundColor = 'blue'
    setTimeout(() => {
        nav.style.backgroundColor = 'white'
    }, 3000)
})

const header = document.querySelector('.main-navigation')
header.addEventListener('mouseenter', () => {
    header.style.color = 'yellow'
    setTimeout( () => {
        header.style.color = 'black'
    }, 3000)
})

header.addEventListener('mouseover', () => {
    header.style.backgroundColor = 'red'
    setTimeout(() => {
        header.style.backgroundColor = 'white'
    }, 3000)
})

const body = document.querySelector('.intro')
console.log(body)
body.addEventListener('click', () => {
    body.style.color = 'green'
    setTimeout( () => {
        body.style.color = 'black'
    }, 3000)
})

const textColor = document.querySelector('.content-section')
textColor.addEventListener('dblclick', () => {
    textColor.style.color = 'red'
    setTimeout( () => {
        textColor.style.color = 'black'
    }, 3000)
})

const button = document.querySelector('.btn')
button.addEventListener('mouseenter', () => {
    button.style.color = 'yellow'
    setTimeout(() => {
        button.style.color = 'black'
    }, 3000)
})

const buttonTwo = document.querySelector('.two')
buttonTwo.addEventListener('mouseenter', (e) => {   
    buttonTwo.style.color = 'green'
    setTimeout(() => {
        buttonTwo.style.color = 'black'
    }, 3000)
})

const buttonThree = document.querySelector('.three')
buttonThree.addEventListener('mouseenter', (e) => {
    buttonThree.style.color = 'red'
    setTimeout(() => {
        buttonThree.style.color = 'black'
    }, 3000)
})

const busImg = document.querySelector(".bus");
busImg.addEventListener("mouseover", () => {
    busImg.style.transform = "scale(1.2)"
    busImg.style.transition = "all 0.3s"
});

busImg.addEventListener('mouseleave', () => {
    busImg.style.transform = 'scale(1)'
})

// added new element to the DOM using JS
const newNavItem = document.createElement('a')
newNavItem.classList.add('nav-link');
newNavItem.textContent = 'Bus';
console.log(newNavItem)
nav.prepend(newNavItem)

// e = event
// Array.from(document.links).forEach( link => {
//     link.addEventListener('clcik', (e) => {
//         console.log('Stopping page from reloading on click')
//         e.preventDefault();
//     })
// })