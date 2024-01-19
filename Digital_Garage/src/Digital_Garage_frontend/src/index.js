import { Digital_Garage_backend } from "../../declarations/Digital_Garage_backend";

document.getElementById('vehicleForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const vehicleData = {
      make: document.getElementById('make').value,
      model: document.getElementById('model').value,
      year: document.getElementById('year').value,
      color: document.getElementById('color').value
  };

  console.log('Vehicle Data:', vehicleData);

  // Here you can add code to handle the vehicle data,
  // like sending it to a server or using it to generate the NFT.
});
