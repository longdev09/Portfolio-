import { FaCode } from 'react-icons/fa6';
import { GoStack } from 'react-icons/go';
import manga from '../assets/project/Manga.png';
import zingMp3c from '../assets/project/zingMp3c.png';
import banKhoaHoc from '../assets/project/BanKhoaHoc.png';

import html from '../assets/skills/html.svg';
import css from '../assets/skills/css.svg';
import js from '../assets/skills/javascript.svg';
import ts from '../assets/skills/typescript.svg';
import react from '../assets/skills/reactjs.svg';
import taiwind from '../assets/skills/tailwind.svg';
import ant from '../assets/skills/ant.svg';
import ex from '../assets/skills/express.svg';
import node from '../assets/skills/nodejs.svg';
import vite from '../assets/skills/vite.svg';
import firebase from '../assets/skills/firebase.svg';
import git from '../assets/skills/git.svg';

// import nodeJs from ""

export const ListItemTab = [
    {
        id: 0,
        name: 'Projects',
        icon: <FaCode />,
    },
    {
        id: 1,
        name: 'Skills',
        icon: <GoStack />,
    },
];

export const ListProjects = [
    {
        id: 'manga',
        name: 'Manga',
        img: manga,
        describe:
            'Manga is an online comic reading website, providing basic functions such as reading comics, changing chapters, viewing reading history, logging in and registering...',
        linkDemo: '',
        linkGit: 'https://github.com/longdev09/manga_reactjs',
        aos: 'fade-up-right',
        aosDuraton: '1000',
    },
    {
        id: 'zing',
        name: 'Zing MP3',
        img: zingMp3c,
        describe:
            'Zing mp3 is an online music listening website, with basic functions, listening to music, transferring songs, arranging playlists, creating playlists.',
        linkDemo: '',
        linkGit: 'https://github.com/longdev09/zing_mp3',
        aos: 'fade-up',
        aosDuraton: '1200',
    },
    {
        id: 'E-learning',
        name: ' E-learning business website',
        img: banKhoaHoc,
        describe:
            'E-learning business website is a website selling online courses, student management, and lecturer management',
        linkDemo: '',
        linkGit: 'https://github.com/longdev09/Do-An-',
        aos: 'fade-up-left',
        aosDuraton: '1000',
    },
];

export const ListSkill = [
    {
        img: html,
        name: 'Html',
        aos: 'fade-up-right',
        duration: 1000,
    },
    {
        img: css,
        name: 'Css',
        aos: 'fade-up',
        duration: 1200,
    },
    {
        img: js,
        name: 'JavaScript',
        aos: 'fade-up-left',
        duration: 1000,
    },
    {
        img: ts,
        name: 'TypeScript',
        aos: 'fade-up-right',
        duration: 1000,
    },
    {
        img: react,
        name: 'Reactjs',
        aos: 'fade-up',
        duration: 1200,
    },
    {
        img: taiwind,
        name: 'Taikwind css',
        aos: 'fade-up-left',
        duration: 1000,
    },

    {
        img: ant,
        name: 'Ant Design',
        aos: 'fade-up-right',
        duration: 1000,
    },
    {
        img: ex,
        name: 'Express',
        aos: 'fade-up',
        duration: 1200,
    },
    {
        img: node,
        name: 'Nodejs',
        aos: 'fade-up-left',
        duration: 1000,
    },
    {
        img: firebase,
        name: 'FireBase',
        aos: 'fade-up-right',
        duration: 1000,
    },
    {
        img: vite,
        name: 'Vite',
        aos: 'fade-up',
        duration: 1200,
    },
    {
        img: git,
        name: 'Git',
        aos: 'fade-up-left',
        duration: 1000,
    },
];
