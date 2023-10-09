const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname + '/Develop/public')));
app.use(html_routes)
app.use(api_routes)


// require("./Develop/routes/api-routes.js")(app);
// require("./Develop/routes/html-routes.js")(app);




app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});