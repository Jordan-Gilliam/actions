import { CalendarDate, CalendarDateTime } from "@internationalized/date"
import clsx, { ClassValue } from "clsx"
import { customAlphabet } from "nanoid"
import { DateValue } from "react-aria"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const nanoid = customAlphabet(
  "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
)
export function newId(len: number = 16): string {
  return nanoid(len)
}

export const LETTERS_LOWER = "abcdefghijklmnopqrstuvwxyz"
export const LETTERS_UPPER = LETTERS_LOWER.toUpperCase()
export const NUMBERS = Array.from(Array(1000).keys()).join("")

export const dashCase = (str: string) =>
  str.replace(/([A-Z])/g, (g) => `-${g[0]!.toLowerCase()}`)

export const toTitleCase = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1)

export const camelCaseToTitleCase = (str: string) => {
  // take a camel case string like generateImageUrl and return Generate Image Url
  const words = str.split(/(?=[A-Z])/)
  return words
    .map((word) => toTitleCase(word))
    .join(" ")
    .replaceAll("_", " ")
}

export function base64Encode(str: string): string {
  return Buffer.from(str, "utf-8").toString("base64")
}

export function base64Decode(base64Str: string): string {
  return Buffer.from(base64Str, "base64").toString("utf-8")
}

export const logJSON = (data: any, prefix = "") => {
  console.log(prefix, JSON.stringify(data, null, 2), "\n")
}

export const getDateValueFromString = (str: string): DateValue | null => {
  const date = new Date(str)

  // if the date is invalid, return null
  if (isNaN(date.getTime())) return null

  // check if there is a time component
  if (str.includes(":")) {
    return new CalendarDateTime(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    )
  }

  return new CalendarDate(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
  )
}
