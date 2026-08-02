import { create } from 'zustand'

type SearchStore = {
  isOpen: boolean
  setOpen: (isOpen: boolean) => void
}

export const useSearchStore = create<SearchStore>((set) => ({
  isOpen: false,
  setOpen: (isOpen) => set({ isOpen }),
}))
