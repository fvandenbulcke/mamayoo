import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/home';
import PlayersCircleGrid from '@/archives/PlayersCircleGrid';
import PlayersCircleTranslate from '@/archives/PlayersCircleTranslate';
import PlayerCards from '@/components/players/PlayerCards';
import PlayConnectionContainer from '@/components/container/PlayConnectionContainer';
import PlayGround from '@/views/PlayGround';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/cards', // liste des cartes du joueur + bouton d'envoi
      name: 'playerCards',
      component: PlayerCards,
    },
    {
      path: '/playground', // /cards + liste des autres joueurs en cartes verticales
      component: PlayConnectionContainer,
      children: [
        {
          path: '',
          name: 'playground',
          component: PlayGround,
        },
      ],
    },
    {
      path: '/circle/grid', // jeu avec la grille pour afficher les joueurs
      name: 'playersCircleGrid',
      component: PlayersCircleGrid,
    },
    {
      path: '/circle/translate', // jeu avec la grille pour afficher les joueurs
      name: 'playersCircleTranslate',
      component: PlayersCircleTranslate,
    },
  ],
});

export default router;
