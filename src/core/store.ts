import create from 'zustand';
import { ModalStore } from './types';

export const useModalStore = create<ModalStore>((set) => ({
  modals: [],
  activate: (id: string) => {
    set((state) => ({
      ...state,
      modals: [...state.modals, id]
    }));
  },
  deactivate: (id: string) => {
    set((state) => ({
      ...state,
      modals: state.modals.filter((m) => m !== id)
    }));
  }
}));
