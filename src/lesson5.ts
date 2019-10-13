import { type } from "os";

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

// generator ???
// not know why it complains
function* createFibonacciGenerator() {
  let lesson5_a= 0
  let lesson5_b =1
  while(true) {
    yield lesson5_a
    [a, b] =[b, a+b]
  }
}


// Type why it complains again
type Log = (message: string, userId?:string) => void
let lesson5_log:Log=(message, userId:'not signed') => {
  let time = new Date().toISOString()
}

function times(
  f: (index: number)=>void,
  n: number
) {
  for (let i=0; i<n; i++) {
    f(i)
  }
}

times(n=>console.log(n), 4)

function f(n) {
  console.log(n)
}

times(f(n), 4)

// Shorthand call signature
type Log2 = (message: string, userId?: string)=>void
// Full call signature
type Log3 = {
  (message: string, userId?:string): void
}

// Overloaded Function: a function with multiple signatures
type Reserve = {
  (from: Date, to: Date, destination: string): Reservation
}

type createElement = {
  (tag: 'a'): HTMLAnchorElement,
  (tag: 'canvas'): HTMLCanvasElement,
  (tag: 'table'): HTMLTableElement,
  (tag: string):HTMLElement,
}

// TODO: WHY IT COMPLAINS?
let createElement: createElement = (tag: string):HTMLElement=>{

}

function createElement1(tag: 'a'): HTMLAnchorElement
function createElement2(tag: 'canvase'): HTMLCanvasElement
function createElement3(tag: 'table'): HTMLTableElement
function createElement4(tag: string):HTMLElement {}

function warnUser(warning) {
  if(warnUser.wasCalled) {
    return
  }
  warnUser.wasCalled = true
  alert(warning)
}

warnUser.wasCalled = false

// rewrite
type WarnUser0 = {
  (warning: string): void,
  wasCalled: boolean
}

let warnUser0:warnUser0=(warning: string) =>{
  if(warnUser0.wasCalled) {
    return
  }
  warnUser0.wasCalled = true
  alert(warning)
}
warnUser0.wasCalled = false


