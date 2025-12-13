//========== CONST PARA ADICONAR BARRA LATERAL OU FOOTER ==========

const textoRepetidoMobile = `
    <div class="footerMobile">
        <div class="divSobreMobile">
            <div class="sobreTopMobile">
                    <div class="circulo" id="mudarCorUm"><img class="anthony" src="/PROJETOS/ex-webpage/imagens/anthony.png"></div>
                    <div class="sobreTopDiv">
                        <p class="tituloBarra">sobre mim:</p>
                        <a href="mailto:anthony.blog@tuta.io" class="iconeContato">✉️</a>
                    </div>
                </div>
                <p class="textoBarraMobile">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Phasellus malesuada, urna sed cursus semper, arcu arcu auctor lorem.</p>
            </div>
            <div class="mobileRight"> 
                <img class="imgFooter" src="/PROJETOS/ex-webpage/imagens/img_footer.png">    
            </div>
        </div>
    </div>
    <div class="espacoHorizontal"></div>
    <p class="emProlDosAnimaisMobile" id="mudarCorQuatro">"Plantas alimentam, animais sentem."</p> 
`;

const textoRepetido = `
    <div class="espacoHorizontal"></div>
    <div class="sobreTop">
        <div class="circulo" id="mudarCorDois"><img class="anthony" src="/PROJETOS/ex-webpage/imagens/anthony.png"></div>
        <div class="sobreTopDiv">
            <p class="tituloBarra">sobre mim:</p>
            <a href="mailto:anthony.blog@tuta.io" class="iconeContato">✉️</a>
        </div>
    </div>
    <div class="espacoHorizontal fica"></div>
    <p class="textoBarra">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Phasellus malesuada, urna sed cursus semper, arcu arcu auctor lorem.</p>
    <p class="hifensLateral">-------------------------------</p>
    <p class="emProlDosAnimais mudarCorTres frase"></p>
    <p class="textoBarra autor"></p>
`;

const textoRepetidoMobileEn = `
    <div class="footerMobile">
        <div class="divSobreMobile">
          <div class="sobreTopMobile">
                  <div class="circulo" id="mudarCorUm"><img class="anthony" src="/PROJETOS/ex-webpage/imagens/anthony.png"></div>
                  <div class="sobreTopDiv">
                      <p class="tituloBarra">about me:</p>
                      <a href="mailto:anthony.blog@tuta.io" class="iconeContato">✉️</a>
                  </div>
              </div>
              <p class="textoBarraMobile">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Phasellus malesuada, urna sed cursus semper, arcu arcu auctor lorem.</p>
          </div>
          <div class="mobileRight">
            <img class="imgFooter" src="/PROJETOS/ex-webpage/imagens/img_footer.png">    
          </div>
        </div>
    </div>
    <div class="espacoHorizontal"></div>
    <p class="emProlDosAnimaisMobile" id="mudarCorQuatro">"Plantas alimentam, animais sentem."</p> 
`;

const textoRepetidoEn = `
    <div class="espacoHorizontal"></div>
    <div class="sobreTop">
        <div class="circulo" id="mudarCorDois"><img class="anthony" src="/PROJETOS/ex-webpage/imagens/anthony.png"></div>
        <div class="sobreTopDiv">
            <p class="tituloBarra">about me:</p>
            <a href="mailto:anthony.blog@tuta.io" class="iconeContato">✉️</a>
        </div>
    </div>
    <div class="espacoHorizontal fica"></div>
    <p class="textoBarra">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Phasellus malesuada, urna sed cursus semper, arcu arcu auctor lorem.</p>
    <p class="hifensLateral">-------------------------------</p>
    <p class="emProlDosAnimais mudarCorTres frase"></p>
    <p class="textoBarra autor"></p>
`;

//========== CONST COM FRASES PARA A BARRA LATERAL ==========

