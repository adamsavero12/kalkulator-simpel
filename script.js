var n1 = Number(prompt("Masukkan Angka Pertama"));
var operator = prompt("Masukkan Operator + - * /");
var n2 = Number(prompt("Masukkan Angka Kedua"));

var hasil;
if (operator == "+") {
    if (!isNaN(n1) && !isNaN(n2)) {
        var hasil = n1 + n2;
        document.write("Hasil: " + hasil);
    } else {
        alert("ERROR")
    }
} else if (operator == "-") {
    if (!isNaN(n1) && !isNaN(n2)) {
        var hasil = n1 - n2;
        document.write("Hasil: " + hasil);
    } else {
        alert("ERROR")
    }
} else if (operator == "*") {
    if (!isNaN(n1) && !isNaN(n2)) {
        var hasil = n1 * n2;
        document.write("Hasil: " + hasil);
    } else {
        alert("ERROR")
    }
} else if (operator == "/") {
    if (!isNaN(n1) && !isNaN(n2)) {
        var hasil = n1 / n2;
        document.write("Hasil: " + hasil);
    } else {
        alert("ERROR")
    }
} else {
    alert("ERROR")
}