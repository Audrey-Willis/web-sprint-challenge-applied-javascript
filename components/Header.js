// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
 
const appendHereHeader = document.querySelector('.header-container')

function Header() {
    
    const mainDiv = document.createElement('div')
    const date = document.createElement('span')
    const h1 = document.createElement('h1')
    const temp = document.createElement('span')

    mainDiv.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')

    date.textContent = 'March 28, 2020'
    h1.textContent = 'Lambda Times'
    temp.textContent= '98˚'

    mainDiv.appendChild(date)
    mainDiv.appendChild(h1)
    mainDiv.appendChild(temp)
    
    return mainDiv

}
appendHereHeader.appendChild(Header());
    

