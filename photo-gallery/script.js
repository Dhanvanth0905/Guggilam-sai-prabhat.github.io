const reddishButton = document.getElementById('reddish-btn');
const blueishButton = document.getElementById('blueish-btn');
const duplicateButton = document.getElementById('duplicate-btn');
const images = document.querySelectorAll('.gallery img');

// Hide the buttons initially
reddishButton.style.display = 'none';
blueishButton.style.display = 'none';
duplicateButton.style.display = 'none';

let clickedImage = null;

images.forEach(img => {
  img.addEventListener('click', (event) => {
    // Show the buttons
    reddishButton.style.display = 'block';
    blueishButton.style.display = 'block';
    duplicateButton.style.display = 'block';

    // Store the clicked image
    clickedImage = event.target;
  });
});

blueishButton.addEventListener('click', () => {
  if (clickedImage !== null) {
    // Remove the reddish filter class (if it exists)
    clickedImage.classList.remove('reddish');
    
    // Apply the blueish filter class to the clicked image
    clickedImage.classList.add('blueish');
  }
});

reddishButton.addEventListener('click', () => {
  if (clickedImage !== null) {
    // Remove the blueish filter class (if it exists)
    clickedImage.classList.remove('blueish');
    
    // Apply the reddish filter class to the clicked image
    clickedImage.classList.add('reddish');
  }
});

duplicateButton.addEventListener('click', () => {
  if (clickedImage !== null) {
    // Create a new image element
    const newImage = document.createElement('img');

    // Set the source and alt attributes of the new image to the clicked image's source and alt attributes
    newImage.src = clickedImage.src;
    newImage.alt = clickedImage.alt;

    // Create a new div element to wrap the new image
    const newDiv = document.createElement('div');

    // Add a border style to the new div element
    // newDiv.style.border = '2px solid black';
    // newDiv.style.margin = '20px';
    // newDiv.style.float = 'left';
    // newDiv.style.width = '50%';
    // newDiv.style.height = '50%';
    // newDiv.style.objectFit = 'cover';

    // Append the new image to the new div element
    newDiv.appendChild(newImage);

    // Append the new div element to the parent container of the img elements
    const gallery = document.querySelector('.gallery');
    gallery.appendChild(newDiv);
  }
});

function increaseBrightness() {
  var images = document.querySelectorAll('.gallery img');
  for (var i = 0; i < images.length; i++) {
    var brightness = parseFloat(images[i].style.filter.replace('brightness(', '').replace('%)', '')) || 100;
    brightness += 10;
    images[i].style.filter = 'brightness(' + brightness + '%)';
  }
}
function decreaseBrightness() {
  var images = document.querySelectorAll('.gallery img');
  for (var i = 0; i < images.length; i++) {
    var brightness = parseFloat(images[i].style.filter.replace('brightness(', '').replace('%)', '')) || 100;
    brightness -= 10;
    images[i].style.filter = 'brightness(' + brightness + '%)';
  }
}


