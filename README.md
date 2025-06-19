"# Semijoiass" 

O aplicativo, desenvolvido em React Native, é uma aplicação de e-commerce móvel para a loja "Semijoias Cerâmica & Artes", focada em joias e produtos artesanais. Aqui está um resumo conciso de suas funcionalidades com base no código fornecido:

Tela Inicial (Home Screen): Exibe o logotipo da loja, título e subtítulo. Oferece botões de navegação para acessar as telas de Catálogo, Promoções e Contato.
Tela de Catálogo (Catalog Screen): Apresenta um catálogo de produtos ("Coleção Primavera 2025") em uma grade de duas colunas. Cada cartão de produto exibe imagem, nome, preço e um link "Adicionar ao Carrinho". Os usuários podem:
Tocar em um cartão para ver os detalhes do produto.
Adicionar itens diretamente ao carrinho com um alerta de confirmação.
Tela de Detalhes do Produto (Product Details Screen): Mostra informações detalhadas do produto (imagem, nome, preço, descrição). Os usuários podem:
Adicionar o produto ao carrinho.
Navegar para a tela do carrinho para visualizar os itens adicionados.
Tela de Carrinho (Cart Screen): Exibe todos os itens adicionados ao carrinho, com nome e preço de cada produto, além do total da compra. Inclui:
Uma mensagem "O carrinho está vazio" quando não há itens.
Um botão "Limpar Carrinho" para remover todos os itens.
Tela de Promoções (Promotions Screen): Lista promoções ativas, como descontos em brincos (30% OFF), pulseiras (20% OFF) e combos (40% OFF na compra de uma pulseira e um brinco).
Tela de Contato (Contact Screen): Fornece opções de contato via WhatsApp, Instagram e e-mail, com links clicáveis. Também exibe os horários de atendimento (segunda a sexta: 9h às 18h; sábado: 9h às 13h; domingo: fechado).
Gerenciamento do Carrinho: Utiliza um contexto (CartContext) para gerenciar o estado do carrinho globalmente, permitindo adicionar múltiplos itens e limpar o carrinho, com persistência entre as telas.
O aplicativo oferece uma experiência de compra intuitiva, com navegação fluida, gerenciamento de carrinho e acesso fácil a informações de contato e promoções.
