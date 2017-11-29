import React from 'react';
import PropTypes from 'prop-types';

const rplSysIconColors = {
  'blue': '#1666af',
  'button': '#0075c9',
  'action': '#0075c9',
  'selection': '#406f9a',
  'brand': '#254b6e',
  'alert-orange': '#ff8400',
  'alert-yellow': '#ffd200',
  'alert-green': '#95d600',
  'alert-blue': '#57c1e8',
  'alert-red': '#cf102d',
  'black': '#222',
  'gray-dark': '#444',
  'gray': '#6d6d6d',
  'gray-light': '#ccc',
  'gray-lighter': '#dcdcdc',
  'white': '#fff',
  'green-light': '#72B325',
  'teal-light': '#49c3b1',
};

const IconRequiredProps = {
  className: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  alt: PropTypes.string,
};

function Icon({
    className = '',
    icon = 'checkCircle',
    size = 1,
    color = 'inherit',
    alt = '',
    direction,
    ...other,
}) {

  const relativeSize = 16 * size;

  const svgPathRegex = /^M.?[0-9]+/;

  const customIcon = svgPathRegex.test(icon);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      focusable={ false }
      className={ className }
      width={`${relativeSize}px`}
      height={`${relativeSize}px`}
      viewBox="0 0 64 64"
      { ...other }>
      <title>{ alt }</title>
        <path d={icon} fill={rplSysIconColors[color]} />
    </svg>
  );
}

Icon.propTypes = IconRequiredProps;

export default Icon
