//------------------LEFT SIDE-------------------------------//
const ganeL = document.getElementById('btnGaneL');
const bsdL = document.getElementById('btnBsdL');
const imavovL = document.getElementById('btnImavovL');
const jourdainL = document.getElementById('btnJourdainL');
const resultL = document.getElementById('resultL');
//------------------RIGHT SIDE-------------------------------//

const woodR = document.getElementById('btnWoodR');
const tuivasaR = document.getElementById('btnTuivasaR');
const mirandaR = document.querySelector("#btnMirandaR");
const buckleyR = document.getElementById('btnBuckleyR');
const resultR = document.getElementById('resultR');
const divRight = document.getElementById('right');

//----------------------------------------------------------//
const vs = document.getElementById('vs');
const fightBtn = document.querySelector("#fightBtn")
let restart = document.querySelector("#rematch")

//----------------------------------------------------------//
let idFighterL = 0;
let idFighterR = 0;
//-------------LEFT SIDE EVENTS-----------------------------//
ganeL.addEventListener('click', (e) => {
    idFighterL = 0;
    resultL.innerHTML = '<img src="img/gane.png" ></img>';
    ganeL.style.display = 'none';
    bsdL.style.display = 'none';
    imavovL.style.display = 'none';
    jourdainL.style.display = 'none';
    vs.style.paddingLeft = "200px";
    vs.style.paddingBottom = "50px";   
});
bsdL.addEventListener('click', (e) => {
    idFighterL = 1;
    resultL.innerHTML = '<img src="img/bsd.jpg"></img>';
    ganeL.style.display = 'none';
    bsdL.style.display = 'none';
    imavovL.style.display = 'none';
    jourdainL.style.display = 'none';
    vs.style.paddingLeft = "200px";
    vs.style.paddingBottom = "50px";    
});
imavovL.addEventListener('click', (e) => {
    idFighterL = 2;
    resultL.innerHTML = '<img src="img/imavov.jpg"></img>';
    ganeL.style.display = 'none';
    bsdL.style.display = 'none';
    imavovL.style.display = 'none';
    jourdainL.style.display = 'none';
    vs.style.paddingLeft = "200px";
    vs.style.paddingBottom = "50px";    
});
jourdainL.addEventListener('click', (e) => {
    idFighterL = 3;
    resultL.innerHTML = '<img src="img/jourdain.jpg"></img>';
    ganeL.style.display = 'none';
    bsdL.style.display = 'none';
    imavovL.style.display = 'none';
    jourdainL.style.display = 'none';
    vs.style.paddingLeft = "200px";
    vs.style.paddingBottom = "50px";   
});
//------------------RIGHT SIDE EVENTS------------------------//
mirandaR.addEventListener('click', (e) => {
    idFighterR = 4;
    resultR.style.marginLeft = "150px";
    woodR.style.display = 'none';
    tuivasaR.style.display = 'none';
    mirandaR.style.display = 'none';
    buckleyR.style.display = 'none';
    resultR.innerHTML = '<img src="img/miranda.jpg"></img>';
    fightBtn.style.visibility = 'visible';
    vs.style.filter = 'drop-shadow(0 -6mm 4mm rgb(255, 0, 0)';
});
tuivasaR.addEventListener('click', (e) => {
    idFighterR = 5;
    resultR.innerHTML = '<img src="img/tuivasa.jpg"></img>';
    woodR.style.display = 'none';
    tuivasaR.style.display = 'none';
    mirandaR.style.display = 'none';
    buckleyR.style.display = 'none';
    resultR.style.marginLeft = "150px";
    fightBtn.style.visibility = 'visible';
    vs.style.filter = 'drop-shadow(0 -6mm 4mm rgb(255, 0, 0)';
});
woodR.addEventListener('click', (e) => {
    idFighterR = 6;
    resultR.innerHTML = '<img src="img/wood.jpg"></img>';
    woodR.style.display = 'none';
    tuivasaR.style.display = 'none';
    mirandaR.style.display = 'none';
    buckleyR.style.display = 'none';
    resultR.style.marginLeft = "150px";
    fightBtn.style.visibility = 'visible';
    vs.style.filter = 'drop-shadow(0 -6mm 4mm rgb(255, 0, 0)';
});
buckleyR.addEventListener('click', (e) => {
    idFighterR = 7;
    resultR.innerHTML = '<img src="img/buckley.jpg"></img>';
    tuivasaR.style.display = 'none';
    mirandaR.style.display = 'none';
    buckleyR.style.display = 'none';
    woodR.style.display = 'none';
    resultR.style.marginLeft = "150px";
    fightBtn.style.visibility = 'visible';
    vs.style.filter = 'drop-shadow(0 -6mm 4mm rgb(255, 0, 0)';
});
//-----------------FUNCTION WINNER------------//
let ratioL ;
let ratioR ;
let chosenValue;

fightBtn.addEventListener('click', (e) => {
  fetch('http://localhost:3000/fighters')
    .then(reponse => reponse.json())
    .then(data => { 
      ratioL = data[idFighterL].win / data[idFighterL].loose;
      ratioR = data[idFighterR].win / data[idFighterR].loose;

      if (ratioL > ratioR) {
        fightBtn.innerHTML = data[idFighterL].name + ' win';
          resultR.style.filter = 'blur(1em)';
            resultL.style.filter = 'drop-shadow(0 -6mm 4mm rgb(178, 222, 39))';
             vs.style.filter = "none";
                setTimeout(function(){ fightBtn.innerHTML = "Restart"; }, 3000);
                  fightBtn.addEventListener('click', (e) => {  location.reload();});

      } else if (ratioL < ratioR) {
        fightBtn.innerHTML = data[idFighterR].name + ' win';
          resultL.style.filter = 'blur(1em)';
            resultR.style.filter = 'drop-shadow(0 -6mm 4mm rgb(178, 222, 39))';
             vs.style.filter = "none";
                setTimeout(function(){ fightBtn.innerHTML = "Restart"; }, 3000);
                  fightBtn.addEventListener('click', (e) => {  location.reload();});

      } else {
          chosenValue = Math.round(Math.random());
          if (chosenValue < 1){
            fightBtn.innerHTML = data[idFighterR].name + ' win';
              resultL.style.filter = 'blur(1em)';
                resultR.style.filter = 'drop-shadow(0 -6mm 4mm rgb(178, 222, 39))';
                  vs.style.filter = "none";
                    setTimeout(function(){ fightBtn.innerHTML = "Restart"; }, 3000);
                      fightBtn.addEventListener('click', (e) => {  location.reload();});
          } else {
            fightBtn.innerHTML = data[idFighterL].name + ' win';
              resultR.style.filter = 'blur(1em)';
                resultL.style.filter = 'drop-shadow(0 -6mm 4mm rgb(178, 222, 39))';
                  vs.style.filter = "none";
                    setTimeout(function(){ fightBtn.innerHTML = "Restart"; }, 3000);
                      fightBtn.addEventListener('click', (e) => {  location.reload();});
          }
      } 
    })
     .catch(err => console.log(err));
    });  
