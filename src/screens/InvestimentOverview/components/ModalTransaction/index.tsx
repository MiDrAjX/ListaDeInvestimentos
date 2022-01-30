import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';

import * as S from './styles';

function ModalTransaction({
  closeModal,
  transactions,
  eraseTrasactions,
  ...rest
}) {
  const [error, setError] = useState([]);

  const navigation = useNavigation();
  useEffect(() => {
    transactions.map(oxente => {
      if (oxente.maximo < oxente.valor) {
        setError(oldvalue => [...oldvalue, {[oxente.nome]: oxente.maximo}]);
      }
    });
  }, [transactions]);

  function closingModal() {
    setError([]);
    eraseTrasactions([]);
    if (error.length > 0) {
      closeModal();
      return;
    }
    navigation.goBack();
  }
  return (
    <S.Mod transparent={true} {...rest}>
      <S.TransparentContainer>
        <S.Container>
          <S.ContainerText>
            <S.TitleText>
              {error.length > 0 ? 'DADOS INVÁLIDOS' : 'RESGATE EFETUADO!'}
            </S.TitleText>
            {error.length > 0 ? (
              <>
                <S.ErrorText>
                  Você preencheu um ou mais campos com valor acima do permitido:
                </S.ErrorText>

                {transactions.map(
                  (item: {valor: number; maximo: number; nome: string}) =>
                    item.valor > item.maximo && (
                      <S.ErrorText key={item.nome}>
                        {`${item.nome} Valor máximo de R$ ${Number(
                          item.maximo,
                        ).toLocaleString('pt-br', {
                          minimumFractionDigits: 2,
                        })}`}
                      </S.ErrorText>
                    ),
                )}
              </>
            ) : (
              <S.SubTitleText>
                O valor solicitado estará em sua conta em até 5 dias úteis!
              </S.SubTitleText>
            )}
          </S.ContainerText>

          <S.Footer onPress={closingModal}>
            <S.FooterText>
              {error.length > 0 ? 'CORRIGIR' : 'NOVO RESGATE'}
            </S.FooterText>
          </S.Footer>
        </S.Container>
      </S.TransparentContainer>
    </S.Mod>
  );
}

export default ModalTransaction;
