import React, { Component } from 'react'


class DisplayUsers extends Component {

  render () {
    return (
      <ol className= 'user-list'>
      	{this.props.profiles.map((profiles) => {
      		
      		const userName = this.props.users[profiles.userID].name;
            const movieName = this.props.movies[profiles.favoriteMovieID].name;
      		
      		return (
      	
      		<li key={profiles.id}>
              <p>{`${userName}\'s favorite movie is ${movieName}.`}</p>
    		</li>
			);
		
    })
      
      
      
      	}

      </ol>
    );
  }
}

export default DisplayUsers