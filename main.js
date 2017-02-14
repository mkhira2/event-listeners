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
		if (navState.showing) {
			navMenu.style.opacity = '0'
			navState.showing = false
			button.innerHTML = 'show nav'
		}
		else {
			navMenu.style.opacity = '1'
			navState.showing = true
			button.innerHTML = 'hide nav'
		}
		
}) 

// ********************
// TASK #2
// ********************

var textBox = document.querySelector('.text-box')
var guestList = document.querySelector('.guest-list')
var enter = 13

textBox.addEventListener('keydown', function(eventObj) {
	if (eventObj.keyCode === enter) {
		var liNode = document.createElement('li')
		guestList.appendChild(liNode)
		liNode.innerHTML = eventObj.target.value
		liNode.className = 'guest'
		eventObj.target.value = ''
	}
})

// ********************
// TASK #3
// ********************

var textBox2 = document.querySelector('.text-box2')
var guestList = document.querySelector('#add-guest-bonus .guest-list')
var enter = 13

textBox2.addEventListener('keydown', function(eventObj) {
	if (eventObj.keyCode === enter) {
		var liNode = document.createElement('li')
		guestList.appendChild(liNode)
		liNode.innerHTML = eventObj.target.value
		liNode.className = 'guest'
		eventObj.target.value = ''

		var removeButton = document.createElement('button')
		removeButton.innerHTML = 'X'
		liNode.appendChild(removeButton)

		removeButton.addEventListener('click', function(eventObj) {
			guestList.removeChild(liNode)
		})
	}

})








