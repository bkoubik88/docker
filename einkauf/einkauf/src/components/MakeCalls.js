import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const URL = API_BASE_URL;

export default function MakeCalls() {
  const classes = useStyles();

  const [getData, setGetData] = React.useState({ vorname: "", nachname: "" });
  const [getDataget, setGetDataget] = React.useState("");
  const [vorname, setVorname] = React.useState("");
  const [nachname, setNachname] = React.useState("");

  function MakeGETCall() {
    axios.get(URL + "/hello").then((response) => {
      setGetDataget(response.data);
    });
  }

  React.useEffect(() => {
    setVorname(vorname);
    setNachname(nachname);
  }, [vorname, nachname]);

  function MakePOSTCall() {
    if (vorname !== "" && nachname !== "") {
      const daten = new FormData();
      daten.append("vorname", vorname);
      daten.append("nachname", nachname);

      axios.post(URL + "/PostCall", daten).then((response) => {
        setGetData(response.data[0]);
      });
    }
  }

  return (
    <div>
      <h1>Test Site from React</h1>
      <h4>Welcome</h4>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Vorname"
          value={vorname}
          onChange={(e) => setVorname(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Nachname"
          value={nachname}
          onChange={(e) => setNachname(e.target.value)}
        />
      </form>
      <Button variant="contained" color="primary" onClick={MakeGETCall}>
        GET CALL
      </Button>
      <Button variant="contained" color="secondary" onClick={MakePOSTCall}>
        POST CALL
      </Button>
      <h3>
        <p>
          {getData.vorname} {getData.nachname}
        </p>
        <p> {getDataget}</p>
      </h3>
    </div>
  );
}
