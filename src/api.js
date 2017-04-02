const data = [
    {
      theme: 'orange',
      link: 'detecting-people-in-video',
      title: 'Детектирование и трекинг людей на видеоряде',
      date: '2017-03-20',
      time: '17:30',
      annotation: `
        Никто не знает, что там расскажут, но обязательно приходите —
        анализ видео очень востребован сегодня.
      `
    },

    {
      theme: 'blue',
      link: 'data-science-meetup',
      title: 'Data Science Meetup',
      date: '2017-03-04',
      time: '16:00',
      annotation: `
          Всего будет четыре доклада, один из которых для новичков,
          поэтому туса мехмата собирается там.
          Подробнее: <a href="http://vk.com/dsmt61">vk.com/dsmt61</a>.
        `
    },

    {
      link: 'speech-recognition-with-HMM',
      theme: 'green',
      title: 'Распознавание речи на основе скрытых марковских моделей',
      date: '2017-02-20',
      time: '17:30',
      place: '212',
      annotation: `
        Докладчик расскажет о СММ, проблемах в распознавании речи,
        и о библиотеках, которыми можно пользоваться уже сейчас.
      `,
      text: `
          Мы обсудили алгоритмы обучения СММ и проблемы в распознавании речи.
          Почти ничего не было понятно, но зато мы написали красивое решение-однострочник,
          так что теперь можно смело начинать заниматься областью.

          <a href="http://forum.mmcs.sfedu.ru/t/seminar-ko-kompyuternomu-zreniyu-i-obrabotke-izobrazhenij/678/56">
            Материалы к семинару</a>.

          <div class="img" style="background-image: url(https://pbs.twimg.com/media/C5H9B0MWIAMtcSa.jpg:large)"></div>
          <div style="text-align:center"><i>то самое решение</i></div>
        `,
      authors: [
        { name: 'Дмитрий Свиридкин', ava: 'https://pbs.twimg.com/profile_images/826897257689649154/JWf5zVTT.jpg' }
      ]
    },

    {
      link: '47hours',
      theme: 'violet',
      title: 'VR & AR хакатон',
      date: '2017-04-02',
      time: '16:30',
      place: '311',
      annotation: `Это супер крутой хакатон на 47 часов.<br>Но есть один минус: он в Таганроге.`
    },

    {
      link: 'cat',
      theme: 'gray',
      title: 'Теория Категорий',
      date: '2017-4-28',
      time: '16:30',
      place: '311',
      annotation: `
          Курс посвящён <a href="#">абстрактной фигне</a>, которую никто никак не сможет применить в реальной жизни.
          Будет полезно, но это не точно.
        `,
      text: `
          <img style="height:100px;margin-right:0.8em;float:left" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Commutative_diagram_for_morphism.svg/200px-Commutative_diagram_for_morphism.svg.png"/>
          Мы обзорно рассмотрим раздел математики, изучающий свойства отношений
          между математическими объектами, которые не зависят от внутренней структуры
          этих объектов.

          Теория категорий занимает центральное место в современной математике, она также
          нашла применения в информатике, логике и в теоретической физике. Общекатегорийные
          понятия также активно используются в языке функционального программирования <i>Haskell</i>.

          <h6 style="margin:0;padding:0;font-size:1em">Курс опирается на две книги:</h6>
          <ul style="margin: 0.5em 0 0;display:inline-block">
            <li>Category Theory (by Steve Awodey)</li>
            <li>Category Theory (by Steve Awodey)</li>
          </ul>

          Есть возможность официально сдавать зачёт или экзамен (по&nbsp;желанию слушателя).
          Для этого необходимо написать заявление в деканат.
        `,
      authors: [
        {
          name: 'Виталий Брагилевский',
          ava: 'http://compsciclub.ru/media/cache/eb/74/eb744370ecdcc277036c108e12cc8794.jpg'
        },
        {
          name: 'Денис Загумённов',
          ava: 'https://pbs.twimg.com/profile_images/2586456123/0msx978pkihz2xo7k9hu.jpeg'
        }
      ],
      attendees: [
        {
          name: 'Артём Пеленицын',
          ava: 'https://pbs.twimg.com/profile_images/393613739/________bigger.jpg'
        },
        {
          name: 'Денис Мирзоев',
          ava: 'https://pbs.twimg.com/profile_images/560171941974126592/nZ-zs_8a_bigger.jpeg'
        },
        {
          name: 'Всеволод Квачёв',
          ava: 'https://pbs.twimg.com/profile_images/703992223629709312/HfB1HT-Q_bigger.jpg'
        },
        {
          name: 'Георгий Лукьянов',
          ava: 'https://pbs.twimg.com/profile_images/757847164403851268/Ur4cy0Da_bigger.jpg'
        },
        {
          name: 'Яна Демьяненко',
          ava: 'https://pbs.twimg.com/profile_images/526408711594467328/6KJyezCR_bigger.png'
        },
        {
          name: 'Илья Варламов',
          ava: 'https://pbs.twimg.com/profile_images/591502306971004928/5LKyq1_L_bigger.jpg'
        },
        {
          name: 'Анатолий Прилютский',
          ava: 'https://pbs.twimg.com/profile_images/694436245527724032/atNM2g1P_bigger.jpg'
        },
        {
          name: 'Бартош Милевский',
          ava: 'https://pbs.twimg.com/profile_images/1000136690/IslandBartosz_bigger.JPG'
        },
        {
          name: 'Дмитрий Свиридкин',
          ava: 'https://pbs.twimg.com/profile_images/838796547999612928/-vm0f_xL_bigger.jpg'
        },
        {
          name: 'Илья Мурадьян',
          ava: 'https://pbs.twimg.com/profile_images/729375035631218688/pI2h_8-p_bigger.jpg'
        },
        {
          name: 'Тихон Белоушко',
          ava: 'https://pbs.twimg.com/profile_images/721417643903827968/RJkOcK0X_bigger.jpg'
        },
        {
          name: 'Роман Чепляка',
          ava: 'https://pbs.twimg.com/profile_images/458731352758579200/TSideAqh_bigger.jpeg'
        },
        {
          name: 'Александр',
          ava: 'https://pbs.twimg.com/profile_images/823859625112039425/z6Q8kq20_bigger.jpg'
        },
        {
          name: 'Михаил Бочкарёв',
          ava: 'https://pbs.twimg.com/profile_images/823334889521106944/RTOq0xfV_bigger.jpg'
        },
        {
          name: 'Алексей Головешкин',
          ava: 'https://pbs.twimg.com/profile_images/378800000746137548/5039255f3a222c2a89c0598fc6e4fbd9_bigger.jpeg'
        },
        {
          name: 'Евгений Пшеничный',
          ava: 'https://pbs.twimg.com/profile_images/691216526981070848/DSM41MZ__bigger.jpg'
        },
        {
          name: 'Андрей Руденец',
          ava: 'https://pbs.twimg.com/profile_images/792065837582671872/pkibPV44_bigger.jpg'
        }
      ]
    },

    {
      link: 'hello-from-northeastern-university',
      theme: 'yellow',
      title: 'Ulysses возвращается!',
      date: '2017-03-31',
      time: '15:30',
      annotation: `
        Поговорим о том, какие задачи решаются в лаборатории языков программирования в Northeastern University.
      `,
      authors: [
        {
          name: 'Артём Пеленицын',
          ava: 'https://pbs.twimg.com/profile_images/393613739/________bigger.jpg'
        }
      ]
    }
]

const getData = () => data

const getEvent = link => {
  let res = data
    .filter(e => e.link === link)
    .slice(0, 1)

  return res[0] || {}
}

export default { getData, getEvent }
