const { expect } = require('chai');
const db = require('../api/controller/controller');

const sampleData = {
  id: 1, name: 'bag', price: 1000, quantity: 10, imgurl: null,
};
describe('testing', () => {
  process.env.DATABASE = 'test';
  it('testing database to get products', async () => {
    const data = await db.getProducts();
    expect(JSON.stringify(sampleData)).to.be.equal(JSON.stringify(data[0]));
  });
  it('testing update database', async () => {
    sampleData.selected = 0;
    const data = await db.updateProducts([sampleData]);
    console.log(data);
    expect(data).to.be.equal('products updated');
  });
});
