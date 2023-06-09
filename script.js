function tirageUser() {
    let t;
    do {
        t = prompt("W/w- pou woch\nP/p- papye\nS/s- sizo\nO/o- quiter")
    } while (t !== 'W' && t !== 'w' && t !== 'p' && t !== 'P' && t !== 's' && t !== 'S');
    let x;
    switch (t) {
        case "w":
            x = "woch";
            break;
        case "p":
            x = "papye";
            break;
        case "s":
            x = "sizo";
            break;
        case "W":
            x = "woch";
            break;
        case "P":
            x = "papye";
            break;
        case "S":
            x = "sizo";
            break;
        default:
            break;
    }
    return x;
}
function tirageOrdi() {
    let t = Math.floor(Math.random() * (21 - 1 + 1) + 1);
    let a = t >= 0 && t <= 7;
    let b = t >= 8 && t <= 14;
    let c = t >= 15 && t <= 21;
    let x;
    if (a) {
        x = 'woch'
    } else if (b) {
        x = 'papye'
    } else {
        x = 'sizo'
    }
    return x;
}


do {
    let chans = 4;
    let sko = 0;
    let nbFwa = 0;
    let w = 'woch';
    let p = 'papye';
    let s = 'sizo';
    do {
        let user = tirageUser();
        let ordi = tirageOrdi();
        var volonte = '';
        
        if (user === w && ordi === s) {
            sko++;
            alert("ou gnyn ou pran " + user + " machin nn pran " + ordi + " !!!")
        }
        if (user === w && ordi === w) {
            alert("youn nn nou pa gnyn nou pran men bgy\nou pran : " + user + " machin nn pran " + ordi + " !!!")
        }
        if (user === p && ordi === w) {
            sko++;
            alert("ou gnyn ou pran " + user + " machin nn pran " + ordi + " !!!")
        }
        if (user === p && ordi === p) {
            alert("youn nn nou pa gnyn nou pran men bgy\nou pran : " + user + " machin nn pran " + ordi + " !!!")
        }
        if (user === p && ordi === s) {
            alert("ou pedi ou pran " + user + " machin nn pran " + ordi + " !!!")
        }
        if (user === s && ordi === w) {
            alert("ou pedi ou pran " + user + " machin nn pran " + ordi + " !!!")
        }
        if (user === s && ordi === p) {
            sko++;
            alert("ou gnyn ou pran " + user + " machin nn pran " + ordi + " !!!")
        }
        if (user === s && ordi === s) {
            alert("youn nn nou pa gnyn nou pran men bgy\nou pran : " + user + " machin nn pran " + ordi + " !!!")
        }
        if (user == w + ordi == p){
            alert("ou pedi ou pran " + user + " machin nn pran " + ordi + " !!!")
        }

        alert("\n\nsko : " + sko + "\n\nou rete " + chans + " chans")
        chans--;
    } while (chans >= 0);
    nbFwa++;
    alert("ou gntn jwe " + nbFwa + " fwa");
    do {
        volonte = prompt("O/o- pou kontinye\nN/n pou sispan'n jwe : ")
    } while (volonte !== "o" && volonte !== "O" && volonte !== "n" && volonte !== "N");

} while (volonte == 'o' || volonte == 'O');