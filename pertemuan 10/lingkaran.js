function Hitung() {
    const jari = parseInt(document.getElementById('jari').value);
    const operator = document.getElementById('operator').value;
    let hasil = 0;
    if(operator =='luaslingkaran'){
        hasil = 3.14 * jari**2
    } else{
    hasil = 2 * 3.14 * jari              
    }
    document.getElementById('output').innerHTML = hasil;
}