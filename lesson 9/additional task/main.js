// - Є масив :
//
    let usersList = [
        {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            address: {
                street: 'Kulas Light',
                suite: 'Apt. 556',
                city: 'Gwenborough',
                zipcode: '92998-3874',
                geo: {
                    lat: '-37.3159',
                    lng: '81.1496'
                }
            },
            phone: '1-770-736-8031 x56442',
            website: 'hildegard.org',
            company: {
                name: 'Romaguera-Crona',
                catchPhrase: 'Multi-layered client-server neural-net',
                bs: 'harness real-time e-markets'
            }
        },
        {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            address: {
                street: 'Victor Plains',
                suite: 'Suite 879',
                city: 'Wisokyburgh',
                zipcode: '90566-7771',
                geo: {
                    lat: '-43.9509',
                    lng: '-34.4618'
                }
            },
            phone: '010-692-6593 x09125',
            website: 'anastasia.net',
            company: {
                name: 'Deckow-Crist',
                catchPhrase: 'Proactive didactic contingency',
                bs: 'synergize scalable supply-chains'
            }
        },
        {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            address: {
                street: 'Douglas Extension',
                suite: 'Suite 847',
                city: 'McKenziehaven',
                zipcode: '59590-4157',
                geo: {
                    lat: '-68.6102',
                    lng: '-47.0653'
                }
            },
            phone: '1-463-123-4447',
            website: 'ramiro.info',
            company: {
                name: 'Romaguera-Jacobson',
                catchPhrase: 'Face to face bifurcated interface',
                bs: 'e-enable strategic applications'
            }
        },
        {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            address: {
                street: 'Hoeger Mall',
                suite: 'Apt. 692',
                city: 'South Elvis',
                zipcode: '53919-4257',
                geo: {
                    lat: '29.4572',
                    lng: '-164.2990'
                }
            },
            phone: '493-170-9623 x156',
            website: 'kale.biz',
            company: {
                name: 'Robel-Corkery',
                catchPhrase: 'Multi-tiered zero tolerance productivity',
                bs: 'transition cutting-edge web services'
            }
        },
        {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            address: {
                street: 'Skiles Walks',
                suite: 'Suite 351',
                city: 'Roscoeview',
                zipcode: '33263',
                geo: {
                    lat: '-31.8129',
                    lng: '62.5342'
                }
            },
            phone: '(254)954-1289',
            website: 'demarco.info',
            company: {
                name: 'Keebler LLC',
                catchPhrase: 'User-centric fault-tolerant solution',
                bs: 'revolutionize end-to-end systems'
            }
        },
        {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            address: {
                street: 'Norberto Crossing',
                suite: 'Apt. 950',
                city: 'South Christy',
                zipcode: '23505-1337',
                geo: {
                    lat: '-71.4197',
                    lng: '71.7478'
                }
            },
            phone: '1-477-935-8478 x6430',
            website: 'ola.org',
            company: {
                name: 'Considine-Lockman',
                catchPhrase: 'Synchronised bottom-line interface',
                bs: 'e-enable innovative applications'
            }
        },
        {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            address: {
                street: 'Rex Trail',
                suite: 'Suite 280',
                city: 'Howemouth',
                zipcode: '58804-1099',
                geo: {
                    lat: '24.8918',
                    lng: '21.8984'
                }
            },
            phone: '210.067.6132',
            website: 'elvis.io',
            company: {
                name: 'Johns Group',
                catchPhrase: 'Configurable multimedia task-force',
                bs: 'generate enterprise e-tailers'
            }
        },
        {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            address: {
                street: 'Ellsworth Summit',
                suite: 'Suite 729',
                city: 'Aliyaview',
                zipcode: '45169',
                geo: {
                    lat: '-14.3990',
                    lng: '-120.7677'
                }
            },
            phone: '586.493.6943 x140',
            website: 'jacynthe.com',
            company: {
                name: 'Abernathy Group',
                catchPhrase: 'Implemented secondary concept',
                bs: 'e-enable extensible e-tailers'
            }
        },
        {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            address: {
                street: 'Dayna Park',
                suite: 'Suite 449',
                city: 'Bartholomebury',
                zipcode: '76495-3109',
                geo: {
                    lat: '24.6463',
                    lng: '-168.8889'
                }
            },
            phone: '(775)976-6794 x41206',
            website: 'conrad.com',
            company: {
                name: 'Yost and Sons',
                catchPhrase: 'Switchable contextually-based project',
                bs: 'aggregate real-time technologies'
            }
        },
        {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            address: {
                street: 'Kattie Turnpike',
                suite: 'Suite 198',
                city: 'Lebsackbury',
                zipcode: '31428-2261',
                geo: {
                    lat: '-38.2386',
                    lng: '57.2232'
                }
            },
            phone: '024-648-3804',
            website: 'ambrose.net',
            company: {
                name: 'Hoeger LLC',
                catchPhrase: 'Centralized empowering task-force',
                bs: 'target end-to-end models'
            }
        }
    ];
