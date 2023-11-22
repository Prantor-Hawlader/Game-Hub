// import { OrbitControls, Stage } from "@react-three/drei"
// import { Canvas } from "@react-three/fiber"
// import Model from "./Model"
import LottiePlayer from 'react-lottie-player';


const LottieAnimation = (props) => {
 
  return <LottiePlayer animationData={props.animate} loop={true} play={true} />;
};

export default LottieAnimation;

    

//     <Canvas >
//         <Stage environment={"night"} intensity={0.6}  >
// <Model/>
//         </Stage>
// <OrbitControls enableZoom={false} />

//     </Canvas>
 

