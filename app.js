const categories = {
  all: "全部",
  hotel: "住宿",
  food: "美食",
  transport: "交通",
  shopping: "購物"
};

const typeClass = {
  hotel: "tag--hotel",
  food: "tag--food",
  transport: "tag--transport",
  shopping: "tag--transport"
};

const days = [
  { id: "10/28", label: "10/28", title: "抵達福岡，前往溫泉" },
  { id: "10/29", label: "10/29", title: "前往博多天神" },
  { id: "10/30", label: "10/30", title: "送機與啟程" }
];

const storyItems = [
  {
    day: "10/28",
    type: "transport",
    title: "A 團出發與搭機時間",
    time: "04:00 板橋出發；06:50 CI110",
    city: "桃園 / 福岡",
    image: "./assets/images/taoyuan-t2-checkin.jpg",
    details: [
      "04:00 板橋機場接送出發",
      "04:30 抵達桃園機場",
      "05:00 Check-in 完成，並協助 B 團 Check-in",
      "05:30 最晚入關",
      "06:10 登機",
      "06:50 搭乘華航 CI110 自桃園機場第二航廈出發",
      "10:00 抵達福岡"
    ]
  },
  {
    day: "10/28",
    type: "transport",
    title: "B 團出發與搭機時間",
    time: "04:00 基隆出發；08:10 BR106",
    city: "桃園 / 福岡",
    image: "./assets/images/taoyuan-t2-eva-checkin.jpg",
    details: [
      "04:00 基隆接送出發",
      "05:45 抵達桃園機場",
      "Check-in 地點：第二航廈 18 號櫃台特別服務櫃台",
      "08:10 搭乘長榮 BR106 自桃園機場第二航廈出發",
      "座位：28D、28E",
      "11:15 抵達福岡"
    ]
  },
  {
    day: "10/28",
    type: "transport",
    title: "抵達福岡機場",
    time: "A 團 10:00；B 團 11:15",
    city: "福岡",
    image: "./assets/images/fukuoka-airport-terminal.jpg",
    description:
      "兩團分別搭乘華航 CI110 與長榮 BR106 抵達福岡，12:00 在福岡機場 12 號柱集合，使用 Uber 或 GO 叫 Taxi XL 前往 KITTE 博多。"
  },
  {
    day: "10/28",
    type: "food",
    title: "敘敘苑 KITTE 博多店",
    time: "13:00 預約午餐",
    city: "福岡",
    image: "./assets/images/jojoen-kitte.png",
    images: ["./assets/images/jojoen-kitte.png", "./assets/images/jojoen-kitte-2.png"],
    description:
      "「敘敘苑」是日本知名的高級燒肉品牌，以講究肉質、細緻服務與舒適用餐環境聞名。KITTE 博多店位於博多車站旁 KITTE 博多 10 樓，交通非常方便，部分座位還可眺望博多站周邊景色。午餐價格相較晚餐較容易入手，很適合安排成福岡行程中較精緻的一餐。"
  },
  {
    day: "10/28",
    type: "transport",
    title: "由布院之森 5 往日田",
    time: "14:38 博多出發，15:53 抵達日田",
    city: "博多 / 日田",
    image: "./assets/images/yufuin-no-mori-1.png",
    images: [
      "./assets/images/yufuin-no-mori-1.png",
      "./assets/images/yufuin-no-mori-2.png",
      "./assets/images/yufuin-no-mori-3.png"
    ],
    description:
      "「由布院之森」是 JR 九州極具代表性的 D&S 觀光列車，以深綠色車身呼應由布院的森林與自然景觀。車內大量運用木質元素，搭配挑高式車廂與大片車窗，沿途可欣賞筑後川、山林、慈恩瀑布與由布岳等景色，列車本身就是旅程的一部分。"
  },
  {
    day: "10/28",
    type: "hotel",
    title: "奧日田溫泉 梅響",
    time: "17:40 抵達",
    city: "日田",
    image: "./assets/images/umehibiki-1.png",
    images: [
      "./assets/images/umehibiki-1.png",
      "./assets/images/umehibiki-2.png",
      "./assets/images/umehibiki-3.png"
    ],
    description:
      "位於大分縣日田市大山町、響溪谷旁的溫泉旅館，以「梅之鄉」大山的自然與梅文化為主題。最大魅力是壯闊的山谷景觀，從客房、露天風呂與寢湯都能眺望層疊山林。這裡不只是住宿點，本身就是旅程中的主要目的地。"
  },
  {
    day: "10/29",
    type: "transport",
    title: "日田往天神高速巴士",
    time: "12:05-13:39",
    city: "日田 / 福岡",
    image: "./assets/images/hita-bus-center.jpg",
    description:
      "從日田 Bus Terminal 搭乘高速巴士前往西鐵天神高速 Bus Terminal，抵達後穿過天神三越與地下街前往飯店。"
  },
  {
    day: "10/29",
    type: "hotel",
    title: "THE GATE HOTEL FUKUOKA by HULIC",
    time: "14:00 Check-in",
    city: "福岡天神",
    image: "./assets/images/gate-hotel-1.png",
    images: [
      "./assets/images/gate-hotel-1.png",
      "./assets/images/gate-hotel-2.png",
      "./assets/images/gate-hotel-3.png"
    ],
    description:
      "THE GATE HOTEL FUKUOKA by HULIC 是 2025 年 4 月開幕的新型都市飯店，位於天神核心的 HULIC SQUARE 福岡天神。飯店與福岡市地下鐵空港線天神站 5 號出口直接連通，從西鐵天神高速巴士總站步行也僅約 4 分鐘。"
  },
  {
    day: "10/29",
    type: "shopping",
    title: "天神地下街與周邊採買",
    time: "15:00 起",
    city: "福岡天神",
    image: "./assets/images/tenjin-chikagai-1.png",
    images: [
      "./assets/images/tenjin-chikagai-1.png",
      "./assets/images/tenjin-chikagai-2.png",
      "./assets/images/tenjin-chikagai-3.png"
    ],
    description:
      "天神地下街是福岡天神地區重要的地下商業與交通動線，全長約 590 公尺，串聯地下鐵天神站、天神南站、西鐵福岡站與周邊百貨。以 19 世紀歐洲街道為設計意象，也是雨天逛天神最好用的移動通道。",
    details: [
      "先逛天神地下街：服飾、雜貨與甜點集中；一般商店多營業至 20:00。",
      "mina 天神：B1F 逛 3COINS＋plus，1–2F 逛 UNIQLO，3F 逛 GU。",
      "無印良品在旁邊的天神 Shoppers Fukuoka 2F；藥妝可到 mina 天神 B1F 松本清。",
      "晚間若還想採買，可再前往唐吉訶德天神西通店。"
    ]
  },
  {
    day: "10/29",
    type: "food",
    title: "10/29 天神用餐建議",
    time: "午餐與晚餐自選",
    city: "福岡天神",
    description: "抵達天神後，午餐或晚餐可依當天體力與口味自行選擇。以下是行程文件列出的選項，出發前可再確認店家營業資訊。",
    groups: [
      {
        title: "福岡 PARCO",
        items: [
          "本館 B1F｜麵屋兼虎：沾麵",
          "本館 B1F｜博多もつ鍋 おおやま：牛腸鍋",
          "本館 B1F｜たんやHAKATA：牛舌定食",
          "本館 B1F｜博多天ぷら たかお：天婦羅定食",
          "本館 B1F｜博多らーめん Shin-Shin：拉麵",
          "新館 B2F｜牛かつ もと村：炸牛排"
        ]
      },
      {
        title: "Solaria Stage",
        items: [
          "B2F｜博多海鮮食堂 魚吉：海鮮與定食",
          "B2F｜博多とんかつ処 かつ心：豬排",
          "B2F｜菊正宗おみき茶屋：日式定食",
          "2F｜博多やりうどん：博多烏龍麵",
          "2F｜グルメ風月：鐵板料理"
        ]
      }
    ]
  },
  {
    day: "10/30",
    type: "transport",
    title: "B 團送機",
    time: "09:30 出發；12:15 BR105",
    city: "福岡機場",
    image: "./assets/images/hero-yufuin-train.jpg",
    details: [
      "飯店早餐後 check-out",
      "搭乘 GO Taxi 前往福岡機場國際航廈",
      "10:30 Check-in",
      "12:15 搭乘長榮 BR105 返回台北"
    ]
  }
];

