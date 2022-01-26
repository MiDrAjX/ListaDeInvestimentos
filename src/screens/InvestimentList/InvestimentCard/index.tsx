import React from 'react';
import * as S from './styles';

function InvestimentCard({item}) {
  return (
    <S.Container>
      {item && (
        <>
          <S.ContainerInfo>
            <S.ContainerSpaceBetween>
              <S.TitleText>{item.nome}</S.TitleText>
            </S.ContainerSpaceBetween>
            <S.SubTitleText>{item.objetivo}</S.SubTitleText>
          </S.ContainerInfo>
        </>
      )}
    </S.Container>
  );
}
export default InvestimentCard;
