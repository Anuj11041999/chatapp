// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const preMovie = async()=> {
//     const promiseWife = new Promise((resolve,reject)=> {
//         setTimeout(()=>resolve('ticket'),3000);
//     });
//     const getPopcorn = new Promise((resolve,reject)=> resolve('popcorn'));
//     const addButter = new Promise((resolve,reject)=> resolve('butter'));
//     const getColdDrink = new Promise((resolve,reject)=> resolve('coldDrink'));

//     let ticket = await promiseWife;
//     console.log(`wife:I have the ${ticket}`);
//     console.log('husband: We should go in');
//     console.log('wife: I am hungry');

//     // let popcorn = await getPopcorn;
//     // console.log(`husband:I have the ${popcorn}`);
//     // console.log('husband: We should go in');
//     // console.log('wife: I need butter');

//     // let butter = await addButter;
//     // console.log(`husband:I have added ${butter}`);
//     // console.log('husband: We should go in');
//     // console.log('wife: I need colddrink');

//     // let drink = await getColdDrink;
//     // console.log(`husband:I have the ${drink}`);
//     // console.log('husband: We should go in');
//     // console.log('wife: I am hungry');

//     let [popcorn,drink] = await Promise.all([getPopcorn,getColdDrink])
//     console.log(popcorn,drink);

//     return ticket;
// }

// preMovie().then((m)=> console.log(`person3 shows ${m}`))

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');

const posts =['dummy'];
const time = new Date().toISOString();

const task = async ()=>{
    const createPost = new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push('post');
            resolve();
        })
    });
    const updateLastUserActivity = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let time1 = new Date().toISOString();
            resolve(time1);
        },2000)
    });

    const deletePost =  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (posts.length>0){
                posts.pop()
                const t2 = new Date().toISOString();
                resolve(t2)
            }else{
                reject('Error')
            }
        },3000)
    })

    let create = await createPost;
    let time = await updateLastUserActivity;
    console.log(posts)
    console.log(time)
    let time2 = await deletePost;
    console.log(posts);
    console.log(time2);

    return posts

}

task().then(()=>console.log('Success'))