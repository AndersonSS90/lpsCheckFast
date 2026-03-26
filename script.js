const servicos = {
  consulta: [
    {
      titulo: "Identificação do Veículo",
      texto: "Aqui garantimos que o veículo está regular e pode circular sem problemas:\n- Situação do veículo\n- Placa Mercosul\n- Base estadual\n- Alterações gerais\n\n👉 Essa etapa evita dores de cabeça logo no início."
    },
    {
      titulo: "Dados de Propriedade",
      texto: "Entendemos quem está por trás do veículo e como ele foi utilizado:\n- Proprietário\n- Uso em frota ou particular\n\n👉 Ajuda a identificar desgaste e tipo de uso."
    },
    {
      titulo: "Pendências Financeiras e Legais",
      texto: "Verificamos se existe algo que pode impedir a transferência:\n- Alienação (financiamento ativo)\n- Restrições judiciais\n- Bloqueios gerais\n\n👉 Aqui podem aparecer problemas que travam a compra."
    },
    {
      titulo: "Histórico Financeiro e de Mercado",
      texto: "Analisamos o comportamento do veículo no mercado:\n- Valor na Tabela FIPE\n- Indícios de transações suspeitas\n\n👉 Ajuda a identificar possíveis golpes ou preços fora da realidade."
    },
    {
      titulo: "Multas e Notificações",
      texto: "Checamos como o veículo foi conduzido ao longo do tempo:\n- Multas\n- Notificações\n\n👉 Pode indicar falta de cuidado do antigo dono."
    },
    {
      titulo: "Histórico de Riscos e Ocorrências",
      texto: "Aqui entram os pontos que mais impactam segurança e valor:\n- Roubo ou furto\n- Danos diversos\n- Envolvimento em acidentes\n\n👉 É onde aparecem os principais alertas."
    },
    {
      titulo: "Sinistro e Perda Total",
      texto: "Analisamos registros mais graves do veículo:\n- Perda total\n- Sinistros relevantes\n\n👉 Pode indicar comprometimento estrutural."
    },
    {
      titulo: "Histórico em Leilão",
      texto: "Verificamos se o veículo já passou por leilão.\n\n👉 Isso impacta diretamente:\n- Valor de revenda\n- Aceitação em seguros"
    }
  ],

  cautelar: [
    {
      titulo: "Consulta de Histórico Veicular",
      texto: "Antes da vistoria, analisamos todo o passado do veículo.\n\n👉 Isso nos dá um “raio-X” completo e direciona a análise para pontos de risco."
    },
    {
      titulo: "Identificação do Veículo",
      texto: "Conferimos todos os elementos que comprovam a originalidade:\n- Chassi\n- Motor\n- Câmbio\n- Etiquetas\n- Vidros\n\n👉 Aqui identificamos sinais de adulteração."
    },
    {
      titulo: "Análise Estrutural",
      texto: "Verificamos se o carro já sofreu impactos mais fortes:\n- Longarinas\n- Colunas\n- Assoalho\n- Alinhamento da carroceria\n\n👉 Detectamos danos estruturais e batidas mais sérias."
    },
    {
      titulo: "Sistemas de Segurança",
      texto: "Analisamos os principais itens que protegem quem está no veículo:\n- Airbags\n- Cintos de segurança\n- Sistema de freios\n\n👉 Fundamental para garantir a segurança dos ocupantes."
    },
    {
      titulo: "Avaliação Funcional",
      texto: "Checamos os itens que impactam diretamente o uso no dia a dia:\n- Direção\n- Pneus\n- Rodas\n- Iluminação\n- Painel\n\n👉 Identificamos desgastes e possíveis falhas."
    },
    {
      titulo: "Estado de Conservação",
      texto: "Fazemos uma análise geral das condições do veículo.\n\n👉 Consideramos:\n- Sinais de uso\n- Compatibilidade com a quilometragem\n\n👉 Aqui aparecem indícios de desgaste excessivo ou inconsistências."
    },
    {
      titulo: "Conformidade Legal",
      texto: "Verificamos se o veículo está dentro das exigências obrigatórias:\n- Itens obrigatórios\n- Acessórios instalados\n\n👉 Garante que o carro está regular para circular."
    },
    {
      titulo: "Laudo e Classificação Final",
      texto: "Ao final, entregamos um laudo completo com fotos.\n\n👉 Você recebe:\n- Avaliação técnica\n- Classificação do veículo\n- Visão clara e objetiva\n\n👉 Mais segurança e transparência na decisão."
    }
  ],

  completa: [
    {
      titulo: "Histórico + Vistoria Básica",
      texto: "Começamos analisando todo o passado e a estrutura do veículo.\n\n👉 Aqui você já tem:\n- Histórico completo\n- Análise técnica atual\n\n👉 Uma visão clara do que já aconteceu com o carro."
    },
    {
      titulo: "Inspeção de Pintura e Acabamento",
      texto: "Agora vamos além do que aparece no histórico.\n\nAnalisamos:\n- Diferença de tonalidade\n- Variação de brilho\n- Textura irregular (casca de laranja)\n- Marcas de polimento\n- Resíduos de tinta (overspray)\n- Acabamentos entre peças\n\n👉 Aqui identificamos repinturas e retoques escondidos."
    },
    {
      titulo: "Indícios de Reparo Estrutural",
      texto: "Buscamos sinais de intervenções mais profundas:\n- Diferença na espessura da tinta\n- Uso de massa na lataria\n- Ondulações na carroceria\n- Desalinhamento de peças\n- Parafusos mexidos ou repintados\n- Sinais de desmontagem\n- Alterações em soldas\n\n👉 Revela possíveis reparos após colisões mais graves."
    },
    {
      titulo: "O que a Vistoria Completa revela",
      texto: "Aqui conectamos todas as análises.\n\n👉 Você entende:\n- O que está no histórico\n- O que a estrutura mostra\n- O que foi escondido na estética\n\n👉 Resultado:\nUma avaliação completa, sem surpresas na negociação."
    }
  ]
}

