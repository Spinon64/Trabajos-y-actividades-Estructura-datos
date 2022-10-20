class Nodo{
    constructor(numero){
      this.numero=numero;
      this.sig=null;
      this.ant=null;
    }
  }
  class ListaDoble{
    constructor(){
      this.primero=null;
      this.ultimo=null;
    }
    agregar(nuevo){
      if (!this.primero){
        this.primero=nuevo;
        this.ultimo=nuevo;
      }else{
        this.ultimo.sig=nuevo;
        nuevo.ant=this.ultimo;
        this.ultimo=nuevo;
      }
    }
   
    listar(){
      let res="";
      let temp=this.primero;
      while (temp){
        res+= temp.numero + "  ";
        temp=temp.sig;
      }
      return res;
    }

    inverso(){

        let res="";
        let prev = this.ultimo;
            while(prev  !=null){
                res += prev.numero + " ";
                prev = prev.ant;
            }
        return res;
    }

    invertir(){
       let prev = null;
        let temp = this.primero;
        let aux = this.primero.sig;
        while(this.ultimo != null){
           prev = this.ultimo;
           this.ultimo = this.ultimo.ant;

        }
        if(prev != null){
          temp = this.ultimo;
        }
    }



  }
 
  let lista=new ListaDoble();
  let n1=new Nodo(3);
  lista.agregar(n1);
  n1=new Nodo(4);
  lista.agregar(n1);
  n1=new Nodo(5);
  lista.agregar(n1);
  n1=new Nodo(6);
  lista.agregar(n1);
  lista.listar();
  lista.invertir();
  console.log(lista.listar());
  console.log(lista.invertir());