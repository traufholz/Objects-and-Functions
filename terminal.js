function payTerminal(name) {
  const savedName = 'Oleg';
  if (savedName == name) {
    console.log('Привет ' + name);
  } else {
    console.log('Нет такого имени');
  }
}

payTerminal('Oleg')
payTerminal('Artem')
payTerminal('Misha')