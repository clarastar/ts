
// definite assignment assertions
// a definite assignment check is ts's way of making sure that by the time 
// ypu use a variiable, that variable has been assigned a value
let userId!: string
fetchUser()
userId.toUpperCase()

function fetchUser() {
  userId = '123'
}


type CompanyID = string & {readonly brand: unique symbol}
type OrderID =string & {readonly brand: unique symbol}
type UserID = string & {readonly brand: unique symbol}
type ID = CompanyID | OrderID | UserID

function CompanyID(id: string) {
  return id as CompanyID
}

function OrderID(id: string) {
  return id as OrderID
}

function UserID(id: string) {
  return id as UserID
}

function queryForUser(id: UserID) {

}
let compnayID = CompanyID('228828')
let orderID = OrderID('383838aa')
let userID = UserID('aa8288383')
queryForUser(userID)
queryForUser(orderID)

// Handling errors
function ask () {
  return prompt('when is your birthday?')
}

function parse(birthday: string): Date | null{
  let date = new Date(birthday)
  if (!isValid(date)) {
    return null
  }
  return date
}

let date = parse(ask())
function isValid (date: Date) {
  return Object.prototype.toString.call(date)=== '[object Date]'
  && !Number.isNaN(date.getTime())
}