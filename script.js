const checkButton = document.getElementById('check-btn');
const userInput = document.getElementById('user-input');
const clearButton = document.getElementById('clear-btn');
const resultDiv = document.getElementById('results-div');

checkButton.addEventListener('click', () => {
!userInput.value.trim() ? alert("Please provide a phone number") : showResult()
})

clearButton.addEventListener('click', () => resultDiv.textContent = "");

userInput.addEventListener('keydown', (e) => {
if(e.key === 'Enter'){
showResult();
}
})

const regex = /^1?\s*(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/


const showResult = () => {
    const pTag = document.createElement('p');
    resultDiv.appendChild(pTag);
if(regex.test(userInput.value)){
    resultDiv.textContent += `Valid US number: ${userInput.value} \n`;
     
     pTag.style.color = '#00471b';
}else{
resultDiv.textContent += `InValid US number: ${userInput.value} \n`;
pTag.style.color = '#4d3800'
}
userInput.value = '';
}

/* 
1 555-555-5555
1 (555) 555-5555
1(555)555-5555
1 555 555 5555
5555555555
555-555-5555
(555)555-5555 
*/
