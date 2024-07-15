async function submitDineInForm() {

    const username = document.querySelector('#Uname').value;
    const email = document.querySelector('#Uemail').value;
    const number = document.querySelector('#Uphone').value;
    const rdate = document.querySelector('#URdate').value;
    const rtime = document.querySelector('#URtime').value;
    const npeople = document.querySelector('#UGno').value;

    console.log('Username: ' + username+'\nEmail: ' + email+'\nMessage: ' + number + '\nRegistration date: ' + rdate + '\nRegistration time: ' + rtime + 'Number of people: ' + npeople);

    try {
        const response = await fetch('http://localhost:5000/api/users/DineIn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, number, rdate, rtime, npeople}),
        });

        console.log('Server Response:', response);

        if (!response.ok) {
            console.log(error) //Feedback submission failed
        }

        const data = await response.json();
        console.log('Your Dine In response submission successful:', data);
        alert('Your table for Dine In is booked !');

    } catch (error) {
        console.error('Error submitting feedback:', error.message);
        alert('Feedback submission failed');
    }
}

document.querySelector('.Submitbtn').addEventListener('click', function (event) {
    console.log('Button clicked');
    event.preventDefault();
    submitDineInForm();
});
