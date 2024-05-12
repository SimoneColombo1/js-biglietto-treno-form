
document.querySelector('#submit').addEventListener('click' , function() {

    const prezzo=0.276;
    const eta= parseInt(document.querySelector('input#eta').value, );
    const km= parseInt(document.querySelector('input#km').value, );
    const sum = km * prezzo;
    const PrezzoTotale= document.querySelector('span#PrezzoTotale'); 
    const scontoeta= document.querySelector('span#scontoeta'); 
    
    const scontoA= 42;
    const scontoB= 21;
    if  (eta > 18){
        if (eta > 65){
            const PrezzoScontato= (sum / 100) * scontoA;
            const totale= (sum - PrezzoScontato).toFixed(2);
            console.log(totale);
           
            
    PrezzoTotale.innerHTML = totale + '€' ;
    scontoeta.innerHTML = scontoA + '%';
     
        }
        else{
            console.log(sum);
            document.writeln(sum); 
              PrezzoTotale.innerHTML= sum + '€';
        }
    }
    else{
        const PrezzoScontato= (sum / 100) * scontoB;
        const totale= (sum - PrezzoScontato).toFixed(2);
        console.log(totale);
       PrezzoTotale.innerHTML = totale + '€' ;
       scontoeta.innerHTML = scontoB + '%';
    }

})