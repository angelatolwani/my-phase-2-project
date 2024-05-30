import { Grid, Card, CardContent, Typography, CardMedia, Paper, Box } from "@mui/material";

function Home () {
    const imgUrl = "https://t3.ftcdn.net/jpg/06/38/69/12/240_F_638691287_sSY3HcDjVZ1tKNL971kT70T1YnrC3mvm.jpg"
    return (
        <>
            <Paper
                sx={{
                    position: 'relative',
                    backgroundColor: 'grey.800',
                    color: '#fff',
                    mb: 4,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${imgUrl})`,
                }}
            >
                {<img style={{ display: 'none' }} src={imgUrl} alt="animals" />}
                <Box
                    sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.3)',
                    }}
                />
                <Grid container>
                    <Grid item md={12}>
                        <Box
                            sx={{
                                position: 'relative',
                                p: { xs: 24 },
                                pr: { md: 0 },
                            }}
                        >
                            <Typography component="h2" variant="h3" color="inherit" gutterBottom>
                                Virtual Vet Care
                            </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                                Innovating for Healthier and Happier Pets
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default Home;