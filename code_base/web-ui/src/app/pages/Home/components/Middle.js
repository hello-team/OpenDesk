import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import { toAbsoluteUrl } from '../../../utils/utils'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid, GridItem } from '@bigcommerce/big-design';
import Desksvg from '../../../assets/svg/home/desk.svg'
import Officesvg from '../../../assets/svg/home/office.svg'
export default function Middle() {
    const classes = useStyles();

    return (
        <Paper>
            <Card className={classes.root}>
                <div className={classes.mediaContainter}>
                    <CardMedia
                        className={classes.media}
                        component="img"
                        alt="Opendesk"
                        src={toAbsoluteUrl("/media/home/branding-red.png")}
                        title="Opendesk"
                    />
                </div>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Office desk booking for work-from-home Employees
          </Typography>
                        <Button size="medium" color="inherit" style={{ fontWeight: 'bold', display: 'inline-block'}} >
                            <Typography style={{ color: "#f66c74"}}>
                            More
                            </Typography>
                            <ExpandMoreIcon />
                         </Button>
                    <Typography style={{ color: "#f66c74" }}>
                      
                    </Typography>

                    <Grid gridColumns="repeat(2, 1fr)">
                        <GridItem>
                        <div className={classes.organization}>
                                <Grid gridColumns="repeat(2, 1fr)">
                                <GridItem className={classes.organizationRight}>                                    <img
                                        alt="Logo"
                                        src={Officesvg}
                                    />
                                    </GridItem>
                                    <GridItem className={classes.organizationLeft}>
                                            <Typography >
                                                Continue as an
                                             </Typography>
                                            <Typography variant="h6">           ORGANIZATION
                                        </Typography>
                                    </GridItem>
                
                                </Grid>
                            </div>
                        </GridItem>
                        <GridItem>
                            <div className={classes.bookDesk}>
                                <Grid gridColumns="repeat(2, 1fr)">
                                    <GridItem className={classes.bookDeskLeft}>
                                            <Typography >
                                                Employee?
                                             </Typography>
                                            <Typography variant="h6">           BOOK A DESK
                                        </Typography>
                                    </GridItem>
                                    <GridItem className={classes.bookDeskRight}>                                    <img
                                        alt="Logo"
                                        src={Desksvg}
                                    />
                                    </GridItem>

                                </Grid>
                            </div>

                        </GridItem>

                    </Grid>

                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </Paper>
    );
}

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: '100%',
        height: '100%',
        textAlign: 'center',
        boxShadow: 'none',
        justifyContent: 'center',
        paddingBottom: 0,
    },
    mediaContainter: {
        verticalAlign: 'top',
        textAlign: 'center',
        maxWidth: '100%',
    },
    media: {
        margin: 'auto',
        width: '50%',
        alignContent: 'center'
    },
    bookDesk: {
        background: '#1F2E35',
        height: '100%',
        color: '#fff',
        font: 'Poppins',
        whiteSpace: 'nowrap',
    },
    bookDeskLeft: {
        paddingTop: ' 15%',
        paddingBottom: '15%',
        paddingLeft: '50%',
        display: 'block',
        float: 'right'
    },
    bookDeskRight: {
        float: 'left',
        paddingTop: ' 15%',
        paddingBottom: '15%',
        paddingRight: '50%',
    },
    organization: {
        background: '#FF575F',
        height: '100%',
        color: '#fff',
        font: 'Poppins',
        whiteSpace: 'nowrap',
    },
    organizationLeft: {
        float: 'right',
        paddingTop: ' 15%',
        paddingBottom: '15%',
        paddingRight: '50%',
    },
    organizationRight: {
        paddingTop: ' 15%',
        paddingBottom: '15%',
        paddingLeft: '50%',
        display: 'block',
        float: 'left'
    }
});
