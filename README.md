# FinalWork-ES2
Projeto explicativo sobre o modelo Factory Method


# 🏭 Sobre o Projeto
- Projeto construido para enfatizar a diferença da utilização do modelo Factory Method nos códigos. No projeto é posível obter um exemplo de uma aplicação com este método em códigos e um que não possui a mesma idéia do modelo em questão.
- O padrão Factory Method é um padrão de design criacional que fornece a interface para a criação de objetos em uma superclasse, mas permite que subclasses possam alterar o tipo de objetos que são criados.
- Por exemplo, se tivermos "Personagem" como a super classe do nosso projeto,  poderiamos ter varias subclasses (Guerreiro, Mago, Arqueiro...). Ao invés de chamar o construtor diretamente, para cada subclasse criada, podemos utilizar o Factory Method, que recebe um parametro de string representando o tipo de personagem que deve ser criado e, após isso, ele  pode retornar a subclasse adequada, baseado no parâmetro passado. Isso pode facilitar muito a adição de novos tipos de personagens sem ter que modificar o código já existente. O padrão Factory Method sugere que você substitua chamadas diretas de construção de objetos (usando o operador new) por chamadas para um método.
  
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
- Typescript

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
https://refactoring.guru/pt-br/design-patterns/factory-method

https://medium.com/xp-inc/desing-patterns-factory-method-a7496ae071aa

# <img src="https://github.com/IgorSimim/FinalWork-ES2/assets/120426953/b485ed8e-906f-4353-955f-24636af50563" width="40" /> Autor
Igor Leon Borges Silva Simim

Gabriel Cunha Huber
