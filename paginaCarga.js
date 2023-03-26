function cargar(){

            
    document.getElementById('tituloUno').innerHTML = '';
    let intervalID='';
    let caracter =0;
    let BarraCarga='';
    let caracterCarga='▓' //Caracter que se mostrará
    let derecha=0;
    let intervalID2='';
    //########################################  ANIMACIÓN
    function animacion(){
        if(!intervalID2)
        {   
            if(derecha===0){
                document.getElementById('animacion').innerHTML = '< |°_°|> ';
                derecha++;
            } else{
                document.getElementById('animacion').innerHTML = '<|°_°| >'                        
                derecha=0;
            }
        }
    }
    
    //########################################  EJECUTAR INTERVALO
    if(!intervalID){
        intervalID = setInterval(mostrar,100);
    }
    //########################################  DETENER INTERVALO
    function detener(){
        clearInterval(intervalID);                
        console.log('sttoped');
        document.getElementById('tituloUno').innerHTML = '@RubenTT91 <span>Rubencho</span><br/>--'        
        document.getElementById('mostrar').innerHTML = ``;
        document.getElementById('contenidoUno').innerHTML = '';
        setInterval(animacion,700);
    }
    
    //Function para mostrar el caracter
    function mostrar(){
        if(caracter===0){                    
            document.getElementById('mostrar').innerHTML = `Cargando (-)`;
            caracter++;
            document.getElementById('contenidoUno').innerHTML = `${BarraCarga}`;
            BarraCarga+=caracterCarga;                    
        } else if(caracter===1){                    
            document.getElementById('mostrar').innerHTML = 'Cargando (\\)';
            caracter++;
            document.getElementById('contenidoUno').innerHTML = `${BarraCarga}`;
            BarraCarga+=caracterCarga;                    
        } else if (caracter===2){                    
            document.getElementById('mostrar').innerHTML = 'Cargando (|)';
            caracter++;
            document.getElementById('contenidoUno').innerHTML = `${BarraCarga}`;
            BarraCarga+=caracterCarga;                    
        } else if(caracter===3){                    
            document.getElementById('mostrar').innerHTML = 'Cargando (/)';
            caracter++;
            document.getElementById('contenidoUno').innerHTML = `${BarraCarga}`;
            BarraCarga+=caracterCarga;                    
        }else {
            caracter=0;
            BarraCarga+=caracterCarga;
        }
    }
    //########################################  TIEMPO QUE DURA LA PÁGINA DE CARGA 
    setTimeout(detener,7000);


}