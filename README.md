# Projecto 1 - Front-End

> Uma aplicação front-end moderna construída com React, TypeScript e integração com Google Generative AI e Firebase.

## 📋 Tabela de Conteúdos

- [Visão Geral](#visão-geral)
- [Stack Tecnológico](#stack-tecnológico)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Dependências](#dependências)
- [Recursos](#recursos)
- [Configuração](#configuração)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🎯 Visão Geral

**Projecto 1 Front-End** é uma aplicação web responsiva que integra tecnologias modernas como React 19, Google Generative AI e Firebase para criar uma experiência de usuário dinâmica e interativa.

### Composição de Linguagens

- **TypeScript**: 81.1% 📘
- **CSS**: 11.1% 🎨
- **JavaScript**: 6.2% 🟨
- **HTML**: 1.6% 🏗️

## 🛠 Stack Tecnológico

### Frontend
- **React** 19.2.5 - Biblioteca JavaScript para construir interfaces de usuário
- **TypeScript** 6.0.2 - Superset tipado de JavaScript
- **Vite** 8.0.9 - Build tool e dev server rápido
- **React Router DOM** 7.14.2 - Roteamento para aplicações SPA

### UI & Styling
- **Bootstrap** 5.3.8 - Framework CSS responsivo
- **Phosphor React** 1.4.1 - Biblioteca de ícones
- **CSS** - Estilos customizados

### Integração com Serviços
- **Google Generative AI** 0.24.1 - API de IA generativa
- **Firebase** 12.12.1 - Backend as a Service (Autenticação, Firestore, etc)

### Desenvolvimento
- **ESLint** 9.39.4 - Linting e análise de código
- **TypeScript ESLint** 8.58.2 - Suporte ESLint para TypeScript

## 📦 Instalação

### Pré-requisitos
- Node.js (versão 16 ou superior recomendada)
- npm ou yarn

### Passos de Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/pedropestana00/Projecto1-Front-End.git
   cd Projecto1-Front-End
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   
   Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:
   ```env
   VITE_FIREBASE_API_KEY=sua_chave_aqui
   VITE_FIREBASE_AUTH_DOMAIN=seu_dominio.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=seu_projeto_id
   VITE_FIREBASE_STORAGE_BUCKET=seu_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
   VITE_FIREBASE_APP_ID=seu_app_id
   VITE_GOOGLE_API_KEY=sua_chave_google_generative_ai
   ```

## 🚀 Scripts Disponíveis

### Desenvolvimento
```bash
# Inicia o servidor de desenvolvimento com hot reload
npm run dev
```

Abre automáticamente em `http://localhost:5173`

### Build para Produção
```bash
# Compila TypeScript e gera build otimizado
npm run build
```

Saída: `dist/`

### Preview do Build
```bash
# Visualiza localmente a build de produção
npm run preview
```

### Linting
```bash
# Verifica o código com ESLint
npm run lint

# Corrige automaticamente problemas encontrados
npm run lint -- --fix
```

## 📁 Estrutura do Projeto

```
Projecto1-Front-End/
├── src/
│   ├── components/        # Componentes React reutilizáveis
│   ├── pages/            # Páginas da aplicação
│   ├── hooks/            # Custom React hooks
│   ├── services/         # Serviços de API (Firebase, Google AI)
│   ├── types/            # Definições TypeScript
│   ├── styles/           # Arquivos CSS globais
│   ├── App.tsx           # Componente principal
│   └── main.tsx          # Ponto de entrada
├── public/               # Arquivos estáticos
├── dist/                 # Build de produção (gerado)
├── .env.local            # Variáveis de ambiente (não commitar)
├── vite.config.ts        # Configuração Vite
├── tsconfig.json         # Configuração TypeScript
├── eslint.config.js      # Configuração ESLint
├── package.json          # Dependências e scripts
└── README.md             # Este arquivo
```

## 📚 Dependências

### Produção

| Pacote | Versão | Propósito |
|--------|--------|----------|
| `@google/generative-ai` | ^0.24.1 | Integração com Google Generative AI |
| `bootstrap` | ^5.3.8 | Framework CSS responsivo |
| `firebase` | ^12.12.1 | Backend e autenticação |
| `phosphor-react` | ^1.4.1 | Biblioteca de ícones |
| `react` | ^19.2.5 | Biblioteca UI |
| `react-dom` | ^19.2.5 | Renderização no DOM |
| `react-router-dom` | ^7.14.2 | Roteamento SPA |

### Desenvolvimento

- **TypeScript** (~6.0.2) - Tipagem estática
- **Vite** (^8.0.9) - Build tool
- **ESLint** (^9.39.4) - Code quality
- **@vitejs/plugin-react** (^6.0.1) - Plugin React para Vite

## ⚙️ Configuração

### Variáveis de Ambiente

O projeto utiliza variáveis de ambiente com prefixo `VITE_` para acesso no frontend:

```typescript
// Exemplo de acesso em src/main.tsx
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // ...
};
```

### TypeScript

O projeto está configurado para TypeScript com suporte a módulos ES e reage às mudanças em tempo real durante desenvolvimento.

### ESLint

Regras de linting customizadas para React, React Hooks e TypeScript. Execute `npm run lint` para verificar o código.

## 🔧 Recursos Principais

- ✅ **React 19** - Última versão com melhorias de performance
- ✅ **TypeScript** - Tipagem segura e melhor developer experience
- ✅ **Firebase Integration** - Autenticação, Firestore e Storage
- ✅ **Google Generative AI** - IA generativa integrada
- ✅ **Responsive Design** - Bootstrap para layouts responsivos
- ✅ **Modern Tooling** - Vite para desenvolvimento rápido
- ✅ **Code Quality** - ESLint e TypeScript para código limpo

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

## 📞 Suporte

Se encontrar problemas ou tiver dúvidas:

1. Verifique as [issues existentes](https://github.com/pedropestana00/Projecto1-Front-End/issues)
2. Crie uma nova issue descrevendo o problema
3. Entre em contato com o desenvolvedor

---

**Desenvolvido por:** [@pedropestana00](https://github.com/pedropestana00)

**Data de atualização:** 2026-05-14
