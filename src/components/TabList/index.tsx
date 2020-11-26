import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import BeneficioItem from "../BeneficioItem";
import Switch from "@material-ui/core/Switch";
import Grow from "@material-ui/core/Grow";
import Cashback_filter from "../../assets/cashback_filter.jpg";
import Desconto_filter from "../../assets/desconto_filter.jpg";
import Preco_filter from "../../assets/preco_filter.jpg";
import Promocao_filter from "../../assets/promocao_filter.jpg";
import Cashback_filter_hover from "../../assets/cashback_filter_hover.jpg";
import Desconto_filter_hover from "../../assets/desconto_filter_hover.jpg";
import Preco_filter_hover from "../../assets/preco_filter_hover.jpg";
import Promocao_filter_hover from "../../assets/promocao_filter_hover.jpg";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Alert from "@material-ui/lab/Alert";
import NativeSelect from "@material-ui/core/NativeSelect";

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  selectEmpty: {},
  container: {
    display: "flex",
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
  tab: {
    "MuiAppBar-colorPrimary": {
      backgroundColor: "transparent",
    },
    "MuiBox-root": {
      padding: "0px",
    },
    "& .MuiTabPanel-root": {
      padding: "0px",
    },
    "& .MuiBox-root": {
      padding: "0px",
    },
  },
}));

