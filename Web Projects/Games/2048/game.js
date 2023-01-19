var scorecounter=0;
var arraystore=[];
var storagescore=[];
/* 
cookie */
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
/* 
cookie */



function savedundo(){
    jk=[]
    var x=document.getElementById('mode').value;
    var arr=generate(x);
    var arr1=home(arr.length);
    for(var i=0;i<arr1.length;i++){
        for(var j=0;j<arr1.length;j++){
            f=document.getElementsByClassName((i+1)+(j+1).toString())[0].innerHTML
            //note here
            if(f==''){
                jk.push(0);
            }else{jk.push(f);}//note here
        }
    }
    arraystore.push(jk);
    storagescore.push(scorecounter);
    /* highscore(scorecounter); */
    /* document.getElementById("M2").getElementsByTagName("li")[1].innerHTML=getCookie('hiscore');
    document.getElementById("nor1").innerHTML="High Score:"+getCookie('hiscore');
    console.log(getCookie('hiscore')); */
}

function undofun(){
    var x=document.getElementById('mode').value;
    var arr=generate(x);
    var arr1=home(arr.length);
    if(arraystore.length!=1){
        var counter1=0;
        arraystore.pop();
        storagescore.pop();
        var total=arraystore.length;
        if(total>0){
            for(var i=0;i<arr1.length;i++){
                for(var j=0;j<arr1.length;j++){
                    chcon=arraystore[total-1][counter1];
                    if(chcon!=0){
                        document.getElementsByClassName((i+1)+(j+1).toString())[0].innerHTML=arraystore[total-1][counter1];
                    }
                    else{
                        document.getElementsByClassName((i+1)+(j+1).toString())[0].innerHTML='';
                    }
                    textdecision();
                    counter1=counter1+1;
                }
            }
            document.getElementById("M1").getElementsByTagName("li")[1].innerHTML=storagescore[total-1];
            document.getElementById("nor").innerHTML="Score:"+storagescore[total-1];
            scorecounter=storagescore[total-1];
        }
    }
}
function score(b){
    scorecounter=scorecounter+b
    document.getElementById("M1").getElementsByTagName("li")[1].innerHTML=scorecounter;
    document.getElementById("nor").innerHTML="Score:"+scorecounter;
}
function sleep(milliseconds) {
        let timeStart = new Date().getTime();
        while (true) {
            let elapsedTime = new Date().getTime() - timeStart;
            if (elapsedTime > milliseconds) {
                break;
            }
        }
    }
/* buffer */
function generate(n){
    var i,j,arr=[];
    for(i=1;i<=n;i++){
        for(j=1;j<=n;j++){
            x=i+j.toString()
            s=document.getElementsByClassName(x)[0].innerHTML
            if(s==''){
                arr.push(x)
            }
            else{
                arr.push(0)
            }
        }
    }
    return arr;
}
function home(n){
    let sr = Math.sqrt(n);
    l=[]
    for(var i=1;i<=sr;i++){
        l1=[]
        for(var j=1;j<=sr;j++){
            var f=document.getElementsByClassName(i+j.toString())[0].innerHTML;
            l1.push((f!='')?f:0);
        }
        l.push(l1)
    }
    return l;
}
/* functions */
function left(){
    var x=document.getElementById('mode').value;
    var arr=generate(x);
    var arr1=home(arr.length)
    var war=arr1;
    for(var i=0;i<arr1.length;i++){
        for(var j=0;j<arr1.length;j++){
            if(arr1[i][j]!=0){
                for(var k=0;k<j;k++){
                    if(arr1[i][k]==0){
                        temp=arr1[i][j];
                        document.getElementsByClassName((i+1)+(k+1).toString())[0].innerHTML=arr1[i][j]
                        document.getElementsByClassName((i+1)+(j+1).toString())[0].innerHTML=""
                        arr1[i][j]=0;
                        arr1[i][k]=temp;
                        break
                    }
                }
            }
        }
    }
    for(var i=0;i<arr1.length;i++){
        for(var j=0;j<arr1.length-1;j++){
            if(arr1[i][j]!=0 && arr1[i][j+1]!=0){
                if(arr1[i][j]==arr1[i][j+1]){
                    document.getElementsByClassName((i+1)+(j+1).toString())[0].innerHTML=parseInt(arr1[i][j])+parseInt(arr1[i][j+1]);
                    score(parseInt(arr1[i][j])+parseInt(arr1[i][j+1])) /* SCORE */
                    document.getElementsByClassName((i+1)+(j+2).toString())[0].innerHTML='';
                    arr1[i][j+1]=0;
                    for (var k=j+1;k<arr1.length-1;k++){
                        if(arr1[i][k]==0){
                            temp=arr1[i][k];
                            arr1[i][k]=arr1[i][k+1];
                            document.getElementsByClassName((i+1)+(k+1).toString())[0].innerHTML=document.getElementsByClassName((i+1)+(k+2).toString())[0].innerHTML
                            document.getElementsByClassName((i+1)+(k+2).toString())[0].innerHTML=(temp==0)?'':temp;
                            arr1[i][k+1]=temp;
                        }
                    }
                }
            }
        }
    }
    if(war!=arr){work();savedundo();}
    textdecision();
}


