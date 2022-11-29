class Nodo{                     
    constructor(value){
        this.value=value;
        this.izq=null;
        this.der=null;
    }
}


class Arbol{               
    constructor(expresion){
        this.pre="";     
        this.post="";  
        this.expresion=expresion; 
        this.raiz=null;                                   
        this.list=new Array()                       
        for (let i = 0; i < expresion.length; i++) {              
            this.list.push(new Nodo(expresion[i]));    
        }
}

    arbol(){
    let temp = this.list[0]
    let contador = 0;
        while(contador < this.list.length){
            if(temp !== null && (temp.value === "*" 
            || temp.value === "/")){

                temp.izq=this.list[contador-1]

                temp.der=this.list[contador+1]

                this.list.splice(contador+1,1)

                this.list.splice(contador-1,1)
            }
            contador++
            temp=this.list[contador]
        }
        temp=this.list[0]
        contador=0;
            while(contador < this.list.length){
                if(temp.value=="+" || temp.value=="-"){
                    temp.izq=this.list[contador-1]

                    temp.der=this.list[contador+1]

                    this.list.splice(contador+1,1)
                    
                    this.list.splice(contador-1,1)
                    contador--
                }
                contador++
                temp=this.list[contador]
            }
            this.raiz=this.list[0]
}


preOrder() 
{
     this.resPre = ""; 
    if(this.raiz == null) { 
        console.log(""); 
     } else { 
        this._preOrder(this.raiz); 
     }
    return this.resPre;
}

_preOrder(nodox) { 

    this.resPre += `${nodox.value}`; 
    if(nodox.izq !== null){ 
        this._preOrder(nodox.izq);
    }
    if(nodox.der !== null) { 
        this._preOrder(nodox.der);
    }
}

postOrder() { 
    this.resPost = ""; 
    if(this.raiz === null) { 
        return null; 
    }else { 
         this._postOrder(this.raiz); 
    }
    return this.resPost;
}

_postOrder(nodox) { 
    if(nodox.izq !== null){ 
        this._postOrder(nodox.izq);
    }
    if(nodox.der !== null) { 
        this._postOrder(nodox.der);
    }
    this.resPost+=`${nodox.value}`
   
}

}

let operacion = (lista)=>{
    let listaOperacion = Array.from(lista), lifo =[];
    

if(listaOperacion[0] == "+" || listaOperacion[0] == "-" 
|| listaOperacion[0] == "+" || listaOperacion[0] == "/"){

    while(listaOperacion.length != 0){
        let aux = listaOperacion.pop();
            if(aux != "+" && aux != "-" && aux != "*" && aux != "/"){
                lifo.push(parseInt(aux));
                     } else {
            let calc = [lifo.pop(), lifo.pop()];
                 if(aux == "+"){
                  lifo.push(calc[0] + calc[1]);
            } else if (aux == "-"){
                lifo.push(calc[0] - calc[1]);
            } else if (aux == "*"){
                lifo.push(calc[0] * calc[1]);
            } else if (aux == "/"){
                lifo.push(calc[0] / calc[1]);	
            }
        }
    }
} else {
    while(listaOperacion.length != 0){
        let aux = listaOperacion.shift();
             if(aux != "+" && aux != "-" && aux != "*" && aux != "/"){
                  lifo.push(parseInt(aux));
              } else {
            let calc = [lifo.pop(), lifo.pop()];
               if(aux == "+"){
                    lifo.push(calc[1] + calc[0]);
            } else if (aux == "-"){
                lifo.push(calc[1] - calc[0]);
            } else if (aux == "*"){
                lifo.push(calc[1] * calc[0]);
            } else if (aux == "/"){
                lifo.push(calc[1] / calc[0]);
            }
        }
    }

}
 return lifo[0];
}


let expresionNueva =new Arbol('5*8+3-1');    
expresionNueva.arbol();
console.log("Expresion Aritmetica");
console.log(expresionNueva.expresion);
console.log("PreOrder");
console.log(expresionNueva.preOrder());
console.log("postOrder");
console.log(expresionNueva.postOrder());
console.log("Resultado PreOrder");
console.log(operacion(expresionNueva.preOrder()));
console.log("Resultado PostOrder");
console.log(operacion(expresionNueva.postOrder()));