const frases = [
    {
    "frase": "Todo esforço deve ser feito para parar o cruel e desnecessário abate de animais, que deve ser destrutivo para nossa moral.",
    "autor": "Nikola Tesla"
    },
    {
        "frase": "Certamente é preferível cultivar vegetais, e eu penso, portanto, que o vegetarianismo é um afastamento louvável do hábito bárbaro estabelecido.",
        "autor": "Nikola Tesla"
    },
    {
        "frase": "Que podemos subsistir com alimentos vegetais e realizar nosso trabalho até com vantagem não é uma teoria, mas um fato bem demonstrado.",
        "autor": "Nikola Tesla"
    },
    {
        "frase": "Para nos libertarmos dos instintos e apetites animais, que nos mantêm para baixo, devemos começar pela raiz da qual emergimos: devemos efetuar uma reforma radical no caráter da alimentação.",
        "autor": "Nikola Tesla"
    },
    {
        "frase": "Acredito que, seja falando sobre desigualdade de gênero, racismo, direitos queer, direitos indígenas ou direitos dos animais, estamos falando sobre a luta contra a injustiça.",
        "autor": "Joaquin Phoenix"
    },
    {
        "frase": "Todos nós somos animais deste planeta. Todos nós somos criaturas. E os animais não humanos sentem dores assim como nós. Eles também são fortes, inteligentes, diligentes, móveis e estão em evolução.",
        "autor": "Joaquin Phoenix"
    },
    {
        "frase": "Cada pedaço de carne, frango ou peixe que você come, cada pedaço de couro ou pele que você usa, veio de um animal que foi torturado, separado de suas famílias e brutalmente morto.",
        "autor": "Lewis Hamilton"
    },
    {
        "frase": "Sou uma firme defensora de uma dieta totalmente baseada em plantas e alimentos integrais, que pode expandir a longevidade e tornar você uma pessoa mais feliz de forma geral.",
        "autor": "Ariana Grande"
    },
    {
        "frase": "Além de concordar com os objetivos do vegetarianismo por razões estéticas e morais, é minha opinião que um modo de vida vegetariano, por seu efeito puramente físico no temperamento humano, influenciaria de forma muito benéfica a sorte da humanidade.",
        "autor": "Albert Einstein"
    },
    {
        "frase": "Então estou vivendo sem gorduras, sem carne, sem peixe, mas me sinto muito bem assim. Sempre me pareceu que o homem não nasceu para ser carnívoro.",
        "autor": "Albert Einstein"
    },
    {
        "frase": "Era uma empresa de hot dogs … e eu como esses incríveis hot dogs à base de plantas. … Então eu disse à empresa: 'Se vocês lançarem hot dogs à base de plantas, eu definitivamente farei um comercial para vocês.'",
        "autor": "Jennifer Coolidge"
    },
    {
        "frase": "Sou vegano e ativista pelos direitos dos animais porque me importo com mudanças climáticas, fome, saúde humana, minha saúde, saúde dos oceanos, desmatamento da floresta tropical e uso da água.",
        "autor": "Moby"
    }

];

const frasesEn = [
    {
    "frase": "Every effort should be made to stop the cruel and unnecessary slaughter of animals, which must be destructive to our morals.",
    "autor": "Nikola Tesla"
    },
    {
    "frase": "It is certainly preferable to raise vegetables, and I think, therefore, that vegetarianism is a commendable departure from the established barbarious habit.",
    "autor": "Nikola Tesla"
    },
    {
    "frase": "That we can subsist on plant food and perform our work even to advantage is not a theory, but a well-demonstrated fact.",
    "autor": "Nikola Tesla"
    },
    {
    "frase": "To free ourselves from animal instincts and appetites, which keep us down, we should begin at the very root from which we spring: we should effect a radical reform in the character of the food.",
    "autor": "Nikola Tesla"
    },
    {
    "frase": "I think whether we’re talking about gender inequality or racism or queer rights or indigenous rights or animal rights, we’re talking about the fight against injustice. ",
    "autor": "Joaquin Phoenix"
    },
    {
    "frase": "We are all animals of this planet. We are all creatures. And non-human animals experience pain sensations just like we do. we do. They too are strong, intelligent, industrious, mobile, and evolutional.",
    "autor": "Joaquin Phoenix"
    },
    {
    "frase": "Every bit of meat, chicken, or fish you eat, every bit of leather or fur you wear, has come from an animal that has been tortured, pulled away from their families and brutally killed.",
    "autor": "Lewis Hamilton"
    },
    {
    "frase": "I am a firm believer in eating a full plant-based, whole food diet that can expand your life length and make you an all-around happier person.",
    "autor": "Ariana Grande"
    },
    {
    "frase": "Besides agreeing with the aims of vegetarianism for aesthetic and moral reasons, it is my view that a vegetarian manner of living by its purely physical effect on the human temperament would most beneficially influence the lot of mankind.",
    "autor": "Albert Einstein"
    },
    {
    "frase": "So I am living without fats, without meat, without fish, but am feeling quite well this way. It always seems to me that man was not born to be a carnivore.",
    "autor": "Albert Einstein"
    },
    {
    "frase": "It was a hot dog company… and I eat these amazing plant‑based hot dogs… So I said to the company, ‘If you guys come out with plant‑based hot dogs, I will definitely do a commercial for you.’",
    "autor": "Jennifer Coolidge"
    },
    {
    "frase": "I’m a vegan and an animal rights activist because I care about climate change and famine and human health and my health and ocean health and rainforest deforestation and water use.",
    "autor": "Moby"
    },
];

//========== FUNÇÕES PARA MUDAR FRASES ==========


function sortearFrase() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    return frases[indiceAleatorio];
}

function sortearFraseEn() {
    const indiceAleatorio = Math.floor(Math.random() * frasesEn.length);
    return frasesEn[indiceAleatorio];
}