const state = {
  storyDay: "all",
  storyType: "all"
};

const $ = (selector) => document.querySelector(selector);

function makeButton(label, active, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `filter-button${active ? " is-active" : ""}`;
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}

function renderFilters() {
  const dayOptions = [{ id: "all", label: "全部日期" }, ...days.map(({ id, label }) => ({ id, label }))];
  const typeOptions = Object.entries(categories).map(([id, label]) => ({ id, label }));

  $("#storyDayFilters").replaceChildren(
    ...dayOptions.map((day) =>
      makeButton(day.label, state.storyDay === day.id, () => {
        state.storyDay = day.id;
        render();
      })
    )
  );

  $("#storyTypeFilters").replaceChildren(
    ...typeOptions.map((type) =>
      makeButton(type.label, state.storyType === type.id, () => {
        state.storyType = type.id;
        render();
      })
    )
  );
}

function renderStory() {
  const items = storyItems.filter((item) => {
    return (
      (state.storyDay === "all" || item.day === state.storyDay) &&
      (state.storyType === "all" || item.type === state.storyType)
    );
  });

  const grouped = days
    .map((day) => ({ ...day, items: items.filter((item) => item.day === day.id) }))
    .filter((day) => day.items.length);

  if (!grouped.length) {
    $("#storyList").innerHTML = `<div class="empty">目前沒有符合條件的每日行程。</div>`;
    return;
  }

  $("#storyList").replaceChildren(
    ...grouped.map((day) => {
      const section = document.createElement("section");
      section.className = "day-section";
      section.innerHTML = `
        <div class="day-title">
          <h3>${day.label}</h3>
          <span>${day.title}</span>
        </div>
      `;
      section.append(
        ...day.items.map((item) => {
          const card = document.createElement("article");
          const photos = item.images || (item.image ? [item.image] : []);
          const detailHtml = [
            item.description ? `<p>${item.description}</p>` : "",
            item.details ? `<ul class="story-card__details">${item.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>` : "",
            item.groups ? item.groups.map((group) => `
              <section class="story-card__group">
                <h4>${group.title}</h4>
                <ul class="story-card__details">${group.items.map((detail) => `<li>${detail}</li>`).join("")}</ul>
              </section>
            `).join("") : ""
          ].join("");
          card.className = "story-card";
          card.innerHTML = `
            ${photos.length ? `<div class="story-card__gallery story-card__gallery--${photos.length}">
              ${photos
                .map((photo) => `<div class="story-card__photo" style="--photo: url('${photo}')"></div>`)
                .join("")}
            </div>` : ""}
            <div class="story-card__body">
              <div class="tag-row">
                <span class="tag ${typeClass[item.type] || ""}">${categories[item.type]}</span>
                <span class="tag">${item.city}</span>
              </div>
              <h3>${item.title}</h3>
              <div class="meta">${item.time}</div>
              ${detailHtml}
            </div>
          `;
          return card;
        })
      );
      return section;
    })
  );
}

function render() {
  renderFilters();
  renderStory();
}

render();
