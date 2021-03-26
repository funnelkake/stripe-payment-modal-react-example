import * as React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
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
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
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
    title: "Payment w/ Amount",
    price: "10",
    description: "Set amount in Admin Panel",
    buttonText: "Open Modal",
    buttonId: "pm-payment-amount",
    buttonVariant: "outlined",
    openModalSelector: "#pm-payment-amount",
  },
  {
    title: "Payment w/ PriceId",
    price: "39",
    description: "Set price id in Admin Panel",
    buttonText: "Open Modal",
    className: "pm-payment-stripeid",
    buttonVariant: "outlined",
    openModalSelector: ".pm-payment-stripeid",
  },
  {
    title: "Subscription",
    price: "49",
    description: "Set price id in Admin Panel",
    buttonText: "Open Modal",
    dataSubscriptionCheckout: "true",
    buttonVariant: "outlined",
    subscription: "true",
    openModalSelector: "[data-subscription-checkout=\"true\"]",
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
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Stripe Payment Modal React Demo
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          View {" "}
          <Link
            href="https://paymentmodal.com/stripe-checkout-form-modal-react-example"
            target="_blank"
            rel="noopener"
          >
            GitHub repo
          </Link> for full code.
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {products.map((product) => (
            <Grid item key={product.title} xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  title={product.title}
                  subheader={product.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  className={classes.cardHeader}
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
                  <Typography variant="subtitle1" align="center">
                    {product.description}
                  </Typography>
                  <InputLabel htmlFor={`product_${products.indexOf(product)}`}>
                    Quantity
                  </InputLabel>
                  <Select
                    fullWidth
                    value={product.quantity}
                    defaultValue={1}
                    onChange={
                      (event) => {
                        const openModalElement = document.querySelector(`button${product.openModalSelector}`);
                        openModalElement.setAttribute("data-product-quantity", event.target.value);
                      }
                    }
                    inputProps={{
                      name: `product_${products.indexOf(product)}`,
                      id: `product_${products.indexOf(product)}`
                    }}
                  >
                    <MenuItem disabled>Select quantity</MenuItem>
                    <MenuItem value={1}>
                      1
                    </MenuItem>
                    <MenuItem value="2">
                      2
                    </MenuItem>
                    <MenuItem value="3">
                      3
                    </MenuItem>
                  </Select>
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
      <ScriptTag
        type="text/javascript"
        src={`${process.env.REACT_APP_PAYMENT_MODAL_API_HOST_URL}/api/stripe_modals/script.js?siteId=${process.env.REACT_APP_PAYMENT_MODAL_SITE_ID}`}
        defer={true}
      />
    </React.Fragment>
  );
}
