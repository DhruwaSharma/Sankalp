// Get the current date
const today = new Date();

// Format the date
const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long', // e.g., Monday
    year: 'numeric', // e.g., 2025
    month: 'long',   // e.g., January
    day: 'numeric'   // e.g., 4
});

// Insert the formatted date into the HTML element
document.getElementById('current-date').textContent = formattedDate;

const formattedDaten = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

document.getElementById('date-today').value = formattedDaten;


const scriptURL = 'https://script.google.com/macros/s/AKfycbzkdZAd74R1GkXnF--7aKJrreYinc4IGyXJlw4nrXYiFv3iK7PzKj107s1laOT3MpQUeg/exec'

const form = document.forms['Abhinav-Data']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})