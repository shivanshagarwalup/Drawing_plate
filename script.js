// script.js
const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('color');
const brushSize = document.getElementById('brush-size');
const clearBtn = document.getElementById('clear-btn');

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.6;

let isDrawing = false;

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  draw(e);
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
  ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);

colorPicker.addEventListener('input', () => {
  ctx.strokeStyle = colorPicker.value;
});

brushSize.addEventListener('input', () => {
  ctx.lineWidth = brushSize.value;
});

clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function draw(e) {
  if (!isDrawing) return;

  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = colorPicker.value;
  ctx.lineWidth = brushSize.value;

  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}