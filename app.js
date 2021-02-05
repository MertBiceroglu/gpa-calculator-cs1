const bbg = document.querySelectorAll('.not')[0];
const ayrikMat = document.querySelectorAll('.not')[1];
const mat1 = document.querySelectorAll('.not')[2];
const bilgiTek = document.querySelectorAll('.not')[3];
const ing = document.querySelectorAll('.not')[4];
const ink = document.querySelectorAll('.not')[5];
const kariyerP = document.querySelectorAll('.not')[6];
const iletisimB = document.querySelectorAll('.not')[7]; 

const sonuc = document.querySelector('.endResult');
const hesapla = document.querySelector('.resultFinal');

const bhesaplaBBG = document.querySelectorAll('button')[0];
const bhesaplaAyrikMat = document.querySelectorAll('button')[1];
const bhesaplaMat = document.querySelectorAll('button')[2];
const bhesaplaBTU = document.querySelectorAll('button')[3];
const bhesaplaING = document.querySelectorAll('button')[4];
const bhesaplaINK = document.querySelectorAll('button')[5];
const bhesaplaKP = document.querySelectorAll('button')[6];
const bhesaplaIB = document.querySelectorAll('button')[7];

eventListeners();

function eventListeners(){
    bhesaplaBTU.addEventListener('click',hesaplaBTU);
    bhesaplaAyrikMat.addEventListener('click',hesaplaAyrık);
    bhesaplaBBG.addEventListener('click',hesaplaBBG);
    bhesaplaMat.addEventListener('click',hesaplaMat);
    bhesaplaING.addEventListener('click',hesaplaIng);
    bhesaplaINK.addEventListener('click',hesaplaInk);
    bhesaplaKP.addEventListener('click',hesaplaKP);
    bhesaplaIB.addEventListener('click',hesaplaIB);
    hesapla.addEventListener('click',hesaplaSon);
}
function hesaplaBBG(){
    let bbgVize = parseInt(document.querySelectorAll('.vize')[0].value);
    let bbgOdev = parseInt(document.querySelectorAll('.odev')[0].value);
    let bbgFinal = parseInt(document.querySelectorAll('.final')[0].value);


    odev = bbgOdev*0.2;
    vize = bbgVize*0.4;
    final = bbgFinal*0.4;
    
    bbg.value = odev+final+vize;

    return parseInt(bbg.value);
}
function hesaplaAyrık(){
    let ayrikMatVize = parseInt(document.querySelectorAll('.vize')[1].value);
    let ayrikMatOdev = parseInt(document.querySelectorAll('.odev')[1].value);
    let ayrikMatFinal = parseInt(document.querySelectorAll('.final')[1].value);


    odev = ayrikMatOdev*0.2;
    vize = ayrikMatVize*0.4;
    final = ayrikMatFinal*0.4;
    
    ayrikMat.value = odev+final+vize;

    return parseInt(ayrikMat.value);
}
function hesaplaMat(){
    let mat1Vize = parseInt(document.querySelectorAll('.vize')[2].value);
    let mat1Odev = parseInt(document.querySelectorAll('.odev')[2].value);
    let mat1Final = parseInt(document.querySelectorAll('.final')[2].value);


    odev = mat1Odev*0.3;
    vize = mat1Vize*0.3;
    final = mat1Final*0.4;
    
    mat1.value = odev+final+vize;

    return parseInt(mat1.value);
}
function hesaplaBTU(){
    let bilgiTekVize = parseInt(document.querySelectorAll('.vize')[3].value);
    let bilgiTekFinal = parseInt(document.querySelectorAll('.final')[3].value);


    vize = bilgiTekVize*0.4;
    final = bilgiTekFinal*0.6;
    
    bilgiTek.value = final+vize;

    return parseInt(bilgiTek.value);
}
function hesaplaIng(){
    let ingVize = parseInt(document.querySelectorAll('.vize')[4].value);
    let ingFinal = parseInt(document.querySelectorAll('.final')[4].value);


    vize = ingVize*0.4;
    final = ingFinal*0.6;
    
    ing.value = final+vize;

    return parseInt(ing.value);
}
function hesaplaInk(){
    let inkVize = parseInt(document.querySelectorAll('.vize')[5].value);
    let inkFinal = parseInt(document.querySelectorAll('.final')[5].value);


    vize = inkVize*0.4;
    final = inkFinal*0.6;
    
    ink.value = final+vize;

    return parseInt(ink.value);
}
function hesaplaInk(){
    let inkVize = parseInt(document.querySelectorAll('.vize')[5].value);
    let inkFinal = parseInt(document.querySelectorAll('.final')[5].value);


    vize = inkVize*0.4;
    final = inkFinal*0.6;
    
    ink.value = final+vize;

    return parseInt(ink.value);
}
function hesaplaKP(){
    let KPVize = parseInt(document.querySelectorAll('.vize')[6].value);
    let KPFinal = parseInt(document.querySelectorAll('.final')[6].value);


    vize = KPVize*0.4;
    final = KPFinal*0.6;
    
    kariyerP.value = final+vize;

    return parseInt(kariyerP.value);
}
function hesaplaIB(){
    let IBVize = parseInt(document.querySelectorAll('.vize')[7].value);
    let IBFinal = parseInt(document.querySelectorAll('.final')[7].value);


    vize = IBVize*0.4;
    final = IBFinal*0.6;
    
    iletisimB.value = final+vize;

    return parseInt(iletisimB.value);
}
function hesaplaSon(){

    finalSonuc = 
    ((hesaplaBBG()*6+
     hesaplaAyrık()*6+
     hesaplaMat()*6+
     hesaplaBTU()*4+
     hesaplaIB()*2+
     hesaplaIng()*2+
     hesaplaInk()*2+
     hesaplaKP()*2) / 30)/100*4;

    sonuc.textContent = "Sonucunuz : " + finalSonuc;
}