const express = require('express');

const cors = require('cors');
const {connection}= require('./db')
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
	res.send("This is me")
})

app.use('/api', apiRoutes);

app.listen(PORT, async() => {
	try{
		await connection
		console.log("server is connected to  db")
	}catch(err){
		console.log(err)
	}
  console.log(`Server is running on port ${PORT}`);
});
