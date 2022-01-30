import React, {useCallback, useEffect, useState} from 'react';

import {useRoute, RouteProp} from '@react-navigation/native';

import * as S from './styles';
import StocksCard from './components/StocksCard';
import ModalTransaction from './components/ModalTransaction';

export interface StocksProps {
  nome: string;
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
  const [moneyMask, setMoneyMask] = useState({});
  const [errorModal, setErrorModal] = useState(false);
  const [errorRedeem, setErrorRedeem] = useState(false);

  function closingModal() {
    setTransactions([]);
    setErrorModal(false);
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!errorModal) {
      setVisibleModal(false);
      return;
    }
    setMoneyMask({});
    setStocksValue({});
    setVisibleModal(false);
  }

  const handleStocksValue = useCallback(
    (stock: string, value: any, maxValue: number) => {
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

  const formattedMoney = useCallback(
    (e: string, stock: string, maxValue: number) => {
      const value = e.replace(/\D/g, '');
      const formattedmoney = (Number(value) / 100).toLocaleString('pt-br', {
        minimumFractionDigits: 2,
        style: 'currency',
        currency: 'BRL',
      });
      setMoneyMask({...moneyMask, [stock]: String(formattedmoney)});
      setErrorRedeem(false);
      handleStocksValue(stock, value, maxValue);
    },
    [moneyMask, handleStocksValue],
  );

  const accumulatedBalance = useCallback((numb: number, str: string) => {
    const value =
      (numb / 100) * Number(str.replace(/\./, '').replace(/,/, '.'));
    return Number(value).toLocaleString('pt-br', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }, []);

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
    if (valueRedeem() !== '0,00') {
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
    return setErrorRedeem(true);
  }

  useEffect(() => {
    transactions.map((stock: {maximo: number; valor: number; nome: any}) => {
      if (stock.maximo < stock.valor) {
        setErrorModal(true);
      }
    });
  }, [transactions]);

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
            valueStock={stocksValue[stock.nome]}
            formatMoney={formattedMoney}
            showMoney={moneyMask[stock.nome]}
          />
        ))}

        <S.TotalPayment>
          <S.TotalPaymentRow>
            <S.TitleText>Valor total a resgatar</S.TitleText>
            <S.SubTitleText>R$ {valueRedeem()}</S.SubTitleText>
          </S.TotalPaymentRow>
          {errorRedeem && (
            <>
              <S.WarningText>
                Informe algum valor para realizar o resgate
              </S.WarningText>
              <S.RedLine />
            </>
          )}
        </S.TotalPayment>

        <S.Footer onPress={transaction}>
          <S.FooterText>CONFIRMAR RESGATE</S.FooterText>
        </S.Footer>
      </S.ContainerList>
      {visibleModal && (
        <ModalTransaction
          closingModal={closingModal}
          visible={visibleModal}
          transactions={transactions}
          errorModal={errorModal}
        />
      )}
    </>
  );
}
export default InvestimentOverview;
