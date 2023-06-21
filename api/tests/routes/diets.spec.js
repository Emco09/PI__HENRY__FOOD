const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Diets, conn } = require('../../src/db.js');


const agent = session(app);

describe('Diets routes', () => {
  before(() => conn.authenticate()
    .then(() => conn.sync({ force: true }))
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('GET /diets', () => {
    it('should get an array with all existing diets', async () => {
      // Preload the database with diets
      const dietsToLoad = [
        {nombre:"gluten free"},
        {nombre:"dairy free"},
        {nombre:"lacto ovo vegetarian"},
        {nombre:"vegan"},
        {nombre:"paleolithic"},
        {nombre:"primal"},
        {nombre:"whole 30"},
        {nombre:"pescatarian"},
        {nombre:"ketogenic"},
        {nombre:"fodmap friendly"},            
      ];

      await Diets.bulkCreate(dietsToLoad);

      // Make a GET request to /diets
      const res = await agent.get('/diets');

      // Expect a response with status 200
      expect(res.status).to.equal(200);

      // Expect the response body to be an array
      expect(res.body).to.be.an('array');

      // Expect the response body to contain all the preloaded diets
      expect(res.body).to.have.lengthOf(dietsToLoad.length);
      expect(res.body).to.deep.include.members(dietsToLoad.map(diet => diet.nombre));
    });
  });
});
