export const Titles = [
  "Whose Turn Is It Anyway?",
  "Duck, Duck, Duck, HONK!",
  "Standup Is No Laughing Matter",
];

export const randomTitle = () => {
  const randIndex = Math.floor(Math.random() * Titles.length);

  return Titles[randIndex];
};
