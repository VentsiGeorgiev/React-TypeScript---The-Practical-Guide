// # string, number, boolean

let userName: string = 'Max'
// let userName = 'Max'
// userName = 34

let userAge = 34
// let userAge: number = 34
// userAge = '34'

let isValid = true

let userId: number | string = 'x-01-123'
userId = 1010011
// userId = true

// # object
type User = {
  name: string
  age: number
  isAdmin: boolean
  id: string | number
}

let user: User

user = {
  name: 'Max',
  age: 34,
  isAdmin: true,
  id: 'x-01-1234', //101100
}

// # Array
// let hobbies: string[], number[], boolean[]
let hobbies: Array<string>
let personalHobbies: Array<string>

hobbies = ['sports', 'cooking', 'reading']
// hobbies = [{ name: 'sport' }]

// For const values, we usually rely on type inference
// since they are immutable and won't change
// const API_KEY: string = 'abc'

const API_KEY = 'abc'
// const API_KEY = 123

// # Functions
function add(a: number, b: number): number {
  const result = a + b
  // console.log(result) :void
  return result
}

type AddFn = (a: number, b: number) => number

function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b)
}

calculate(2, 5, add)

// # Custom type / Type Aliases
type adminId = string | number

let adminProfileId: adminId
adminProfileId = 'a-123'
adminProfileId = 123

// # Defining object types with interfaces

// An interface is used to define the shape of an object
// Unlike type aliases, it uses curly braces {} instead of =
interface Credentials {
  password: string
  email: string
}

let creds: Credentials

creds = {
  password: 'abc',
  email: 'abc@gmail.com',
}

// # Interfaces vs Custom types
// we can use interface to also define function types
// but for example CAN'T use interface to store a union type

function login(credentials: Credentials) {
  console.log(credentials)
}

// # Merging types

// type Admin = {
//   permissions: string[]
// }

// type AppUser = {
//   userName: string
// }

// type AppAdmin = Admin & AppUser

// let admin: AppAdmin

// admin = {
//   permissions: ['login'],
//   userName: 'Max',
// }

interface Admin {
  permissions: string[]
}

interface AppUser {
  userName: string
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin

admin = {
  permissions: ['login'],
  userName: 'Max',
}

// # Being specific with literal types

// let role: string // 'admin', 'user', 'editor'
type Role = 'admin' | 'user' | 'editor'
let role: Role

// role = 'manager'
role = 'admin'

// # Adding Type Guards

function performAction(action: string, role: Role) {
  if (role === 'admin') {
    console.log('role is admin')
  }
  if (role === 'editor') {
    console.log('role is editor')
  }
  if (role === 'user') {
    console.log('role is user')
  }
}

// # Making sense of generic types

let roles: Array<Role>
roles = ['admin', 'editor', 'user']

type DataStorage<T> = {
  storage: T[]
  add: (data: T) => void
}

const textStorage: DataStorage<string> = {
  storage: ['a', 'b', 'c'],
  add(data) {
    this.storage.push(data)
  },
}

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  }
}

const newUser = merge<{ name: string }, { age: number }>({ name: 'Max' }, { age: 44 })

newUser.name
newUser.age
