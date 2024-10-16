function createResume() {
    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const website = document.getElementById("website").value;
    const skills = document.getElementById("skills").value.split(',');
    const degree = document.getElementById("degree").value;
    const university = document.getElementById("university").value;
    const graduationDate = document.getElementById("graduation-date").value;
    const jobTitle = document.getElementById("job-title").value;
    const company = document.getElementById("company").value;
    const jobDuration = document.getElementById("job-duration").value;
    const jobDescription = document.getElementById("job-description").value.split(',');

    // Store data in session storage to access in the resume page
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('phone', phone);
    sessionStorage.setItem('address', address);
    sessionStorage.setItem('website', website);
    sessionStorage.setItem('skills', JSON.stringify(skills));
    sessionStorage.setItem('degree', degree);
    sessionStorage.setItem('university', university);
    sessionStorage.setItem('graduationDate', graduationDate);
    sessionStorage.setItem('jobTitle', jobTitle);
    sessionStorage.setItem('company', company);
    sessionStorage.setItem('jobDuration', jobDuration);
    sessionStorage.setItem('jobDescription', JSON.stringify(jobDescription));

    // Redirect to the resume page
    window.location.href = 'resume.html';
}

function populateResume() {
    // Retrieve data from session storage
    const name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');
    const phone = sessionStorage.getItem('phone');
    const address = sessionStorage.getItem('address');
    const website = sessionStorage.getItem('website');
    const skills = JSON.parse(sessionStorage.getItem('skills'));
    const degree = sessionStorage.getItem('degree');
    const university = sessionStorage.getItem('university');
    const graduationDate = sessionStorage.getItem('graduationDate');
    const jobTitle = sessionStorage.getItem('jobTitle');
    const company = sessionStorage.getItem('company');
    const jobDuration = sessionStorage.getItem('jobDuration');
    const jobDescription = JSON.parse(sessionStorage.getItem('jobDescription'));

    // Populate fields on the resume page
    document.getElementById('name-display').innerText = name;
    document.getElementById('email-display').innerText = email;
    document.getElementById('phone-display').innerText = phone;
    document.getElementById('address-display').innerText = address;
    document.getElementById('website-display').innerText = website;
    document.getElementById('website-display').href = website;
    document.getElementById('degree-display').innerText = degree;
    document.getElementById('university-display').innerText = university;
    document.getElementById('graduation-date-display').innerText = graduationDate;
    document.getElementById('job-title-display').innerText = jobTitle;
    document.getElementById('company-display').innerText = company;
    document.getElementById('job-duration-display').innerText = jobDuration;

    // Populate skills
    const skillsList = document.getElementById('skills-display');
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });

    // Populate job description
    const jobDescList = document.getElementById('job-description-display');
    jobDescription.forEach(desc => {
        const li = document.createElement('li');
        li.textContent = desc.trim();
        jobDescList.appendChild(li);
    });
}

// Automatically populate the resume if on resume page
if (window.location.pathname.includes('resume.html')) {
    populateResume();
}
