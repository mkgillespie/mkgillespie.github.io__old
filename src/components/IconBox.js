import React from 'react';
import Icon from './icon.js';

function IconBox({icon, title, price, className, ...other}) {
	return (
		<div
			className={`iconBox ${className}`}
			{...other}>
			<Icon icon={icon} size={4} color="white" />
			<h3>{title}</h3>
			<p>from {price}</p>
		</div>
	);
}

export default IconBox;