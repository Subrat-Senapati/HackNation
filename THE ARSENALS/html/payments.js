// Add event listener to the "Add New Card" button
document.querySelector(".payment-method:first-child button").addEventListener("click", function() {
    // Prompt the user to enter their card details
    var cardNumber = prompt("Enter your card number:");
    var expiryDate = prompt("Enter your card expiry date:");
    var cvv = prompt("Enter your CVV:");
});
    // Check if the card number