# Helpdesk Intelligence — Roadmap e Plano de Desenvolvimento

## Objetivo do projeto

Construir uma aplicação full-stack de portfolio chamada **Helpdesk Intelligence**, com o objetivo de importar, consultar, pesquisar, filtrar e analisar tickets de suporte técnico.

A aplicação deverá permitir:

- Importar tickets através de ficheiros CSV.
- Validar os dados antes de os guardar.
- Guardar os tickets numa base de dados SQLite.
- Listar e pesquisar tickets.
- Filtrar tickets por diferentes critérios.
- Consultar os detalhes de um ticket.
- Apresentar métricas num dashboard.
- Desenvolver uma interface React para explorar os dados.

O projeto será desenvolvido gradualmente, com foco em compreender cada parte e evitar abstrações desnecessárias.

---

## Stack tecnológica

- **Frontend:** React
- **Backend:** Express
- **Runtime:** Node.js
- **Base de dados:** SQLite
- **Formato de importação:** CSV

---

## Objetivo do MVP

O MVP deverá ser pequeno, funcional e possível de desenvolver em aproximadamente **1 a 2 semanas**, dependendo do ritmo de trabalho.

### Funcionalidades incluídas

- API Express funcional.
- Endpoint de health check.
- Base de dados SQLite.
- Tabela de tickets.
- Inserção de tickets de teste.
- Importação de tickets através de CSV.
- Validação de colunas e registos.
- API para listar tickets.
- API para consultar um ticket específico.
- Pesquisa e filtros básicos.
- Métricas simples.
- Dashboard em React.
- Tabela de tickets.
- Estados de loading e erro.

### Funcionalidades fora do MVP

Estas funcionalidades ficam para uma fase posterior:

- Integração direta com PMS.
- Playwright.
- Inteligência artificial.
- Autenticação.
- Notificações.
- Atualizações em tempo real.
- Microserviços.
- Docker/Kubernetes.
- Deploy complexo.
- Integrações externas avançadas.

A ideia é primeiro construir uma aplicação completa e compreensível antes de adicionar funcionalidades mais complexas.

---

# Estado atual

## Backend

- [x] Projeto Node.js criado.
- [x] Express instalado e configurado.
- [x] Servidor Express funcional.
- [x] Endpoint `GET /api/health` criado.
- [x] Endpoint de health check testado.
- [x] Resposta atual do endpoint: `healthy`.

## Próximo passo

Avançar para a configuração da base de dados SQLite.

---

# Roadmap geral

## Fase 1 — SQLite

### Objetivo

Criar a base de dados local, definir a estrutura da tabela de tickets e aprender a executar operações básicas com SQLite através do Node.js.

### Tarefas

- [x] Confirmar a versão do Node.js com `node -v`.
- [x] Confirmar o `package.json` atual.
- [x] Escolher o driver SQLite adequado.
- [x] Instalar o driver SQLite.
- [x] Criar o ficheiro `database.mjs`.
- [x] Abrir ou criar a base de dados `helpdesk.db`.
- [x] Criar a pasta `data/`, se necessário.
- [x] Criar a tabela `tickets`.
- [x] Testar a ligação à base de dados.
- [x] Inserir tickets de teste.
- [x] Consultar os tickets inseridos.
- [x] Criar o primeiro endpoint `GET /api/tickets`.

### Estrutura inicial esperada

```text
backend/
├── server.mjs
├── database.mjs
└── data/
    └── helpdesk.db
```

### Conceitos a compreender

- O que é uma base de dados SQLite.
- O que é um driver de base de dados.
- Como o Node.js comunica com o SQLite.
- O que é uma ligação à base de dados.
- O que é uma tabela.
- O que são colunas e tipos de dados.
- O que é uma chave primária.
- Diferença entre `CREATE TABLE`, `INSERT` e `SELECT`.
- Diferença entre executar uma query e obter resultados.
- Como lidar com erros de ligação.

### Critérios de conclusão

A fase está concluída quando:

- O ficheiro `helpdesk.db` é criado automaticamente.
- A tabela `tickets` existe.
- É possível inserir pelo menos alguns tickets de teste.
- É possível consultar os tickets através de Node.js.
- O endpoint `GET /api/tickets` devolve os tickets em JSON.

---

