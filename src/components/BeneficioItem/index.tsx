import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cashback_pin from "../../assets/cashback_pin.png";
import preco_pin from "../../assets/preco_pin.png";
import desconto_pin from "../../assets/desconto_pin.png";
import promocao_pin from "../../assets/promocao_pin.png";
import Img from "@lxsmnsyc/react-image";
import CircularProgress from "@material-ui/core/CircularProgress";
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
  const bull = <span className={classes.bullet}>•</span>;

  const returnButton = (type: any) => {
    let item = null;
    switch (type) {
      case 1:
        item = (
          <Button target="_blank" href={(props.item.link) ? props.item.link : 'https://martinsatacado.com.br'} style={{ height: 80}}  variant="contained" size="large" color="primary">
            Comprar
          </Button>
        );
        break;
      case 2:
        item = (
          <Button  target="_blank" href={(props.item.link) ? props.item.link : 'https://martinsatacado.com.br'} style={{ height: 80,color: '#ffffff', backgroundColor: '#7cb545'}}    variant="contained" size="large" color="primary">
            Comprar
          </Button>
        );
        break;
      case 3:
        item = (
          <Button  target="_blank" href={(props.item.link) ? props.item.link : 'https://martinsatacado.com.br'}  style={{ height: 80,color: '#ffffff', backgroundColor: '#9064e4'}}   variant="contained" size="large" color="primary">
            Comprar
          </Button>
        );
        break;
      case 4:
        item = (
          <Button target="_blank" href={(props.item.link) ? props.item.link : 'https://martinsatacado.com.br'} style={{ height: 80,color: '#ffffff', backgroundColor: '#45afe4'}} variant="contained" size="large" >
            Comprar
          </Button>
        );
        break;
    }
    return item;
  };
  const returnTypeDiv = (type: any) => {
    let item = null;
    switch (type) {
      case 1:
        item = (
          <div style={{height:'100%',display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
              <div
            style={{
              
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          ><Img
              src={desconto_pin}
              fallback={<CircularProgress />}
              alt="Cupom de Desconto"
              title="Cupom de Desconto"
              className="img-fluid"
            />
            <br />
            <span style={{ fontSize: 16, color: "#63666C" }}>
              Cupom de Desconto
            </span>
          </div></div>
        );
        break;
      case 2:
        item = (
          <div style={{height:'100%',display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
            <div
            style={{
              
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={promocao_pin}
              alt="Promoção"
              title="Promoção"
              className="img-fluid"
            />
            <br />
            <span
              style={{ fontSize: 16, color: "#63666C", textAlign: "center" }}
            >
              Promoção
            </span></div>
          </div>
        );
        break;
      case 3:
        item = (
          <div
            style={{
              height:'100%',display:'flex',
              flexDirection: 'column',
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
              <div
            style={{
              
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={preco_pin}
              alt="Queda de Preço"
              title="Queda de Preço"
              className="img-fluid"
            />
            <br />
            <span
              style={{ fontSize: 16, color: "#63666C", textAlign: "center" }}
            >
              Queda de Preço
            </span>
          </div></div>
        );
        break;
      case 4:
        item = (
          <div
            style={{
              height:'100%',display:'flex',flexDirection: 'column',
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
            style={{
              
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={cashback_pin}
              alt="Cashback BEM"
              title="Cashback BEM"
              className="img-fluid"
            />
            <br />
            <span
              style={{ fontSize: 16, color: "#63666C", textAlign: "center" }}
            >
              Cashback BEM
            </span>
          </div>
          </div>
        );
        break;
    }
    return item;
  };
  return (
    <Card style={{ marginBottom: 20, padding: 20 }}>
        <Row>
          <Col md={6} lg={6} xl={6}>
            <Row>
              <Col md={4} lg={4}>
                <div
                  className="text-center"
                  style={{
                    borderRight: "1px solid #d1d5db",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <a
                    target="_blank"
                    href={
                      props.item.link_page
                        ? props.item.link_page
                        : props.item.link
                        ? props.item.link
                        : "https://martinsatacado.com.br"
                    }
                  >
                    <img
                      style={{ objectFit: "cover", height: 85 }}
                      src={
                        props.item.image ||
                        "https://via.placeholder.com/118x85?text=Imagem+Indispon%C3%ADvel"
                      }
                      alt={props.item.title}
                    />
                  </a>
                </div>
              </Col>
              <Col md={4} lg={6}>
                <div
                  style={{
                    display: "flex",
                    height: "100%",
                    alignItems: "center",
                  }}
                >
                  <h3 style={{ fontSize: 18, color: "#63666C" }}>
                    {props.item.title}
                  </h3>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={6} lg={6} xl={6}>
            <Row>
              <Col md={12} lg={5} xl={6}>
                <div
                  style={{
                    display: "flex",
                    height: "100%",
                    alignItems: "center",
                  }}
                >
                  {props.item.coupon && (
                    <div
                      style={{
                        display: "inline-block",
                        fontWeight: "bold",
                        height: 50,
                        border: "1px dotted #9A9EA4",
                        fontSize: 22,
                        color: "#63666C",
                      }}
                    >
                      {props.item.coupon}
                    </div>
                  )}
                  {props.item.discount && (
                    <div
                      style={{
                        display: "inline-block",
                        fontWeight: "bold",
                        height: 50,
                        fontSize: 32,
                        color: "#63666C",
                      }}
                    >
                      {props.item.discount}
                      <span style={{ fontSize: 26, color: "#9A9EA4", marginLeft: 5 }}>
                        Off
                      </span>
                    </div>
                  )}
                  {props.item.cashback && (
                    <div
                      style={{
                        display: "inline-block",
                        fontWeight: "bold",
                        height: 50,
                        fontSize: 32,
                        color: "#63666C",
                      }}
                    >
                      {props.item.cashback}
                      <span style={{ fontSize: 26, color: "#9A9EA4", marginLeft: 5 }}>%</span>
                    </div>
                  )}
                </div>
              </Col>
              <Col md={12} lg={7} xl={6}>
                <Row>
                  <Col md={4} lg={6}>
                    {returnTypeDiv(props.item.type_id)}
                  </Col>
                  <Col md={8} lg={6}>
                    <div style={{display:'flex', height:'100%', justifyContent: 'center', alignItems: 'center'}}>
                      {returnButton(props.item.type_id)}
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
    </Card>
  );
}
