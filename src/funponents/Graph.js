import React from 'react';
import './App.css';
import './Main.js';

//connect all this to SUBMIT button/page
const Graph = ({ results, handleFormSubmit, showResults }) => ({
	render() {
		return (
			<div id="pieChart">
				<img
					src="http://chart.apis.google.com/chart?chs=200x200&cht=p&chtt=Live Preview&chd=s:CDDEFH,Wps679&chco=fd746a,92caf7&chdl=sugar|visits&chxl=0:|jan|feb|mar|apr|may|jun|&chxt=x"
					alt="pie chart"
				/>
			</div>
		);
	}
});

export default Graph;
