import { PlayPauseButton } from "./PlayPauseButton";
import { Display } from "./Display";
import { ResetButton } from "./ResetButton";
import { PointScoredButton } from "./PointScoredButton";

export default function App() {
  return (
    <div>
      <Display />
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="buttons-row flex flex-col md:flex-row gap-4">
          <PointScoredButton playerId="player1">Point Joueur 1</PointScoredButton>
          <PointScoredButton playerId="player2">Point Joueur 2</PointScoredButton>
        </div>
        <div className="buttons-row flex flex-col md:flex-row gap-4">
          <ResetButton />
          <PlayPauseButton />
        </div>
      </div>
    </div>
  );
}
