import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Styled from 'styled-components'

const Wrapper = Styled.article`
    width:100%;
    min-height:100%;
     display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    h2 {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: clamp(1rem, 5.7vw, 1.7rem); 

        line-height: 41px;
         
        text-transform: uppercase;

        color: #47261A;

    }
 `

const AccordionStyled = Styled(Accordion)`
    width:50%;
    min-width:290px;    
`
const AccordionSummaryStyled = Styled(AccordionSummary)`
    h3 {
        
        font-family: Roboto Mono;
        font-style: normal;
        font-weight: 800;
        font-size:1rem; 
        text-transform: uppercase;

        color: #754F41;
    }
    p {
   font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 22px;

    text-align: justify;
    color: #7E7474;

    }
`

 


const useStyles = makeStyles((theme) => ({



  root: {
   },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  const Data = [
      {
          title: "Celulose",
          text: "O seu manuseio exige cuidados indispensáveis na operação logística, fazemos a retirada e transporte de celulose no Porto de Santos."
      },
      {
        title: "Açúcar",
        text: "Definimos as melhores estrategias logisticas para nossos clientes, com açucar não é diferente."
    },
    {
        title: "Container",
        text: ""
    },
    {
        title: "Super simples pó",
        text: ""
    },
    {
        title: "Farinha de trigo",
        text: ""
    },
    {
        title: "Minério",
        text: ""
    }
  ]

  const Content = Data.map((item) => {
    return (
        <AccordionStyled key={item.title}>
        <AccordionSummaryStyled
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        <Typography className={classes.heading} component="h3">{item.title}</Typography>
        </AccordionSummaryStyled>
        <AccordionDetails>
        <Typography component="p" paragraph>
            {item.text}
        </Typography>
        </AccordionDetails>
    </AccordionStyled>
    )

  })

  return (
    <Wrapper className={classes.root}>
         <Typography variant="h4" component="h2" gutterBottom>
         Cargas que transportamos
         </Typography>
        {Content}
    </Wrapper>
  );
}