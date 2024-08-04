import { useEffect } from "react";
import { useMainStore } from "../../stores/useMainStore";
import ImageListSkeleton from "./ImageListSkeleton";

export default function ImageList() {
  const { imageList, isFetching, fetchDatas } = useMainStore((state) => ({
    imageList: state.imageList,
    isFetching: state.isFetching,
    fetchDatas: state.fetchDatas,
  }));

  useEffect(() => {
    fetchDatas();
  }, []);

  return (
    <>
      {isFetching ? (
        <ImageListSkeleton />
      ) : !imageList || imageList.length === 0 ? (
        <div className="flex items-center justify-center w-full text-center text-gray-500 h-screenImageList base-regular">
          검색된 이미지가 없어요.
          <br />
          다른 검색어를 입력해주세요.
        </div>
      ) : (
        <div className="grid gap-3 pr-1 overflow-y-auto h-screenImageList sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 scroll-block">
          {imageList.map((image, index) => (
            <img
              key={image.title + index}
              src={image.thumbnail}
              alt={`${image.title} 썸네일`}
              className="w-full border rounded-md grow aspect-square hover:border-main"
            />
          ))}
        </div>
      )}
    </>
  );
}
