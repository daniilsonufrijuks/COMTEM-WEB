const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');
const minSlider = document.getElementById('minSlider');
const maxSlider = document.getElementById('maxSlider');
const filterPriceBtn = document.getElementById('filterPriceBtn');

// Function to handle changes in the sliders
function updateSliders() {
    const minPrice = parseInt(minPriceInput.value);
    const maxPrice = parseInt(maxPriceInput.value);

    if (minPrice >= maxPrice) {
        minPriceInput.value = maxPrice - 1; // Prevent overlap
    }

    if (maxPrice <= minPrice) {
        maxPriceInput.value = minPrice + 1; // Prevent overlap
    }

    minSlider.value = minPriceInput.value;
    maxSlider.value = maxPriceInput.value;
}

// Function to handle changes in the number inputs
function updateInputs() {
    const minSliderValue = parseInt(minSlider.value);
    const maxSliderValue = parseInt(maxSlider.value);

    if (minSliderValue >= maxSliderValue) {
        minSlider.value = maxSliderValue - 1; // Prevent overlap
    }

    if (maxSliderValue <= minSliderValue) {
        maxSlider.value = minSliderValue + 1; // Prevent overlap
    }

    minPriceInput.value = minSlider.value;
    maxPriceInput.value = maxSlider.value;
}

// Attach event listeners to the input fields and sliders
minPriceInput.addEventListener('input', updateSliders);
maxPriceInput.addEventListener('input', updateSliders);
minSlider.addEventListener('input', updateInputs);
maxSlider.addEventListener('input', updateInputs);

// Button to submit the price filter
filterPriceBtn.addEventListener('click', function() {
    const minPrice = minPriceInput.value;
    const maxPrice = maxPriceInput.value;
    alert(`Filter products with price between €${minPrice} and €${maxPrice}`);
    // You can replace this alert with an AJAX request or form submission logic
});