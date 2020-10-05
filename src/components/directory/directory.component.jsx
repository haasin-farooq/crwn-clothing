import React from 'react';
import { connect } from 'react-redux';

import { selectDirectorySelections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

const Directory = ({ sections }) => (
  <div className="directory-menu">
      {
          sections.map(({...section}) => (
              <MenuItem {...section} />
          ))
      }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySelections
})

export default connect(mapStateToProps)(Directory); 