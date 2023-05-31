import { OrbitControls, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Model from "../model/Model"

const Design = () => {
  return (
    <Canvas >
        <Stage environment={"night"} intensity={0.6} shadows={"contact"} >
      <Model/>
        </Stage>
<OrbitControls enableZoom={false} />

    </Canvas>
  )
}

export default Design