function right(){
    var x=document.getElementById('mode').value;
    var arr=generate(x);
    var arr1=home(arr.length)
    var war=arr1;
    for(var i=arr1.length-1;i>=0;i--){
        for(var j=arr1.length-1;j>=0;j--){
            if(arr1[i][j]!=0){
                for(var k=arr1.length-1;k>=j;k--){
                    if(arr1[i][k]==0){
                        temp=arr1[i][j];
                        document.getElementsByClassName((i+1)+(k+1).toString())[0].innerHTML=arr1[i][j]
                        document.getElementsByClassName((i+1)+(j+1).toString())[0].innerHTML=""
                        arr1[i][j]=0;
                        arr1[i][k]=temp;
                        break
                    }
                }
            }
        }
    }
    for(var i=0;i<arr1.length;i++){
        for(var j=0;j<arr1.length-1;j++){
            if(arr1[i][j]!=0 && arr1[i][j+1]!=0){
                if(arr1[i][j]==arr1[i][j+1]){
                    document.getElementsByClassName((i+1)+(j+2).toString())[0].innerHTML=parseInt(arr1[i][j])+parseInt(arr1[i][j+1]);
                    score(parseInt(arr1[i][j])+parseInt(arr1[i][j+1])) /* SCORE */
                    document.getElementsByClassName((i+1)+(j+1).toString())[0].innerHTML='';
                    arr1[i][j]=0;
                    for (var k=j;k>=1;k--){
                        if(arr1[i][k]==0){
                            temp=arr1[i][k];
                            arr1[i][k]=arr1[i][k-1];
                            document.getElementsByClassName((i+1)+(k+1).toString())[0].innerHTML=document.getElementsByClassName((i+1)+(k).toString())[0].innerHTML
                            document.getElementsByClassName((i+1)+(k).toString())[0].innerHTML=(temp==0)?'':temp;
                            arr1[i][k-1]=temp;
                        }
                    }
                }
            }
        }
    }
    if(war!=arr){work();savedundo();}
    textdecision();
}


