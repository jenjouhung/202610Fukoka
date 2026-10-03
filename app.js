const mapSearch = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const categories = {
  all: "全部",
  hotel: "住宿",
  spot: "景點",
  food: "美食",
  transport: "交通",
  shopping: "購物"
};

const typeClass = {
  hotel: "tag--hotel",
  food: "tag--food",
  transport: "tag--transport",
  shopping: "tag--transport",
  spot: ""
};

const days = [
  { id: "10/28", label: "10/28", title: "抵達福岡，前往溫泉" },
  { id: "10/29", label: "10/29", title: "前往博多天神" },
  { id: "10/30", label: "10/30", title: "送機與啟程阿蘇" },
  { id: "10/31", label: "10/31", title: "阿蘇與高千穗" },
  { id: "11/1", label: "11/1", title: "熊本" },
  { id: "11/2", label: "11/2", title: "熊本回程" }
];

const storyItems = [
  {
    day: "10/28",
    type: "transport",
    title: "抵達福岡機場",
    time: "A 團 10:00；B 團 11:15",
    city: "福岡",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1400&q=80",
    description:
      "兩團分別搭乘華航 CI110 與長榮 BR106 抵達福岡，12:00 在福岡機場 12 號柱集合，使用 Uber 或 GO 叫 Taxi XL 前往 KITTE 博多。"
  },
  {
    day: "10/28",
    type: "food",
    title: "敘敘苑 KITTE 博多店",
    time: "13:00 預約午餐",
    city: "福岡",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1400&q=80",
    description:
      "位於 KITTE 博多 10 樓的日式燒肉餐廳，適合安排成抵達後較精緻且交通方便的一餐。"
  },
  {
    day: "10/28",
    type: "transport",
    title: "由布院之森 5 往日田",
    time: "14:38 博多出發，15:53 抵達日田",
    city: "博多 / 日田",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1400&q=80",
    description:
      "JR 九州代表性觀光列車，全車指定席。車內木質設計與大片車窗讓移動本身成為旅程的一部分。"
  },
  {
    day: "10/28",
    type: "hotel",
    title: "奧日田溫泉 梅響",
    time: "17:40 抵達",
    city: "日田",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    description:
      "位於大分縣日田市大山町、響溪谷旁的溫泉旅館。晚餐為和牛懷石料理，傍晚與清晨泡湯是本日重點。"
  },
  {
    day: "10/29",
    type: "transport",
    title: "日田往天神高速巴士",
    time: "12:05-13:39",
    city: "日田 / 福岡",
    image: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&w=1400&q=80",
    description:
      "從日田 Bus Terminal 搭乘高速巴士前往西鐵天神高速 Bus Terminal，抵達後穿過天神三越與地下街前往飯店。"
  },
  {
    day: "10/29",
    type: "hotel",
    title: "THE GATE HOTEL FUKUOKA by HULIC",
    time: "14:00 Check-in",
    city: "福岡天神",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
    description:
      "2025 年開幕，位於天神核心 HULIC SQUARE 福岡天神，與地下鐵天神站 5 號出口直接連通。"
  },
  {
    day: "10/29",
    type: "shopping",
    title: "天神地下街與周邊採買",
    time: "15:00 起",
    city: "福岡天神",
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1400&q=80",
    description:
      "天神地下街串聯地下鐵、西鐵、百貨與商場，是雨天與帶行李時很好用的移動動線。可順逛 Mina 天神、無印良品、PARCO 與藥妝。"
  },
  {
    day: "10/30",
    type: "transport",
    title: "B 團送機",
    time: "09:30 出發；12:15 BR105",
    city: "福岡機場",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80",
    description:
      "飯店早餐後 check-out，搭乘 GO Taxi 前往福岡機場國際航廈。10:30 Check-in，12:15 長榮 BR105 返回台北。"
  },
  {
    day: "10/30",
    type: "transport",
    title: "Toyota 租車，啟程阿蘇",
    time: "10:30-11:00 取車",
    city: "福岡機場 / 阿蘇",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    description:
      "C2 等級 COROLLA TOURING，10/30 10:30 至 11/02 16:00。取車後以阿蘇住宿為主要目標，途中保留彈性休息與午餐。"
  },
  {
    day: "10/30",
    type: "spot",
    title: "大觀峰",
    time: "15:00-16:00 視路況前往",
    city: "阿蘇",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    description:
      "10/30 唯一正式景點。若取車或路程延誤可直接取消，優先保持孩子與長輩的節奏。"
  },
  {
    day: "10/30",
    type: "hotel",
    title: "Aso grand view",
    time: "16:30-17:30 抵達",
    city: "阿蘇",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    description:
      "漂亮民宿本身就是下午的正式行程。抵達後不再安排景點，保留休息、看風景、泡澡與晚餐時間。"
  },
  {
    day: "10/31",
    type: "spot",
    title: "高千穗あまてらす鉄道",
    time: "08:45-09:00 抵達買票",
    city: "高千穗",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1400&q=80",
    description:
      "小火車是本日第一優先。目標 9:40 或 10:20 班次，當天開園販售、先到先得，雨天或強風可能停駛。"
  },
  {
    day: "10/31",
    type: "spot",
    title: "高千穗峽",
    time: "10:30-11:30",
    city: "高千穗",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    description:
      "小火車優先，高千穗峽散步第二，划船不用強求。真名井瀑布與峽谷景觀本身已很值得停留。"
  },
  {
    day: "10/31",
    type: "spot",
    title: "高千穗神社",
    time: "12:30-13:00",
    city: "高千穗",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1400&q=80",
    description:
      "午餐後簡單走走即可，不需要拉太長時間，保留下午前往天岩戶神社與回阿蘇的節奏。"
  },
  {
    day: "10/31",
    type: "spot",
    title: "天岩戶神社與天安河原",
    time: "13:15-14:30",
    city: "高千穗",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    description:
      "自然步行與神話故事兼具，符合親子旅程的探索感。14:30 後開始回阿蘇，晚上不再安排景點。"
  },
  {
    day: "11/1",
    type: "spot",
    title: "阿蘇卡德利動物樂園",
    time: "09:45-12:00",
    city: "阿蘇",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1400&q=80",
    description:
      "給孩子看動物、餵食與自由探索，不追求全部看完。安排約 2 至 2.25 小時即可。"
  },
  {
    day: "11/1",
    type: "spot",
    title: "熊本城",
    time: "14:30-16:30",
    city: "熊本",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1400&q=80",
    description:
      "以大型戶外探索景點來看待熊本城：城牆、天守閣、高處景觀與大尺度空間，比室內博物館更適合孩子。"
  },
  {
    day: "11/1",
    type: "hotel",
    title: "OMO5 熊本",
    time: "17:00 入住",
    city: "熊本",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
    description:
      "入住後本日收工，不再安排商場。停車可使用辛島公園地下駐車場。"
  },
  {
    day: "11/2",
    type: "spot",
    title: "阿蘇牛奶牧場",
    time: "10:00-12:00",
    city: "熊本 / 阿蘇",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1400&q=80",
    description:
      "最後一天安排動物、戶外與牧場體驗，比博物館或商場更符合這趟旅行的成員需求。"
  },
  {
    day: "11/2",
    type: "spot",
    title: "Sorayoka Park",
    time: "14:30 左右備用",
    city: "熊本機場旁",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    description:
      "若還車時間允許，可在熊本機場附近稍微活動一下，作為最後的備用戶外點。"
  },
  {
    day: "11/2",
    type: "transport",
    title: "熊本機場還車與回程",
    time: "15:00-15:30 還車；18:35 CI195",
    city: "熊本機場",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80",
    description:
      "15:00-15:30 還車後準備回程。華航 CI195 18:35 自熊本機場起飛，20:10 抵達台北。"
  }
];

