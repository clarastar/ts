type TreeNode = {
  value: string
}
type LeafNode = TreeNode & {
  isLeaf: true
}
type innerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode ]
}

let lesson6_a: TreeNode = {
  value: 'a'
}

let lesson6_b: LeafNode = {
  value: 'b',
  isLeaf: true,
}

let lesson6_c: innerNode = {
  value: 'c',
  children: [lesson6_b]
}

function mapNode<T extends TreeNode>(
  node: T,
  f: (value:string) => string
): T {
  return {
    ...node,
    value: f(node.value)
  }
}

let lesson6_a1 = mapNode(lesson6_a, _=>_.toUpperCase())
let lesson6_b1 = mapNode(lesson6_b, _=>_.toUpperCase())
let lesson6_C1 = mapNode(lesson6_c, _=>_.toUpperCase())


type HasSides = {
  numberOfSides: number
}

type SidesHaveLength = {
  sideLength: number
}

function logPerimeter<
  Shape extends HasSides & SidesHaveLength 
>(s: Shape): Shape { 
  console.log(s.numberOfSides * s.sideLength)
  return s
}


interface Food {
  calories: number,
  tasty: boolean,
}

interface Sushi extends Food {
  salty: boolean,
}

interface Cake extends Food {
  sweet: boolean,
}

type lesson6_A = number
type lesson6_B = A | string


// Decleration merging
interface User {
  name: string
}

interface User {
  age: number
}

let lesson6_aa: User = {
  name: 'Clara',
  age: 123
}

interface Users<Name extends string> {
  age: Age
}

interface Users<Name extends string> {
  name: Name
}

interface Animal {
  readonly name: string,
  eat(food: string): void,
  sleep(hours:number): void,
}

interface Feline {
  meow(): void
}

class lesson6_Cat implements Animal, Feline {
  name = 'Wiskers'
  eat(food: string) {
    console.info('Ate some', food, '..Mm')
  }

  sleep(hours: number) {
    console.info('Slept for', hours, 'hours')
  }

  meow() {
    console.log('meow')
  }
}

class Zebra {
  trot() {
  }
}

class Poodle {
  trot() {
  }
}

function ambleAround (animal: Zebra) {
  animal.trot()
} 

let zebra = new Zebra
let poodle = new Poodle

ambleAround(zebra)
ambleAround(poodle)


type ExistingUser = {
  id: number,
  name: string,
}

type newUser = {
  name: string,
}

function deleteUser(user: {id?:number, 
name: string}) {
  delete user.id
}

let existingUser: ExistingUser = {
  id: 123,
  name: 'shengsh'
}

deleteUser(existingUser)



