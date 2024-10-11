document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        //Add Variables from index.html (hint: Use document.get function)

        // Get the values from the input fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
         
        
        
        if (name && email && message) {
            alert(`Form submitted successfully!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
        } else {
            alert('Please fill all the fields');
        }
    });
});
//Add additional fields
