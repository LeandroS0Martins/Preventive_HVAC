# Preventiva HVAC - PWA

Um aplicativo web progressivo (PWA) para automatizar e facilitar a emissão de relatórios de manutenção preventiva de equipamentos HVAC. Funciona completamente offline e pode ser instalado como um aplicativo nativo em dispositivos móveis e desktops.

## Características

- ✅ **Funciona Offline**: Toda a aplicação funciona sem conexão com a internet
- 📱 **Responsivo**: Interface otimizada para desktop, tablet e smartphone
- 🎯 **Instalável**: Pode ser instalado como um aplicativo nativo
- 📄 **Geração de PDF**: Cria relatórios profissionais em PDF sem dependências externas
- 🔄 **Service Worker**: Cache automático de todos os arquivos necessários
- 🎨 **Interface Moderna**: Design limpo e profissional com feedback visual

## Estrutura do Projeto

```
pwa_project/
├── index.html              # Página principal (aplicação)
├── manifest.json           # Manifesto PWA
├── sw.js                   # Service Worker
├── jspdf.umd.min.js        # Biblioteca jsPDF (local)
├── icons/
│   ├── icon-192x192.png    # Ícone 192x192
│   └── icon-512x512.png    # Ícone 512x512
└── README.md               # Este arquivo
```

## Instalação

### No GitHub

1. Crie um novo repositório no GitHub
2. Clone este repositório em sua máquina local:
   ```bash
   git clone https://github.com/seu-usuario/preventiva-hvac.git
   cd preventiva-hvac
   ```

3. Faça suas alterações e commit:
   ```bash
   git add .
   git commit -m "Descrição das alterações"
   git push origin main
   ```

### Hospedagem

#### Opção 1: GitHub Pages (Recomendado)

1. Vá para as configurações do repositório
2. Acesse **Settings > Pages**
3. Em **Source**, selecione **Deploy from a branch**
4. Escolha a branch **main** e pasta **/ (root)**
5. Clique em **Save**

Seu aplicativo estará disponível em: `https://seu-usuario.github.io/preventiva-hvac`

#### Opção 2: Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **New Project**
3. Selecione seu repositório do GitHub
4. Clique em **Deploy**

#### Opção 3: Netlify

1. Acesse [netlify.com](https://netlify.com)
2. Clique em **Add new site > Import an existing project**
3. Conecte seu repositório GitHub
4. Clique em **Deploy site**

## Como Usar

### No Navegador

1. Acesse a URL da aplicação no seu navegador
2. Preencha os dados do equipamento e técnico
3. Capture as fotos conforme solicitado
4. Navegue pelas telas usando os botões **Próximo** e **Voltar**
5. Selecione o status final do equipamento
6. Clique em **GERAR RELATÓRIO PDF** para baixar o documento

### Como PWA (Instalado)

#### No Android
1. Abra o aplicativo no Chrome
2. Toque no menu (⋮) > **Instalar aplicativo**
3. Confirme a instalação
4. O aplicativo aparecerá na sua tela inicial

#### No iOS
1. Abra o aplicativo no Safari
2. Toque em **Compartilhar** > **Adicionar à Tela Inicial**
3. Nomeie o aplicativo e confirme
4. O aplicativo aparecerá na sua tela inicial

#### No Desktop (Windows/Mac/Linux)
1. Abra o aplicativo no Chrome/Edge
2. Clique no ícone de instalação (⬇️) na barra de endereço
3. Clique em **Instalar**
4. O aplicativo será instalado como um programa

## Funcionalidades Principais

### Telas do Formulário

1. **Identificação Inicial**: Dados do técnico, data, TAG e OS
2. **Evaporador**: Fotos antes e depois da limpeza
3. **Filtro**: Fotos antes e depois da limpeza
4. **Condensador**: Fotos antes e depois da limpeza
5. **Medição de Corrente**: Foto única (monofásico) ou 3 fotos (trifásico)
6. **Medição de Tensão**: Foto única (monofásico) ou 3 fotos (trifásico)
7. **Observações**: Notas complementares
8. **Status Final**: Liberado, com ressalvas ou necessita manutenção

### Geração de PDF

O relatório PDF inclui:
- Capa com dados do equipamento
- Sumário automático
- Fotos antes e depois de cada componente
- Medições elétricas (corrente e tensão)
- Observações complementares
- Status final com assinatura do técnico
- Numeração de páginas automática

## Offline

A aplicação funciona completamente offline:

- **Primeira visita**: Todos os arquivos são baixados e cacheados
- **Visitas subsequentes**: O aplicativo carrega do cache local
- **Geração de PDF**: Funciona 100% offline (jsPDF incluído localmente)
- **Indicador de status**: Mostra "Online" ou "Offline" no canto superior direito

## Desenvolvimento Local

Para testar localmente com HTTPS (necessário para Service Worker):

```bash
# Usando Python 3
python -m http.server 8000

# Ou usando Node.js
npx http-server

# Acesse em: http://localhost:8000
```

Para testar com HTTPS:
```bash
# Usando mkcert
mkcert localhost
python -m http.server --certfile localhost.pem --keyfile localhost-key.pem 8443

# Acesse em: https://localhost:8443
```

## Compatibilidade

- ✅ Chrome/Chromium (v51+)
- ✅ Firefox (v44+)
- ✅ Safari (v11.1+)
- ✅ Edge (v79+)
- ✅ Opera (v38+)

## Melhorias Futuras

- [ ] Sincronização automática de dados quando online
- [ ] Armazenamento local de rascunhos
- [ ] Suporte a múltiplos idiomas
- [ ] Assinatura digital
- [ ] Integração com servidor backend
- [ ] Histórico de relatórios

## Troubleshooting

### Service Worker não está registrando

1. Certifique-se de usar HTTPS (ou localhost)
2. Verifique o console do navegador para erros
3. Limpe o cache do navegador e recarregue

### PDF não está gerando offline

1. Verifique se o arquivo `jspdf.umd.min.js` está no diretório raiz
2. Certifique-se de que o Service Worker foi registrado com sucesso
3. Tente limpar o cache e reinstalar o aplicativo

### Ícones não aparecem

1. Verifique se os arquivos PNG estão na pasta `icons/`
2. Certifique-se de que os caminhos no `manifest.json` estão corretos

## Licença

Este projeto está disponível sob a licença MIT.

## Suporte

Para reportar bugs ou sugerir melhorias, abra uma issue no repositório GitHub.

---

**Desenvolvido com ❤️ para otimizar a manutenção preventiva HVAC**
