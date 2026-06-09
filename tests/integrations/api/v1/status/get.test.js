test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  //console.log(response); retorna apenas uma promise pois é necessário
  //aguardar o fetch realizar a requisição e guardar o retorno
  //na variável response
  expect(response.status).toBe(200);
});
