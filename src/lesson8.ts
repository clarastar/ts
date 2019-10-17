type Unit = 'cm' | 'px' | '%'

let units:Unit[] = ['cm', 'px', '%']

function parseUnit(value: string): Unit | null {
  for (let i = 0; i< units.length; i++) {
    if (value.endsWith(units[i])) {
      return units[i]
    }
  }
  return null
}

type Width = {
  unit: Unit,
  value: number,
}

function parseWidth (width: number | string|null|undefined): Width|null {
  if (width == null) {
    return null
  }
  if (typeof width === 'number') {
    return {unit: 'px', value: width}
  }

  let unit = parseUnit(width)

  if (unit) {
    return {
      unit, 
      value:parseFloat(width)
    }
  }
  return null
}

type UserTextEvent = {
  value: string
}

type UserMouseEvent = {
  value: [number, number]
}

type UserEvent = UserTextEvent | UserMouseEvent

function handle (event: UserEvent) {
  if (typeof event.value === 'string') {
    event.value
    return
  }
  event.value
}

type FriendList = {
  count: number,
  friends: {
    firsrName: string
    lastName: string
  }[]
}

type APIResponse = {
  user: {
    userId: string,
    friendList: FriendList
  }
}

function getAPIResponse ():
Promise<APIResponse> {
  // todo how to return 
  return new Promise()
}

function renderFriendList(friendList: FriendList) {
}

function get<
O extends object,
K extends keyof O
> (
  o:O,
  k:K
):O[K] {
  return o[k]
}

type ActivityLog = {
  lastEvent: string
  events: {
    id: string
    timpstamp: string
    type: 'Read' | 'Write'
  }[]
}
 let activityLog: ActivityLog = {
   lastEvent: '',
   events: {
     id:'',
     timestamp: '',
     type: 'Read'
   }
 }

 let lastEvent = get(activityLog, 'lastEvent')
