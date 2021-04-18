// DOM elements
const placeholder = document.querySelector('.placeholder');
const editable = document.querySelector('.editable');
const readOnly = document.querySelector('.read-only');
const counter = document.querySelector('.counter');
const btnTweet = document.querySelector('.btn-tweet');

// Event listener
editable.addEventListener('keyup', (e) => {
  // Get keyup  element
  let element = e.target;
  
  checkInput(element);
});

editable.addEventListener('keypress', (e) => {
  let element = e.target; 

  checkInput(element);

  placeholder.style.display = 'none';
});



function checkInput(element) {
  // Waist text (U can put 5 to make a test)
  let maxLength = 100;
  // Get text length of keyup element
  let currentTextLength = element.innerText.length;
  // console.log(currentTextLength);

  let textTag = element.innerHTML;
  // console.log(textTag);

  if(currentTextLength <= 0) {
    placeholder.style.display = 'block';
    counter.style.display = 'none';
    btnTweet.classList.remove('active');
  } else {
    counter.style.display = 'block';
    placeholder.style.display = 'none';
    btnTweet.classList.add('active');
  }

  // Get new Counter
  counter.innerText = maxLength - currentTextLength;

  if(currentTextLength > maxLength) {
    // Exact over text
    let overText = element.innerText.substr(maxLength);
    // console.log(overText);
    // Creat new span and pass overText
    overText = `<span class="highLight">${overText}</span>`;
    // Replace innerHTML of editable with new span
    textTag = element.innerText.substr(0, maxLength) + overText;
    // console.log(textTag);

    readOnly.style.zIndex = "1";
    counter.style.color = "#e0245e";
    btnTweet.classList.remove('active');
  } else {
    readOnly.style.zIndex = "1";
    counter.style.color = "#333";
  }

  // Replace innerHTML read-only with new span with over texts
  readOnly.innerHTML = textTag;
}