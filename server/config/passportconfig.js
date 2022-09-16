const db = require('../models');
const bcrypt = require('bcryptjs');
const localStatergy = require('passport-local').Strategy

module.exports = function(passport){
 passport.use(
     new localStatergy({
        usernameField: 'email',
        passReqToCallback:true
  },async(token,email,password, done)=>{
          const User = await db.User.findOne({where:{email:email}});
          if(!User) return done(null,false)
            bcrypt.compare(password,User.password,(err,result)=>{
                if (err) throw err
                if(result === true){
                   return done(null,User)
               } else {
                return done(nsull,false)     
            }
        })
     })
   )
 passport.serializeUser((user,cb)=>{
     cb(null,user.userId) // cb = callback
 })

 passport.deserializeUser(async(userId,cb)=>{
    const User = await db.User.findOne({where:{userId:userId}})
    if(!User) {
          return cb(null)
    } else {
        return cb(User)
    }
 })
}