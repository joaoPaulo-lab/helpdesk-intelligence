import Database from 'better-sqlite3'

const db = new Database('./data/helpdesk-intelligence.db',{verbose: console.log});

db.pragma('journal_mode = WAL');


db.exec(`
CREATE TABLE tickets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    ticket_number TEXT NOT NULL UNIQUE,

    title TEXT NOT NULL,
    description TEXT,

    status TEXT NOT NULL,
    priority TEXT NOT NULL,

    category TEXT,
    subcategory TEXT,

    client TEXT,
    requester TEXT,

    assigned_to TEXT,

    created_at TEXT NOT NULL,
    updated_at TEXT,
    resolved_at TEXT,

    resolution TEXT
);
`);

db.exec(`
  INSERT INTO tickets (
    ticket_number,
    title,
    description,
    status,
    priority,
    category,
    subcategory,
    client,
    requester,
    assigned_to,
    created_at,
    updated_at,
    resolved_at,
    resolution
) VALUES
(
    'INC-2026-0001',
    'Aplicação não inicia',
    'Ao abrir a aplicação é apresentada uma mensagem de Access Violation.',
    'resolved',
    'high',
    'Software',
    'Application Error',
    'Hotel Sol Mar',
    'João Silva',
    'Carlos',
    '2026-09-01 08:32:00',
    '2026-09-01 10:15:00',
    '2026-09-01 10:15:00',
    'Aplicação executada com permissões adequadas e configuração corrigida.'
),
(
    'INC-2026-0002',
    'Impressão de relatório falha',
    'O relatório é gerado mas ocorre um erro durante a impressão.',
    'in_progress',
    'high',
    'Reports',
    'Printing',
    'Hotel Atlântico',
    'Maria Costa',
    'Miguel',
    '2026-09-02 11:20:00',
    '2026-09-02 12:05:00',
    NULL,
    NULL
),
(
    'INC-2026-0003',
    'Utilizador não consegue iniciar sessão',
    'O utilizador recebe uma mensagem de credenciais inválidas.',
    'closed',
    'medium',
    'Authentication',
    'Login',
    'Hotel Central',
    'Pedro Santos',
    'Carlos',
    '2026-09-02 14:10:00',
    '2026-09-02 14:45:00',
    '2026-09-02 14:45:00',
    'Password redefinida e acesso confirmado com o utilizador.'
),
(
    'INC-2026-0004',
    'Base de dados lenta',
    'Utilizadores reportam lentidão generalizada ao consultar reservas.',
    'open',
    'critical',
    'Database',
    'Performance',
    'Hotel Vista Mar',
    'Ana Ferreira',
    NULL,
    '2026-09-03 09:05:00',
    '2026-09-03 09:05:00',
    NULL,
    NULL
),
(
    'INC-2026-0005',
    'Serviço do Windows parado',
    'O serviço responsável pela comunicação com a aplicação encontra-se parado.',
    'resolved',
    'high',
    'Infrastructure',
    'Windows Service',
    'Hotel Sol Mar',
    'Rui Martins',
    'Miguel',
    '2026-09-03 16:30:00',
    '2026-09-03 16:52:00',
    '2026-09-03 16:52:00',
    'Serviço reiniciado e funcionamento validado.'
),
(
    'INC-2026-0006',
    'Exportação de tickets limitada',
    'A exportação devolve apenas 200 registos apesar de existirem mais resultados.',
    'open',
    'medium',
    'Software',
    'Export',
    'Hotel Atlântico',
    'Maria Costa',
    NULL,
    '2026-09-04 10:12:00',
    '2026-09-04 10:12:00',
    NULL,
    NULL
),
(
    'INC-2026-0007',
    'Erro de ligação à base de dados',
    'A aplicação apresenta ORA-01034 ao tentar estabelecer ligação.',
    'resolved',
    'critical',
    'Database',
    'Connection',
    'Hotel Central',
    'Pedro Santos',
    'Carlos',
    '2026-09-04 22:40:00',
    '2026-09-05 00:10:00',
    '2026-09-05 00:10:00',
    'Serviço Oracle reiniciado e ligação validada.'
),
(
    'INC-2026-0008',
    'Pedido de criação de utilizador',
    'Solicitação de criação de uma nova conta para um colaborador.',
    'closed',
    'low',
    'Access',
    'User Account',
    'Hotel Vista Mar',
    'Ana Ferreira',
    'Miguel',
    '2026-09-05 08:00:00',
    '2026-09-05 08:20:00',
    '2026-09-05 08:20:00',
    'Conta criada e credenciais entregues ao responsável.'
),
(
    'INC-2026-0009',
    'Relatório apresenta valores incorretos',
    'O relatório de faturação apresenta valores diferentes dos esperados.',
    'in_progress',
    'high',
    'Reports',
    'Data',
    'Hotel Sol Mar',
    'João Silva',
    'Carlos',
    '2026-09-06 13:25:00',
    '2026-09-06 15:40:00',
    NULL,
    NULL
),
(
    'INC-2026-0010',
    'Aplicação demasiado lenta',
    'A aplicação demora vários segundos a carregar determinadas páginas.',
    'open',
    'high',
    'Performance',
    'Application',
    'Hotel Atlântico',
    'Maria Costa',
    NULL,
    '2026-09-07 17:10:00',
    '2026-09-07 17:10:00',
    NULL,
    NULL
);
`)

