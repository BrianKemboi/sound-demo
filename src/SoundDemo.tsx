import useSound from "use-sound";
//@ts-ignore
import x from "./sounds/boop.mp3";

const SoundDemo = () => {
  const [playBoop] = useSound(x);
  
  return <button onClick={() => playBoop()}>Play Sound</button>;
};

export default SoundDemo;
