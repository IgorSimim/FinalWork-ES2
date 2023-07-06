# FinalWork-ES2
Projeto explicativo sobre o modelo Factory Method


# Sobre o Projeto
- Projeto construido para enfatizar a diferença da utilização do modelo Factory Method nos códigos. No projeto é posível obter um exemplo de uma aplicação com este método em códigos e um que não possui a mesma idéia do modelo em questão.
- O padrão Factory Method é um padrão de design criacional que fornece a interface para a criação de objetos em uma superclasse, mas permite que subclasses possam alterar o tipo de objetos que são criados.
- Por exemplo, se tivermos "Personagem" como a super classe do nosso projeto,  poderiamos ter varias subclasses (Guerreiro, Mago, Arqueiro...). Ao invés de chamar o construtor diretamente, para cada subclasse criada, podemos utilizar o Factory Method, que recebe um parametro de string representando o tipo de personagem que deve ser criado e, após isso, ele  pode retornar a subclasse adequada, baseado no parâmetro passado. Isso pode facilitar muito a adição de novos tipos de personagens sem ter que modificar o código já existente. O padrão Factory Method sugere que você substitua chamadas diretas de construção de objetos (usando o operador new) por chamadas para um método.
 
# Tecnologias utilizadas
## Back end
- Typescript

# Como executar o Projeto:
```bash
# clonar o projeto
git@github.com:IgorSimim/TrabFinal-ES2.git

# entrar na pasta do projeto TrabFinal-ES2
cd TrabFinal-ES2                                                                                                      
```

# Imagens:
## Sem a utilização do Factory Method
<div align="center">
<img src="https://github.com/IgorSimim/FinalWork-ES2/assets/120426953/a3399435-f7bf-4076-99f4-008bf0b1ebd9.png"/>
</div> 

## Com a utilização do Factory Method
<div align="center">
<img src="https://github.com/IgorSimim/FinalWork-ES2/assets/120426953/c144cc99-62db-4474-9b6c-032126f1da66.png"/>
</div>

# Autor
Igor Leon Borges Silva Simim

Gabriel Cunha Huber
