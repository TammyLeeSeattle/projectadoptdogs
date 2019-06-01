import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';
import axios from "axios";
import DogCard from '../components/DogCard'
import Grid from '@material-ui/core/Grid';

class DogList extends Component {
    constructor(props) {
        super(props);    
        console.log(props.chosenBreeds)
            this.state = {
                chosenBreeds: props.chosenBreeds,
                data: {},
                fetchedDogs : false
        };    
        
        this.getDogList = this.getDogList.bind(this);
      }

      getDogList () {
        var self = this;
        axios.post("/api/dogrecommendations", {
          chosenBreeds: self.state.chosenBreeds.split(", ").join(","),
        })
        .then(function(res) {
            console.log(res)
            self.setState({data : res.data, fetchedDogs : true })
        })
        .catch(function(err) {
          console.log(err)
        });
      }

      componentDidMount() {
        // call api
        this.getDogList();
      }

      render(){
          if (this.state.fetchedDogs == false){
              return ( <div>loading</div>)
          }
          return (
              <div>
                  <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="flex-start"
                   
                    >
                 {this.state.data.animals.map((dog) => {          
                    // Return the element. Also pass key     
                        return (
                            <Grid item xs={4}>
                            <DogCard dog={dog} />
                            </Grid>
                        ) 
                    })}
                    </Grid>
              </div>
          )
      }

}

export default DogList;