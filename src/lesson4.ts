// Tuples are subtypes of Array
// Tuples supports optional elements too
let trainFares:[number, number?][] = [
  [123, 456]
]
let moreTrainFares: ([number]|[number, number])[] =[
  [123]
]

// Tuples alse supports rest elements
let friends: [string, ...string[]] =
['clara']

let list: [string, boolean, number] = 
['clara', false, 123]


// Readonly elements and tuples
let as: readonly number[]=[1, 2, 3]
let bs: readonly number[] = as.concat(4)
let three = bs[2]
as[4] = 5

as.push(6)

// a couple of longer-form ways to declare read-only arrays and tuples
type A = readonly string[]
type B = ReadonlyArray<string>
type C = Readonly<string[]>

type D = readonly [number, string]
type E = Readonly<[number, string]>

// a function that return void
function voidFuction() {
  let a = 2 + 2
  let b = a*a
}
