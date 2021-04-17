import React from 'react';
import { Convert } from '../Server/api';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { TextField } from '@material-ui/core';
import './Tab.scss';

class Converter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { inputUnitName: "Meters", convType: 2, outputUnitName: "Feets", inputUnit: "", outputUnit: "", resultDisplay: "none", value: 0 };
    }

    handleChange = (event, newValue) => {

        var newState = this.state;
        newState = {
            
            "value": newValue,
            "inputUnitName": this.state.inputUnitName === "Meters" ? "Feets" : "Meters",
            "outputUnitName": this.state.outputUnitName === "Meters" ? "Feets" : "Meters",
            "convType": this.state.convType === 1 ? 2 : 1,
            "inputUnit": this.state.outputUnit,
            "outputUnit": this.state.inputUnit
        };

        this.setState(newState);
    };

    //gets the conversions and update the state to upates on front end
    onChangeUpdateInputUnit(event) {
        
        const finalData = this.GetConversion(event.target.value);
        this.setState({ "outputUnit": finalData[1], resultDisplay: "block", inputUnit: finalData[0] }, (e) => { console.log("state changed") });
        
    }

    //api call to get conversion
    GetConversion(inputUnit) {

        let res = Convert(this.state.convType, parseFloat(inputUnit !== undefined ? inputUnit : 1));
        if (res.status) {

            return [inputUnit, res.convertedUnit];
        }

        return ["", 0];
    }

    render() {
        return (

            <Grid align="center">
                <CssBaseline />

                <Grid className="welcome" justify="center">
                    {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '10vh' }}> */}
                    <Typography component="div">
                        Welcome {this.props.username}!
                    </Typography>
                </Grid>

                <Grid className="tab-grid" justify="center">
                    <Paper>
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab label="Meters to Feet" />
                            <Tab label="Feet to Meters" />
                        </Tabs>
                    </Paper>
                </Grid>


                <Grid className="unit-grid" justify="center">

                    {/* <Typography component="div" style={{ alignItems: 'center', backgroundColor: '#cfe8fc', height: '50vh' }}> */}
                    <Typography component="div">
                        <Grid>
                            <Grid>
                                <TextField size="small"
                                    onChange={event => this.onChangeUpdateInputUnit(event)}
                                    // onChange={e => GetConversion(convType, inputUnit)}
                                    id="unit" label={this.state.inputUnitName}
                                    type="text"
                                    variant="outlined"
                                    //InputProps={{ inputProps: { min: 1 } }}
                                    value={this.state.inputUnit} />

                    
                            </Grid>

                            <Grid>
                                <span style={{ display: this.state.resultDisplay }}>{this.state.inputUnit === "" ? 0 : this.state.inputUnit} {this.state.inputUnitName} = {this.state.outputUnit} {this.state.outputUnitName}</span>
                            </Grid>
                        </Grid>

                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

export default Converter;