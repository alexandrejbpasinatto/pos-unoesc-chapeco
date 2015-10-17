@@ -1,53 +0,0 @@
#### Unoesc Chapecó
#### Pós-graduação em Desenvolvimento Web, Cloud e dispositivos móveis - WebMob
#### Disciplina: HTML5+CSS3
#### Professor: Jean Carlo Nascimento
#### Acadêmico: Alexandre Jair Baron Pasinatto
### Artigo de revisão de CSS3
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
```