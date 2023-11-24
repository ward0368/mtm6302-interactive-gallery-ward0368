// Event listener for when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {

// Get references to the gallery and high-definition image containers
const galleryContainer = document.getElementById('imageGallery');
const hdImageContainer = document.getElementById('hdImageContainer');

// All images and descriptions for gallery
 const images = [
    { filename: 'alexhonnold-deepwater.png', alt: 'Image of Alex Honnold Deep Water Solo', caption: "Alex Honnold's iconic deep water solo."},
    { filename: '70yearold-elcap.jpg', alt: 'Image of 70 year old climbing El Capitan', caption: "A 70 year old completing a climb of El Capitan."},
    { filename: 'alexhonnold-halfdome.jpg', alt: 'Image of Alex Honnolds Iconic Halfdome stand', caption: "Alex Honnolds Iconic photo of his halfdome stand."},
    { filename: 'bosi-burden.png', alt: 'Image of Will Bosi sending v17 Burden of Dreams', caption: "Will Bosi becoming the 2nd person to ever send Burden of Dreams (V17), the hardest boulder in the world."},
    { filename: 'brooke-climbing.jpg', alt: 'Image of Brooke Rababout climbing indoors', caption: "Brooke Rabatou climbing indoors shortly before becoming a world champion."},
    { filename: 'freesolo.jpg', alt: 'Image of Alex Honnolds Free Solo of El Capitan', caption: "The most iconic and well-known photo worldwide for climbing, Alex Honnold during his free solo of El Capitan."},
    { filename: 'grossman-champion.jpg', alt: 'Image of Natalia Grossman celebrating', caption: "Natalia Grossman after becoming a world champion."},
    { filename: 'honnold-halfdome.jpg', alt: 'Image of Alex Honnold climbing Halfdome', caption: "Alex Honnold climbing Halfdome in 2012."},
    { filename: 'honnold-urban.png', alt: 'Stretched image of Alex Honnold climbing a building', caption: "Alex Honnold climbing a building, apart of his Urban climbing event."},
    { filename: 'sean-climbing.jpg', alt: 'Image of Sean Rabatou climbing', caption: "Sean Rabatou, the worlds strongest boulderer, climbing."},
    { filename: 'tommycald.jpg', alt: 'Image of Tommy Caldwell climbing a compression climb', caption: "Tommy Caldwell, one of the worlds strongest climbers, doing a compression climb."},
    { filename: 'tommycald-yosemite.jpg', alt: 'Image of Tommy Caldwell climbing El Capitan', caption: "Tommy Caldwell climbing El Capitan, a 3000ft mountain in Yosemite."},
 ]
 
 // Loop through each image in the array to create and append gallery items
 images.forEach(function (image, index) {
    // Create a container for each image
    const imageItem = document.createElement('div')
    imageItem.classList.add('image-item')
 
    // Create an image element and set its source, alt attributes, and click event listener
    const imageElement = document.createElement('img')
    imageElement.src = `images/${image.filename}`
    imageElement.alt = 'Gallery Image'
    imageElement.addEventListener('click', function () {
    // Call the function to show the high-definition image on click
      showHdImage(index)
    })
 
    // Append the image to the container and the container to the gallery
    imageItem.appendChild(imageElement)
    galleryContainer.appendChild(imageItem)
  })
 
  // Add a click event listener to the high-definition image container to hide it
  hdImageContainer.addEventListener('click', hideHdImage)
 
  // Function to show the high-definition image based on the index
  function showHdImage(index) {
    // Create an image element for the high-definition image
    const hdImage = document.createElement('img')
    hdImage.src = `images/${images[index].filename}`
    hdImage.alt = images[index].alt
 
    // Create a caption element and set its text content
    const caption = document.createElement('div')
    caption.classList.add('caption')
    caption.innerText = images[index].caption
 
    // Clear the high-definition image container and append the new elements
    hdImageContainer.innerHTML = ''
    hdImageContainer.appendChild(hdImage)
    hdImageContainer.appendChild(caption)
 
    // Append the high-definition image container to the body and display it
    document.body.appendChild(hdImageContainer)
    hdImageContainer.style.display = 'flex'
  }
 
 // Function to hide the high-definition image container
  function hideHdImage() {
    hdImageContainer.style.display = 'none'
  }
 })
 