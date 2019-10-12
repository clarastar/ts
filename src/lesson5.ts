enum Language {
  English,
  Spanish,
  Russion,
}

let myFirstLanguage = Language.Russion
// should error but it does not
let mySixthLanguage = Language[6]

// by declaring with const it error now
const enum Languages {
  English,
  Chinese,
}

let mySixthLanguages = Languages[0]

const enum Flippable {
  Burger,
  Chair,
  Cup,
  Table,
}

function flip(f:Flippable){
  return 'flipped it'
}

flip(Flippable.Chair)
flip('eueue')


let lesson5_h = null
let lesson5_i:3 = 3
lesson5_i = 4


let lesson5_j = [1, 2, 3]
let lesson5_jj: number[] = [5,6,7]

lesson5_j.push(6)
lesson5_j.push('7')

// Function
function addNumber(a: number, b:number):number {
  return a+b
}

function add(a: number, b:number):string {
  return '33'
}

// the required params have to come first, followed by optional params
function log(message: string, userId?: string) {
  let time = new Date().toLocaleTimeString()
  console.log(time, message, userId || 'not signed in')
}

// another way of expressing optional and setting default
function log(message: string, userId='not signed in') {
  let time = new Date().toLocaleTimeString()
  console.log(time, message, userId || 'not signed in')
}

function sum(numbers: number[]):number {
  return numbers.reduce((total, n)=>total+n, 0)
}

sum([1,2,3])

// Rest Parameters
function sumVariadic(): number {
  return Array
  .from(arguments)
  .reduce((total, n)=>total+n, 0)
}

sumVariadic(1,2,3)

function sumVariadic2(...numbers: number[]): number {
  return Array
  .from(arguments)
  .reduce((total, n)=>total+n, 0)
}

sumVariadic2(1,2,3)


let lesson5_x = {
  a(){
    return this
  }
}

lesson5_x.a

function fancyDate() {
  return ${this.getDate()}/${this.getMonth()}/${this.getFullYear()}
}
fancyDate.call(new Date)
