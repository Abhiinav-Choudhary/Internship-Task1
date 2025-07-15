import Claimhistroy from "../models/claimhistroy.model.js";
import User from "../models/user.model.js";

// Add user
 export const Adduser =async(req,res)=>{
 const {name} = req.body
 try {
    if(!name){
        return res.status(400).json({message:"Invalid name"})
    }
    const user = new User({name})
    await user.save()
    if(!user){
        return res.status(400).json({message:"user not found"})
    }
    return res.status(201).json({user})

 } catch (error) {
    console.log("error in adduser controller");
    
    return res.status(500).json({message : "Internal server error"})
 }
}

export const getUsers = async (req, res) => {
  const users = await User.find().sort({ name: 1 });
  res.json(users);
};


export const claimPoints = async (req, res) => {
    const {userId} = req.body 
 try {
    const user = await User.findById(userId)
      if (!user) return res.status(404).json({ error: "User not found" });
    const points = Math.floor(Math.random()*10)+1
    user.totalPoints +=points

    await user.save();

  const history = new Claimhistroy({ userId, userName: user.name, points });
  await history.save();

  res.json({ message: "Points claimed", points, user });
 } catch (error) {
     console.error("Claim error:", error);
    res.status(500).json({ error: "Internal Server Error" });
 }
};


// Get leaderboard
export const getLeaderboard = async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  const leaderboard = users.map((u, i) => ({
    name: u.name,
    totalPoints: u.totalPoints,
    rank: i + 1
  }));
  res.json(leaderboard);
};

// Get claim history
export const getClaimHistory = async (req, res) => {
  const history = await Claimhistroy.find().sort({ createdAt: -1 });
  res.json(history);
};