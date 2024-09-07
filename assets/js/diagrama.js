
function drawTernaryChart(ctx, usoSolo, carbono, agua) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height * 0.9;
    const sideLength = 500; 

    
    const vertexA = { x: centerX, y: centerY - (Math.sqrt(3) / 2) * sideLength };
    const vertexB = { x: centerX - sideLength / 2, y: centerY };
    const vertexC = { x: centerX + sideLength / 2, y: centerY };

    
    ctx.beginPath();
    ctx.moveTo(vertexA.x, vertexA.y);
    ctx.lineTo(vertexB.x, vertexB.y);
    ctx.lineTo(vertexC.x, vertexC.y);
    ctx.closePath();
    ctx.stroke();

    
    const total = usoSolo + carbono + agua;
    const relativeUsoSolo = usoSolo / total;
    const relativeCarbono = carbono / total;
    const relativeAgua = agua / total;

    const pointX = (relativeCarbono * vertexB.x) + (relativeAgua * vertexC.x) + (relativeUsoSolo * vertexA.x);
    const pointY = (relativeCarbono * vertexB.y) + (relativeAgua * vertexC.y) + (relativeUsoSolo * vertexA.y);

    
    ctx.beginPath();
    ctx.arc(pointX, pointY, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
}


document.getElementById('impact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    
    const usoSolo = parseFloat(document.getElementById('usoSolo').value);
    const carbono = parseFloat(document.getElementById('carbono').value);
    const agua = parseFloat(document.getElementById('agua').value);

    
    if (usoSolo + carbono + agua !== 100) {
        alert('A soma dos valores deve ser 100%.');
        return;
    }

    
    const canvas = document.getElementById('ternaryChart');
    const ctx = canvas.getContext('2d');
    drawTernaryChart(ctx, usoSolo, carbono, agua);
});


window.onload = function () {
    const canvas = document.getElementById('ternaryChart');
    const ctx = canvas.getContext('2d');
    drawTernaryChart(ctx, 33.33, 33.33, 33.33); // Inicia com proporções iguais
};