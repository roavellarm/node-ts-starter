// 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?
// nCdEmpresa=08082650&sDsSenha=564321
// &sCepOrigem=90410003
// &sCepDestino=93340040
// &nVlPeso=1
// &nCdFormato=1
// &nVlComprimento=20
// &nVlAltura=20
// &nVlLargura=20
// &sCdMaoPropria=n
// &nVlValorDeclarado=0
// &sCdAvisoRecebimento=n
// &nCdServico=04510
// &nVlDiametro=0
// &StrRetorno=xml
// &nIndicaCalculo=3'

import $ from 'ajax'

export default function calcWsCorreios() {
  const sendjson = {
    nCdEmpresa: '',
    sDsSenha: '',
    nCdServico: '41106',
    sCepOrigem: '37540000',
    sCepDestino: '37540000',
    nVlPeso: '1',
    nCdFormato: '1',
    nVlComprimento: '20',
    nVlAltura: '5',
    nVlLargura: '15',
    nVlDiametro: '0',
    sCdMaoPropria: 's',
    nVlValorDeclarado: '200',
    sCdAvisoRecebimento: 's',
  }

  const response =
    "http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx/CalcPrecoPrazo/nCdEmpresa:sDsSenha: '',nCdServico: '41106',sCepOrigem: '37540000',sCepDestino: '37540000',nVlPeso: '1',nCdFormato: '1',nVlComprimento: '20',nVlAltura: '5',nVlLargura: '15',nVlDiametro: '0',sCdMaoPropria: 's',nVlValorDeclarado: '200',sCdAvisoRecebimento: 's'"

  console.log(response)

  $.ajax({
    type: 'GET',
    contentType: 'application/json; charset=utf-8',
    url: 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx/CalcPrecoPrazo',
    data: sendjson,
    dataType: 'json',
    jsonpCallback: 'foo',
    success(data) {
      console.log(data)
    },
    error(data, err) {
      console.log(data)
      console.log(err)
    },
  })

  return $
}
