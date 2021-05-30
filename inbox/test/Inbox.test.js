const assert = require('assert');
const ganache=require('ganache-cli');
const Web3 = require('web3');
const web3=new Web3(ganache.provider());

// class Car{
//   park(){
//     return 'stopped'
//   }
//   drive(){
//     return 'vroom'
//   }
// }
//
// let car;
// beforeEach(() => {
//   car=new Car;
// })
// describe('Car',() => {
//   it('parking enabled', () => {
//   assert.equal(car.park(), 'stopped');
//   });
//
//   it('Driving Functionality',() => {
//     assert.equal(car.drive(),'vroom')
//   });
// })

beforeEach(() => {
  // Get a list of all the unlocked Accounts
  web3.eth.getAccounts()
    .then(fetchedAccounts => {
      console.log(fetchedAccounts);
    });

  //Use one of those accounts to deploy
  //The Contract
});

describe('Inboox',() =>{
  it('Deploys a Contract',() => {});
});
