/*****JavaScript*****/

/* INDENTATION */
var txt=document.getElementById('code');
var compteur = 0;
function indent(){
    for(let i = 0; i<compteur;i++){
        txt.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;"
    }
}

/* FIN INDENTATION */

/* FONCTION */
function afficher_div(id) {
    document.getElementById('cond_bcl').style.display = 'none';
    document.getElementById('cond_if').style.display = 'none';
    document.getElementById('cond_var').style.display = 'none';
    document.getElementById('cond_alea').style.display = 'none';
    document.getElementById('cond_close').style.display = 'none';
    if (document.getElementById(id).style.display == 'none') {
        document.getElementById(id).style.display = 'block';
    }
}
/* FIN FONCTION */

/* BOUTON WHILE*/
function okwhile(){
    var iptwhile=document.getElementById('ipt_bcl');
    indent();
    txt.innerHTML += 'While (',txt.innerHTML += iptwhile.value, txt.innerHTML += '){\n';
    compteur++;
}
var btn_ok_while=document.querySelector('#ok_while');
var txt_ok_while=document.querySelector('#code');

btn_ok_while.addEventListener('click',okwhile);

/* FIN BOUTON WHILE */

/* BOUTON IF*/
function okif(){
    var iptif=document.getElementById('ipt_if');
    var iptelif=document.getElementById('ipt_elif');
    var iptelse=document.getElementById('ipt_else');
    indent();
    txt.innerHTML += 'if (',txt.innerHTML += iptif.value, txt.innerHTML += ') : {\n&nbsp;&nbsp;&nbsp;&nbsp;\n', indent(),txt.innerHTML +='}\n', indent(),txt.innerHTML +='elif (', txt.innerHTML += iptelif.value, txt.innerHTML += ') : {\n&nbsp;&nbsp;&nbsp;&nbsp;\n', indent(), txt.innerHTML += '}\n',indent(), txt.innerHTML += 'else (', txt.innerHTML+=iptelse.value, txt.innerHTML += ') : { \n',txt.innerHTML+='&nbsp;&nbsp;&nbsp;&nbsp;\n', indent(), txt.innerHTML += '}\n';
}
var btn_ok_if=document.querySelector('#ok_if');
var txt_ok_if=document.querySelector('#code');

btn_ok_if.addEventListener('click',okif);

/* FIN BOUTON If */

/* BOUTON VAR*/
function okvar(){
    var iptvar=document.getElementById('ipt_var');
    var iptnbr=document.getElementById('ipt_nbr');
    indent();
    txt.innerHTML += iptvar.value,txt.innerHTML+='=',txt.innerHTML+= iptnbr.value,txt.innerHTML+='\n';
    compteur++;
}
var btn_ok_var=document.querySelector('#ok_var');
var txt_ok_var=document.querySelector('#code');

btn_ok_var.addEventListener('click',okvar);

/* FIN BOUTON VAR */

/* BOUTON FOR */
function okfor(){
    var iptfor=document.getElementById('ipt_for');
    indent();
    txt.innerHTML += 'for (',txt.innerHTML += iptfor.value,txt.innerHTML+='){\n';
    compteur++;
}
var btn_ok_if=document.querySelector('#ok_for');
var txt_ok_if=document.querySelector('#code');

btn_ok_if.addEventListener('click',okfor);

/* FIN BOUTON FOR*/

/* BOUTON FERMETURE*/
function okclose(){    
    indent();
    txt.innerHTML += '}\n'
    compteur--;
}
var btn_ok_if=document.querySelector('#ok_close');
var txt_ok_if=document.querySelector('#code');

btn_ok_if.addEventListener('click',okclose);

/* FIN BOUTON FERMETURE*/

/* BOUTON EFFACER */
function effacer(){
    var txteff;
    txteff=" ";
    document.getElementById('code').innerHTML=txteff;
}

var btneffacer=document.querySelector('#effacer');
var txteffacer=document.querySelector('#code');

btneffacer.addEventListener('click', effacer);

/* FIN BOUTON EFFACER */

/* BOUTON ENTRER */
function entrer(){
    document.getElementById('code').innerHTML+='\n';
}
var btnentrer=document.querySelector('#entrer');
var txtentrer=document.querySelector('#code');

btnentrer.addEventListener('click', entrer);

/* FIN BOUTON ENTRER */

/* BOUTON UP */
function up(){
    document.getElementById('code').innerHTML='keyup';
}

var btnup=document.querySelector('#up');
var txtup=document.querySelector('#code');

btnup.addEventListener('click','keyup','mouseover', up);

/* FIN BOUTON UP */