const express = require('express');
const config= require('./config.ts');
const app = express();

app.use(require('cors')());
app.use(require('body-parser').json());

app.get('/timeline',async (req,res)=>{
	const params={count:5, tweet_mode:'extended'};
	config.apiClient.get('https://api.twitter.com/1.1/statuses/user_timeline.json',params).
	then(timeline=>{
		res.send(timeline);
	})
	.catch(error=>{
		console.log('Error')
		res.send(error);
	})
});

app.get('/search/:filtro',async (req,res)=>{
	const params={count:5, tweet_mode:'extended', q:req.params.filtro, result_type:'recent', lang:'es'};
	config.apiClient.get('https://api.twitter.com/1.1/search/tweets.json',params).
	then(timeline=>{
		res.send(timeline);
	})
	.catch(error=>{
		console.log('Error')
		res.send(error);
	})
});


app.listen(config.port, ()=>{
	console.log('Server running on port '+config.port);
});