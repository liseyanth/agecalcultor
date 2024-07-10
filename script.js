document.getElementById('age-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    const dob = new Date(year, month - 1, day);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    const dayDifference = today.getDate() - dob.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    const resultContainer = document.getElementById('result-container');
    const result = document.getElementById('result');
    result.innerText = `Hey ${name}, you are ${age} years old.`;
    resultContainer.classList.remove('hidden');
    setTimeout(() => {
        resultContainer.style.opacity = 1;
    }, 100);
});
