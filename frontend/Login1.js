var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("but");
var w = document.getElementById("box");

function Uregister() {
  x.style.left = "-31.25rem";
  y.style.left = "2.188rem";
  z.style.left = "6.875rem";
  w.style.height = "29rem";
}

function Ulogin() {
  x.style.left = "2.188rem";
  y.style.left = "31.25rem";
  z.style.left = "0rem";
  w.style.height = "19rem";
}

//--------------------------------------------------------------------------------------------------------------------

const pwShowHide = document.querySelectorAll(".showHidePw"), // for Eye Icon
  pwFields = document.querySelectorAll(".pswd"); // for the password to text

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwFields) => { // for the password to text
      
      if (pwFields.type === "password") {
        pwFields.type = "text"; // for the password to text
        pwShowHide.forEach((icon) => { // for Eye Icon
          icon.classList.replace("uil-eye-slash", "uil-eye"); // for Eye Icon
        });
      } 

      else {
        pwFields.type = "password"; // for the password to text
        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash"); // for Eye Icon
        });
      }

    });
  });
});

//--------------------------------------------------------------------------------------------------------------------

var randomBackground = Math.ceil(Math.random() * 30);

var backgroundimg = "ProjectImages/background" + randomBackground + ".jpg";

var style = document.createElement('style');

style.innerHTML = `
  .container::before {
    background: url('${backgroundimg}') no-repeat center center/cover;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.3;
  }
`;

document.head.appendChild(style);

//--------------------------------------------------------------------------------------------------------------------

async function submitUserRegisterForm() {
  const username = document.querySelector('.Uname').value;
  const email = document.querySelector('.Uemail').value;
  const number = document.querySelector('.Uphone').value;
  const password = document.querySelector('.Upassword').value;

  try {
    const URresponse = await fetch('http://localhost:5000/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, number, password }),
    });

    console.log('Server response:', URresponse);

    if (!URresponse.ok) {
      console.error('Server responded with error:', URresponse.status);
      throw new Error('Failed to register user');
    }

    const data = await URresponse.json();
    console.log('Registration successful:', data);
    alert('Registration successful!!');
    // alert('Registration successful!');

  } catch (error) {
    console.error('Error submitting registration:', error.message);
    alert('Registration failed.');
  }
}

//----------------------------------------------------------------

async function submitUserLoginForm() {
  const email = document.querySelector('.ULemail').value;
  const password = document.querySelector('.ULpassword').value;

  try {
    const ULresponse = await fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    console.log('Server response:', ULresponse);

    if (!ULresponse.ok) {
      console.error('Server responded with error:', ULresponse.status);
      throw new Error('Failed to log in');
    }

    const data = await ULresponse.json();
    console.log('Login successful:', data);
    alert('Login successful!!');

    window.location.href = 'Homepage.html';

  } catch (error) {
    console.error('Error submitting login:', error.message);
    alert('Login failed.');
  }
}

document.querySelector('.RegBtn').addEventListener('click', function (event) {
  console.log('Register Button clicked');
  event.preventDefault();
  submitUserRegisterForm();
});

document.querySelector('.LoginBtn').addEventListener('click', function (event) {
  console.log('Login Button clicked');
  event.preventDefault();
  submitUserLoginForm();
});
