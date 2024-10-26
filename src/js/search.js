// // Function to change the text in the input bar
// function changeInputText(newText) {
//     const searchInput = document.getElementById('searchInput');
//     searchInput.value = newText;
// }

// // Function to handle the search
// function handleSearch(event) {
//     event.preventDefault(); // Prevent the form from submitting

//     const searchInput = document.getElementById('searchInput');
//     const query = searchInput.value.toLowerCase(); // Get the search query and convert to lowercase

//     // Redirect based on the search query
//     if (query === 'about us' || query === 'aboutus' || query === 'about') {
//         window.location.href = '../about/about.html';
//     } else if (query === 'home' ) {
//         window.location.href = '../home/index.html';
//     } else if (query === 'contacts' || query === 'contact') {
//         window.location.href = '../contacts/contacts.html';
//     } else if (query === 'discounts') {
//         window.location.href = '../discounts/discounts.html';
//     } else if (query === 'market') {
//         window.location.href = '../../html/market/market.html';
//     } else if (query === 'giveaways') {
//         window.location.href = '../giveaw/giveaw.html';
//     } else {
//         alert('Page not found');
//     }
// }

// // Add event listener to the search form
// document.getElementById('searchForm').addEventListener('submit', handleSearch);



// List of possible search queries
const searchQueries = [
    'about us',
    'aboutus',
    'about',
    'home',
    'contacts',
    'contact',
    'discounts',
    'market',
    'giveaways',
    'contact us',
    'components',
    'pc',
    'pcs',
    'laptop',
    'laptops',
    'auction'
];

// Function to change the text in the input bar
function changeInputText(newText) {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = newText;
}

// Function to handle the search
function handleSearch(event) {
    event.preventDefault(); // Prevent the form from submitting

    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase(); // Get the search query and convert to lowercase

    // Redirect based on the search query
    if (query === 'about us' || query === 'aboutus' || query === 'about') {
        window.location.href = '../about/about.html';
    } else if (query === 'home' ) {
        window.location.href = '../home/index.html';
    } else if (query === 'contacts' || query === 'contact') {
        window.location.href = '../contacts/contacts.html';
    } else if (query === 'discounts') {
        window.location.href = '../discounts/discounts.html';
    } else if (query === 'market') {
        window.location.href = '../../html/market/market.html';
    } else if (query === 'giveaways') {
        window.location.href = '../giveaw/giveaw.html';
    } else if (query === 'components') {
        window.location.href = '../../html/components/componenets.html';
    } else if (query === 'pc' || query === 'pcs') {
        window.location.href = '../../html/pcs/pcs.html';
    } else if (query === 'laptop' || query === 'laptops') {
        window.location.href = '../../html/laptops/laptops.html';
    } else if (query === 'auction') {
        window.location.href = '../../html/auction/auction.html';
    } else {
        alert('Page not found');
    }
}

// Function to show suggestions
function showSuggestions(event) {
    const searchInput = event.target;
    const query = searchInput.value.toLowerCase();
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';

    if (query.length > 0) {
        const filteredQueries = searchQueries.filter(q => q.includes(query));
        filteredQueries.forEach(q => {
            const li = document.createElement('li');
            li.textContent = q;
            li.addEventListener('click', () => {
                searchInput.value = q;
                suggestions.innerHTML = '';
            });
            suggestions.appendChild(li);
        });
    }
}

// Add event listener to the search form
document.getElementById('searchForm').addEventListener('submit', handleSearch);

// Add event listener to the search input for showing suggestions
document.getElementById('searchInput').addEventListener('input', showSuggestions);