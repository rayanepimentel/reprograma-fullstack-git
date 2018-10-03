const button = document.querySelector(".transacao__button");

button.addEventListener("click", function(event){
  event.preventDefault();


  const tabela = document.querySelector(".extrato__table");
  const inputName = document.querySelector("#transacaoInputName");
  const inputValue = document.querySelector("#transacaoInputMoney");
  const inputDate = document.querySelector("#transacaoInputDate");

  const linha = document.createElement("tr");

  const colunaNome = document.createElement("td");
  const colunaNomeText = document.createTextNode(inputName.value);
  colunaNome.appendChild(colunaNomeText);

  const colunaValor = document.createElement("td");
  const colunaValorText = document.createTextNode(inputValue.value);
  colunaValor.appendChild(colunaValorText);

  const colunaData = document.createElement("td");
  const colunaDataText = document.createTextNode(inputDate.value);
  colunaData.appendChild(colunaDataText);

  linha.appendChild(colunaNome);
  linha.appendChild(colunaValor);
  linha.appendChild(colunaData);

  tabela.appendChild(linha);

  
})