//------------------LEFT SIDE------------------------------//
const ganeL = document.getElementById('btnGaneL');
const bsdL = document.getElementById('btnBsdL');
const imavovL = document.getElementById('btnImavovL');
const jourdainL = document.getElementById('btnJourdainL');
const resultL = document.getElementById('resultL');
const divL = document.getElementsByClassName('left');
const nameL = document.getElementById('nameL');
//------------------RIGHT SIDE-----------------------------//
const woodR = document.getElementById('btnWoodR');
const tuivasaR = document.getElementById('btnTuivasaR');
const mirandaR = document.querySelector("#btnMirandaR");
const buckleyR = document.getElementById('btnBuckleyR');
const resultR = document.getElementById('resultR');
const divRight = document.getElementById('right');
const nameR = document.getElementById('nameR');
//------------------CENTER---------------------------------//
const vs = document.getElementById('vs');
const fightBtn = document.querySelector("#fightBtn")
let restart = document.querySelector("#rematch")
//----------------FIGHTER'S ID LEFT/RIGHT------------------//
let idFighterL = 0;
let idFighterR = 0;
//-------------LEFT SIDE EVENTS----------------------------//


ganeL.addEventListener('click', (e) => { 
    idFighterL = 0;
    resultL.innerHTML = '<img src="img/gane.png" ></img>';
    ganeL.style.display = 'none';
    bsdL.style.display = 'none';
    imavovL.style.display = 'none';
    jourdainL.style.display = 'none';
    vs.style.paddingLeft = "220px";
    vs.style.paddingBottom = "50px";
    nameL.style.display = 'block';
    nameL.innerHTML = 'GANE';
});
bsdL.addEventListener('click', (e) => {
    idFighterL = 1;
    resultL.innerHTML = '<img src="img/bsd.jpg"></img>';
    ganeL.style.display = 'none';
    bsdL.style.display = 'none';
    imavovL.style.display = 'none';
    jourdainL.style.display = 'none';
    vs.style.paddingLeft = "220px";
    vs.style.paddingBottom = "50px";    
    nameL.style.display = 'block';
    nameL.innerHTML = 'B.S.D';
    
});

imavovL.addEventListener('click', (e) => {
    idFighterL = 2;
    resultL.innerHTML = '<img src="img/imavov.jpg"></img>';
    ganeL.style.display = 'none';
    bsdL.style.display = 'none';
    imavovL.style.display = 'none';
    jourdainL.style.display = 'none';
    vs.style.paddingLeft = "220px";
    vs.style.paddingBottom = "50px";    
    nameL.style.display = 'block';
    nameL.innerHTML = 'IMAVOV';
    nameL.style.marginLeft = "25%";
       
});
jourdainL.addEventListener('click', (e) => {
    idFighterL = 3;
    resultL.innerHTML = '<img src="img/jourdain.jpg"></img>';
    ganeL.style.display = 'none';
    bsdL.style.display = 'none';
    imavovL.style.display = 'none';
    jourdainL.style.display = 'none';
    vs.style.paddingLeft = "220px";
    vs.style.paddingBottom = "50px";   
    nameL.style.display = 'block';
    nameL.innerHTML = 'JOURDAIN';
    nameL.style.marginLeft = "23%";

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
    nameR.style.display = 'block';
    nameR.innerHTML = 'MIRANDA';
    
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
    nameR.style.display = 'block';
    nameR.innerHTML = 'TUIVASA';
    
    
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
    nameR.style.display = 'block';
    nameR.innerHTML = 'WOOD';
    //
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
    nameR.style.display = 'block';
    nameR.innerHTML = 'BUCKLEY';
    
});

//----------------FIGHTERS HOVER----------------------//


//-----------------FIGHT & RESET----------------------//
let ratioL = 0;
let ratioR = 0;

let dif = 0;

