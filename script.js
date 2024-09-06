document.getElementById('registerForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    try {
        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
            alert('Registration successful!');
            console.log(result);
        } else {
            alert('Error registering: ' + result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error registering');
    }
});

document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
            alert('Login successful!');
            console.log(result);
            // Store the token in localStorage or a cookie
            localStorage.setItem('token', result.token);
        } else {
            alert('Error logging in: ' + result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error logging in');
    }
});
