// The HTML markup is 
// <body>
//     <ul id="myList">
//         <li>Apple</li>
//     </ul>
//     <script src="script.js"></script>
// </body>

// Now the Javascript 
// Getting the parent element reference ul, to which we want to append the child li 
const myList = document.getElementById('myList')

// Creating the child element li
let newListItem = document.createElement('li')

// Setting the text content of the child element 
newListItem.textContent = "Banana"

// Appending the child element li to the parent element ul
myList.appendChild(newListItem)

// Making an array display its items as a li in the ul tag
const fruitList = ['apple', 'banana', 'mango', 'pineapple']

for(let fruit of fruitList){
    let newItem = document.createElement('li')
    newItem.textContent = fruit
    myList.appendChild(newItem)
}
