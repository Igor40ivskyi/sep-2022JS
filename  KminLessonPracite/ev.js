// let elementById = document.getElementById('btn');
//
// elementById.onclick = () => {
//     console.log('CLC');
// };
//
// let i = 0;
// while (i < 999999999) {
//     i++
// }
//
// console.log(1);
//
// setTimeout(() => {
//     console.log(2.1)
// }, 99.999);
//
// setTimeout(() => {
//     console.log(2.2)
// }, 100);
//
// setTimeout(() => {
//     console.log(2.3)
// }, 100);
//
// setTimeout(() => {
//     console.log(2.4)
// }, 100);
//
// setTimeout(() => {
//     console.log(2.5)
// }, 99.998);
//
//
//
// console.log(3);
//
// for (let i = 0; i < 10000; i++) {
//     console.log('hook');
// }

// ========================================

// let money = 100;
//
// function gotWork(isJobeDone) {
//     return new Promise((resolve, reject) => {
//
//         setTimeout(() => {
//
//             if (isJobeDone) {
//                 money += 1000;
//                 console.log(money);
//                 resolve('Зробив роботу добре');
//             } else {
//                 reject('Firts you have to do the job');
//             }
//
//         }, 2000);
//     });
// }
//
// function buyStaff(moneyForStaff) {
//     return new Promise((resolve, reject) => {
//
//         setTimeout(() => {
//
//             if (moneyForStaff < 500) {
//                 reject('no money no clothes');
//             } else {
//                 money -= 500;
//                 console.log(money);
//                 resolve('got new clothes');
//             }
//         }, 1000);
//     });
// }
//
//
// function haveLunch(moneyForLunch) {
//     return new Promise((resolve, reject) => {
//
//         setTimeout(() => {
//             if (moneyForLunch < 300) {
//                 reject('no money no eat');
//             }else{
//                 money -= 300;
//                 console.log(money);
//                 resolve('good food good mood');
//             }
//         },500);
//     });
// }
//
// gotWork(true)
//     .then(value => {
//         return buyStaff(money);
//     })
//     .then(value => {
//         return haveLunch(money);
//     })
//     .then(value => {
//         console.log(money);
//     });




// ============================================== My day ========================

let money = 0;

function wakeUp(wakeUp) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (!wakeUp) {
                console.log('sleep all day');
                reject('is not awake');
            } else {
                console.log('i woke up and ready to act ');
                resolve('is awake');
            }
        }, 300);
    });
}

function goWork(isAwake) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (isAwake !== 'is awake') {
                console.log('he is sleeping he can`t work');
                reject('you cant`t work today');
            }
            else {
                console.log('yeah i ready to work');
                money += 900;
                resolve('got work got money');
            }
        },3000);
    });
}

function buyClothes(moneyForClothes) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (moneyForClothes < 500) {
                reject('no money no clothes');
            }else{
                money -= 500;
                resolve('got new clothes');
            }
                },2000);
    });

}

function haveLunch(moneyForLunch) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (moneyForLunch < 300) {
                reject('you didn`t earned up enough for meal');
            }else{
                money -= 300;
                resolve('good food good mood');
            }

        },1000);

    });
}

function gymMembership(moneyForGym) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (moneyForGym >=100) {
                money -= 100;
                resolve('got membership');
            } else {
                reject('crushed dream');
            }

        },500);
    });
}

function takeShower(workedOut) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (workedOut === 'got membership') {
                resolve('i can take shower cause i worked hard in the gym');
            }else{
                reject('no gym no shower')
            }
        },800);
    });
}

function goToBed(hadShower) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (hadShower === 'i can take shower cause i worked hard in the gym') {
                resolve('i am so tired i need some sleep');
            } else {
                reject('go to gym firs and take shower bitch');
            }
        }, 3000);
    });
}

// wakeUp(true)
//     .then(value => {
//         console.log(value);
//         return goWork(value);
//     })
//     .then(value => {
//         console.log(value);
//         console.log(money);
//         return buyClothes(money);
//     })
//     .then(value => {
//         console.log(value);
//         console.log(money);
//         return haveLunch(money);
//     })
//     .then(value => {
//         console.log(value);
//         console.log(money);
//         return goWork('is awake');
//     })
//     .then(value => {
//         console.log(value);
//         console.log(money);
//         return gymMembership(money);
//     })
//     .then(value => {
//         console.log(value);
//         console.log(money);
//         return takeShower(value);
//     })
//     .then(value => {
//         console.log(value);
//         return goToBed(value);
//     })
//     .then(value => {
//         console.log(value);
//
//     })
//     .catch(e => {
//         console.warn(e);
//     })
//     .finally(() => {
//         console.log('it was a good day');
//     });

async function myDay() {

    const wakeUpRes = await wakeUp(true);
    console.log(wakeUpRes);

    const goWorkRes = await goWork('is awake');
    console.log(money);
    console.log(goWorkRes);

    const buyClothesRes = await buyClothes(money);
    console.log(money);
    console.log(buyClothesRes);

    const buyFoodRes = await haveLunch(money);
    console.log(money);
    console.log(buyFoodRes);

    const goWork2Res = await goWork('is awake');
    console.log(money);
    console.log(goWork2Res);

    const gymRes = await gymMembership(money);
    console.log(money);
    console.log(gymRes);

    const showerRes = await takeShower('got membership');
    console.log(showerRes);

    const goTobedRes = await goToBed(showerRes);
    console.log(goTobedRes);
}


myDay();













