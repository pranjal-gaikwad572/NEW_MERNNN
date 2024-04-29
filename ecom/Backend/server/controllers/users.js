const getAllData = async(request,response) => 
{

    response.status(200).json({msg: "I am getAllData"})
};


//msg printing :

const getAllLoginData = async(request,response) => 
{

    response.status(200).json({msg: "I am getAllLoginData"})
};



module.exports = {getAllData, getAllLoginData};