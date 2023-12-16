import { useSelector } from "react-redux";

export function Display() {
  const gameIsPlaying = useSelector((state) => state.playing);
  const winner = useSelector((state) => state.winner);
  const player1Score = useSelector((state) => state.player1);
  const player2Score = useSelector((state) => state.player2);
  const advantage = useSelector((state) => state.advantage);

  if (winner) {
    return (
      <p className="text-xl font-semibold text-center text-gray-800">
        {winner === "player1" ? "Joueur 1 gagne" : "Joueur 2 gagne"}
      </p>
    );
  } else if (!gameIsPlaying) {
    return (
      <p className="text-xl font-semibold text-center text-gray-800">C'est la pause</p>
    );
  } else {
    let text = `Le score est : ${player1Score} - ${player2Score}`;

    if (advantage) {
      text += advantage === "player1" ? " avantage joueur 1" : " avantage joueur 2";
    }

    return (
      <p className="text-xl font-semibold text-center text-gray-800">
        {text}
      </p>
    );
  }
}
