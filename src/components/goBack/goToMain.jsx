import { useMediaQuery } from 'react-responsive';
import { GoToMainPage } from './goToMain.styled';
import { Text } from './goToMain.styled';
export const GoToMain = () => {
  const isMobile = useMediaQuery({ query: '(max-width:767px)' });
  return (
    <GoToMainPage to={{ pathname: '/', search: 'operation=expences' }}>
      <svg
        style={(isMobile && { marginRight: '0px' }) || { marginRight: '15px' }}
        xmlns="http://www.w3.org/2000/svg"
        width={(isMobile && '18px') || '24px'}
        height={(isMobile && '18px') || '24px'}
        viewBox="0 0 24 24"
        fill="none"
      >
        <g id="keyboard_backspace-24px 1" clipPath="url(#clip0_15_1344)">
          <path
            id="Vector"
            d="M21 11H6.83L10.41 7.41L9 6L3 12L9 18L10.41 16.59L6.83 13H21V11Z"
            fill="#F6F7FB"
          />
        </g>
        <defs>
          <clipPath id="clip0_15_1344">
            <rect
              width={(isMobile && '18px') || '24px'}
              height={(isMobile && '18px') || '24px'}
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
      {(isMobile && <Text>to transaction</Text>) || <Text>Main page</Text>}
    </GoToMainPage>
  );
};
