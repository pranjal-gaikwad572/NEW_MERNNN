const getAllData = async(req,res) => 
{

    res.status(200).json({msg: "I am getAllData"})
};


//msg printing :

const getAllLoginData = async(req,res) => 
{

    res.status(200).json({msg: "I am getAllLoginData"})
};



module.exports = {getAllData, getAllLoginData};