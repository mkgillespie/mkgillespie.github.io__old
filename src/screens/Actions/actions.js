import React from 'react';
import IconBox from '../../components/IconBox.js';
import TowC from '../../assets/icons/07010TowC.js'
import LockedoutC from '../../assets/icons/03020LockedoutC.js'
import BatteryC from '../../assets/icons/03019BatteryC.js'
import FlattireC from '../../assets/icons/03018FlattireC.js'
import RefuelingC from '../../assets/icons/03017RefuelingC.js'

import './actions.css';

function actions() {
	return (
		<div className="actionsbuttons">
			<IconBox icon={TowC} title="Tow" price="$89" className="col-12" />
			<IconBox icon={LockedoutC} title="Lockout" price="$59" />
	    <IconBox icon={RefuelingC} title="Fuel" price="$59" />
	    <IconBox icon={FlattireC} title="Tire Change" price="$59" />
	    <IconBox icon={BatteryC} title="Jump Start" price="$59" />
		</div>
	);
}

export default actions;
