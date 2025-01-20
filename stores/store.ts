import { AxiosError } from "axios";
import { createStore } from "zustand";

type State = {
  error: Error | AxiosError | null;
};

type Action = {
  setError: (error: State["error"]) => void;
};

export type Store = State & Action;

const defaultState: State = {
  error: null,
};

export const CreateGlobalStore = (initialState: State = defaultState) =>
  createStore<Store>()((set) => ({
    ...initialState,
    setError: (error) => set(() => ({ error })),
  }));