function up(){
    var x=document.getElementById('mode').value;
    var arr=generate(x);
    var arr1=home(arr.length)
    var war=arr1;
    for(var i=0;i<arr1.length;i++){
        for(var j=0;j<arr1.length;j++){
            if(arr1[j][i]!=0){
                for(var k=0;k<j;k++){
                    if(arr1[k][i]==0){
                        temp=arr1[j][i];
                        document.getElementsByClassName((k+1)+(i+1).toString())[0].innerHTML=arr1[j][i]
                        document.getElementsByClassName((j+1)+(i+1).toString())[0].innerHTML=""
                        arr1[j][i]=0;
                        arr1[k][i]=temp;
                        break
                    }
                }
            }
        }
    }
    for(var i=0;i<arr1.length;i++){
        for(var j=0;j<arr1.length-1;j++){
            if(arr1[j][i]!=0 && arr1[j+1][i]!=0){
                if(arr1[j][i]==arr1[j+1][i]){
                    document.getElementsByClassName((j+1)+(i+1).toString())[0].innerHTML=parseInt(arr1[j][i])+parseInt(arr1[j+1][i]);
                    score(parseInt(arr1[j][i])+parseInt(arr1[j+1][i])) /* SCORE */
                    document.getElementsByClassName((j+2)+(i+1).toString())[0].innerHTML='';
                    arr1[j+1][i]=0;
                    for (var k=j;k<arr1.length-1;k++){
                        if(arr1[k][i]==0){
                            temp=arr1[k][i];
                            arr1[k][i]=arr1[k+1][i];
                            document.getElementsByClassName((k+1)+(i+1).toString())[0].innerHTML=document.getElementsByClassName((k+2)+(i+1).toString())[0].innerHTML
                            document.getElementsByClassName((k+2)+(i+1).toString())[0].innerHTML=(temp==0)?'':temp;
                            arr1[k+1][i]=temp;
                        }
                    }
                }
            }
        }
    }
    if(war!=arr){work();savedundo();}
    textdecision();
}
function down(){
    var x=document.getElementById('mode').value;
    var arr=generate(x);
    var arr1=home(arr.length)
    var war=arr1;
    for(var i=arr1.length-1;i>=0;i--){
        for(var j=arr1.length-1;j>=0;j--){
            if(arr1[j][i]!=0){
                for(var k=arr1.length-1;k>=j;k--){
                    if(arr1[k][i]==0){
                        temp=arr1[j][i];
                        document.getElementsByClassName((k+1)+(i+1).toString())[0].innerHTML=arr1[j][i]
                        document.getElementsByClassName((j+1)+(i+1).toString())[0].innerHTML=""
                        arr1[j][i]=0;
                        arr1[k][i]=temp;
                        break;
                    }
                }
            }
        }
    }
    for(var i=arr1.length-1;i>=0;i--){
        for(var j=arr1.length-1;j>0;j--){
            if(arr1[j][i]!=0 && arr1[j-1][i]!=0){
                if(arr1[j][i]==arr1[j-1][i]){
                    document.getElementsByClassName((j+1)+(i+1).toString())[0].innerHTML=parseInt(arr1[j][i])+parseInt(arr1[j-1][i]);
                    score(parseInt(arr1[j][i])+parseInt(arr1[j-1][i]))  /* SCORE */
                    document.getElementsByClassName((j)+(i+1).toString())[0].innerHTML='';
                    arr1[j-1][i]=0;
                    for (var k=arr1.length-1;k>0;k--){
                        if(arr1[k][i]==0){
                            temp=arr1[k][i];
                            arr1[k][i]=arr1[k-1][i];
                            document.getElementsByClassName((k+1)+(i+1).toString())[0].innerHTML=document.getElementsByClassName((k)+(i+1).toString())[0].innerHTML
                            document.getElementsByClassName((k)+(i+1).toString())[0].innerHTML=(temp==0)?'':temp;
                            arr1[k-1][i]=temp;
                        }
                    }
                }
            }
        }
    }
    if(war!=arr){work();savedundo();}
    textdecision();
}

/* functions */


/* controls */
/* phone controls */

document.addEventListener('swiped-left', function(e) {
    left('left');
    screensize();
});
document.addEventListener('swiped-right', function(e) {
    right('right');
    screensize();
});
document.addEventListener('swiped-up', function(e) {
    up('up');
    screensize();
});
document.addEventListener('swiped-down', function(e) {
    down('down'); 
    screensize();
});



/* keyboard control */
document.addEventListener('keydown', function(e) {
switch (e.keyCode) {
    case 37:
        left('left');
        screensize();
        break;
    case 38:
        up('up');
        screensize();
        break;
    case 39:
        right('right');
        screensize();
        break;
    case 40:
        down('down');
        screensize();
        break;
}
});


