const mongoose =require('mongoose')
const connection = mongoose.connect('mongodb+srv://saurabh:saurabh@cluster0.hovcp.mongodb.net/plan-my-trip?retryWrites=true&w=majority')

module.exports={
	connection
}