
        const settings = {
            async: true,
            crossDomain: true,
            url: 'https://hapi-books.p.rapidapi.com/week/romance/4',
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'f9e86e6561mshc1b94590db11a35p1b4b18jsnd281e07da26e',
                'x-rapidapi-host': 'hapi-books.p.rapidapi.com'
            }
        };

        $.ajax(settings).done(function (response) {
           
            let books = '';
            for(let book of response){
                books += `<article class="col"> <div class="card padding-5 border-none"><div class="book-card h-100 d-flex flex-column justify-content-center align-items-center text-center crimson-text"><img src="${book.cover}" class="card-img-top" alt="Diário de Anne Frank"><div class="book-tags padding-5"> <span class="badge rounded-pill bg-rosa crimson-text">G</span>
                                    <span class="badge rounded-pill bg-vermelho crimson-text">D</span>
                                    <span class="badge rounded-pill bg-verde crimson-text">H</span> <div class="card-body">
                                    <h5 class="card-title texturina clamp-card">${book.name}</h5>
                                    <p class="card-text">Jane Austen, 1813</p><a href="pages/cadastro/cadastro.html" class="btn bg-laranja texto-branco charis-sil botao-card decoration-none">Registrar Leitura</a></div>
                                </div></div></div></div></article>`;    
            } 
            $('#book-results').html(books);
        });
