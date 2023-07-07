# 👷 FinalWork-ES2
Projeto explicativo sobre o modelo Factory Method


# 🏭 Sobre o Projeto
- Projeto construido para enfatizar a diferença da utilização do modelo Factory Method nos códigos. No projeto é posível obter um exemplo de uma aplicação com este método em códigos e um que não possui a mesma idéia do modelo em questão.
- O padrão Factory Method é um padrão de design criacional que fornece a interface para a criação de objetos em uma superclasse, mas permite que subclasses possam alterar o tipo de objetos que são criados.
- Por exemplo, se tivermos "Personagem" como a super classe do nosso projeto,  poderiamos ter varias subclasses (Guerreiro, Mago, Arqueiro...). Ao invés de chamar o construtor diretamente, para cada subclasse criada, podemos utilizar o Factory Method, que recebe um parametro de string representando o tipo de personagem que deve ser criado e, após isso, ele  pode retornar a subclasse adequada, baseado no parâmetro passado. Isso pode facilitar muito a adição de novos tipos de personagens sem ter que modificar o código já existente. O padrão Factory Method sugere que você substitua chamadas diretas de construção de objetos (usando o operador new) por chamadas para um método.

# <img src="https://github.com/IgorSimim/FinalWork-ES2/assets/120426953/c1be7210-1ec1-4bf5-b2e8-fd7dd47fd5ff" width="40" /> Vantagens:
- **Encapsulamento:** o Factory Method Pattern encapsula a criação de objetos em uma classe separada, permitindo que a classe cliente se concentre apenas na utilização desses objetos.
- **Flexibilidade:** o Factory Method Pattern permite que a classe Main trabalhe com objetos sem precisar conhecer a classe concreta a ser criada. Em vez disso, a classe Main pode trabalhar com a interface comum fornecida pelo Factory Method.
- **Extensibilidade:** o Factory Method Pattern facilita a adição de novas classes concretas à aplicação. Novas classes concretas podem ser facilmente adicionadas ao sistema, sem afetar as classes existentes, tornando a aplicação mais modular e extensível.
- **Testabilidade:** o Factory Method Pattern torna mais fácil testar a aplicação, uma vez que a criação de objetos é encapsulada em uma classe separada.

# <img src="https://github.com/IgorSimim/FinalWork-ES2/assets/120426953/c1be7210-1ec1-4bf5-b2e8-fd7dd47fd5ff" width="40" /> Desvantagens:
- **Complexidade:** o Factory Method Pattern pode adicionar complexidade ao código, especialmente em aplicativos pequenos. A necessidade de criar classes adicionais para encapsular a criação de objetos pode tornar o código mais difícil de entender e manter.
- **Overhead:** o Factory Method Pattern pode adicionar overhead ao código, uma vez que a criação de objetos é encapsulada em uma classe separada. Isso pode tornar a inicialização do aplicativo mais lenta e aumentar a quantidade de memória necessária.
- **Abstração excessiva:** o Factory Method Pattern pode levar a uma abstração excessiva do código, o que pode tornar o código mais difícil de entender. Se a aplicação é pequena ou simples, o uso do Factory Method Pattern pode não ser necessário e pode adicionar complexidade desnecessária.
  
# <img src="https://github.com/IgorSimim/FinalWork-ES2/assets/120426953/fe64751b-873e-4ba0-969b-accc48a1339f" width="40" /> Exemplos de APIs que utilizam o Factory Method:
Temos como exemplo algumas aplicações que são de grande reconhecimento internacional, como:
| Marca | Aplicativo |
|------------|-----------|
| <img src="https://github.com/IgorSimim/FinalWork-ES2/assets/120426953/4eb4b137-fffe-456a-b1c1-7177df4f67be" width="40" /> | Uber |
| <img src="https://github.com/IgorSimim/FinalWork-ES2/assets/120426953/18a752fc-a08a-4163-be57-73b593ec734f" width="45" /> | 99 |
| <img src="https://github.com/IgorSimim/FinalWork-ES2/assets/120426953/b0cf6551-8140-4aca-882b-982769b1205b" width="55" /> | iFood |

Todas utilizam diferentes subclasses que se diferenciam. Por exemplo, na API do Uber, temos o UberX, UberFlash, Prioridade e os econômicos, que são UberMoto e FlashMoto.

# Tecnologias utilizadas
## Back end
- <img src="https://github.com/IgorSimim/FinalWork-ES2/assets/120426953/cb1cc449-73bc-4c36-bd7a-6c3a8380af68" width="40" align="center"/>  Typescript

# <img src="https://github.com/IgorSimim/FinalWork-ES2/assets/120426953/571dfa0a-f8a2-4444-90a0-0ea9ffda1811" width="40" /> Como executar o Projeto:
```bash
# clonar o projeto
git@github.com:IgorSimim/TrabFinal-ES2.git

# entrar na pasta do projeto TrabFinal-ES2
cd TrabFinal-ES2                                                                                                      
```
# <img src="https://github.com/IgorSimim/FinalWork-ES2/assets/120426953/aec2925c-247b-4c7e-b6ec-68ac34800b8e" width="40" /> Imagens:
## Sem a utilização do Factory Method
<div align="center">
<img src="https://github.com/IgorSimim/FinalWork-ES2/assets/120426953/a3399435-f7bf-4076-99f4-008bf0b1ebd9.png"/>
</div> 

## Com a utilização do Factory Method
<div align="center">
<img src="https://github.com/IgorSimim/FinalWork-ES2/assets/120426953/c144cc99-62db-4474-9b6c-032126f1da66.png"/>
</div>

# 🔗 Links:
## Link do vídeo explicativo:
https://www.youtube.com/watch?v=Z1fKwsvHiEA&t=5s

## Links usados como referência:
https://refactoring.guru/pt-br/design-patterns/factory-method

https://medium.com/xp-inc/desing-patterns-factory-method-a7496ae071aa

https://www.linkedin.com/pulse/factory-method-pattern-r%C3%B4mulo-pereira/?originalSubdomain=pt

# <img src="https://github.com/IgorSimim/FinalWork-ES2/assets/120426953/b485ed8e-906f-4353-955f-24636af50563" width="40" /> Autores
Igor Leon Borges Silva Simim

Gabriel Cunha Huber