export default function SimpleTabs(props: any) {
  const classes = useStyles();
  const [value, setValue] = useState(4);
  const [checked, setChecked] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState(99);


  /*
  useEffect(() => {
    if (props.props.type00.length == 0) {
      props.props.loadRequest({ filter01: { cashback: 99 } });
    }
  });*/

  useEffect(() => {
    //props.props.loadRequest({ filter01: { cashback: 99 } });
    var addressPage = window.location.href;
    var paramPage = addressPage.split("?");
    var newAddress = paramPage[paramPage.length - 1];
    if (addressPage.indexOf("cupons-desconto") > -1) setValue(0);
    else if (addressPage.indexOf("promocoes-exclusivas") > -1) setValue(1);
    else if (addressPage.indexOf("queda-preco") > -1) setValue(2);
    else if (addressPage.indexOf("cashback") > -1) setValue(3);
    else setValue(4);
  }, []);

  const handleCategoryFilter = (ev: any) => {
    props.props.loadRequest({
      filter01: {
        cashback: props.props.selected,
        category: Number(ev.target.value),
      },
    });
    setCategoryFilter(ev.target.value);
  };
  const selctCategoryComponent = () => {
    return (
      <div style={{ height: 100 }}>
        <div style={{ color: "#ffffff" }}>
          Filtrar por <span style={{ fontWeight: "bolder" }}>Segmento</span>
        </div>
        <div
          style={{
            backgroundColor: "#ffffff",
            width: 250,
            borderRadius: 7,
            marginBottom: 20,
          }}
        >
          <NativeSelect
            style={{
              width: "100%",
              background: "#252525",
              color: "#fff",
              borderRadius: 4,
              borderColor: "#03AEFC",
              textIndent: "0.01px",
            }}
            value={categoryFilter}
            onChange={handleCategoryFilter}
            inputProps={{
              name: "age",
              id: "age-native-label-placeholder",
            }}
          >
            <option
              style={{ backgroundColor: "#252525", color: "#fff" }}
              value={99}
            >
              Todos os seguimentos
            </option>
            <option
              style={{ backgroundColor: "#252525", color: "#fff" }}
              value={1}
            >
              Alimentação
            </option>
            <option
              style={{ backgroundColor: "#252525", color: "#fff" }}
              value={2}
            >
              Automotivo
            </option>
            <option
              style={{ backgroundColor: "#252525", color: "#fff" }}
              value={3}
            >
              Beleza
            </option>
            <option
              style={{ backgroundColor: "#252525", color: "#fff" }}
              value={4}
            >
              Casa e Construção
            </option>
            <option
              style={{ backgroundColor: "#252525", color: "#fff" }}
              value={5}
            >
              Farmácia
            </option>
            <option
              style={{ backgroundColor: "#252525", color: "#fff" }}
              value={6}
            >
              Informática e Eletro
            </option>
          </NativeSelect>
        </div>
      </div>
    );
  };

  const searchComponent = (title: any) => {
    return (
      <div>
        <Paper component="form" className={"boxSearch"}>
          <IconButton className={"iconButton"} aria-label="buscar">
            <SearchIcon />
          </IconButton>
          <InputBase
            className={"input"}
            placeholder="Busque pela palavra chave..."
            style={{ fontSize: 18 }}
            value={props.props.search}
            onChange={(e: any) => props.props.searchData(e.target.value)}
            inputProps={{ "aria-label": "Busque pela palavra chave" }}
          />
          <Divider className={"divider"} orientation="vertical" />
        </Paper>
        {value != 4 && (
          <Alert
            severity="warning"
            style={{
              marginBottom: 20,
              display: "flex",
              fontSize: "1.1em",
              justifyContent: "center",
              alignItems: "center",
              color: "#856404",
              background: "#fff3cd",
              borderColor: "#ffeeba",
              padding: ".75rem 1.25rem",
            }}
          >
            Exibindo apenas benefícios por tipo <strong>"{title}"</strong>.
            &nbsp;
            <a
              data-v-fae5bece=""
              onClick={() => {
                setValue(4);
              }}
              className="alert-link"
              target="_top"
              style={{ color: "#533f03" }}
            >
              Clique aqui
            </a>{" "}
            para exibir todos os benefícios.
          </Alert>
        )}
      </div>
    );
  };
  
  const handleChange = (event: any, newValue: any) =>{
    debugger
    props.props.saveSelected(99)
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
          disableRipple
          indicatorColor="secondary"
          classes={{ root: classes.tab }}
          value={value}
          onChange={handleChange}
        >
          <Tab
            component={() => (
              <Button
                style={{ minWidth: 180, maxWidth: "100%" }}
                onClick={() => { setValue(3); props.props.saveSelected(99); props.props.loadRequest({ filter01: { cashback: 99, category: 99 } })}}
              >
                {value == 3 ? (
                  <img
                    style={{ objectFit: "cover", height: 120 }}
                    src={Cashback_filter_hover}
                    alt={"Cashback_filter_hover"}
                  />
                ) : (
                  <img
                    style={{ objectFit: "cover", height: 120 }}
                    src={Cashback_filter}
                    alt={"Cashback_filter"}
                  />
                )}
              </Button>
            )}
            label="Item quer"
            {...a11yProps(3)}
          />

          <Tab
            component={() => (
              <Button
                style={{ minWidth: 180, maxWidth: "100%" }}
                onClick={() => { setValue(1); props.props.saveSelected(99); props.props.loadRequest({ filter01: { cashback: 99, category: 99 } })}}
              >
                {value == 1 ? (
                  <img
                    style={{ objectFit: "cover", height: 120 }}
                    src={Promocao_filter_hover}
                    alt={"Promocao_filter_hover"}
                  />
                ) : (
                  <img
                    style={{ objectFit: "cover", height: 120 }}
                    src={Promocao_filter}
                    alt={"Promocao_filter"}
                  />
                )}
              </Button>
            )}
            label="Item Two"
            {...a11yProps(1)}
          />
          <Tab
            component={() => (
              <Button
                style={{ minWidth: 180, maxWidth: "100%" }}
                onClick={() => { setValue(2); props.props.saveSelected(99); props.props.loadRequest({ filter01: { cashback: 99, category: 99 } })}}
              >
                {value == 2 ? (
                  <img
                    style={{ objectFit: "cover", height: 120 }}
                    src={Preco_filter_hover}
                    alt={"Preco_filter_hover"}
                  />
                ) : (
                  <img
                    style={{ objectFit: "cover", height: 120 }}
                    src={Preco_filter}
                    alt={"Preco_filter"}
                  />
                )}
              </Button>
            )}
            label="Item Three"
            {...a11yProps(2)}
          />
          <Tab
            disableRipple
            component={() => (
              <Button
                style={{ minWidth: 180, maxWidth: "100%" }}
                onClick={() => { setValue(0); props.props.saveSelected(99); props.props.loadRequest({ filter01: { cashback: 99, category: 99 } })}}
              >
                {value == 0 ? (
                  <img
                    style={{ objectFit: "cover", height: 120 }}
                    src={Desconto_filter_hover}
                    alt={"Desconto_filter_hover"}
                  />
                ) : (
                  <img
                    style={{ objectFit: "cover", height: 120 }}
                    src={Desconto_filter}
                    alt={"Desconto_filter"}
                  />
                )}
              </Button>
            )}
            label="Item One"
            {...a11yProps(0)}
          />
        </Tabs>
      </AppBar>
      <div
        data-v-fae5bece=""
        align-v="center"
        className="text-center mb-3 garanta-brindes col"
      >
        <p data-v-fae5bece="">
          Veja abaixo as promoções vigentes em nosso site e garanta brindes ou
          vantagens exclusivos!
        </p>
      </div>
      <TabPanel value={value} index={0}>
        <div style={{}}>
          {searchComponent("Cupons de Desconto")}
          {selctCategoryComponent()}
          {props.props.type01.length == 0 && (
            <Alert
              style={{
                height: 100,
                display: "flex",
                fontSize: "1.1em",
                justifyContent: "center",
                alignItems: "center",
              }}
              severity="error"
            >
              Nenhum benefício encontrado
            </Alert>
          )}
        
        </div>
        {props.props.type01.map((item: any) => {
            return (
              <Grow in={checked}>
                <Paper elevation={0} style={{ background: "transparent" }}>
                  <BeneficioItem item={item} />
                </Paper>
              </Grow>
            );
          })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div style={{}}>
          {searchComponent("Promoções Exclusivas")}
          {selctCategoryComponent()}
          {props.props.type02.length == 0 && (
            <Alert
              style={{
                height: 100,
                display: "flex",
                fontSize: "1.1em",
                justifyContent: "center",
                alignItems: "center",
              }}
              severity="error"
            >
              Nenhum benefício encontrado
            </Alert>
          )}

        </div>
        {props.props.type02.map((item: any) => {
            return (
              <Grow in={checked}>
                <Paper elevation={0} style={{ background: "transparent" }}>
                  <BeneficioItem item={item} />
                </Paper>
              </Grow>
            );
          })}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div style={{}}>
          {searchComponent("Queda de Preço")}
          <div style={{ display: "flex", flexDirection: "row" }}>
            {selctCategoryComponent()}
            <div style={{ height: 100, marginLeft: 20 }}>
            <div style={{ color: "#ffffff" }}>
              Filtrar por <span style={{ fontWeight: "bolder" }}>Desconto</span>
            </div>
            <div
              style={{
                backgroundColor: "#ffffff",
                width: 250,
                borderRadius: 7,
              }}
            >
              <NativeSelect
                style={{
                  width: "100%",
                  background: "#252525",
                  color: "#fff",
                  borderRadius: 4,
                  borderColor: "#03AEFC",
                  textIndent: "0.01px",
                }}
                value={props.props.selected}
                onChange={props.props.handleChange}
                inputProps={{
                  name: "age",
                  id: "age-native-label-placeholder",
                }}
              >
                <option
                  style={{ backgroundColor: "#252525", color: "#fff" }}
                  value={99}
                >
                  Todas as faixas
                </option>
                <option
                  style={{ backgroundColor: "#252525", color: "#fff" }}
                  value={0}
                >
                  de 1% a 10% OFF
                </option>
                <option
                  style={{ backgroundColor: "#252525", color: "#fff" }}
                  value={1}
                >
                  de 11% a 20% OFF
                </option>
                <option
                  style={{ backgroundColor: "#252525", color: "#fff" }}
                  value={2}
                >
                  de 21% a 30% OFF
                </option>
                <option
                  style={{ backgroundColor: "#252525", color: "#fff" }}
                  value={3}
                >
                  de 31% a 50% OFF
                </option>
                <option
                  style={{ backgroundColor: "#252525", color: "#fff" }}
                  value={4}
                >
                  acima de 50% OFF
                </option>
              </NativeSelect>
            </div>
            
          </div>
          
          </div>
        </div>
        
        {props.props.type03.map((item: any) => {
            return (
              <Grow in={checked}>
                <Paper elevation={0} style={{ background: "transparent" }}>
                  <BeneficioItem item={item} />
                </Paper>
              </Grow>
            );
          })}
          {props.props.type03.length == 0 && (
              <Alert
                style={{
                  height: 100,
                  display: "flex",
                  fontSize: "1.1em",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                severity="error"
              >
                Nenhum benefício encontrado
              </Alert>
            )}
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div style={{}}>
          {searchComponent("Cashbacks BEM")}
          <div style={{ display: "flex", flexDirection: "row" }}>
            {selctCategoryComponent()}
            <div style={{ height: 100, marginLeft: 20 }}>
              <div style={{ color: "#ffffff" }}>
                Filtrar por{" "}
                <span style={{ fontWeight: "bolder" }}>Desconto</span>
              </div>
              <div
                style={{
                  backgroundColor: "#ffffff",
                  width: 250,
                  borderRadius: 7,
                }}
              >
                <NativeSelect
                  style={{
                    width: "100%",
                    background: "#252525",
                    color: "#fff",
                    borderRadius: 4,
                    borderColor: "#03AEFC",
                    textIndent: "0.01px",
                  }}
                  value={props.props.selected}
                  onChange={props.props.handleChange}
                  inputProps={{
                    name: "age",
                    id: "age-native-label-placeholder",
                  }}
                >
                  <option
                    style={{ backgroundColor: "#252525", color: "#fff" }}
                    value={99}
                  >
                    Todas as faixas
                  </option>
                  <option
                    style={{ backgroundColor: "#252525", color: "#fff" }}
                    value={0}
                  >
                    de 1% a 10% OFF
                  </option>
                  <option
                    style={{ backgroundColor: "#252525", color: "#fff" }}
                    value={1}
                  >
                    de 11% a 20% OFF
                  </option>
                  <option
                    style={{ backgroundColor: "#252525", color: "#fff" }}
                    value={2}
                  >
                    de 21% a 30% OFF
                  </option>
                  <option
                    style={{ backgroundColor: "#252525", color: "#fff" }}
                    value={3}
                  >
                    de 31% a 50% OFF
                  </option>
                  <option
                    style={{ backgroundColor: "#252525", color: "#fff" }}
                    value={4}
                  >
                    acima de 50% OFF
                  </option>
                </NativeSelect>
              </div>
            </div>
             
          </div>
        </div>
        
        {props.props.type04.map((item: any) => {
            return (
              <Grow in={checked}>
                <Paper elevation={0} style={{ background: "transparent" }}>
                  <BeneficioItem item={item} />
                </Paper>
              </Grow>
            );
          })}
           {props.props.type04.length == 0 && (
                <Alert
                  style={{
                    height: 100,
                    display: "flex",
                    fontSize: "1.1em",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  severity="error"
                >
                  Nenhum benefício encontrado
                </Alert>
              )}
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div style={{}}>
          {searchComponent("Cashbacks BEM")}
          {selctCategoryComponent()}
          {props.props.type00.map((item: any) => {
            return (
              <Grow in={checked}>
                <Paper elevation={0} style={{ background: "transparent" }}>
                  <BeneficioItem item={item} />
                </Paper>
              </Grow>
            );
          })}
        </div>
        
        {props.props.type00.length == 0 && (
            <Alert
              style={{
                height: 100,
                display: "flex",
                fontSize: "1.1em",
                justifyContent: "center",
                alignItems: "center",
              }}
              severity="error"
            >
              Nenhum benefício encontrado
            </Alert>
          )}
      
      </TabPanel>
    </div>
  );
}
