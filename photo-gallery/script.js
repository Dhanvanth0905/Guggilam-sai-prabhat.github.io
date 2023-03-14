// Get the button and image elements
const reddishButton = document.getElementById('reddish-btn');
const blueishButton = document.getElementById('blueish-btn')
const images = document.querySelectorAll('.gallery img');

// Hide the reddish button initially
reddishButton.style.display = 'none';
blueishButton.style.display = 'none';

// Add a click event listener to each image element
images.forEach(img => {
  img.addEventListener('rightclick', () => {
    // Show the reddish button
    reddishButton.style.display = 'block';
    blueishButton.style.display = 'block';
    
  });
  reddishButton.addEventListener('click', () => {
    // Loop through each image element and apply the reddish filter class
    images.forEach(img => {
      img.classList.add('reddish');
    });
  });
  blueishButton.addEventListener('click', () =>{
    images.forEach(img => {
        img.classList.add('blueish');
      });

  })
});


