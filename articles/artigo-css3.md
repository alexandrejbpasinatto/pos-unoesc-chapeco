#### Unoesc Chapecó
#### Pós-graduação em Desenvolvimento Web, Cloud e dispositivos móveis - WebMob
#### Disciplina: HTML5+CSS3
#### Professor: Jean Carlo Nascimento
#### Acadêmico: Alexandre Jair Baron Pasinatto
### Artigo de revisão de CSS3
<br>
##### Funcionalidade: box-shadow
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

<br>

##### Funcionalidade: text-shadow
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

<br>

##### Funcionalidade: Css Transitions
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

<br>

##### Funcionalidade: Seletores Css3 - Seletor Negação
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

<br>

##### Funcionalidade: border-radius
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

<br>

