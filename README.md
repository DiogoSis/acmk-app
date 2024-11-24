
# ACMK - Aplicativo de Conhecimento para Alunos de Karatê

Este é um aplicativo desenvolvido para a **Associação Cardoso e Morgado de Karatê (ACMK)**. O principal objetivo deste projeto é fornecer uma plataforma de apoio ao aprendizado dos alunos de karatê, oferecendo informações detalhadas sobre os diferentes **katas**, **faixas**, **golpes** e **bases**. O aplicativo tem como foco facilitar o acesso ao conteúdo educacional e promover a evolução dos alunos em sua jornada no karatê.

Este projeto foi desenvolvido como parte do curso de **Sistemas de Informação** da faculdade, com o objetivo de aplicar os conhecimentos adquiridos durante o semestre em um contexto prático e real. Ele foi desenvolvido usando **React Native** com **Expo**, integrando conceitos de desenvolvimento mobile e estrutura de dados.

## Funcionalidades

- **Seleção de Faixa**: O aluno pode selecionar a sua faixa atual e obter informações sobre os katas, movimentos e outros aspectos relacionados àquela graduação.
- **Katas**: O aplicativo apresenta uma lista de katas com detalhes sobre sua tradução, significado, e movimentos.
- **Defesas e Golpes**: Para cada faixa, o aluno pode acessar informações sobre as defesas e golpes que fazem parte do seu treinamento.
- **Bases**: O sistema também oferece detalhes sobre as posturas de base, que são essenciais no treinamento de karatê.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **Expo**: Ferramenta que simplifica o processo de desenvolvimento com React Native.
- **JavaScript (JSX)**: Linguagem utilizada para a construção dos componentes do aplicativo.
- **JSON**: Formato de dados utilizado para armazenar informações sobre os katas, faixas e outros dados do sistema.

## Como Executar o Projeto

### Pré-requisitos

- **Node.js** (recomendado versão LTS)
- **Expo CLI** (instalado globalmente no seu sistema)

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/username/acmk-app.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd acmk-app
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o aplicativo com Expo:
   ```bash
   expo start
   ```

5. Abra o aplicativo no seu dispositivo móvel com o Expo Go ou use o emulador para visualizar.

## Estrutura de Dados

### Katas

Os katas são armazenados em um arquivo JSON com os seguintes campos:

```json
[
  {
    "id": 1,
    "name": "Heian Shodan",
    "translation": "Primeiro Passo da Paz",
    "meaning": "Introdução aos katas de Shotokan, enfatizando equilíbrio e controle.",
    "graduation": 1,
    "movement": 21
  },
  ...
]
```

### Graduações

As graduações são representadas por faixas com informações detalhadas, como descrição, cores e os katas associados:

```json
[
  {
    "id": 1,
    "name": "Branca",
    "description": "A faixa branca simboliza o início da jornada no karatê. O aluno ainda não possui conhecimento das técnicas, mas está pronto para aprender e absorver os ensinamentos do dojo.",
    "kata": [1],
    "color": "#FFFFFF"
  },
  ...
]
```

## Contribuindo

Este projeto está aberto para contribuições! Se você deseja contribuir, siga os seguintes passos:

1. Faça o fork deste repositório.
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`).
3. Faça suas alterações e commit (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para a branch principal (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

---

## Sobre o Projeto

Este é um projeto de desenvolvimento de software para a **Associação Cardoso e Morgado de Karatê (ACMK)**, que visa fornecer um suporte tecnológico aos alunos, facilitando o acesso a conteúdos educacionais de forma prática e interativa. A ideia surgiu no contexto da faculdade de **Sistemas de Informação**, como uma forma de aplicar os conhecimentos adquiridos em um cenário real, ao mesmo tempo em que contribui para o aprendizado de artes marciais e a valorização da educação física.

---

