function validate() {
    let flag = true;

    // Validate Name
    if (document.getElementById('name').value === '') {
        document.getElementById('namewarning').style.display = 'inline-block';
        flag = false;
    } else {
        document.getElementById('namewarning').style.display = 'none';
    }

    // Validate Email
    if (document.getElementById('email').value === '') {
        document.getElementById('emailw').style.display = 'inline-block';
        flag = false;
    } else {
        document.getElementById('emailw').style.display = 'none';
    }

    // Validate Password
    if (document.getElementById('password').value === '') {
        document.getElementById('passw').style.display = 'inline-block';
        flag = false;
    } else {
        document.getElementById('passw').style.display = 'none';
    }

    // Validate Address
    if (document.getElementById('textarea').value === '') {
        document.getElementById('textareawarning').style.display = 'inline-block';
        flag = false;
    } else {
        document.getElementById('textareawarning').style.display = 'none';
    }

    // Validate Gender
    if (!document.querySelector('input[name="gender"]:checked')) {
        document.getElementById('genderw').style.display = 'inline-block';
        flag = false;
    } else {
        document.getElementById('genderw').style.display = 'none';
    }

    // Validate Hobbies
    if (!document.querySelector('input[name="hobby"]:checked')) {
        document.getElementById('checkboxwarning').style.display = 'block';
        flag = false;
    } else {
        document.getElementById('checkboxwarning').style.display = 'none';
    }

    // Submit the form if all validations are successful
    if (flag) {
        document.getElementById('form').submit();
        alert("Form submitted successfully");
    }
}
