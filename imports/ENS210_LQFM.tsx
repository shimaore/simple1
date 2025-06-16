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
        <smtpad portHints={["pin1"]} pcbX="-0.4749800000000022mm" pcbY="-0.9174479999999932mm" width="0.39999919999999994mm" height="0.5999987999999999mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="0.4749800000000022mm" pcbY="-0.9174479999999932mm" width="0.39999919999999994mm" height="0.5999987999999999mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.4749800000000022mm" pcbY="0.9174480000000074mm" width="0.39999919999999994mm" height="0.5999987999999999mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-0.4749800000000022mm" pcbY="0.9174480000000074mm" width="0.39999919999999994mm" height="0.5999987999999999mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0mm" pcbY="1.4210854715202004e-14mm" width="1.5999967999999998mm" height="0.6999986mm" shape="rect" />
<silkscreenpath route={[{"x":-1.0761725999999925,"y":-1.0762234000000035},{"x":-1.0761725999999925,"y":1.0761726000000067}]} />
<silkscreenpath route={[{"x":1.0762233999999893,"y":-1.0762234000000035},{"x":1.0762233999999893,"y":1.0761726000000067}]} />
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
