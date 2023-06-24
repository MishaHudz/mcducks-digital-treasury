import {
  ContainerStyled,
  TableHeadRowStyled,
  TableHeadColumnStyled,
  TableColumnStyled,
  TableList,
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
import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalTransaction from 'components/ModalTransaction/ModalTransaction';
import {
  selectExpenses,
  selectIncome,
  selectFilterDate,
} from 'store/transactionsSelectors.jsx';
import { selectionExpenses, selectionIncome } from './categories.js';
import { deleteTransaction } from 'store/transactionsOperations.jsx';
import { useSearchParams } from 'react-router-dom';

const TransactionTable = () => {
  const dispatch = useDispatch();
  const expenses = useSelector(selectExpenses);
  const incomes = useSelector(selectIncome);
  const dateFilter = useSelector(selectFilterDate);
  const [searchParams] = useSearchParams();
  const status = searchParams.get('operation');

  const [del, setDel] = useState([]);
  const categories = [...selectionExpenses, ...selectionIncome];

  const transactionExpense = useMemo(() => {
    return expenses.filter(el => el.date.includes(dateFilter));
  }, [dateFilter, expenses]);

  const transactionIncome = useMemo(() => {
    return incomes.filter(el => el.date.includes(dateFilter));
  }, [dateFilter, incomes]);

  const transaction =
    status === 'income' ? transactionIncome : transactionExpense;

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleOpen = data => {
    setDel(data);
    setShowModal(true);
  };

  const handleDelete = () => {
    dispatch(deleteTransaction(del));
    setShowModal(false);
  };

  const initialRowsCount = 9;
  const initialRows = Array(Math.max(initialRowsCount - transaction.length, 0))
    .fill(null)
    .map((_, index) => ({
      _id: `empty-${transaction.length + index}`,
      date: '',
      description: '',
      category: '',
      amount: '',
      hasTransaction: false,
    }));

  const transactions = [
    ...transaction.map(item => ({ ...item, hasTransaction: true })),
    ...initialRows,
  ];

  const mobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <ContainerStyled>
      {!mobile ? (
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
          <TableList>
            <TableStyled>
              <tbody>
                {transactions.map(item => (
                  <TableRowStyled key={item._id}>
                    <TableColumnStyled> {item.date}</TableColumnStyled>
                    <TableColumnStyled>{item.description}</TableColumnStyled>
                    <TableColumnStyled>
                      {categories
                        .filter(
                          ({ value, label, trans }) => trans === item.category
                        )
                        .map(el => el.label)
                        .join()}
                    </TableColumnStyled>
                    <TableColumnStyled data-color={status}>
                      {item.amount === ''
                        ? ''
                        : status === 'income'
                        ? `${item.amount.toFixed(2)} UAH.`
                        : `-${item.amount.toFixed(2)} UAH.`}
                    </TableColumnStyled>
                    <TableColumnStyled>
                      <BtnDelStyled
                        type="button"
                        onClick={() => handleOpen([item._id, status])}
                        style={{
                          display: item.hasTransaction ? 'block' : 'none',
                        }}
                      >
                        <svg>
                          <use href={icon + '#icon-delete'}></use>
                        </svg>
                      </BtnDelStyled>
                    </TableColumnStyled>
                  </TableRowStyled>
                ))}
              </tbody>
            </TableStyled>
          </TableList>
          {showModal && (
            <ModalTransaction onClose={handleClose} onConfirm={handleDelete} />
          )}
        </>
      ) : (
        <TableList>
          <WrapStyled>
            <ListStyled>
              {transaction.map(item => (
                <ItemStyled key={item._id}>
                  <div>
                    <DescriptStyled>{item.description}</DescriptStyled>
                    <BoxStyled>
                      <DateStyled>{item.date}</DateStyled>
                      <CategoryStyled>
                        {categories
                          .filter(
                            ({ value, label, trans }) => trans === item.category
                          )
                          .map(el => el.label)
                          .join()}
                      </CategoryStyled>
                    </BoxStyled>
                  </div>
                  <RightStyled>
                    <AmountStyled data-color={status}>
                      {item.amount === ''
                        ? ''
                        : status === 'income'
                        ? `${item.amount.toFixed(2)} UAH.`
                        : `-${item.amount.toFixed(2)} UAH.`}
                    </AmountStyled>
                    <BtnDelStyled
                      type="button"
                      onClick={() => handleOpen([item._id, status])}
                    >
                      <svg>
                        <use href={icon + '#icon-delete'}></use>
                      </svg>
                    </BtnDelStyled>
                  </RightStyled>
                </ItemStyled>
              ))}
            </ListStyled>
          </WrapStyled>
        </TableList>
      )}
      {showModal && (
        <ModalTransaction onClose={handleClose} onConfirm={handleDelete} />
      )}
    </ContainerStyled>
  );
};

export default TransactionTable;
