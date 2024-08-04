import LoadingLottie from "../../assets/loading-lottie.json";
import Lottie from "react-lottie-player";
import { useMainStore } from "../../stores/useMainStore";

export default function ImageListSkeleton() {
  const { display } = useMainStore((state) => ({
    display: state.display,
  }));

  const itemsSkeletone = Array.from({ length: display }, (_, i) => i + 1);

  return (
    <div className="grid gap-3 pr-1 overflow-y-auto h-screenImageList sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
      {itemsSkeletone.map((item) => (
        <div
          key={item}
          className="flex items-center justify-center w-full bg-gray-300 rounded-md grow aspect-square"
        >
          <Lottie
            loop
            animationData={LoadingLottie}
            play
            className="w-20 h-20"
          />
        </div>
      ))}
    </div>
  );
}
