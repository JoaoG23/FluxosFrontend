export function converterNullParaString(valorAConverter: null | string) {
  let valorConvertido =
    valorAConverter === null ? '' : valorAConverter;
  return valorConvertido;
}
