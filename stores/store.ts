import { SegregatedPackages } from "@/constants/types";
import { createStore } from "zustand";
import { persist } from 'zustand/middleware'


type State = {
  slug: SegregatedPackages[] | null ,
  overviewLoading: boolean
};

type Action = {
  setSlug: (slug: State["slug"]) => void;
  setLoadingOverview: (isLoading: State['overviewLoading']) => void
};

export type Store = State & Action;

const defaultState: State = {
 slug: [],
 overviewLoading: false
};


const CreateGlobalStore = (initialState: State = defaultState) =>
  createStore<Store>()(
persist(
  (set) => ({
   ...initialState,
    setSlug: (slug) => set({ slug }),
    setLoadingOverview: (overviewLoading) => set({ overviewLoading })
  }),{
    name: 'package-store'
  }
))
export const globalStore = CreateGlobalStore();
