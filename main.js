// GO!

// ********************
// TASK #1
// ********************

var navMenu = document.querySelector('.nav-menu')
var hideNav = document.querySelector('.nav-menu-hidden')
var button = document.querySelector('.nav-button')

var navState = {
    showing: true
}

button.addEventListener('click', function() {
    if (navState.showing) {				// if nav bar is visible
        navMenu.style.opacity = '0'		// make nav bar invisible
        navState.showing = false		// set nav bar showing to false
        button.innerHTML = 'show nav'	// change text on button
    } else {							// if nav bar is invisible
        navMenu.style.opacity = '1'		// make nav bar visible
        navState.showing = true			// set nav bar showing to true
        button.innerHTML = 'hide nav'	// change text on button
    }

})

// ********************
// TASK #2
// ********************

var textBox = document.querySelector('.text-box')
var guestList = document.querySelector('.guest-list')
var enter = 13

textBox.addEventListener('keydown', function(eventObj) {	
    if (eventObj.keyCode === enter) {				// if you press enter after inputing text...
        var liNode = document.createElement('li')	// creates a list item node
        guestList.appendChild(liNode)				// ...make the list item appear under guest list
        liNode.innerHTML = eventObj.target.value	// accesses the text in the text field
        liNode.className = 'guest'					// gives list item node a class (unused)
        eventObj.target.value = ''					// resets text field after entry
    }
})

// ********************
// TASK #3
// ********************

var textBox2 = document.querySelector('.text-box2')
var guestList2 = document.querySelector('#add-guest-bonus .guest-list')
var enter = 13

textBox2.addEventListener('keydown', function(eventObj) {
    if (eventObj.keyCode === enter) {								// if you press enter after inputing text...
        var liNode = document.createElement('li')					// creates a list item node
        guestList2.appendChild(liNode)								// ...make the list item appear under guest list
        liNode.innerHTML = eventObj.target.value					// access the text in the text field
        liNode.className = 'guest2'									// gives list item node a class (unused)
        eventObj.target.value = ''									// resets text field after entry

        var removeButton = document.createElement('button')			// create remove button (styles in css)
        removeButton.innerHTML = 'X'								// give button an 'X'
        liNode.appendChild(removeButton)							// place button after each list item

        removeButton.addEventListener('click', function(eventObj) {	// when you press the remove button...
            guestList2.removeChild(liNode)							// ...remove the corresponding list item
        })
    }

})
