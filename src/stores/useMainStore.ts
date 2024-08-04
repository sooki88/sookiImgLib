import { create } from "zustand";
import { ImageType } from "../types/main.type";
import { getImageList } from "../api/main";

type MainState = {
  query: string;
  sort: string;
  imageList: ImageType[];
  total: number;
  start: number;
  display: number;
  isFetching: boolean;
  fetchDatas: () => Promise<void>;
};

type MainAction = {
  setQuery: (query: MainState["query"]) => void;
  setSort: (sort: MainState["sort"]) => void;
  setImageList: (imageList: MainState["imageList"]) => void;
  setTotal: (total: MainState["total"]) => void;
  setStart: (start: MainState["start"]) => void;
  setIsFetching: (isFetching: boolean) => void;
  setDisplay: (display: MainState["display"]) => void;
};

export const useMainStore = create<MainState & MainAction>((set, get) => ({
  query: "티셔츠",
  setQuery: (query) => set(() => ({ query: query })),
  sort: "date",
  setSort: (sort) => set(() => ({ sort: sort })),
  imageList: [],
  setImageList: (imageList) => set(() => ({ imageList: imageList })),
  total: 0,
  setTotal: (total) => set(() => ({ total: total })),
  start: 1,
  setStart: (start) => set(() => ({ start: start })),
  display: 10,
  setDisplay: (display) => set(() => ({ display: display })),
  isFetching: false,
  setIsFetching: (isFetching) => set(() => ({ isFetching })),
  fetchDatas: async () => {
    const { query, sort, start, display, setIsFetching } = get();
    setIsFetching(true);
    try {
      const res = await getImageList({ query, sort, start, display });
      set({ imageList: res.items, total: res.total });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsFetching(false);
    }
  },
}));
