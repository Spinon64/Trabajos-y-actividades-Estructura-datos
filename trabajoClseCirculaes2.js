class Nodo{
    constructor(dato){
      this.dato=dato;
      this.sig=null;
      this.ant=null;
    }
  }

  class ListaCirc{
    constructor(){
      this.primero=null;
    }

    agregar(nuevo){
        if(this.primero==null){
            this.primero=nuevo;
            nuevo.sig=nuevo;
            nuevo.ant=nuevo;
        } else {
            nuevo.sig = this.primero;
            nuevo.ant = this.primero.ant;
            this.primero.ant.sig=nuevo;
            this.primero.ant=nuevo;
        }
    }
    extraerInicio(){
        let aux=this.primero;
        if(this.primero==null)
        return null;
        if(this.primero.sig==this.primero){
            this.primero=null;
        } else {
            this.primero.sig.ant=this.primero.ant;
            this.primero.ant.sig=this.primero.sig;
            this.primero=this.primero.sig;
        }
        return aux;
    }
}
  