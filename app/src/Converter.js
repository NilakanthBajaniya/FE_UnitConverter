import React, { useState } from 'react';
import { Convert } from './Server/api';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { TextField, Button } from '@material-ui/core';
import './Tab.scss';

const useStyles = makeStyles({
    root: {

        flexGrow: 1,

    },
});

function Converter(props) {

    const [value, setValue] = React.useState(0);
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);

        inputUnitName === "Meters" ? setInputUnitName("Feets") : setInputUnitName("Meters");
        outputUnitName === "Meters" ? setOutputUnitName("Feets") : setOutputUnitName("Meters");
        convType === 1 ? setConvType(2) : setConvType(1);

        setInputUnit(1);

        setResultDisplay("none");
    };


    const [inputUnitName, setInputUnitName] = useState("Meters");
    const [convType, setConvType] = useState(2);
    const [outputUnitName, setOutputUnitName] = useState("Feets");

    const [inputUnit, setInputUnit] = useState();
    const [outputUnit, setOutputUnit] = useState();
    const [resultDisplay, setResultDisplay] = useState("none");

    const GetConversion = async (convType, inputUnit) => {
        let res = await Convert(convType, parseFloat(inputUnit));

        if (res.statusCode === 200) {
            setOutputUnit(res.convertedUnit);
            setResultDisplay("block");
        }
        else
            alert("Some error occoured!");
    }
    return (

        <Grid align="center">
            <CssBaseline />

            <Grid className="welcome" justify="center">
                {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '10vh' }}> */}
                <Typography component="div">

                    Welcome {props.username}!

                </Typography>
            </Grid>

            <Grid className="tab-grid" justify="center">
                <Paper className={classes.root}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Convert to Feets" />
                        <Tab label="Convert to Meters" />
                    </Tabs>
                </Paper>
            </Grid>


            <Grid className="unit-grid" justify="center">

                {/* <Typography component="div" style={{ alignItems: 'center', backgroundColor: '#cfe8fc', height: '50vh' }}> */}
                <Typography component="div">
                    <Grid>
                        <Grid>
                            <TextField size="small" onChange={event => {setInputUnit(event.target.value); setResultDisplay("none");}}
                                id="unit" label={inputUnitName}
                                type="number"
                                variant="outlined"
                                value={inputUnit} />
                               
                               &nbsp; &nbsp;

                            <Button onClick={event => GetConversion(convType, inputUnit)}
                                variant="contained"
                                size="large"
                                color="primary">

                                Convert to {outputUnitName}
                            </Button>
                        </Grid>

                        <Grid>
                            <span style={{ display: resultDisplay }}>{inputUnit} {inputUnitName} = {outputUnit} {outputUnitName}</span>
                        </Grid>
                    </Grid>

                </Typography>
            </Grid>


        </Grid>
    );
}

export default Converter;