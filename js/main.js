const cards = document.getElementById('cards');

function getCardEl(color, json) {
    console.log(json)
    console.log(json.title)

    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add(color);

    const img = document.createElement('img');
    img.src = json.image;
    card.appendChild(img);


    const body = document.createElement('div');
    body.classList.add('card-body');

    const title = document.createElement('div');
    title.classList.add('title');
    title.innerText = json.title;

    body.appendChild(title);

    if(json.tags != undefined) {
        const tags = document.createElement('div');
        tags.classList.add('tags');
        var data = ``;
        json.tags.forEach(tag => {
            data += `
                <span class="tag">${tag}</span>
            `;
        })
        tags.innerHTML = data;
    body.appendChild(tags);
    }
    card.appendChild(body)

    const footer = document.createElement('div');
    footer.classList.add('card-footer');
    footer.innerHTML = `
        <a href="#" class="card-btn">Amazon</a>
        <a href="#" class="card-btn">楽天</a>
    `;
    card.appendChild(footer)

    // card.innerHTML = `
    // <img src="https://loremflickr.com/350/250/cardgame" alt="">
    // <div class="card-body">
    //     <div class="title">ドミニオンaaaaaaaaaa</div>
    //     <div class="tags">
    //         <span class="tag">2人から遊べる</span>
    //         <span class="tag">定番品</span>
    //         <span class="tag">TCG好きにおすすめ</span>
    //         <span class="tag">30分から遊べる</span>
    //         <span class="tag">TVで紹介</span>
    //         <span class="tag">有名人が好む</span>
    //     </div>
    // </div>
    // <div class="card-footer">
    //     <a href="#" class="card-btn">Amazon</a>
    //     <a href="#" class="card-btn">楽天</a>
    // </div>
    // `;
    return card;
}

var url = "json/games.json";
fetch(url).then(function(res) {
    return res.json();
}).then((games) => {
    var frag = document.createDocumentFragment();
    games.forEach(function(json, index) {
        const card = getCardEl('card' + (index % 4 + 1), json);
        frag.appendChild(card);
    })
    cards.appendChild(frag);
});

