function contar() {
    var ini = Number(document.querySelector('input#inicio').value)
    var fim = Number(document.querySelector('input#fim').value)
    var inc = Number(document.querySelector('input#inc').value)
    var res = document.querySelector('p#res')
    var cal = ''

    if (ini < 0 || fim < 0 || inc <= 0) {
        alert('[ERRO] Insira valores válidos!')
    } else {
        if (ini >= fim) {
            for (ini; ini >= fim; ini -= inc) {
                cal += `${ini} 👉 `
            }
        } else {
            for (ini; ini <= fim; ini += inc) {
                cal += `${ini} 👉 `
            }
        }
        res.style.textAlign = 'center'
        res.textContent = cal + '🏁'
    }
}