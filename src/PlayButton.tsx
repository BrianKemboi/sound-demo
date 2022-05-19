import { Button } from "@mui/material";
import { useRecoilState } from "recoil";
import { soundState } from "./recoil";

export const PlayButton = () => {
  const [playSound, setPlaySound] = useRecoilState(soundState);
  return (
    <Button onClick={() => setPlaySound(!playSound)}>
      {playSound ? "Mute Sound" : "Play Sound"}
    </Button>
  );
};
