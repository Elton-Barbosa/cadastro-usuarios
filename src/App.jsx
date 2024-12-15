import { Title, Container, TopBackground, Form, ContainerInputs, Input, InputLabel, Butttom } from "./styles";

function home() {
  return (
    <Container>
      <TopBackground>
        <img></img>
      </TopBackground>
      <Form>
        <Title>Cadastrar usuários</Title>

        <ContainerInputs>
          <div>
            <div>
              <InputLabel>
                Nome<span>*</span>
              </InputLabel>
              <Input type="text" placeholder="Nome do Usuário" />
            </div>

            <div>
              <InputLabel>
                Idade<span>*</span>
              </InputLabel>
              <Input type="Number" placeholder="Idade do Usuário" />
            </div>
          </div>

          <div>
            <InputLabel>
              E-mail<span>*</span>
            </InputLabel>
            <Input type="email" placeholder="Email do Usuário" />
          </div>
        </ContainerInputs>

        <Butttom>Cadastrar Usuários</Butttom>
      </Form>
    </Container>
  );
}

export default home;
