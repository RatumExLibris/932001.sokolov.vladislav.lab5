function change_color() {
    var modal = document.getElementById('modal');
    var modal_news = document.getElementById('modalnews');
    var title = "Новость " + this.id;
    var textup = title + ": Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, alias.";
    var textdown = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium.";
    modal_news.firstElementChild.textContent = title;
    modal_news.lastElementChild.innerHTML = textup + "<br/>" + textdown;
    modal.style.display = 'block';
}

function go_to_main() {
    document.getElementById('modal').style.display='none';
}

var main = document.getElementById("main");
var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
    "Beatae voluptatum suscipit sed delectus facere veritatis autem " +
    "quisquam unde nam doloribus?";
for (var i = 0; i < 3; i++) {
    var div = document.createElement('div');
    div.className = "news";
    var p = document.createElement('p');
    var h2 = document.createElement('h2');
    var button = document.createElement('button');
    button.id = (i + 1).toString();
    h2.textContent = "Новость " + (i + 1).toString();
    p.textContent = text;
    button.onclick = change_color;
    button.innerText = "Открыть всплывающее окно";
    div.appendChild(h2);
    div.append(p);
    div.append(button);
    main.appendChild(div);
}