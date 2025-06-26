import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"]
} as const

export const A_470533000 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        "jlcpcb": [
          "C19795120"
        ]
      }}
      manufacturerPartNumber="A_470533000"
      footprint={<footprint>
        <hole pcbX="-1.270" pcbY="-1.485" diameter="1.250" />
        <platedhole  portHints={["pin1"]} pcbX="3.810" pcbY="0.675" outerDiameter="1.720" holeDiameter="1.020" shape="circle" />
        <platedhole  portHints={["pin2"]} pcbX="1.270" pcbY="0.675" outerDiameter="1.720" holeDiameter="1.020" shape="circle" />
        <platedhole  portHints={["pin3"]} pcbX="-1.270" pcbY="0.675" outerDiameter="1.720" holeDiameter="1.020" shape="circle" />
        <platedhole  portHints={["pin4"]} pcbX="-3.810" pcbY="0.675" outerDiameter="1.720" holeDiameter="1.020" shape="circle" />
        <silkscreenpath route={[{"x":-5.080,"y":2.269},{"x":5.0800,"y":2.269}]} />
        <silkscreenpath route={[{"x":-1.994,"y":-1.865},{"x":-5.080,"y":-1.865}]} />
        <silkscreenpath route={[{"x":-5.080,"y":-1.865},{"x":-5.080,"y":3.977},{"x":5.080,"y":3.977},{"x":5.080,"y":-1.865},{"x":-0.545,"y":-1.865}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=9a93067adc7a4c82860f56e3024924ad&pn=C19795120",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: -1, z: 3 },
      }}
      {...props}
    />
  )
}
