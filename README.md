# Anfitrião

Landing page da Anfitrião Gestão e Contabilidade — escritório especializado em aluguéis por temporada.

## Getting Started

```bash
npm install
npm run dev:web
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Project Structure

```
anfitriao/
├── apps/
│   └── web/         # Landing Next.js
├── packages/
│   ├── ui/          # Primitivos compartilhados
│   ├── env/         # Variáveis de ambiente
│   └── config/      # TypeScript compartilhado
```

## Available Scripts

- `npm run dev`: Start all applications in development mode
- `npm run build`: Build all applications
- `npm run dev:web`: Start only the web application
- `npm run check-types`: Check TypeScript types across all apps
- `npm run check`: Run Biome formatting and linting
