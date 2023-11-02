import Particles from "react-tsparticles";
import particleConfig from "./particleConfig";


function ParticleBg() {
  return (
    <div>

      <Particles params={particleConfig}></Particles>
    </div>
  )
}

export default ParticleBg;