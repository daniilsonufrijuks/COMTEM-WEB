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
    if (query === 'about us') {
        window.location.href = '../about/about.html';
    } else if (query === 'home') {
        window.location.href = '../home/index.html';
    } else if (query === 'contacts') {
        window.location.href = '../contacts/contacts.html';
    } else if (query === 'discounts') {
        window.location.href = '../discounts/discounts.html';
    } else if (query === 'market') {
        window.location.href = '../../html/market/market.html';
    } else if (query === 'giveaways') {
        window.location.href = '../giveaw/giveaw.html';
    } else {
        alert('Page not found');
    }
}

// Add event listener to the search form
document.getElementById('searchForm').addEventListener('submit', handleSearch);