import React, {useState} from 'react';
import {Text} from 'react-native';

import {useRoute, RouteProp} from '@react-navigation/native';

import * as S from './styles';
import StocksCard from './components/StocksCard';
import ModalDefault from '../../components/Modal';

interface StocksProps {
  id: string;
  percentual: number;
}

type InvestimentProps = {
  Overview: {
    nome: string;
    saldoTotal: string;
    acoes: StocksProps[];
  };
};

function InvestimentOverview() {
  const [visibleModal, setVisibleModal] = useState(false);
  const route = useRoute<RouteProp<InvestimentProps, 'Overview'>>();
  const item = route.params;

  function accumulatedBalance(numb: number, str: string) {
    const value =
      (numb / 100) * Number(str.replace(/\./, '').replace(/,/, '.'));
    return Number(value).toLocaleString('pt-br', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  return (
    <>
      <S.ContainerList>
        <S.HeaderYellow />

        <S.HeaderWrapper>
          <S.HeaderText>DADOS DO INVESTIMENTO</S.HeaderText>
        </S.HeaderWrapper>
        <S.RowWrapper>
          <S.TitleText>Nome</S.TitleText>
          <S.SubTitleText>{item.nome}</S.SubTitleText>
        </S.RowWrapper>

        <S.RowWrapper>
          <Text>Salto total disponivel</Text>
          <Text>R$ {item.saldoTotal}</Text>
        </S.RowWrapper>
        <S.HeaderWrapper>
          <S.HeaderText>RESGATE DO SEU JEITO</S.HeaderText>
        </S.HeaderWrapper>
        {item.acoes.map(stock => (
          <StocksCard
            stock={stock}
            saldo={accumulatedBalance(stock.percentual, item.saldoTotal)}
            key={stock.id}
          />
        ))}

        <S.TotalPayment>
          <Text>Valor total a resgatar</Text>
          <Text>R$ 12,00</Text>
        </S.TotalPayment>
        <S.Footer
          onPress={() => {
            setVisibleModal(true);
          }}>
          <S.FooterText>CONFIRMAR RESGATE</S.FooterText>
        </S.Footer>
      </S.ContainerList>
      <ModalDefault
        closeModal={() => setVisibleModal(false)}
        visible={visibleModal}
      />
    </>
  );
}
export default InvestimentOverview;
