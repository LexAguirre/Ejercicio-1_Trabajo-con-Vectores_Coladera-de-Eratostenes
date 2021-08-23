![Logo](img/ucol-logo.jpg)

# Ejercicio 1: Trabajo con Vectores - Coladera de Eratostenes

- FACULTAD DE TELEMATICA
- INGENIERÍA EN SOFTWARE
- “3ºG”
- ESTRUCTURA DE DATOS
- CATEDRATICO: RAMIREZ GONZALEZ HUMBERTO
- AGUIRRE ROMERO RAMÓN ALEJANDRO

## OBJETIVO

Resolver el siguiente problema para encontrar los números primos menores a 1000 usando el método de la coladera de Eratostenes. Importante seguir el método que se presenta aquí y no aplicar uno propio.

> ENTREGA: LUNES 23 DE AGOSTO DEL 2021

## EXPLICACIÓN DEL PROCESO

> 4.29 (LA COLADERA DE ERATÓSTENES)

Unenteri primo es cualquier entero que es divisible sólo entre él mismo y entre 1. La coladera de Eratóstenes es un método para encontrar números primos. Opera como sigue:

- Cree un arreglo con todos los elementos inicializados a 1 (verdadero). Los elementos del arreglo que tengan subíndices primos permanecerán en 1. Los demás elementos del arreglo en algún momento se establecerán a cero.

- Comenzando por el subíndice 2 (el subíndice 1 debe ser primo), cada vez que se encuentre un elemento del arreglo que sea 1, haga un cicllo por el resto del arreglo y establezca a cero todos los elementos cuyos subíndices sea un múltiplo de dicho subíndice. Para el subíndice 2, todos los elementos por encima de 2 que sea múltiplos de 2 se establecerán a cero (los subíndices 4, 6, 8, 10, etc.); en el caso del subíndice 3, todos los elementos por encima de 3 que sean múltiplos de 3 se establecerán a cero (los subíndices 6, 9, 12, 15, etc.); y así sucesivamente.

Terminando este proceso, los elementos del arreglo que aún estén establecidos a 1 indicarán que el subíndice es un número primo, así que podrán imprimirse. Escriba un programa con un arreglo de 1000 elementos que determine e imprima los números primos entre 1 y 999. Ignore el elemento 0 del arreglo.
