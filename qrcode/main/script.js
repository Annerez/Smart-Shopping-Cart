// Load the Instascan library
const scanner = new Instascan.Scanner({ video: document.getElementById('preview') });

// Listen for QR code scans
scanner.addListener('scan', function(content) {
  // Display the scanned QR code content
  document.getElementById('result-container').innerText = content;
});

// Start the scanner when the "Scan QR Code" button is clicked
document.getElementById('scan-button').addEventListener('click', function() {
  Instascan.Camera.getCameras().then(function(cameras) {
    if (cameras.length > 0) {
      scanner.start(cameras[0]);
    } else {
      console.error('No cameras found.');
    }
  }).catch(function(e) {
    console.error(e);
  });
});
