function getElements(data) {
    for (let dataKey in data) {
        if (typeof (data[dataKey]) === 'object') {
            console.log(`${dataKey}: {`);
            getElements(data[dataKey]);
            console.log(`}`);
        }
        else {
            console.log(`${dataKey} : ${data[dataKey]}`);
        }
    }
}
export function getCollection(url, index) {
    return fetch(`https://jsonplaceholder.typicode.com/${url}/${index}`)
        .then((response) => {
        return response.text();
    })
        .then((responseText) => {
        return JSON.parse(responseText);
    })
        .then((data) => {
        console.log(`${url}:`);
        getElements(data);
        return data;
    });
}
export function getTodosByCount(count) {
    return fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then((response) => {
        return response.text();
    })
        .then((responseText) => {
        return JSON.parse(responseText);
    })
        .then((data) => {
        for (let i = 0; i < count; i++) {
            console.log(`userId: ${data[i].userId}, id: ${data[i].id}, title: ${data[i].title}, completed: ${data[i].completed}`);
        }
        return data;
    });
}
