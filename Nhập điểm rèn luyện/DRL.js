// const fs = require('fs');
// var oddRows = [];
// var msv = [];

// Part1: Lấy điểm rèn luyện cả lớp
// fs.readFile('DRL.txt', 'utf8', function (err, data) {
//   if (err) throw err;
//   let rows = data.split('\n');

//   for (let i = 0; i < rows.length; i++) {
//     if (i % 2 === 1) {
//       let elements = rows[i].split('\t');
//       let intElements = elements.map(function (element) {
//         return parseInt(element, 10);
//       });
//       oddRows.push(intElements);
//     }
//   }
//   oddRows = oddRows.map(row => row.filter(val => !isNaN(val)));
//   console.log(oddRows);
//   // console.log(oddRows.length);
// });

//Part 2: Lấy mã sinh viên cả lớp
// fs.readFile('MSV.txt', 'utf8', function (err, data) {
//   if (err) throw err;
//   let lines = data.split('\n');
//   lines.forEach(function (line) {
//     msv.push(line.trim());
//   });
//   console.log(msv);
//   console.log(msv.length);
// });



//Part 3: Uoload điểm bằng F12 -> console log
// Kết quả của đoạn code lấy điểm rèn luyện paste vô đây
 var oddRows = [[
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 0, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 0, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    2, 2, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    2, 2, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    2, 2, 4, 0
  ],
  [
    0, 5, 2, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    2, 2, 4, 2
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    2, 0, 4, 0
  ],
  [
    0, 5, 2, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 2, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    2, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 2
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 5,
    6, 4, 8, 7, 2, 8,
    2, 2, 4, 2
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 0, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 0, 0
  ],
  [
    0, 5, 2, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 2
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 2, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 2, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 2, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 2
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    2, 0, 4, 0
  ],
  [
    0, 5, 2, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    2, 2, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 2
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    2, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ],
  [
    0, 5, 5, 5, 5, 4,
    4, 4, 8, 7, 0, 8,
    0, 0, 4, 0
  ]];

//Kết quả của đoạn code lấy mã sinh viên paste vô đây
var msv = [  '201200005', '201200008', '201200014', '201200021',
  '201200029', '201200026', '201206931', '201200043',
  '201200053', '201200057', '201200060', '201200066',
  '201200085', '201200087', '201207282', '201200102',
  '201200108', '201210114', '201200116', '201200130',
  '201200137', '201200138', '201200146', '201210159',
  '201200160', '201216824', '201200163', '201200173',
  '201210176', '201200179', '201200188', '201200193',
  '201206522', '201200212', '201200217', '201200231',
  '201200248', '201210256', '201200263', '201200265',
  '201200266', '201200267', '201200281', '201200288',
  '201200292', '201210294', '201200295', '201205542',
  '201200302', '201210305', '201200316', '201200322',
  '201200324', '201200341', '201200342', '201200346',
  '201210356', '201200361', '201207326', '201200382',
  '201200385', '201200392', '201200399', '201210407',
  '201200412', '201240414', '201200422'];
var cols = ['3748', '3749', '3756', '3757','3760', '3761', '3762', '3763','3765', '3767', '3768', '3769','3771', '3772', '3773', '3774']
console.log(oddRows[0].length);
console.log(cols.length);

for(i=0;i<msv.length;i++){
  for(j=0;j<oddRows[i].length;j++){
    let inputname= 'input[name="score_tc_' + msv[i] + '_' + cols[j];
    document.querySelector(inputname).value = oddRows[i][j];
  }
}