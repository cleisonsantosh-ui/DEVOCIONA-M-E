var res = {};

function ir(n) {
    document.querySelectorAll('.screen').forEach(function(s) {
        s.classList.remove('active');
    });
    var el = document.getElementById('s' + n);
    if (el) {
        el.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'instant' });
    }
}

function responder(pergunta, valor) {
    res['q' + pergunta] = valor;

    if (pergunta < 5) {
        ir(pergunta + 1);
    } else {
        ir(6);
        setTimeout(function () {
            mostrarOferta();
        }, 3000);
    }
}

function mostrarOferta() {
    var blocos = {
        A: [
            { t: "Nao e tarde demais. Deus esta preparando o caminho de volta do seu filho — e voce tem um papel nisso.", s: "A distancia que voce sente hoje pode ser exatamente o inicio da restauracao que voce esta pedindo em oracao." },
            { t: "O seu filho ainda nao terminou a historia que Deus escreveu para ele.", s: "Descubra como orar de forma direcionada para reacender o chamado que ainda esta vivo dentro dele." },
            { t: "Filho distante nao e filho perdido.", s: "Existe uma diferenca entre afastamento e perdicao — e sua oracao pode fazer essa diferenca." }
        ],
        B: [
            { t: "Mae, o seu filho nao nasceu para o cativeiro. E a sua oracao pode ser a porta que o traz de volta.", s: "Assim como aconteceu com milhares de maes antes de voce, existe um caminho de oracao especifico para essa batalha." },
            { t: "Deus ja libertou filhos de situacoes piores que essa. O seu nao e excecao.", s: "Descubra o roteiro de oracao direcionada que ja ajudou mais de 4.800 maes a lutarem pela liberdade dos filhos." },
            { t: "A prisao que voce ve hoje nao e a sentenca final da vida do seu filho.", s: "Existe uma forma de orar que quebra cativeiros especificos — e ela e diferente da oracao generica que voce talvez ja tenha tentado." }
        ],
        C: [
            { t: "O filho que mais te causa dor hoje pode ser o que vai trazer mais alegria a sua alma amanha.", s: "A rebeldia que voce enfrenta em casa tem uma raiz espiritual — e uma oracao especifica para essa raiz." },
            { t: "Confronto nao trouxe seu filho de volta. Talvez a direcao da sua oracao precise mudar.", s: "Descubra por que orar mais nem sempre funciona — e o que muda quando voce ora certo." },
            { t: "Por tras de toda rebeldia, existe uma porta espiritual aberta que precisa ser fechada em oracao.", s: "Um roteiro guiado para identificar e cobrir exatamente essa area da vida do seu filho." }
        ],
        D: [
            { t: "Voce nao precisa entender tudo para comecar a orar certo.", s: "Esse sentimento de distancia que voce nao consegue nomear ja e o suficiente para comecar hoje." },
            { t: "As vezes a alma sente antes da mente entender. Confie nesse chamado.", s: "Um roteiro de 21 dias para transformar essa inquietacao em intercessao direcionada." },
            { t: "A intuicao de mae raramente esta errada. E a Biblia te da as ferramentas para agir sobre ela.", s: "Descubra como orar com direcao mesmo quando voce nao sabe exatamente o que esta acontecendo." }
        ]
    };

    var bloco = res.q1 || 'A';
    var lista = blocos[bloco];
    var pick = lista[Math.floor(Math.random() * 3)];

    var dyn = document.getElementById('dyn-hl');
    dyn.innerHTML = '<h2>' + pick.t + '</h2><p>' + pick.s + '</p>';

    ir(7);
}

// Checkout
document.getElementById('ck-form').addEventListener('submit', function (e) {
    e.preventDefault();
    ir(9);
});

// Mascara WhatsApp
var wpp = document.getElementById('ck-wpp');
if (wpp) {
    wpp.addEventListener('input', function (e) {
        var v = e.target.value.replace(/\D/g, '');
        if (v.length > 6) {
            v = '(' + v.slice(0, 2) + ') ' + v.slice(2, 7) + '-' + v.slice(7, 11);
        } else if (v.length > 2) {
            v = '(' + v.slice(0, 2) + ') ' + v.slice(2);
        } else if (v.length > 0) {
            v = '(' + v;
        }
        e.target.value = v;
    });
}
