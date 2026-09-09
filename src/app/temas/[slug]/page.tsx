import Link from 'next/link'
import { notFound } from 'next/navigation'

const conteudos: Record<string, { titulo: string; texto: string }> = {
  'trauma-deciduos': {
    titulo: 'Traumatismo em Dentes Decíduos',
    texto: `O traumatismo dentoalveolar é considerado um problema de saúde pública devido à sua elevada prevalência, à ocorrência em pacientes de pouca idade, ao elevado custo e à longa duração de tratamento.

As causas do traumatismo são multifatoriais variando de acordo com a faixa etária dos indivíduos. A faixa etária mais frequente dos traumatismos na dentição decídua é de 1 a 3 anos de idade, e as quedas são a causa mais comum.

Os dentes superiores são os mais frequentemente atingidos, principalmente os incisivos centrais. As luxações dentárias são os tipos de traumatismo mais comum na dentição decídua, em virtude das estruturas de suporte serem mais resilientes nesta fase.

Os germes dos incisivos permanentes apresentam estreita relação com as raízes de seus antecessores, independente do estágio de desenvolvimento em que o dente permanente se encontre. Por esta razão, deve-se dar muita importância aos traumatismos na dentição decídua, examinando periodicamente o paciente acometido pelo traumatismo, visando detectar precocemente alterações nos dentes decíduos e nos sucessores em desenvolvimento.`
  },
  'exame-radiografico': {
    titulo: 'Exame Radiográfico',
    texto: `O exame radiográfico de dentes decíduos dependerá da habilidade da criança em cooperar com esse procedimento e do tipo de lesão que o dentista suspeita ter ocorrido. Lembrando: proteção contra radiação como avental e colar plumbíferos.

Periapical (usando filme radiográfico no 2 em posição horizontal) fazendo angulação de 90º com feixe central de raios X do dente a ser examinado;

Oclusal (usando filme radiográfico no 2 em posição horizontal);

Extrabucal lateral. Apesar de pouco recomendada, pois raramente indica informações adicionais, pode revelar a relação entre o ápice do decíduo que foi deslocado (direção do deslocamento) e o germe do permanente.`
  },
  'primeiro-atendimento': {
    titulo: 'Primeiro Atendimento',
    texto: `Na maioria das vezes, o paciente com traumatismo dentário agudo chega ao consultório apresentando ferimentos nos tecidos moles, extra e/ou intrabucais contaminados.

Tais ferimentos costumam sangrar muito, o que assusta tanto a criança quanto os pais ou responsáveis. Por isso, antes de realizar qualquer procedimento, o profissional precisa tranquilizar a criança e seus acompanhantes para possibilitar sua colaboração.

A Anamnese deve ser objetiva e direta contemplado: Se a criança está com as vacinas em dia (especialmente a de tétano); se apresenta alguma alergia. Quando, onde e como o trauma aconteceu; em que superfície; presença de hábitos deletérios.

Exame físico, radiográfico quando necessário e indicações aos responsáveis sobre higiene e alimentação. Orientações básicas: Cuidado ao comer para não traumatizar ainda mais o dente lesionado, optando por alimentos mais pastosos e de temperatura gelada/ambiente por 48horas - Para permitir a cura gengival e impedir o acúmulo de placa, os pais devem limpar a área afetada com uma escova macia ou cotonete e aplicar topicamente um enxaguatório bucal de gluconato de clorexidina a 0,1% até 0,2%, sem álcool, duas vezes por dia por uma semana`
  },
  'diagnostico-conduta': {
    titulo: 'Diagnóstico e conduta clínica',
    texto: 'Conteúdo em construção...'
  },
  'possiveis-alteracoes': {
    titulo: 'Possíveis alterações',
    texto: `A alteração de cor da coroa é comum após traumatismos na dentição decídua, sendo observada em aproximadamente 70% dos casos, um mês após algum acidente. Pode ser causada por diversos tipos de traumatismos como subluxação, luxação lateral, luxação intrusiva e luxação extrusiva, ocorrendo em aproximadamente 53% a 63% dos casos após traumatismo nos incisivos superiores decíduos. A conduta clínica mais adequada é a preservação através das consultas de controles clínico e radiográfico, até a erupção completa do sucessor, embora existam opções restauradoras como a realização de facetas estéticas com resina composta.

Retração gengival - A gengiva, a dentina, o cemento e o osso de suporte são tecidos frequentemente acometidos pelo impacto dos traumatismos dentários, mas possuem grande potencial de regeneração. Contudo, alguns dentes decíduos traumatizados podem desenvolver retração gengival, especialmente se houver lesão da gengiva durante o acidente. A maioria dos casos é diagnosticada nos primeiros 2 meses após o acidente, e a conduta clínica deverá incluir, além das consultas de preservação rotineiras, o reforço na técnica de escovação mais adequada para higienização da região atingida.

A obliteração do canal radicular nos dentes decíduos é a condição na qual a polpa dentária reage ao traumatismo depositando dentina, gradual e progressivamente, tanto na câmara pulpar quanto no conduto radicular. Geralmente, esta reação é determinada pelo deslocamento do dente na época do traumatismo e pela ausência de reabsorção fisiológica detectável radiograficamente. O dente apresenta um aumento progressivo na radiopacidade do canal radicular e polpa dentária. A conduta clínica consistirá no controle do dente atingido, através dos exames clínicos e radiográficos periódicos, até a completa erupção do sucessor.

A necrose pulpar é uma alteração muito comum após a luxação intrusiva e pode ser influenciada pelos seguintes fatores: idade do paciente, grau de deslocamento do dente decíduo, mobilidade e ocorrência de fratura coronária e do osso alveolar. O tratamento endodôntico será a conduta clínica mais adequada. Se a contaminação persistir sem tratamento, pode ocorrer a fístula e/ou alveólise na parede vestibular do alvéolo. Seja qual for a conduta clínica adotada, os controles clínico e radiográfico devem ser realizados até a completa erupção do sucessor.

Nas reabsorções inflamatórias, o foco infeccioso pode se localizar interna ou externamente, tanto na câmara quanto no conduto pulpar e, geralmente, ocorre como resposta à necrose pulpar ou à inflamação do ligamento periodontal não tratadas. Radiograficamente, observa-se perda progressiva de substância dentária associada à radiolucidez do osso adjacente. A conduta clínica consistirá no tratamento endodôntico ou na exodontia seguida da manutenção do espaço.

A anquilose é causada por traumatismo que atinge a membrana periodontal, especialmente as luxações intrusivas e laterais, causando inflamação subsequente, associada à invasão de células osteoclásticas. O resultado é a irregularidade nas áreas reabsorvidas da superfície periférica da raiz, ocorrendo fusão entre o osso alveolar e a raiz. Se a anquilose causar retardo na erupção do sucessor ou sua erupção ectópica, deve-se realizar a exodontia do dente decíduo e fazer acompanhamento clínico e radiográfico, até a erupção completa do sucessor.

A perda precoce do dente decíduo pode acontecer por traumatismo, nos casos de avulsão ou no período a ele subsequente. Os aparelhos estético-funcionais são dispositivos protéticos que visam reproduzir a estética e restabelecer as funções fonéticas e mastigatórias. A conduta clínica em todos os casos de traumatismos em dentes decíduos exige a realização de exames clínico e radiográfico até a erupção do sucessor.`
  },
  'como-evitar': {
    titulo: 'Como evitar?',
    texto: `Não deixar crianças muito pequenas sozinhas. O berço e o cercadinho são os únicos locais seguros para o bebê ficar só.

Não usar andador com rodas, preferir o cercadinho. O uso de andadores não é aconselhado pela Sociedade Brasileira de Pediatria. Além de comprometer o desenvolvimento saudável da criança, pode causar sérias quedas.

Adquirir móveis com pontas arredondadas ou fazer uso de pontas de silicone (protetores de quinas vendidas em lojas especializadas em bebês).

Manter uma mão em contato com o bebê durante a troca as fraldas. Não deixar o bebê sozinho em mesas, camas ou outros móveis.

Ter cuidado com pisos escorregadios. Colocar antiderrapante nos tapetes da casa. A criança só deve andar com meias se elas possuírem antiderrapante.

Evitar brinquedos com pontas ou arestas que possam cortar a boca ou quebrar os dentes.

Observar sempre se os cordões dos sapatos das crianças estão atados.

Usar a cadeirinha para o bebê em todas as viagens de carro, desde a saída da maternidade. Bebês devem viajar no "bebê-conforto", instalado de costas para o movimento do veículo, até completarem um ano de idade. Nunca colocar a criança no banco da frente do carro. O uso correto da cadeirinha reduz em 71% o risco de morte em caso de acidentes.

Abaixar o estrado do berço quando a criança começar a mostrar movimentos de sentar ou ficar em pé.

Crianças com dentes projetados para frente têm mais chances de sofrer traumatismo. A remoção do hábito da chupeta e da mamadeira, antes dos 3 anos de idade, contribuirá para a redução da posição dentária desfavorável.

As quedas nos parquinhos representam a principal causa de hospitalização de crianças de 1 a 14 anos. As regras de comportamento nos parquinhos são: não empurrar e nem se amontoar durante as brincadeiras. Mostrar quais são os equipamentos apropriados para a faixa etária de cada criança. Quando uma criança utiliza brinquedos feitos para faixa etária diferente da sua, o risco de acidentes aumenta.

As bicicletas devem ser do tamanho apropriado para cada faixa etária. Os pés da criança devem alcançar o chão enquanto ela estiver sentada. Deve-se evitar andar em terrenos muito acidentados e utilizar proteção apropriada como capacete e protetor bucal.

O adulto deve supervisionar de forma constante as crianças e os adolescentes perto das piscinas, mesmo que eles saibam nadar ou que a piscina seja considerada rasa. Segundo a Sociedade Brasileira de Pediatria 89% das crianças não têm supervisão durante o banho de piscina. Deve-se também evitar brincadeiras perto da piscina. O piso molhado pode causar quedas. Ao entrar e sair da piscina utilizar corretamente a escada.

Orientar a criança a sempre utilizar roupas adequadas e proteção apropriada, como capacete, joelheiras, cotoveleiras e protetor bucal, ao andar de patins ou skate. Incentivar a prática dessas atividades em locais apropriados e seguros.

Nas práticas esportivas é muito importante a utilização do protetor bucal. Esportes como futebol, lutas, basquetebol, voleibol e handebol podem causar traumatismos dentários devido ao impacto com outros atletas. O uso de protetores bucais na prática esportiva reduz em até 80% o risco de perda dentária.

Orientar as crianças a não empurrar ou assustar colegas que estiverem utilizando o bebedouro.

Evitar os movimentos bruscos quando bebidas forem tomadas diretamente na garrafa.

Ter cuidado com a manipulação de instrumentos de sopro, quando estiverem em contato com a boca.

Sempre utilizar o cinto de segurança quando estiver em automóveis. Cintos de segurança e correias de ombros não devem ser utilizados em crianças com menos de 1,35m.

Ao subir e descer do transporte coletivo, fazê-lo de maneira adequada, sem correr, para evitar quedas.`
  }
}

