const facturas = [
  {proveedor: 'proveedor1', total: 1000, mes: 'junio'},
  {proveedor: 'proveedor1', total: 2000, mes: 'julio'},
  {proveedor: 'proveedor1', total: 3000, mes: 'junio'},
  {proveedor: 'proveedor2', total: 4000, mes: 'junio'},
  {proveedor: 'proveedor1', total: 5000, mes: 'julio'},
  {proveedor: 'proveedor1', total: 6000, mes: 'julio'},
  {proveedor: 'proveedor2', total: 7000, mes: 'junio'},
  {proveedor: 'proveedor2', total: 8000, mes: 'junio'},
  {proveedor: 'proveedor3', total: 9000, mes: 'mayo'}
]

const mes = 'junio'
const proveedor = 'proveedor1'
const total = 0

console.log(facturas.filter(factura => {
  let ok = true
  if (mes) {
    ok = factura.mes === mes
  }
  if (proveedor) {
    ok = factura.proveedor.indexOf(proveedor) >= 0
  }
  if (total) {
    ok = factura.total === total
  }
  return ok
}))
