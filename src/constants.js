export const TYPE = ['General', 'Daily', 'Post-construction']
export const BATHROOM = [1, 2, 3, 4]

export const EVENTS = [
  {
    title: 'Невский пр., 114',
    start: new Date(2022, 2, 25, 3),
    end: new Date(2022, 2, 25, 5),
    allDay: false,
    cleaningType: 'General',
    bathNumber: 1,
    windowWashing: 'With'
  },
  {
    title: 'Пл.Александра Невского, 2',
    start: new Date(2022, 2, 16),
    end: new Date(2022, 2, 16),
    allDay: true,
    cleaningType: 'Post-construction',
    bathNumber: 4,
    windowWashing: 'With'
  },

  {
    title: 'Лиговский пр., 162',
    start: new Date(2022, 2, 1, 8),
    end: new Date(2022, 2, 1, 9),
    allDay: false,
    cleaningType: 'General',
    bathNumber: 1,
    windowWashing: 'Without'
  },
  {
    title: 'Театральная пл., 1',
    start: new Date(2022, 2, 11, 15),
    end: new Date(2022, 2, 11, 20),
    allDay: false,
    cleaningType: 'Daily',
    bathNumber: 2,
    windowWashing: 'Without'
  },
  {
    title: 'Петровская наб., 6',
    start: new Date(2022, 2, 7, 13),
    end: new Date(2022, 2, 7, 15),
    allDay: false,
    cleaningType: 'General',
    bathNumber: 1,
    windowWashing: 'With'
  },
  {
    title: 'ул.Саввушкина, 47',
    start: new Date(2022, 2, 28, 10),
    end: new Date(2022, 2, 28, 12),
    allDay: false,
    cleaningType: 'Daily',
    bathNumber: 3,
    windowWashing: 'Without'
  },
  {
    title: 'Петровская наб., 9',
    start: new Date(2022, 2, 19),
    end: new Date(2022, 2, 19),
    cleaningType: 'Post-construction',
    allDay: true,
    bathNumber: 1,
    windowWashing: 'With'
  },
  {
    title: 'Академика Лебедева., 25',
    start: new Date(2022, 2, 8, 7),
    end: new Date(2022, 2, 8, 11),
    allDay: false,
    cleaningType: 'Daily',
    bathNumber: 1,
    windowWashing: 'Without'
  }
]
