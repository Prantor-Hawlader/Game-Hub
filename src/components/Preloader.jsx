import {Text} from "@chakra-ui/react"
import "./Styles/Preloader.css";

const PreLoader = () => {

  return (
    <div className="container">
      <div className="psoload">
    <div className="straight"></div>
    <div className="curve"></div>
  
    <div className="center"></div>
    <div className="inner"><Text className="name" fontSize={"6xl"}
        fontFamily={"cursive"}
        fontWeight={"extrabold"}
        
          bgGradient="linear(to-l, #29acff, green.200)"
        bgClip={"text"}> P </Text></div>
    </div>
    </div>
  
  );
};

export default PreLoader;