function mostrarFraseAleatoria() {

    let fraseSorteada;

    if (document.documentElement.lang === 'en') {
        fraseSorteada = sortearFraseEn();
    } else {
        fraseSorteada = sortearFrase();
    }
    
    const elementosFrase = document.getElementsByClassName('frase');
    const elementosAutor = document.getElementsByClassName('autor');
    
    if (elementosFrase.length > 0) {
        elementosFrase[0].textContent = `"${fraseSorteada.frase}"`;
    }
    if (elementosAutor.length > 0) {
        elementosAutor[0].textContent = `- ${fraseSorteada.autor} `;
    }
}

//========== MUDAR PARA MODO NOTURNO OU DIURNO ==========
(function() {

  // Aplica o tema no <html>
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  // Lê o tema salvo
  let savedTheme = localStorage.getItem('theme');

  if (!savedTheme) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    savedTheme = prefersDark ? 'dark' : 'light';
    localStorage.setItem('theme', savedTheme);
  }

  // APLICA O TEMA IMEDIATAMENTE — antes de qualquer elemento carregar
  applyTheme(savedTheme);

  // Aguarda DOM carregado para mexer no botão e nas imagens
  document.addEventListener('DOMContentLoaded', () => {

    const toggleButton = document.getElementById('toggle-theme');


    if (!toggleButton) return;

    // Ajusta ícone do botão
    toggleButton.textContent = (savedTheme === 'dark') ? '🌙' : '☀️';

    // Clique no botão
    toggleButton.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

      if (isDark) {
        applyTheme('light');
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = '☀️';
      } else {
        applyTheme('dark');
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = '🌙';
      }
    });
  });

})();

//========== FERRAMENTA DE BUSCA PARA O INDEX ==========

function normalize(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function matchStrictSubsequence(query, word) {
  if (query.length < 2) return false; 
  let qi = 0;
  for (let wi = 0; wi < word.length && qi < query.length; wi++) {
    if (word[wi] === query[qi]) {
      qi++;
    } else {
      if (qi > 0 && wi - (word.indexOf(query[0])) > 6) return false;
    }
  }
  return qi === query.length;
}

function filtrarPosts() {
  const q = normalize(document.getElementById("busca").value);
  const posts = document.querySelectorAll(".post");
  posts.forEach(post => {
    const tituloOriginal = post.querySelector(".linkIndex").textContent;
    const titulo = normalize(tituloOriginal);
    const matchSubstring = titulo.includes(q);
    const matchSubseq = matchStrictSubsequence(q, titulo);
    if (matchSubstring || matchSubseq) {
      post.style.display = "";
    } else {
      post.style.display = "none";
    }
  });
}

//========== ESCOLHER CORES ALEATÓRIAS PARA ITENS ==========

const cores = [
  "#7ead7d", "#92679c", "#628697", "#629783", "#c45f9d", "#628697",
  "#5f66c4", "#5fc4bc", "#b05fc4", "#628697", "#dcff5b", "#628697",
  "#74ff80", "#628697", "#74efff", "#ff7c9d", "#ebff7c", "#628697",
  "#ac62b3", "#a5e472",
]; 

const coresB = [ 
  "#7ead7d", "#629783", "#5f66c4", "#ac62b3", "#628697", "#628697", 
  "#5f66c4", "#92679c", "#b05fc4", "#629783",
]; 

function corAleatoriaA() {
  const indice = Math.floor(Math.random() * cores.length);
  return cores[indice];
}

function corAleatoriaB() {
  const indice = Math.floor(Math.random() * coresB.length);
  return coresB[indice];
}

//========== ADICIONAR O FOOTER E A BARRA LATERAL ==========

function adicionarTextoBarra() {

  const containersMobile = document.querySelectorAll('.barraLateralMobile');
  const containers = document.querySelectorAll('.barraLateral');
    
    if (containersMobile.length > 0) {
        containersMobile.forEach(container => {

            if (document.documentElement.lang === 'en') {
                container.innerHTML = textoRepetidoMobileEn;
            } else {
                container.innerHTML = textoRepetidoMobile;
            }
        });
    }
    
    if (containers.length > 0) {
        containers.forEach(container => {

            if (document.documentElement.lang === 'en') {
                container.innerHTML = textoRepetidoEn;
            } else {
                container.innerHTML = textoRepetido;
            }
        });
    }
    mostrarFraseAleatoria();
}

function adicionarCorAleatoria() {

    const elementoUm = document.getElementById("mudarCorUm");
    const elementoDois = document.getElementById("mudarCorDois");
    const elementosTres = document.querySelectorAll(".mudarCorTres");
    const elementoQuatro = document.getElementById("mudarCorQuatro");
    
    if (elementoUm) {
        elementoUm.style.backgroundColor = corAleatoriaA();
    }
    if (elementoDois) {
        elementoDois.style.backgroundColor = corAleatoriaA();
    }
    if (elementoQuatro) {
        elementoQuatro.style.color = corAleatoriaB();
    }
    
    elementosTres.forEach((el, index) => {
        el.style.color = corAleatoriaB();
        
    });

}


document.addEventListener("DOMContentLoaded", () => {
    adicionarTextoBarra();
    adicionarCorAleatoria();
});




