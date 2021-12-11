"use strict";

function solveEquation(a, b, c) {
  let d = Math.pow(b,2) - (4 * a * c);
  if (d < 0) {
    return [];
  }
  if (d === 0) {
   let x = (-b/(2 * a)); 
    return [x];
  }
  if (d > 0) {
  let x1 = (-b + Math.sqrt(d) )/(2 * a); 
  let x2 = (-b - Math.sqrt(d) )/(2 * a); 
    return [x1,x2];
  }
}
solveEquation();

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}