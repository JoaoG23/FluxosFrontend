export function converterValoresStringParaNumero(valorAConverter: string) {
  let valorConvertido =
    valorAConverter === null ? 0 : parseFloat(valorAConverter);
  return valorConvertido;
}
