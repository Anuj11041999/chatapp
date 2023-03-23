const posts =['dummy'];
const time = new Date().toISOString();

//Do not touch these functions below at all
function createpost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push('post');
            resolve();
        })
    }); 
}

function updateLastUserActivity(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            time1 = new Date().toISOString();
            resolve(time1);
        },1000)
    });
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (posts.length>0){
                posts.pop()
                const t2 = new Date().toISOString();
                resolve(t2)
            }else{
                reject('Error')
            }
        },2000)
    })
}

createpost()
    .then(()=>{return updateLastUserActivity()})
    .then((time)=>{
        console.log(posts);
        console.log(time);
        return deletePost()})
    .then((t2)=>{
        console.log(posts);
        console.log(t2);
        return updateLastUserActivity()})