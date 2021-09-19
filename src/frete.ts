/* eslint-disable no-console */
import { calcularPrecoPrazo } from 'correios-brasil'

// const CepOrigem = '93340-040'

function Frete() {
  const args = {
    // Não se preocupe com a formatação dos valores de entrada do cep, qualquer uma será válida (ex: 21770-200, 21770 200, 21asa!770@###200 e etc),
    sCepOrigem: '93340-040',
    sCepDestino: '91110-000',
    nVlPeso: '1',
    nCdFormato: '1',
    nVlComprimento: '20',
    nVlAltura: '20',
    nVlLargura: '20',
    nCdServico: ['04014', '04510'], // Array com os códigos de serviço
    nVlDiametro: '0',
  }

  calcularPrecoPrazo(args).then((response) => {
    console.log(response)
  })
}

export default Frete
