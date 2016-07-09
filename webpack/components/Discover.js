import React from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Discover extends React.Component {
	constructor(props) {
		super(props);
		this.state = { stateSelect: '' };
	}

	componentDidMount() {
	  $('.collapsible').collapsible();
	  $('select').material_select();
	}

	handleSelect(event, index, value) {
		this.setState({stateSelect: value});
	}

	render() {
		return(
			<div>
				<ul className="collapsible" data-collapsible="accordion">
			    <li>
			      <div className="collapsible-header"><i className="material-icons">local_atm</i>Take-Home Pay Calculator</div>
			      <div className="collapsible-body calculator">

			      	<div className="row state-selector">
				      	<div className="input-field">
				      		<div className="col s2">Choose your state:</div>
				      		<SelectField className="states-list" value={this.state.stateSelect} onChange={this.handleSelect.bind(this)}>
				      		  <MenuItem value="" disabled>Choose your state</MenuItem>
						        <MenuItem value="Alabama" primaryText="Alabama" />
										<MenuItem value="Alaska" primaryText="Alaska" />
										<MenuItem value="Arizona" primaryText="Arizona" />
										<MenuItem value="Arkansas" primaryText="Arkansas" />
										<MenuItem className="chosen-state" value="California" primaryText="California" />
										<MenuItem value="Colorado" primaryText="Colorado" />
										<MenuItem value="Connecticut" primaryText="Connecticut" />
										<MenuItem value="Delaware" primaryText="Delaware" />
										<MenuItem value="District of Columbia" primaryText="District of Columbia" />
										<MenuItem value="Florida" primaryText="Florida" />
										<MenuItem value="Georgia" primaryText="Georgia" />
										<MenuItem value="Hawaii" primaryText="Hawaii" />
										<MenuItem value="Idaho" primaryText="Idaho" />
										<MenuItem value="Illinois" primaryText="Illinois" />
										<MenuItem value="Indiana" primaryText="Indiana" />
										<MenuItem value="Iowa" primaryText="Iowa" />
										<MenuItem value="Kansas" primaryText="Kansas" />
										<MenuItem value="Kentucky" primaryText="Kentucky" />
										<MenuItem value="Louisiana" primaryText="Louisiana" />
										<MenuItem value="Maine" primaryText="Maine" />
										<MenuItem value="Maryland" primaryText="Maryland" />
										<MenuItem value="Massachusetts" primaryText="Massachusetts" />
										<MenuItem value="Michigan" primaryText="Michigan" />
										<MenuItem value="Minnesota" primaryText="Minnesota" />
										<MenuItem value="Mississippi" primaryText="Mississippi" />
										<MenuItem value="Missouri" primaryText="Missouri" />
										<MenuItem value="Montana" primaryText="Montana" />
										<MenuItem value="Nebraska" primaryText="Nebraska" />
										<MenuItem value="Nevada" primaryText="Nevada" />
										<MenuItem value="New Hampshire" primaryText="New Hampshire" />
										<MenuItem value="New Jersey" primaryText="New Jersey" />
										<MenuItem value="New Mexico" primaryText="New Mexico" />
										<MenuItem value="New York" primaryText="New York" />
										<MenuItem value="North Carolina" primaryText="North Carolina" />
										<MenuItem value="North Dakota" primaryText="North Dakota" />
										<MenuItem value="Ohio" primaryText="Ohio" />
										<MenuItem value="Oklahoma" primaryText="Oklahoma" />
										<MenuItem value="Oregon" primaryText="Oregon" />
										<MenuItem value="Pennsylvania" primaryText="Pennsylvania" />
										<MenuItem value="Rhode Island" primaryText="Rhode Island" />
										<MenuItem value="South Carolina" primaryText="South Carolina" />
										<MenuItem value="South Dakota" primaryText="South Dakota" />
										<MenuItem value="Tennessee" primaryText="Tennessee" />
										<MenuItem value="Texas" primaryText="Texas" />
										<MenuItem value="Utah" primaryText="Utah" />
										<MenuItem value="Vermont" primaryText="Vermont" />
										<MenuItem value="Virginia" primaryText="Virginia" />
										<MenuItem value="Washington" primaryText="Washington" />
										<MenuItem value="West Virginia" primaryText="West Virginia" />
										<MenuItem value="Wisconsin" primaryText="Wisconsin" />
										<MenuItem value="Wyoming" primaryText="Wyoming" />
	    		        </SelectField>
						    </div>
						  </div>

			      	<label for="salary">Salary</label>
			      	<input className="mdl-slider mdl-js-slider" type="range" min="0" max="400000" step="1" defaultValue="35000" id="salary" />

							<br />
							<br />
							<br />

							<div className="row">
								<div className="compare-states col s6 center">
									<i className="large material-icons">terrain</i>
									<p>After-Tax Income: $</p>
								</div>
								<div className="compare-states col s6 center">
									<i className="large material-icons">terrain</i>
									<p>After-Tax Income: $</p>
								</div>
								<div className="center">
									<button className="btn">Show neighborhoods in {this.state.stateSelect}</button>
								</div>
							</div>							

			      </div>
			    </li>
			    <li>
			      <div className="collapsible-header"><i className="material-icons">event_seat</i>Hamilton</div>
			      <div className="collapsible-body">
			      	<div className="row hamilton-cities">
								<div className="col s4 center">
									<img className='state' src='assets/states/california.png' />
									<p><a href="https://www.shnsf.com/Online/default.asp?BOparam::WScontent::loadArticle::permalink=hamilton&BOparam::WScontent::loadArticle::context_id=" target="_blank">San Francisco, CA</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/california.png' />
									<p><a href="http://hollywoodpantages.com/showinfo.php?id=75" target="_blank">Los Angeles, CA</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/dc.png' />
									<p><a href="https://medium.com/@kennedycenter/hamilton-at-the-kennedy-center-4245b945b0f4?promotionno=227963#.oi6v6ol6n" target="_blank">Washington D.C.</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/georgia.png' />
									<p><a href="http://www.hamiltonbroadway.com/tour.php" target="_blank">Atlanta, GA</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/massachusetts.png' />
									<p><a href="http://www.hamiltonbroadway.com/tour.php" target="_blank">Boston, MA</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/northcarolina.png' />
									<p><a href="http://www.hamiltonbroadway.com/tour.php" target="_blank">Charlotte, NC</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/ohio.png' />
									<p><a href="http://www.hamiltonbroadway.com/tour.php" target="_blank">Cleveland, OH</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/california.png' />
									<p><a href="http://www.hamiltonbroadway.com/tour.php" target="_blank">Costa Mesa, CA</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/colorado.png' />
									<p><a href="http://www.hamiltonbroadway.com/tour.php" target="_blank">Denver, CO</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/iowa.png' />
									<p><a href="http://www.hamiltonbroadway.com/tour.php" target="_blank">Des Moines, IA</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/texas.png' />
									<p><a href="http://www.hamiltonbroadway.com/tour.php" target="_blank">Houston, TX</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/nevada.png' />
									<p><a href="http://www.hamiltonbroadway.com/tour.php" target="_blank">Las Vegas, NV</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/oregon.png' />
									<p><a href="http://www.hamiltonbroadway.com/tour.php" target="_blank">Portland, OR</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/utah.png' />
									<p><a href="http://www.hamiltonbroadway.com/tour.php" target="_blank">Salt Lake City, UT</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/california.png' />
									<p><a href="http://www.hamiltonbroadway.com/tour.php" target="_blank">San Diego, CA</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/washington.png' />
									<p>Seattle, WA</p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/missouri.png' />
									<p>St. Louis, MO</p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/arizona.png' />
									<p>Tempe, AZ</p>
								</div>
							</div>				

			      </div>
			    </li>
			    <li>
			      <div className="collapsible-header"><i className="material-icons">check_circle</i>Rock the Vote</div>
			      <div className="collapsible-body">
			      	<p>Lorem ipsum dolor sit amet.</p>
			      </div>
			    </li>
			    <li>
			      <div className="collapsible-header"><i className="material-icons">wifi</i>Google Fiber</div>
			      <div className="collapsible-body">

			      	<h3 className="fiber">Current Cities</h3>

			      	<div className="row">
								<div className="col s4 center">
									<img className='state' src='assets/states/georgia.png' />
									<p>Atlanta, GA</p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/texas.png' />
									<p>Austin, TX</p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/missouri.png' />
									<p>Kansas City, MO</p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/kansas.png' />
									<p>Kansas City, KS</p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/tennessee.png' />
									<p>Nashville, TN</p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/utah.png' />
									<p>Provo, UT</p>
								</div>
							</div>

			      	<h3 className="fiber">Upcoming Cities</h3>

			      	<div className="row">
								<div className="col s4 center">
									<img className='state' src='assets/states/northcarolina.png' />
									<p>Charlotte, NC</p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/alabama.png' />
									<p>Huntsville, AL</p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/northcarolina.png' />
									<p>Raleigh-Durham, NC</p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/utah.png' />
									<p>Salt Lake City, UT</p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/texas.png' />
									<p>San Antonio, TX</p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/california.png' />
									<p>San Francisco, CA</p>
								</div>
							</div>
			      </div>
			    </li>
			  </ul>
			</div>
		)
	}
}

export default Discover;
