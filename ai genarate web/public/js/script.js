document.getElementById('lead-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const leadData = {
        name: event.target.name.value,
        email: event.target.email.value,
        brand: event.target.brand.value,
        referrer: event.target.referrer.value
    };

    fetch('/submit-lead', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(leadData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Thank you for your interest! We will get in touch with you soon.');
                event.target.reset();
            } else {
                alert('There was an issue with your submission. Please try again.');
            }
        })
        .catch(error => console.error('Error:', error));
});