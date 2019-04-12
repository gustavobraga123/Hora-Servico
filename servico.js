function calcularValor(){
    let salario,custo,carga,valor
    salario = parseFloat(frmServico.txtSalario.value.replace(",","."))
    custo = parseFloat(frmServico.txtCusto.value.replace(",","."))
    carga = parseFloat(frmServico.txtHora.value.replace(",","."))
    valor = (((salario * 30) / 100) + ((salario * 20) / 100) + salario + custo) / carga 
    frmServico.txtResultado.value = valor.toFixed(2)

}