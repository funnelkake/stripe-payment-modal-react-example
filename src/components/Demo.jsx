import * as React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ScriptTag from "react-script-tag";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  prices: {
    height: "400px",
  },
  card: {
    height: "100%",
  },
  cardHeader: {
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
}));

const products = [
  {
    title: "Amount Charge",
    price: "10",
    description: "Amount set in Admin Panel",
    buttonText: "Amount Charge",
    buttonId: "amount-payment",
    buttonVariant: "outlined",
  },
  {
    title: "Stripe Price Charge",
    price: "39",
    description: "Payment with Stripe Price Id",
    buttonText: "Stripe Price Charge",
    className: "stripePriceIdCharge",
    buttonVariant: "contained",
  },
  {
    title: "Subscription",
    price: "49",
    description: "Subscription Charge",
    buttonText: "Subscribe",
    dataSubscriptionCheckout: "true",
    buttonVariant: "outlined",
    subscription: "true",
  },
];

export default function Demo() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Demo React Application
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {products.map((product) => (
            <Grid
              item
              key={product.title}
              xs={12}
              sm={product.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={product.title}
                  subheader={product.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  className={classes.cardHeader}
                  id={product.buttonId}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${product.price}
                    </Typography>
                    {product.subscription && (
                      <Typography variant="h6" color="textSecondary">
                        /mo
                      </Typography>
                    )}
                  </div>
                  <ul>
                    <Typography variant="subtitle1" align="center">
                      {product.description}
                    </Typography>
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    className={product.className}
                    fullWidth
                    data-subscription-checkout={
                      product.dataSubscriptionCheckout
                    }
                    variant={product.buttonVariant}
                    id={product.buttonId}
                  >
                    {product.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* // Paste your src from admin panel*/}
      <ScriptTag
        type="text/javascript"
        src="http://localhost:4242/api/stripe_modals/script.js?siteId=6f359dc2-4d0c-4a87-81d7-cffaacb320ce"
        defer={true}
      />
    </React.Fragment>
  );
}
