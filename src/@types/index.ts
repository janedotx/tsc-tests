export interface Item {
  next: Item | null
  value: string
}

export type DLLItem  = Item & { prev: Item | null }