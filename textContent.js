// textContent vs inneHTML
// Changing the text of an HTML element using textContent
// The HTML markup for this is 
// <body>
//     <h2 id="welcome">Weclome to Home</h2>
// </body>
const wTitle = document.getElementById('welcome') //getting the h1 tag
// wTitle.textContent = "<strong> Welcome to JS </strong>" // We cannot output HTML with textContent
wTitle.textContent = "Welcome to JS"
wTitle.innerHTML = "<em> Welcome to JS </em>" //We can output HTML using innerHTML
