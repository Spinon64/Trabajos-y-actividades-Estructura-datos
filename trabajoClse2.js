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
    listar(){
      let res="";
      let temp=this.primero;
      while(temp!=null){
          res+=temp.numero + "  ";
          temp=temp.next;
      }
      return res;
    }

    extraerPrimero(){
        let temp = this.primero;
        this.primero=this.primero.next;
        return temp;

    }


    extraerUltimo(){
        let nodo = this.primero;
       while(nodo.next != null){
        if (nodo.next.next == null){
            let temp = nodo.next;
            nodo.next = null;
            return temp;
         } else {
            nodo = nodo.next;
         }
       }   
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
  num=new Nodo(8);
  datos.agregar(num);
  console.log(datos.listar());
  let first=datos.extraerPrimero(); 
  console.log(first.numero);
  let last=datos.extraerUltimo(); 
  console.log(datos.listar());
  console.log(last.numero);
  
