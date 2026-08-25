const canvas = document.querySelector('.signature-pad');
const form = document.querySelector('.signature-pad-form');
const clearButton = document.querySelector('.clear-button');
const saveButton = document.querySelector('.save-button');

const ctx = canvas.getContext('2d');

let writingMode = false;
let submittedSignature = null;

// Drawing settings
ctx.lineWidth = 3;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = '#222';

// Get mouse/touch position
const getCursorPosition = (event) => {
  const rect = canvas.getBoundingClientRect();

  const x =
    (event.clientX - rect.left) *
    (canvas.width / rect.width);

  const y =
    (event.clientY - rect.top) *
    (canvas.height / rect.height);

  return [x, y];
};

// Start drawing
const handlePointerDown = (event) => {
  writingMode = true;

  ctx.beginPath();

  const [x, y] = getCursorPosition(event);

  ctx.moveTo(x, y);
};

// Draw
const handlePointerMove = (event) => {
  if (!writingMode) return;

  const [x, y] = getCursorPosition(event);

  ctx.lineTo(x, y);
  ctx.stroke();
};

// Stop drawing
const handlePointerUp = () => {
  writingMode = false;
};

// Canvas events
canvas.addEventListener('pointerdown', handlePointerDown);
canvas.addEventListener('pointermove', handlePointerMove);
canvas.addEventListener('pointerup', handlePointerUp);
canvas.addEventListener('pointerleave', handlePointerUp);


// Submit signature
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Remove previous submitted signature
  if (submittedSignature) {
    submittedSignature.remove();
    submittedSignature = null;
  }

  // Convert canvas to image
  const imageURL = canvas.toDataURL('image/png');

  // Create submitted signature image
  const image = document.createElement('img');

  image.src = imageURL;
  image.alt = 'Submitted signature';
  image.className = 'signature-result';

  // Add image to page
  form.appendChild(image);

  // Store submitted signature
  submittedSignature = image;
});


// Clear signature
clearButton.addEventListener('click', (event) => {
  event.preventDefault();

  // Clear canvas
  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  // Remove submitted signature
  if (submittedSignature) {
    submittedSignature.remove();
    submittedSignature = null;
  }
});


// Save submitted signature
saveButton.addEventListener('click', () => {

  // Make sure a signature has been submitted
  if (!submittedSignature) {
    alert('Please submit your signature first.');
    return;
  }

  // Create download link
  const link = document.createElement('a');

  link.href = submittedSignature.src;
  link.download = 'submitted-signature.png';

  // Start download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
