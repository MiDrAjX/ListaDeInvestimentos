import React, {useCallback, useState} from 'react';

import {useRoute, RouteProp} from '@react-navigation/native';

import * as S from './styles';
import StocksCard from './components/StocksCard';
import ModalTransaction from '../../components/ModalTransaction';

export interface StocksProps {
  id: string;
  percentual: number;
}

export type InvestimentProps = {
  Overview: {
    nome: string;
    saldoTotal: string;
    acoes: StocksProps[];
  };
};

function InvestimentOverview() {
  const [stocksValue, setStocksValue] = useState({});
  const [stocksMaxValue, setStocksMaxValue] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const route = useRoute<RouteProp<InvestimentProps, 'Overview'>>();
  const item = route.params;

  const accumulatedBalance = useCallback((numb: number, str: string) => {
    const value =
      (numb / 100) * Number(str.replace(/\./, '').replace(/,/, '.'));
    return Number(value).toLocaleString('pt-br', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }, []);

  const handleStocksValue = useCallback(
    (stock: string, value: number, maxValue: number) => {
      setStocksMaxValue({
        ...stocksMaxValue,
        [stock]: maxValue,
      });
      return setStocksValue({
        ...stocksValue,
        [stock]: value / 100,
      });
    },
    [stocksValue, stocksMaxValue],
  );

  const valueRedeem = useCallback(() => {
    const value = Object.values(stocksValue);

    const total = value.reduce(
      // eslint-disable-next-line @typescript-eslint/no-shadow
      (total, numero) => Number(total) + Number(numero),
      0,
    );

    return Number(total).toLocaleString('pt-br', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }, [stocksValue]);

  function transaction() {
    Object.keys(stocksValue).map(stock => {
      const transação = {
        nome: stock,
        valor: stocksValue[stock],
        maximo: Number(
          stocksMaxValue[stock].replace(/\./, '').replace(/,/, '.'),
        ),
      };
      setTransactions(oldvalue => [...oldvalue, transação]);
    });

    return setVisibleModal(true);
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
          <S.TitleText>Salto total disponivel</S.TitleText>
          <S.SubTitleText>R$ {item.saldoTotal}</S.SubTitleText>
        </S.RowWrapper>
        <S.HeaderWrapper>
          <S.HeaderText>RESGATE DO SEU JEITO</S.HeaderText>
        </S.HeaderWrapper>

        {item.acoes.map(stock => (
          <StocksCard
            stock={stock}
            saldo={accumulatedBalance(stock.percentual, item.saldoTotal)}
            key={stock.id}
            handleValueStock={handleStocksValue}
            valueStock={stocksValue}
          />
        ))}

        <S.TotalPayment>
          <S.TitleText>Valor total a resgatar</S.TitleText>
          <S.SubTitleText>R$ {valueRedeem()}</S.SubTitleText>
        </S.TotalPayment>
        <S.Footer onPress={transaction}>
          <S.FooterText>CONFIRMAR RESGATE</S.FooterText>
        </S.Footer>
      </S.ContainerList>
      {visibleModal && (
        <ModalTransaction
          closeModal={() => setVisibleModal(false)}
          visible={visibleModal}
          transactions={transactions}
          eraseTrasactions={setTransactions}
        />
      )}
    </>
  );
}
export default InvestimentOverview;