let chosenValue;
//--------------functions--------------------------------//
fightBtn.addEventListener('click', (e) => {
  fetch('http://localhost:3000/fighters')
    .then(reponse => reponse.json())
    .then(data => { 

      function moyenneR (fighter)  {
        ratioR += (data[fighter].striking + data[fighter].wrestling+ data[fighter].clinch) /3;
        return ratioR ;
      };     

      function moyenneL (fighter)  {
        ratioL += (data[fighter].striking + data[fighter].wrestling+ data[fighter].clinch) /3 ;
      return ratioL ;
      };

      moyenneL(idFighterL);
      moyenneR(idFighterR);

      function difference (ratio1, ratio2) {
          dif = Math.abs(ratio1 - ratio2);
          return dif;
      }

      difference(ratioL, ratioR);


 console.log(ratioL+' left,'  + ratioR + ' right');
 console.log(dif + ' dif');

     //--------------------ALGO WIN/LOSS----------------//
      //------------------50/50-------------------------//
      if (dif < 5) {
       chosenValue = Math.random(0,1); 
         if (chosenValue > 0.50) {
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
//-----------------------------60/40---------------------//
      } else if ( dif >= 5 && dif <= 7) {
        chosenValue = Math.random(0,1); 
            if (ratioL > ratioR && chosenValue < 0.60) {        
              fightBtn.innerHTML = data[idFighterL].name + ' win';
              resultR.style.filter = 'blur(1em)';
               resultL.style.filter = 'drop-shadow(0 -6mm 4mm rgb(178, 222, 39))';
               vs.style.filter = "none";
               setTimeout(function(){ fightBtn.innerHTML = "Restart"; }, 3000);
               fightBtn.addEventListener('click', (e) => {  location.reload();}); 
                
            } else {
              fightBtn.innerHTML = data[idFighterR].name + ' win';
               resultL.style.filter = 'blur(1em)';
                resultR.style.filter = 'drop-shadow(0 -6mm 4mm rgb(178, 222, 39))';
                vs.style.filter = "none";
                setTimeout(function(){ fightBtn.innerHTML = "Restart"; }, 3000);
                fightBtn.addEventListener('click', (e) => {  location.reload();});               
             }
        }else if ( dif >= 5 && dif <= 7) {
            chosenValue = Math.random(0,1); 
              if (ratioR > ratioL && chosenValue < 0.60) {  
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
//-------------------------------70/30--------------------//
         else if ( dif > 7 && dif <= 10){
          chosenValue = Math.random(0,1); 
           console.log(chosenValue +' 70/30');
            if (ratioL > ratioR && chosenValue < 0.70) {        
              fightBtn.innerHTML = data[idFighterL].name + ' win';
              resultR.style.filter = 'blur(1em)';
              resultL.style.filter = 'drop-shadow(0 -6mm 4mm rgb(178, 222, 39))';
              vs.style.filter = "none";
              setTimeout(function(){ fightBtn.innerHTML = "Restart"; }, 3000);
              fightBtn.addEventListener('click', (e) => {  location.reload();}); 
                
             } else {
              fightBtn.innerHTML = data[idFighterR].name + ' win';
              resultL.style.filter = 'blur(1em)';
              resultR.style.filter = 'drop-shadow(0 -6mm 4mm rgb(178, 222, 39))';
              vs.style.filter = "none";
              setTimeout(function(){ fightBtn.innerHTML = "Restart"; }, 3000);
              fightBtn.addEventListener('click', (e) => {  location.reload();}); 
             }

        }else if ( dif > 7 && dif <= 10) {
          chosenValue = Math.random(0,1); 
            if (ratioR > ratioL && chosenValue < 0.70) {  
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
          };
//---------------------------90/10-------------------------------//          
        } else if (dif > 10) {
       chosenValue = Math.random(0,1); 
          if (ratioL > ratioR && chosenValue < 0.90) {        
            fightBtn.innerHTML = data[idFighterL].name + ' win';
            resultR.style.filter = 'blur(1em)';
            resultL.style.filter = 'drop-shadow(0 -6mm 4mm rgb(178, 222, 39))';
            vs.style.filter = "none";
            setTimeout(function(){ fightBtn.innerHTML = "Restart"; }, 3000);
            fightBtn.addEventListener('click', (e) => {  location.reload();}); 
              
          } else {
            fightBtn.innerHTML = data[idFighterR].name + ' win';
            resultL.style.filter = 'blur(1em)';
            resultR.style.filter = 'drop-shadow(0 -6mm 4mm rgb(178, 222, 39))';
            vs.style.filter = "none";
            setTimeout(function(){ fightBtn.innerHTML = "Restart"; }, 3000);
            fightBtn.addEventListener('click', (e) => {  location.reload();});             
          }

        }else if ( dif > 10) {
       chosenValue = Math.random(0,1); 
          if (ratioR > ratioL && chosenValue < 0.90) {  
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
          };
        })
})
     .catch(err => console.log(err));
     














































