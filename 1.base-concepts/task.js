"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b) - (4 * a * c);
  if (d < 0) {return [];}
  if (d == 0) {x = (-b/(2 * a)); return x;}
  if (d > 0) {x1 = (-b + Math.sqrt(d) )/(2 * a); 
    x2 = (-b - Math.sqrt(d) )/(2*a); return [x1,x2]}
  return arr; // array
}
solveEquation();

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}