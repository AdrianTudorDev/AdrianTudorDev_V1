const btntgg = document.querySelector('#btn-container');
const btntggCircle = document.querySelector('#btn-circle');
const body = document.querySelector('body');

function darkLightMode() {  
    body.classList.toggle('night');
    btntggCircle.classList.toggle('night-btn-circle');
    btntgg.classList.toggle('btn-container-hidden-side-nav-night');
};

const fileInput = document.querySelector('#fileInput');

// fileInput.addEventListener('change', e => {
//   const file = fileInput.files[0];
//   const reader = new FileReader();

//   reader.addEventListener('load', () => {
//     console.log(reader.result);
//   });
//   reader.readAsDataURL(file)
// });