const locations = [
  { day: "10/28", type: "transport", city: "福岡", name: "福岡機場 12 號柱", query: "Fukuoka Airport international terminal pillar 12", note: "12:00 集合，叫 Uber 或 GO Taxi XL 前往 KITTE 博多。" },
  { day: "10/28", type: "food", city: "福岡", name: "敘敘苑 KITTE 博多店", query: "叙々苑 KITTE博多店", note: "10F，午餐預約 13:00。" },
  { day: "10/28", type: "transport", city: "博多", name: "JR 博多站", query: "JR Hakata Station", note: "14:38 由布院之森 5 往日田，通常是第五月台。" },
  { day: "10/28", type: "transport", city: "日田", name: "JR 日田站", query: "Hita Station Oita", note: "15:53 抵達，16:15 搭乘旅館接駁車。" },
  { day: "10/28", type: "hotel", city: "日田", name: "奧日田溫泉 梅響", query: "奥日田温泉 うめひびき", note: "17:40 抵達，晚餐為和牛懷石料理。" },
  { day: "10/29", type: "transport", city: "日田", name: "日田 Bus Terminal", query: "Hita Bus Terminal", note: "12:05 搭乘高速 Bus 前往天神。" },
  { day: "10/29", type: "transport", city: "福岡", name: "西鐵天神高速 Bus Terminal", query: "Nishitetsu Tenjin Expressway Bus Terminal", note: "13:39 抵達，往天神三越與地下街方向走。" },
  { day: "10/29", type: "hotel", city: "福岡", name: "THE GATE HOTEL FUKUOKA by HULIC", query: "THE GATE HOTEL FUKUOKA by HULIC", note: "14:00 Check-in。地下鐵天神站 5 號出口直接連通。" },
  { day: "10/29", type: "shopping", city: "福岡", name: "天神地下街", query: "天神地下街 福岡", note: "15:00 起逛街採買，串聯地鐵、百貨與商場。" },
  { day: "10/29", type: "shopping", city: "福岡", name: "Mina 天神", query: "Mina Tenjin Fukuoka", note: "3COINS、UNIQLO TENJIN、GU。" },
  { day: "10/29", type: "shopping", city: "福岡", name: "無印良品 天神ショッパーズ福岡店", query: "無印良品 天神ショッパーズ福岡店", note: "由 Mina 天神一樓走過去，就在旁邊。" },
  { day: "10/29", type: "shopping", city: "福岡", name: "福岡 PARCO", query: "Fukuoka PARCO", note: "藥妝與多個午晚餐選擇。" },
  { day: "10/29", type: "food", city: "福岡", name: "麵屋兼虎 福岡 PARCO", query: "麺や兼虎 福岡パルコ", note: "福岡熱門沾麵，柴魚味重。" },
  { day: "10/29", type: "food", city: "福岡", name: "博多天ぷら たかお PARCO", query: "博多天ぷら たかお 福岡パルコ店", note: "天婦羅定食。" },
  { day: "10/29", type: "food", city: "福岡", name: "一蘭拉麵本店", query: "一蘭 本社総本店 福岡", note: "晚上 20:00-20:15 有表演。" },
  { day: "10/30", type: "transport", city: "福岡", name: "福岡機場國際航廈", query: "Fukuoka Airport International Terminal", note: "B 團 10:30 Check-in，12:15 BR105 回台北。" },
  { day: "10/30", type: "transport", city: "福岡", name: "Toyota 租車 福岡機場", query: "Toyota Rent a Car Fukuoka Airport International Terminal", note: "10:30-11:00 取車，C2 等級 COROLLA TOURING。" },
  { day: "10/30", type: "spot", city: "阿蘇", name: "大觀峰", query: "大観峰 阿蘇", note: "15:00-16:00 視路況前往，若延誤可取消。" },
  { day: "10/30", type: "hotel", city: "阿蘇", name: "Aso grand view", query: "Aso grand view", note: "阿蘇站附近住宿，抵達後休息、看風景、泡澡。" },
  { day: "10/31", type: "spot", city: "高千穗", name: "高千穗あまてらす鉄道", query: "高千穂あまてらす鉄道", note: "08:45-09:00 抵達買票，目標 9:40 或 10:20 班次。" },
  { day: "10/31", type: "spot", city: "高千穗", name: "高千穗峽", query: "高千穂峡", note: "小火車後散步，划船不用強求。" },
  { day: "10/31", type: "spot", city: "高千穗", name: "高千穗神社", query: "高千穂神社", note: "12:30-13:00 簡單走走。" },
  { day: "10/31", type: "spot", city: "高千穗", name: "天岩戶神社", query: "天岩戸神社", note: "13:15-14:30，與天安河原一起安排。" },
  { day: "10/31", type: "spot", city: "高千穗", name: "天安河原", query: "天安河原", note: "自然步行與神話故事重點。" },
  { day: "11/1", type: "spot", city: "阿蘇", name: "阿蘇卡德利動物樂園", query: "阿蘇カドリー・ドミニオン", note: "09:45-12:00，動物、餵食、自由探索。" },
  { day: "11/1", type: "spot", city: "熊本", name: "熊本城", query: "熊本城", note: "14:30-16:30，戶外探索與天守閣景觀。" },
  { day: "11/1", type: "hotel", city: "熊本", name: "OMO5 熊本", query: "OMO5 熊本 by 星野リゾート", note: "17:00 左右入住。" },
  { day: "11/1", type: "transport", city: "熊本", name: "辛島公園地下駐車場", query: "パスート24 熊本市辛島公園地下駐車場", note: "OMO5 熊本停車資訊。" },
  { day: "11/2", type: "spot", city: "熊本", name: "阿蘇牛奶牧場", query: "阿蘇ミルク牧場", note: "10:00-12:00，動物、戶外、牧場體驗。" },
  { day: "11/2", type: "spot", city: "熊本", name: "Sorayoka Park", query: "そらよかパーク 熊本空港", note: "14:30 左右備用戶外點，就在熊本機場旁。" },
  { day: "11/2", type: "transport", city: "熊本", name: "熊本機場", query: "Kumamoto Airport", note: "15:00-15:30 還車；18:35 華航 CI195 回台北。" }
].map((item) => ({
  ...item,
  url: mapSearch(item.query),
  parkingUrl: mapSearch(`${item.query} parking`)
}));

