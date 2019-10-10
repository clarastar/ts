let i:number =1
let j=i*3


/***
 * a has a property b that’s a number.
 * a might have a property c that’s a string. And if c is set, it might be undefined.
 * a might have any number of numeric properties that are booleans.

 Excerpt From: Boris Cherny. “Programming TypeScript.” iBooks. 
 */
let lesson3_a: {
  b: number,
  c?: string,
  [key: number]:boolean  // index signature: key can be any word
}

lesson3_a = {
  b: 1,
  20:false,
  30: false,
  c:undefined,
}

// firstname can not be changed any more
let lesson3_user: {
  readonly firstName: string
} = {
  firstName: 'abby'
}

// “Empty object literal notation ({}). Try to avoid this.”
let danger: {}
danger = []
danger =2

type Age = number

type Person = {
  name: string, 
  age: Age
}

let ages = 55
let driver: Person = {
  name: 'James',
  age: ages
}

// you can not declare a type twice 
type Color = "red"
// type Color = "green"
let lesson3_b: Color = "red"

// inner type alias declarations shadow outer ones
let x = Math.random()<.5
if (x) {
  type Color = "blue"
  let lesson3_b = "blue"
} else {
  let leeson3_c: Color = 'red'
}

// Union and intersection
type Cat = {name: string, purrs:boolean}
type Dog = {name: string, barks: boolean}
type CatorDogorBoth = Cat | Dog
type CatAndDog = Cat&Dog


function trueOrNull(isTrue: boolean) {
  if (isTrue) {
    return true
  }
  return null
}

type Returns = string | null

function (a: string, b: number) {
  return a || b
}


let array =[1,2,3]
let array2 = ['1', '2', '3']
let arrayc: string[]=['a']
arrayc.push('b')

let arrayf = ['red']
arrayf.push('green')

let g = []
g.push(1)
g.push('22')

let h: number[] =[]
h.push(1)
h.push(22)

// 两种相同的表示方式
let lesson3_h:Array<string>
let lesson4_h:string[]

let lesson3_d = [2334, 'apple']
lesson3_d.push('383883')
lesson3_d.push(74774)


function buildArray() {
  let a = []
  a.push(1)
  a.push('123')
  return a
}

let myArray = buildArray()
myArray.push(true)

let lesson3_tuple1: [number] = [1]
let lesson3_tuple2: [string, string, number] = ['apple', 'orange', 3]