/* game logic */
function work(){
    var n=document.getElementById('mode').value;
    var arr=generate(n);
    arr = arr.filter(function(item) {
        return item !== 0
    })
    if(arr.length>0){
        g=arr[Math.floor(Math.random() * arr.length)]
        document.getElementsByClassName(g)[0].innerHTML="2"
        textdecision();
    }
    else{
        winn();
    }
}
/* frontend  */
function screensize(){
    if(screen.width>1300){
document.getElementsByTagName("table")[0].style.margin="0% 0% 0% 35%";
}
else if(screen.width<1400 && screen.width>740){
    document.getElementsByTagName("table")[0].style.margin="0% 0% 0% 18%";
}
else{
    document.getElementsByTagName("table")[0].style.margin="0% 0% 0% 0%";
}
}
function create(n){
var divv=document.getElementsByClassName('game')[0];
var table = document.createElement("table");
for(var j=0;j<n;j++){
  var row = table.insertRow(j);
for(var i=0;i<n;i++){
  var cell1 = row.insertCell(i);
  cell1.innerHTML = '';
  cell1.className=(j+1).toString()+(i+1)
  }
}
divv.appendChild(table)
document.getElementsByTagName('table')[0].className='MyClass';
work()
work()
}
function remover(n){
if(n=='11'){
    document.getElementById('confirm').style.display="none";
    document.getElementById('NewGame').style.display="none";
}
else{
    arraystore.length=0;
    storagescore.length=0;
    scorecounter=0;
    document.getElementById("M1").getElementsByTagName("li")[1].innerHTML=scorecounter;
    document.getElementById("nor").innerHTML="Score:"+scorecounter;
    document.getElementById('confirm').style.display="none";
    document.getElementById('NewGame').style.display="none";
    var x=document.getElementById('mode').value;
    var tableHeaderRowCount = 0;
    var divv=document.getElementsByTagName('div')[0];
    var table = document.getElementsByClassName('MyClass')[0];
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }
    var myobj = document.getElementsByTagName("table")[0];
    myobj.remove();
    create(x);
    screensize();
    savedundo();
    }
}
function myFunction(n) {
var x=document.getElementById('mode').value;
var ask=confirm("Do you want to change"+x+"X"+x+"(Note you will earse all score)?");
if(ask){
    remover();
}
else{
        var n = document.getElementsByClassName("MyClass")[0].rows.length;
        document.getElementById('mode').getElementsByTagName('option')[n-4].selected = 'selected'
    }
}

function winn(){
var n=document.getElementById('mode').value;
var count=0;
for(var i=0;i<n;i++){
    for(var j=0;j<n-1;j++){
        f=document.getElementsByClassName((i+1)+(j+1).toString())[0].innerHTML
        f1=document.getElementsByClassName((i+1)+(j+2).toString())[0].innerHTML
        f2=document.getElementsByClassName((j+1)+(i+1).toString())[0].innerHTML
        f3=document.getElementsByClassName((j+2)+(i+1).toString())[0].innerHTML
        if(f==f1){
            count+=1;
        }
        if(f2==f3){
            count+=1;
        }
    }
}

if(count==0){
        document.getElementById('confirm').style.display="block";
        document.getElementsByClassName('message')[0].innerHTML="Do you want to restart the game?"
        document.getElementById('confirm').style.display="block";
    }
}

function textdecision(){
    function colord(i,j,f,c){
        if(f!=0){
            document.getElementsByClassName((i+1)+(j+1).toString())[0].style.backgroundColor="hsl("+c.toString()+", 60%, 50%)"
        }
        else{
            document.getElementsByClassName((i+1)+(j+1).toString())[0].style.backgroundColor="pink";
        }
    }
    var x=document.getElementById('mode').value;
    var arr=generate(x);
    var arr1=home(arr.length)
    for(var i=0;i<arr1.length;i++){
        for(var j=0;j<arr1.length;j++){
            f=document.getElementsByClassName((i+1)+(j+1).toString())[0].innerHTML
            c=f*10
            w=50-((f.length)-1)*7;
            if(w<20){
                document.getElementsByClassName((i+1)+(j+1).toString())[0].style.fontSize="15px";
                colord(i,j,f,c);
            }
            else{
                document.getElementsByClassName((i+1)+(j+1).toString())[0].style.fontSize=w.toString()+"px";
                colord(i,j,f,c);
            }
        }
    }
}
create(4)
screensize()
function NewGame(){
    document.getElementById("NewGame").style.display="block";
}
savedundo();