let servicoAtual="completa"
let etapaIndex=0

function abrirModal(servico){
  servicoAtual=servico
  etapaIndex=0
  atualizarEtapa()
  document.getElementById("modal").style.display="flex"
}

function fecharModal(){
  document.getElementById("modal").style.display="none"
}

function atualizarEtapa(){
  const etapa=servicos[servicoAtual][etapaIndex]
  document.getElementById("tituloEtapa").innerText=etapa.titulo
  document.getElementById("textoEtapa").innerText=etapa.texto
  let numero=etapaIndex+1
  document.getElementById("numeroEtapa").innerText=numero<10?"0"+numero:numero
}

function mudarEtapa(direcao){
  etapaIndex+=direcao
  if(etapaIndex<0) etapaIndex=servicos[servicoAtual].length-1
  if(etapaIndex>=servicos[servicoAtual].length) etapaIndex=0
  atualizarEtapa()
}

/*
Exemplo de Depoimento em Vídeo

{
  tipo:    "video",
  arquivo: "./depoimento1.mp4",
  texto:   "Descobri que o carro tinha passagem por leilão antes de comprar.",
  cliente: "- Mariana Souza"
}
*/

const depoimentos = [
  {
    tipo: "audio",
    arquivo: "./depoimento1.mp3",
    texto: "Cara queria aproveitar e te dar parabéns pelo serviço, foi bem atencioso. Nunca te esquivou de nada.",
    cliente: "- João Pereira"
  }
];

let depoimentoIndex=0

function pararCarrossel(){
  clearInterval(intervaloCarrossel);
}

function atualizarDepoimento(){
  const container = document.getElementById("midiaDepoimento");
  container.innerHTML = ""; // limpa antes

  const depo = depoimentos[depoimentoIndex];

  let elemento;

  if(depo.tipo === "video"){
    elemento = document.createElement("video");
    elemento.src = depo.arquivo;
    elemento.controls = true;
  } else {
    elemento = document.createElement("audio");
    elemento.src = depo.arquivo;
    elemento.controls = true;
  }

  // 👉 aqui vamos controlar o autoplay (próximo passo)
  elemento.addEventListener("play", pararCarrossel);

  container.appendChild(elemento);

  document.getElementById("textoDepoimento").innerText = depo.texto;
  document.getElementById("clienteDepoimento").innerText = depo.cliente;
}

