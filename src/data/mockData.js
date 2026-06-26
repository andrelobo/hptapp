export const courses = [
  {
    id: 'libras-atendimento',
    title: 'Libras para Atendimento',
    subtitle: 'Atendimento com acolhimento, clareza e respeito.',
    progress: 75,
    duration: '20 horas',
    lessons: 12,
    level: 'Essencial',
    category: 'Atendimento',
    featured: true,
    nextLessonId: 'aula-saudacoes',
    description:
      'Curso focado em saudações, escuta visual, condução de atendimento e expressões úteis para rotinas presenciais.',
    topics: [
      'Boas-vindas e apresentação',
      'Perguntas frequentes em loja',
      'Encaminhamento para pagamento',
      'Postura inclusiva no balcão'
    ]
  },
  {
    id: 'libras-comercio',
    title: 'Libras no Comércio',
    subtitle: 'Comunicação sem barreiras para equipes comerciais.',
    progress: 40,
    duration: '24 horas',
    lessons: 16,
    level: 'Profissional',
    category: 'Comércio',
    nextLessonId: 'aula-vendas',
    description:
      'Trilha voltada para vendas, recepção, orientação de clientes e criação de experiências acessíveis.',
    topics: [
      'Vocabulário de produtos e serviços',
      'Negociação com acessibilidade',
      'Fluxos de caixa e retirada',
      'Relacionamento e fidelização'
    ]
  },
  {
    id: 'libras-rh',
    title: 'Libras para RH',
    subtitle: 'Inclusão em recrutamento, integração e rotina corporativa.',
    progress: 20,
    duration: '18 horas',
    lessons: 10,
    level: 'Corporativo',
    category: 'RH',
    nextLessonId: 'aula-rh',
    description:
      'Curso para equipes de recursos humanos que desejam estruturar processos mais acessíveis desde a atração até o onboarding.',
    topics: [
      'Entrevista inclusiva',
      'Integração de novos colaboradores',
      'Comunicação interna acessível',
      'Boas práticas de cultura inclusiva'
    ]
  },
  {
    id: 'libras-basico',
    title: 'Libras Básico',
    subtitle: 'Fundamentos para iniciar sua jornada em Libras.',
    progress: 30,
    duration: '12 horas',
    lessons: 8,
    level: 'Iniciante',
    category: 'Base',
    nextLessonId: 'aula-basico',
    description:
      'Introdução aos conceitos, expressões e sinais essenciais para começar a se comunicar com mais segurança.',
    topics: [
      'Alfabeto manual',
      'Expressões do dia a dia',
      'Apresentação pessoal',
      'Situações comuns de convivência'
    ]
  }
]

export const lessons = {
  'aula-saudacoes': {
    id: 'aula-saudacoes',
    courseId: 'libras-atendimento',
    title: 'Aula 04',
    headline: 'Saudações e Apresentações',
    duration: '20 min',
    videoLength: '12:45',
    watched: '04:20',
    description:
      'Nesta aula você vai aprender as principais saudações em Libras e como utilizá-las em diferentes contextos de atendimento.',
    materials: [
      'Guia prático de sinais para recepção',
      'Checklist de acolhimento visual',
      'Exercícios de repetição e contexto'
    ],
    nextLesson: 'Aula 05 - Perguntas e Respostas'
  },
  'aula-vendas': {
    id: 'aula-vendas',
    courseId: 'libras-comercio',
    title: 'Aula 06',
    headline: 'Vocabulário de Vendas',
    duration: '18 min',
    videoLength: '11:30',
    watched: '02:10',
    description:
      'Foco em sinais usados em apresentação de produtos, preços, condições e apoio ao cliente durante a compra.',
    materials: [
      'Mapa visual de categorias de produto',
      'Lista de sinais para formas de pagamento',
      'Exercícios de simulação de venda'
    ],
    nextLesson: 'Aula 07 - Fechamento e pós-venda'
  },
  'aula-rh': {
    id: 'aula-rh',
    courseId: 'libras-rh',
    title: 'Aula 03',
    headline: 'Processos Seletivos Inclusivos',
    duration: '22 min',
    videoLength: '14:00',
    watched: '01:40',
    description:
      'Como estruturar entrevistas, acolhimento e comunicação acessível na entrada de novos talentos.',
    materials: [
      'Modelo de entrevista inclusiva',
      'Checklist de onboarding acessível'
    ],
    nextLesson: 'Aula 04 - Cultura e permanência'
  },
  'aula-basico': {
    id: 'aula-basico',
    courseId: 'libras-basico',
    title: 'Aula 02',
    headline: 'Expressões do Dia a Dia',
    duration: '16 min',
    videoLength: '09:55',
    watched: '05:00',
    description:
      'Aula introdutória com sinais essenciais para cumprimentos, apresentações e interações rotineiras.',
    materials: ['Cartão de revisão rápida', 'Exercícios de memorização'],
    nextLesson: 'Aula 03 - Contextos do cotidiano'
  }
}

