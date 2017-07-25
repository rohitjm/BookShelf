import React from 'react'
import { Card, CardTitle , CardText} from 'material-ui/Card'

const AboutPage = () => (
	<Card className="container"> 
		<CardTitle title="About BookShelf" subtitle="Easily share your favorite content with your friends!" />
		<CardText>
			"How many times a day do you come across something and think to yourself, My mom would love this. Now with BookShelf, easily recommend books and movies to your loved ones in an instant without having to keep a list that can easily be misplaced or forgetten."
		</CardText>	
	</Card>
);

export default AboutPage;