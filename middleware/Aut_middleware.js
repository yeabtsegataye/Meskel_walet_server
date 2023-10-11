const jwt = require('jsonwebtoken')
const User = require('../model/user')


const handle_verify= async(req, res, next)=>{
  const authHeader = req.headers.authorization;
  if(!authHeader){
      return res.status(401).json({user : false})
  }
  const token = authHeader.split(' ')[1]
    if(!token){
      return res.status(401).json({user : false})
    }
  try{  
    const decoded = jwt.verify(token, process.env.SECRETE)
    const _id = decoded.id
    const user =await User.findById({_id});
    if(!user){
      return res.status(401).json({user : false})
    }
    res.status(201).json({user : true}) 
    next()
  }catch(err){
    console.log(err)
    return res.status(401).json({user : false})
  }
 
}
module.exports = {handle_verify}