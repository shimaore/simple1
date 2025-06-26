import { A_470533000 } from "./imports/A_470533000"
import { ENS210_LQFM } from "./imports/ENS210_LQFM"
const testBoard = () => (
  <board
    width="20mm" height="30mm"
  >
    <subcircuit pcbY={5} autorouter="sequential-trace">
      <ENS210_LQFM name="U1"
        connections={{
          VDD: "J1.VDD",
          VSS1: "J1.VSS",
          VSS2: "U1.VSS1",
          SDA: "J1.SDA",
          SCL: "J1.SCL",
        }}
      />
      <pinheader name="J1" pinCount={4}
        showSilkscreenPinLabels={true}
        footprint="pinrow4_p2.54_nosquareplating"
        pinLabels={["VDD","VSS","SDA","SCL"]}
        schX={-12} schY={0}
        pcbX={0} pcbY={5} pcbRotation={0}
      />
    </subcircuit>
    <subcircuit pcbY={-10} autorouter="sequential-trace">
      <A_470533000 name="J2"
        pcbRotation={180}
        connections={{
          pin1: "J3.pin1",
          pin2: "J3.pin2",
          pin3: "J3.pin3",
          pin4: "J3.pin4",
        }}
      />
      <pinheader name="J3" pinCount={4}
        showSilkscreenPinLabels={true}
        footprint="pinrow4_p2.54_nosquareplating"
        pinLabels={["GND","+12V","SIGNAL","PWM"]}
        schX={-12} schY={0}
        pcbX={0} pcbY={7} pcbRotation={0}
      />
    </subcircuit>
  </board>
)

export default testBoard
