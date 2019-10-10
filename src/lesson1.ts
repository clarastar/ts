let a: number = 123
let b:string = 'eyyeye'
let c:boolean[] =[true, false]


# 3+ [1]


function identity<T>(arg: T): T {
  return arg
}

identity('string')
identity(3)

function identity1(arg: string): number {
  return 3
}

identity1('number')

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

function loggingIdentity2<T>(arg: Array<T>): Array<T> {
  console.log(arg.length)
  return arg
}


let myIdentity: <T>(arg: T) => T= identity
let myIdentity1: <U>(arg: U) => U = identity