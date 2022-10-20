class Nodo{
    constructor(numero){
      this.numero=numero;
      this.next=null;
    }
  }
  class Lista{
    constructor(){
      this.primero=null;
    }
    agregar(nuevo){
      if (this.primero==null)
        this.primero=nuevo;
      else{
        let temp=this.primero;
        while (temp.next!=null)
          temp=temp.next;
        temp.next=nuevo;
      }
    }
  
    agregarInicio(nuevo){
      if (this.primero==null)
        this.primero=nuevo;
      else{
          nuevo.next = this.primero;
          this.primero=nuevo;
      }
    }
    listar() {
      let list = "";
      let int = this.primero.next;
      while (int!=null) {
        list = int.numero + " " + list;
        int=int.next;
      }
      console.log(list);
    }


    listarInverso(lista){

      if(lista ==  null){
        lista = this.primero;
      } 
      console.log(lista.numero);
      if(lista.next != null){
        this.listarInverso(lista.next);
      } return;

}        
   

 
}
 
  let datos=new Lista();
  let num=new Nodo(2);
  datos.agregar(num);
  num=new Nodo(3);
  datos.agregar(num);
  num=new Nodo(4);
  datos.agregar(num);
  num=new Nodo(5);
  datos.agregar(num);
  console.log(datos.listarInverso());
  num=new Nodo(1);
  //datos.agregarInicio(num