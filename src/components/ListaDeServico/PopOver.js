import React from "react";
import Button from "@material-ui/core/Button";
import { theme } from "../../assets/Theme";
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import { Popover } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const Descricao = styled.div`
  width: 300px;
  border-radius: 5px;
  color: #ac1768;
`;

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

function PopOver(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Button
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Ver Descrição
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{     vertical: 'top',     horizontal: 'right',   }}   transformOrigin={{     vertical: 'top',     horizontal: 'left',   }}
      >
        <Descricao>
          <Typography className={classes.typography}>
            {props.description}
          </Typography>
        </Descricao>
      </Popover>
    </ThemeProvider>
  );
}

export default PopOver;
