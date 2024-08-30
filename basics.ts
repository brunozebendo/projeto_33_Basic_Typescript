//primitives: number, string, boolean
//more complex types: arrays, objects
//function types, parameters

//Primitives
//define que essa variável vai ser do tipo number minúsculo
let age: number;
age = 12.1;
//tipo string
let userName: string;
userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

//tipos complexos
//array com um tipo específicado 
let hobbies: string[]
hobbies = ['Sport', 'Cooking']

//definindo objetos com tipos determinados
let person: {
    name: string;
    age: number;
};

person = {
    name: 'Max',
    age: 32
};
//já aqui é para guardar um array daquele tipo de objeto

let people: {
    name: string;
    age: number;
} [];

//Type inference. O TS infere o tipo da variável, como no exemplo
//abaixo onde ele vai inferir ser uma string e dar erro se for
//declarado um número como mais abaixo, portanto, não é preciso
//declarar o tipo se se declarar diretamente a variável

let course = 'React - the complete guide';

//course = 12341

//No entanto, é possível declarar uma Union Types q é declarar
//mais de um tipo de variável aceitável
let course2: string | number = 'React - the complete guide';

course2 = 12341

let username: string | string [] = "qualquer coisa"

//Pode-se também estabelecer um alias, um apelido para a variável
//caso ela vá ser chamada várias vezes

type Person2 = {
    name: string;
    age: number;
};

let person2: Person2;

person2 = {
    name: "Bruno",
    age: 40
};

//Function & types
//na função abaixo, o TS vai inferir o resultado como sendo um number
function add2(a: number, b: number) {
    return a + b;
}
//mas a função também retornar void q é equivalente a null ou undefined
//então não seria possível fazer nada com o resultado
function printOutLoud(value: any) {
    console.log(value);
}

//Generics

/**Os **generic types** (tipos genéricos) em TypeScript são uma maneira de criar
 *  componentes, funções e classes que podem trabalhar com diferentes tipos de dados
 *  de forma segura e eficiente. Eles permitem que você defina tipos dinâmicos em
 *  tempo de compilação, oferecendo mais flexibilidade e segurança ao código.

Por exemplo, imagine que você queira criar uma função que retorne o valor que recebe
 como argumento. Em JavaScript, isso seria algo assim:*/


function identity1(value) {
  return value;
}

/*No entanto, essa função não especifica o tipo de `value`, o que pode levar a erros.
 Com TypeScript, você pode usar tipos genéricos para garantir que a função funcione
  com qualquer tipo de dado, mas de forma segura:*/


function identity<T>(value: T): T {
  return value;
}


/*Aqui, `<T>` é um tipo genérico que permite que a função `identity` trabalhe
 com qualquer tipo de dado. Quando você chama a função, você pode especificar o tipo:*/


console.log(identity<number>(1)); // 1
console.log(identity<string>("Hello")); // "Hello"

/*Os tipos genéricos são muito úteis para criar componentes reutilizáveis que podem
 trabalhar com diferentes tipos de dados sem perder a segurança de tipos. */