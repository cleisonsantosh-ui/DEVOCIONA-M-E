# Quiz Filho Liberto - Roteiro de Oração Personalizado

Sistema completo de funil de quiz para o Devocional "Filho Liberto".

## Estrutura do Projeto

```
QUIZ_DEVOCIONAL/
├── index.html          # Página principal com todas as telas
├── styles.css          # Estilos CSS responsivos
├── script.js           # Lógica JavaScript do quiz
├── config.js           # Configurações personalizáveis
└── funil-quiz-filho-liberto.md  # Documento do plano original
```

## Fluxo do Funil

1. **Tela 0** - Abertura do Quiz (transparência)
2. **Telas 1-5** - Perguntas do Quiz (5 perguntas)
3. **Tela 6** - Processamento (3 segundos)
4. **Tela 7** - Resultado/Oferta (headlines dinâmicas)
5. **Tela 8** - Checkout (R$ 24,99)
6. **Tela 9** - Confirmação + WhatsApp

## Como Usar

### 1. Personalizar Configurações

Edite o arquivo `config.js` para alterar:

- **Produto**: nome, preço, preço original
- **Links**: grupo WhatsApp
- **Textos**: todas as cópias do quiz
- **Headlines**: variações por bloco da Pergunta 1
- **Design**: cores principais

### 2. Executar Localmente

```bash
# Navegue até a pasta do projeto
cd QUIZ_DEVOCIONAL

# Inicie um servidor local (Python)
python -m http.server 8000

# Ou use Node.js
npx serve .
```

Acesse `http://localhost:8000` no navegador.

### 3. Personalizar Links WhatsApp

No arquivo `config.js`, altere:

```javascript
links: {
    whatsappGroup: "https://chat.whatsapp.com/SEU_GRUPO_AQUI",
    whatsappCommunity: "https://chat.whatsapp.com/SUA_COMUNIDADE_AQUI"
}
```

### 4. Alterar Preço

No arquivo `config.js`, altere:

```javascript
product: {
    name: "Devocional Filho Liberto",
    price: 24.99,        // Preço de venda
    originalPrice: 47.00, // Preço original (para ancoragem)
    guaranteeDays: 7,
    protocolDays: 21
}
```

## Estrutura das Telas

### Tela 0 - Abertura
- Headline principal
- Subtexto com transparência
- Botão CTA
- Selo de prova social

### Telas 1-5 - Perguntas
- Barra de progresso (20% a cada pergunta)
- Pergunta em destaque
- Opções em botões empilhados
- Avanço automático ao clicar

### Tela 6 - Processamento
- Animação de carregamento
- Texto personalizado
- Barra de progresso (3 segundos)

### Tela 7 - Resultado/Oferta
- Headline dinâmica (por bloco da Pergunta 1)
- Validação da dor
- Mecanismo do problema
- Mecanismo da solução (áreas do protocolo)
- Prova social
- Stack de oferta
- Preço e garantia
- CTA sticky

### Tela 8 - Checkout
- Resumo da oferta
- Formulário (nome, WhatsApp, e-mail)
- Métodos de pagamento (PIX/Cartão)
- Selo de garantia
- Depoimento
- Ícones de segurança

### Tela 9 - Confirmação
- Ícone de confirmação
- Texto de boas-vindas
- Próximos passos
- Botão para WhatsApp

## Compliance Google Ads

O quiz foi projetado para atender às políticas do Google Ads:

- ✅ Transparência na abertura (informa sobre oferta paga)
- ✅ Linguagem espiritual/emocional (não clínica)
- ✅ Perguntas autodeclaradas (não adivinha)
- ✅ Sem escassez falsa
- ✅ Coleta mínima de dados

## Personalização de Headlines

As headlines são dinâmicas baseadas na resposta da Pergunta 1:

- **Bloco A**: Filho distante da igreja
- **Bloco B**: Filho envolvido com vícios
- **Bloco C**: Filho em conflito/rebeldia
- **Bloco D**: Sentimento de distância

Cada bloco tem 3 variações para teste A/B.

## Próximos Passos

1. ✅ Implementação do quiz
2. ⬜ Integrar com gateway de pagamento real
3. ⬜ Configurar automação WhatsApp
4. ⬜ Criar campanha Google Ads
5. ⬜ Testar variações de headline
6. ⬜ Validar com jurídico/garantia

## Notas Técnicas

- **CSS**: Responsivo (mobile-first)
- **JavaScript**: Vanilla (sem dependências)
- **Performance**: Leve, rápido para carregar
- **SEO**: Meta tags básicas incluídas

## Suporte

Para dúvidas ou personalizações, consulte o arquivo `funil-quiz-filho-liberto.md` com o plano completo.
