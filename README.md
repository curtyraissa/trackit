![Imagem 1](./layout-projeto.png "Imagem 1")

<h1 align="center">Track it - ReactJS </h1>

✅ Requisitos

- Geral
    - [x]  Manipule o HTML usando somente React (você não deve manipular o DOM diretamente com `querySelector`, `innerHTML`, `classList`)
    - [x]  Para controlar os dados dinâmicos da aplicação, utilize as ferramentas de gerenciamento de estado do React (não utilize variáveis globais)
    - [x]  Versionamento usando Git é obrigatório, crie um **repositório público** no seu perfil do GitHub
    - [x]  Faça commits a cada funcionalidade implementada
    - [x]  Para estados globais (como usuário logado e progresso do dia) utilize **ContextAPI**.
    - [x]  Para os demais estados que não forem globais (necessários para muitos elementos da aplicação), você pode continuar utilizando estados e props 😄
    - [x]  Obrigatório fazer deploy
- Layout
    - [x]  Aplicar layout, seguindo figma fornecido
        
        [TrackIt](https://www.figma.com/file/3r8MSf9dIPuFlvZHuHTZXF/TrackIt?node-id=0%3A1)
        
    - [x]  O CSS deve ser implementado utilizando **Styled Components**
    - [x]  Não é necessário fazer a versão para desktop, somente mobile
- Tela Login (rota `/`)
    - [x]  Deve ser enviado o email e senha para a API conforme documentação
    - [x]  Enquanto estiver carregando, os campos e o botão devem ser desabilitados, conforme layout
        - 💡 **Dica**: para fazer a animação de loading, utilize a biblioteca `react-loader-spinner`
    - [x]  Em caso de sucesso, o usuário deve ser redirecionado para a rota `/hoje`
    - [x]  Em caso de falha, deve ser exibido um `alert` informando o erro para o usuário e os campos/botão devem ser habilitados novamente
    - [x]  Ao clicar no link para se cadastrar, o usuário deve ser redirecionado para a rota `/cadastro`
- Tela Cadastro (rota `/cadastro`)
    - [x]  Os dados devem ser enviados para a API conforme documentação
    - [x]  Enquanto estiver carregando, os campos e o botão devem ser desabilitados, conforme layout
    - [x]  Em caso de sucesso, o usuário deve ser redirecionado para a rota `/` (rota de Login)
    - [x]  Em caso de falha, deve ser exibido um `alert` informando o erro para o usuário e os campos/botão devem ser habilitados novamente
    - [x]  Ao clicar no link para logar, o usuário deve ser redirecionado para a rota `/` (rota de Login)
- Topo e Menu
    - [x]  Topo e menu devem ter posicionamento fixo
    - [x]  No topo deve ser exibida a foto do usuário conforme layout
        - **OBS**: Utilize **ContextAPI** para compartilhar o estado do usuário logado globalmente entre os componentes.
    - [x]  No menu, os 3 botões de Hábitos, Hoje e Histórico devem redirecionar o usuário para as rotas `/habitos`, `/hoje` e `/historico` respectivamente
    - [x]  O botão de Hoje deve exibir uma barra de progresso circular indicando a porcentagem de conclusão de hábitos de hoje do usuário
        - 💡 **Dica**: utilize a biblioteca `react-circular-progressbar`
        - **OBS**: Esse progresso deve ser atualizado automaticamente conforme o usuário for concluindo os hábitos. Utilize **ContextAPI** para compartilhar esse estado globalmente entre os componentes.
- Tela Hábitos (rota `/habitos`)
    - [x]  Carregar os hábitos do usuário, mandando request pra API conforme documentação e exibindo abaixo conforme layout
    - [x]  Ao clicar para deletar um hábito, deve ser exibido um `confirm` para confirmar se o usuário gostaria realmente de apagar o hábito. Se sim, deve ser enviado um request pra API conforme documentação e os hábitos recarregados logo em seguida.
    - [x]  Caso o usuário não tenha nenhum hábito cadastrado, deve ser exibido o texto conforme layout
    - [x]  Ao clicar no botão de "+", deve-se exibir um formulário de cadastro de hábito logo abaixo do título conforme layout
    - [x]  O usuário deve inserir o nome do hábito em um campo de texto e selecionar os dias da semana que deseja realizar o hábito conforme layout
    - [x]  Ao salvar, devem ser enviados os dados para API conforme documentação
    - [x]  Enquanto estiver carregando, o campo de texto e o botão devem ser desabilitados, conforme layout. Os botões dos dias da semana devem ser desabilitados, porém não é necessária mudança visual durante o loading.
    - [x]  Em caso de sucesso, os campos devem ser limpos e reabilitados, o formulário deve ser escondido novamente e a lista de hábitos abaixo recarregada
    - [x]  Em caso de erro, os campos devem ser reabilitados e um alerta deve indicar o problema para o usuário
    - [x]  Ao Cancelar, o formulário deve ser escondido. Caso tenha dados já preenchidos, os mesmos devem ser mantidos caso o usuário reabra o formulário de criação.
- Tela Hoje (rota `/hoje`)
    - [x]  Carregar os hábitos de hoje do usuário, mandando request pra API conforme documentação e exibindo abaixo conforme layout
    - [x]  O título da tela deve exibir o dia de hoje conforme layout
        - 💡 **Dica**: utilize a biblioteca `dayjs` para isso
    - [x]  No subtítulo deve ser exibida a frase "Nenhum hábito concluído ainda" ou "x% dos hábitos concluídos", dependendo do progresso do usuário
    - [x]  Ao marcar ou desmarcar um hábito como concluído, deve ser enviado um request pra API conforme documentação. Não é necessário colocar loading.
    - [x]  Ao marcar um hábito como concluído, deve ser colocada em verde a contagem da sequência atual
    - [x]  Caso a sequência atual seja igual ao recorde do usuário, este também deve ser exibido em verde
- Tela Histórico (rota `/historico`)
    - [x]  Deve ser exibido o texto conforme layout
<hr/>

## 🛠 &nbsp;Skills
<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" width="52" alt="react logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="52" alt="js logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" width="52" alt="html5 logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" width="52" alt="css3 logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" height="40" width="52" alt="figma logo"   />        
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" width="52" alt="git logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="40" width="52" alt="github logo" />                                   
</div>
<hr/>

## 🚀 &nbsp;Links

- [Figma](https://www.figma.com/file/3r8MSf9dIPuFlvZHuHTZXF/TrackIt?node-id=0%3A1&t=Dh5InK9yGfFESOP0-0).<br/>
- [Deploy](https://projeto11-trackit-xi-seven.vercel.app/).<br/>

<hr/>

## 💬 &nbsp;Contact
<img align="left" src="https://avatars.githubusercontent.com/curtyraissa?size=100">

Feito por [Raissa Curty](https://github.com/curtyraissa)!

<a href="https://www.linkedin.com/in/raissa-curty/" target="_blank">
    <img style="border-radius:50%;" src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg" width="52" height="40" alt="linkedin logo"  />
  </a>&nbsp;