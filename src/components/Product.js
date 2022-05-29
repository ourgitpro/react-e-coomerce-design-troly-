import React from 'react'
import {Panel} from 'rsuite'

const Product = (props) => {
  return (
  <>
    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: "100%" }}>
      <img src={props.img} style={{ width: "100%" }}/>
      <Panel header={props.heading}>
        <p>
          <small>
            A suite of React components, sensible UI design, and a friendly development experience.
          </small>
        </p>
      </Panel>
    </Panel>
  </>
  )
}

export default Product