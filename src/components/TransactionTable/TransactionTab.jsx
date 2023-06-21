import {
  ContainerStyled,
  TableHeadRowStyled,
  TableHeadColumnStyled,
  TableColumnStyled,
  ScrollWrapStyled,
  TableRowStyled,
  WrapStyled,
  ListStyled,
  ItemStyled,
  DescriptStyled,
  DateStyled,
  RightStyled,
  AmountStyled,
  BtnDelStyled,
  CategoryStyled,
  BoxStyled,
  TableStyled,
} from './TransactionTab.styled.js';

import { useMediaQuery } from 'react-responsive';
import icon from '../../images/icon.svg';

const TransactionTable = () => {
  const tableMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const tableData = [
    {
      id: 1,
      date: '2023-06-20',
      description: 'Some description',
      category: 'Some category',
      sum: -100,
    },
  ];

  return (
    <ContainerStyled>
      {!tableMobile ? (
        <>
          <TableStyled>
            <thead>
              <TableHeadRowStyled>
                <TableHeadColumnStyled>DATE</TableHeadColumnStyled>
                <TableHeadColumnStyled>DESCRIPTION</TableHeadColumnStyled>
                <TableHeadColumnStyled>CATEGORY</TableHeadColumnStyled>
                <TableHeadColumnStyled>SUM</TableHeadColumnStyled>
                <TableHeadColumnStyled></TableHeadColumnStyled>
              </TableHeadRowStyled>
            </thead>
          </TableStyled>
          <ScrollWrapStyled>
            <TableStyled>
              <tbody>
                {tableData.map(item => (
                  <TableRowStyled key={item.id}>
                    <TableColumnStyled> {item.date}</TableColumnStyled>
                    <TableColumnStyled>{item.description}</TableColumnStyled>
                    <TableColumnStyled>{item.category}</TableColumnStyled>
                    <TableColumnStyled>{item.sum}</TableColumnStyled>
                    <TableColumnStyled>
                      <BtnDelStyled>
                        <svg>
                          <use href={icon + '#icon-delete'}></use>
                        </svg>
                      </BtnDelStyled>
                    </TableColumnStyled>
                  </TableRowStyled>
                ))}
              </tbody>
            </TableStyled>
          </ScrollWrapStyled>
        </>
      ) : (
        <WrapStyled>
          <ListStyled>
            {tableData.map(item => (
              <ItemStyled key={item.id}>
                <div>
                  <DescriptStyled>{item.description}</DescriptStyled>
                  <BoxStyled>
                    <DateStyled>{item.date}</DateStyled>
                    <CategoryStyled>{item.category}</CategoryStyled>
                  </BoxStyled>
                </div>
                <RightStyled>
                  <AmountStyled>{item.sum}</AmountStyled>
                  <BtnDelStyled>
                    <svg>
                      <use href={icon + '#icon-delete'}></use>
                    </svg>
                  </BtnDelStyled>
                </RightStyled>
              </ItemStyled>
            ))}
          </ListStyled>
        </WrapStyled>
      )}
    </ContainerStyled>
  );
};

export default TransactionTable;
