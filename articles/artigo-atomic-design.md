## Artigo de revisão de Atomic Design
##### Unoesc Chapecó
##### Pós-graduação em Desenvolvimento Web, Cloud e dispositivos móveis - WebMob
##### Disciplina: HTML5+CSS3
##### Professor: Jean Carlo Nascimento
##### Acadêmico: Alexandre Jair Baron Pasinatto
----
<br>

#####Resumo:
Atomic Design é uma metodologia inspirada na quimica criada por Brad Frost para desenvolver páginas web, pensando no design como um sistema atomico. Onde as páginas web são um conjunto de elementos interligados que formam um todo. Partindo da crição dos componentes isolados ou átomos que se juntam e formam as moléculas e então formam um organismo. 

#####1) O que é?
É um método para criação de sistemas de design divido em 5 etapas. **átomos, moléculas, organismos, templates e páginas**

#####2) Como funciona

**Átomo:** Cientificamente é um elemento isolado e não precisa de um contexto para existir trazendo para ao lado de desenvolvimento de páginas podemos pensar nos átomos como labels, botões, formularios etc. Que são elementos básicos para construção de algo maior.
<br><br>
**Moléculas:** É o agrupamento de um ou mais átomos, que através da junção do átomo isolado faz algo a começar a ser útil. exemplo um atributo "input type text" mais "input type button" pode virar uma pesquisa.
<br><br>
**Organismos:** Pode ter várias moléculas funcionando paralelamente. 
<br><br>
**Templates:** Conjuntos de organismos que formam nossa página html.
<br><br>
**Páginas:** é a evolução do template, já com cores, conteúdo, visualizando o sistema como um todo. 
ou o produto final. 

#####3) Para que usar
Para melhor organizar seu sistema. Reuso de componentes.
#####4) Onde usar?
Em qualquer sistema web que queira aplicar o conceito de atomic design. 
#####5) Exemplos:
Átomo
```
<input type="text" placeholder="átomo"/>
```
##Molécula:##
```
<form action="#" method="post">
  <fieldset>
    <legend>Pesquisar</legend>
    <label>Buscar</label>
    <input type="search" placeholder="buscar" />
    <button>
      <span>...</span>
    </button>
  </fieldset>
</form>
```
Formulario simples de pesquisa. Exemplo implementado no http://codepen.io/pen/ disponivel [aqui](http://codepen.io/anon/pen/WQMeXZ)
#####6) Referências
[http://bradfrost.com/blog/post/atomic-web-design/](http://bradfrost.com/blog/post/atomic-web-design/)</br>
[http://tableless.com.br/o-que-e-design-atomic/](http://tableless.com.br/o-que-e-design-atomic/)
