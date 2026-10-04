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
    title: "A團出發(振洲、筱嵐、紹齊)",
    time: "04:00 板橋出發；06:50 CI110",
    city: "桃園 / 福岡",
    image: "./assets/images/taoyuan-t2-checkin.webp",
    details: [
      "04:00 板橋機場接送出發",
      "04:30 抵達桃園機場",
      "05:00 Check-in 完成，並協助 B 團 Check-in",
      "05:30 最晚入關時間",
      "06:10 登機",
      "06:50 搭乘華航 CI110",
      "10:00 抵達福岡"
    ]
  },
  {
    day: "10/28",
    type: "transport",
    title: "B 團出發(旺哥、秋霞)",
    time: "04:00 基隆出發；08:10 BR106",
    city: "桃園 / 福岡",
    image: "./assets/images/br106-departing-taoyuan-2026.webp",
    details: [
      "04:00 基隆接送出發",
      "04:50 抵達桃園機場",
      "Check-in 地點：第二航廈（18 號特別服務櫃台)",
      "08:10 搭乘長榮 BR106",
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
    image: "./assets/images/fukuoka-airport-international-2026.webp",
    description:
      "兩團分別搭乘華航 CI110 與長榮 BR106 抵達福岡，12:00 在福岡機場 入境大廳集合，叫 Taxi 前往 KITTE 博多。"
  },
  {
    day: "10/28",
    type: "food",
    title: "敘敘苑 KITTE 博多店",
    time: "13:00 預約午餐",
    city: "福岡",
    image: "./assets/images/jojoen-kitte.webp",
    images: ["./assets/images/jojoen-kitte.webp", "./assets/images/jojoen-kitte-2.webp"],
    description:
      "「敘敘苑」是日本知名的高級燒肉品牌，以講究肉質、細緻服務與舒適用餐環境聞名。KITTE 博多店位於博多車站旁 KITTE 博多 10 樓，交通非常方便，部分座位還可眺望博多站周邊景色。午餐價格相較晚餐較容易入手，很適合安排成福岡行程中較精緻的一餐。"
  },
  {
    day: "10/28",
    type: "transport",
    title: "由布院之森 5 往日田",
    time: "14:38 博多出發，15:53 抵達日田",
    city: "博多 / 日田",
    image: "./assets/images/yufuin-no-mori-1.webp",
    images: [
      "./assets/images/yufuin-no-mori-1.webp",
      "./assets/images/yufuin-no-mori-2.webp",
      "./assets/images/yufuin-no-mori-3.webp"
    ],
    description:
      "「由布院之森」是 JR 九州極具代表性的 D&S 觀光列車，以深綠色車身呼應由布院的森林與自然景觀。車內大量運用木質元素，搭配挑高式車廂與大片車窗，沿途可欣賞筑後川、山林、慈恩瀑布與由布岳等景色，列車本身就是旅程的一部分。"
  },
  {
    day: "10/28",
    type: "transport",
    title: "日田站前等候飯店接駁車",
    time: "16:15",
    city: "日田站 / 奧日田溫泉",
    image: "./assets/images/hita-station-2024.webp",
    description:
      "15:53 抵達日田後，在火車站前等候飯店接駁車，前往奧日田溫泉 梅響。從車站轉進山谷，溫泉之夜就要開始。"
  },
  {
    day: "10/28",
    type: "hotel",
    title: "奧日田溫泉 梅響",
    time: "17:40 抵達",
    city: "日田",
    image: "./assets/images/umehibiki-1.webp",
    images: [
      "./assets/images/umehibiki-1.webp",
      "./assets/images/umehibiki-2.webp",
      "./assets/images/umehibiki-3.webp"
    ],
    description:
      "位於大分縣日田市大山町、響溪谷旁的溫泉旅館，以「梅之鄉」大山的自然與梅文化為主題。最大魅力是壯闊的山谷景觀，從客房、露天風呂與寢湯都能眺望層疊山林。這裡不只是住宿點，本身就是旅程中的主要目的地。"
  },
  {
    day: "10/28",
    type: "food",
    title: "梅響飯店日式和牛懷石晚餐",
    time: "18:00",
    city: "奧日田溫泉 梅響",
    image: "./assets/images/umehibiki-dinner.webp",
    description:
      "今晚在奧日田溫泉 梅響飯店享用日式和牛懷石料理。從趕路轉為慢慢品味九州的季節料理，替第一天畫下溫暖的句點。照片為飯店料理示意，實際菜色依當日供應為準。"
  },
  {
    day: "10/29",
    type: "food",
    title: "梅響飯店日式包廂早餐",
    time: "08:00",
    city: "奧日田溫泉 梅響",
    image: "./assets/images/umehibiki-breakfast-user.webp",
    description:
      "在飯店的日式包廂享用早餐，從一桌細緻的日式餐點開始新的一天。照片由旅伴於梅響拍攝，實際菜色依當日供應為準。"
  },
  {
    day: "10/29",
    type: "transport",
    title: "飯店接駁車前往日田站",
    time: "11:00",
    city: "奧日田溫泉 梅響 / 日田",
    image: "./assets/images/umehibiki-entrance.webp",
    description:
      "從梅響飯店搭乘接駁車返回日田站，再前往日田 Bus Terminal，準備搭乘 12:05 往天神的高速巴士。"
  },
  {
    day: "10/29",
    type: "transport",
    title: "日田往天神高速巴士",
    time: "12:05-13:39",
    city: "日田 / 福岡",
    image: "./assets/images/hita-highway-bus-2026.webp",
    description:
      "從日田 Bus Terminal 搭乘高速巴士前往西鐵天神高速 Bus Terminal，抵達後穿過天神三越與地下街前往飯店。"
  },
  {
    day: "10/29",
    type: "hotel",
    title: "THE GATE HOTEL FUKUOKA by HULIC",
    time: "14:00 Check-in",
    city: "福岡天神",
    image: "./assets/images/gate-hotel-1.webp",
    images: [
      "./assets/images/gate-hotel-1.webp",
      "./assets/images/gate-hotel-2.webp",
      "./assets/images/gate-hotel-3.webp"
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
    image: "./assets/images/tenjin-chikagai-1.webp",
    images: [
      "./assets/images/tenjin-chikagai-1.webp",
      "./assets/images/tenjin-chikagai-2.webp",
      "./assets/images/tenjin-chikagai-3.webp"
    ],
    description:
      "天神地下街是福岡天神地區重要的地下商業與交通動線，全長約 590 公尺，串聯地下鐵天神站、天神南站、西鐵福岡站與周邊百貨。以 19 世紀歐洲街道為設計意象，也是雨天逛天神最好用的移動通道。",
    details: [
      "建議逛法：",
      "先去：mina 天神：B1F 逛 3COINS＋plus，1–2F 逛 UNIQLO，3F 逛 GU。",
      "然後：<a href=\"https://www.google.com/maps/search/?api=1&amp;query=%E7%84%A1%E5%8D%B0%E8%89%AF%E5%93%81%20%E5%A4%A9%E7%A5%9E%E3%82%B7%E3%83%A7%E3%83%83%E3%83%91%E3%83%BC%E3%82%BA%E7%A6%8F%E5%B2%A1%20%E7%A6%8F%E5%B2%A1%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%A4%A9%E7%A5%9E4-4-11\" target=\"_blank\" rel=\"noopener noreferrer\">無印良品在旁邊的天神 Shoppers Fukuoka 2F</a>",
      "藥妝可到 住宿附近 PARCO B2 Welca"
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
          "本館 B1F｜<a href=\"https://fukuoka.parco.jp/shop/detail/?id=7211\">麵屋兼虎</a>：沾麵",
          "本館 B1F｜<a href=\"https://fukuoka.parco.jp/shop/detail/?id=1688\">博多もつ鍋 おおやま</a>：牛腸鍋",
          "本館 B1F｜<a href=\"https://fukuoka.parco.jp/shop/detail/?cd=025285\">たんやHAKATA</a>：牛舌定食",
          "本館 B1F｜<a href=\"https://fukuoka.parco.jp/shop/detail/?cd=9806\">博多天ぷら たかお</a>：天婦羅定食",
          "本館 B1F｜<a href=\"https://fukuoka.parco.jp/shop/detail/?cd=026595\">博多らーめん Shin-Shin</a>：拉麵",
          "新館 B2F｜<a href=\"https://fukuoka.parco.jp/shop/detail/?cd=25294\">牛かつ もと村</a>：炸牛排"
        ]
      },
      {
        title: "Solaria Stage",
        items: [
          "B2F｜<a href=\"https://www.solariastage.com/shops/uokichi/\">博多海鮮食堂 魚吉</a>：海鮮與定食",
          "B2F｜<a href=\"https://www.solariastage.com/shops/katsushin/\">博多とんかつ処 かつ心</a>：豬排",
          "B2F｜<a href=\"https://www.solariastage.com/shops/omiki_chaya/\">菊正宗おみき茶屋</a>：日式定食",
          "2F｜<a href=\"https://www.solariastage.com/shops/yariudon/\">博多やりうどん</a>：博多烏龍麵",
          "2F｜<a href=\"https://www.solariastage.com/shops/fugetsu/\">グルメ風月</a>：鐵板料理"
        ]
      }
    ]
  },
  {
    day: "10/30",
    type: "transport",
    title: "A團回國，B團送機",
    time: "09:30 出發；12:15 BR105",
    city: "福岡機場",
    image: "./assets/images/return-flight-sunset.webp",
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
                .map((photo, index) => `<button class="story-card__photo" type="button" aria-label="放大檢視${item.title}照片 ${index + 1}" data-photo="${photo}" data-alt="${item.title}照片 ${index + 1}"><img src="${photo}" alt="${item.title}照片 ${index + 1}" loading="lazy" decoding="async"></button>`)
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

const photoDialog = $("#photoDialog");
const enlargedPhoto = $("#enlargedPhoto");

$("#storyList").addEventListener("click", (event) => {
  const photoButton = event.target.closest(".story-card__photo");
  if (!photoButton) return;
  enlargedPhoto.src = photoButton.dataset.photo;
  enlargedPhoto.alt = photoButton.dataset.alt;
  photoDialog.showModal();
});

$("#closePhotoDialog").addEventListener("click", () => photoDialog.close());
photoDialog.addEventListener("click", (event) => {
  if (event.target === photoDialog) photoDialog.close();
});
