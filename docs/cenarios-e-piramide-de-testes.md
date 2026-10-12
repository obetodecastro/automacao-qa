# Cenários de Teste e Pirâmide de Testes — LojaQA

## 1. Objetivo

Este documento apresenta cenários de teste para o sistema LojaQA, com foco nas funcionalidades de login, cadastro e recuperação de senha. Cada cenário contém uma decisão sobre sua automatização e uma justificativa. Ao final, são apresentados os níveis da pirâmide de testes, seus objetivos e exemplos práticos.

**Observação:** os cenários são propostas de teste baseadas nas funcionalidades apresentadas na página do sistema. Os comportamentos esperados devem ser confirmados durante a execução dos testes.

## 2. Cenários de teste: automatizar ou não?

### Cenário 1 — Login com credenciais válidas

**Decisão:** Automatizar.

**Justificativa:** Verificar se um usuário de teste com credenciais válidas consegue entrar no sistema e acessar a área correspondente ao seu perfil.

### Cenário 2 — Login com senha incorreta

**Decisão:** Automatizar.

**Justificativa:** Confirmar que uma senha incorreta não permite o acesso e que o sistema apresenta o tratamento esperado para credenciais inválidas.

### Cenário 3 — Login com usuário bloqueado

**Decisão:** Automatizar.

**Justificativa:** Verificar se o sistema impede o acesso de uma conta identificada como bloqueada na massa de dados de teste, conforme a regra de segurança prevista.

### Cenário 4 — Login com campos vazios

**Decisão:** Automatizar.

**Justificativa:** Verificar o comportamento do formulário quando o usuário tenta entrar sem preencher o e-mail e a senha, incluindo as validações ou mensagens apresentadas.

### Cenário 5 — Validação do tamanho mínimo da senha

**Decisão:** Automatizar.

**Justificativa:** A tela informa um mínimo de oito caracteres para a senha. O teste verifica como o sistema trata uma senha abaixo desse limite, conforme a regra implementada.

### Cenário 6 — Cadastro com dados válidos

**Decisão:** Automatizar.

**Justificativa:** Verificar se o formulário aceita dados válidos e conclui o cadastro de acordo com as regras do sistema e com o tipo de conta selecionado.

### Cenário 7 — Cadastro com e-mail já existente

**Decisão:** Automatizar.

**Justificativa:** Verificar se o sistema impede o cadastro duplicado e apresenta uma resposta adequada quando o e-mail informado já está registrado.

### Cenário 8 — Recuperação de senha

**Decisão:** Automatizar.

**Justificativa:** Verificar o comportamento do formulário após informar um e-mail e solicitar a recuperação de senha, respeitando as regras de segurança e a resposta prevista pelo sistema.

### Cenário 9 — Facilidade de uso do formulário

**Decisão:** Não automatizar integralmente.

**Justificativa:** A clareza das instruções e a facilidade de preenchimento dependem de julgamento humano. Testes automatizados podem complementar a avaliação verificando elementos e mensagens objetivas da interface.

## 3. Pirâmide de testes

A pirâmide de testes representa uma estratégia para distribuir os testes em diferentes níveis. Em geral, recomenda-se ter uma base ampla de testes unitários, uma quantidade intermediária de testes de integração e um conjunto mais seletivo de testes de ponta a ponta (E2E). A proporção exata varia conforme o projeto.

### Nível 1 — Testes unitários

**Objetivo:** Verificar uma pequena unidade de código isoladamente, como uma função ou método.

**Exemplo no LojaQA:** Testar uma função que verifica se um endereço de e-mail possui um formato válido.

**Características:** Geralmente são rápidos e ajudam a identificar defeitos em partes específicas do código. O exemplo pressupõe que essa função exista ou seja criada para o teste.

### Nível 2 — Testes de integração

**Objetivo:** Verificar se dois ou mais componentes funcionam corretamente em conjunto.

**Exemplo no LojaQA:** Verificar a comunicação entre o formulário de login e o serviço responsável pela autenticação, conferindo o tratamento da resposta.

**Características:** Avaliam a interação entre componentes, como formulário, API e serviço de autenticação. A execução depende da arquitetura e dos recursos disponíveis no projeto.

### Nível 3 — Testes de ponta a ponta (E2E)

**Objetivo:** Validar um fluxo completo pela perspectiva do usuário, passando pelos componentes relevantes do sistema.

**Exemplo no LojaQA:** Abrir a página de login, preencher o e-mail e a senha de uma conta de teste, clicar em “Entrar” e verificar o resultado do acesso.

**Características:** Validam fluxos completos, mas costumam ser mais lentos e exigir mais manutenção do que testes unitários.

## 4. Conclusão

A decisão de automatizar um cenário deve considerar fatores como frequência de execução, repetibilidade, risco, estabilidade e custo de manutenção. A automação complementa os testes manuais, mas não elimina a necessidade de avaliação humana.

A pirâmide de testes ajuda a organizar uma estratégia equilibrada, combinando testes unitários, de integração e de ponta a ponta para aumentar a confiança na qualidade do software.

## 5. Referência do sistema

Sistema utilizado como referência para a elaboração dos cenários:

[LojaQA — Página de login](https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login/login.html)
