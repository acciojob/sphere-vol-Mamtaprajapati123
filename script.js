function volume_sphere() {
  var radius = document.getElementById("radius").value;
  var volume = (4/3) * Math.PI * Math.pow(radius, 3);
  document.getElementById("volume").value = volume.toFixed(2);
}

document.getElementById("MyForm").addEventListener("submit", function(event) {
  event.preventDefault();
  volume_sphere();
});


//window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