export async function generateStaticParams() {
  // 'diagnostico-conduta' tem rota estatica propria (com submenu) e nao entra aqui
  return Object.keys(conteudos)
    .filter((slug) => slug !== 'diagnostico-conduta')
    .map((slug) => ({ slug }))
}

export default async function TemaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const conteudo = conteudos[slug]

  if (!conteudo) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center sm:p-4">
      {/* Container mobile centralizado */}
      <div className="w-full max-w-[375px] min-h-screen bg-white shadow-lg relative flex flex-col">
        
        {/* Título centralizado */}
        <div className="bg-white px-6 py-8 text-center border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">
            {conteudo.titulo}
          </h1>
        </div>

        {/* Área de conteúdo */}
        <div className="flex-1 bg-white px-6 py-6">
          <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm">
            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
              {conteudo.texto}
            </p>
          </div>
        </div>

        {/* Botão Voltar ao Menu */}
        <div className="sticky bottom-0 z-10 bg-white px-6 pt-6 before:pointer-events-none before:absolute before:inset-x-0 before:-top-6 before:h-6 before:bg-gradient-to-t before:from-white before:to-transparent pb-[calc(1.5rem+env(safe-area-inset-bottom))] border-t border-gray-200">
          <div className="flex justify-end">
            <Link 
              href="/temas"
              className="inline-flex items-center justify-center w-1/2 bg-[#8BC34A] text-gray-900 py-3 px-6 rounded-lg font-medium text-base hover:bg-[#7AB23A] transition-colors"
            >
              Voltar ao Menu
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}