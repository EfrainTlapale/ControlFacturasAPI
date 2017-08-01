import Workbook from 'react-excel-workbook'
import XLSX from 'xlsx'
import {saveAs} from 'file-saver'


var ws = XLSX.utils.aoa_to_sheet([
	"SheetJS".split(""),
  ['Placas', 'Xyee'],
  ['Modelo', 'Jetta'],
	[1,2,3,4,5,6,7],
	[2,3,4,5,6,7,8]
]);

const wb = {
  SheetNames: ['hola'],
  Sheets: {}
}
wb.Sheets['hola'] = ws
console.log(wb)
var wopts = { bookType:'xlsx', bookSST:false, type:'binary' };

var wbout = XLSX.write(wb,wopts);

function s2ab(s) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);
  for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
  return buf;
}

const data1 = [
  {
    foo: '123',
    bar: '456',
    baz: '789'
  },
  {
    foo: 'abc',
    bar: 'dfg',
    baz: 'hij'
  },
  {
    foo: 'aaa',
    bar: 'bbb',
    baz: 'ccc'
  }
]
 
const data2 = [
  {
    aaa: 1,
    bbb: 2,
    ccc: 3
  },
  {
    aaa: 4,
    bbb: 5,
    ccc: 6
  }
]


    saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), "test.xlsx");



import Workbook from 'react-excel-workbook'
import XLSX from 'xlsx'
import {saveAs} from 'file-saver'


var ws = XLSX.utils.aoa_to_sheet([
	"SheetJS".split(""),
  ['Placas', 'Xyee'],
  ['Modelo', 'Jetta'],
	[1,2,3,4,5,6,7],
	[2,3,4,5,6,7,8]
]);

ws['!ref'] = 'A1:K11'

const cell = {t: 's', v: 'Hola Mundo'}
const cellRef = XLSX.utils.encode_cell({c:10,r:10})
ws[cellRef] = cell

console.log(ws)

const wb = {
  SheetNames: ['hola'],
  Sheets: {}
}
wb.Sheets['hola'] = ws
console.log(wb)
var wopts = { bookType:'xlsx', bookSST:false, type:'binary' };

var wbout = XLSX.write(wb,wopts);

function s2ab(s) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);
  for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
  return buf;
}

const data1 = [
  {
    foo: '123',
    bar: '456',
    baz: '789'
  },
  {
    foo: 'abc',
    bar: 'dfg',
    baz: 'hij'
  },
  {
    foo: 'aaa',
    bar: 'bbb',
    baz: 'ccc'
  }
]
 
const data2 = [
  {
    aaa: 1,
    bbb: 2,
    ccc: 3
  },
  {
    aaa: 4,
    bbb: 5,
    ccc: 6
  }
]
