const t = document.getElementById('txt');
function init(){
    t.innerHTML =`<p>Venha conhecer a nossa loja de animais! Temos uma ampla variedade de rações, brinquedos, acessórios e produtos de higiene para seu pet. Aqui você encontra tudo o que precisa para cuidar bem do seu bichinho de estimação.   Na nossa loja de animais, você encontra os melhores produtos para o seu pet. Trabalhamos com as melhores marcas do mercado, garantindo qualidade e segurança para o seu animal de estimação. Venha conferir!    Quer presentear seu pet com algo especial? Aqui na nossa loja de animais, você encontra os melhores brinquedos e acessórios para deixar o seu bichinho ainda mais feliz. Venha conferir nossas opções de presentes para pets!</p>    <P>Na nossa empresa, sempre prezamos pelo cuidado e respeito aos animais. Acreditamos que cada pet é único e merece ser tratado com carinho e atenção especial. Por isso, nos esforçamos para oferecer serviços de alta qualidade e produtos de primeira linha para garantir o bem-estar dos nossos clientes peludos.    Nossa equipe é formada por profissionais experientes e dedicados, que estão sempre prontos para ajudar você e seu pet da melhor forma possível. Nosso objetivo é proporcionar uma experiência única e positiva para os donos de animais e seus bichinhos.    Além disso, valorizamos a adoção responsável e trabalhamos para ajudar animais abandonados a encontrar um lar amoroso. Acreditamos que cada pet merece uma família que o ame e cuide dele com todo o carinho do mundo.    Se você está procurando uma empresa que preza pelo cuidado e respeito aos animais, venha nos visitar! Estamos sempre prontos para receber você e seu pet com muita alegria e dedicação.</P>    <P>Nós acreditamos que todos os animais merecem amor e cuidado. Por isso, estamos sempre prontos para ajudar pets que precisam de um lar. Se você está procurando um novo companheiro, venha nos visitar e conheça nossos animais disponíveis para adoção.    Quer fazer a diferença na vida de um animal abandonado? Adote um pet e dê a ele uma nova chance de ser feliz. Na nossa loja de animais, você encontra diversos animais disponíveis para adoção responsável. Venha conhecê-los!    Adotar um pet é um ato de amor e responsabilidade. Aqui na nossa loja de animais, incentivamos a adoção responsável e ajudamos animais abandonados a encontrar um lar. Se você quer fazer a diferença na vida de um bichinho, venha nos visitar!</P>
    <P>Além de venda e doação de animais, oferecemos diversos serviços para cuidar do seu pet. Contamos com veterinários experientes, banho e tosa, e adestramento para cães e gatos. Aqui, seu animal de estimação é tratado com carinho e profissionalismo.
    Cuidar do seu pet nunca foi tão fácil! Na nossa loja de animais, você encontra todos os serviços que precisa para manter seu bichinho saudável e feliz. Desde alimentação até serviços de higiene e saúde, estamos prontos para ajudar você a cuidar do seu pet.
    Seu pet merece o melhor atendimento e cuidado. Aqui na nossa loja de animais, oferecemos serviços de alta qualidade para garantir o bem-estar do seu bichinho. Venha nos visitar e conheça nossos serviços de banho e tosa, veterinária, e muito mais!</P>`;
}
const texto = document.getElementById('area-texto');
const doar = document.getElementById('area-doar');
const venda = document.getElementById('area-vendas');
const services = document.getElementById('services');
function sobre(){
    doar.style.display ="none";
    texto.style.display ="flex";
    venda.style.display ="none";
    services.style.display ="none";
}
function vendas(){
    doar.style.display ="none";
    texto.style.display ="none";
    venda.style.display ="flex";
    services.style.display ="none";
}
function Services(){
    doar.style.display ="none";
    texto.style.display ="none";
    venda.style.display ="none";
    services.style.display ="flex";
}
function doa(){
    doar.style.display ="flex";
    texto.style.display ="none";
    venda.style.display ="none";
    services.style.display ="none";
}

var menuItem = document.querySelectorAll('.item-menu')
function Link(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}
menuItem.forEach((item)=>
    item.addEventListener('click',Link)

)


var lista = document.querySelector('#lista')
var menuL = document.querySelector('.menu-lateral')
lista.addEventListener('click',function(){
    menuL.classList.toggle('expandido')
})