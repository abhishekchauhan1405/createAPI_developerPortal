const express = require('express');
const createApiRoute = require("./Routes/createAPIRoute");

const app = express();
const PORT = 3011;



app.use(createApiRoute);

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running,and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
