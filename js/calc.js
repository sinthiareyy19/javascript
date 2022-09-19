function tombol(operator){
    let frm = document.getElementById('calcForm'),
    a1 = parseFloat(frm.angka1.value),
    a2 = parseFloat(frm.angka2.value),
    tampilHasil = frm.hasil,
    total;

    /*jika bukan angka maka operator ini akan berjalan*/
    if (isNaN(a1) || isNaN(a2)) {
        alert("Inputan harus angka !!!");
        return;
    }

    switch(operator){
        case '+' : total = a1 + a2;
            break;
        case '-' : total = a1 - a2;
            break;
        case '*' : total = a1 * a2;
            break;
        case '/' : total = a1 / a2;
            break;
        case '^' : total = Math.pow(a1, a2);
            break;
        default:
            break;
    }

    tampilHasil.value = total;
}