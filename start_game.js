let flag = 1;
var step = 3;
var size_i; var size_j;
var n=15, m=15;
var mas = new Array(n);
for (let i = 0; i < n; i++) {
    mas[i] = new Array(m);
}

function start(){
        let t1 = document.getElementById('t1');
        let t2 = document.getElementById('t2');
        flag = 1;
        for (let i = 0; i < m; i++){
            for (let j = 0; j < n; j++){
                mas[i][j] = 0;
            }
        }
        if (t1.value > 10 || t2.value > 10) {
            alert("Введите значения меньше 11");
        } else {
            size_i = t1.value; size_j = t2.value;
            let area = document.getElementById('area');
            area.innerHTML = "";
            for (let i = 0; i < t1.value; i++) {
                for (let j = 0; j < t2.value; j++) {
                    let box = document.createElement("div");
                    box.id = "box" + i + j;
                    box.style.width = "100px";
                    box.style.height = "100px";
                    box.innerHTML = "";
                    box.style.backgroundImage = "url(pole.png)";
                    box.addEventListener("mousedown", game);
                    box.style.float = "left";
                    box.divRowIndex = i;
                    box.divColomnIndex = j;
                    mas[i][j] = 0;
                    area.appendChild(box);

                }
                let br = document.createElement("div");
                br.style.height = "100px";
                br.style.width = "100px";
                br.value = "";
                area.appendChild(br);
            }
        }
}

function pr(i, j, type, i_p, j_p){
    let new_i = i + i_p;
    let new_j = j + j_p;
    let in_field = (new_i >= 0)&&(new_j >= 0)&&(new_i < size_i)&&(new_j < size_j);
        if (in_field && type === mas[new_i][new_j]) {
            return 1 + pr(new_i, new_j, type, i_p, j_p);
        } else {
            return 0;
        }
}

function proverka(y, x, type1){
   let horizont = pr(y, x, type1, -1, 0) + pr(y, x, type1, 1, 0) + 1;
    let vertical = pr(y, x, type1, 0, -1) + pr(y, x, type1, 0, 1) + 1;
    let hightDiagonal = pr(y, x, type1, 1, -1) + pr(y, x, type1, -1, 1) + 1;
    let lowDiagonal = pr(y, x, type1, -1, -1) + pr(y, x, type1, 1, 1) + 1;
    if ((horizont >= step) || (vertical >= step) ||(hightDiagonal >= step) ||(lowDiagonal >= step)){
        return true;
    }

}

function game(e){
    if (this.innerHTML === ""){
        let a = flag;
        switch (a){
            case 1:   //Krestic
                this.innerHTML = "   ";
                this.style.width = "100px";
                this.style.height = "100px";
                this.style.backgroundImage = "url(crest.png)";
                mas[this.divRowIndex][this.divColomnIndex] = 1;
                if(proverka(this.divRowIndex, this.divColomnIndex, flag)){
                    alert("Крестики победили!");
                }
                flag++;
                break;
            case 2:     //Nolic
                this.innerHTML = "    ";
                this.style.width = "100px";
                this.style.height = "100px";
                this.style.backgroundImage = "url(nolik.png)";
                mas[this.divRowIndex][this.divColomnIndex] = 2;
                if(proverka(this.divRowIndex, this.divColomnIndex, flag)){
                    alert("Нолики победили!");
                }
                flag--;
                break;
        }
    }
}