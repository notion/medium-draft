import React from 'react';
import PropTypes from 'prop-types';

import StyleButton from './stylebutton';

const CustomToolbar = ({ buttons }) => {
  if (buttons.length < 1) {
    return null;
  }

  return (
    <div className="md-RichEditor-controls">
      {buttons.map(type => {
        const iconLabel = {};
        iconLabel.label = type.label;

        return (
          <StyleButton
            {...iconLabel}
            key={type.style}
            active={false}
            onToggle={type.onClick}
            style={type.style}
            description={type.description}
          />
        );
      })}
    </div>
  );
};

CustomToolbar.propTypes = {
  buttons: PropTypes.array,
};

export default CustomToolbar;
