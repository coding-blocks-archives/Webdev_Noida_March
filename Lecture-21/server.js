var express = require('express');
var passport = require('passport');

var passportLocal = require('passport-local');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var session = require('express-session');
var localStrategy = passportLocal.Strategy;

var app = express();


app.use('/', express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({secret: 'guitar'}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(function(username, password, done){
   if(username != 'aayush') {
      return done(null, false);
   }
   if(password != '1234'){
       return done(null, false);
   }

   return done(null, username)

}))

passport.serializeUser(function(user, done){
    done(null, user);
})

passport.deserializeUser(function(user, done){
    done(null, user);
})

app.post('/login', passport.authenticate('local',{
                    successRedirect: '/success',
                    failureRedirect: '/'
    }));

app.get('/success', (req, res)=>{
    res.send(`${req.user} is Login`)
})


app.listen(5000, ()=>{
    console.log('Listening on 5000');
})