const contentPopup = `
<div class="content-popup" pfr-select="setTimePopup">
    <div class="box-popup">
        <div class="content">
            <h2>Nota</h2>
            <div>
                <p>
                    Esse site foi montado a partir do curso de Web Design Completo da Origamid. Pelo motivo do site apresentar uma forma de contrução antiga de layout ( sem flex ou grid ), o curso foi finalizado, sendo substituído pelo curso de HTML e CSS para Iniciantes. Como eu tinha concluído esse curso através de contas de terceiros, só estou colocando ele no ar hoje (2022) com a finalidade de mante-lo em meu registro de estudos, já que só atualmente tive a oportunidade de comprar meu próprio plano.
                </p>
                <p>
                    É importante lembrar que, embora o projeto tenha a sua origem de um curso, essa versão apresentada pode conter alguns detalhes (visíveis ou não) modificados por mim. Isso é: posso ter mudado algumas coisas do projeto original como uma forma de estudar outras funções ou puramente por diversão.
                </p>
                <p>
                    Agradeço pela sua visualização! Clique <a href="" class="link" pfr-select="link-github">aqui</a> caso queira ver o código do projeto.
                </p>
            </div>
            <button pfr-select="btn-close-popup">Fechar</button>
        </div>
    </div>
</div>
`;

( document.body ).insertAdjacentHTML( 'beforeend', contentPopup )

setTimeout( () => {
    document.querySelector( '[pfr-select="link-github"]' ).setAttribute( 'href', 'https://github.com/PedroFigueiraRuivo/Bikecraft-Curso' )
    const myPopup = document.querySelector( '[pfr-select="setTimePopup"]' );
    const closeBtn = document.querySelector( '[pfr-select="btn-close-popup"]' );

    myPopup.classList.add( 'active' )

    closeBtn.addEventListener( 'click', () => myPopup.classList.remove( 'active' ) );
}, 5000 );