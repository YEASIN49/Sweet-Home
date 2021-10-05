import styled from 'styled-components';

const Section = styled.section`
	display: flex;
	justify-content: space-around;
	width: 100%;
	font-family: 'Roboto', sans-serif;
	padding: 30px 0;

	@media screen and (max-width: 768px){
		flex-direction: column;
	}
`;
const FormContainer = styled.div`
	width: 40%;
	// background: rgba(0,0,0,0.1);
	h2{
		// font-weight: 600;
		font-family: 'Roboto', sans-serif;
		margin-bottom: 15px;
	}
	
	label{
		display: block;
		width: 90%;
		// background-color: red;
		padding: 5px 10px 10px 5px;
		margin: auto;
		// margin-top: 10px;
		font-weight: 400;
		font-family: 'Roboto', sans-serif;
	}
	input{
		display: block;
		width: 90%;
		padding: 10px;
		margin: auto;
		margin-bottom: 10px;
		border-radius: 10px;
		border: 1px solid rgba(0,0,0,0.15);
		box-shadow: 5px 5px 7px rgba(0,0,0,0.115);
	}
	input[type=submit]{
		cursor: pointer;
		padding: 15px;
		margin-top: 30px;
		font-weight: bold;
		width: 120px;
		margin-left: 5%;
		background-color: #112031;
		color: #fff;	
		&:hover{
			background-color: rgba(0,0,0,0.03);
			color: #112031;
		}
	}


	@media screen and (max-width: 768px){
		width: 90%;
		margin: auto;
	}


`;
const MapContainer = styled.div`
	width: 40%;
	height: 300px;
	background: gray;

	h2{
		font-family: 'Roboto', sans-serif;
		margin-bottom: 15px;
	}

	@media screen and (max-width: 768px){
		width: 90%;
		margin: auto;
		margin-top: 50px;
	}
`;

const Contact = () => {
	return(
		<Section>
			<FormContainer>
				<h2>Book an appointment with us !</h2>
				<label>Your Name :</label>
				<input />
				<label>Your Email :</label>
				<input />
				<label>Mobile Number</label>
				<input />
				<label>Select Date</label>
				<input type="date" />
				<input type="submit" name="submit" value='Submit' placeholder="sybmit"/>
			</FormContainer>
			<MapContainer>
				<h2>Find us on map !</h2>
			</MapContainer>
		</Section>
	);

}

export default Contact;