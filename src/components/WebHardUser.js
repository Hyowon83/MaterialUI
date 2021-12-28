import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Table from './Table';
import Tree from './Tree';

<style>

</style>

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    marginTop: theme.spacing(-2),
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  colorPaper: {
    backgroundColor: "#3f51b5",
    color: "#ffffff",
    margin: theme.spacing(0),
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(0),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 500,
  },
  smallTitle: {
    fontSize: 14,
    margin: 10,
    // marginLeft: '10%',
    // marginRight: 20
  },
  treeSet: {
    height: 500,
    padding: theme.spacing(2),
  },
  font: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10,
    textDecorationLine: 'underLine'
  },
  iconButton: {
    marginLeft: 'auto',
  },
}));

const goToInfo = () => {
  window.location.href = '/myInfo'
}


export default function Dashboard() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container justifyContent="flex-end">
              <p className={classes.smallTitle}>
                OOO님 안녕하세요.
              </p>
              <Link href="/" className={classes.font}>
                {"로그아웃"}
              </Link>
            <Grid item className={classes.font}>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.colorPaper}>
                <Toolbar className={classes.toolbar}>
                  <Typography component="h1" variant="h5" color="inherit" noWrap className={classes.title}>
                    Webhard
                  </Typography>
                  <IconButton color="inherit" className={classes.iconButton} onClick={goToInfo}>
                      <AccountCircleIcon />
                  </IconButton>
                </Toolbar>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={3}>
              <Paper className={classes.treeSet}>
                <Tree></Tree>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={9}>
              <Table></Table>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}