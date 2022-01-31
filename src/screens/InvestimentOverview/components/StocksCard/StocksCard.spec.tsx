import React from 'react';

import {render} from '@testing-library/react-native';

import StockCard from '.';

describe('StocksCard component', () => {
  it('should load stock info and show a warning massage because the withdrawal value greater than available ', () => {
    const stock = {
      nome: 'nft do zezinho',
      id: '1',
      percentual: 0.3,
    };
    const {getByTestId, queryByText} = render(
      <StockCard
        stock={stock}
        saldo={'1.090,50'}
        key={1}
        valueStock={5000.0}
        formatMoney={() => {}}
        showMoney={'R$ 5.000,00'}
      />,
    );
    const titleText = getByTestId('stock-name');

    const moneyValue = getByTestId('input-money');

    const errorText = getByTestId('text-error');

    const balanceText = queryByText('R$ 1.090,50');

    expect(titleText.props.children).toContain('nft do zezinho');

    expect(balanceText).toBeTruthy();

    expect(moneyValue.props.value).toContain('R$ 5.000,00');

    expect(errorText).toBeTruthy();
  });

  it('should load stock info and not show a warning massage', () => {
    const stock2 = {
      nome: 'nft do zezinho',
      id: '1',
      percentual: 0.3,
    };
    const {getByTestId, queryByTestId, queryByText} = render(
      <StockCard
        stock={stock2}
        saldo={'6.090,50'}
        key={1}
        valueStock={5000.0}
        formatMoney={() => {}}
        showMoney={'R$ 5.000,00'}
      />,
    );
    const titleText = getByTestId('stock-name');

    const balanceText = queryByText('R$ 6.090,50');

    const moneyValue = getByTestId('input-money');

    const errorText = queryByTestId('text-error');

    expect(titleText.props.children).toContain('nft do zezinho');

    expect(moneyValue.props.value).toContain('R$ 5.000,00');

    expect(balanceText).toBeTruthy();

    expect(errorText).toBeNull();
  });
});
