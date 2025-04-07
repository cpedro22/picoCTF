document.addEventListener('DOMContentLoaded', () => {
    const flagForm = document.getElementById('flag-form');
    const flagInput = document.getElementById('flag-input');
    const flagResult = document.getElementById('flag-result');

    const correctFlag = 'ITC101{1maF15Hand1mG0ld3n}';

    flagForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userFlag = flagInput.value.trim();

        if (userFlag === correctFlag) {
            flagResult.textContent = 'Congratulations! The flag is correct!';
            flagResult.style.color = 'green';
        } else {
            flagResult.textContent = 'Sorry, that flag is incorrect. Please try again.';
            flagResult.style.color = 'red';
        }
    });
});
