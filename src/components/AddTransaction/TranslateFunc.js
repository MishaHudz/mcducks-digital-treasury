export const categoryTranslationEnToRu = name => {
  switch (name) {
    case 'Products':
      return 'Продукты';
    case 'Alcohol':
      return 'Алкоголь';
    case 'Entertainment':
      return 'Развлечения';
    case 'Health':
      return 'Здоровье';
    case 'Transport':
      return 'Транспорт';
    case 'Housing':
      return 'Всё для дома';
    case 'Technics':
      return 'Техника';
    case 'Communal, Communication':
      return 'Коммуналка и связь';
    case 'Sports, Hobbies':
      return 'Спорт и хобби';
    case 'Education':
      return 'Образование';
    case 'Other':
      return 'Прочее';
    case 'Salary':
      return 'З/П';
    case 'Additional Income':
      return 'Доп. доход';
    default:
      break;
  }
};

export const categoryTranslationRuToEn = name => {
  switch (name) {
    case 'Продукты':
      return 'Products';
    case 'Алкоголь':
      return 'Alcohol';
    case 'Развлечения':
      return 'Entertainment';
    case 'Здоровье':
      return 'Health';
    case 'Транспорт':
      return 'Transport';
    case 'Всё для дома':
      return 'Housing';
    case 'Техника':
      return 'Technics';
    case 'Коммуналка и связь':
      return 'Communal,Communication';
    case 'Спорт и хобби':
      return 'Sports,Hobbies';
    case 'Образование':
      return 'Education';
    case 'Прочее':
      return 'Other';
    case 'З/П':
      return 'Salary';
    case 'Доп. доход':
      return 'Additional income';
    default:
      break;
  }
};