const state = {
  storyDay: "all",
  storyType: "all",
  navDay: "all",
  navType: "all",
  search: ""
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

  $("#dayFilters").replaceChildren(
    ...dayOptions.map((day) =>
      makeButton(day.label, state.navDay === day.id, () => {
        state.navDay = day.id;
        render();
      })
    )
  );

  $("#typeFilters").replaceChildren(
    ...typeOptions.map((type) =>
      makeButton(type.label, state.navType === type.id, () => {
        state.navType = type.id;
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
          card.className = "story-card";
          card.innerHTML = `
            <div class="story-card__photo" style="--photo: url('${item.image}')"></div>
            <div class="story-card__body">
              <div class="tag-row">
                <span class="tag ${typeClass[item.type] || ""}">${categories[item.type]}</span>
                <span class="tag">${item.city}</span>
              </div>
              <h3>${item.title}</h3>
              <div class="meta">${item.time}</div>
              <p>${item.description}</p>
            </div>
          `;
          return card;
        })
      );
      return section;
    })
  );
}

function renderLocations() {
  const keyword = state.search.trim().toLowerCase();
  const items = locations.filter((item) => {
    const haystack = `${item.day} ${item.type} ${item.city} ${item.name} ${item.query} ${item.note}`.toLowerCase();
    return (
      (state.navDay === "all" || item.day === state.navDay) &&
      (state.navType === "all" || item.type === state.navType) &&
      (!keyword || haystack.includes(keyword))
    );
  });

  if (!items.length) {
    $("#locationList").innerHTML = `<div class="empty">目前沒有符合條件的導航地點。</div>`;
    return;
  }

  $("#locationList").replaceChildren(
    ...items.map((item) => {
      const card = document.createElement("article");
      card.className = "location-card";
      card.innerHTML = `
        <div class="tag-row">
          <span class="tag ${typeClass[item.type] || ""}">${categories[item.type]}</span>
          <span class="tag">${item.day}</span>
          <span class="tag">${item.city}</span>
        </div>
        <h3>${item.name}</h3>
        <div class="meta">${item.query}</div>
        <p>${item.note}</p>
        <div class="action-row">
          <a class="map-link" href="${item.url}" target="_blank" rel="noreferrer">開啟地圖</a>
          <a class="map-link map-link--parking" href="${item.parkingUrl}" target="_blank" rel="noreferrer">找附近停車</a>
        </div>
      `;
      return card;
    })
  );
}

function render() {
  renderFilters();
  renderStory();
  renderLocations();
}

$("#searchInput").addEventListener("input", (event) => {
  state.search = event.target.value;
  renderLocations();
});

render();
