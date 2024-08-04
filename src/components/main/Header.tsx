import { useState } from "react";
import Button from "../Button";
import { DROPDOWN, PLACEHOLDER, TITLE } from "../../constant";
import { useMainStore } from "../../stores/useMainStore";
import Dropdown from "../Dropdown";
import SearchBar from "../SearchBar";
import Modal from "../Modal";

export default function Header() {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

  const { sort, setSort, setQuery, setStart, fetchDatas } = useMainStore(
    (state) => ({
      sort: state.sort,
      setSort: state.setSort,
      setQuery: state.setQuery,
      setStart: state.setStart,
      fetchDatas: state.fetchDatas,
    })
  );

  const handleClickOrder = async (selectedSort: string) => {
    setSort(selectedSort);
    setStart(1);
    fetchDatas();
  };

  const handleSearch = (value: string) => {
    if (!value) {
      alert("검색어를 입력해주세요!");
      return;
    }
    setQuery(value);
    setStart(1);
    fetchDatas();
  };

  return (
    <div className="fixed top-0 left-0 right-0 flex flex-col gap-6 px-12 pt-12 pb-5 bg-gray-100">
      <div className="flex items-center justify-between">
        <h1 className="text-gray-600 large-bold">{TITLE.MAIN}</h1>
        <Button variant="primary" onClick={() => setIsAddModalOpen(true)}>
          <img
            src="/images/add.svg"
            alt="이미지추가 버튼"
            className="w-8 h-8 -ml-2"
          />
          새 이미지 추가
        </Button>
      </div>
      <div className="flex gap-5">
        <Dropdown
          list={DROPDOWN.SORT}
          selectedItem={sort}
          onClick={handleClickOrder}
        />
        <SearchBar
          placeholder={PLACEHOLDER.MAIN_SEARCHBAR}
          handleSearch={handleSearch}
        />
      </div>
      {isAddModalOpen && (
        <Modal onClose={() => setIsAddModalOpen(false)}>
          새 이미지 추가 기능이 준비중이에요!
          <br />
          다음에 다시 이용해주세요!
        </Modal>
      )}
    </div>
  );
}
