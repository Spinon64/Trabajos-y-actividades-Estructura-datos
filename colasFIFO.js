class Proceso{
    constructor(ciclos) {
        this.ciclos = ciclos;
        this.sig = null;
        
    }
}

class FIFO{
    constructor(){
        this.primero=null;
    }
    agregar(nuevo){
        if(this.primero==null){
            this.primero=nuevo;
            nuevo.sig=nuevo;
            
        } else {
            nuevo.sig = this.primero;
        }
    }
    actual(){
        return this.primero;
    }
    pasaAlSiguiente(){
        this.primero=this.primero.sig;
    }
}

let misProcesos = new FIFO();
let ciclosVacios = 0;
let procesosAtendidos=0;
for (let i = 1; i<=300; i++){
    let probabilidad = Math.floor(Math.random()*100)+1;
    if(probabilidad<=35){
        let ciclos = Math.floor(Math.random()*11)+4;
        let nuevo = new Proceso(ciclos);
        misProcesos.agregar(nuevo);
    }
    if(misProcesos.actual()==null){
        ciclosVacios++;
    } else {
        misProcesos.actual().ciclos--;
        if(misProcesos.actual().ciclos==0){
            procesosAtendidos++;
            misProcesos.pasaAlSiguiente(); 
    }
  }
}
