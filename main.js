let cards = document.querySelectorAll("div");
let imgs = document.querySelectorAll("img");
let c=[];
    cards.forEach((card) => {
         card.addEventListener("click", (e) => {
            e.currentTarget.classList.add("transform");
            e.currentTarget.querySelector("img").classList.add("clicked");
            e.currentTarget.classList.remove("back");
            e.currentTarget.querySelector("img").classList.remove("imgDisappear");
            c.push(e.currentTarget.querySelector("img").alt);
              if (c[0]!=c[1]) {
                    e.currentTarget.classList.remove("transform");
                    e.currentTarget.querySelector("img").classList.remove("clicked");
                    e.currentTarget.classList.add("back");
                    e.currentTarget.querySelector("img").classList.add("imgDisappear");
                };
                if (c.length==2) {
                    c=[];
                };
                console.log(c);
        });
    });