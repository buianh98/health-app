import MyRecommend1 from "./../ui/assets/images/MyRecommend-1.jpg";
import MyRecommend2 from "./../ui/assets/images/MyRecommend-2.jpg";
import MyRecommend3 from "./../ui/assets/images/MyRecommend-3.jpg";
import KnifeIcon from "./../ui/assets/icons/icon_knife.svg";
import CupIcon from "./../ui/assets/icons/icon_cup.svg";
import D1Image from "./../ui/assets/images/d01.jpg";
import D2Image from "./../ui/assets/images/d02.jpg";
import D3Image from "./../ui/assets/images/l01.jpg";
import D4Image from "./../ui/assets/images/l02.jpg";
import { FoodType } from "./type";

export const DEFAULT_PER_PAGE = 8;

export const routes = {
  not_found: "/not-found",
  top_page: "/",
  my_record: "/my-record",
  collumn: "/collumn",
};

export const SidebarItems = [
  {
    title: "自分の記録",
    link: routes.my_record,
  },
  {
    title: "体重グラフ",
    link: "#",
  },
  {
    title: "目標",
    link: "#",
  },
  {
    title: "選択中のコース",
    link: "#",
  },
  {
    title: "コラム一覧",
    link: routes.collumn,
  },
  {
    title: "設定",
    link: "#",
  },
];

export const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      border: {
        display: false,
      },
      ticks: {
        color: "#FFFFFF",
        font: {
          size: 12,
        },
      },
      grid: {
        drawBorder: false,
        display: true,
        color: "#777777",
      },
    },
    y: {
      display: false,
    },
  },
};

export const myRecordCards = [
  {
    title: "BODY RECORD",
    description: "自分のカラダの記録",
    image: MyRecommend1,
  },
  {
    title: "MY EXERCISE",
    description: "自分の運動の記録",
    image: MyRecommend2,
  },
  {
    title: "MY DIARY",
    description: "自分の日記",
    image: MyRecommend3,
  },
];

export const myRecordTimeFilter = ["日", "週", "月", "年"];

export const columnRecommendCards = [
  { title: "RECOMMENDED\n COLUMN", description: "オススメ" },
  { title: "RECOMMENDED\n DIET", description: "ダイエット" },
  { title: "RECOMMENDED\n BEAUTY", description: "美容" },
  { title: "RECOMMENDED\n HEALTH", description: "健康" },
];

export const userColumnCards = [
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
  {
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: new Date(),
    tags: ["魚料理", "魚料理", "DHA"],
  },
];

export const calendarCards = [
  {
    title: "私の日記の記録が一部表示されます。",
    description:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    time: new Date(),
  },
  {
    title: "私の日記の記録が一部表示されます。",
    description:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    time: new Date(),
  },
  {
    title: "私の日記の記録が一部表示されます。",
    description:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    time: new Date(),
  },
  {
    title: "私の日記の記録が一部表示されます。",
    description:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    time: new Date(),
  },
  {
    title: "私の日記の記録が一部表示されます。",
    description:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    time: new Date(),
  },
  {
    title: "私の日記の記録が一部表示されます。",
    description:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    time: new Date(),
  },
  {
    title: "私の日記の記録が一部表示されます。",
    description:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    time: new Date(),
  },
  {
    title: "私の日記の記録が一部表示されます。",
    description:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    time: new Date(),
  },
  {
    title: "私の日記の記録が一部表示されます。",
    description:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    time: new Date(),
  },
  {
    title: "私の日記の記録が一部表示されます。",
    description:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    time: new Date(),
  },
  {
    title: "私の日記の記録が一部表示されます。",
    description:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    time: new Date(),
  },
  {
    title: "私の日記の記録が一部表示されます。",
    description:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    time: new Date(),
  },
  {
    title: "私の日記の記録が一部表示されます。",
    description:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    time: new Date(),
  },
  {
    title: "私の日記の記録が一部表示されます。",
    description:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    time: new Date(),
  },
  {
    title: "私の日記の記録が一部表示されます。",
    description:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    time: new Date(),
  },
  {
    title: "私の日記の記録が一部表示されます。",
    description:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    time: new Date(),
  },
  {
    title: "私の日記の記録が一部表示されます。",
    description:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    time: new Date(),
  },
  {
    title: "私の日記の記録が一部表示されます。",
    description:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    time: new Date(),
  },
];

export const filterTypeList = [
  {
    title: "Morning",
    icon: KnifeIcon,
    type: FoodType.MORNING,
  },
  {
    title: "Lunch",
    icon: KnifeIcon,
    type: FoodType.LUNCH,
  },
  {
    title: "Dinner",
    icon: KnifeIcon,
    type: FoodType.DINNER,
  },
  {
    title: "Snack",
    icon: CupIcon,
    type: FoodType.SNACK,
  },
];

