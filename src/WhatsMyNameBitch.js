import { useUserInfo } from "./zustand/store";

const WhatsMyNameBitch = () => {
  const sayMyName = useUserInfo((state) => state.whatsMyNameBitch);
  const userName = useUserInfo((state) => state.userName);
  return (
    <div>
      <p>My name is: {userName}</p>
      <button onClick={sayMyName}>WhatsMyNameBitch</button>
    </div>
  );
};

export default WhatsMyNameBitch;
