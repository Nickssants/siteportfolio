<script>
    function mudarImagem() {
    var imagem = document.getElementById('imagem');
    // Substitua 'caminho_para_sua_nova_imagem.jpg' pelo caminho da nova imagem que você deseja mostrar
    imagem.src = 'caminho_para_sua_nova_imagem.jpg';
    // Substitua 'Nova Descrição' pela descrição da nova imagem que você deseja mostrar
    imagem.alt = 'Nova Descrição';
    imagem.style.opacity = 0; // Define a opacidade como 0 (imagem transparente)
    setTimeout(function() {
    imagem.style.opacity = 1; // Define a opacidade como 1 (imagem totalmente visível)
}, 50); // Tempo de espera em milissegundos antes de tornar a imagem visível (50ms neste caso)
}
</script>