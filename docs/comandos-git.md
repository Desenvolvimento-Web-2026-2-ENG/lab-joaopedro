[← Voltar ao Portfólio Central](../index.html)

---

# Manual de Referência: Git e GitHub

Documentação de consulta rápida com os comandos essenciais para controle de versão, gerenciamento de ramificações (*branches*) e publicação de projetos web no GitHub.

---

## 1. Identificação do Usuário

Ao utilizar o Git pela primeira vez em uma máquina, é necessário registrar suas credenciais para que cada alteração fique vinculada ao seu perfil:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
```

Para conferir se os dados foram salvos corretamente:

```bash
git config --list
```

---

## 2. Tabela de Comandos Essenciais

| Comando | Função no Controle de Versão |
| :--- | :--- |
| `git init` | Transforma o diretório atual em um repositório monitorado pelo Git. |
| `git clone <url>` | Cria uma cópia local completa de um repositório hospedado no GitHub. |
| `git status` | Exibe o estado atual dos arquivos (modificados, não rastreados ou prontos). |
| `git diff` | Mostra exatamente quais linhas de código foram alteradas antes do `git add`. |
| `git add <arquivo>` | Move um arquivo específico para a área de preparação (*Stage*). |
| `git add .` | Inclui todas as alterações da pasta atual na área de preparação. |
| `git commit -m "texto"` | Registra um pacote de alterações no histórico local com uma mensagem explicativa. |
| `git restore <arquivo>` | Descarta modificações locais feitas em um arquivo antes de ser preparado. |
| `git branch` | Lista todas as ramificações locais e destaca a que está ativa no momento. |
| `git switch -c <nome>` | Cria uma nova *branch* de trabalho e alterna para ela imediatamente. |
| `git pull` | Sincroniza o projeto local baixando as novidades do repositório remoto. |
| `git push` | Publica os commits locais na ramificação correspondente lá no GitHub. |
| `git log --oneline` | Lista o histórico de commits de maneira compacta (código hash + título). |

---

## 3. Rotina de Versionamento e Envio

### Atualizando um repositório já existente (Dia a dia)

1. **Inspecione o que mudou no projeto:**
   ```bash
   git status
   ```
2. **Adicione os arquivos modificados ao pacote de envio:**
   ```bash
   git add .
   ```
3. **Grave a versão no histórico com um resumo claro:**
   ```bash
   git commit -m "feat: atualiza links de navegacao e documentacao do hub"
   ```
4. **Transfira as atualizações para a nuvem (GitHub):**
   ```bash
   git push
   ```

### Conectando um projeto local do zero ao GitHub

1. **Inicialize o rastreamento na pasta raiz do projeto:**
   ```bash
   git init
   ```
2. **Prepare os arquivos iniciais e salve o primeiro registro:**
   ```bash
   git add .
   git commit -m "chore: estrutura inicial do portfolio web"
   ```
3. **Padronize o nome da ramificação principal para `main`:**
   ```bash
   git branch -M main
   ```
4. **Adicione o endereço do repositório remoto e faça o upload inicial:**
   ```bash
   git remote add origin [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
   git push -u origin main
   ```

---

## 4. Boas Práticas e Publicação (GitHub Pages)

* **Commits Atômicos:** Prefira fazer pequenos commits a cada funcionalidade concluída (ex: criar uma página, corrigir um link) em vez de juntar todo o trabalho em um único envio no final.
* **Mensagens Semânticas:** Comece suas mensagens com verbos ou prefixos claros, como `feat:` (nova página/recurso), `fix:` (correção de erro ou link quebrado) e `docs:` (alteração em arquivos `.md`).
* **Ativando o GitHub Pages:** No painel do repositório no GitHub, acesse **Settings > Pages**, selecione **Deploy from a branch** em *Source*, escolha a branch **`main`** com a pasta **`/ (root)`** e clique em **Save**. Após alguns instantes, o site estará disponível publicamente.
