import * as React from 'react'
import { TOOLTIP_MAP } from '../data/tooltips'
import ReactToolTip from 'react-tooltip'

export default function Definitions() {
  return (
    <div>
      <h1>Definitions</h1>
      {
        Object.keys(TOOLTIP_MAP).map(axisName => (
          <div>
            <h2>{axisName}</h2>
            {
              Object.keys(TOOLTIP_MAP[axisName]).map(word => (
                <span>
                  <span className='hover-for-tooltip' data-tip data-for={`${axisName}.${word}`}>
                    {` ${word} | `}
                  </span>
                  <ReactToolTip id={`${axisName}.${word}`} effect='solid'>
                    {TOOLTIP_MAP[axisName][word]}
                  </ReactToolTip>
                </span> 
              ))
            }
          </div>
        ))
      }
    </div>
  )
}