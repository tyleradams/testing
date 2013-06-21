///<reference path='P.ts' />

var milkTea : P.MilkTea = new P.MilkTea();
var ask : string = milkTea.askForPMT();
console.log(ask);

milkTea = new C.MilkTea();
ask = milkTea.askForPMT();
console.log(ask);
