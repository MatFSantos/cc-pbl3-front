import Head from 'next/head';
import useIndex from '@hooks/pages/useIndex.page';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CircularProgress, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  TextFieldStyled,
  ContainerForm,
  ButtonForm,
  TextForm,
  TextErro,
  ContainerApp,
  TitleContent,
  ContainerContent,
  Content,
  ItemContent,
  ModalStyled,
  ContentModal,
  ContentRoute,
  ContentTextModal,
  TextSuccess,
} from '@styles/pages/index.style';

export default function Home() {
  const {
    company,
    validateCompany,
    erroCompany,
    hasCompany,
    getSugestions,
    trips,
    loadBuy,
    buyTrip,
    modalFlag,
    tripSelectedInfo,
    openModal,
    closeModal,
    origin,
    setOrigin,
    destination,
    setDestination,
    loadSearch,
    searchTrip,
    tripsSearch,
    erroSearch,
    success,
  } = useIndex();
  return (
    <>
      <Head>
        <title>
          {hasCompany ? 'Companhia ' + company : 'Informe a companhia'}
        </title>
      </Head>
      {hasCompany ? (
        <ContainerApp>
          <ContainerContent data-area={'sugestions'}>
            <TitleContent>Sugestoes</TitleContent>
            {trips.map((trip, index) => (
              <Content key={index}>
                <div>
                  <ItemContent>
                    <FlightTakeoffIcon />
                    {trip.origin}
                  </ItemContent>
                  <ItemContent>
                    <FlightLandIcon />
                    {trip.destination}
                  </ItemContent>
                </div>
                <ItemContent>Preço:{trip.price}</ItemContent>
                <div>
                  <ButtonForm
                    variant="contained"
                    onClick={() => buyTrip(trip)}
                    disabled={loadBuy}
                  >
                    {loadBuy && <CircularProgress size={10} />}
                    <ShoppingCartIcon />
                  </ButtonForm>
                  <ButtonForm
                    variant="contained"
                    onClick={() => openModal(trip)}
                  >
                    <InfoIcon />
                  </ButtonForm>
                </div>
              </Content>
            ))}
          </ContainerContent>
          <ContainerContent data-area={'search'}>
            <TitleContent>Pesquisar viagens</TitleContent>
            <ContainerForm>
              <TextForm>Origem:</TextForm>
              <TextFieldStyled
                variant={'outlined'}
                label={'Companhia'}
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                sx={{ width: '170px!important' }}
              />
              <TextForm>Destino:</TextForm>
              <TextFieldStyled
                variant={'outlined'}
                label={'Companhia'}
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                sx={{ width: '170px!important' }}
              />
              <ButtonForm
                variant="contained"
                disabled={!origin || !destination || loadSearch}
                onClick={() => searchTrip(origin, destination)}
              >
                {loadSearch && <CircularProgress size={10} />}Enviar
              </ButtonForm>
            </ContainerForm>
            <TextErro>{erroSearch ? erroSearch : ''}</TextErro>
            <TextSuccess>{success ? success : ''}</TextSuccess>
            <ContainerContent>
              {tripsSearch.map((trip, index) => (
                <Content key={index}>
                  <div>
                    <ItemContent>
                      <FlightTakeoffIcon />
                      {trip.origin}
                    </ItemContent>
                    <ItemContent>
                      <FlightLandIcon />
                      {trip.destination}
                    </ItemContent>
                  </div>
                  <ItemContent>Preço:{trip.price}</ItemContent>
                  <div>
                    <ButtonForm
                      variant="contained"
                      onClick={() => buyTrip(trip)}
                      disabled={loadBuy}
                    >
                      {loadBuy && <CircularProgress size={10} />}
                      <ShoppingCartIcon />
                    </ButtonForm>
                    <ButtonForm
                      variant="contained"
                      onClick={() => openModal(trip)}
                    >
                      <InfoIcon />
                    </ButtonForm>
                  </div>
                </Content>
              ))}
            </ContainerContent>
          </ContainerContent>
          <ModalStyled open={modalFlag} onClose={closeModal} hideBackdrop>
            <div>
              <button onClick={closeModal} style={{ margin: '0 0 0 90%' }}>
                <CloseIcon />
              </button>
              <ContentTextModal>
                <p>
                  Viagem de:{' '}
                  {tripSelectedInfo ? tripSelectedInfo.origin + ' ' : ''}
                  para: {tripSelectedInfo ? tripSelectedInfo.destination : ''}
                </p>
                <p>
                  Preço total: {tripSelectedInfo ? tripSelectedInfo.price : ''}
                </p>
              </ContentTextModal>
              <ContentModal>
                {tripSelectedInfo
                  ? tripSelectedInfo.path.map((route, index) => (
                      <ContentRoute key={index}>
                        <p>Rota: {index + 1}</p>
                        <p>
                          {route.origin}
                          <ArrowForwardIcon />
                          {route.destination}
                        </p>
                        <p>companhia: {route.company}</p>
                        <p>preço: {route.price}</p>
                      </ContentRoute>
                    ))
                  : ''}
              </ContentModal>
            </div>
          </ModalStyled>
        </ContainerApp>
      ) : (
        <ContainerForm>
          <TextForm>Informe a companhia:</TextForm>
          <div>
            <TextFieldStyled
              variant={'outlined'}
              value={company}
              onChange={(e) => validateCompany(e.target.value)}
              label={'Companhia'}
            />
            {erroCompany ? <TextErro>{erroCompany}</TextErro> : ''}
          </div>
          <ButtonForm
            variant="contained"
            disabled={erroCompany || !company ? true : false}
            onClick={() => getSugestions()}
          >
            Enviar
          </ButtonForm>
        </ContainerForm>
      )}
    </>
  );
}
