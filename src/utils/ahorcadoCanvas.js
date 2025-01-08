export const drawHangmanLine = (tablero) => {

    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#1a3250";

    tablero.beginPath();
    tablero.moveTo(480,250);
    tablero.lineTo(720,250);
    tablero.stroke();
    tablero.closePath();

}

export const drawHanger = (tablero) => {

    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#1a3250";

    tablero.beginPath();
    tablero.moveTo(500,250);
    tablero.lineTo(500,70);
    tablero.stroke();
    tablero.closePath();

    tablero.beginPath();
    tablero.lineTo(500,70);
    tablero.lineTo(590,70);
    tablero.stroke();
    tablero.closePath();

    tablero.beginPath();
    tablero.moveTo(590,70);
    tablero.lineTo(590,90);
    tablero.stroke();
    tablero.closePath();

}

export const drawHead = (tablero) => {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#1a3250";
    tablero.fillStyle = "#1a3250";

    tablero.moveTo(590,120);
    tablero.arc(590,120,30,0,2*Math.PI);
    tablero.fill();
    tablero.closePath();
}

export const drawBody = (tablero) => {

    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#1a3250";

    tablero.beginPath();
    tablero.moveTo(590,140);
    tablero.lineTo(590,180);
    tablero.stroke();
    tablero.closePath();

}

export const drawLeftLeg = (tablero) => {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#1a3250";

    tablero.beginPath();
    tablero.moveTo(590,180);
    tablero.lineTo(570,220);
    tablero.stroke();
    tablero.closePath();

}

export const drawRightLeg = (tablero) => {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#1a3250";

    tablero.beginPath();
    tablero.moveTo(590,180);
    tablero.lineTo(610,220);
    tablero.stroke();
    tablero.closePath();
}

export const drawLeftArm = (tablero) => {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#1a3250";

    tablero.beginPath();
    tablero.moveTo(590,140);
    tablero.lineTo(570,180);
    tablero.stroke();
    tablero.closePath();
}

export const drawRightArm = (tablero) => {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#1a3250";

    tablero.beginPath();
    tablero.moveTo(590,140);
    tablero.lineTo(610,180);
    tablero.stroke();
    tablero.closePath();
}

export const drawArrow = (tablero) => {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#1a3250";

    tablero.beginPath();
    tablero.moveTo(540,150);
    tablero.lineTo(645,150);
    tablero.stroke();
    tablero.closePath();

    tablero.beginPath();
    tablero.moveTo(645,150);
    tablero.lineTo(625,140);
    tablero.stroke();
    tablero.closePath();

    tablero.beginPath();
    tablero.moveTo(645,150);
    tablero.lineTo(625,160);
    tablero.stroke();
    tablero.closePath();
}

export const drawHangmanWith_Errors = (errors, tablero) => {
    
    if(errors == 7){
        drawHanger(tablero)
    }

    else if(errors == 6){
        drawHead(tablero)
    }

    else if(errors == 5){
        drawBody(tablero)
    }

    else if(errors == 4){
        drawLeftLeg(tablero)
    }

    else if(errors == 3){
        drawRightLeg(tablero)
    }

    else if(errors == 2){
        drawLeftArm(tablero)
    }

    else if(errors == 1){
        drawRightArm(tablero)
    }
    
    else {
        drawArrow(tablero)
    }
    
}