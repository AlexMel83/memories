import { defineStore } from 'pinia';
import { useNuxtApp } from '#app';
import { useLocalStorage } from '@vueuse/core';

interface SocialLink {
  id: number;
  title: string;
  src: string;
  link: string;
}

interface BookSpace {
  id: number;
  price: string;
  amount: string;
}

interface User {
  id: number;
  email: string;
  facabook_id: string;
  google_id: string;
  name: string;
  surnaame: string;
  phone: string;
  picture: string;
  role: string;
  social_login: boolean;
  isactivated: boolean;
  created_at: string;
  updated_at: string;
}

interface Advantage {
  id: number;
  name: string;
  description: string;
  icon: string;
}
export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: localStorage.getItem('access_token') || '',
    isLoading: false,
    isAuthed: false,
    isMenuOpen: false,
    userRole: '',
    userData: null,
    authUser: {} as User,
    activeTabAuthUserMenu: '',
    menuOpen: false,
    manager: {} as User | null,
    // user: null as any,
    allAdvantages: [] as Advantage[],
    currentBookSpace: {} as BookSpace,
    social: [
      { id: 1, title: 'telegram', src: '../telegram.png', link: '' },
      { id: 2, title: 'viber', src: '../viber.png', link: '' },
      { id: 3, title: 'instagram', src: '../instagram.png', link: '' },
      { id: 4, title: 'facebook', src: '../facebook.png', link: '' },
    ] as SocialLink[],
    favoriteSpaces: [] as BookSpace[],
    initialEmail: '',
    userId: useLocalStorage('userId', null),
    email: useLocalStorage('email', ''),
  }),

  actions: {
    setInitialEmail(email: string) {
      this.initialEmail = email;
    },

    setName(ob: Partial<typeof this.$state>) {
      Object.assign(this, ob);
      this.isAuthed = true;
    },

    setRole(role: string) {
      this.userRole = role;
      if (process.client) {
        localStorage.setItem('userRole', role);
      }
    },

    setAccessToken(token: string) {
      this.accessToken = token;
      if (process.client) {
        localStorage.setItem('access_token', token);
      }
    },

    async logOut() {
      const { $api } = useNuxtApp();
      try {
        const response = await $api.post('/logout');
        if (response) {
          localStorage.clear();
          this.authUser = {} as User;
          this.userRole = 'unknown';
          this.isAuthed = false;
          this.accessToken = '';
          localStorage.removeItem('access_token');
        }
      } catch (error) {
        console.log(error);
      }
    },

    getManagerData(data: User) {
      this.manager = data;
      localStorage.setItem('managerData', JSON.stringify(data));
    },

    getUserData(data: User) {
      this.authUser = data;
      this.isAuthed = true;
      if (process.client) {
        localStorage.setItem('userData', JSON.stringify(data));
      }
    },

    getAllAdvantages(data: Advantage[]) {
      this.allAdvantages = data;
    },

    setManagerData(data: User) {
      this.manager = data;
    },

    setUserData(data: User) {
      this.authUser = data;
    },

    setAllAdvantages(data: Advantage[]) {
      this.allAdvantages = data;
      if (process.client) {
        localStorage.setItem('allAdvantages', JSON.stringify(data));
      }
    },

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    addToFavorites(space: BookSpace) {
      this.favoriteSpaces.push(space);
    },

    removeFromFavorites(spaceId: number) {
      this.favoriteSpaces = this.favoriteSpaces.filter(
        (space) => space.id !== spaceId,
      );
    },
    initializeStore() {
      if (process.client) {
        this.userRole = localStorage.getItem('userRole') || '';
        const userData = localStorage.getItem('userData');
        if (userData) {
          this.userData = JSON.parse(userData);
          this.isAuthed = true;
        }
      }
    },
  },
});
