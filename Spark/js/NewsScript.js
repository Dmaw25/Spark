let state = {
    
}
function createNode(element) {
    return document.createElement(element);
}
function append(parent, el) {
    return parent.appendChild(el);
}
const apiUrl = 'https://newsapi.org/v2/top-headlines?sources=ign&apiKey=c72856a8733d43aa8391b1654eafc89a';
//const req = new Request(apiUrl);
const ul = document.getElementById('GameNews');

fetch(apiUrl)
    /*.then(function (response) {
        console.log(response.json());
    })*/
    .then((resp) => resp.json())
    .then(function (data) {
        console.log(data);
            let author = data.articles;
            return author.map(function (authors) {
                let li = createNode('li'),
                    a = createNode('a'),
                    br = createNode('br'),
                    div = createNode('div'),
                    art = createNode('article'),
                    header = createNode('header');
                a.setAttribute('href', `${authors.url}`,'target',"_blank");
                header.innerHTML = `${authors.title}`;
                div.innerHTML = `${authors.description}`;
                art.innerHTML = `${authors.content}`;
                append(a, header);
                append(li, a);
                append(li, br);
                append(a, div);   
                append(a, art);
                append(ul, li);
            })
        })
        .catch(function(error){
            console.log(error);
        });

