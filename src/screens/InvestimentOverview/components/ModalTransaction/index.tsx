import React from 'react';

import * as S from './styles';

function ModalTransaction({closingModal, transactions, errorModal, ...rest}) {
  return (
    <S.Mod transparent={true} {...rest}>
      <S.TransparentContainer>
        <S.Container>
          <S.ContainerText>
            <S.TitleText>
              {errorModal ? 'DADOS INVÁLIDOS' : 'RESGATE EFETUADO!'}
            </S.TitleText>
            {errorModal ? (
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
              {errorModal ? 'CORRIGIR' : 'NOVO RESGATE'}
            </S.FooterText>
          </S.Footer>
        </S.Container>
      </S.TransparentContainer>
    </S.Mod>
  );
}

export default ModalTransaction;