//
// Створити під кожен елемент окремий блок. В цьому блоці, під кожну властивість, та властивості внутрішніх об'єктів створити свої окремі блок.

// for (let user of usersList) {
//
//     let userDiv = document.createElement('div');
//     document.body.append(userDiv);
//     userDiv.classList.add('userDiv');
//
//     for (let key in user) {
//
//         if (typeof user[key] === 'object') {
//
//             let keyDivO = document.createElement('div');
//             keyDivO.classList.add('keyDiv');
//             keyDivO.innerText = key;
//             console.log(key);
//             userDiv.append(keyDivO);
//
//             for (let field in user[key]) {
//
//                 if (typeof user[key][field] === 'object') {
//
//                     let keyDivO2 = document.createElement('div');
//                     keyDivO2.classList.add('keyDiv');
//                     keyDivO2.innerText = field;
//                     userDiv.append(keyDivO2)
//
//                     for (let property in user[key][field]) {
//
//                         let keyDivNO3 = document.createElement('div');
//                         keyDivNO3.classList.add('keyDiv');
//                         keyDivNO3.innerText = user[key][field][property];
//                         userDiv.append(keyDivNO3);
//                     }
//
//                 } else {
//                     let keyDivNO2 = document.createElement('div');
//                     keyDivNO2.classList.add('keyDiv');
//                     keyDivNO2.innerText = user[key][field];
//                     userDiv.append(keyDivNO2);
//                 }
//             }
//         } else {
//             let keyDivNO = document.createElement('div')
//             keyDivNO.classList.add('keyDiv');
//             keyDivNO.innerText = user[key];
//             userDiv.append(keyDivNO)
//         }
//     }
// }


// ----------------------------------
// for (let user of usersList) {
//
//     let userDiv = document.createElement('div');
//     userDiv.classList.add('userDiv');
//     document.body.append(userDiv);
//
//     for (let key in user) {
//
//         if (typeof user[key] === 'object') {
//
//             let keyDiv2 = document.createElement('div');
//             userDiv.append(keyDiv2);
//             keyDiv2.classList.add('keyDiv');
//             keyDiv2.innerText = `${key}`
//
//             for (let field in user[key]) {
//
//                 if (typeof user[key][field] === 'object') {
//
//                     let keyDiv3 = document.createElement('div');
//                     keyDiv3.classList.add('keyDiv');
//                     userDiv.append(keyDiv3)
//                     keyDiv3.innerText = field
//
//                     for (let property in user[key][field]) {
//                         let keyDiv4 = document.createElement('div');
//                         keyDiv4.classList.add('keyDiv');
//                         userDiv.append(keyDiv4);
//                         keyDiv4.innerText = user[key][field][property];
//                     }
//
//
//                 }else {
//
//                 let fieldDiv = document.createElement('div');
//                 fieldDiv.classList.add('keyDiv')
//                 fieldDiv.innerText = `${user[key][field]}`;
//                 userDiv.append(fieldDiv);
//                 }
//                         }
//         } else {
//
//             let keyDiv = document.createElement('div');
//             keyDiv.classList.add('keyDiv')
//             keyDiv.innerText = `${user[key]}`;
//             userDiv.append(keyDiv);
//         }
//     }
// }
// ------------------------------------------------------
//
//
// --------
//     за допомоги рекурсії перебрати структуру сторінки. зробити об'єкт, всі заголовки покласти в (масив) характеристику headings,всі параграфи покласти в характеристику (масив) paragraphs

// let object = {headings: [], paragraphs: []}
//
// function hPFinder(htmlElement) {
//
//     let children = htmlElement.children;
//
//     if (children.length !== 0) {
//         for (let child of children) {
//
//             if (child.tagName === 'H1' || child.tagName === 'H2'|| child.tagName === 'H3') {
//                 object.headings.push(child);
//             }
//             if (child.tagName === 'P') {
//                 object.paragraphs.push(child);
//             }
//
//             hPFinder(child);
//         }
//     }
//
// }
//
// hPFinder(document.body);
//
// console.log(object);

// ------
//
//     зробити div contenteditable ввести будь яке ціле слово. та при натисканні табуляції перетворити його на подвійний тег
// asd ->tab-> <asd></asd>

