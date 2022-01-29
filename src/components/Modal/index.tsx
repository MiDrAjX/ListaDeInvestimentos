import React from 'react';

import * as S from './styles';

function ModalDefault({closeModal, ...rest}) {
  return (
    <S.Mod transparent={true} {...rest}>
      <S.TransparentContainer onPress={closeModal}>
        <S.Container>
          <S.ContainerText>
            <S.TitleText>RESGATE EFETUADO!</S.TitleText>

            <S.SubTitleText>
              O valor solicitado estará em sua conta em até 5 dias úteis!
            </S.SubTitleText>
          </S.ContainerText>

          <S.Footer onPress={closeModal}>
            <S.FooterText>NOVO RESGATE</S.FooterText>
          </S.Footer>
        </S.Container>
      </S.TransparentContainer>
    </S.Mod>
  );
}

export default ModalDefault;
