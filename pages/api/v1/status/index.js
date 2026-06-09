function status(request, response) {
  //request são as solicitações de fora da API
  //response são os retornos de dentro da API
  response.status(200).json({ chave: "API OK" });
  //método json que retorna uma lista de chaves e valores
}

export default status;
//aponta por conveção qual a função de entrada que irá lidar com o response e request
