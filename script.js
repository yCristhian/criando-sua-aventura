const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){

        const atual = document.querySelector('.ativo');
        const proximo  = 'passo-' + this.getattribute('data-proximo')


        atual.classList('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})