## Fase 2 — Importação de CSV -- atual

### Objetivo

Permitir que o sistema receba tickets através de um ficheiro CSV e os guarde na base de dados.

### Tarefas

- [x] Definir o formato do CSV.
- [x] Definir as colunas obrigatórias.
- [x] Criar um CSV de exemplo.
- [x] Instalar ou reutilizar uma biblioteca para ler CSV.
- [x] Criar o ficheiro `csvImporter.mjs`.
- [x] Ler o ficheiro CSV.
- [x] Converter cada linha num objeto JavaScript.
- [x] Validar as colunas existentes.
- [x] Validar campos obrigatórios.
- [x] Validar valores inválidos.
- [x] Detetar linhas vazias ou incompletas.
- [x] Definir como lidar com tickets duplicados.
- [x] Inserir os tickets válidos na base de dados.
- [x] Criar o endpoint `POST /api/import`.
- [x] Devolver um resumo da importação.
- [x] Informar quantos registos foram importados.
- [x] Informar quantos registos falharam.
- [x] Apresentar os erros de validação.

### Conceitos a compreender

- Streams de Node.js.
- Leitura de ficheiros.
- Parsing de CSV.
- Validação de dados.
- Normalização de valores.
- Diferença entre dados válidos e inválidos.
- Tratamento de erros.
- Inserções em massa.
- Transações de base de dados.

### Critérios de conclusão

A fase está concluída quando:

- Um CSV válido pode ser importado.
- Os tickets aparecem na base de dados.
- Um CSV inválido gera erros compreensíveis.
- O sistema não guarda silenciosamente registos inválidos.
- O endpoint devolve um resumo da operação.

---

## Fase 3 — API de tickets

### Objetivo

Criar uma API organizada para consultar, pesquisar e filtrar tickets.

### Endpoints planeados

#### Listar tickets

```http
GET /api/tickets
```

Possíveis funcionalidades:

- Listar todos os tickets.
- Ordenar por data.
- Limitar o número de resultados.
- Paginar resultados.

#### Consultar um ticket

```http
GET /api/tickets/:id
```

Deverá devolver os detalhes de um ticket específico.

#### Pesquisar tickets

Possíveis parâmetros:

```text
/api/tickets?search=erro
```

#### Filtrar tickets

Possíveis filtros:

- Estado.
- Prioridade.
- Categoria.
- Técnico responsável.
- Data de criação.
- Data de resolução.
- Cliente.
- Sistema afetado.

### Tarefas

- [X] Criar `routes/tickets.mjs`.
- [X] Separar as rotas da configuração principal do servidor.
- [x] Criar uma rota para listar tickets.
- [x] Criar uma rota para consultar um ticket por ID.
- [x] Adicionar pesquisa por texto.
- [x] Adicionar filtros básicos.
- [x] Adicionar ordenação.
- [x] Adicionar paginação.
- [x] Tratar IDs inexistentes.
- [x] Devolver respostas de erro consistentes.
- [x] Testar os endpoints com Postman ou ferramenta semelhante.

### Conceitos a compreender

- Routing no Express.
- Parâmetros de URL.
- Query parameters.
- Status HTTP.
- Respostas JSON.
- Separação entre rotas e lógica de negócio.
- SQL com filtros.
- Paginação.
- Segurança básica ao construir queries.

### Critérios de conclusão

A fase está concluída quando:

- É possível listar tickets.
- É possível consultar um ticket individual.
- É possível pesquisar por texto.
- É possível aplicar filtros.
- IDs inexistentes geram respostas adequadas.
- Os endpoints funcionam através do Postman.

---

## Fase 4 — Métricas e dashboard backend

### Objetivo

Criar métricas úteis sobre os tickets para alimentar o dashboard frontend.

### Métricas possíveis

- Número total de tickets.
- Número de tickets abertos.
- Número de tickets em progresso.
- Número de tickets resolvidos.
- Número de tickets fechados.
- Distribuição por prioridade.
- Distribuição por categoria.
- Distribuição por técnico.
- Tickets por dia ou por mês.
- Tempo médio de resolução.
- Tickets sem resolução.
- Categorias com mais ocorrências.

### Tarefas

