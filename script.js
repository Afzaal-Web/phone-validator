const checkButton = document.getElementById('check-btn');
const userInput = document.getElementById('user-input');
const clearButton = document.getElementById('clear-btn');
const resultDiv = document.getElementById('results-div');


checkButton.addEventListener('click', () => {
    !userInput.value.trim() ? alert("Please provide a phone number") : showResult()
})

clearButton.addEventListener('click', () => resultDiv.textContent = "");

userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        !userInput.value.trim() ? alert("Please provide a phone number") : showResult()
    }
})

const regex = /^\+?1?\s*(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/

const showResult = () => {
    const limitpTags = resultDiv.querySelectorAll('p');
    const existingWarning = document.querySelector('.warningAdded');
    
   if (limitpTags.length >= 3) {
    if (!existingWarning) {
        const hrWrapper = document.createElement('div');
        hrWrapper.classList.add('hrParent');
        const hr = document.createElement('hr');
        const warningP = document.createElement('p');
        warningP.classList.add('warningAdded');
        warningP.innerText = 'Please clear previous results.';
        warningP.style.color = '#e68a00';

        hrWrapper.appendChild(hr)
        resultDiv.appendChild(hrWrapper);
        resultDiv.appendChild(warningP);
        userInput.value = '';
        return;
    }

    // If warning already exists, just stop further appending
    userInput.value = '';
    return;
}
    const pTag = document.createElement('p');
    const isValid = regex.test(userInput.value);
    pTag.innerText = isValid
        ? `Valid US number: ${userInput.value}`
        : `Invalid US number: ${userInput.value}`;
    pTag.style.color = isValid ? '#07a543' : '#df2f05';

    resultDiv.appendChild(pTag);
    userInput.value = '';
};


/* 
1 555-555-5555
1 (555) 555-5555
1(555)555-5555
1 555 555 5555
5555555555
555-555-5555
(555)555-5555 
*/
