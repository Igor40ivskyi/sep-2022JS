// let userCard = (number) => {
//     let userCardObj =
//         {
//             balance:100,
//             transactionLimit:100,
//             historyLogs: [],
//             key: 1,
//         }
//
//     let card1 = {
//         balance: 0,
//         transactionLimit: 100,
//         historyLogs: [],
//         key: 2,
//     };
//
//         return {
//             getCardOptions: function () {
//                 return {...userCardObj};
//             },
//             putCredits: function (amountOfMoney) {
//                 userCardObj.balance = userCardObj.balance + amountOfMoney;
//             },
//             takeCredits: function (amountOfMoney) {
//                 if (userCardObj.transactionLimit > amountOfMoney && userCardObj.balance > amountOfMoney) {
//
//                 userCardObj.balance = userCardObj.balance - amountOfMoney;
//                 }else {
//                     throw new Error('too much!');
//                 }
//             },
//             setTransactionLimit: function (number) {
//                 userCardObj.transactionLimit = number;
//             },
//             transferCredit: function (amountOfMoney, cardOfUser) {
//                 cardOfUser.balance = cardOfUser.balance + amountOfMoney - (amountOfMoney / 100) * 0.5;
//             },
//             getcard1Options: function () {
//                 return {...card1};
//             },
//         }
// };
//
// let card1 = userCard(3);
//
// console.log(card1.getCardOptions());
// card1.putCredits(1000);
// console.log(card1.getCardOptions());
//
// card1.takeCredits(99);
// console.log(card1.getCardOptions());
// card1.setTransactionLimit(1000);
// card1.takeCredits(500);
//
// console.log(card1.getCardOptions());
//
// card1.transferCredit(1000,card1);
// console.log(card1.getcard1Options());
//
// card1.transferCredit(1000, card1);
// console.log(card1.getcard1Options());


// ----------------------------------------------------------second try ------------------------

// let userCard = (id) => {
//
//     let balance = 100;
//     let transactionLimit = 100;
//     let historyLog = [];
//     let key = id;
//
//     return{
//         getCardOption: function () {
//             return {balance,transactionLimit,historyLog, key}
//         },
//
//         putCredits: function (sum) {
//             balance += sum;
//             historyLog.push({operationType:'putCredits',credits:sum, operationTime: new Date()})
//         },
//
//         takeCredits: function (sum) {
//             if (balance > sum && transactionLimit > sum) {
//                 balance -= sum;
//                 historyLog.push({operationType:'takeCredits',credits:sum, operationTime: new Date()})
//             } else {
//                 historyLog.push({operationType: 'take credits error'})
//                 console.error('not enough money');
//             }
//         },
//
//         setTransactionLimit: function (number) {
//             transactionLimit = number;
//             historyLog.push({operationType:'transaction limit change',credits:number, operationTime: new Date()})
//         },
//
//         transferCredits: function (sum, cardOfUser) {
//             if (transactionLimit > sum) {
//
//             this.takeCredits(sum);
//             cardOfUser.putCredits(sum = sum - (sum * 0.5) / 100);
//             }else {
//                 console.error('not enough money');
//             }
//
//         },
//
//     }
// };
//
// class UserAccount {
//
//     constructor(name) {
//         this.name = name;
//         this.cards = ['card suvenir'];
//     }
//
//     addCard() {
//         this.cards.push(userCard(this.cards.length));
//     }
//
//     getCardByKey(num) {
//         return this.cards[num];
//     }
// }
//
// let user = new UserAccount('vasya')
//
// user.addCard();
// user.addCard();
//
// console.log(user.cards);
//
// let card1 = user.getCardByKey(1);
//
// console.log(card1.getCardOption());
//
// let card2 = user.getCardByKey(2);
//
// console.log(card2.getCardOption());
// card2.putCredits(500);
//
// console.log(card2.getCardOption());
//
// card2.takeCredits(90);
// let cardOption = card2.getCardOption();
// console.log(cardOption);
//
// card2.putCredits(1000);
//
// console.log(card2.getCardOption());
// card2.setTransactionLimit(1000);
// console.log(card2.getCardOption());
//
// card2.transferCredits(999, card1);
// console.log(card1.getCardOption());
// console.log(card2.getCardOption());


