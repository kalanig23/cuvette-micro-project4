let s='';
let evalStringResult = '';
function tdclick(e) {
    e.stopPropagation();
   
    if(e.target.innerText==='RESET'){
        s='';
        document.getElementById('calinput').value = '';
    } else if(e.target.innerText==='DEL') {
        s=s.slice(0, -1);
        document.getElementById('calinput').value = s;
    } else if(e.target.innerText==='=') {
        let evalString = document.getElementById('calinput').value;
        evalString.replace('X', '*') 
        evalStringResult = eval(evalString.replace('X', '*'));
        document.getElementById('calinput').value = evalStringResult;
        s=evalStringResult;
    } else {
            s=s+e.target.innerText;
            document.getElementById('calinput').value=s;
    }
}