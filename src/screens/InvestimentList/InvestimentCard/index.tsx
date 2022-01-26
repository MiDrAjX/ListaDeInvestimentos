import React from 'react';
import * as S from './styles';

import formatMoney from '../../../utils/formatMoney';

function InvestimentCard({item}) {
  return (
    <S.Container>
      {item && (
        <>
          <S.ContainerInfo>
            <S.ContainerSpaceBetween>
              <S.TitleText>{item.nome}</S.TitleText>
              <S.TitleText>{formatMoney(item.saldoTotal)}</S.TitleText>
            </S.ContainerSpaceBetween>
            <S.SubTitleText>{item.objetivo}</S.SubTitleText>
          </S.ContainerInfo>
        </>
      )}
    </S.Container>
  );
}
export default InvestimentCard;
