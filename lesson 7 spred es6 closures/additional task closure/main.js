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

function userCard(int) {

    return{
        getCardOptions: function () {
            return{}
        },
    }
}