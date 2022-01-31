import React from 'react';

import {render} from '@testing-library/react-native';

import {InvestimentCard} from '.';

describe('InvestimentCard component', () => {
  it('should have the title name, balance and objective correctly rendered in the card ', () => {
    const item = {
      nome: 'joão',
      objetivo: 'Virar cantor',
      saldoTotal: '15.000,00',
      indicadorCarencia: 'N',
    };
    const {getByTestId} = render(
      <InvestimentCard item={item} handleListAcess={() => {}} />,
    );

    const titleText = getByTestId('name');
    const balanceText = getByTestId('total-balance');
    const objectiveText = getByTestId('objective');

    expect(titleText.props.children).toContain('joão');
    expect(balanceText.props.children).toContain('15.000,00');
    expect(objectiveText.props.children).toContain('Virar cantor');
  });
});
