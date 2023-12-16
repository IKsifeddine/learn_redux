import { useDispatch } from "react-redux";
import { pointScored } from "./store";

export function PointScoredButton({ playerId, children }) {
  const dispatch = useDispatch();

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={() => {
        dispatch(pointScored(playerId));
      }}
    >
      {children}
    </button>
  );
}
