import GameSaving from '../GameSaving';
import GameSavingLoader from '../GameSavingLoader';

test('testing GameSavingLoader class when creating a new object of the GameSaving class', async () => {
  const data = await GameSavingLoader.load();
  const hero = new GameSaving(data);
  expect(hero).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  });
});

test('testing GameSavingLoader class for error interception', async () => {
  expect.assertions(1);
  try {
    const data = await GameSavingLoader.load();
    console.log(new GameSaving(data.con));
  } catch (e) {
    expect(e.name).toBe('SyntaxError');
  }
});
