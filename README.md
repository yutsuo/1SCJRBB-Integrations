# 1SCJRBB-Integrations

## Trabalho final da Disciplina Integrations e Development Tools

### Descrição

Demonstração de caso de uso de obtenção de dados de drones e integração com ferramentas diversas.

Tecnologias utilizadas:

- Docker
- NodeJS
- RabbitMQ
- Telegram

Para os dados enviados por diversos drones criamos um simulador em NodeJS que cria os drones e os dados de captura.

Os dados são enviados para uma fila RabbitMQ e consumidos por outro microserviço também feito em NodeJS. Este microserviço seleciona os dados passivos de alerta os prepara para envio para um bot do Telegram.

### Instruções para subir o projeto

É necessário que você tenha o Docker e o Docker Compose instalados e funcionando. Você também precisa do Telegram.

1- clonar o Repositório

2- cavegar até a raiz do projeto

3- execute ```docker-compose up```

4- aguarde a subida dos serviços

5- com os serviços funcionando, abra um chat no Telegram com o bot: @fiap_1SCJRBB_bot

6- inicie o chat, o comando inicial ```/start``` já inicializa a transmissão de alertas

7- Você pode interromper o envio de alertas a qualquer momento usando comando ```/stop```

## Equipe

Carlos Mateus Borges Junior - RM344974

Daniel de Oliveira Carvalho - RM344795

Pedro Sant Anna Lima Oliveira - RM344804

Willian Prestes Correia Cellos - RM344812
