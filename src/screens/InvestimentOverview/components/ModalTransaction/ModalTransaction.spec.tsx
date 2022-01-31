import React from 'react';

import {render} from '@testing-library/react-native';

import ModalTransaction from '.';

describe('ModalTransaction component', () => {
  it('Should render a success Modal ', () => {
    const transactions = [
      {nome: 'oi', valor: 150, maximo: 200},
      {nome: 'bb', valor: 1500, maximo: 2000},
      {nome: 'Coopersystem', valor: 7000, maximo: 10000},
    ];
    const {queryByText} = render(
      <ModalTransaction
        closingModal={() => {}}
        visible={true}
        transactions={transactions}
        errorModal={false}
      />,
    );

    const titleText = queryByText('RESGATE EFETUADO!');
    const subtitleText = queryByText(
      'O valor solicitado estará em sua conta em até 5 dias úteis!',
    );

    expect(titleText).toBeTruthy();
    expect(subtitleText).toBeTruthy();
  });
  it('Should render a Error Modal ', () => {
    const transactions = [
      {nome: 'oi', valor: 1000, maximo: 200},
      {nome: 'bb', valor: 15000, maximo: 2000},
      {nome: 'Coopersystem', valor: 7000, maximo: 10000},
    ];
    const {queryByText} = render(
      <ModalTransaction
        closingModal={() => {}}
        visible={true}
        transactions={transactions}
        errorModal={true}
      />,
    );

    const titleText = queryByText('CORRIGIR');

    const subtitleText = queryByText(
      'Você preencheu um ou mais campos com valor acima do permitido:',
    );

    const firstErrorText = queryByText('oi Valor máximo de R$ 200,00');

    const secondErrorText = queryByText('bb Valor máximo de R$ 2.000,00');

    const notErrorText = queryByText(
      'Coopersystem Valor máximo de R$ 2.000,00',
    );

    expect(titleText).toBeTruthy();

    expect(subtitleText).toBeTruthy();

    expect(firstErrorText).toBeTruthy();

    expect(secondErrorText).toBeTruthy();

    expect(notErrorText).toBeFalsy();
  });
});
