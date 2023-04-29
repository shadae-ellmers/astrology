export interface StarsignData {
  name: string
  dates: string
  image: string
}
export interface Starsign extends StarsignData {
  id: number
}
export interface UserData {
  name: string
  sun: string
  moon: string
  rising: string
}

export interface User extends UserData {
  id: number
}
