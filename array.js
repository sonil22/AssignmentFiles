var express = require('express')
var app = express()
var array=["apple","banana"]

app.get('/',function(req,res){
	res.send(200,array)
})

app.post('/', function (req, res) {
	array.push(req.param("arr"))
	res.send(200,array)
})


app.delete('/',function(req,res){
	var index=array.indexOf(req.param("arr"))
	if(index>-1){
		array.splice(index,1)
		res.send(array)
	}
	
	else{
		res.send("no more elements to delete.please check!");		
	}
	
})


app.put('/',function(req,res){
	var removedElement=array.indexOf(req.param("removedElement"))
	
	if(removedElement>-1){
		array.splice(removedElement,1,req.param	("insertedElement"))
		res.send(array)		
	}

	else if(removedElement=-1){
		res.send("The element you want to update does not find in array");		
	}

	else {
		res.send("Nothing is left in array");		
	}

})

app.listen('3000') 
console.log('Listening at port 3000')







