import React from 'react';
import './ComparisonColumns.scss';
import CodeDisplay from '../CodeDisplay';
import { TOOLTIP_MAP } from '../../data/tooltips'
import ReactToolTip from 'react-tooltip'

export default function ComparisonColumns(props) {
  const { items } = props;
  const generateListForArray = (arr) => {

    const helper = (arr, depth) => {
      if (arr.length === 0) { return null; }

      return (
        <ul key={depth}>
          {
            arr.map(arrItem => (
              Array.isArray(arrItem) ?
                helper(arrItem, depth + 1) :
                <li key={arrItem}>{arrItem}</li>
            ))
          }
        </ul>
      )
    }

    return helper(arr, 0)

  };

  return (
    <div className='comparison-columns'>
      <div className='patterns-row patterns-names'>
        <div className='pattern-column-header pattern-name'>Name</div>
        {
          items.map((item) => (
            <div className={`pattern-column pattern-name ${item.type}`} key={item.name}>
              <a href={item.link} target='_blank'>{item.name}</a>
            </div>
          ))
        }
      </div>

      {
          items.length > 0 && Object.keys(items[0].axes).map(axisName => {
            return (
              <div className='patterns-row' key={axisName}>
                <div className='pattern-column-header'>{axisName}</div>
                {
                  items.map(item => {
                    const key1 = axisName.toLowerCase().split(' ').join('-')
                    const subMap = TOOLTIP_MAP[key1]
                    const words = item.axes[axisName].split(' ')
                    const itemKey = `${axisName.toLowerCase().split(' ').join('-')}.${item.axes[axisName]}`

                    console.log(itemKey)
                    return (
                      <div className='pattern-column'>
                        {
                          words.map(word => (
                            subMap && subMap[word.toLowerCase()] ? <span>
                              <span className='hover-for-tooltip' data-tip data-for={`${axisName}.${word}`}>
                                {word}
                              </span>
                              <ReactToolTip id={`${axisName}.${word}`} effect='solid'>
                                {subMap[word.toLowerCase()]}
                              </ReactToolTip>
                            </span> :
                            <span>{word}</span>
                          ))
                        }
                      </div>
                    )
                  })
                }
              </div>
            )
          })
      }

      <div className='patterns-row patterns-notes'>
        <div className='pattern-column-header'>Notes</div>
        {
          items.map(item => (
            <div className='pattern-column' key={item.name}>
              { generateListForArray(item.notes) }
            </div>
          ))
        }
      </div>

      <div className='patterns-row patterns-code-sample'>
        {
          items.map(item => (
            <div className='pattern-column' key={item.name}>
              {
                item.codeSample &&
                  <CodeDisplay fileUrl={item.codeSample.code} language={item.codeSample.language} />
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}
