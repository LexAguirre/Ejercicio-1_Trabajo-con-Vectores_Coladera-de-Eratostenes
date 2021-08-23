"use strict";

export default class Eratosthenes{
    constructor(){
        this.numFinal = 1000;
        this.primos = [];
        this.noPrimos = [];
    }

    filtroDeEratosthenes(){
        let limite = this.numFinal + 1;

        for(let i = 2; i < limite; i++){
            this.primos.push(i);

        } 
        console.log(this.primos)
        for(let i = 2; i < limite; i++){
            this.noPrimos.push(i);
        } 
        
        continarEliminacionX2:
        for (let i = 2; i < this.primos.length; i++){
            
            if(this.primos.indexOf(2*i) === -1){
                continue continarEliminacionX2;
            } else {
                this.primos.splice(i, 1)
            }
        }
        
        continarEliminacionX3:
        for (let i = 2; i < this.primos.length; i++){
            
            let posicion = this.primos.indexOf(3 * i)
            if(this.primos.indexOf(3 * i) === -1){
                continue continarEliminacionX3;
            } else {
                this.primos.splice(posicion, 1);
            }
        }

        continarEliminacionX5:
        for (let i = 2; i < this.primos.length; i++){
            
            let posicion = this.primos.indexOf(5 * i)
            if(this.primos.indexOf(5 * i) === -1){
                continue continarEliminacionX5;
            } else {
                this.primos.splice(posicion, 1);
            }
        }

        continarEliminacionX7:
        for (let i = 2; i < this.primos.length; i++){
            
            let posicion = this.primos.indexOf(7 * i)
            if(this.primos.indexOf(7 * i) === -1){
                continue continarEliminacionX7;
            } else {
                this.primos.splice(posicion, 1);
            }
        }

        continarEliminacionX11:
        for (let i = 2; i < this.primos.length; i++){
            
            let posicion = this.primos.indexOf(11 * i)
            if(this.primos.indexOf(11 * i) === -1){
                continue continarEliminacionX11;
            } else {
                this.primos.splice(posicion, 1);
            }   
        }

        continarEliminacionX13:
        for (let i = 2; i < this.primos.length; i++){
            
            let posicion = this.primos.indexOf(13 * i)
            if(this.primos.indexOf(13 * i) === -1){
                continue continarEliminacionX13;
            } else {
                this.primos.splice(posicion, 1);
            }   
        }

        continarEliminacionX17:
        for (let i = 2; i < this.primos.length; i++){
            
            let posicion = this.primos.indexOf(17 * i)
            if(this.primos.indexOf(17 * i) === -1){
                continue continarEliminacionX17;
            } else {
                this.primos.splice(posicion, 1);
            }   
        }

        continarEliminacionX19:
        for (let i = 2; i < this.primos.length; i++){
            
            let posicion = this.primos.indexOf(19 * i)
            if(this.primos.indexOf(19 * i) === -1){
                continue continarEliminacionX19;
            } else {
                this.primos.splice(posicion, 1);
            }   
        }

        continarEliminacionX23:
        for (let i = 2; i < this.primos.length; i++){
            
            let posicion = this.primos.indexOf(23 * i)
            if(this.primos.indexOf(23 * i) === -1){
                continue continarEliminacionX23;
            } else {
                this.primos.splice(posicion, 1);
            }   
        }

        continarEliminacionX29:
        for (let i = 2; i < this.primos.length; i++){
            
            let posicion = this.primos.indexOf(29 * i)
            if(this.primos.indexOf(29 * i) === -1){
                continue continarEliminacionX29;
            } else {
                this.primos.splice(posicion, 1);
            }   
        }

        continarEliminacionX31:
        for (let i = 2; i < this.primos.length; i++){
            
            let posicion = this.primos.indexOf(31 * i)
            if(this.primos.indexOf(31 * i) === -1){
                continue continarEliminacionX31;
            } else {
                this.primos.splice(posicion, 1);
            }   
        }

        //primos.splice(posicion, cantidad)
        return this.primos;
    
    }
    
}



