import React from 'react';
import PatternOption from '../PatternOption';
import { LANGUAGE_TYPES } from '../../data/patterns-data';
import './PatternSelector.scss';

export default class PatternSelector extends React.Component {

  constructor(props) {
    super(props);

    const selectedPatterns = {};
    const oneOfTypeSelected = {};
    const types = new Set();
    props.allPatterns.forEach(pattern => types.add(pattern.type));
    Array.from(types).forEach(type => oneOfTypeSelected[type] = false);

    props.allPatterns.forEach(pattern => {
      if (oneOfTypeSelected[pattern.type] === false) {
        selectedPatterns[pattern.name] = true;
        oneOfTypeSelected[pattern.type] = true;
      } else {
        selectedPatterns[pattern.name] = false;
      }
    });

    this.state = selectedPatterns;
    props.onPatternChange(this.getSelectedPatternsFromObject(selectedPatterns));

    this.togglePatternSelection = this.togglePatternSelection.bind(this);
    this.toggleAllSelection = this.toggleAllSelection.bind(this);
  }

  getSelectedPatternsFromObject(obj) {
    return Object.keys(obj).filter(pattern => obj[pattern]);
  }

  togglePatternSelection(patternName) {
    const update = {};
    update[patternName] = !this.state[patternName];
    const nextState = Object.assign({}, this.state, update);
    this.setState(nextState);
    this.props.onPatternChange(this.getSelectedPatternsFromObject(nextState));
  }

  toggleAllSelection() {
    const nextState = Object.assign({}, this.state);
    const areAnySelected = this.getSelectedPatternsFromObject(nextState).length === 0;
    // If any are selected, deselect all, otherwise, select all
    Object.keys(nextState).forEach(pattern => {
      nextState[pattern] = areAnySelected;
    });
    this.setState(nextState);
    this.props.onPatternChange(this.getSelectedPatternsFromObject(nextState));
  }

  render() {
    const { allPatterns } = this.props;

    const patternsByType = {};
    patternsByType[LANGUAGE_TYPES.CREATIONAL] = allPatterns
      .filter(pattern => pattern.type === LANGUAGE_TYPES.CREATIONAL);
    patternsByType[LANGUAGE_TYPES.STRUCTURAL] = allPatterns
      .filter(pattern => pattern.type === LANGUAGE_TYPES.STRUCTURAL);
    patternsByType[LANGUAGE_TYPES.BEHAVIORAL] = allPatterns
      .filter(pattern => pattern.type === LANGUAGE_TYPES.BEHAVIORAL);

    const selectedPatterns = this.getSelectedPatternsFromObject(this.state);

    return (
      <div className='pattern-selector'>
        <p className='pattern-selector-caption'>Select the languages you want to compare.</p>

        <a
          className='pattern-selector-toggler'
          onClick={this.toggleAllSelection}
        >
          { selectedPatterns.length === 0 ? 'Select all' : 'Deselect all'}
        </a>

        <div className='pattern-selector-options'>

          {
            allPatterns.map(pattern => {
              const patternTypeClass = `${pattern.type.toLowerCase().split(' ').join('-')}-languages`;
              return (
                <PatternOption
                  key={pattern.name}
                  className={`${this.state[pattern.name] ? 'selected' : 'deselected'} ${patternTypeClass}`}
                  pattern={pattern}
                  onClick={this.togglePatternSelection}
                />
              );
            })
          }

        </div>

      </div>
    )
  }
}
