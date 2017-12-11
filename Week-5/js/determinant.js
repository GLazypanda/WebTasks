function find_determinant() {
     var n11 = Number(document.getElementById('n11').value);
     var n12 = Number(document.getElementById('n12').value);
     var n13 = Number(document.getElementById('n13').value);
     var n21 = Number(document.getElementById('n21').value);
     var n22 = Number(document.getElementById('n22').value);
     var n23 = Number(document.getElementById('n23').value);
     var n31 = Number(document.getElementById('n31').value);
     var n32 = Number(document.getElementById('n32').value);
     var n33 = Number(document.getElementById('n33').value);
     var a = n11*(n22*n33-n23*n32)-n12*(n21*n33-n23*n31)+n13*(n21*n32-n22*n31);
     var answer;
     answer = document.getElementById('answer');
     answer.innerHTML = a;
}
