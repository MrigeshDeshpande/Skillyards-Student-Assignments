// function filterMenu(category) {
//     const menuItems = document.querySelectorAll('.menu-item');
    
//     for (let item of menuItems) {
//         if (category === 'all') {
//             item.classList.remove('hidden');
//             continue;
//         }
        
//         const itemCategory = item.dataset.category;
//         if (itemCategory === category) {
//             item.classList.remove('hidden'); 
//         } else {
//             item.classList.add('hidden'); 
//         }
//     }
// }




// const searchBox = document.getElementById('searchBox');
// const menuItems = document.querySelectorAll('.menu-item');

// console.log(searchBox, menuItems);
// searchBox.addEventListener('input', () => {
//   const searchTerm = searchBox.value.toLowerCase(); 
//   console.log(searchTerm,'searchTerm');
//   menuItems.forEach(item => {
//     const itemText = item.textContent; 
//     console.log(itemText,'itemText');
//     item.hidden = !itemText.includes(searchTerm);  
// });
// });
















// Get DOM elements once at the start
const searchBox = document.getElementById('searchBox');
const menuItems = document.querySelectorAll('.menu-item');

// Current active filter state
let currentCategory = 'all';
let currentSearchTerm = '';

// Combined filter function
function applyFilters() {
  menuItems.forEach(item => {
    // Check category filter
    const categoryMatch = currentCategory === 'all' || 
                         item.dataset.category === currentCategory;
    
    // Check search filter
    const searchMatch = item.textContent.toLowerCase()
                         .includes(currentSearchTerm);
    
    // Show only items that match both filters
    item.hidden = !(categoryMatch && searchMatch);
  });
}


// Category filter handler
function filterMenu(category) {
  currentCategory = category;
  applyFilters();
}

// Search input handler
searchBox.addEventListener('input', () => {
  currentSearchTerm = searchBox.value.toLowerCase();
  applyFilters();
});