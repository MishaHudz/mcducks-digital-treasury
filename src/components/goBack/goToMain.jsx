import { GoToMainPage } from './goToMain.styled';

export const GoToMain = () => {
  return (
    <GoToMainPage to="/">
      <svg
        style={{ marginRight: '15px' }}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
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
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
      Main page
    </GoToMainPage>
  );
};
