var toggleBtn = document.getElementById('toggleBtn');

var lengthCmInput = document.getElementById('lengthCm');
var lengthFtInput = document.getElementById('lengthFt');
var lengthInInput = document.getElementById('lengthIn');
var widthCmInput = document.getElementById('widthCm');
var widthFtInput = document.getElementById('widthFt');
var widthInInput = document.getElementById('widthIn');

var calculateBtn = document.getElementById('calculateBtn');

var modal = document.getElementById('resultModal');
var closeBtn = document.querySelector('.close');

toggleBtn.addEventListener('click', function(){
    if (toggleBtn.textContent === 'cm'){
        toggleBtn.textContent = 'feet + inch';
    } 
    else{
        toggleBtn.textContent = 'cm';
    }
    toggleBtn.classList.toggle('active');
    var toggleInputContainers = document.querySelectorAll('.toggle-input-container');
    toggleInputContainers.forEach(function(container) {
        container.classList.toggle('hidden');
    });
});

function calculateArea(){
    var selectedType = toggleBtn.classList.contains('active') ? 'cm' : 'ftin';
    var length, width, feet, inches;

    if (selectedType === 'cm'){
        length = parseFloat(lengthCmInput.value);
        width = parseFloat(widthCmInput.value);
    }
    else{
        feet = parseFloat(lengthFtInput.value), inches = parseFloat(lengthInInput.value);
        length = feet * 12 + inches;
        feet = parseFloat(widthFtInput.value), inches = parseFloat(widthInInput.value);
        width = feet * 12 + inches;
    }

    var area = length * width;

    var resultElement = document.getElementById('result');

    if(selectedType === 'cm'){
        resultElement.textContent = 'Area: ' + area.toFixed(2) + ' cm^2';
    }
    else{
        resultElement.textContent = 'Area: ' + area.toFixed(2) + ' inch^2';
    }
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}

calculateBtn.addEventListener('click', calculateArea);
closeBtn.addEventListener('click', closeModal);