export const alerts = [
  {
    id: 'novo-curso',
    title: 'Nova aula disponível!',
    description: 'Expressões do dia a dia em Libras já está no ar.'
  },
  {
    id: 'evento',
    title: 'Encontro ao vivo',
    description: 'Comunidade ativa com convidados na próxima sexta-feira.'
  }
]

export const certificates = [
  {
    id: 'cert-atendimento',
    title: 'Certificado de Conclusão',
    student: 'André da Silva',
    course: 'Libras para Atendimento',
    date: '20 de maio de 2024',
    hours: '20 horas',
    verified: true
  },
  {
    id: 'cert-comercio',
    title: 'Certificado Pendente',
    student: 'André da Silva',
    course: 'Libras no Comércio',
    date: 'Em andamento',
    hours: '24 horas',
    verified: false
  }
]

export const talentProfile = {
  name: 'André da Silva',
  city: 'Manaus - AM',
  available: true,
  bio: 'Profissional dedicado, com interesse em comunicação inclusiva e acessibilidade.',
  skills: [
    'Libras Básico',
    'Atendimento',
    'Comunicação',
    'Trabalho em equipe',
    'Inclusão'
  ],
  resume: 'Meu_curriculo.pdf',
  updatedAt: 'Atualizado em 18/05/2024'
}

export const partnerBrands = ['VANCI', 'FAMETRO', 'SEBRAE']

export const communityFeed = [
  {
    id: 'aviso-1',
    type: 'Aviso',
    title: 'Turma nova de Libras para RH',
    description: 'Inscrições abertas para a próxima turma com foco em recrutamento inclusivo.'
  },
  {
    id: 'vaga-1',
    type: 'Oportunidade',
    title: 'Empresa parceira busca atendente bilíngue em Libras',
    description: 'Vaga com treinamento complementar e acompanhamento da comunidade.'
  },
  {
    id: 'evento-1',
    type: 'Evento',
    title: 'Encontro online: acessibilidade no comércio',
    description: 'Painel com parceiros, alunos e lideranças do setor.'
  }
]

export const dashboardStats = [
  {
    id: 'courses',
    label: 'Cursos em andamento',
    value: '2'
  },
  {
    id: 'certificates',
    label: 'Certificados',
    value: '1'
  },
  {
    id: 'hours',
    label: 'Horas estudadas',
    value: '08h 30m'
  }
]

export const authProfiles = [
  {
    id: 'aluno',
    title: 'Aluno',
    description: 'Acessa cursos, progresso, certificados e comunidade.'
  },
  {
    id: 'empresa',
    title: 'Empresa',
    description: 'Acompanha talentos, capacitação e oportunidades de parceria.'
  },
  {
    id: 'admin',
    title: 'Admin futuramente',
    description: 'Canal reservado para gestão futura da operação.'
  }
]
