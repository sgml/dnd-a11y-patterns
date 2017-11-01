// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, {Component} from 'react';
import Listbox from '../components/Listbox/Listbox';
import ListboxOption from '../components/Listbox/ListboxOption';

class SortingListboxView extends Component {
  renderDocumentation() {
    return (
      <div>
        <h2 className="slds-text-heading_medium slds-p-vertical_medium">
          Sorting a listbox
        </h2>
        <ul className="slds-list_dotted slds-p-bottom_medium">
          <li>
            Use arrow keys to select an option
          </li>
          <li>
            Press Space to enter into drag mode
          </li>
          <li>
            Use arrow keys to select a new position
          </li>
          <li>
            Press Space to drop option in new position
          </li>
        </ul>
      </div>
    )
  }

  renderExample() {
    return (
      <Listbox ariaLabel="Listbox" hasDragDrop>
        <ListboxOption name="Ice Cream"/>
        <ListboxOption name="Pie"/>
        <ListboxOption name="Cake"/>
        <ListboxOption name="Cupcake"/>
        <ListboxOption name="Donut"/>
        <ListboxOption name="Sorbet"/>
      </Listbox>
    );
  }

  render () {
    return (
      <article>
        {this.renderDocumentation()}
        {this.renderExample()}
      </article>
    ); 
  }
}

export default SortingListboxView;