function trocarDepoimento(direcao){
  depoimentoIndex += direcao;

  if(depoimentoIndex < 0) depoimentoIndex = depoimentos.length - 1;
  if(depoimentoIndex >= depoimentos.length) depoimentoIndex = 0;

  atualizarDepoimento();

  // reinicia carrossel
  clearInterval(intervaloCarrossel);
  intervaloCarrossel = setInterval(()=>{trocarDepoimento(1)},6000);
}

let intervaloCarrossel = setInterval(()=>{trocarDepoimento(1)},6000);

trocarDepoimento(1);

document.querySelectorAll("[data-servico]").forEach(botao=>{
  botao.addEventListener("click",()=>{
    const servico = botao.getAttribute("data-servico");
    document.getElementById("servico").value = servico;

    document.getElementById("form-vistoria").scrollIntoView({
      behavior:"smooth"
    });
  });
});

// 📍 LISTA RMPA
const municipiosRMPA = [
  "Alvorada",                  "Araricá",           "Arroio dos Ratos", "Cachoeirinha", "Campo Bom",
  "Canoas",                    "Capela de Santana", "Charqueadas",      "Dois Irmãos",  "Eldorado do Sul",
  "Esteio",                    "Estância Velha",    "Glorinha",         "Gravataí",     "Guaíba",
  "Igrejinha",                 "Ivoti",             "Montenegro",       "Nova Hartz",   "Nova Santa Rita",
  "Novo Hamburgo",             "Parobé",            "Porto Alegre",     "Portão",       "Rolante",
  "Santo Antônio da Patrulha", "Sapiranga",         "Sapucaia do Sul",  "São Jerônimo", "São Leopoldo",
  "São Sebastião do Caí",      "Taquara",           "Triunfo",          "Viamão"
];

const selectCidade = document.getElementById("cidade");

municipiosRMPA.forEach(cidade => {
  const option = document.createElement("option");
  option.value = cidade;
  option.textContent = cidade;
  selectCidade.appendChild(option);
});

// ENVIO
document.getElementById("formVistoria").addEventListener("submit", function(e){
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const email = document.getElementById("email").value.trim();
  const placa = document.getElementById("placa").value.trim().toUpperCase();
  const servico = document.getElementById("servico").value;
  const cidade = document.getElementById("cidade").value;

  // REGEX
  const regexTelefone = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexPlaca = /^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/; // Mercosul + antigo

  // VALIDAÇÕES
  if(!nome){
    alert("Por favor, preencha seu nome completo.");
    return;
  }

  if(!regexTelefone.test(telefone)){
    alert("Digite um telefone válido com DDD.");
    return;
  }

  if(!regexEmail.test(email)){
    alert("Digite um e-mail válido.");
    return;
  }

  if(!regexPlaca.test(placa)){
    alert("Digite uma placa válida (ex: ABC1D23 ou ABC1234).");
    return;
  }

  if(!servico){
    alert("Selecione um serviço.");
    return;
  }

  if(!cidade){
    alert("Selecione uma cidade.");
    return;
  }

  const data = {
    nome,
    telefone,
    email,
    placa,
    servico,
    cidade
  };

  const form = document.getElementById("formVistoria");
  const botao = form.querySelector("button[type='submit']");

  botao.disabled = true;
  const textoOriginal = botao.innerText;
  botao.innerText = "Enviando solicitação...";
  
  fetch(
    "https://script.google.com/macros/s/AKfycbyR49dIXT631_-9XcOn__BCtNyr4vUchqJFhgi1YuyJ24xEMi1H1pMhhjAaPkaKcDbO/exec",
    {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data)
    }).then(() => {
      document.getElementById("formVistoria").reset();
      sessionStorage.setItem("dadosFormulario", JSON.stringify(data));
      window.location.href = "./sucesso.html";
    }
  );

  setTimeout(() => {
    botao.disabled = false;
    botao.innerText = textoOriginal;
  }, 3000);
  
});
