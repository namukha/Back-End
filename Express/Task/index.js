const express = require('express');
const app = express()
const adminRoutes = require("./routes/api.js")
const apiRoutes = require("./routes/admin.js")


app.use('/api', apiRoutes)
app.use('/', adminRoutes)
app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});