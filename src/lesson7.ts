// as is only telling the type checker to treat sth as a different type

type IThing = {}
class lesson7_A implements IThing {}
class lesson7_B implements IThing {}

const thing: IThing = new lesson7_A()
const lesson7_a = thing as lesson7_A
const lesson7_b = thing as lesson7_B


// Omit<T, K>
interface ToDo {
  title: string,
  description: string,
  completed: boolean,
}

type ToDoPreview = Omit<ToDo, 'description'>

const todo:ToDoPreview = {
  title: 'clean room',
  completed: false,
}


let lesson7_aa: number[] = [1,2,3,4]

