const FindNutricionist = require('../Crawler/Nutricionist');

module.exports = {
  // Procurar um nutricionista pela numero de incrição no CFN
  async index(req, res) {
    try {
      let { subs } = req.params;
      let { name } = req.params;

      const nutri = await FindNutricionist(subs,name);
      console.log("Controller");
      console.log(nutri);
      subs = nutri.subscription = parseInt(nutri.subscription);
      return res.json(nutri);

    } catch (err) {
      return res.json(err);
    }
  }
};
