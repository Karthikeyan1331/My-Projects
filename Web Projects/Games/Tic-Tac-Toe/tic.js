function colect(){
    var ww=[];
    for(var j=0;j<3;j++){
        for(var i=0;i<3;i++){
            var r = (j+1).toString()+(i+1).toString();
            var s = document.getElementById(r).innerText;
            (s=="X" || s=="O")?ww.push(s):ww.push(0);
        }
    }
    return ww
}
function comman(n){
        document.getElementById(n).className="font-effect-fire";
        document.getElementById(n).style.padding="0px 80px 0px 0px";
        DisabledAll(false);
        win();
    }
function bot(){
    ww=colect();
    Ef=["11","12","13","21","22","23","31","32","33"];
    y=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
    var arr = ww.filter(item => item !== 0);
    if(arr.length<9){
        for(var i=0;i<8;i++){
            var counts = {};
            var uf = [ww[y[i][0]],ww[y[i][1]],ww[y[i][2]]];
            console.log(uf);
            uf.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
            if(uf.indexOf('O')!=-1){
                if(counts['O']==2 && uf.indexOf(0)!=-1){
                    document.getElementById(Ef[y[i][uf.indexOf(0)]]).innerHTML="O";
                    comman(Ef[y[i][uf.indexOf(0)]]);
                    return;
                }
            }
        }
        for(var i=0;i<8;i++){
            var counts = {};
            var uf = [ww[y[i][0]],ww[y[i][1]],ww[y[i][2]]];
            console.log(uf);
            uf.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
            if(uf.indexOf('X')!=-1){
                if(counts['X']==2 && uf.indexOf(0)!=-1){
                    console.log("see this");
                    console.log(Ef[y[i][uf.indexOf(0)]]);
                    console.log(i,uf.indexOf(0));
                    document.getElementById(Ef[y[i][uf.indexOf(0)]]).innerHTML="O";
                    comman(Ef[y[i][uf.indexOf(0)]]);
                    return;
                }
            }
        }
        for(var i=0;i<8;i++){
            var counts = {};
            var uf = [ww[y[i][0]],ww[y[i][1]],ww[y[i][2]]];
            uf.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
            console.log(counts);
            if(counts['0']==2 && uf.indexOf("O")!=-1){
                console.log("hello");
                var temp=[];
                for(var j=0;j<3;j++){
                    if(uf[j]==0){
                        temp.push(j);
                        }
                    }
                var p = temp[Math.floor(Math.random() * 2)];
                document.getElementById(Ef[y[i][p]]).innerHTML="O";
                comman(Ef[y[i][p]]);
                return;
            }
        }
        var temp=[];
        console.log(ww)
        for(var i=0;i<9;i++){
            if(ww[i]==0){
                temp.push(i);
            }
        }
        console.log(temp);
        var p = Ef[temp[Math.floor(Math.random() * temp.length)]];
        console.log(p);
        document.getElementById(p).innerHTML="O";
        comman(p);
        return;
    }
}
const allEqual = arr => arr.every(v => v === "X");
const allEqual1 = arr => arr.every(v => v === "O");
function Restart(){
    for(var j=0;j<3;j++){
        for(var i=0;i<3;i++){
            var r = (j+1).toString()+(i+1).toString();
            document.getElementById(r).innerHTML="&nbsp;"
            document.getElementById(r).disabled = false;
            document.getElementById(r).style.padding="0px 180px 0px 0px";
        }
    }
    document.getElementById("confirm").style.display="none";
}
function messageAlert() {
        document.getElementById("confirm").style.display="block";
    }
function DisabledAll(qw){
    for(var j=0;j<3;j++){
        for(var i=0;i<3;i++){
            var r = (j+1).toString()+(i+1).toString();
            document.getElementById(r).disabled = qw;
        }
    }
}
function win(){
    ww=colect()
    console.log(ww);
    if(allEqual([ww[0],ww[1],ww[2]]) || allEqual([ww[3],ww[4],ww[5]]) || allEqual([ww[6],ww[7],ww[8]]) || allEqual([ww[0],ww[3],ww[6]]) || allEqual([ww[1],ww[4],ww[7]]) || allEqual([ww[2],ww[5],ww[8]]) || allEqual([ww[0],ww[4],ww[8]]) || allEqual([ww[2],ww[4],ww[6]])){
        document.getElementById("win").innerHTML="X is win";
        DisabledAll(true);
        messageAlert();
        return 4;
    }
    else if(allEqual1([ww[0],ww[1],ww[2]]) || allEqual1([ww[3],ww[4],ww[5]]) || allEqual1([ww[6],ww[7],ww[8]]) || allEqual1([ww[0],ww[3],ww[6]]) || allEqual1([ww[1],ww[4],ww[7]]) || allEqual1([ww[2],ww[5],ww[8]]) || allEqual1([ww[0],ww[4],ww[8]]) || allEqual1([ww[2],ww[4],ww[6]])){
        document.getElementById("win").innerHTML="O is win";
        DisabledAll(true);
        messageAlert();
        return 4;
    }else{
        var arr = ww.filter(item => item !== 0)
        if(arr.length==9){
            document.getElementById("win").innerHTML="Match draw";
            DisabledAll(true);
            messageAlert();
            return 4;
        }
    }
    return 0;
}
function tic(n){
    var ww=0;
    for(var j=0;j<3;j++){
        for(var i=0;i<3;i++){
            var r = (j+1).toString()+(i+1).toString();
            var s = document.getElementById(r).innerText;
            (s=="X" || s=="O")?ww+=1:null;
        }
    }
    var t = document.getElementById(n).innerText;
    console.log(t);
    var tt=0;
    if((t!="X" && t!="O")){
        document.getElementById(n).innerHTML="X";
        document.getElementById(n).className = "font-effect-neon";
        document.getElementById(n).style.padding="0px 110px 0px 0px";
        tt=win();
        if(tt==0){
            let timer1 = setTimeout(DisabledAll(true), 10);
            let timer = setTimeout(bot, 2000);
            win();
        }
    } 
}