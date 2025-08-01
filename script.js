function updateName() {
  const name = document.getElementById("nameInput").value;
  document.getElementById("nameOverlay").textContent = name || "MS Cre8ive";
}

function downloadFlyer() {
  const flyerElement = document.getElementById("flyer");
  html2canvas(flyerElement).then(canvas => {
    const link = document.createElement('a');
    link.download = 'mac2_flyer.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}
