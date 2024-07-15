async function submitFeedbackForm() {

    const username = document.querySelector('#Uname').value;
    const email = document.querySelector('#Uemail').value;
    const message = document.querySelector('#Umessage').value;
    console.log('Username: ' + username+'\nEmail: ' + email+'\nMessage: ' + message);

    try {
        const response = await fetch('http://localhost:5000/api/users/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, message}),
        });

        console.log('Server Response:', response);

        if (!response.ok) {
            console.log(error) //Feedback submission failed
        }

        const data = await response.json();
        console.log('Feedback submission successful:', data);
        alert('Thank you for your feedback!');

    } catch (error) {
        console.error('Error submitting feedback:', error.message);
        alert('Feedback submission failed');
    }
}

document.querySelector('.Submitbtn').addEventListener('click', function (event) {
    console.log('Button clicked');
    event.preventDefault();
    submitFeedbackForm();
});
