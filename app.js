
// 2) დავწეროთ ფუნქცია რომელიც წამოიღებს მონაცემებს 
// https://jsonplaceholder.typicode.com/users დან  და დაბრუნებს ამ მონაცემებს


const promiseData = fetch('https://jsonplaceholder.typicode.com/users ')
promiseData.then(res => res.json()).then(res => console.log(res))
.catch((err) => {
    console.log(err)
})



const fetchData = async () =>{
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users ')
        const data = await res.json()
        return data
    }catch (err) {
        console.log(err)
    }
}
fetchData().then(res => console.log(res)).catch(er => console.log(er));


// 1) შევქმნათ ფრომისი. იმის შანსი რომ ფრომისი ან დარეზოლვდება 
// ან დარეჯექთდება უნდა იყოს 50/50.
// ანუ ზოგიერთ გამოძახებაზე უნდა დარეჯექთდეს.

const randomPromise = new Promise((res, rej) => {
    const randomNum = Math.floor(Math.random() * 10);
    if (randomNum < 5) {
        res('success');
    } else {
        rej('rejected');
    }
});

randomPromise.then(res => console.log(res)).catch(rej => console.log(rej));


// 3) დავწეროთ ფუნქცია რომელიც ეცდება წმოიღოს მონაცემები
//  https://dummyjson.com/users დან და https://jsonplaceholder.typicode.com/users დან.
// ფუნქციამ უნდა დაგვიბრუნოს ის ლისთი რომელის ჩატვირთვაც უფრო მალე მოხდება.

async function fetchDatas() {
    try {
        const res1 = fetch('https://dummyjson.com/users')
            .then(res => res.json());
        const res2 = fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json());
        const result = await Promise.race([res1, res2]);
        return result;
    } catch (err) {
        console.error(err);
    }
}

fetchDatas()
    .then(res => console.log(res))
    .catch(err => console.error(err));
