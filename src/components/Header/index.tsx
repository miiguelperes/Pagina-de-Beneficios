import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import beneficios from "../../assets/beneficios.png"
import setaAqui from "../../assets/seta-aqui.png"
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 20,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  
});

export default function SimpleCard(props: any) {
  const classes = useStyles();
  return (
      <div className="header2">
            <img src={beneficios} alt="Benefícios pra você" title="Benefícios pra você" className="img-fluid beneficios-pra-vc"/>
            <p style={{textAlign: 'center'}}>O Martins.com.br reuniu todas as vantagens em um só lugar. <span>Aqui!</span> <img src={setaAqui} alt="Aqui" title="Aqui" className="img-fluid seta-aqui"/> </p>
      </div>
  );
}
