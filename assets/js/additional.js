document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('.dropdown a');
  const viewer = document.getElementById('file-viewer');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const filePath = this.getAttribute('data-file');

      // Clear previous content
      viewer.innerHTML = "";

      if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg') || filePath.endsWith('.png')) {
        // Show image
        const img = document.createElement('img');
        img.src = filePath;
        img.style.maxWidth = '100%';
        viewer.appendChild(img);
      } else {
        // Fallback for unsupported types
        viewer.innerHTML = "<p>Unsupported file type.</p>";
      }
    });
  });
});