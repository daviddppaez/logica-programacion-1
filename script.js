document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();
  genDeterminar(); // sin parámetros
});

function genDeterminar() {
    let genNum1 = parseInt(document.getElementById("genNum1").value);
    let genNum2 = parseInt(document.getElementById("genNum2").value);
    let genNum3 = parseInt(document.getElementById("genNum3").value);
    
    let genMayor = document.getElementById("genMayor");
    let genInter = document.getElementById("genInter");
    let genMenor = document.getElementById("genMenor");
    
    // Lógica
    if (genNum1 > genNum2) {
        if (genNum1 > genNum3) {
            genMayor.textContent = genNum1;
            if (genNum2 > genNum3) {
                genInter.textContent = genNum2;
                genMenor.textContent = genNum3;
                genMostrarRes()
            } else if (genNum2 < genNum3) {
                genInter.textContent = genNum3;
                genMenor.textContent = genNum2;
                genMostrarRes()
            } else {
                genMostrarError()
            }
        } else if (genNum1 < genNum3) {
            genMayor.textContent = genNum3;
            genInter.textContent = genNum1;
            genMenor.textContent = genNum2;
            genMostrarRes()
        } else {
            genMostrarError()
        }
    } else if (genNum1 < genNum2) {
        if (genNum2 > genNum3) {
            genMayor.textContent = genNum2;
            if (genNum1 > genNum3) {
                genInter.textContent = genNum1;
                genMenor.textContent = genNum3;
                genMostrarRes()
            } else if (genNum1 < genNum3) {
                genInter.textContent = genNum3;
                genMenor.textContent = genNum1;
                genMostrarRes()
            } else {
                genMostrarError()
            }
        } else if (genNum2 < genNum3) {
            genMayor.textContent = genNum3;
            genInter.textContent = genNum2;
            genMenor.textContent = genNum1;
            genMostrarRes()
        } else {
            genMostrarError()
        }
    } else {
        genMostrarError()
    }

};


function genMostrarRes() {
    document.getElementById("genPapitasRes").style.display = "inline-block";
    document.getElementById("genPapitasError").style.display = "none";
}

function genMostrarError() {
    document.getElementById("genPapitasRes").style.display = "none";
    document.getElementById("genPapitasError").style.display = "inline-block";
}