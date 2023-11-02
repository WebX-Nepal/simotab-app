import Particles from "react-tsparticles";
import particleConfig from "./particleConfig";
import "./particle.css";



function ParticleBg() {
  return (
    <div className="particle-container">

      <Particles params={particleConfig}></Particles>
    </div>
  )
}

export default ParticleBg;