// const userCard = (id) => {
//     let balance = 100;
//     let transactionLimit = 100;
//     const historyLog = [];
//     const key = id;
//
//     const createMessage = (operationType, credits) => ({operationType, credits, operationTime: new Date()});
//
//     const getCardOptions = () => ({balance, historyLog, transactionLimit, key});
//
//     const putCredits = (money) => {
//         balance += money;
//         historyLog.push(createMessage('putCredits', money));
//     }
//
//     const takeCredits = (money) => {
//         if (balance - money >= 0) {
//             balance -= money;
//             historyLog.push(createMessage('takeCredits', money))
//         } else {
//             historyLog.push(createMessage('takeCreditsError'));
//             console.error('not enough money');
//         }
//     }
//
//     return {
//         getCardOptions,
//         putCredits,
//         takeCredits
//     }
//
// }
//
// class UserAccount {
//     constructor(name) {
//         this.name = name;
//         this.cards = [];
//     }
//
//     addCard() {
//         if (this.cards.length === 3) {
//             console.error('limit error');
//             return;
//         }
//         this.cards.push(userCard(this.cards.length + 1));
//     }
//
//     getCardById(id) {
//         const card = this.cards[id - 1];
//         if (!card) {
//             console.error('not present id');
//             return;
//         }
//         return card;
//     }
// }
//
// let user = new UserAccount('vas')


// let userCard = (id) => {
//
//     let balance = 100;
//     let transactionLimit = 100;
//     let historyLog = [];
//     let key = id;
//
//     return {
//         getCardOption: function () {
//             return {balance,transactionLimit,historyLog, key}
//         },
//
//         putCredits: function (sum) {
//             balance += sum;
//             historyLog.push({operationType:'putCredits',credits:sum, operationTime: new Date()})
//         },
//
//         takeCredits: function (sum) {
//             if (transactionLimit >= sum && balance >= sum) {
//                 balance -= sum;
//                 historyLog.push({operationType: 'takeCredits',credits:sum, operationTime: new Date()})
//             } else {
//                 historyLog.push({operationType: 'takeCredits ERROR'})
//                 console.error('not enough money');
//             }
//         },
//
//         setTransactionLimit: function (number) {
//             transactionLimit = number;
//             historyLog.push({operationType:'transactionLimit change',credits:number, operationTime: new Date()})
//         },
//
//         transferCredits: function (sum, cardOfUser) {
//             if (transactionLimit >= sum) {
//                 this.takeCredits(sum);
//                 cardOfUser.putCredits(sum = sum - (sum * 0.5) / 100);
//             }else {
//                 console.error('not enough money!');
//             }
//         },
//     }
// };
//
// class UserAccount {
//     constructor(name) {
//         this.name = name;
//         this.cards = ['card suvenir'];
//     }
//
//     addCard() {
//         this.cards.push(userCard(this.cards.length));
//     }
//
//     getCardByKey(key) {
//         return this.cards[key];
//     }
// }
//
// let user = new UserAccount('vasya');
// user.addCard();
// user.addCard();
//
// let card1 = user.getCardByKey(1);
// console.log(card1.getCardOption());
//
// card1.putCredits(400);
//
// console.log(card1.getCardOption());
// (card1.takeCredits(300));
// console.log(card1.getCardOption());
//
// card1.setTransactionLimit(500);
// console.log(card1.getCardOption());
//
// card1.takeCredits(300);
//
// console.log(card1.getCardOption());
//
// let card2 = user.getCardByKey(2);
// console.log(card2.getCardOption());
//
// card1.transferCredits(100, card2);
// console.log(card1.getCardOption());
//
// console.log(card2.getCardOption());
//
// card1.transferCredits(99, card2);
// console.log(card1.getCardOption());
//
// card1.transferCredits(1, card2);
// console.log(card1.getCardOption());
//
// card1.transferCredits(0.5, card2);
//
// card1.transferCredits(0.5, card2);
//
// console.log(card1.getCardOption());
//
// console.log(card2.getCardOption());