export const foodCards = [
  {
    title: "05.21.Morning",
    image: D1Image,
    type: "morning",
  },
  {
    title: "05.21.Lunch",
    image: D2Image,
    type: "lunch",
  },
  {
    title: "05.21.Dinner",
    image: D3Image,
    type: "dinner",
  },
  {
    title: "05.21.Snack",
    image: D4Image,
    type: "snack",
  },

  {
    title: "05.20.Morning",
    image: D1Image,
    type: "morning",
  },
  {
    title: "05.20.Lunch",
    image: D2Image,
    type: "lunch",
  },
  {
    title: "05.20.Dinner",
    image: D3Image,
    type: "dinner",
  },
  {
    title: "05.20.Snack",
    image: D4Image,
    type: "snack",
  },

  {
    title: "05.19.Morning",
    image: D1Image,
    type: "morning",
  },
  {
    title: "05.19.Lunch",
    image: D2Image,
    type: "lunch",
  },
  {
    title: "05.19.Dinner",
    image: D3Image,
    type: "dinner",
  },
  {
    title: "05.19.Snack",
    image: D4Image,
    type: "snack",
  },

  {
    title: "05.18.Morning",
    image: D1Image,
    type: "morning",
  },
  {
    title: "05.18.Lunch",
    image: D2Image,
    type: "lunch",
  },
  {
    title: "05.18.Dinner",
    image: D3Image,
    type: "dinner",
  },
  {
    title: "05.18.Snack",
    image: D4Image,
    type: "snack",
  },

  {
    title: "05.17.Morning",
    image: D1Image,
    type: "morning",
  },
  {
    title: "05.17.Lunch",
    image: D2Image,
    type: "lunch",
  },
  {
    title: "05.17.Dinner",
    image: D4Image,
    type: "dinner",
  },
  {
    title: "05.17.Snack",
    image: D3Image,
    type: "snack",
  },

  {
    title: "05.16.Morning",
    image: D1Image,
    type: "morning",
  },
  {
    title: "05.16.Lunch",
    image: D2Image,
    type: "lunch",
  },
  {
    title: "05.16.Dinner",
    image: D3Image,
    type: "dinner",
  },
  {
    title: "05.16.Snack",
    image: D4Image,
    type: "snack",
  },

  {
    title: "05.15.Morning",
    image: D1Image,
    type: "morning",
  },
  {
    title: "05.15.Lunch",
    image: D2Image,
    type: "lunch",
  },
  {
    title: "05.15.Dinner",
    image: D3Image,
    type: "dinner",
  },
  {
    title: "05.15.Snack",
    image: D1Image,
    type: "snack",
  },

  {
    title: "05.14.Morning",
    image: D1Image,
    type: "morning",
  },
  {
    title: "05.14.Lunch",
    image: D2Image,
    type: "lunch",
  },
  {
    title: "05.14.Dinner",
    image: D3Image,
    type: "dinner",
  },
  {
    title: "05.14.Snack",
    image: D1Image,
    type: "snack",
  },

  {
    title: "05.13.Morning",
    image: D4Image,
    type: "morning",
  },
  {
    title: "05.13.Lunch",
    image: D1Image,
    type: "lunch",
  },
  {
    title: "05.13.Dinner",
    image: D2Image,
    type: "dinner",
  },
  {
    title: "05.13.Snack",
    image: D4Image,
    type: "snack",
  },
];

export const monthDatas = [
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
];

export const userRecordDetails = [
  {
    title: "家事全般（立位・軽い）",
    kcal: 26,
    time: new Date(),
  },
  {
    title: "家事全般（立位・軽い）",
    kcal: 26,
    time: new Date(),
  },
  {
    title: "家事全般（立位・軽い）",
    kcal: 26,
    time: new Date(),
  },
  {
    title: "家事全般（立位・軽い）",
    kcal: 26,
    time: new Date(),
  },
  {
    title: "家事全般（立位・軽い）",
    kcal: 26,
    time: new Date(),
  },
  {
    title: "家事全般（立位・軽い）",
    kcal: 26,
    time: new Date(),
  },
  {
    title: "家事全般（立位・軽い）",
    kcal: 26,
    time: new Date(),
  },
  {
    title: "家事全般（立位・軽い）",
    kcal: 26,
    time: new Date(),
  },
  {
    title: "家事全般（立位・軽い）",
    kcal: 26,
    time: new Date(),
  },
  {
    title: "家事全般（立位・軽い）",
    kcal: 26,
    time: new Date(),
  },
  {
    title: "家事全般（立位・軽い）",
    kcal: 26,
    time: new Date(),
  },
  {
    title: "家事全般（立位・軽い）",
    kcal: 26,
    time: new Date(),
  },
];
