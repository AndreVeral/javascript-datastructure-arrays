var lista = ["Banana", "Maçã", "Laranja", "Amora"];
console.log("Lista inicial: " + lista);
lista.shift();
lista.sort();
lista.push("Kiwi");
lista.splice(2, 1);
lista.reverse();
console.log("Lista final: " + lista);

var lista2 = ["Banana", ["Maçã", ["Laranja"], "Amora"]];


console.log(lista2[1][1][0]);