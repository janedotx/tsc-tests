export interface Item {
  next: Item | null
  value: string | null
}

export type DLLItem  = Item & { prev: Item | null }