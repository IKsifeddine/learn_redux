import { useDispatch } from "react-redux";
import { restartGame } from "./store";

export function ResetButton() {
  const dispatch = useDispatch();

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={() => {
        dispatch(restartGame());
      }}
    >
      Remettre à zéro
    </button>
  );
}
