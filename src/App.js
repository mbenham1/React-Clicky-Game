import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import friends from "./friends.json";
import './App.css';

class App extends Component {
  state = {
    friends,
    count: 0,
    message: "Careful!  Don't click the same image twice!",
    highScore: 0,
    lose : false
  };

shuffleFriends = () => {
  return this.state.friends.sort(()=>Math.random() - 0.5)
}

clickedOrNot = (id) => {

  let {friends, count, message, highScore, lose} = this.state;

  friends = this.shuffleFriends();
  console.log(id);
  for (var i in friends) {
    if (friends[i].id === id) {
      if (friends[i].clicked) {
        count = 0;
        message = `Whoops. You already clicked ${friends[i].name.toUpperCase()}!`;
        lose = true;
        this.resetGame();
      } else {
        count++;
        message = "Keep clicking!"
        friends[i].clicked = true;
        lose = false;
        if (count > highScore) {
          highScore = count;
        }
      } 
    }
  }

  this.setState({
    friends, count, message, highScore, lose
  })

}

resetGame = () => {
  for (var i in friends) {
    friends[i].clicked = false;
  }
  this.setState({friends, count: 0})
}

//another shuffle function 

// shuffleFriends = (source, id) => { 

//   var currentIndex = source.length, temporaryValue, randomIndex;

//   while (0 !== currentIndex) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     temporaryValue = source[currentIndex];
//     source[currentIndex] = source[randomIndex];
//     source[randomIndex] = temporaryValue;
//   }

//   // return source;
//   this.setState({
//     friends: source,
//     count: this.state.count + 1,
//     message: "Keep clicking!"
//   });
  
// }

  render() {
    return (
      <div>
      <NavBar lose={this.state.lose} counter={this.state.count} high_score={this.state.highScore} message={this.state.message} />
      <Wrapper>
        {this.state.friends.map(friend => (
        <FriendCard
              id={friend.id}
              key={friend.id}
              friends={this.state.friends}
              name={friend.name}
              image={friend.image}
              location={friend.location}
              occupation={friend.occupation}
              clicked={friend.clicked}
              clickedOrNot={this.clickedOrNot}
              lose={this.state.lose}
            />
        ))}
      </Wrapper>
      </div>
    );
  }
}


export default App;

