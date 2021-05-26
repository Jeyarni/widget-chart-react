const express = require("express");
const app = express();
const chart = require('./route/chart');

app.use(express.json());

//For Dashboard
app.use('/chart', chart);

//For Employee
// app.use('/employees/profile', profileRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App listening on port Number ${PORT}`);
});
