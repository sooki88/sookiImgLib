import axiosInstance from "./axiosInstance";

/** 이미지 검색 조회 */
export async function getImageList(params: {
  query: string;
  start: number;
  display: number;
  sort: string;
}) {
  try {
    const res = await axiosInstance.get("/v1/search/image", { params });
    return res.data;
  } catch (error) {
    console.error(`이미지 검색 조회 요청 중 에러가 발생.`, error);
    throw new Error("이미지 검색 요청 실패 ");
  }
}
