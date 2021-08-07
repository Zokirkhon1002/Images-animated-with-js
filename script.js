        let rasmlar = document.querySelectorAll(".pictures");
        rasmlar.forEach((item) => {
            item.addEventListener('click', (e) => {
                rasmlar.forEach((i) => {
                    i.classList.remove('active');
                })
                item.classList.add('active');

               
            })
        })
        console.log(rasmlar);
