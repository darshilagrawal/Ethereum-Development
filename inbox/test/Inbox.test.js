const assert = require('assert');
const ganache=require('ganache-cli');
const Web3 = require('web3');
const web3=new Web3(ganache.provider());
const {interface,bytecode} = require('../compile')

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
let accounts;
let inbox;
beforeEach(async () => {
  // Get a list of all the unlocked Accounts
  accounts = await web3.eth.getAccounts();

  //Use one of those accounts to deploy
  //The Contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({ data:bytecode,arguments:['Hi there!'] })
  .send({from: accounts[0],gas:'1000000' });
});

describe('Inbox',() =>{
  it('Deploys a Contract',() => {
    console.log(inbox);
  });
});