- [X] Criar `services/metricsService.mjs`.
- [X] Definir quais métricas entram no MVP.
- [X] Criar queries SQL para cada métrica.
- [X] Calcular contagens por estado.
- [X] Calcular contagens por categoria.
- [X] Calcular contagens por prioridade.
- [X] Calcular o tempo médio de resolução, se existirem datas suficientes.
- [X] Criar `routes/dashboard.mjs`.
- [X] Criar o endpoint `GET /api/dashboard`.
- [X] Testar os resultados com dados de exemplo.

### Endpoint planeado

```http
GET /api/dashboard
```

### Conceitos a compreender

- Funções de agregação SQL.
- `COUNT`.
- `GROUP BY`.
- `AVG`.
- Diferença entre cálculo na base de dados e cálculo em JavaScript.
- Estrutura de respostas para dashboards.
- Métricas derivadas.

### Critérios de conclusão

A fase está concluída quando:

- O backend devolve métricas em JSON.
- As métricas correspondem aos dados existentes.
- O endpoint pode ser consumido pelo frontend.
- Os resultados são fáceis de interpretar.

---

## Fase 5 — Frontend React

### Objetivo

Criar uma interface React para consultar tickets e visualizar as métricas.

### Tarefas

- [X] Criar o projeto React com Vite.
- [X] Configurar o frontend.
- [X] Criar `src/services/api.js`.
- [X] Criar uma função para consultar o health check.
- [X] Criar uma função para obter tickets.
- [X] Criar uma função para obter métricas.
- [X] Criar o componente principal da aplicação.
- [X] Criar a página ou secção do dashboard.
- [X]  Criar cartões de métricas.
- [X]  Criar tabela de tickets.

- [ ] Criar estados de loading.
- [ ] Criar estados de erro.
- [ ] Apresentar uma mensagem quando não existirem tickets.

- [X] Ligar o frontend à API Express.
- [X] Resolver problemas de CORS, se necessário.

### Componentes possíveis

```text
frontend/src/
├── services/
│   └── api.js
├── components/
│   ├── Dashboard.jsx
│   ├── MetricCard.jsx
│   ├── TicketTable.jsx
│   └── TicketDetails.jsx
├── App.jsx
└── main.jsx
```

### Conceitos a compreender

- Componentes React.
- JSX.
- Props.
- State.
- `useState`.
- `useEffect`.
- Chamadas HTTP no frontend.
- Renderização condicional.
- Listas e `key`.
- Separação de componentes.
- Estados de loading e erro.
- Comunicação entre frontend e backend.

### Critérios de conclusão

A fase está concluída quando:

- O frontend inicia corretamente.
- O frontend comunica com o backend.
- As métricas aparecem no dashboard.
- Os tickets aparecem numa tabela.
- Loading e erros são tratados.
- A aplicação pode ser utilizada sem abrir o Postman.

---

## Fase 6 — Exploração e melhorias

### Objetivo

Melhorar a experiência de utilização sem aumentar demasiado a complexidade.

### Melhorias possíveis

- [ ] Campo de pesquisa no frontend.
- [ ] Filtros por estado.
- [ ] Filtros por prioridade.
- [ ] Filtros por categoria.
- [ ] Paginação visual.
- [ ] Página de detalhes de um ticket.
- [ ] Gráficos simples.
- [ ] Upload de CSV através da interface.
- [ ] Mensagem de sucesso após importação.
- [ ] Lista de erros de importação.
- [ ] Ordenação por colunas.
- [ ] Melhorar o design visual.
- [ ] Adicionar modo escuro, se fizer sentido.
- [ ] Criar dados de demonstração.
- [ ] Melhorar o README.

### Critérios de conclusão

A fase está concluída quando:

- A aplicação é fácil de explorar.
- O utilizador consegue encontrar tickets rapidamente.
- Os erros são compreensíveis.
- O projeto está apresentável como portfolio.
- O README explica como executar o projeto.

---

# Estrutura final sugerida

```text
helpdesk-intelligence/
├── backend/
│   ├── server.mjs
│   ├── database.mjs
│   ├── routes/
│   │   ├── tickets.mjs
│   │   ├── dashboard.mjs
│   │   └── import.mjs
│   ├── services/
│   │   ├── csvImporter.mjs
│   │   ├── ticketService.mjs
│   │   └── metricsService.mjs
│   └── data/
│       └── helpdesk.db
├── frontend/
├── README.md
└── PROGRESS.md
```

