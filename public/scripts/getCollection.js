export function getTodosByCount(count) {
    return fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then((response) => {
        return response.text();
    })
        .then((responseText) => {
        return JSON.parse(responseText);
    })
        .then((data) => {
        if (data instanceof Array)
            for (let i = 0; i < count; i++) {
                console.log(`userId: ${data[i].userId}, id: ${data[i].id}, title: ${data[i].title}, completed: ${data[i].completed}`);
            }
        return data;
    });
}
