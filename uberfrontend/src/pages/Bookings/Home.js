import { ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import TweetList from "./TweetList";
import React, { Component } from "react";
//import axios from 'axios';

class THome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bookings: '', polarity: undefined, items: ''
    };
  }; 
  
  componentDidMount() { 
    fetch("http://18.211.239.93:5000/bookings-results")
      .then(res => res.json())
      .then(result => {
          //alert(result);
          console.log("result", result);
          this.setState({bookings:<tbody>{ result.map((item, index) => (<tr><td key={index}>{item.user}</td><td key={index}>{item.source}</td>
            <td key={index}>{item.destination}</td><td key={index}>{item.busnumber}</td><td key={index}>{item.date}</td>
            <td key={index}>{item.startTime}</td><td key={index}>{item.endTime}</td><td key={index}>{item.bookeddate}</td></tr>))}  </tbody>})
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      )
   
   } 
render(){
  return (
	  
	   // <TweetList tweets={this.state.tweets} />
	  <div>
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
    
    <table border='1'>
            <thead>
              <tr>
                <th>User Name</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Bus Number</th>
                <th>Date</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Booking Time</th>
              </tr>
            </thead>
    {this.state.bookings}
    </table>
    </div>
  );
}
}

export default THome;
