class Nodo {
    constructor(numero) {
        this.numero = numero;
        this.izq = null;
        this.der = null;
    }    
}

class Arbol {
    constructor() {
        this.raiz = null;
    }

    agregar(nuevo){
        if(this.raiz == null){
            this.raiz = nuevo;
        } else {
            this._agregar(nuevo, this.raiz);
        }


    }    

    _agregar(nuevo, nodox){
        if(nuevo.numero < nodox.numero){
            if(nodox.izq == null){
                nodox.izq = nuevo;
            } else {
                this._agregar(nuevo, nodox.izq);
            } 
        } else {
            if(nodox.der == null){
                nodox.der = nuevo;
            } else {
                this._agregar(nuevo, nodox.der);
            }
          
        }
    }

    inOrder(){
        if(this.raiz == null){
            console.log(".");
        } else {
            _inOrderRec(this.raiz);
        }
    }

    inOrderRec(nodox){
        if(nodox.izq != null)
            this.inOrderRec(nodox.izq);
        console.log(nodox.numero);
        if(nodox.der != null)
            this._inOrderRec(nodox.der);
    }
}

let datos=new Arbol();
  let num=new Nodo(2);
  datos.agregar(num);
  num=new Nodo(3);
  datos.agregar(num);
  num=new Nodo(4);
  datos.agregar(num);
  num=new Nodo(5);
  datos.agregar(num);
  num=new Nodo(1);
  datos.agregar(num);
  num=new Nodo(8);
  datos.agregar(num);
  num=new Nodo(11);
  datos.agregar(num);
  num=new Nodo(6);

  console.log(datos.raiz);