# Lumina Odontologia — Landing Page

Landing page premium para clínica odontológica, construída com **Vite + React + Tailwind CSS**.

## Estrutura de Componentes

```
src/
├── App.jsx                    # Componente raiz
├── index.css                  # Estilos globais + Tailwind
├── main.jsx                   # Entry point
└── components/
    ├── Navbar.jsx             # Navegação fixa com scroll detection
    ├── Hero.jsx               # Banner principal com imagem e CTAs
    ├── Sobre.jsx              # Sobre a clínica + estatísticas
    ├── Tratamentos.jsx        # Grid de tratamentos
    ├── Diferenciais.jsx       # Diferenciais da clínica
    ├── Depoimentos.jsx        # Depoimentos de pacientes
    ├── Contato.jsx            # Localização, horários e WhatsApp
    ├── Footer.jsx             # Rodapé
    └── WhatsAppFloat.jsx      # Botão flutuante do WhatsApp
```

## Como rodar

```bash
npm install
npm run dev
```

Acesse: http://localhost:5173

## Build para produção

```bash
npm run build
npm run preview
```

## Personalização

- **Nome da clínica**: procure por `Lumina Odontologia` nos componentes
- **WhatsApp**: altere `WHATSAPP_NUMBER` em `Hero.jsx`, `Contato.jsx` e `WhatsAppFloat.jsx`
- **Endereço e horários**: edite em `Contato.jsx`
- **Imagem do hero**: altere a URL da imagem em `Hero.jsx`
- **Cores**: edite as variáveis em `tailwind.config.js`
- **Textos**: cada seção é um componente independente e fácil de editar
