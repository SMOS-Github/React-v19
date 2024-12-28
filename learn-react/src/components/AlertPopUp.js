import React, { useState } from 'react'
export default function AlertPopUp(props) {

	return (
		<>
			<div className={`p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 opacity-${props.enable}`}>
				{props.myText}
			</div>			
		</>
	);	
}