const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/*
  this is the tenant routes
*/
const tenant_routes = require('./routes/tenant/tenant');
const merchant_routes = require('./routes/merchant/merchant');
const host_routes = require('./routes/host/host');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public/"));

app.use(tenant_routes);
app.use(merchant_routes);
app.use(host_routes);


app.listen(port,()=>{
  console.log(`server 'is' running on port ${port}`);
})