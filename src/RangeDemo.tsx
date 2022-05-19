import { Box, Slider } from "@mui/material";
import { useRecoilValue } from "recoil";
import useSound from "use-sound";
import { soundState } from "./recoil";
//@ts-ignore
import clickSound from "./sounds/click.mp3";

// const SoundDemo = () => {
//   const [playBoop] = useSound(x);

//   return <button onClick={() => playBoop()}>Play Sound</button>;
// };

// export default SoundDemo;

export const RangeDemo = () => {
  const [playClick] = useSound(clickSound);
  const playSound = useRecoilValue(soundState);
  const handleChange = () => {
    if (playSound) playClick();
  };
  return (
    <Box width={300}>
      <Slider
        min={2}
        max={98}
        defaultValue={50}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={handleChange}
      />
    </Box>
  );
};
