import { type } from "os";

type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
type Day = Weekday | 'Sat' | 'Sun'

let nextDay: Record<Weekday, Day> = {
  Mon: 'Tue'
}

function isString(a: unknown): a is string {
  return typeof a === 'string'
}


// Conditional types
type IsString<T> = T extends string ? true: false

type lesson9_A = IsString<string>
type lesson9_B = IsString<number>


// distributive conditions 

type ToArray<T> = T[]

type lesson9_Aa = ToArray<number>
type lesson9_Bb = ToArray<number | string>

type ElementType<T> = T extends unknown[]? T[number]:T
type lesson9_Aaa = ElementType<number[]>

type ElementType2<T> = T extends (infer U) []? U:T
type lesson9_Bbb = ElementType2<number[]>

// Built in conditionall types
type lesson9_TTT = number | string
type lesson9_DDD = string
type lesson9_CCC = Exclude<lesson9_TTT,lesson9_DDD>


type lesson9_EEE = number | string
type lesson9_FFF = string
type lesson9_EF = Extract<lesson9_EEE,lesson9_FFF>


type A9 = {a?: number | null}
type B9 = NonNullable<A9['a']>

type F9 = (a: number) => string
type R9 = ReturnType<F9>


type A99 = {new(): B99}
type B99 = {b: number}
type I99 = InstanceType<A99>




