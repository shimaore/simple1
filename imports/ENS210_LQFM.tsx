import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["SCL"],
  pin3: ["SDA"],
  pin4: ["VSS1"],
  pin5: ["VSS2"]
} as const

/** Ref https://www.sciosense.com/wp-content/uploads/2023/12/ENS210-Datasheet.pdf */
export const ENS210_LQFM = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        "jlcpcb": [
          "C2991202"
        ]
      }}
      manufacturerPartNumber="ENS210_LQFM"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-0.475" pcbY="-0.917" width="0.400" height="0.600" shape="rect" />
        <smtpad portHints={["pin2"]} pcbX="0.475" pcbY="-0.917" width="0.400" height="0.600" shape="rect" />
        <smtpad portHints={["pin3"]} pcbX="0.475" pcbY="0.917" width="0.400" height="0.600" shape="rect" />
        <smtpad portHints={["pin4"]} pcbX="-0.475" pcbY="0.917" width="0.400" height="0.600" shape="rect" />
        <smtpad portHints={["pin5"]} pcbX="0mm" pcbY="0mm" width="1.600" height="0.700" shape="rect" />
        <silkscreenpath route={[{"x":-1.076,"y":-1.076},{"x":-1.076,"y":1.076}]} />
        <silkscreenpath route={[{"x":1.076,"y":-1.076},{"x":1.076,"y":1.076}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=03ce0e9cf7024bfa83069a3001d9502e&pn=C2991202",
        rotationOffset: { x: 0, y: 0, z: 90 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