---

# Endpoints planeados

| Método | Endpoint | Objetivo |
|---|---|---|
| GET | `/api/health` | Confirmar que a API está funcional |
| POST | `/api/import` | Importar tickets através de CSV |
| GET | `/api/tickets` | Listar, pesquisar e filtrar tickets |
| GET | `/api/tickets/:id` | Consultar os detalhes de um ticket |
| GET | `/api/dashboard` | Obter métricas para o dashboard |

---

# Ordem recomendada de desenvolvimento

1. Confirmar a versão do Node.js.
2. Confirmar o `package.json`.
3. Escolher e instalar o driver SQLite.
4. Criar a ligação à base de dados.
5. Criar a tabela `tickets`.
6. Inserir dados de teste.
7. Criar `GET /api/tickets`.
8. Definir o formato do CSV.
9. Criar o importador de CSV.
10. Criar `POST /api/import`.
11. Melhorar a API de tickets com filtros e pesquisa.
12. Criar as métricas.
13. Criar `GET /api/dashboard`.
14. Criar o frontend React.
15. Ligar o frontend ao backend.
16. Melhorar a interface.
17. Documentar o projeto.

---

# Princípios de desenvolvimento

## 1. Compreender antes de abstrair

Não adicionar bibliotecas, classes ou padrões apenas porque são comuns em projetos profissionais.

Cada ferramenta deve ser introduzida quando existir uma necessidade real.

## 2. Construir por etapas pequenas

Cada etapa deve produzir algo que possa ser executado e testado.

Exemplo:

1. Criar a ligação à base de dados.
2. Testar a ligação.
3. Criar uma tabela.
4. Testar a tabela.
5. Inserir um registo.
6. Consultar o registo.
7. Criar uma rota Express.

## 3. Testar frequentemente

Depois de cada alteração importante:

- Executar o servidor.
- Testar o endpoint.
- Verificar os dados.
- Ler os erros.
- Confirmar que o comportamento corresponde ao esperado.

## 4. Evitar construir funcionalidades futuras demasiado cedo

Não começar já por IA, autenticação, deploy, microserviços ou integrações complexas.

O objetivo inicial é terminar uma aplicação full-stack funcional.

## 5. Usar dados realistas

Os tickets de teste devem representar problemas reais de helpdesk, por exemplo:

- Erro ao abrir uma aplicação.
- Falha de impressão.
- Problema de ligação à base de dados.
- Utilizador sem permissões.
- Serviço parado.
- Erro de autenticação.
- Lentidão numa aplicação.
- Problema com uma integração.

## 6. Manter o projeto explicável

No final, deverá ser possível explicar:

- Como o frontend comunica com o backend.
- Como o backend recebe pedidos.
- Como os dados são validados.
- Como os tickets são guardados.
- Como as queries SQL funcionam.
- Como as métricas são calculadas.
- Como o React apresenta os dados.

---

# Próxima sessão de trabalho

## Fase 1.1 — Preparar SQLite

Antes de avançar:

- [ ] Enviar o `package.json` atual.
- [ ] Executar `node -v`.
- [ ] Confirmar a versão do Node.js.
- [ ] Escolher o driver SQLite com base nessa versão.

Depois disso:

- [ ] Instalar o driver.
- [ ] Criar `database.mjs`.
- [ ] Criar ou abrir `helpdesk.db`.
- [ ] Testar a ligação.
- [ ] Criar a tabela inicial `tickets`.

## Comandos úteis

Ver a versão do Node.js:

```bash
node -v
```

Ver o conteúdo do `package.json`:

```bash
type package.json
```

Executar o servidor:

```bash
node server.mjs
```

---

# Definição de sucesso do MVP

O MVP será considerado concluído quando for possível:

1. Iniciar o backend.
2. Importar um CSV com tickets.
3. Validar os dados importados.
4. Guardar os tickets em SQLite.
5. Consultar os tickets através da API.
6. Pesquisar e filtrar tickets.
7. Consultar métricas agregadas.
8. Abrir o frontend React.
9. Visualizar os tickets numa tabela.
10. Visualizar as métricas num dashboard.
11. Explicar claramente a arquitetura e o funcionamento do projeto.
