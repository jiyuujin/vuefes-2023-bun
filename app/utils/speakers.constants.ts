import { Speaker } from '~/types/app'

export const speakers: Speaker[] = [
  // Evan
  {
    id: 'yyx990803',
    type: 'evan',
    session: {
      title: 'キーノート',
      description: '＜未定＞',
      time: 0,
      type: 'main',
    },
    profile: {
      image: '/speaker/evan.jpg',
      title: 'Creator of Vue / Vite',
      name: 'Evan You',
      twitterId: 'youyuxi',
      githubId: 'yyx990803',
      description:
        'Evan is an independent open source developer and is the creator / project lead of Vue and Vite.',
    },
  },
  // 海外スピーカー
  {
    id: 'Atinux',
    type: 'foreign',
    session: {
      title: 'Nuxt to the Edge',
      description:
        'Learn how to build a Vue application deployed to the edge to bring a blazing fast experience to your end users.',
      time: 0,
      type: 'main',
    },
    profile: {
      image: '/speaker/sebastien.jpg',
      title: 'NuxtLabs CEO',
      name: 'Sebastien Chopin',
      twitterId: 'Atinux',
      githubId: 'Atinux',
      description:
        'Author of Nuxt and CEO at NuxtLabs. I am passionate about open source and developer experience. I strive to make the web faster and create the flow feeling for developers by making the best tools to express their full creativity.',
    },
  },
  {
    id: 'patak-dev',
    type: 'foreign',
    session: {
      title: '＜未定＞',
      description: '＜未定＞',
      time: 0,
      type: 'main',
    },
    profile: {
      image: '/speaker/matias.jpg',
      title: 'Vite Core team Member',
      name: 'Matias Capeletto',
      twitterId: 'patak_dev',
      githubId: 'patak-dev',
      description: 'A collaborative being, working full time on the Vite ecosystem @StackBlitz.',
    },
  },
  {
    id: 'antfu',
    type: 'foreign',
    session: {
      title: '＜未定＞',
      description: '＜未定＞',
      time: 0,
      type: 'main',
    },
    profile: {
      image: '/speaker/antfu.png',
      title: 'Vue/Vite/Nuxt Core team Member',
      name: 'Anthony Fu',
      twitterId: 'antfu7',
      githubId: 'antfu',
      description:
        'Anthony is a fanatical open sourceror. DX and ecosystem for Vue, Vite and Nuxt.',
    },
  },

  // 国内スピーカー
  {
    id: 'sapphi_red',
    type: 'domestic',
    session: {
      title: '＜未定＞',
      description: '＜未定＞',
      time: 0,
      type: 'main',
    },
    profile: {
      image: '/speaker/sapphi_red.png',
      title: 'Vite Core team Member',
      name: '翠 / sapphi-red',
      twitterId: 'sapphi_red',
      githubId: 'sapphi-red',
      mastodonUrl: 'https://m.webtoo.ls/@sapphi_red',
      description: 'ユーザーフレンドリーな開発を目指して活動しています。',
    },
  },

  // LT
]
