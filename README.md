# <> Desafio Frontend BIT </>

## Sobre

O desafio consiste em implementar uma aplicação client-side, que rode de forma consistente nos navegadores mais recentes e que seja responsiva para melhor visualização em dispositivos móveis.

## Regras

Baseado no [Layout](https://github.com/b2w-marketplace/challenge-front/blob/master/files/layout-about.jpg), desenvolva uma página web que exibe informações de usuários.

Premissas:
1. Ao carregar a página, as informações exibidas devem ser as suas próprias informações pessoais.
2. Ao clicar no botão 'try the next one', a página deve chamar uma API (disponível no link abaixo) que retorna dados de usuários randômicos e exibi-los na tela.
3. Ao clicar no botão 'Follow' a página deve armazenar essa informação. Caso o mesmo usuário seja exibido novamente o botão deve aparecer como 'Following' e com cor diferente
4. Ao seguir um usuário, deverá ser exibido um link na parte superior direita da página ([Layout](https://github.com/b2w-marketplace/challenge-front/blob/master/files/layout-about_following.jpg))
5. Ao clicar no link, uma lista com os usuários seguidos deve ser exibida ([Layout](https://github.com/b2w-marketplace/challenge-front/blob/master/files/layout-about_followers-list.jpg))
6. Ao navegar entre os usuários (via 'try the next one'), os usuários que NÃO forem seguidos devem aparecer na lista de sugestões ([Exemplo com 1](https://github.com/b2w-marketplace/challenge-front/blob/master/files/layout-about_sugestions-list-1.png)) ([Exemplo com vários](https://github.com/b2w-marketplace/challenge-front/blob/master/files/layout-about_sugestions-list-5.png)). Guarde essas informações no Browser, para que quando a página for acessada novamente ou recarregada, já exista sugestões iniciais.

 Note que o Layout e as premissas não deixam claro todas as situações possíveis para os dados do usuário.
 Você pode interpretar como quiser o que não foi definido como premissa e melhorar a funcionalidade da página, caso ache necessário.
 
Recomendações:
- Utilize a versão mais recente do Angular (https://angular.io/)
- Utilize a versão mais recente do Bootstrap (https://getbootstrap.com/)
- Atente-se a resposividade da tela (principalmente no formato mobile)

## Links
[Layout 1](https://github.com/b2w-marketplace/challenge-front/blob/master/files/layout-about.jpg)
[Layout 2](https://github.com/b2w-marketplace/challenge-front/blob/master/files/layout-about_following.jpg)
[Layout 3](https://github.com/b2w-marketplace/challenge-front/blob/master/files/layout-about_followers-list.jpg)
[Layout 4](https://github.com/b2w-marketplace/challenge-front/blob/master/files/layout-about_sugestions-list-5.png)

Link da [API](https://randomuser.me/api/).

*a Api pode demorar pra responder ou ficar fora do ar em alguns momentos (pense nisso quando for desenvolver).

<hr>

### Projeto realizado até o momento:

https://github.com/RickFernandez/FrontEnd-Challenger-BIT/assets/89798238/2f8b0306-37ff-4921-84e0-92a48352f8c2

- Responsividade:

https://github.com/RickFernandez/FrontEnd-Challenger-BIT/assets/89798238/910ebb42-bbae-4fb3-96fd-83f6cc97919a

- Mensagem de erro caso a chamada a API falhe:

https://github.com/RickFernandez/FrontEnd-Challenger-BIT/assets/89798238/44e5058f-4e7d-4713-b115-e32a95487674
