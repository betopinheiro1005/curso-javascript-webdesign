function sum(x, y) {
  return x + y;
}

function mult(x, y) {
  return x * y;
}

function percent(value, total) {
  return mult(value, 100) / total + '%';
}

export { sum, mult, percent };

