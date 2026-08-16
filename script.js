const decisionInput = document.querySelector('#decision-input');
const analyzeButton = document.querySelector('#analyze-button');
const resultSection = document.querySelector('#result');
const resultGrid = document.querySelector('#result-grid');

const buildDemoAnalysis = (decision) => [
  {
    title: 'Проблема',
    items: [
      `Нужно принять решение: «${decision}».`,
      'Важно отделить желаемый результат от давления момента.',
    ],
  },
  {
    title: 'Факты',
    items: [
      'Зафиксируйте проверяемые данные: сроки, бюджет, ограничения и доступные ресурсы.',
      'Отметьте, какие факты уже подтверждены, а какие требуют уточнения.',
    ],
  },
  {
    title: 'Предположения',
    items: [
      'Опишите ожидания, которые пока не доказаны фактами.',
      'Проверьте самое рискованное предположение маленьким экспериментом или разговором.',
    ],
  },
  {
    title: 'Варианты',
    items: [
      'Вариант A: действовать сейчас и ограничить масштаб решения.',
      'Вариант B: отложить решение до получения недостающей информации.',
      'Вариант C: выбрать компромиссный пилотный шаг.',
    ],
  },
  {
    title: 'Риски',
    items: [
      'Поспешное решение может привести к неверной оценке последствий.',
      'Слишком долгое ожидание может закрыть часть возможностей.',
    ],
  },
  {
    title: 'Следующий шаг',
    items: [
      'Сформулируйте один проверочный вопрос и назначьте срок его проверки.',
      'Вернитесь к записи после получения новых данных и обновите вывод.',
    ],
  },
];

const renderAnalysis = (analysis) => {
  resultGrid.replaceChildren();

  analysis.forEach(({ title, items }) => {
    const card = document.createElement('article');
    card.className = 'card';

    const heading = document.createElement('h3');
    heading.textContent = title;

    const list = document.createElement('ul');
    items.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      list.append(listItem);
    });

    card.append(heading, list);
    resultGrid.append(card);
  });
};

analyzeButton.addEventListener('click', () => {
  const decision = decisionInput.value.trim() || 'решение пока не сформулировано';
  renderAnalysis(buildDemoAnalysis(decision));
  resultSection.classList.remove('hidden');
  resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
