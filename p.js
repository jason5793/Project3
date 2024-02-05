const userName = prompt('Enter your name:');
const welcomeMessage = document.getElementById('welcomeMessage');

welcomeMessage.innerText = `Welcome to Your Home, ${userName || 'Visitor'}!`;
const currentYear = new Date().getFullYear();
const footerMessage = document.getElementById('footerMessage');
footerMessage.innerText += ` - ${currentYear}`;
