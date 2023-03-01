import Header from "./Header";
const virtueChapters = [
  "The Praise of God",
  "The Blessing of Rain",
  "The Greatness of Ascetics",
  "Assertion of the Strength of Virtue",
  "Domestic Life",
  "The Worth of a Wife",
  "The Wealth of Children",
  "The Possession of Love",
  "Hospitality",
  "The Utterance of Pleasant Words",
  "Gratitude",
  "Impartiality",
  "The Possession of Self-restraint",
  "The Possession of Decorum",
  "Not Coveting another's Wife",
  "The Possession of Patience, Forbearance",
  "Not Envying",
  "Not Coveting",
  "Not Backstabbing",
  "Against Vain Speaking",
  "Dread of Evil Deeds",
  "Duty to Society",
  "Giving",
  "Being Renown",
  "Compassion",
  "Abstinence from Meat",
  "Penance",
  "Imposture",
  "The Absence of Fraud",
  "Veracity",
  "Restraining Anger",
  "Not doing Evil",
  "Not Killing",
  "Instability",
  "Renunciation",
  "Truth-Conciousness",
  "Curbing of Desire",
  "Fate",
];

const wealthChapters = [
  "The Greatness of a King",
  "Learning",
  "Ignorance",
  "Hearing",
  "The Possession of Knowledge",
  "The Correction of Faults",
  "Seeking the Aid of Great Men",
  "Avoiding wrong Associations",
  "Acting after due Consideration",
  "The Knowledge of Power",
  "Knowing the fitting Time",
  "Knowing the Place",
  "Selection and Confidence",
  "Selection and Employment",
  "Cherishing Kinsmen",
  "Unforgetfulness",
  "The Right Sceptre",
  "The Cruel Sceptre",
  "Absence of Terrorism",
  "Benignity",
  "Detectives",
  "Energy",
  "Unsluggishness",
  "Manly Effort",
  "Hopefulness in Trouble",
  "The Office of Minister of state",
  "Power of Speech",
  "Purity in Action",
  "Power in Action",
  "Modes of Action",
  "The Envoy",
  "Conduct in the Presence of the King",
  "The Knowledge of Indications",
  "The Knowledge of the Council Chamber",
  "Not to dread the Council",
  "The Land",
  "The Fortification",
  "Way of Accumulating Wealth",
  "The Excellence of an Army",
  "Military Spirit",
  "Friendship",
  "Investigation in forming Friendships",
  "Familiarity",
  "Evil Friendship",
  "Unreal Friendship",
  "Folly",
  "Ignorance",
  "Hostility",
  "The Might of Hatred",
  "Knowing the Quality of Hate",
  "Enmity within",
  "Not Offending the Great",
  "Being led by Women",
  "Wanton Women",
  "Not Drinking Palm-Wine",
  "Gambling",
  "Medicine",
  "Nobility",
  "Honour",
  "Greatness",
  "Perfectness",
  "Courtesy",
  "Wealth without Benefaction",
  "Shame",
  "The Way of Maintaining the Family",
  "Farming",
  "Poverty",
  "Mendicancy",
  "The Dread of Mendicancy",
  "Baseness",
];

const loveChapters = [
  "The Pre-marital love",
  "Recognition of the Signs",
  "Rejoicing in the Embrace",
  "The Praise of her Beauty",
  "Declaration of Love's special Excellence",
  "The Abandonment of Reserve",
  "The Announcement of the Rumour",
  "Separation unendurable",
  "Complainings",
  "Eyes consumed with Grief",
  "The Pallid Hue",
  "The Solitary Anguish",
  "Sad Memories",
  "The Visions of the Night",
  "Lamentations at Eventide",
  "Wasting Away",
  "Soliloquy",
  "Reserve Overcome",
  "Mutual Desire",
  "The Reading of the Signs",
  "Desire for Reunion",
  "Expostulation with Oneself",
  "Pouting",
  "Feigned Anger",
  "The Pleasures of Temporary Variance",
];

export default function ChapterTitle({
  kuralNumber,
  bookNumber,
  chapterNumber,
}) {
  let chapterTitle = "";
  let chapterNum = chapterNumber;
  if (bookNumber && chapterNumber) {
    if (bookNumber === 1) {
      chapterTitle = virtueChapters[chapterNumber - 1];
    } else if (bookNumber === 2) {
      chapterTitle = wealthChapters[chapterNumber - 1];
    } else if (bookNumber === 3) {
      chapterTitle = loveChapters[chapterNumber - 1];
    }
  } else if (kuralNumber) {
    kuralNumber = kuralNumber % 1331;
    chapterNumber = Math.ceil(kuralNumber / 10);
    if (chapterNumber <= 38) {
      chapterTitle = virtueChapters[chapterNumber - 1];
    } else if (chapterNumber <= 108) {
      chapterTitle = wealthChapters[chapterNumber - 38 - 1];
    } else if (chapterNumber <= 133) {
      chapterTitle = loveChapters[chapterNumber - 108 - 1];
    } else {
      chapterTitle = "The End";
    }
  }
  return <Header title={`Chapter ${chapterNumber}: ${chapterTitle}`}>
  </Header>;
}
