import { create } from "zustand";

const useSectionStore = create((set) => ({
  sectionRefs: [],
  setSectionRefs: (refs: any) => set({ sectionRefs: refs }),
}));

export default useSectionStore;
