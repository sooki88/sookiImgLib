import { DROPDOWN, PLACEHOLDER } from "../../constant";
import { useMainStore } from "../../stores/useMainStore";
import Dropdown from "../Dropdown";
import SearchBar from "../SearchBar";

export default function FilterToolbar() {
  const { sort, setSort } = useMainStore((state) => ({
    sort: state.sort,
    setSort: state.setSort,
  }));

  const handleClickOrder = async (selectedSort: string) => {
    setSort(selectedSort);
  };

  const handleSearch = (value: string) => {
    console.log(value);
  };

  return (
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
  );
}
