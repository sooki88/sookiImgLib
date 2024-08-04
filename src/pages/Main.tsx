import { useEffect } from "react";
import Header from "../components/main/Header";
import ImageList from "../components/main/ImageList";
import Pagination from "../components/Pagination";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { useMainStore } from "../stores/useMainStore";

export default function Main() {
  const {
    start,
    setStart,
    display,
    setDisplay,
    total,
    isFetching,
    fetchDatas,
  } = useMainStore((state) => ({
    start: state.start,
    setStart: state.setStart,
    display: state.display,
    setDisplay: state.setDisplay,
    total: state.total,
    isFetching: state.isFetching,
    fetchDatas: state.fetchDatas,
  }));

  const windowWidth = useWindowWidth();

  const handleClickPage = (selectedPage: number) => {
    setStart(selectedPage);
    fetchDatas();
  };

  useEffect(() => {
    let newDisplay = display;

    if (windowWidth < 1200) {
      newDisplay = 12;
    } else if (windowWidth >= 1200 && windowWidth < 1440) {
      newDisplay = 20;
    } else if (windowWidth >= 1440 && windowWidth < 1900) {
      newDisplay = 28;
    } else {
      newDisplay = 40;
    }

    if (newDisplay !== display) {
      setDisplay(newDisplay);
      fetchDatas();
    }
  }, [windowWidth, display, setDisplay]);

  return (
    <main className="w-full h-full pt-[180px] px-12 pb-[80px]">
      <Header />
      <ImageList />
      <Pagination
        start={start}
        display={display}
        total={total}
        isFetching={isFetching}
        onClick={handleClickPage}
      />
    </main>
  );
}
