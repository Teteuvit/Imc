function meuScopo() {

    const saida = document.querySelector('.saida');
    const form = document.querySelector('.container');
    function recebeEventoForm(evento) {
        evento.preventDefault();

        let peso = Number(document.querySelector('.peso').value);
        let alt = Number(document.querySelector('.altura').value);
        let imc = peso / (alt * alt);
        console.log(alt);
        console.log(typeof (alt));

        if (isNaN(peso) || peso == '' ) {
            saida.innerHTML = ('Peso Inválido')

        } else if (isNaN(alt) || alt == '' || alt > 3) {
            saida.innerHTML = ('Altura Inválida')

        }
         else if (imc <= 18.5) {
            saida.innerHTML = (`Imc ${imc.toFixed(2)} - Abaixo do Peso`)

        } else if (imc > 18.5 && imc <= 24.9) {
            saida.innerHTML = (`Imc ${imc.toFixed(2)} - Peso Normal`)

        } else if (imc > 24.9 && imc <= 29.9) {
            saida.innerHTML = (`Imc ${imc.toFixed(2)} - Sobrepeso`)

        } else if (imc > 29.9 && imc <= 34.9) {
            saida.innerHTML = (`Imc ${imc.toFixed(2)} - Obesidade gra 1`)

        } else if (imc > 34.9 && imc <= 39.9) {
            saida.innerHTML = (`Imc ${imc.toFixed(2)} - Obesidade grau 2`)

        }
        
        else (saida.innerHTML = (`Imc ${imc.toFixed(2)} - Obesidade Grau 3`));

    }
    form.addEventListener('submit', recebeEventoForm);

}
meuScopo();