## Artigo de revisão de CSS3
##### Unoesc Chapecó
##### Pós-graduação em Desenvolvimento Web, Cloud e dispositivos móveis - WebMob
##### Disciplina: HTML5+CSS3
##### Professor: Jean Carlo Nascimento
##### Acadêmico: Alexandre Jair Baron Pasinatto
----
<br>
##### 1 - Funcionalidade: box-shadow
##### O que é?
Utilizado para adicionar sombras em elementos, pode ser desde em uma div ou qualquer outro elemento de sua página html, com ele podemos adicionar sombra externa, ou sombra interna ao elemento.
##### Onde usar:
Em qualquer elemento de sua página html
##### Como usar:
a sintaxe recebe o deslocamento da sombra e sua cor,  também pode ser definido um terceiro valor para o espelhamento
```css
seletor {box-shadow:
 10px 10px 10px blue;
}
```
##### Exemplo de uso
Sintaxe para aplicar sombra interna ao elemento.

```css
seletor {
  box-shadow: inset 0 0 40px blue;
}
```
### Referencia:
[http://www.caelum.com.br/apostila-html-css-javascript/css-avancado/#6-8-css3-box-shadow](http://www.caelum.com.br/apostila-html-css-javascript/css-avancado/#6-8-css3-box-shadow)

--
##### 2 - Funcionalidade: text-shadow
##### O que é?
É parecido com o box shadow mas ao invés de sombras em elementos é usado para adicionar sombras em textos.
##### Onde usar:
Texto ou título que queira adicionar o efeito de sombra.
##### Como usar:
Sua sintaxe recebe o deslocamento da sombra e sua cor e também o grau de espelhamento.
```css
seletor {text-shadow:
 10px 10px 10px black;
}
```
##### Exemplo de uso
Exemplo passando mais de uma sombra no mesmo texto:

```css
p {
  text-shadow: 5px 5px 5px black, -5px -5px -5px black;
}
```
### Referencia:
[http://www.caelum.com.br/apostila-html-css-javascript/css-avancado/#6-7-css3-text-shadow](http://www.caelum.com.br/apostila-html-css-javascript/css-avancado/#6-7-css3-text-shadow)

--
##### 3 - Funcionalidade: Css Transitions
##### O que é?
O css transition do css3 é a propriedade para mudar a estilização de um elemento html de uma forma leve
e também controlar o tempo da transição. Exemplo a propriedade :hover do css2 ao passar o mouse por um link é alterado
instantaneamente o valor do campo. Com o transitions não precisa ser instantanea, a mudança pode ter um intervalo de tempo. Dentre este tempo, à varias propriedades, como começar a transição mais lenta e aumentar no final.
##### Onde usar:
Em imagens, textos, links, ou outro elemento que queira utilizar à transição.
##### Como usar:

```css
seletor {transition: color 2s ease 3s }
```
##### Exemplo de uso

```HTML
<input type="text" class="exemplo_uso" />
```
```css
input.exemplo_uso {
    background:#eee;
    border:2px solid blue;
    transition: background 2s linear, border 3s;
  }
input.exemplo_uso:focus {
  background:#ff0;
  border-color:red;
  }
```
### Referencia:
[http://www.maujor.com/tutorial/css3-modulo-transition.php](http://www.maujor.com/tutorial/css3-modulo-transition.php)

--
##### 4 - Funcionalidade: Seletores Css3 - Seletor Negação
##### O que é?
Seletor é algo bem comum pra quem lida com css, os mais comuns são os seletores por id e classe. Porém com o surgimento do css3 surgem novas especificações para seletores, e aqui pretendo demonstrar o uso do seletor de negação que achei bem interessante e como o nome já diz ele nos permite escrever um seletor que não bate na regra atual. 
##### Onde usar:
Em todo css que queira uma regra diferente de negação para uma determinada parte de seu html.
##### Como usar:

```css
seletor:not(.seletor){ color: blue; }
```
##### Exemplo de uso
No exemplo abaixo pegamos todos os seletores que não tem a classe "exemplo".

```css
p:not(.exemplo) {
  color: blue;
}
```
### Referencia:
[http://www.caelum.com.br/apostila-html-css-javascript/css-avancado/#6-1-seletores-avancados](http://www.caelum.com.br/apostila-html-css-javascript/css-avancado/#6-1-seletores-avancados)

--
##### 5 - Funcionalidade: border-radius
##### O que é?
Utilizado para adicionar bordas arredondadas. O que antes só era permitido com o uso de imagens, dificultando o carregamento e renderização das páginas, com o css3 surge a propriedade border-radius que recebe o tamanho do raio de arredondamento das bordas. E cada angulo pode ter um valor diferente.
##### Onde usar:
Todo elemento que possui o atributo border.
##### Como usar:

```css
seletor{
 border-radius: rxpx rypx;
}
```
##### Exemplo de uso

```css
seletor{
  /*borda superior esquerda com 3px
  borda superior direita com 20px
  borda inferior direita com 50px 
  bordar inferior esquerda com 100px */
  border-radius: 3px 20px 50px 100px;
}
```
### Referencia:
[http://www.caelum.com.br/apostila-html-css-javascript/css-avancado/#6-6-css3-border-radius](http://www.caelum.com.br/apostila-html-css-javascript/css-avancado/#6-6-css3-border-radius)

--
##### 6 - Funcionalidade: Gradientes
##### O que é?
Funcionalidade utilizada para criar degrades entre 2 ou mais cores. Que antes também só era possível com o uso de imagens. 
Existem os gradientes lineares e radiais. 
##### Onde usar:
Todo elemento que possui o atributo background.
##### Como usar:
Sintaxe básica:
```css
.seletor_linear {
  background: linear-gradient(white, blue);
}
.seletor_radial {
  background: radial-gradient(white, blue);
}
```
##### Exemplo de uso

```css
seletor {
  background-image: linear-gradient(to bottom, white, purple);
}
```
### Referencia:
[http://tableless.com.br/como-usar-gradient-no-css-de-forma-consciente/](http://tableless.com.br/como-usar-gradient-no-css-de-forma-consciente/)

[http://www.caelum.com.br/apostila-html-css-javascript/css-avancado/#6-11-css3-gradientes](http://www.caelum.com.br/apostila-html-css-javascript/css-avancado/#6-11-css3-gradientes)

--
##### 7 - Funcionalidade: Transform
##### O que é?
Esta propredade é utilizada para alterar a posição de um elemento, girar, mover inclinar, ou monstra-lo em uma escala menor pra maior ou vice e versa, ou seja, irá modificar a forma do elemento.
##### Onde usar:
Todo elemento ou imagem que seja necessário aplicar uma transformação.
##### Como usar:
Sintaxe geral:
```css
transform: none|transform-functions|initial|inherit;
```
##### Exemplo de uso
Exemplo que rotaciona elemento ou imagem em 180 graus.
```css
seletor {
  transform: rotate(180deg);
}
```
### Referencia:
[http://www.w3schools.com/cssref/css3_pr_transform.asp](http://www.w3schools.com/cssref/css3_pr_transform.asp)

[http://www.caelum.com.br/apostila-html-css-javascript/css-avancado/#6-15-css3-transforms](http://www.caelum.com.br/apostila-html-css-javascript/css-avancado/#6-15-css3-transforms)

--
##### 8 - Funcionalidade: Animation
##### O que é?
Funcionalidade do css3 que permite gerar animações nos elementos html, sem utilizar javascript ou flash.
Para lidar com esta função precisamos utilizar KeyFrames que descreve como cada elemento vai ser animado. E cada keyframe contém as propriedades Css.
##### Onde usar:
Qualquer elemento html que deseja aplicar uma animação.
##### Como usar:
Devemos definir qual o valor do keyframe que vai de 0 a 100, ou seja, um valor inicial e um final.
Sitaxe para criar um keyframe
```css
@keyframes exemplo {
   0%   { background: black;}
   25%  { background: green;}
   50%  { background: blue;}
   75%  { background: red;}
   100% { background: blue;}
}
```

##### Exemplo de uso
```HTML
<div class="exemplo_animation"></div>
```
```css
.exemplo_animation { animation: teste_animacao 5s ease infinite alternate; }
```
```
@keyframes teste_animacao {
  0%   { 
    background: red;
    width: 150px;
  }
  25%  { background: green; }
  50%  { background: blue; }
  75%  { background: red; }
  100% { 
    background: blue;
    width: 250px;
  }
}
```
###### Veja este exemplo [aqui](http://codepen.io/anon/pen/bVaLMY#0)
### Referencia:
[http://tableless.com.br/css3-animation-keyframe/](http://tableless.com.br/css3-animation-keyframe/)

--
##### 9 - Funcionalidade: Multiple Columns
##### O que é?
Nova forma de organizar seu texto através de colunas, com esta funcionalidade podemos definir um número de coluna, ou o tamanho da coluna, forma facil e rapida de organizar um texto em colunas.
##### Onde usar:
Em textos que são divididos em colunas.
##### Como usar:
Sintaxe básica para aplicar três colunas em um texto
```css
seletor{
 column-count: 3;
 }
```

##### Exemplo de uso

```HTML
<div class="example_multiple_coluns">Texto aqui...</div>
```
```css
.exemplo_multiple_coluns {
  -webkit-column-count: 3; /* Chrome, Safari, Opera */
  -moz-column-count: 3; /* Firefox */
   column-count: 3;
}
```

###### Veja este exemplo [aqui](http://codepen.io/anon/pen/avEGwq)
### Referencia:
[http://www.w3schools.com/css/css3_multiple_columns.asp](http://www.w3schools.com/css/css3_multiple_columns.asp)

--
##### 10 - Funcionalidade: Media Queries
##### O que é?
Utilizado para definir diferentes formatações para diversos tipos de dispositivos. Exemplo caso o css elaborado
se encaixa nas especificações do dispositivo será executado, caso contrario, não será executado. O Css3 utiliza a capacidade 
do dispositivo para definir as media queries.
##### Onde usar:
Em websites que necessitam ser acessado por diferentes dispositivos.
##### Como usar:
Sintaxe básica 
```css
@media not|only mediatype and (expressions) {
  CSS-Code;
}
```
##### Exemplo de uso

```css
body {
    background-color: red;
}
@media screen and (min-width: 480px) {
    body {
        background-color: blue;
    }
}
```

###### Veja este exemplo [aqui](http://codepen.io/anon/pen/gaozBO)
### Referencia:
[http://www.w3schools.com/css/css3_mediaqueries.asp](http://www.w3schools.com/css/css3_mediaqueries.asp)



