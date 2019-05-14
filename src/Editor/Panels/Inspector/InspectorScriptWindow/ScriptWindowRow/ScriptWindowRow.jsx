/*
 * Copyright 2018 WICKLETS LLC
 *
 * This file is part of Wick Editor.
 *
 * Wick Editor is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Wick Editor is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Wick Editor.  If not, see <https://www.gnu.org/licenses/>.
 */

import React, { Component } from 'react';
import './_scriptwindowrow.scss';

// https://flaviocopes.com/how-to-uppercase-first-letter-javascript/
const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

class ScriptWindowRow extends Component {
  render() {
    return(
      <div className="inspector-script-window-row-container">
        <div className="script-row-item inspector-script-window-row-name">{capitalize(this.props.name)}</div>
        <div className="script-row-item inspector-script-window-row-edit">Edit</div>
        <div className="script-row-item inspector-script-window-row-delete">Del</div>
      </div>
    );
  }
}

export default ScriptWindowRow
