import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"


const Test = () => {
  return (
<Canvas>
    <OrbitControls enableZoom={false}/>
<mesh>
<boxGeometry args={[1,1,1]} />
<meshStandardMaterial color={"red"}/>

</mesh>

</Canvas>
  )
}

export default Test