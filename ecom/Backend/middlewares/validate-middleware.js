const validate = (schema) => async (req, res, next) => {

  try 
  {
     const parseBody = await schema.parseAsync(req,res);

     req.body = parseBody;
     next();

  } catch (err) 
  {
    // const message = err.errors[0].message;
    console.log(err);
    res.status(400).json({ msg: "Validation failed"});
  }

}

module.exports = validate;