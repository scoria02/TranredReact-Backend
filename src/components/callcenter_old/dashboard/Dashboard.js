import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import 'fontsource-roboto';
import './assets/css/Dashboard.css';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import PublicIcon from '@material-ui/icons/Public';
import Filter9PlusIcon from '@material-ui/icons/Filter9Plus';
import CardsHeader from './components/CardsHeader';
import Cards from './components/Cards';
import Graphics from './components/Graphics';
import TableMaterial from './components/TableMaterial';
import Navbar from './components/Navbar';

const useStyles= makeStyles(()=>({
root:{
    flexGrow: 1
},
iconos:{
    color: 'white'
},
container:{
    paddingTop: '40px',
    alignItems: 'center'
},
containerGrafica:{
    marginTop: '40px'
},
containerTabla:{
    marginTop: '40px'
}
}));

const data = [
    {
      id:1,
      video:
        "Como Hacer un Split en React JS || React Split Pane || Tutorial en Español (2020)",
      fecha: "6 de sep. 2020",
      visualizaciones: 32,
      imagen: require("./assets/img/split.webp"),
    },
    {
      id:2,
        video:
          "Cómo Solucionar Error al Crear Applicación de React JS",
        fecha: "5 de sep. 2020",
        visualizaciones: 31,
        imagen: require("./assets/img/error.webp"),
      },
      {
      id:3,
        video:
          "Cómo Utilizar Forever en Node JS || Ejecutar Node JS en Segundo Plano || Background Node JS",
        fecha: "4 de sep. 2020",
        visualizaciones: 21,
        imagen: require("./assets/img/forever.webp"),
      },
  ];

function Dashboard(props) {
    const classes= useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <Navbar/>
                </Grid>

                
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                   <CardsHeader icono={<DeveloperBoardIcon className={classes.iconos}/>} titulo="ESTADISTICAS" texto="Call Center" color="rgba(248,80,50,1)" font="white"/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeader icono={<PublicIcon className={classes.iconos}/>} titulo="PAÍS" texto="Venezuela" color="rgba(248,80,50,1)" font="white"/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeader icono={<Filter9PlusIcon className={classes.iconos}/>} titulo="N* DE SOLICITUDES" texto="85" color="rgba(248,80,50,1)" font="white"/>
                </Grid>

                <Grid container spacing={1} className={classes.container} item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="INCIDENCIA" texto="692"/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="QUEJA" texto="111,092"/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="SOLICITUD" texto="2,504 horas"/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="REQUERIMIENTO" texto="14.2%"/>
                    </Grid>

                    </Grid>

                    <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>

                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={classes.containerGrafica}>
                    <Graphics />
                    </Grid>


                    <Grid item xs={12} className={classes.containerTabla}>
                    <TableMaterial data={data}/>
                    </Grid>


            </Grid>
        </div>
    );
}

export default Dashboard;